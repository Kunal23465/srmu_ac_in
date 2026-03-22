import microbiology from "../../assets/images/home/program-section/undergraduate/microbiology-0605240159363.jpg"
import agriculture from "../../assets/images/home/program-section/undergraduate/agriculture-06102303181750.jpg"
import ai from "../../assets/images/home/program-section/undergraduate/ai.jpg"
import allied from "../../assets/images/home/program-section/undergraduate/allied-health-sciences.jpg"
import biotech from "../../assets/images/home/program-section/undergraduate/biotech-06052402151045.jpg"
import comapplication from "../../assets/images/home/program-section/undergraduate/comapplication-06052402172651.jpg"
import computer from "../../assets/images/home/program-section/undergraduate/computer-science-05022408363442.jpg"
import economics from "../../assets/images/home/program-section/undergraduate/economics-06052402124859.jpg"
import engineering from "../../assets/images/home/program-section/undergraduate/engineering-06052402032951.jpg"
import law from "../../assets/images/home/program-section/undergraduate/law-06052402080759.jpg"
import management from "../../assets/images/home/program-section/undergraduate/management-06052402013513.jpg"
import media from "../../assets/images/home/program-section/undergraduate/media-06052402111080.jpg"
import natural from "../../assets/images/home/program-section/undergraduate/natural-science.jpg"
import nutrition from "../../assets/images/home/program-section/undergraduate/nutrition-07052411002636.jpg"
import pharmacy from "../../assets/images/home/program-section/undergraduate/pharmacy-06052402060294.jpg"
import socialwork from "../../assets/images/home/program-section/postgrad/socialwork-22022410252366.jpg"
import humanities from "../../assets/images/home/program-section/postgrad/humanities-22022410271022.jpg"
import polytechniclateral from "../../assets/images/home/program-section/polytechnic/polytechnic-lateral.jpg"
import polytechnicdiploma from "../../assets/images/home/program-section/polytechnic/polytechnic-diploma.jpg"

interface ProgramItem {
  name: string;
  img: string;
  link: string;
}

interface ProgramTab {
  id: number;
  title: string;
  programs: ProgramItem[];
}

const undergraduateAiPath = "/artificial-intelligence/undergraduate";
const postgraduateAiPath = "/artificial-intelligence/postgraduate";

export const tabs: ProgramTab[] = [
  {
    id: 1,
    title: "Undergraduate",
    programs: [
      {
        name: "Microbiology",
        img: microbiology,
        link: "/microbiology/undergraduate",
      },
      {
        name: "Nutrition & Dietetics",
        img: nutrition,
        link: "/nutrition-dietetics/undergraduate",
      },
      {
        name: "Artificial Intelligence",
        img: ai,
        link: undergraduateAiPath,
      },
      {
        name: "Computer Science Engineering",
        img: computer,
        link: undergraduateAiPath,
      },
      {
        name: "Computer Application",
        img: comapplication,
        link: undergraduateAiPath,
      },
      {
        name: "Agriculture",
        img: agriculture,
        link: undergraduateAiPath,
      },
      
      {
        name: "Biotechnology",
        img: biotech,
        link: undergraduateAiPath,
      },
      {
        name: "Engineering",
        img: engineering,
        link: undergraduateAiPath,
      },
      {
        name: "Management",
        img: management,
        link: undergraduateAiPath,
      },
      {
        name: "Commerce and Economics",
        img: economics,
        link: undergraduateAiPath,
      },
      {
        name: "Media Studies (Journalism)",
        img: media,
        link: undergraduateAiPath,
      },
      {
        name: "Legal Studies (Law)",
        img: law,
        link: undergraduateAiPath,
      },
      {
        name: "Pharmacy",
        img: pharmacy,
        link: undergraduateAiPath,
      },
      {
        name: "Allied Health Sciences",
        img: allied,
        link: undergraduateAiPath,
      },
      {
        name: "Natural Sciences",
        img: natural,
        link: undergraduateAiPath,
      },
      {
        name: "Humanities",
        img: humanities,
        link: undergraduateAiPath,
      },
     
    ],
  },
  {
    id: 2,
    title: "Postgraduate",
    programs: [
      {
        name: "Artificial Intelligence",
        img: ai,
        link: postgraduateAiPath,
      },
      {
        name: "Computer Science Engineering",
        img: computer,
        link: postgraduateAiPath,
      },
      {
        name: "Computer Application",
        img: comapplication,
        link: postgraduateAiPath,
      },
      
      {
        name: "Agriculture",
        img: agriculture,
        link: postgraduateAiPath,
      },
      {
        name: "Biotechnology",
        img: biotech,
        link: postgraduateAiPath,
      },
      {
        name: "Engineering",
        img: engineering,
        link: postgraduateAiPath,
      },
      {
        name: "Management",
        img: management,
        link: postgraduateAiPath,
      },
      {
        name: "Commerce and Economics",
        img: economics,
        link: postgraduateAiPath,
      },
      {
        name: "Media Studies (Journalism)",
        img: media,
        link: postgraduateAiPath,
      },
       {
        name: "Legal  Studies (Law)",
        img: law,
        link: postgraduateAiPath,
      },
      {
        name: "Natural Sciences",
        img: natural,
        link: postgraduateAiPath,
      },
      {
        name: "Social Work",
        img: socialwork,
        link: postgraduateAiPath,
      },
       {
        name: "Humanities",
        img: humanities,
        link: postgraduateAiPath,
      },
    ],
  },
  {
    id: 3,
    title: "Integrated",
    programs: [
      {
        name: "Computer Science Engineering",
        img: computer,
        link: postgraduateAiPath,
      },
      {
        name: "Biotechnology",
        img: biotech,
        link: postgraduateAiPath,
      },
      {
        name: "Engineering",
        img: engineering,
        link: postgraduateAiPath,
      },
      {
        name: "Legal Studies (Law)",
        img: law,
        link: postgraduateAiPath,
      },
    ],
  },
   {
    id: 4,
    title: "Polytechnic (Diploma)",
    programs: [
      {
        name: "Polytechnic (Lateral)",
        img: polytechniclateral,
        link: postgraduateAiPath,
      },
      {
        name: "Polytechnic (Diploma)",
        img: polytechnicdiploma,
        link: postgraduateAiPath,
      },
     
    ],
  },
   {
    id: 5,
    title: "Industry Honors",
    programs: [
      {
        name: "Artificial Intelligence",
        img: ai,
        link: postgraduateAiPath,
      },
      {
        name: "Computer Science Engineering",
        img: computer,
        link: postgraduateAiPath,
      },
      {
        name: "Computer Application",
        img: comapplication,
        link: postgraduateAiPath,
      },
      {
        name: "Engineering",
        img: engineering,
        link: postgraduateAiPath,
      },
      {
        name: "Management",
        img: management,
        link: postgraduateAiPath,
      },
     
    ],
  },
];
