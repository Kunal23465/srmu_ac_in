export interface PlacementChartYear {
  year: string;
  records: number;
  metric?: string;
  hideValue?: boolean;
}

/** Annual students placed, based on the supplied 2021–2023 placement table. */
export const placementChartYears: PlacementChartYear[] = [
  { year: "2021", records: 287 },
  { year: "2022", records: 440 },
  { year: "2023", records: 656 },
  { year: "2026", records: 800, metric: "Students Placed", hideValue: true },
];

/** Package values (LPA) transcribed from the 20 placement rows supplied for 2026. */
const salaryPackages2026 = [
  6, 5, 15, 15, 6.6, 6.6,
  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
  5, 5, 5, 5,
];

const salaryRangeBands = [
  { label: "5–<7 LPA", includes: (packageLpa: number) => packageLpa >= 5 && packageLpa < 7 },
  { label: "7–<10 LPA", includes: (packageLpa: number) => packageLpa >= 7 && packageLpa < 10 },
  { label: "10–<15 LPA", includes: (packageLpa: number) => packageLpa >= 10 && packageLpa < 15 },
  { label: "15–<20 LPA", includes: (packageLpa: number) => packageLpa >= 15 && packageLpa < 20 },
  { label: "20+ LPA", includes: (packageLpa: number) => packageLpa >= 20 },
];

export const salaryRanges2026 = salaryRangeBands.map(({ label, includes }) => ({
  label,
  count: salaryPackages2026.filter(includes).length,
}));

