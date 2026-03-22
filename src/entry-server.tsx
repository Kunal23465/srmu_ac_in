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
import { legacyNewsArticles } from "./data/legacy/legacyContent";
import { resolveProgramRouteSlug } from "./utils/legacyProgramRoutes";
import { slugify } from "./utils/slugify";
import { findBlogBySlug, findCommitteeCardBySlug, findConferenceBySlug, findEventCardBySlug, findNewsBySlug } from "./utils/routeMatching";
import { getProgramCategoryPathMatch, hasValidTopLevelProgramRoute, resolveTopLevelProgramRoute } from "./utils/programCategoryRoute";

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

const getRouteElementPreload = (route: { element?: { type?: { preload?: () => Promise<unknown> } } }) => {
  const preload = route.element?.type?.preload;
  return typeof preload === "function" ? preload : null;
};

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

const hasValidDynamicProgramFinderRoute = (normalizedPathname: string, programMenuData: any[]) => {
  const segments = normalizedPathname.split("/").filter(Boolean);

  if (segments.length !== 2) {
    return false;
  }

  return Boolean(getProgramCategoryPathMatch(programMenuData, segments[0], segments[1]));
};

const hasValidTopLevelProgramFinderRoute = (normalizedPathname: string) => {
  const segments = normalizedPathname.split("/").filter(Boolean);

  if (segments.length !== 1) {
    return false;
  }

  return hasValidTopLevelProgramRoute(segments[0]);
};

const hasMatchingNewsEvent = (normalizedPathname: string) => {
  const routeMatch = normalizedPathname.match(/^\/news\/([^/]+)$/);
  const newsSlug = routeMatch?.[1];

  if (!newsSlug) {
    return false;
  }

  return Boolean(findNewsBySlug([...eventsData, ...legacyNewsArticles], newsSlug));
};

const hasMatchingBlog = (normalizedPathname: string, state: RootState) => {
  const routeMatch = normalizedPathname.match(/^\/(?:blog|blogs)\/([^/]+)$/);
  const slug = routeMatch?.[1];

  if (!slug) {
    return false;
  }

  const blogs = state.getAllBlogs?.data || [];

  return Boolean(findBlogBySlug(blogs, slug));
};

const hasMatchingLegacyEvent = (normalizedPathname: string) => {
  const routeMatch = normalizedPathname.match(/^\/event\/([^/]+)$/);
  const eventSlug = routeMatch?.[1];

  return Boolean(eventSlug && findEventCardBySlug(eventSlug));
};

const hasMatchingLegacyCommittee = (normalizedPathname: string) => {
  const routeMatch = normalizedPathname.match(/^\/committe\/([^/]+)$/);
  const committeeSlug = routeMatch?.[1];

  return Boolean(committeeSlug && findCommitteeCardBySlug(committeeSlug));
};

