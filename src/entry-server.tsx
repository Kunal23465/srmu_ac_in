import ReactDOMServer from "react-dom/server";
import { matchRoutes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { createStore, type RootState } from "./store";
import { fetchNotice } from "./store/notice/noticeThunk";
import { fetchProgramFlags } from "./store/program-finder/program-flag/programFlagThunk";
import { fetchProgramType } from "./store/program-finder/program-type/programTypeThunk";
import { fetchProgramDiscipline, fetchProgramDisciplines } from "./store/program-finder/discipline/disciplineThunk";
import { fetchAllProgramFinder, fetchProgramFinderByID } from "./store/program-finder/programFinderThunk";
import { fetchProgramFeesByProgramId } from "./store/program-finder/program-fees/programFeesThunk";
import { fetchWhySrmuSectionById } from "./store/program-finder/why-srmu/whySrmuSectionThunk";
import { getCounterById } from "./store/program-finder/counter/getCounterThunk";
import { fetchProgramHeighlightById } from "./store/program-finder/program-heighlight/programHeighlightThunk";
import { fetchRecruiterById } from "./store/recruiter/recruiterThunk";
import { fetchWhySrmuLogoById } from "./store/why-srmu/whySrmuLogoThunk";
import { fetchProgramMenu } from "./store/header/programMenuThunk";
import { fetchBlogs } from "./store/blogs/blogsThunk";
import { fetchPlacementRecordTabData } from "./store/placement/placement-record/placementRecordTabDataThunk";
import App from "./App";
import "./index.css";
import { fetchPlacementDriveTabData } from "./store/placement/placement-drive/placementDriveTabDataThunk";
import { routes } from "./utils/AllRoutesNew";
import { eventsData } from "./data/home/EventsData";
import { legacyNewsArticles } from "./data/legacy/legacyContent";
import { resolveProgramRouteSlug } from "./utils/legacyProgramRoutes";
import { fetchProgramTypeIntroByUrl } from "./store/program-type-intro/ProgramTypeIntroThunk";
import { findBlogBySlug, findCommitteeCardBySlug, findConferenceBySlug, findEventCardBySlug, findNewsBySlug } from "./utils/routeMatching";
import { getProgramCategoryPathMatch, hasValidTopLevelProgramRoute, resolveTopLevelProgramRoute } from "./utils/programCategoryRoute";
import newHomeHeroPosterMobile from "./assets/new-home/video-banner-640.avif";
import newHomeHeroPosterTablet from "./assets/new-home/video-banner-960.avif";
import newHomeHeroPoster from "./assets/new-home/video-banner.avif";

const GLOBAL_LAYOUT_CACHE_TTL_MS = 5 * 60 * 1000;

type GlobalLayoutCacheEntry = {
  expiresAt: number;
  preloadedState: Partial<RootState>;
  programMenuData: any[];
};

let globalLayoutCache: GlobalLayoutCacheEntry | null = null;
let globalLayoutCachePromise: Promise<GlobalLayoutCacheEntry> | null = null;

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

const escapeHtmlAttribute = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

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
  const matchedLeafPath = matches && matches.length > 0 ? matches[matches.length - 1]?.route?.path : undefined;

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
  const menuAction = await store.dispatch(fetchProgramMenu());

  const programMenuData = fetchProgramMenu.fulfilled.match(menuAction) && Array.isArray(menuAction.payload) ? menuAction.payload : [];

  const cacheEntry: GlobalLayoutCacheEntry = {
    expiresAt: Date.now() + GLOBAL_LAYOUT_CACHE_TTL_MS,
    preloadedState: structuredClone(store.getState()),
    programMenuData,
  };

  globalLayoutCache = cacheEntry;
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

async function preloadProgramDetailsPageData(store: ReturnType<typeof createStore>, normalizedPathname: string) {
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
  await Promise.allSettled([store.dispatch(fetchProgramType()), store.dispatch(fetchProgramDisciplines()), store.dispatch(fetchAllProgramFinder())]);
}

async function preloadDynamicProgramFinderPageData(store: ReturnType<typeof createStore>, normalizedPathname: string, programMenuData: any[]) {
  const segments = normalizedPathname.split("/").filter(Boolean);
  if (segments.length < 1 || segments.length > 2) {
    return;
  }

  const introUrl = segments.join("/");

  if (segments.length === 1) {
    const topLevelRoute = resolveTopLevelProgramRoute(segments[0]);

    if (!topLevelRoute) {
      return;
    }

    if (topLevelRoute.kind === "programFlag") {
      await Promise.allSettled([
        store.dispatch(fetchProgramFlags()),
        store.dispatch(fetchProgramDiscipline({ programFlagSlug: topLevelRoute.slug })),
        store.dispatch(fetchAllProgramFinder({ programFlagSlug: topLevelRoute.slug })),
        store.dispatch(fetchProgramTypeIntroByUrl(introUrl)),
      ]);
      return;
    }

    await Promise.allSettled([
      store.dispatch(fetchProgramFlags()),
      store.dispatch(fetchProgramDisciplines()),
      store.dispatch(fetchAllProgramFinder({ programDisciplineSlug: topLevelRoute.slug })),
      store.dispatch(fetchProgramTypeIntroByUrl(introUrl)),
    ]);
    return;
  }

  const routeMatch = getProgramCategoryPathMatch(programMenuData, segments[0], segments[1]);
  const programFlag = routeMatch?.matchedProgramFlag;
  const programFlagSlug = routeMatch?.programFlagSlug;
  const programDisciplineSlug = routeMatch?.disciplineSlug;

  if (!programFlag || !programFlagSlug) {
    return;
  }

  const filters: {
    programFlagSlug: string;
    programDisciplineSlug?: string;
  } = {
    programFlagSlug,
  };

  if (segments.length === 2) {
    if (!routeMatch?.matchedDiscipline || !programDisciplineSlug) {
      return;
    }
    filters.programDisciplineSlug = programDisciplineSlug;
  }

  await Promise.allSettled([
    store.dispatch(fetchProgramFlags()),
    store.dispatch(fetchProgramDiscipline({ programFlagSlug })),
    store.dispatch(fetchAllProgramFinder(filters)),
    store.dispatch(fetchProgramTypeIntroByUrl(introUrl)),
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

function buildHomePagePreloadLinks(normalizedPathname: string) {
  if (normalizedPathname === "/" || normalizedPathname === "/new-home") {
    const srcSet = `${newHomeHeroPosterMobile} 640w, ${newHomeHeroPosterTablet} 960w, ${newHomeHeroPoster} 1348w`;
    return `<link rel="preload" as="image" href="${escapeHtmlAttribute(newHomeHeroPosterMobile)}" imagesrcset="${escapeHtmlAttribute(srcSet)}" imagesizes="100vw" type="image/avif" fetchpriority="high" />`;
  }

  return "";
}


export async function render(url: string) {
  const helmetContext: any = {};

  // Normalize URL to match routes (strip query string and trailing slash)
  const normalizedPathname = new URL(url, "http://localhost").pathname.replace(/\/+$/, "") || "/";
  const globalLayoutEntry = await getGlobalLayoutCacheEntry();
  const store = createStore({
    ...globalLayoutEntry.preloadedState,
  });
  const programMenuData = globalLayoutEntry.programMenuData;

  // Preload route-specific data for SSR
  const routeComponentPreloadPromise = preloadMatchedRouteComponents(normalizedPathname);
  if (normalizedPathname === "/notice") {
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
    await preloadProgramDetailsPageData(store, normalizedPathname);
  } else {
    await preloadDynamicProgramFinderPageData(store, normalizedPathname, programMenuData);
  }
  await routeComponentPreloadPromise;

  const appHtml = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <Provider store={store}>
        <StaticRouter
          location={url}
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <App />
        </StaticRouter>
      </Provider>
    </HelmetProvider>,
  );

  const headPreloadLinks = buildHomePagePreloadLinks(normalizedPathname);
  return {
    appHtml,
    preloadedState: store.getState(),
    helmet: helmetContext.helmet,
    headPreloadLinks,
    statusCode: getStatusCode(normalizedPathname, store.getState(), programMenuData),
  };
}
