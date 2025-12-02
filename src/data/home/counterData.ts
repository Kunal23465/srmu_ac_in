export interface counterDataType {
  id: number;
  icon?: string;
  value: string;
  label: string;
  suffix: string;
}
export const counterDataForHomePage: counterDataType[] = [
  { id: 1, value: "25", suffix: "+", label: "Years Of Experience" },
  { id: 2, value: "100", suffix: "+", label: "Number Of Courses" },
  { id: 3, value: "12000", suffix: "+", label: "Global Students" },
  { id: 4, value: "15000", suffix: "+", label: "Number Of Placements" },
];