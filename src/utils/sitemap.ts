import axios from "axios";
import { legacyBlogArticles, legacyNewsArticles } from "../data/legacy/legacyContent";
import { getPreferredProgramRouteSlug, LEGACY_PROGRAM_SITEMAP_ONLY_SLUGS } from "./legacyProgramRoutes";
import { STATIC_PROGRAM_CATEGORY_PATHS, STATIC_TOP_LEVEL_PROGRAM_PATHS } from "./programCategoryRoute";
import { slugify } from "./slugify";

const runtimeEnv =
  (
    globalThis as typeof globalThis & {
      process?: { env?: Record<string, string | undefined> };
    }
  ).process?.env ?? import.meta.env;

const API_BASE_URL = runtimeEnv.VITE_API_BASE_URL || "https://webservices.srmu.ac.in:7005";
const SITEMAP_TTL_MS = 15 * 60 * 1000;

const LEGACY_STATIC_PATHS = [
  "/",
  "/about-us",
  "/contact-us",
  "/program-finder",
  "/admission-overview",
  "/how-to-apply",
  "/fee-structure",
  "/document-checklist",
  "/scholarship-scheme",
  "/admission-faqs",
  "/admission-policies",
  "/academic-calendars",
  "/policies-reports",
  "/teaching-learning-process",
  "/campus-life/academic-depository-nad-and-abc",
  "/campus-life/e-content-cell",
  "/swayam-nptel-local-chapter",
  "/iirs-isro",
  "/curriculum-design",
  "/facilities",
  "/central-library",
  "/events",
  "/clubs",
  "/convocation",
  "/transportation",
  "/hostel",
  "/green-initiative",
  "/women-empowerment",
  "/student-senate",
  "/student-corner",
  "/outreach-activations",
  "/campus-life/grievance-redressal-system",
  "/placements",
  "/placement-cell",
  "/placement-policies",
  "/all-testimonial",
  "/notable-alumni",
  "/alumni-registration",
  "/alumni-feedback",
  "/research-overview",
  "/process-and-initiatives",
  "/ph-d-notification-session-2025-26",
  "/ph-d-application-offline-mode",
  "/innovations",
  "/consultancy",
  "/publication",
  "/notice",
  "/blogs",
  "/newsletter",
  "/rti",
  "/online-admission",
  "/privacy-policy",
  "/disclaimer",
  "/terms-conditions",
  // "/mandatory-disclouser",
  "/leadership-and-governance",
  "/committees-and-cells",
  "/recognition-approvals",
  "/award-overview",
  "/iqac-overview",
  "/naac",
  "/nirf",
  "/organization-structure-plan",
  "/institutes-info",
  "/institute-of-technology",
  "/institute-of-biosciences-and-technology",
  "/institute-of-management-commerce-and-economics",
  "/institute-of-media-studies",
  "/institute-of-natural-sciences-and-humanities",
  "/institute-of-pharmaceutical-sciences1",
  "/institute-of-agricultural-sciences-and-technology",
  "/institute-of-legal-studies1",
  "/institute-of-pharmacy",
  "/institute-of-education-and-research",
  "/srmu-polytechnic1",
  "/faculty-of-civil-engineering",
  "/department-of-electrical-and-electronics-engineering",
  "/faculty-of-mechanical-engineering",
  "/institute-of-allied-health-sciences",
  "/faculty-of-biosciences",
  "/faculty-of-biotechnology",
  "/faculty-of-humanities-and-social-sciences",
  "/faculty-of-mathematical-and-statistical-sciences",
  "/faculty-of-physical-sciences",
  "/department-of-computer-science-and-engineering",
  "/department-of-computer-science-and-information-systems",
  "/faculty-of-commerce-and-economics",
  "/faculty-of-management",
  "/faculty-of-chemical-sciences",
];

const LEGACY_EVENT_SLUGS = [
  "anubhuti-2017",
  "anubhuti-2018",
  "anubhuti-2019",
  "anubhuti-2020",
  "anubhuti-2022",
  "anubhuti-2024",
  "anubhuti-2025",
  "freshers-party-harmony-2k17",
  "freshers-party-harmony-2k18",
  "freshers-party-harmony-2k19",
  "freshers-party-harmony-2k21",
  "freshers-party-harmony-2k22",
  "freshers-party-harmony-2k23",
  "ullas-2022",
  "ullas-2023",
  "dandiya-delightzzz-2k19",
  "dandiya-delightzzz-2k21",
  "dandiya-delightzzz-2k23",
  "rang-barse-2k21",
  "rang-barse-2k22",
  "rang-barse-2k23",
  "tedx-srmu",
  "tedx-srmuglobal",
  "tedx-srmuinnovatia",
  "tedx-srmulive",
  "tedx-srmuwomen",
  "tedx-srmuwomen1",
];

