export interface counterDataType {
  id: number;
  icon?: string;
  value: string;
  label: string;
  suffix: string;
}
export const counterDataForHomePage: counterDataType[] = [
  { id: 1, value: "20", suffix: "+", label: "Years Of Experience" },
  { id: 2, value: "20", suffix: "+", label: "Number Of Courses" },
  { id: 3, value: "3700", suffix: "+", label: "Students" },
  { id: 4, value: "1000", suffix: "+", label: "Number Of Placements" },
];