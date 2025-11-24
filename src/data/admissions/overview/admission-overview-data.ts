import { customeOverViewType } from "../../../types/home-data-type";
import smiling from "../../../assets/images/admissions/overview/944x1494-11-08022405361127.jpg"
import second from "../../../assets/images/admissions/overview/944x1494--08022405362618.jpg"
import third from "../../../assets/images/admissions/overview/944x1494--08022405363847.jpg"
import fourth from "../../../assets/images/admissions/overview/944x1494-1-08022405364815.jpg"


export const AdmissionsOverviewData: customeOverViewType = {
  heading: "Admission Overview",
  content:
    "Unlock your academic potential with SRMU's streamlined admission process. Explore entry requirements, application procedures, and our various academic pathways. At SRMU, we're dedicated to making the admission process straightforward, ensuring you have the information you need to take the first step towards a future of excellence.",
};


// src/data/data.ts

// Define the shape (type) of a single card object
export interface CardData {
  id: number;
  title: string;
  subtitle: string;
  imageAlt: string;
  imageUrl: string;
  linkTo: string; // The URL/path the card should link to
}

// The actual array of card data
export const CARD_DATA: CardData[] = [
  {
    id: 1,
    title: "After Class",
    subtitle: "10th",
    imageAlt: "Smiling student after 10th class",
    imageUrl: smiling, // Replace with your actual image path
    linkTo: "/after-10th",
  },
  {
    id: 2,
    title: "After Class",
    subtitle: "12th",
    imageAlt: "Students studying in a library after 12th class",
    imageUrl: second, // Replace with your actual image path
    linkTo: "/after-12th",
  },
  {
    id: 3,
    title: "After",
    subtitle: "Graduation",
    imageAlt: "Student walking on campus after graduation",
    imageUrl: third, // Replace with your actual image path
    linkTo: "/after-graduation",
  },
  {
    id: 4,
    title: "After",
    subtitle: "Polytechnic",
    imageAlt: "Students in a workshop after polytechnic",
    imageUrl: fourth, // Replace with your actual image path
    linkTo: "/after-polytechnic",
  },
];