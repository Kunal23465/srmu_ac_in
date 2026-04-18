import siteLogo from "../assets/images/srmu-lo1-050324113149.svg";
import { resolveProgramCategoryParams, resolveTopLevelProgramRoute } from "./programCategoryRoute";

const rawSiteUrl = import.meta.env.VITE_SITE_URL || "https://srmu.ac.in";

export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");
export const SITE_NAME = "Shri Ramswaroop Memorial University";
export const DEFAULT_TITLE = "Best University in Lucknow | Shri Ramswaroop Memorial University (SRMU)";
export const DEFAULT_DESCRIPTION =
  "Study at Shri Ramswaroop Memorial University (SRMU), a leading private university in Lucknow offering BTech, MBA, BBA, BCA and more.";
export const DEFAULT_SOCIAL_IMAGE = /^https?:\/\//i.test(siteLogo)
  ? siteLogo
  : `${SITE_URL}${siteLogo.startsWith("/") ? siteLogo : `/${siteLogo}`}`;

const PAGE_LABELS: Record<string, string> = {
  "/": SITE_NAME,
  "/blogs": "Blogs",
  "/contact-us": "Contact Us",
  "/privacy-policy": "Privacy Policy",
  "/disclaimer": "Disclaimer",
  "/terms-conditions": "Terms and Conditions",
  "/mandatory-disclouser": "Mandatory Disclosure",
  "/placements": "Placements",
  "/placement-cell": "Placement Cell",
  "/phd-offline-application": "PhD Offline Application",
  "/rti": "RTI",
};

export const normalizePath = (pathname = "/") => {
  const normalized = pathname.replace(/\/+$/, "");
  return normalized || "/";
};

export const humanizeSlug = (value = "") =>
  value
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();

export const buildCanonicalUrl = (pathname = "/") => `${SITE_URL}${normalizePath(pathname)}`;

export const stripHtml = (value = "") => value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

export const toAbsoluteUrl = (value?: string | null) => {
  if (!value) {
    return undefined;
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  if (value.startsWith("/")) {
    return `${SITE_URL}${value}`;
  }

  return undefined;
};

export const getPageLabel = (pathname = "/") => {
  const normalizedPath = normalizePath(pathname);

  if (PAGE_LABELS[normalizedPath]) {
    return PAGE_LABELS[normalizedPath];
  }

  const segments = normalizedPath.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1] || "";
  return humanizeSlug(lastSegment) || SITE_NAME;
};

export const getDefaultSeo = (pathname = "/") => {
  const normalizedPath = normalizePath(pathname);

  if (normalizedPath === "/") {
    return {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    };
  }

  const label = getPageLabel(normalizedPath);

  return {
    title: `${label} | ${SITE_NAME}, Lucknow`,
    description: `Explore ${label} at ${SITE_NAME}, Lucknow. Find official information, programs, admissions updates, campus details, and student resources.`,
  };
};

const PROGRAM_FINDER_LEVEL_LABELS: Record<string, string> = {
  "after-class-10th": "diploma",
  "after-class-12th": "undergraduate",
  "after-graduation": "postgraduate",
  "after-post-graduation": "doctoral",
  "after-polytechnic": "lateral entry",
  "industry-honors": "industry honors",
  undergraduate: "undergraduate",
  postgraduate: "postgraduate",
  integrated: "integrated",
  "polytechnic-diploma": "diploma",
  "industry-honors1": "industry honors",
  "ph-d": "doctoral",
  "ph-d1": "doctoral",
};

const getProgramFinderLevelLabel = (slug = "") => PROGRAM_FINDER_LEVEL_LABELS[slug] || humanizeSlug(slug);

export const getProgramFinderSeo = (pathname = "/") => {
  const normalizedPath = normalizePath(pathname);
  const segments = normalizedPath.split("/").filter(Boolean);

  if (segments.length === 1) {
    const topLevelRoute = resolveTopLevelProgramRoute(segments[0]);

    if (!topLevelRoute) {
      return getDefaultSeo(normalizedPath);
    }

    if (topLevelRoute.kind === "programFlag") {
      const levelLabel = getProgramFinderLevelLabel(topLevelRoute.slug);
      return {
        title: `${humanizeSlug(segments[0])} Programs | ${SITE_NAME}, Lucknow`,
        description: `Explore ${levelLabel} programs at ${SITE_NAME}, Lucknow. Compare courses, eligibility, fees, admissions, and career opportunities across disciplines.`,
      };
    }

    const disciplineLabel = humanizeSlug(topLevelRoute.slug);
    return {
      title: `${disciplineLabel} Programs | ${SITE_NAME}, Lucknow`,
      description: `Explore ${disciplineLabel} programs at ${SITE_NAME}, Lucknow. Compare course options, eligibility, fees, admissions, and career pathways.`,
    };
  }

  if (segments.length === 2) {
    const { programFlagSlug, disciplineSlug } = resolveProgramCategoryParams(segments[0], segments[1]);

    if (!programFlagSlug || !disciplineSlug) {
      return getDefaultSeo(normalizedPath);
    }

    const levelLabel = getProgramFinderLevelLabel(programFlagSlug);
    const disciplineLabel = humanizeSlug(disciplineSlug);

    return {
      title: `${disciplineLabel} ${humanizeSlug(levelLabel)} Programs | ${SITE_NAME}, Lucknow`,
      description: `Explore ${levelLabel} ${disciplineLabel} programs at ${SITE_NAME}, Lucknow. Check eligibility, fees, curriculum, admissions, and career opportunities.`,
    };
  }

  return getDefaultSeo(normalizedPath);
};

export const buildSiteSchema = (pathname = "/") => {
  const normalizedPath = normalizePath(pathname);
  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/blogs?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];

  if (normalizedPath !== "/") {
    const segments = normalizedPath.split("/").filter(Boolean);
    const itemListElement = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...segments.map((segment, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: humanizeSlug(segment),
        item: `${SITE_URL}/${segments.slice(0, index + 1).join("/")}`,
      })),
    ];

    graph.push({
      "@type": "BreadcrumbList",
      itemListElement,
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};
