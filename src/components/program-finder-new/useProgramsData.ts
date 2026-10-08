import { useEffect, useState } from "react";
import { API } from "../../apis/axiosinstance";
import type { FinderProgram } from "./programsNew";
import { PROGRAM_STUBS } from "./programsNew";

// ---------------------------------------------------------------------------
// Discipline name  →  finder domain names
// Maps the API's `programDisciplineName` values to the canonical domain
// strings used throughout the eligibility engine (rulesNew.ts).
// ---------------------------------------------------------------------------
const DISC_TO_DOMAINS: Record<string, string[]> = {
  // Engineering
  "Computer Science":                     ["Computer Science Engineering", "Engineering"],
  "Artificial Intelligence":              ["Artificial Intelligence", "Artificial Intelligence & Machine Learning"],
  "Cyber Security":                       ["Cyber Security"],
  "Data Science":                         ["Data Science"],
  "Engineering":                          ["Engineering"],
  "EV Engineering":                       ["EV Engineering"],
  "L&T Programs":                         [],   // decorative tag — no standalone domain
  "Semiconductor Design":                 ["Semiconductor Design"],
  // Polytechnic
  "Polytechnic":                          ["Polytechnic", "Diploma"],
  "Polytechnic (Lateral)":               ["Polytechnic", "Diploma"],
  // Bio / Health
  "Biotechnology":                        ["Biotechnology"],
  "Biosciences":                          ["Bioscience"],
  "Pharmacy":                             ["Pharmacy"],
  "Allied & Health Sciences":             ["Allied Health Science", "Paramedical"],
  // Science
  "Natural Sciences":                     ["Natural Science"],
  "Arts & Science":                       [],   // multi-discipline group — domain from other disciplines
  // Humanities
  "Humanities":                           ["Humanities"],
  // Commerce / Management
  "Management":                           ["Management"],
  "Business Analytics":                   ["Business Analytics"],
  "Commerce":                             ["Commerce"],
  "Commerce and Economics":              ["Commerce", "Economics"],
  // Computer Application
  "Computer Application":                ["Computer Application"],
  // Agriculture
  "Agriculture":                          ["Agriculture"],
  // Other
  "Legal Studies (Law)":                  ["Law"],
  "Media Studies (Journalism)":          ["Journalism & Mass Comm."],
  "Microbiology":                         ["Bioscience", "Microbiology"],
  "Nutrition & Dietetics":               ["Bioscience", "Nutrition & Dietetics"],
  "Food Technology":                      ["Bioscience", "Food Technology"],
  "Social Work":                          ["Humanities", "Social Work"],
  "Education":                            ["Education"],
  "Ph.D.":                               [],
};

// Shape returned by the programs API (only fields we use)
interface ApiProgram {
  name: string;
  slug: string;
  totalDurationYear: string;
  totalFees: number;
  discipline: { programDisciplineName: string }[];
}

// De-duplicate while preserving order
function unique(arr: string[]): string[] {
  return [...new Set(arr)];
}

function mapDisciplines(disciplines: { programDisciplineName: string }[]): string[] {
  const domains = disciplines.flatMap(d => DISC_TO_DOMAINS[d.programDisciplineName] ?? []);
  return unique(domains);
}

// Normalise "1 Years" → "1 Year" for display consistency
function normaliseDuration(raw: string): string {
  return raw.replace(/^1 Years$/i, "1 Year");
}

const SITE = "https://srmu.ac.in";
let cache: { expires: number; request: Promise<FinderProgram[]> } | null = null;

function fetchPrograms(): Promise<FinderProgram[]> {
  if (cache && cache.expires > Date.now()) return cache.request;

  const stubIndex = new Map(PROGRAM_STUBS.map(s => [s.slug, s]));

  const request = API.get<ApiProgram[]>("/academicProgram/programs", { timeout: 15000 })
    .then(res => {
      const apiList: ApiProgram[] = Array.isArray(res.data) ? res.data : [];

      return apiList
        .map((p): FinderProgram | null => {
          const stub = stubIndex.get(p.slug);
          if (!stub) return null; // not in finder — skip

          const apiDomains = mapDisciplines(p.discipline ?? []);
          // Fall back to stub domains if mapping produced nothing (edge case)
          const domains = apiDomains.length > 0 ? apiDomains : stub.domains;

          return {
            name: p.name,
            duration: normaliseDuration(p.totalDurationYear ?? stub.duration),
            fee: p.totalFees ?? stub.fee,
            link: `${SITE}/program/${p.slug}`,
            domains,
            // Non-API fields — always from stub
            entry: stub.entry,
            lastq: stub.lastq,
            caution: stub.caution,
          };
        })
        .filter((p): p is FinderProgram => p !== null);
    })
    .catch(() => {
      // Network error — fall back to full static list so the finder still works
      return PROGRAM_STUBS.map(s => ({
        name: s.name,
        duration: s.duration,
        fee: s.fee,
        link: s.link,
        domains: s.domains,
        entry: s.entry,
        lastq: s.lastq,
        caution: s.caution,
      }));
    });

  cache = { expires: Date.now() + 10 * 60 * 1000, request }; // 10-min cache
  return request;
}

export type ProgramsState =
  | { status: "loading"; programs: [] }
  | { status: "ready"; programs: FinderProgram[] }
  | { status: "error"; programs: FinderProgram[] }; // error falls back to stubs

export function useProgramsData(): ProgramsState {
  const [state, setState] = useState<ProgramsState>({ status: "loading", programs: [] });

  useEffect(() => {
    let active = true;
    fetchPrograms().then(programs => {
      if (active) setState({ status: "ready", programs });
    });
    return () => { active = false; };
  }, []);

  return state;
}
