const normalizeSlug = (value = "") =>
  String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[()]/g, "")
    .replace(/&/g, "and")
    .replace(/\./g, "-")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export const normalizeProgramRouteSlug = normalizeSlug;

const CURRENT_TO_LEGACY_PROGRAM_FLAG_SLUG: Record<string, string> = {
  undergraduate: "after-class-12th",
  postgraduate: "after-graduation",
  "polytechnic-diploma": "after-class-10th",
  "industry-honors1": "industry-honors",
  "industry-honors": "industry-honors",
};

const DISCIPLINE_SLUG_ALIASES: Record<string, string> = {
  "natural-sciences": "arts-science",
  humanities: "arts-science",
  biotechnology: "bio-technology",
  "computer-science": "computer-science-engineering",
  law: "legal-studies-law",
  "commerce-economics": "commerce-and-economics",
  phd: "ph-d1",
  "ph-d": "ph-d1",
};

const PROGRAM_CATEGORY_ROUTE_ALIASES: Record<string, { programFlagSlug: string; disciplineSlug: string }> = {
  "social-work/undergraduate": {
    programFlagSlug: "after-graduation",
    disciplineSlug: "social-work",
  },
};

export const STATIC_TOP_LEVEL_PROGRAM_PATHS = [
  "/after-class-10th",
  "/after-class-12th",
  "/after-graduation",
  "/after-polytechnic",
  "/after-post-graduation",
  "/industry-honors",
  "/agriculture",
  "/allied-health-sciences",
  "/artificial-intelligence",
  "/arts-science",
  "/bio-technology",
  "/commerce-and-economics",
  "/computer-application",
  "/computer-science-engineering",
  "/education",
  "/engineering",
  "/food-technology",
  "/humanities",
  "/legal-studies-law",
  "/management",
  "/media-studies",
  "/microbiology",
  "/natural-sciences",
  "/nutrition-dietetics",
  "/pharmacy",
  "/social-work",
  // Direct program page slugs — must be listed here so the server does not
  // redirect them to /program/:slug via the dynamic redirect handler.
  "/b-tech-cse-cyber-security",
  "/b-tech-cse-data-science-artificial-intelligence",
  "/b-tech-me-ev-engineering",
  "/bca-cyber-security",
  "/bca-data-science-artificial-intelligence",
  "/bba-business-analytics",
  "/b-com-hons-with-l-t",
  "/mba-business-analytics",
  "/mba-ai-augmented-fintech",
  "/bba-ai-augmented-fintech",
  "/btech-ece-semiconductor-design",
  "/phd",
  "/diploma-civil-engineering",
  "/diploma-mechanical-engineering-production",
  "/diploma-mechanical-engineering-automobile",
  "/diploma-electrical-engineering",
  "/diploma-computer-science-engineering",
  "/b-tech-biotechnology-lateral-entry",
  "/b-tech-computer-science-engineering-lateral-entry",
  "/b-tech-civil-engineering-lateral-entry",
  "/b-tech-me-ev-engineering-lateral-entry",
  "/b-tech-ee-ev-engineering-lateral-entry",
  "/b-tech-ece-ev-engineering-lateral-entry",
  "/b-sc-hons-agriculture",
  "/b-tech-cse-artificial-intelligence-machine-learning",
  "/b-tech-ee-ev-engineering",
  "/b-sc-information-technology",
  "/bca-bachelor-of-computer-applications",
  "/bca-artificial-intelligence-machine-learning",
  "/b-sc-hons-biotechnology",
  "/b-sc-hons-food-technology",
  "/b-sc-hons-nutrition-dietetics",
  "/b-sc-hons-microbiology",
  "/b-tech-biotechnology",
  "/b-tech-computer-science-engineering",
  "/b-tech-cse-mba",
  "/b-tech-m-tech-cse",
  "/b-tech-m-tech-ece",
  "/b-tech-ece-mba",
  "/b-tech-m-tech-me",
  "/b-a-hons-economics",
  "/bba-bachelor-of-business-administration",
  "/b-com",
  "/b-a-journalism-mass-communication",
  "/ba-llb-hons",
  "/bba-llb-hons",
  "/bpharm-bachelor-of-pharmacy",
  "/d-pharm-diploma-in-pharmacy",
  "/b-pharma-bachelor-of-pharmacy",
  "/d-pharma-diploma-in-pharmacy",
  "/bachelor-of-anaesthesia-and-operation-theatre-technology-b-aott",
  "/bachelor-of-medical-laboratory-sciences-bmls",
  "/bachelor-of-medical-radiology-imaging-technology-bmrit",
  "/bachelor-of-optometry",
  "/bachelor-in-physiotherapy",
  "/diploma-civil-engineering-lateral-entry",
  "/diploma-mechanical-engineering-production-lateral-entry",
  "/diploma-mechanical-engineering-automobile-lateral-entry",
  "/diploma-electrical-engineering-lateral-entry",
  "/diploma-computer-science-engineering-lateral-entry",
  "/b-sc-hons-physics",
  "/b-sc-hons-chemistry",
  "/b-sc-hons-mathematics",
  "/b-a-hons-english",
  "/b-a-hons-political-science",
  "/mba-master-of-business-administration",
  "/m-b-a-healthcare-hospital-management",
  "/mba-finance-accounting",
  "/msc-horticulture-fruit-science",
  "/msc-horticulture-veg-sc",
  "/mba-abm",
  "/msc-agronomy",
  "/msc-soil-science-agricultural-chemistry",
  "/m-tech-data-science",
  "/mca",
  "/m-sc-biotechnology",
  "/m-tech-biotechnology",
  "/m-tech-artificial-intelligence-machine-learning",
  "/m-tech-computer-science-engineering",
  "/m-tech-computer-science-engineering-part-time",
  "/m-tech-environmental-engineering",
  "/m-tech-structural-engineering",
  "/m-tech-environmental-engineering-part-time",
  "/m-tech-structural-engineering-part-time",
  "/m-com1",
  "/m-sc-economics",
  "/m-a-journalism-mass-communication",
  "/llb",
  "/ll-m-criminal-security-law",
  "/ll-m-corporate-commercial-law",
  "/ll-m-constitutional-administrative-law",
  "/ll-m-international-comparative-law",
  "/m-pharm-in-pharmaceutics",
  "/m-pharm-in-pharmacology",
  "/m-pharm-in-pharmacognosy",
  "/m-pharm-in-pharmaceutical-chemistry",
  "/msw",
  "/m-sc-physics",
  "/m-sc-chemistry",
];

