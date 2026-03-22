import { slugify } from "./slugify";

const normalizeProgramSlug = (value = "") => String(value || "").trim().toLowerCase();

export const LEGACY_PROGRAM_ROUTE_ALIASES: Record<string, string> = {
  "b-sc-hons-biotechnology": "b-sc-hons-biotechnology1",
  "b-sc-hons-food-technology": "b-sc-hons-food-technology1",
  "b-sc-in-medical-laboratory-sciences": "bachelor-in-medical-laboratory-science",
  "b-sc-in-medical-radiology-and-imaging-technology": "bachelor-in-medical-radiologic-and-imaging-technology",
  "b-sc-in-operation-theatre-anaesthesia-technology": "bachelor-in-operation-theatre-technology",
};

const PREFERRED_LEGACY_PROGRAM_SLUGS = Object.entries(LEGACY_PROGRAM_ROUTE_ALIASES).reduce<Record<string, string>>((acc, [legacySlug, canonicalSlug]) => {
  acc[normalizeProgramSlug(canonicalSlug)] = legacySlug;
  return acc;
}, {});

export const LEGACY_PROGRAM_SITEMAP_ONLY_SLUGS = [
  "bachelor-of-physiotherapy",
  "bsw",
  "mpharm-master-of-pharmacy",
];

export const resolveProgramRouteSlug = (slug = "") => {
  const normalizedSlug = normalizeProgramSlug(slug);

  return LEGACY_PROGRAM_ROUTE_ALIASES[normalizedSlug] || normalizedSlug;
};

export const getPreferredProgramRouteSlug = (program: { slug?: string | null; name?: string | null } | string) => {
  const rawSlug =
    typeof program === "string"
      ? program
      : String(program?.slug || "").trim() || slugify(String(program?.name || ""));

  const normalizedSlug = normalizeProgramSlug(rawSlug);

  return PREFERRED_LEGACY_PROGRAM_SLUGS[normalizedSlug] || normalizedSlug;
};
