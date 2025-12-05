import { customeOverViewType } from "../../types/home-data-type";
import { counterDataType } from "./leadership-and-governance/leadership-and-governance-data";

import visionImg from "../../assets/images/about/aboutUs/vision.png";
import missionImg from "../../assets/images/about/aboutUs/mission-img.jpg";


export interface MissionVisionType {
  id: number;
  image: string;
  heading: string;
  points: string[];
}


export const aboutOverviewData: customeOverViewType = {
  heading: "About SRMU",
  content:
    "Our journey began in 1999, with just 22 students and an unwavering commitment to quality education. Today, SRMU stands as a beacon of academic, cultural, and intellectual excellence, with 11 institutes, a faculty of industry leaders and a vibrant student body.",
};

export const counterDataForAboutPage: counterDataType[] = [
  { id: 1, value: "25", suffix: "+", label: "Years Of Experience" },
  { id: 2, value: "100", suffix: "+", label: "Number Of Courses" },
  { id: 3, value: "12000", suffix: "+", label: "Global Students" },
  { id: 4, value: "15000", suffix: "+", label: "Number Of Placements" },
];

export const effortData = {
  heading: "Our efforts in the shape of SRMU are a continuation of his endless dreams and social commitment...",
  desc: {
    p1: "Shri Ramswaroop Agarwal Ji (1925-1980)",
    p2: "Shri Ramswaroop Agarwal, is the guiding inspiration behind the establishment of Shri Ramswaroop Memorial University. Education of both men and women alike, was very close to his heart. He believed that development and growth of society and country could only be possible through value based education of its masses and adoption of the principles of transparency and ethical conduct. In his opinion sincerity, hard work, steadfastness and passion were the cornerstones for attaining success in life. These virtues were showcased in his thoughts and deeds. Purity of thoughts and means were as important to him as the objective ltself and success was meaningful only when it benefited society, at large. His principles, noble thoughts and dedication to social responsibility are the bedrock of all our actions, endeavors and ventures. We pray to the Almighty to give us strength to follow his path and carry his legacy forward.",
  },
};


export const CustomTopFooterAbout = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];







export const missionvisionData: MissionVisionType[] = [
  {
    id: 1,
    image: visionImg,
    heading: "Vision",
    points: [
      "To become a globally recognized institution for education, research, and nurturing individuals with ethical, social, and ecological awareness, all to contribute to our nation's prosperity.",
    ],
  },
  {
    id: 2,
    image: missionImg,
    heading: "Mission",
    points: [
      "To expand existing programs and introduce new ones aligned with current national and global trends to meet local needs.",
      "To instill wisdom, professional ethics, values, and social awareness in students of diverse backgrounds.",
      "To foster collaboration with both national and international partners to cultivate lifelong learning skills and leadership qualities.",
      "To encourage creativity, innovation, and entrepreneurship among students, promoting excellence in research and consultancy.",
      "To develop a vibrant campus with top-notch physical and educational facilities, emphasizing sustainability and cleanliness.",
    ],
  },
];



export interface CoreValueType {
  id: number;
  title: string;
  description: string;
}

export const coreValuesData: CoreValueType[] = [
  {
    id: 1,
    title: "Student-Centered",
    description: "Our focus is on students, offering interdisciplinary programs that lead to professional excellence, while providing them with every kind of support they need.",
  },
  {
    id: 2,
    title: "Inclusivity and Diversity",
    description:
      "We actively promote and ensure diversity and equity, fostering an inclusive environment for all. Alongside this, we also prioritize environmental, economic, and social sustainability.",
  },
  {
    id: 3,
    title: "Excellence",
    description: "We are dedicated to maintaining academic excellence by delivering quality education, promoting extracurricular activities, and capacity-building.",
  },
  {
    id: 4,
    title: "Integrity & Ethics",
    description:
      "We uphold the highest ethical standards, professionalism, and a commitment to academic freedom. Transparency and accountability are fundamental to our operations.",
  },
  {
    id: 5,
    title: "Participatory Governance",
    description:
      "We believe in shared decision-making. Our outreach programs engage with various different stakeholders in the university and community for consultations and collective deliberations.",
  },
];




export interface CampusSlide {
  id: number;
  image?: string;
  title: string;
  description: string;
}

export const campusSlides: CampusSlide[] = [
  {
    id: 1,
    title: "Holistic Development",
    description: "Encourage students to partake in social welfare activities and to inculcate responsibility towards society and environment.",
  },
  {
    id: 2,
    title: "State-of-the-art Campus",
    description: "Discover SRMU’s state-of-the-art facilities, lush green spaces, and dynamic academic environment. Embark on a journey through our vibrant campus, where innovation meets tradition.",
  },
  {
    id: 3,
    title: "Cutting edge technology",
    description: "“PeopleSoft Oracle” for student support, conduct of classroom activities, evaluation, management of student affairs, Finance and HR services, is used to enhance performance.",
  },
  {
    id: 4,
    title: "Focus on research",
    description: "Robust Research Environment encourages the questioning spirit of faculty and students alike.",
  },
  {
    id: 5,
    title: "Dedicated Placement Cell",
    description: "Ensures industry interface for guest lectures, field visits, collaborations for research, industrial training and generation of employment opportunities.",
  },
  {
    id: 6,
    title: "Exchange Programs",
    description: "Student/faculty exchange programs with leading national and international educational institutes of repute.",
  },
  {
    id: 7,
    title: "Industry Honour Programme",
    description: "SRMU and different industry leaders like IBM etc. have collaborated to provide students of these programs the most advanced and globally accepted curriculum.",
  },
  {
    id: 8,
    title: "Collaboration and Industry Interaction Cell",
    description: "At SRMU we have a focused and dedicated cell to cater to the requirements of different academic departments by collaborating with different global and industrial organizations of repute.",
  },
];