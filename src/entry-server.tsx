import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { createStore, type RootState } from "./store";
import { fetchNotice } from "./store/notice/noticeThunk";
import { fetchBanner } from "./store/home-banner/bannerThunk";
import { fetchProgramByFlag } from "./store/program-finder/program-flag/programFlagThunk";
import { fetchProgramType } from "./store/program-finder/program-type/programTypeThunk";
import { fetchProgramDiscipline } from "./store/program-finder/discipline/disciplineThunk";
import { fetchHomeEventsData } from "./store/home-events/getHomeEventsThunk";
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

const GLOBAL_LAYOUT_CACHE_TTL_MS = 5 * 60 * 1000;

type GlobalLayoutCacheEntry = {
    expiresAt: number;
    preloadedState: Partial<RootState>;
    programMenuData: any[];
};

let globalLayoutCache: GlobalLayoutCacheEntry | null = null;
let globalLayoutCachePromise: Promise<GlobalLayoutCacheEntry> | null = null;

const getGlobalLayoutCache = () => {
    if (globalLayoutCache && globalLayoutCache.expiresAt > Date.now()) {
        return globalLayoutCache;
    }

    return null;
};

async function preloadHomePageData(store: ReturnType<typeof createStore>) {
    const bannerPromise = store.dispatch(fetchBanner());
    const flagPromise = store.dispatch(fetchProgramByFlag());
    const eventsPromise = store.dispatch(fetchHomeEventsData(1));

    const programTypeAction = await store.dispatch(fetchProgramType());

    let defaultProgramTypeId: number | string | null = null;

    if (fetchProgramType.fulfilled.match(programTypeAction)) {
        const programTypes = Array.isArray(programTypeAction.payload)
            ? programTypeAction.payload
            : [];
        const defaultProgramType =
            programTypes.find((item: any) => item?.showOnHome) ?? programTypes[0];

        defaultProgramTypeId = defaultProgramType?.programTypeId ?? null;
    }

    const pendingPromises: Array<Promise<unknown>> = [
        bannerPromise,
        flagPromise,
        eventsPromise,
    ];

    if (defaultProgramTypeId) {
        pendingPromises.push(
            store.dispatch(fetchProgramDiscipline({ programTypeId: defaultProgramTypeId }))
        );
    }

    await Promise.allSettled(pendingPromises);
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
    value
        .toLowerCase()
        .trim()
        .replace(/[()]/g, "")
        .replace(/&/g, "and")
        .replace(/\./g, "-")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

async function buildGlobalLayoutCacheEntry(): Promise<GlobalLayoutCacheEntry> {
    const store = createStore();
    const [menuAction] = await Promise.all([
        store.dispatch(fetchProgramMenu()),
        store.dispatch(fetchAllActiveCareer()),
        store.dispatch(fetchAllActiveState()),
    ]);

    const programMenuData =
        fetchProgramMenu.fulfilled.match(menuAction) && Array.isArray(menuAction.payload)
            ? menuAction.payload
            : [];

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

async function preloadProgramDetailsPageData(
    store: ReturnType<typeof createStore>,
    normalizedPathname: string,
    programMenuData: any[]
) {
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
    const byNamePrograms =
        fetchAllProgramFinder.fulfilled.match(byNameAction) && Array.isArray(byNameAction.payload)
            ? byNameAction.payload
            : [];

    let matchedProgram = byNamePrograms.find(
        (item: any) => slugifyProgramName(item?.name || "") === programSlug.toLowerCase()
    );

    // Fallback to all programs when name filtering misses due punctuation/slugs.
    if (!matchedProgram) {
        const allProgramsAction = await store.dispatch(fetchAllProgramFinder());
        const allPrograms =
            fetchAllProgramFinder.fulfilled.match(allProgramsAction) &&
                Array.isArray(allProgramsAction.payload)
                ? allProgramsAction.payload
                : [];
        matchedProgram = allPrograms.find(
            (item: any) => slugifyProgramName(item?.name || "") === programSlug.toLowerCase()
        );
    }

    if (!Number.isFinite(numericProgramId)) {
        numericProgramId = Number(matchedProgram?.programId);
    }

    if (!Number.isFinite(numericProgramId) || numericProgramId <= 0) {
        return;
    }

    store.dispatch(setProgramId(String(numericProgramId)));

    await Promise.allSettled([
        store.dispatch(fetchProgramFinderByID(numericProgramId)),
        store.dispatch(fetchProgramFeesByProgramId(numericProgramId)),
        store.dispatch(fetchWhySrmuSectionById({ programId: numericProgramId })),
        store.dispatch(getCounterById(numericProgramId)),
        store.dispatch(fetchProgramHeighlightById(numericProgramId)),
        store.dispatch(fetchRecruiterById({ programId: numericProgramId })),
        store.dispatch(fetchWhySrmuLogoById({ programId: numericProgramId })),
    ]);
}

async function preloadAdmissionProgramFinderPageData(store: ReturnType<typeof createStore>) {
    await Promise.allSettled([
        store.dispatch(fetchProgramType()),
        store.dispatch(fetchProgramDiscipline()),
        store.dispatch(fetchAllProgramFinder()),
    ]);
}

async function preloadDynamicProgramFinderPageData(
    store: ReturnType<typeof createStore>,
    normalizedPathname: string,
    programMenuData: any[]
) {
    const segments = normalizedPathname.split("/").filter(Boolean);
    if (segments.length < 1 || segments.length > 2) {
        return;
    }

    const programFlag = programMenuData.find(
        (item: any) => slugifyForMenu(item?.programFlagName || "") === segments[0]
    );

    if (!programFlag) {
        return;
    }

    const filters: { programFlagId: number | string; programDisciplineId?: number | string } = {
        programFlagId: programFlag.programFlagId,
    };

    if (segments.length === 2) {
        const discipline = (programFlag.disciplines || []).find(
            (item: any) => slugifyForMenu(item?.disciplineName || "") === segments[1]
        );
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
}

export async function render(url: string) {
    const renderStartedAt = Date.now();
    const helmetContext: any = {};

    // Normalize URL to match routes (strip query string and trailing slash)
    const normalizedPathname = new URL(url, "http://localhost").pathname.replace(/\/+$/, "") || "/";
    const globalLayoutStartedAt = Date.now();
    const globalLayoutEntry = await getGlobalLayoutCacheEntry();
    const store = createStore(globalLayoutEntry.preloadedState);
    const programMenuData = globalLayoutEntry.programMenuData;
    const globalLayoutDuration = Date.now() - globalLayoutStartedAt;

    // Preload route-specific data for SSR
    const routePreloadStartedAt = Date.now();
    if (normalizedPathname === "/") {
        await preloadHomePageData(store);
    } else if (normalizedPathname === "/notice") {
        await store.dispatch(fetchNotice());
    } else if (normalizedPathname === "/admission/program-finder") {
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
        </HelmetProvider>
    );
    const renderToStringDuration = Date.now() - renderToStringStartedAt;
    const totalDuration = Date.now() - renderStartedAt;

    console.info(
        `[SSR] ${normalizedPathname} total=${totalDuration}ms global=${globalLayoutDuration}ms route=${routePreloadDuration}ms render=${renderToStringDuration}ms`
    );

    return { appHtml, preloadedState: store.getState() };
}