export const STATIC_PROGRAM_CATEGORY_PATHS = [
  "after-class-10th/polytechnic",
  "after-post-graduation/ph-d1",
  "after-class-12th/commerce",
  "after-class-12th/agriculture",
  "after-class-12th/business-analytics",
  "after-class-12th/allied-health-sciences",
  "after-class-12th/arts-science",
  "after-class-12th/bio-technology",
  "after-class-12th/ev-engineering",
  "after-class-12th/commerce-and-economics",
  "after-class-12th/computer-application",
  "after-class-12th/computer-science-engineering",
  "after-class-12th/engineering",
  "after-class-12th/food-technology",
  "after-class-12th/legal-studies-law",
  "after-class-12th/management",
  "after-class-12th/media-studies",
  // new
  "after-class-12th/microbiology",
  "after-class-12th/natural-sciences",
  "after-class-12th/nutrition-dietetics",
  "after-class-12th/pharmacy",
  "after-class-12th/polytechnic-lateral",
  "after-class-12th/artificial-intelligence",
  "after-class-12th/cyber-security",
  "after-class-12th/l-t-programs",
  "after-class-12th/social-work",
  "after-class-12th/data-science",
  "after-class-12th/biosciences",
  "after-graduation/agriculture",
  "after-graduation/arts-science",
  "after-graduation/bio-technology",
  "after-graduation/commerce-and-economics",
  "after-graduation/computer-application",
  "after-graduation/computer-science-engineering",
  "after-graduation/education",
  "after-graduation/engineering",
  "after-graduation/legal-studies-law",
  "after-graduation/management",
  "after-graduation/media-studies",
  "after-graduation/natural-sciences",
   // new
  "after-graduation/social-work",
  "after-graduation/data-science",
  "after-graduation/biosciences",
  "after-graduation/ev-engineering",
  "after-polytechnic/bio-technology",
  "after-polytechnic/computer-science-engineering",
  "after-polytechnic/engineering",
  "microbiology/undergraduate",
  "nutrition-dietetics/undergraduate",
  "artificial-intelligence/undergraduate",
  "computer-science-engineering/undergraduate",
  "computer-application/undergraduate",
  "agriculture/undergraduate",
  "bio-technology/undergraduate",
  "engineering/undergraduate",
  "management/undergraduate",
  "commerce-and-economics/undergraduate",
  "media-studies/undergraduate",
  "legal-studies-law/undergraduate",
  "pharmacy/undergraduate",
  "allied-health-sciences/undergraduate",
  "natural-sciences/undergraduate",
  "humanities/undergraduate",
  "social-work/undergraduate",
  "artificial-intelligence/postgraduate",
  "computer-science-engineering/postgraduate",
  "computer-application/postgraduate",
  "agriculture/postgraduate",
  "bio-technology/postgraduate",
  "engineering/postgraduate",
  "management/postgraduate",
  "commerce-and-economics/postgraduate",
  "media-studies/postgraduate",
  "legal-studies-law/postgraduate",
  "natural-sciences/postgraduate",
  "social-work/postgraduate",
  "humanities/postgraduate",
  "computer-science-engineering/integrated",
  "bio-technology/integrated",
  "engineering/integrated",
  "legal-studies-law/integrated",
  "polytechnic-lateral/polytechnic-diploma",
  "ph-d1/ph-d",
  "polytechnic/polytechnic-diploma",
  "industry-honors/artificial-intelligence",
  "industry-honors/computer-application",
  "industry-honors/computer-science-engineering",
  "industry-honors/engineering",
  "industry-honors/management",
   // new
  "industry-honors/cyber-security",
  "industry-honors/l-t-programs",
  "industry-honors/data-science",
  "industry-honors/ev-engineering",
  "artificial-intelligence/industry-honors1",
  "computer-science-engineering/industry-honors1",
  "computer-application/industry-honors1",
  "engineering/industry-honors1",
  "management/industry-honors1",
  "program-finder/undergraduate"
];

