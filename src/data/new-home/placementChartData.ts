export interface PlacementChartYear {
  year: string;
  records: number;
  metric?: string;
  hideValue?: boolean;
}

/** Annual counts based on the available placement datasets. */
export const placementChartYears: PlacementChartYear[] = [
  { year: "2021", records: 287 },
  { year: "2022", records: 440 },
  { year: "2023", records: 656 },
  { year: "2025", records: 564 },
  { year: "2026", records: 644, metric: "Students Placed" },
];

/** Unique 2026 students at 5+ LPA, grouped by their highest listed offer. */
export const salaryRanges2026 = [
  { label: "5–<7 LPA", count: 79 },
  { label: "7–<10 LPA", count: 32 },
  { label: "15–<20 LPA", count: 2 },
];

/** Unique 2025 students with packages of at least 5 LPA, grouped by their highest listed offer. */
export const salaryRanges2025 = [
  { label: "5–<7 LPA", count: 60 },
  { label: "7–<10 LPA", count: 4 },
  { label: "10–<15 LPA", count: 4 },
];

/** 2023 salary ranges – all bands below 15 LPA. */
export const salaryRanges2023 = [
  { label: "3–<5 LPA", count: 11 },
  { label: "5–<7 LPA", count: 8 },
  { label: "7–<10 LPA", count: 5 },
];

/** 2022 salary ranges – all bands below 10 LPA. */
export const salaryRanges2022 = [
  { label: "3–<5 LPA", count: 9 },
  { label: "5–<7 LPA", count: 6 },
  { label: "7–<10 LPA", count: 4 },
];

/** 2021 salary ranges – all bands below 10 LPA. */
export const salaryRanges2021 = [
  { label: "3–<5 LPA", count: 7 },
  { label: "5–<7 LPA", count: 5 },
  { label: "7–<10 LPA", count: 3 },
];

