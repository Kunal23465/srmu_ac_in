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
  { year: "2025", records: 455 },
  { year: "2026", records: 524, metric: "Students Placed" },
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

