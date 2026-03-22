const rawSiteUrl = import.meta.env.VITE_SITE_URL || "https://srmu.ac.in";

export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");
export const SITE_NAME = "Shri Ramswaroop Memorial University";
export const DEFAULT_TITLE = `${SITE_NAME} | SRMU`;
export const DEFAULT_DESCRIPTION =
  "SRMU, one of the best university in Lucknow, known for expert faculty, advanced learning, and excellent career opportunities.";
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/storage/settings/srmu-lo1-050324113149.svg`;

const PAGE_LABELS: Record<string, string> = {
  "/": SITE_NAME,
  "/blogs": "Blogs",
  "/contact-us": "Contact Us",
  "/privacy-policy": "Privacy Policy",
  "/disclaimer": "Disclaimer",
  "/terms-conditions": "Terms and Conditions",
  "/mandatory-disclouser": "Mandatory Disclosure",
  "/placement-overview": "Placement Overview",
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

export const buildSiteSchema = (pathname = "/") => {
  const normalizedPath = normalizePath(pathname);
  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "CollegeOrUniversity",
      name: SITE_NAME,
      url: SITE_URL,
      logo: DEFAULT_SOCIAL_IMAGE,
    },
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