const STATIC_PROGRAM_CATEGORY_PATH_SET = new Set(STATIC_PROGRAM_CATEGORY_PATHS);
const STATIC_TOP_LEVEL_PROGRAM_PATH_SET = new Set(STATIC_TOP_LEVEL_PROGRAM_PATHS.map((path) => path.replace(/^\/+/, "")));
const TOP_LEVEL_PROGRAM_FLAG_SLUGS = new Set([
  "after-class-10th",
  "after-class-12th",
  "after-graduation",
  "after-polytechnic",
  "after-post-graduation",
  "industry-honors",
]);

export const resolveProgramCategoryParams = (firstSegment = "", secondSegment = "") => {
  const first = normalizeSlug(firstSegment);
  const second = normalizeSlug(secondSegment);

  if (!first || !second) {
    return {
      programFlagSlug: "",
      disciplineSlug: "",
    };
  }

  const aliasedRoute = PROGRAM_CATEGORY_ROUTE_ALIASES[`${first}/${second}`];

  if (aliasedRoute) {
    return aliasedRoute;
  }

  if (CURRENT_TO_LEGACY_PROGRAM_FLAG_SLUG[second]) {
    return {
      programFlagSlug: CURRENT_TO_LEGACY_PROGRAM_FLAG_SLUG[second],
      disciplineSlug: DISCIPLINE_SLUG_ALIASES[first] || first,
    };
  }

  return {
    programFlagSlug: first,
    disciplineSlug: DISCIPLINE_SLUG_ALIASES[second] || second,
  };
};