const LEGACY_CONFERENCE_SLUGS = [
  "first-international-literary-conference",
  "icansvme-24",
  "icmtce-20191",
  "icon-cute-2019",
  "kitaab",
  "natconbio-2019",
  "ncrtma-19",
  "ncrtma-20",
  "new-education-policy-and-quality-education-for-sustainable-future",
  "raics-18",
  "second-international-literary-conference",
  "solaris-2020",
];

const LEGACY_COMMITTEE_SLUGS = [
  "anti-discrimination-cell",
  "anti-ragging-committee",
  "digital-learning-monitoring-cell",
  "gender-sensitization-cell",
  "internal-complaints-committee",
  "minority-cell",
  "obc-cell",
  "proctorial-board",
  "sc-st-welfare-committee",
  "student-grievance-and-redressal-committee",
  "students-welfare-fund-committee",
  "unnat-bharat-cell",
];

const SITEMAP_EXCLUDED_PATHS = new Set([
  "/agriculture",
  "/after-class-12th/allied-health-sciences",
  "/after-class-12th/nutrition-dietetics",
  "/after-post-graduation/ph-d1",
  "/after-graduation/natural-sciences",
  "/artificial-intelligence",
  "/artificial-intelligence/industry-honors1",
  "/artificial-intelligence/postgraduate",
  "/artificial-intelligence/undergraduate",
  "/arts-science",
  "/blog/a-student-s-guide-to-building-a-career-with-a-bca-degree1",
  "/blog/best-biotechnology-colleges-and-universities-in-lucknow-top-options-for-2026-admissions",
  "/blog/career-opportunities-for-mba-business-analytics-graduatescareer-opportunities-for-mba-business-analytics-graduates",
  "/blog/cultivating-the-future-explore-career-opportunities-with-a-degree-in-agriculture2",
  "/blog/study-bba-in-business-analytics-at-srmu-l-t-backed-industry-focused-program1",
  "/blog/top-colleges-for-btech-in-computer-science-in-lucknow-and-nearby-cities-best-picks-for-2026",
  "/commerce-and-economics",
  "/computer-application",
  "/computer-science-engineering",
  "/disclaimer",
  "/education",
  "/food-technology",
  "/humanities",
  "/iirs-isro",
  "/industry-honors/artificial-intelligence",
  "/industry-honors/computer-application",
  "/industry-honors/computer-science-engineering",
  "/industry-honors/engineering",
  "/industry-honors/management",
  "/legal-studies-law",
  "/management",
  "/mandatory-disclouser",
  "/media-studies",
  "/microbiology",
  "/natural-sciences",
  "/news/holi-celebration",
  "/nutrition-dietetics",
  "/policies-reports",
  "/privacy-policy",
  "/program/bachelor-in-physiotherapy",
  "/social-work",
  "/swayam-nptel-local-chapter",
  "/terms-conditions",
]);

type CachedSitemap = {
  expiresAt: number;
  xml: string;
};

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

const sitemapCache = new Map<string, CachedSitemap>();

const normalizePath = (path: string) => {
  const trimmed = (path || "/").trim();

  if (!trimmed || trimmed === "/") {
    return "/";
  }

  const normalized = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return normalized.replace(/\/+$/, "") || "/";
};

const escapeXml = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

const buildLegacyProgramCategoryPaths = (programMenuData: any[]) => {
  const paths = new Set<string>();

  for (const path of STATIC_TOP_LEVEL_PROGRAM_PATHS) {
    paths.add(path);
  }

  for (const path of STATIC_PROGRAM_CATEGORY_PATHS) {
    paths.add(`/${path}`);
  }

  for (const group of programMenuData) {
    const groupSlug = normalizeRouteSegment(group?.programFlagSlug || group?.programTypeSlug || group?.programFlagName || "");

    if (!groupSlug) {
      continue;
    }

    for (const discipline of group?.disciplines || []) {
      const disciplineSlug = normalizeRouteSegment(discipline?.disciplineSlug || discipline?.disciplineName || "");

      if (disciplineSlug) {
        paths.add(`/${groupSlug}/${disciplineSlug}`);
      }
    }
  }

  return paths;
};

const normalizeRouteSegment = (value: string) =>
  String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[()]/g, "")
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const formatDate = (value: unknown) => {
  if (!value) {
    return undefined;
  }

  const parsed = new Date(String(value));

  if (Number.isNaN(parsed.getTime())) {
    return undefined;
  }

  return parsed.toISOString().slice(0, 10);
};

const fetchPrograms = async () => {
  const response = await apiClient.get("/academicProgram/programs");
  return Array.isArray(response.data) ? response.data : [];
};

const fetchBlogs = async () => {
  const response = await apiClient.get("/academicProgram/blogs");
  return Array.isArray(response.data) ? response.data : [];
};

