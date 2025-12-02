import { HeadData, RowData } from "../../../utils/custom/CustomScholarshiptable";

export const ScholarshipTableHeadData: HeadData[] = [
    {
        head1: "Percentile in CUET",
        head2: "Scholarship"
    }
]

export const ScholarshipTableData: RowData[] = [
  {
    col1: "> 95.1",
    col2: "100% of yearly tuition fee",

  },
  {
    col1: "90.1 - 95",
    col2: "100% of semester tuition fee",

  },
  {
    col1: "80.1 - 90",
    col2: "50% of semester tuition fee",
  },
  {
    col1: "70.1 - 80",
    col2: "30% of semester tuition fee",
  },
  {
    col1: "50 - 70",
    col2: "20% of semester tuition fee",
  },

];