export const getProgramCategoryPathMatch = (programMenuData: any[], firstSegment = "", secondSegment = "") => {
  const { programFlagSlug, disciplineSlug } = resolveProgramCategoryParams(firstSegment, secondSegment);
  const staticRouteKey = `${programFlagSlug}/${disciplineSlug}`;

  const matchedProgramFlag = (programMenuData || []).find(
    (item: any) => normalizeSlug(item?.programFlagSlug || item?.programTypeSlug || item?.programFlagName || "") === programFlagSlug
  );

  if (!matchedProgramFlag) {
    if (!STATIC_PROGRAM_CATEGORY_PATH_SET.has(staticRouteKey)) {
      return null;
    }

    return {
      programFlagSlug,
      disciplineSlug,
      matchedProgramFlag: null,
      matchedDiscipline: {
        disciplineName: disciplineSlug,
        disciplineSlug,
      },
    };
  }

  const matchedDiscipline = (matchedProgramFlag?.disciplines || []).find(
    (discipline: any) => normalizeSlug(discipline?.disciplineSlug || discipline?.disciplineName || "") === disciplineSlug
  );

  if (!matchedDiscipline) {
    if (!STATIC_PROGRAM_CATEGORY_PATH_SET.has(staticRouteKey)) {
      return null;
    }

    return {
      programFlagSlug,
      disciplineSlug,
      matchedProgramFlag,
      matchedDiscipline: {
        disciplineName: disciplineSlug,
        disciplineSlug,
      },
    };
  }

  return {
    programFlagSlug,
    disciplineSlug,
    matchedProgramFlag,
    matchedDiscipline,
  };
};

export const hasValidProgramCategoryRoute = (programMenuData: any[], firstSegment = "", secondSegment = "") =>
  Boolean(getProgramCategoryPathMatch(programMenuData, firstSegment, secondSegment));

export const buildProgramCategoryPath = (programFlagSlug = "", disciplineSlug?: string | null) => {
  const normalizedProgramFlagSlug = normalizeSlug(programFlagSlug);
  const normalizedDisciplineSlug = normalizeSlug(disciplineSlug || "");
  const canonicalProgramFlagSlug = CURRENT_TO_LEGACY_PROGRAM_FLAG_SLUG[normalizedProgramFlagSlug] || normalizedProgramFlagSlug;
  const canonicalDisciplineSlug = DISCIPLINE_SLUG_ALIASES[normalizedDisciplineSlug] || normalizedDisciplineSlug;

  if (!canonicalProgramFlagSlug) {
    return "/";
  }

  if (!canonicalDisciplineSlug) {
    return `/${canonicalProgramFlagSlug}`;
  }

  return `/${canonicalProgramFlagSlug}/${canonicalDisciplineSlug}`;
};

export const resolveTopLevelProgramRoute = (programSlug = "") => {
  const normalizedSlug = normalizeSlug(programSlug);

  if (!normalizedSlug) {
    return null;
  }

  if (TOP_LEVEL_PROGRAM_FLAG_SLUGS.has(normalizedSlug)) {
    return {
      kind: "programFlag" as const,
      slug: normalizedSlug,
    };
  }

  const disciplineSlug = DISCIPLINE_SLUG_ALIASES[normalizedSlug] || normalizedSlug;

  if (STATIC_TOP_LEVEL_PROGRAM_PATH_SET.has(normalizedSlug)) {
    return {
      kind: TOP_LEVEL_PROGRAM_FLAG_SLUGS.has(normalizedSlug) ? ("programFlag" as const) : ("discipline" as const),
      slug: TOP_LEVEL_PROGRAM_FLAG_SLUGS.has(normalizedSlug) ? normalizedSlug : disciplineSlug,
    };
  }

  return null;
};

export const hasValidTopLevelProgramRoute = (programSlug = "") => Boolean(resolveTopLevelProgramRoute(programSlug));