const hasMatchingConference = (normalizedPathname: string) => {
  const routeMatch = normalizedPathname.match(/^\/(?:conference|research\/conference|research-overview\/conference)\/([^/]+)$/);
  const conferenceSlug = routeMatch?.[1];

  return Boolean(conferenceSlug && findConferenceBySlug(conferenceSlug));
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

  if (matchedLeafPath === "/:programType") {
    return hasValidTopLevelProgramFinderRoute(normalizedPathname) ? 200 : 404;
  }

  if (normalizedPathname.startsWith("/news/")) {
    return hasMatchingNewsEvent(normalizedPathname) ? 200 : 404;
  }

  if (normalizedPathname.startsWith("/blog/") || normalizedPathname.startsWith("/blogs/")) {
    return hasMatchingBlog(normalizedPathname, state) ? 200 : 404;
  }

  if (normalizedPathname.startsWith("/event/")) {
    return hasMatchingLegacyEvent(normalizedPathname) ? 200 : 404;
  }

  if (normalizedPathname.startsWith("/committe/")) {
    return hasMatchingLegacyCommittee(normalizedPathname) ? 200 : 404;
  }

  if (
    normalizedPathname.startsWith("/conference/") ||
    normalizedPathname.startsWith("/research/conference/") ||
    normalizedPathname.startsWith("/research-overview/conference/")
  ) {
    return hasMatchingConference(normalizedPathname) ? 200 : 404;
  }

  if (normalizedPathname.startsWith("/program/")) {
    const routeMatch = normalizedPathname.match(/^\/program\/([^/]+)$/);
    const requestedProgramSlug = resolveProgramRouteSlug(routeMatch?.[1] || "");

    return Boolean(state.getProgramFinder?.dataByID?.programId && state.getProgramFinder?.currentDetailsSlug === requestedProgramSlug) ? 200 : 404;
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

async function preloadMatchedRouteComponents(normalizedPathname: string) {
  const matches = matchRoutes(routes, normalizedPathname) || [];
  const preloaders = matches
    .map((match) => getRouteElementPreload(match.route as { element?: { type?: { preload?: () => Promise<unknown> } } }))
    .filter((preload): preload is () => Promise<unknown> => Boolean(preload));

  if (preloaders.length === 0) {
    return;
  }

  await Promise.allSettled(preloaders.map((preload) => preload()));
}

async function preloadProgramDetailsPageData(store: ReturnType<typeof createStore>, normalizedPathname: string, programMenuData: any[]) {
  const routeMatch = normalizedPathname.match(/^\/program\/([^/]+)$/);
  const programSlug = resolveProgramRouteSlug(routeMatch?.[1] || "");

  if (!programSlug) {
    return;
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

  if (segments.length === 1) {
    const topLevelRoute = resolveTopLevelProgramRoute(segments[0]);

    if (!topLevelRoute) {
      return;
    }

    if (topLevelRoute.kind === "programFlag") {
      await Promise.allSettled([
        store.dispatch(fetchProgramByFlag()),
        store.dispatch(fetchProgramDiscipline({ programFlagSlug: topLevelRoute.slug })),
        store.dispatch(fetchAllProgramFinder({ programFlagSlug: topLevelRoute.slug })),
      ]);
      return;
    }

    await Promise.allSettled([
      store.dispatch(fetchProgramByFlag()),
      store.dispatch(fetchProgramDiscipline()),
      store.dispatch(fetchAllProgramFinder({ programDisciplineSlug: topLevelRoute.slug })),
    ]);
    return;
  }

  const routeMatch = getProgramCategoryPathMatch(programMenuData, segments[0], segments[1]);
  const programFlag = routeMatch?.matchedProgramFlag;

  if (!programFlag) {
    return;
  }

  const filters: { programFlagId: number | string; programDisciplineId?: number | string } = {
    programFlagId: programFlag.programFlagId,
  };

  if (segments.length === 2) {
    if (!routeMatch?.matchedDiscipline) {
      return;
    }
    filters.programDisciplineId = routeMatch.matchedDiscipline.disciplineId;
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
  const routeComponentPreloadPromise = preloadMatchedRouteComponents(normalizedPathname);
  if (normalizedPathname === "/") {
    await preloadHomePageData(store);
  } else if (normalizedPathname === "/notice") {
    await store.dispatch(fetchNotice());
  } else if (normalizedPathname === "/program-finder") {
    await preloadAdmissionProgramFinderPageData(store);
  } else if (normalizedPathname === "/placements") {
    await preloadPlacementOverviewPageData(store);
  } else if (
    normalizedPathname === "/blogs" ||
    normalizedPathname.startsWith("/blogs/") ||
    normalizedPathname.startsWith("/blog/")
  ) {
    await preloadBlogsPageData(store);
  } else if (normalizedPathname.startsWith("/program/")) {
    await preloadProgramDetailsPageData(store, normalizedPathname, programMenuData);
  } else {
    await preloadDynamicProgramFinderPageData(store, normalizedPathname, programMenuData);
  }
  await routeComponentPreloadPromise;
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
  return {
    appHtml,
    preloadedState: store.getState(),
    helmet: helmetContext.helmet,
    statusCode: getStatusCode(normalizedPathname, store.getState(), programMenuData),
  };
}
