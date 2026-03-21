import ReactDOMServer from "react-dom/server";
import { matchRoutes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { createStore, type RootState } from "./store";
import { fetchNotice } from "./store/notice/noticeThunk";
import { fetchBanner } from "./store/home-banner/bannerThunk";
import { fetchProgramByFlag } from "./store/program-finder/program-flag/programFlagThunk";
import { fetchProgramType } from "./store/program-finder/program-type/programTypeThunk";
import { fetchProgramDiscipline } from "./store/program-finder/discipline/disciplineThunk";
import { fetchAllProgramFinder, fetchProgramFinderByID } from "./store/program-finder/programFinderThunk";
import { fetchProgramFeesByProgramId } from "./store/program-finder/program-fees/programFeesThunk";
import { fetchWhySrmuSectionById } from "./store/program-finder/why-srmu/whySrmuSectionThunk";
import { getCounterById } from "./store/program-finder/counter/getCounterThunk";
import { fetchProgramHeighlightById } from "./store/program-finder/program-heighlight/programHeighlightThunk";
import { fetchRecruiterById } from "./store/recruiter/recruiterThunk";
import { fetchWhySrmuLogoById } from "./store/why-srmu/whySrmuLogoThunk";
import { setProgramId } from "./store/program-finder/program/programSlice";
import { fetchProgramMenu } from "./store/header/programMenuThunk";
import { fetchBlogs } from "./store/blogs/blogsThunk";
import { fetchPlacementRecordTabData } from "./store/placement/placement-record/placementRecordTabDataThunk";
import { fetchAllActiveCareer } from "./store/student-enquiry/career/careerThunk";
import { fetchAllActiveState } from "./store/student-enquiry/state/stateThunk";
import App from "./App";
import "./index.css";
import { fetchPlacementDriveTabData } from "./store/placement/placement-drive/placementDriveTabDataThunk";
import { routes } from "./utils/AllRoutesNew";
import { eventsData } from "./data/home/EventsData";

const GLOBAL_LAYOUT_CACHE_TTL_MS = 5 * 60 * 1000;
const HOME_PAGE_CACHE_TTL_MS = 5 * 60 * 1000;

type GlobalLayoutCacheEntry = {
  expiresAt: number;
  preloadedState: Partial<RootState>;
  programMenuData: any[];
};

type HomePageCacheEntry = {
  expiresAt: number;
  preloadedState: Partial<RootState>;
};

let globalLayoutCache: GlobalLayoutCacheEntry | null = null;
let globalLayoutCachePromise: Promise<GlobalLayoutCacheEntry> | null = null;
let homePageCache: HomePageCacheEntry | null = null;
let homePageCachePromise: Promise<HomePageCacheEntry> | null = null;

const getGlobalLayoutCache = () => {
  if (globalLayoutCache && globalLayoutCache.expiresAt > Date.now()) {
    return globalLayoutCache;
  }

  return null;
};

const getHomePageCache = () => {
  if (homePageCache && homePageCache.expiresAt > Date.now()) {
    return homePageCache;
  }

  return null;
};

const pickHomePageState = (state: RootState): Partial<RootState> => ({
  getbanner: structuredClone(state.getbanner),
  getProgramByFlag: structuredClone(state.getProgramByFlag),
});

async function preloadHomePageData(store: ReturnType<typeof createStore>) {
  const state = store.getState();
  const pendingPromises: Array<Promise<unknown>> = [];

  if (state.getbanner.data.length === 0 && !state.getbanner.loading) {
    pendingPromises.push(store.dispatch(fetchBanner()));
  }

  if (state.getProgramByFlag.data.length === 0 && !state.getProgramByFlag.loading) {
    pendingPromises.push(store.dispatch(fetchProgramByFlag()));
  }

  if (pendingPromises.length > 0) {
    await Promise.allSettled(pendingPromises);
  }
}

const slugifyProgramName = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[()]/g, "")
    .replace(/&/g, "")
    .replace(/\./g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/-in-/g, "-")
    .replace(/^b-c-a\b/, "bca")
    .replace(/-with-.*/, "")
    .replace(/^-|-$/g, "");

