import { PROGRAM_STUBS, type FinderProgram } from "./programsNew";
import { availableCombinations, ENGINEERING_COMBINATIONS, BIOTECHNOLOGY_COMBINATIONS, SCIENCE_COMBINATIONS, type CombinationMarks } from "./class12Combinations";
import { CATEGORY_OPTS, C12_RULES, C12ITI_PATHS, DIP_BRANCHES, GRAD_DEGREES, GRAD_THRESH, UNIVERSAL_GRAD_DOMAINS, PROGRAM_EXTRA_REQUIREMENT, canonicalDomain, catCol, c12Threshold, sortByAttractiveness, type Subjects } from "./rulesNew";

export interface FinderProfile {
  bucket: string;
  subjects: Subjects;
  category: string;
  status: "passed" | "appearing";
  obtained: string;
  total: string;
  combinationMarks: CombinationMarks;
  itiPath: string;
  dipBranch: string;
  gradDegree: string;
  gradMaths: boolean;
}
export const emptyProfile: FinderProfile = {
  bucket: "", subjects: {}, category: "gen", status: "passed", obtained: "", total: "",
  combinationMarks: {}, itiPath: "12th", dipBranch: "", gradDegree: "", gradMaths: false,
};
export function percentage(obtained: string, total: string): number | null {
  if (!obtained.trim() || !total.trim()) return null;
  const o = Number(obtained), t = Number(total);
  return Number.isFinite(o) && Number.isFinite(t) && o >= 0 && t > 0 && o <= t ? o / t * 100 : null;
}
export function qualifyingCombinations(p: FinderProfile) {
  return p.bucket === "Class 12" ? availableCombinations(p.subjects) : [];
}

// Discard marks for combinations that no longer match the checked subjects.
export function updateFinderProfile(previous: FinderProfile, patch: Partial<FinderProfile>): FinderProfile {
  const next = { ...previous, ...patch };
  const combinationMarks: CombinationMarks = {};
  for (const { key } of qualifyingCombinations(next)) {
    if (next.combinationMarks[key]) combinationMarks[key] = next.combinationMarks[key];
  }
  return { ...next, combinationMarks };
}
export function validateProfile(p: FinderProfile): string | null {
  if (!p.bucket) return "Select your qualification.";
  if (!CATEGORY_OPTS.some(c => c.key === p.category)) return "Select a valid category.";
  if (p.bucket === "Diploma" && !DIP_BRANCHES.some(b => b.key === p.dipBranch)) return "Select your diploma branch / background.";
  if (p.bucket === "Graduate" && !GRAD_DEGREES.some(d => d.key === p.gradDegree)) return "Select your Bachelor's degree.";
  if (p.status === "passed") {
    if (percentage(p.obtained, p.total) === null) return "Enter valid marks: maximum marks must be greater than zero, and marks obtained must be between zero and the maximum.";
    for (const { key, label } of qualifyingCombinations(p)) {
      const marks = p.combinationMarks[key];
      if (!marks || percentage(marks.obtained, marks.total) === null) return `Enter valid ${label} marks: maximum marks must be greater than zero, and marks obtained must be between zero and the maximum.`;
    }
  }
  return null;
}

