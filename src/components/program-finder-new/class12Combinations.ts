import type { Subjects } from "./rulesNew";

// Each entry contains exactly three distinct qualifying subjects.
export const CLASS12_COMBINATIONS = [
  { key: "pcm", label: "PCM", subjects: ["physics", "chemistry", "maths"], description: "Physics + Chemistry + Mathematics" },
  { key: "pcb", label: "PCB", subjects: ["physics", "chemistry", "biology"], description: "Physics + Chemistry + Biology" },
  { key: "pmcs", label: "P + M + CS/IT", subjects: ["physics", "maths", "cs"], description: "Physics + Mathematics + Computer Science / IT" },
  { key: "pmtv", label: "P + M + Technical Vocational", subjects: ["physics", "maths", "techvoc"], description: "Physics + Mathematics + Technical Vocational subject" },
  { key: "pbcs", label: "P + B + CS/IT", subjects: ["physics", "biology", "cs"], description: "Physics + Biology + Computer Science / IT" },
  { key: "pbtv", label: "P + B + Technical Vocational", subjects: ["physics", "biology", "techvoc"], description: "Physics + Biology + Technical Vocational subject" },
  { key: "pmbt", label: "P + M + Biotechnology", subjects: ["physics", "maths", "biotechnology"], description: "Physics + Mathematics + Biotechnology" },
  { key: "pbbt", label: "P + B + Biotechnology", subjects: ["physics", "biology", "biotechnology"], description: "Physics + Biology + Biotechnology" },
  { key: "ccstv", label: "C + CS/IT + Technical Vocational", subjects: ["chemistry", "cs", "techvoc"], description: "Chemistry + Computer Science / IT + Technical Vocational subject" },
] as const;

export type CombinationKey = typeof CLASS12_COMBINATIONS[number]["key"];
export type CombinationMarks = Partial<Record<CombinationKey, { obtained: string; total: string }>>;

export function availableCombinations(subjects: Subjects) {
  return CLASS12_COMBINATIONS.filter(combination => combination.subjects.every(subject => subjects[subject]));
}

export const ENGINEERING_COMBINATIONS: readonly CombinationKey[] = ["pcm", "pmcs", "pmtv"];
// Adding a marks input must not automatically create a B.Tech. entry route.
export const BIOTECHNOLOGY_COMBINATIONS: readonly CombinationKey[] = ["pcm", "pcb", "pmcs", "pmtv", "pbcs", "pbtv", "pmbt", "pbbt"];

const bioscienceCombinations = CLASS12_COMBINATIONS.filter(combination => !combination.subjects.some(subject => subject === "techvoc")).map(combination => combination.key);
const mathsCombinations = CLASS12_COMBINATIONS.filter(combination => combination.subjects.some(subject => subject === "maths")).map(combination => combination.key);
const biologyCombinations = CLASS12_COMBINATIONS.filter(combination => combination.subjects.some(subject => subject === "biology")).map(combination => combination.key);

// Additional science combination cutoff requested for this finder, alongside
// each programme's existing aggregate and subject requirements.
export const SCIENCE_COMBINATIONS: Record<string, readonly CombinationKey[]> = {
  Bioscience: bioscienceCombinations,
  Biotechnology: bioscienceCombinations,
  "Food Technology": bioscienceCombinations,
  Microbiology: bioscienceCombinations,
  "Natural Science": [...BIOTECHNOLOGY_COMBINATIONS, "ccstv"],
  Physics: BIOTECHNOLOGY_COMBINATIONS,
  Chemistry: ["pcm", "pcb", "ccstv"],
  Mathematics: mathsCombinations,
  "Nutrition & Dietetics": biologyCombinations,
  Agriculture: ["pcm", "pcb"],
  Pharmacy: ["pcm", "pcb"],
  "Allied Health Science": ["pcb"],
  Paramedical: ["pcb"],
};