const slugifyForMenu = (value: string) =>
  value.toLowerCase().trim().replace(/[()]/g, "").replace(/&/g, "and").replace(/\./g, "-").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");

const slugifyEventTitle = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[()]/g, "")
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const hasValidDynamicProgramFinderRoute = (normalizedPathname: string, programMenuData: any[]) => {
  const segments = normalizedPathname.split("/").filter(Boolean);

  if (segments.length !== 2) {
    return false;
  }

  const [programTypeSlug, disciplineSlug] = segments;
  const matchedProgramFlag = programMenuData.find((item: any) => slugifyForMenu(item?.programFlagName || "") === programTypeSlug);

  if (!matchedProgramFlag) {
    return false;
  }

  return (matchedProgramFlag?.disciplines || []).some(
    (discipline: any) => slugifyForMenu(discipline?.disciplineName || "") === disciplineSlug
  );
};

const hasMatchingNewsEvent = (normalizedPathname: string) => {
  const routeMatch = normalizedPathname.match(/^\/news\/([^/]+)$/);
  const newsSlug = routeMatch?.[1];

  if (!newsSlug) {
    return false;
  }

  return eventsData.some((item: any) => slugifyEventTitle(item?.title || item?.name || "") === newsSlug);
};

const hasMatchingBlog = (normalizedPathname: string, state: RootState) => {
  const routeMatch = normalizedPathname.match(/^\/blogs\/([^/]+)$/);
  const encodedTitle = routeMatch?.[1];

  if (!encodedTitle) {
    return false;
  }

  const decodedTitle = decodeURIComponent(encodedTitle).replace(/_/g, " ").trim().toLowerCase();
  const blogs = state.getAllBlogs?.data || [];

  return blogs.some((item: any) => item?.title?.trim().toLowerCase() === decodedTitle);
};

const getStatusCode = (normalizedPathname: string, state: RootState, programMenuData: any[]) => {
  const matches = matchRoutes(routes, normalizedPathname);
  const matchedLeafPath = matches?.at(-1)?.route?.path;

  if (!matches || matchedLeafPath === "/*") {
    return 404;
  }

  if (matchedLeafPath === "/:programType/:item") {
    return hasValidDynamicProgramFinderRoute(normalizedPathname, programMenuData) ? 200 : 404;
  }

  if (normalizedPathname.startsWith("/news/")) {
    return hasMatchingNewsEvent(normalizedPathname) ? 200 : 404;
  }

  if (normalizedPathname.startsWith("/blogs/")) {
    return hasMatchingBlog(normalizedPathname, state) ? 200 : 404;
  }

  return 200;
};

async function buildGlobalLayoutCacheEntry(): Promise<GlobalLayoutCacheEntry> {
  const store = createStore();
  const [menuAction] = await Promise.all([store.dispatch(fetchProgramMenu()), store.dispatch(fetchAllActiveCareer()), store.dispatch(fetchAllActiveState())]);

  const programMenuData = fetchProgramMenu.fulfilled.match(menuAction) && Array.isArray(menuAction.payload) ? menuAction.payload : [];

  const cacheEntry: GlobalLayoutCacheEntry = {
    expiresAt: Date.now() + GLOBAL_LAYOUT_CACHE_TTL_MS,
    preloadedState: structuredClone(store.getState()),
    programMenuData,
  };

  globalLayoutCache = cacheEntry;
  return cacheEntry;
}