const fetchProgramMenu = async () => {
  const response = await apiClient.get("/academicProgram/programsShowOnNavbar");
  return Array.isArray(response.data) ? response.data : [];
};

const fetchNews = async () => {
  const response = await apiClient.get("/academicProgram/events", {
    params: { eventTypeId: 1 },
  });
  return Array.isArray(response.data) ? response.data : [];
};

const collectDynamicEntries = async () => {
  const [programsResult, blogsResult, menuResult, newsResult] = await Promise.allSettled([fetchPrograms(), fetchBlogs(), fetchProgramMenu(), fetchNews()]);

  const paths = new Map<string, string | undefined>();

  const programs = programsResult.status === "fulfilled" ? programsResult.value : [];
  for (const program of programs) {
    const rawProgramSlug = String(program?.slug || "").trim() || slugify(String(program?.name || ""));
    const slug = getPreferredProgramRouteSlug(rawProgramSlug);

    if (slug) {
      paths.set(`/program/${slug}`, formatDate(program?.updatedAt || program?.lastModifiedDate));
    }
  }

  const blogs = blogsResult.status === "fulfilled" ? blogsResult.value : [];
  for (const blog of blogs) {
    const blogSlug = String(blog?.slug || "").trim() || normalizeRouteSegment(blog?.title || "");

    if (blogSlug) {
      paths.set(`/blog/${blogSlug}`, formatDate(blog?.updatedAt || blog?.postedOn));
    }
  }
  for (const blog of legacyBlogArticles) {
    paths.set(`/blog/${blog.slug}`, formatDate(blog.postedOn));
  }

  const news = newsResult.status === "fulfilled" ? newsResult.value : [];
  for (const item of news) {
    const newsSlug = normalizeRouteSegment(item?.title || item?.name || "");

    if (newsSlug) {
      paths.set(`/news/${newsSlug}`, formatDate(item?.updatedAt || item?.date || item?.eventDate || item?.createdAt));
    }
  }
  for (const item of legacyNewsArticles) {
    paths.set(`/news/${item.slug}`, formatDate(item.postedOn));
  }

  const programMenu = menuResult.status === "fulfilled" ? menuResult.value : [];
  for (const path of buildLegacyProgramCategoryPaths(programMenu)) {
    paths.set(path, undefined);
  }

  return paths;
};

const buildStaticEntries = () => {
  const paths = new Map<string, string | undefined>();

  for (const path of LEGACY_STATIC_PATHS) {
    paths.set(path, undefined);
  }

  for (const slug of LEGACY_EVENT_SLUGS) {
    paths.set(`/event/${slug}`, undefined);
  }

  for (const slug of LEGACY_CONFERENCE_SLUGS) {
    paths.set(`/conference/${slug}`, undefined);
  }

  for (const slug of LEGACY_COMMITTEE_SLUGS) {
    paths.set(`/committe/${slug}`, undefined);
  }

  paths.set("/convocation/convocation-2021", undefined);

  for (const slug of LEGACY_PROGRAM_SITEMAP_ONLY_SLUGS) {
    paths.set(`/program/${slug}`, undefined);
  }

  return paths;
};

const renderSitemapXml = (siteUrl: string, entries: Map<string, string | undefined>) => {
  const normalizedSiteUrl = siteUrl.replace(/\/+$/, "");
  const urls = [...entries.entries()]
    .map(([path, lastmod]) => {
      const loc = `${normalizedSiteUrl}${normalizePath(path)}`;
      const lastmodTag = lastmod ? `<lastmod>${escapeXml(lastmod)}</lastmod>` : "";
      return `  <url><loc>${escapeXml(loc)}</loc>${lastmodTag}</url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
};

export const buildRobotsTxt = (siteUrl: string) => `User-agent: *\nAllow: /\nDisallow: /chatbot/\n\nSitemap: ${siteUrl.replace(/\/+$/, "")}/sitemap.xml\n`;

export const buildSitemapXml = async (siteUrl: string) => {
  const cacheKey = siteUrl.replace(/\/+$/, "");
  const cached = sitemapCache.get(cacheKey);

  if (cached && cached.expiresAt > Date.now()) {
    return cached.xml;
  }

  const entries = buildStaticEntries();
  const dynamicEntries = await collectDynamicEntries().catch(() => new Map<string, string | undefined>());

  for (const [path, lastmod] of dynamicEntries.entries()) {
    entries.set(normalizePath(path), lastmod);
  }

  for (const path of SITEMAP_EXCLUDED_PATHS) {
    entries.delete(path);
  }

  const xml = renderSitemapXml(cacheKey, entries);

  sitemapCache.set(cacheKey, {
    expiresAt: Date.now() + SITEMAP_TTL_MS,
    xml,
  });

  return xml;
};
