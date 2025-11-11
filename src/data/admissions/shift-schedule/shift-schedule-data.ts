import { customeOverViewType } from "../../../types/home-data-type";
import { TableRowData } from "../../../types/table-data-types";

import shiftWisePlanningFirstYear from "../../../assets/pdf/admissons/shift-schedule/2025-26-shift-planning-for-1st-year-020825060756.pdf";
import busRoutesFirstShift from "../../../assets/pdf/admissons/shift-schedule/srmu-bus-route-shift-1-1--010825113125.pdf";
import busRoutesSecondShift from "../../../assets/pdf/admissons/shift-schedule/srmu-bus-route-shift-2-1--010825113150.pdf";

export const shiftScheduleOverviewData: customeOverViewType = {
  heading: "Shift Schedule",
  content: `
The Shift Schedule outlines the class timings for all first-year programs at SRMU for Session 2025-26. Students are allotted First or Second Shift based on their respective courses. It is important to check your shift timing to ensure timely attendance from Day 1.
Please refer to the detailed program-wise shift allocation list below.`,
};

export const ShiftDetailsData: TableRowData[] = [
  {
    id: 1,
    title: "Shift-wise Planning (First Year only)",
    download: { type: "pdf", url: shiftWisePlanningFirstYear },
  },
  {
    id: 2,
    title: "Bus Routes (First Shift)",
    download: { type: "pdf", url: busRoutesFirstShift },
  },
  {
    id: 3,
    title: "Bus Routes (Second Shift)",
    download: { type: "pdf", url: busRoutesSecondShift },
  },
];

export const ShiftCustomTopFooter = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];