async function buildHomePageCacheEntry(): Promise<HomePageCacheEntry> {
  const store = createStore();
  await Promise.allSettled([store.dispatch(fetchBanner()), store.dispatch(fetchProgramByFlag())]);

  const cacheEntry: HomePageCacheEntry = {
    expiresAt: Date.now() + HOME_PAGE_CACHE_TTL_MS,
    preloadedState: pickHomePageState(store.getState()),
  };

  homePageCache = cacheEntry;
  return cacheEntry;
}

async function getGlobalLayoutCacheEntry() {
  const cachedEntry = getGlobalLayoutCache();

  if (cachedEntry) {
    return cachedEntry;
  }

  if (!globalLayoutCachePromise) {
    globalLayoutCachePromise = buildGlobalLayoutCacheEntry().finally(() => {
      globalLayoutCachePromise = null;
    });
  }

  return globalLayoutCachePromise;
}

async function getHomePageCacheEntry() {
  const cachedEntry = getHomePageCache();

  if (cachedEntry) {
    return cachedEntry;
  }

  if (!homePageCachePromise) {
    homePageCachePromise = buildHomePageCacheEntry().finally(() => {
      homePageCachePromise = null;
    });
  }

  return homePageCachePromise;
}

async function preloadProgramDetailsPageData(store: ReturnType<typeof createStore>, normalizedPathname: string, programMenuData: any[]) {
  const routeMatch = normalizedPathname.match(/^\/program\/([^/]+)$/);
  const programSlug = routeMatch?.[1];

  if (!programSlug) {
    return;
  }

  let numericProgramId = Number.NaN;

  // First try matching from preloaded navbar menu programs by slug.
  const menuMatchedProgram = (programMenuData || [])
    .flatMap((flag: any) => flag?.programs || [])
    .find((program: any) => slugifyProgramName(program?.programName || "") === programSlug.toLowerCase());

  if (menuMatchedProgram?.programId) {
    numericProgramId = Number(menuMatchedProgram.programId);
  }

  const decodedName = decodeURIComponent(programSlug).replace(/-/g, " ");
  const byNameAction = await store.dispatch(fetchAllProgramFinder({ name: decodedName }));
  const byNamePrograms = fetchAllProgramFinder.fulfilled.match(byNameAction) && Array.isArray(byNameAction.payload) ? byNameAction.payload : [];

  let matchedProgram = byNamePrograms.find((item: any) => slugifyProgramName(item?.name || "") === programSlug.toLowerCase());

  // Fallback to all programs when name filtering misses due punctuation/slugs.
  if (!matchedProgram) {
    const allProgramsAction = await store.dispatch(fetchAllProgramFinder());
    const allPrograms = fetchAllProgramFinder.fulfilled.match(allProgramsAction) && Array.isArray(allProgramsAction.payload) ? allProgramsAction.payload : [];
    matchedProgram = allPrograms.find((item: any) => slugifyProgramName(item?.name || "") === programSlug.toLowerCase());
  }

  if (!Number.isFinite(numericProgramId)) {
    numericProgramId = Number(matchedProgram?.programId);
  }

  if (Number.isFinite(numericProgramId) && numericProgramId > 0) {
    store.dispatch(setProgramId(String(numericProgramId)));
  }

  await Promise.allSettled([
    store.dispatch(fetchProgramFinderByID(programSlug)),
    store.dispatch(fetchProgramFeesByProgramId(programSlug)),
    store.dispatch(fetchWhySrmuSectionById({ slug: programSlug })),
    store.dispatch(getCounterById({ slug: programSlug })),
    store.dispatch(fetchProgramHeighlightById(programSlug)),
    store.dispatch(fetchRecruiterById({ slug: programSlug })),
    store.dispatch(fetchWhySrmuLogoById({ slug: programSlug })),
  ]);
}

async function preloadAdmissionProgramFinderPageData(store: ReturnType<typeof createStore>) {
  await Promise.allSettled([store.dispatch(fetchProgramType()), store.dispatch(fetchProgramDiscipline()), store.dispatch(fetchAllProgramFinder())]);
}

