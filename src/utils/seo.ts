import siteLogo from "../assets/images/srmu-lo1-050324113149.svg";
import { resolveProgramCategoryParams, resolveTopLevelProgramRoute } from "./programCategoryRoute";

const getEnvVar = (key: string, fallback: string) => {
  const g = globalThis as Record<string, any>;
  if (g.process && g.process.env && g.process.env[key]) {
    return g.process.env[key];
  }
  try {
    if (typeof import.meta !== "undefined" && (import.meta as any).env && (import.meta as any).env[key]) {
      return (import.meta as any).env[key];
    }
  } catch {
    // ignore
  }
  return fallback;
};

const rawSiteUrl = getEnvVar("VITE_SITE_URL", "https://srmu.ac.in");

export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");
export const SITE_NAME = "Shri Ramswaroop Memorial University";
export const SITE_NAME_SHORT = "SRMU Lucknow";
export const DEFAULT_TITLE = "Best University in Lucknow | Shri Ramswaroop Memorial University (SRMU)";
export const DEFAULT_DESCRIPTION = "Study at Shri Ramswaroop Memorial University (SRMU), a leading private university in Lucknow offering BTech, MBA, BBA, BCA and more.";
export const DEFAULT_SOCIAL_IMAGE = /^https?:\/\//i.test(siteLogo) ? siteLogo : `${SITE_URL}${siteLogo.startsWith("/") ? siteLogo : `/${siteLogo}`}`;

