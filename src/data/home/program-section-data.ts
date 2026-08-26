import allied from "../../assets/images/home/program-section/undergraduate/allied-health-sciences.jpg";
import microbiology from "../../assets/images/home/program-section/undergraduate/microbiology-0605240159363.jpg";
import agriculture from "../../assets/images/home/program-section/undergraduate/agriculture-06102303181750.jpg";
import ai from "../../assets/images/home/program-section/undergraduate/ai.jpg";
import biotech from "../../assets/images/home/program-section/undergraduate/biotech-06052402151045.jpg";
import comapplication from "../../assets/images/home/program-section/undergraduate/comapplication-06052402172651.jpg";
import computer from "../../assets/images/home/program-section/undergraduate/computer-science-05022408363442.jpg";
import economics from "../../assets/images/home/program-section/undergraduate/economics-06052402124859.jpg";
import engineering from "../../assets/images/home/program-section/undergraduate/engineering-06052402032951.jpg";
import law from "../../assets/images/home/program-section/undergraduate/law-06052402080759.jpg";
import management from "../../assets/images/home/program-section/undergraduate/management-06052402013513.jpg";
import media from "../../assets/images/home/program-section/undergraduate/media-06052402111080.jpg";
import natural from "../../assets/images/home/program-section/undergraduate/natural-science.jpg";
import nutrition from "../../assets/images/home/program-section/undergraduate/nutrition-07052411002636.jpg";
import pharmacy from "../../assets/images/home/program-section/undergraduate/pharmacy-06052402060294.jpg";
import socialwork from "../../assets/images/home/program-section/postgrad/socialwork-22022410252366.jpg";
import humanities from "../../assets/images/home/program-section/postgrad/humanities-22022410271022.jpg";
import polytechniclateral from "../../assets/images/home/program-section/polytechnic/polytechnic-lateral.jpg";
import polytechnicdiploma from "../../assets/images/home/program-section/polytechnic/polytechnic-diploma.jpg";

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
        link: "/artificial-intelligence/undergraduate",
      },
      {
        name: "Computer Science Engineering",
        img: computer,
        link: "/computer-science-engineering/undergraduate",
      },
      {
        name: "Computer Application",
        img: comapplication,
        link: "/computer-application/undergraduate",
      },
      {
        name: "Agriculture",
        img: agriculture,
        link: "/agriculture/undergraduate",
      },
      {
        name: "Biotechnology",
        img: biotech,
        link: "/bio-technology/undergraduate",
      },
      {
        name: "Engineering",
        img: engineering,
        link: "/engineering/undergraduate",
      },
      {
        name: "Management",
        img: management,
        link: "/management/undergraduate",
      },
      {
        name: "Commerce and Economics",
        img: economics,
        link: "/commerce-and-economics/undergraduate",
      },
      {
        name: "Media Studies (Journalism)",
        img: media,
        link: "/media-studies/undergraduate",
      },
      {
        name: "Legal Studies (Law)",
        img: law,
        link: "/legal-studies-law/undergraduate",
      },
      {
        name: "Pharmacy",
        img: pharmacy,
        link: "/pharmacy/undergraduate",
      },
      {
        name: "Allied Health Sciences",
        img: allied,
        link: "/allied-health-sciences/undergraduate",
      },
      {
        name: "Natural Sciences",
        img: natural,
        link: "/natural-sciences/undergraduate",
      },
      {
        name: "Humanities",
        img: humanities,
        link: "/humanities/undergraduate",
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
        link: "/artificial-intelligence/postgraduate",
      },
      {
        name: "Computer Science Engineering",
        img: computer,
        link: "/computer-science-engineering/postgraduate",
      },
      {
        name: "Computer Application",
        img: comapplication,
        link: "/computer-application/postgraduate",
      },
      {
        name: "Agriculture",
        img: agriculture,
        link: "/agriculture/postgraduate",
      },
      {
        name: "Biotechnology",
        img: biotech,
        link: "/bio-technology/postgraduate",
      },
      {
        name: "Engineering",
        img: engineering,
        link: "/engineering/postgraduate",
      },
      {
        name: "Management",
        img: management,
        link: "/management/postgraduate",
      },
      {
        name: "Commerce and Economics",
        img: economics,
        link: "/commerce-and-economics/postgraduate",
      },
      {
        name: "Media Studies (Journalism)",
        img: media,
        link: "/media-studies/postgraduate",
      },
      {
        name: "Legal Studies (Law)",
        img: law,
        link: "/legal-studies-law/postgraduate",
      },
      {
        name: "Natural Sciences",
        img: natural,
        link: "/natural-sciences/postgraduate",
      },
      {
        name: "Social Work",
        img: socialwork,
        link: "/social-work/postgraduate",
      },
      {
        name: "Humanities",
        img: humanities,
        link: "/humanities/postgraduate",
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
        link: "/computer-science-engineering/integrated",
      },
      {
        name: "Biotechnology",
        img: biotech,
        link: "/bio-technology/integrated",
      },
      {
        name: "Engineering",
        img: engineering,
        link: "/engineering/integrated",
      },
      {
        name: "Legal Studies (Law)",
        img: law,
        link: "/legal-studies-law/integrated",
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
        link: "/polytechnic-lateral/polytechnic-diploma",
      },
      {
        name: "Polytechnic (Diploma)",
        img: polytechnicdiploma,
        link: "/polytechnic/polytechnic-diploma",
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
        link: "/artificial-intelligence/industry-honors1",
      },
      {
        name: "Computer Science Engineering",
        img: computer,
        link: "/computer-science-engineering/industry-honors1",
      },
      {
        name: "Computer Application",
        img: comapplication,
        link: "/computer-application/industry-honors1",
      },
      {
        name: "Engineering",
        img: engineering,
        link: "/engineering/industry-honors1",
      },
      {
        name: "Management",
        img: management,
        link: "/management/industry-honors1",
      },
    ],
  },
];