async function preloadDynamicProgramFinderPageData(store: ReturnType<typeof createStore>, normalizedPathname: string, programMenuData: any[]) {
  const segments = normalizedPathname.split("/").filter(Boolean);
  if (segments.length < 1 || segments.length > 2) {
    return;
  }

  const programFlag = programMenuData.find((item: any) => slugifyForMenu(item?.programFlagName || "") === segments[0]);

  if (!programFlag) {
    return;
  }

  const filters: { programFlagId: number | string; programDisciplineId?: number | string } = {
    programFlagId: programFlag.programFlagId,
  };

  if (segments.length === 2) {
    const discipline = (programFlag.disciplines || []).find((item: any) => slugifyForMenu(item?.disciplineName || "") === segments[1]);
    if (!discipline) {
      return;
    }
    filters.programDisciplineId = discipline.disciplineId;
  }

  await Promise.allSettled([
    store.dispatch(fetchProgramByFlag()),
    store.dispatch(fetchProgramDiscipline({ programFlagId: filters.programFlagId })),
    store.dispatch(fetchAllProgramFinder(filters)),
  ]);
}

async function preloadBlogsPageData(store: ReturnType<typeof createStore>) {
  await store.dispatch(fetchBlogs());
}

async function preloadPlacementOverviewPageData(store: ReturnType<typeof createStore>) {
  await store.dispatch(fetchPlacementRecordTabData());
  await store.dispatch(fetchPlacementDriveTabData());
  await store.dispatch(fetchPlacementRecordTabData());
}


export async function render(url: string) {
  const renderStartedAt = Date.now();
  const helmetContext: any = {};

  // Normalize URL to match routes (strip query string and trailing slash)
  const normalizedPathname = new URL(url, "http://localhost").pathname.replace(/\/+$/, "") || "/";
  const globalLayoutStartedAt = Date.now();
  const [globalLayoutEntry, homePageEntry] = await Promise.all([
    getGlobalLayoutCacheEntry(),
    normalizedPathname === "/" ? getHomePageCacheEntry() : Promise.resolve(null),
  ]);
  const store = createStore({
    ...globalLayoutEntry.preloadedState,
    ...(homePageEntry?.preloadedState || {}),
  });
  const programMenuData = globalLayoutEntry.programMenuData;
  const globalLayoutDuration = Date.now() - globalLayoutStartedAt;

  // Preload route-specific data for SSR
  const routePreloadStartedAt = Date.now();
  if (normalizedPathname === "/") {
    await preloadHomePageData(store);
  } else if (normalizedPathname === "/notice") {
    await store.dispatch(fetchNotice());
  } else if (normalizedPathname === "/program-finder") {
    await preloadAdmissionProgramFinderPageData(store);
  } else if (normalizedPathname === "/placements") {
    await preloadPlacementOverviewPageData(store);
  } else if (normalizedPathname === "/blogs" || normalizedPathname.startsWith("/blogs/")) {
    await preloadBlogsPageData(store);
  } else if (normalizedPathname.startsWith("/program/")) {
    await preloadProgramDetailsPageData(store, normalizedPathname, programMenuData);
  } else {
    await preloadDynamicProgramFinderPageData(store, normalizedPathname, programMenuData);
  }
  const routePreloadDuration = Date.now() - routePreloadStartedAt;

  const renderToStringStartedAt = Date.now();
  const appHtml = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </HelmetProvider>,
  );
  const renderToStringDuration = Date.now() - renderToStringStartedAt;
  const totalDuration = Date.now() - renderStartedAt;

  console.info(`[SSR] ${normalizedPathname} total=${totalDuration}ms global=${globalLayoutDuration}ms route=${routePreloadDuration}ms render=${renderToStringDuration}ms`);

  return {
    appHtml,
    preloadedState: store.getState(),
    helmet: helmetContext.helmet,
    statusCode: getStatusCode(normalizedPathname, store.getState(), programMenuData),
  };
}