const PAGE_LABELS: Record<string, string> = {
  "/": SITE_NAME_SHORT,
  "/blogs": "Blogs & Articles",
  "/contact-us": "Contact Us",
  "/privacy-policy": "Privacy Policy",
  "/disclaimer": "Disclaimer",
  "/terms-conditions": "Terms & Conditions",
  "/mandatory-disclouser": "Mandatory Disclosure",
  "/placements": "Placements Overview",
  "/placement-cell": "Placement Cell",
  "/phd-offline-application": "PhD Offline Application",
  "/rti": "Right to Information (RTI)",
  "/e-content-development-cell": "E-Content Development Cell",
  "/campus-life/e-content-cell": "Campus Life E-Content Cell",
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

export const stripHtml = (value = "") =>
  value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const trimTitleAtWordBoundary = (value: string, maxLength: number) => {
  if (value.length <= maxLength) {
    return value;
  }

  const truncated = value.slice(0, Math.max(0, maxLength - 1));
  const safeCutoff = truncated.lastIndexOf(" ");

  return `${(safeCutoff > 20 ? truncated.slice(0, safeCutoff) : truncated).trim()}...`;
};

// export const normalizeSeoTitle = (value = "") => {
//   const rawTitle = String(value || "")
//     .replace(/\s+/g, " ")
//     .trim();

//   if (!rawTitle) {
//     return rawTitle;
//   }

//   let normalizedTitle = rawTitle
//     .replace(/\|\s*Shri Ramswaroop Memorial University,\s*Lucknow$/i, `| ${SITE_NAME_SHORT}`)
//     .replace(/\|\s*Shri Ramswaroop Memorial University\s*\(SRMU\)$/i, `| ${SITE_NAME_SHORT}`)
//     .replace(/\|\s*Shri Ramswaroop Memorial University$/i, `| ${SITE_NAME_SHORT}`)
//     .replace(/\bat Shri Ramswaroop Memorial University,\s*Lucknow\b/gi, `at ${SITE_NAME_SHORT}`);

//   normalizedTitle = normalizedTitle.replace(/\b(Undergraduate|Postgraduate|Lateral Entry|Industry Honors|Doctoral|Diploma) Programs\b/i, "$1");

//   if (!/srmu/i.test(normalizedTitle)) {
//     normalizedTitle = `${normalizedTitle} | ${SITE_NAME_SHORT}`;
//   }

//   if (normalizedTitle.length < 50 && !/Lucknow/i.test(normalizedTitle)) {
//     const padded = `${normalizedTitle}, Lucknow`;
//     if (padded.length <= 60) {
//       normalizedTitle = padded;
//     }
//   }

//   const suffixMatch = normalizedTitle.match(/\s\|\s[^|]+$/);
//   const suffix = suffixMatch?.[0] || "";
//   const maxTitleLength = 58;

//   if (normalizedTitle.length >= 50 && normalizedTitle.length <= 60) {
//     return normalizedTitle;
//   }

//   if (normalizedTitle.length <= maxTitleLength) {
//     return normalizedTitle;
//   }

//   if (suffix) {
//     let baseTitle = normalizedTitle.slice(0, -suffix.length).trim();
//     baseTitle = baseTitle.replace(/\s*Admissions,\s*Fees\s*&\s*Eligibility/gi, "").trim();
//     if (`${baseTitle}${suffix}`.length <= maxTitleLength) {
//       return `${baseTitle}${suffix}`;
//     }
//     const maxBaseLength = Math.max(20, maxTitleLength - suffix.length - 1);
//     return `${trimTitleAtWordBoundary(baseTitle, maxBaseLength)}${suffix}`;
//   }

//   return trimTitleAtWordBoundary(normalizedTitle, maxTitleLength);
// };

export const normalizeSeoTitle = (value = "") => {
  const rawTitle = String(value || "");

  // Backend title exists → return exactly as received
  if (rawTitle) {
    return rawTitle;
  }

  return rawTitle;
};

export const normalizeSeoDescription = (value = "", fallback = DEFAULT_DESCRIPTION) => {
  const source = stripHtml(String(value || ""))
    .replace(/\s+/g, " ")
    .trim();
  const candidate = (source || fallback || "").replace(/\s+/g, " ").trim();
  const withSiteReference = /srmu/i.test(candidate) ? candidate : `${candidate} ${SITE_NAME_SHORT}.`;
  const normalized = withSiteReference.replace(/\s+/g, " ").trim();

  if (!normalized) {
    return DEFAULT_DESCRIPTION;
  }

  if (normalized.length > 155) {
    const safeCutoff = normalized.lastIndexOf(" ", 150);
    return `${(safeCutoff > 40 ? normalized.slice(0, safeCutoff) : normalized.slice(0, 150)).trim()}...`;
  }

  if (normalized.length < 120) {
    const extra = ` Course details & admissions at SRMU Lucknow.`;
    if ((normalized + extra).length <= 155) {
      return `${normalized}${extra}`;
    }
  }

  return normalized;
};

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
    description: `Explore ${label} at Shri Ramswaroop Memorial University (SRMU), Lucknow. Find courses, admissions, campus updates, and student resources.`,
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

const PROGRAM_FINDER_SEO_OVERRIDES: Record<string, { title?: string; description: string }> = {
  "/after-class-12th/bio-technology": {
    title: `Bio Technology Undergraduate Programs After Class 12 | ${SITE_NAME}, Lucknow`,
    description:
      "Explore biotechnology programs after Class 12 at SRMU Lucknow. Compare UG course options, eligibility, fees, admissions steps, and career opportunities in biosciences.",
  },
  "/bio-technology/undergraduate": {
    title: `Undergraduate Bio Technology Programs | ${SITE_NAME}, Lucknow`,
    description:
      "View undergraduate biotechnology courses at SRMU Lucknow with details on curriculum focus, eligibility, fee structure, admission process, and future study or career paths.",
  },
  "/after-class-12th/legal-studies-law": {
    title: `Legal Studies and Law Programs After Class 12 | ${SITE_NAME}, Lucknow`,
    description: "Discover law programs after Class 12 at SRMU Lucknow. Review integrated legal studies options, eligibility, admissions guidance, fees, and career scope in law.",
  },
  "/legal-studies-law/undergraduate": {
    title: `Undergraduate Legal Studies and Law Programs | ${SITE_NAME}, Lucknow`,
    description: "Explore SRMU Lucknow undergraduate law courses, including legal studies pathways, admission requirements, course duration, fees, and professional opportunities.",
  },
  "/after-class-12th/nutrition-dietetics": {
    title: `Nutrition and Dietetics Programs After Class 12 | ${SITE_NAME}, Lucknow`,
    description: "Find nutrition and dietetics programs after Class 12 at SRMU Lucknow. Check UG course choices, eligibility, admissions, fees, and healthcare career pathways.",
  },
  "/nutrition-dietetics/undergraduate": {
    title: `Undergraduate Nutrition and Dietetics Programs | ${SITE_NAME}, Lucknow`,
    description: "Review undergraduate nutrition and dietetics courses at SRMU Lucknow with information on curriculum, eligibility, fee details, admissions, and career outcomes.",
  },
  "/after-class-12th/arts-science": {
    title: `Arts and Science Programs After Class 12 | ${SITE_NAME}, Lucknow`,
    description:
      "Browse arts and science programs after Class 12 at SRMU Lucknow. Compare undergraduate options across humanities, natural sciences, eligibility, fees, and admissions.",
  },
  "/natural-sciences/undergraduate": {
    title: `Undergraduate Natural Sciences Programs | ${SITE_NAME}, Lucknow`,
    description:
      "Explore undergraduate natural sciences programs at SRMU Lucknow. Learn about science course options, eligibility, fee structure, admissions, labs, and career scope.",
  },
  "/humanities/undergraduate": {
    title: `Undergraduate Humanities Programs | ${SITE_NAME}, Lucknow`,
    description:
      "Discover undergraduate humanities programs at SRMU Lucknow. Review course options, eligibility, admissions process, fees, academic exposure, and career pathways.",
  },
};

const getProgramFinderSeoOverride = (pathname = "/") => PROGRAM_FINDER_SEO_OVERRIDES[normalizePath(pathname)];

export const getProgramFinderSeo = (pathname = "/") => {
  const normalizedPath = normalizePath(pathname);
  const seoOverride = getProgramFinderSeoOverride(normalizedPath);

  if (seoOverride) {
    return {
      title: seoOverride.title || getDefaultSeo(normalizedPath).title,
      description: seoOverride.description,
    };
  }

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

const PROGRAM_FINDER_LEVEL_KEYWORDS: Record<string, string[]> = {
  "after-class-10th": ["diploma", "after class 10th", "class 10th", "polytechnic"],
  "after-class-12th": ["undergraduate", "ug", "after class 12th", "class 12th"],
  "after-graduation": ["postgraduate", "pg", "after graduation", "graduate"],
  "after-post-graduation": ["doctoral", "phd", "ph.d", "after post graduation"],
  "after-polytechnic": ["lateral entry", "polytechnic", "after polytechnic"],
  "industry-honors": ["industry honors", "industry honours", "honors", "honours"],
  undergraduate: ["undergraduate", "ug"],
  postgraduate: ["postgraduate", "pg"],
  integrated: ["integrated"],
  "polytechnic-diploma": ["diploma", "polytechnic"],
  "industry-honors1": ["industry honors", "industry honours", "honors", "honours"],
  "ph-d": ["doctoral", "phd", "ph.d"],
  "ph-d1": ["doctoral", "phd", "ph.d"],
};

const shouldUseProgramFinderScopedMeta = (pathname = "/", metaValue?: string | null) => {
  const value = stripHtml(String(metaValue || "")).trim();

  if (!value) {
    return false;
  }

  const normalizedPath = normalizePath(pathname);
  const segments = normalizedPath.split("/").filter(Boolean);

  if (segments.length !== 2) {
    return true;
  }

  const { programFlagSlug, disciplineSlug } = resolveProgramCategoryParams(segments[0], segments[1]);

  if (!programFlagSlug || !disciplineSlug) {
    return true;
  }

  const normalizedValue = value.toLowerCase();
  const disciplineLabel = humanizeSlug(disciplineSlug).toLowerCase();
  const requiredKeywords = PROGRAM_FINDER_LEVEL_KEYWORDS[programFlagSlug] || [getProgramFinderLevelLabel(programFlagSlug).toLowerCase()];

  const hasDiscipline = normalizedValue.includes(disciplineLabel);
  const hasLevelContext = requiredKeywords.some((keyword) => normalizedValue.includes(keyword));

  return hasDiscipline && hasLevelContext;
};

export const shouldUseProgramFinderMetaTitle = (pathname = "/", metaTitle?: string | null) => shouldUseProgramFinderScopedMeta(pathname, metaTitle);

export const shouldUseProgramFinderMetaDescription = (pathname = "/", metaDescription?: string | null) =>
  getProgramFinderSeoOverride(pathname) ? false : shouldUseProgramFinderScopedMeta(pathname, metaDescription);

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