// A shared discovery tag must never bypass a programme's own subject/background rule.
const programSlug = (program: FinderProgram) => program.link.split(/[?#]/)[0].replace(/\/$/, "").split("/").pop() || "";
const admissionDomains = new Map(PROGRAM_STUBS.flatMap(program => [
  [program.slug, program.domains] as const,
  [programSlug(program), program.domains] as const,
]));
function admissionDomain(program: FinderProgram) {
  // API discovery tags can be reordered (e.g. AI before Engineering).
  const [first, second] = admissionDomains.get(programSlug(program)) || program.domains;
  return second && ["Natural Science", "Humanities", "Bioscience"].includes(first) ? second : first;
}
export function isProgramEligible(program: FinderProgram, p: FinderProfile) {
  if (program.lastq !== p.bucket) return false;
  const d = admissionDomain(program), col = catCol(p.category), s = p.subjects;
  const pct = percentage(p.obtained, p.total);
  const passes = (threshold: number, value = pct) => p.status === "appearing" || (value !== null && value >= threshold);
  if (p.bucket === "Class 10") return !!(s.science || s.maths) && passes(35);
  if (p.bucket === "Class 12 OR ITI") {
    const path = C12ITI_PATHS.find(path => path.key === p.itiPath);
    return !!path && (p.itiPath === "iti" || !!(s.physics && s.chemistry && s.maths)) && passes(path.threshold);
  }
  if (p.bucket === "Class 12") {
    const btech = /^B\.?\s*Tech\.?/i.test(program.name) || /^b-?tech-/.test(programSlug(program));
    if (btech) {
      const biotechnology = d === "Biotechnology" || /biotechnology/i.test(`${program.name} ${programSlug(program)}`);
      const accepted = biotechnology ? BIOTECHNOLOGY_COMBINATIONS : ENGINEERING_COMBINATIONS;
      return qualifyingCombinations(p).some(({ key }) => {
        if (!accepted.includes(key)) return false;
        const marks = p.combinationMarks[key];
        return passes(c12Threshold(d)[col], marks ? percentage(marks.obtained, marks.total) : null);
      });
    }
    const subjectRule = C12_RULES[d];
    if (!subjectRule || !subjectRule(s)) return false;
    const scienceCombinations = SCIENCE_COMBINATIONS[d];
    if (scienceCombinations && !(d === "Agriculture" && s.agriculture)) {
      const relevant = qualifyingCombinations(p).filter(({ key }) => scienceCombinations.includes(key));
      // Single-subject entry routes remain valid when no three-subject
      // combination applies (e.g. Mathematics from a commerce background).
      if (relevant.length && !relevant.some(({ key }) => {
        const marks = p.combinationMarks[key];
        return passes(c12Threshold(d)[col], marks ? percentage(marks.obtained, marks.total) : null);
      })) return false;
    }
    return passes(c12Threshold(d)[col]);
  }
  if (p.bucket === "Diploma") {
    const branch = DIP_BRANCHES.find(b => b.key === p.dipBranch);
    return !!branch?.domains.includes(d) && passes(col === "scst" ? 40 : 45);
  }
  if (p.bucket === "Graduate") {
    const degree = GRAD_DEGREES.find(g => g.key === p.gradDegree);
    if (!degree) return false;
    const unlocked = new Set([...degree.domains, ...UNIVERSAL_GRAD_DOMAINS]);
    if (p.gradMaths) unlocked.add("Computer Application");
    // Mathematics is required for MCA even if the degree itself carries this tag.
    if (d === "Computer Application" && !p.gradMaths) return false;
    const extra = PROGRAM_EXTRA_REQUIREMENT[program.name];
    if (extra?.gradDegree && extra.gradDegree !== p.gradDegree) return false;
    if (extra?.domain && !degree.domains.includes(extra.domain)) return false;
    return unlocked.has(d) && passes((GRAD_THRESH[d] || { gen: 50, obc: 50, scst: 45 })[col]);
  }
  return false;
}
export function findEligiblePrograms(allPrograms: FinderProgram[], p: FinderProfile) {
  const bucket = allPrograms.filter(program => program.lastq === p.bucket);
  const programs = validateProfile(p) ? [] : bucket.filter(program => isProgramEligible(program, p));
  const domains = sortByAttractiveness([...new Set(programs.flatMap(program => program.domains.map(canonicalDomain)))]);
  const ineligible = sortByAttractiveness([...new Set(bucket.flatMap(program => program.domains.map(canonicalDomain)))].filter(d => !domains.includes(d)));
  return { programs, domains, ineligible };
}
export function programsInDomain(programs: FinderProgram[], domain: string) {
  return programs.filter(p => p.domains.some(d => canonicalDomain(d) === domain || (domain === "Artificial Intelligence" && d === "Artificial Intelligence & Machine Learning")));
}
