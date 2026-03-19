import allied from "../../assets/images/home/program-section/undergraduate/allied-health-sciences.jpg"
// import microbiology from "../../assets/images/home/program-section/undergraduate/microbiology-0605240159363.jpg"
// import agriculture from "../../assets/images/home/program-section/undergraduate/agriculture-06102303181750.jpg"
// import ai from "../../assets/images/home/program-section/undergraduate/ai.jpg"
// import biotech from "../../assets/images/home/program-section/undergraduate/biotech-06052402151045.jpg"
// import comapplication from "../../assets/images/home/program-section/undergraduate/comapplication-06052402172651.jpg"
// import computer from "../../assets/images/home/program-section/undergraduate/computer-science-05022408363442.jpg"
// import economics from "../../assets/images/home/program-section/undergraduate/economics-06052402124859.jpg"
// import engineering from "../../assets/images/home/program-section/undergraduate/engineering-06052402032951.jpg"
// import law from "../../assets/images/home/program-section/undergraduate/law-06052402080759.jpg"
// import management from "../../assets/images/home/program-section/undergraduate/management-06052402013513.jpg"
// import media from "../../assets/images/home/program-section/undergraduate/media-06052402111080.jpg"
// import natural from "../../assets/images/home/program-section/undergraduate/natural-science.jpg"
// import nutrition from "../../assets/images/home/program-section/undergraduate/nutrition-07052411002636.jpg"
// import pharmacy from "../../assets/images/home/program-section/undergraduate/pharmacy-06052402060294.jpg"
// import socialwork from "../../assets/images/home/program-section/postgrad/socialwork-22022410252366.jpg"
// import humanities from "../../assets/images/home/program-section/postgrad/humanities-22022410271022.jpg"
// import polytechniclateral from "../../assets/images/home/program-section/polytechnic/polytechnic-lateral.jpg"
// import polytechnicdiploma from "../../assets/images/home/program-section/polytechnic/polytechnic-diploma.jpg"

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
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767085447081_microbiology-0605240159363.jpg",
        link: "/microbiology/undergraduate",
      },
      {
        name: "Nutrition & Dietetics",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767087734143_nutrition-07052411002636.jpg",
        link: "/nutrition-dietetics/undergraduate",
      },
      {
        name: "Artificial Intelligence",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767087983152_technology-human-touch-background-modern-remake-cr-13082512135910.jpg",
        link: "/artificial-intelligence/undergraduate",
      },
      {
        name: "Computer Science Engineering",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767767408725_computer-science-05022408363442.jpg",
        link: "/computer-science-engineering/undergraduate",
      },
      {
        name: "Computer Application",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767095361811_comapplication-06052402172651.jpg",
        link: "/computer-application/undergraduate",
      },
      {
        name: "Agriculture",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767766401677_agriculture-06102303181750.jpg",
        link: "/agriculture/undergraduate",
      },
      
      {
        name: "Biotechnology",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767095575747_biotech-06052402151045.jpg",
        link: "/bio-technology/undergraduate",
      },
      {
        name: "Engineering",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767095876473_engineering-06052402032951.jpg",
        link: "/engineering/undergraduate",
      },
      {
        name: "Management",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767096152998_management-06052402013513.jpg",
        link: "/management/undergraduate",
      },
      {
        name: "Commerce and Economics",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767096326930_economics-06052402124859.jpg",
        link: "/commerce-and-economics/undergraduate",
      },
      {
        name: "Media Studies (Journalism)",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767096539429_media-06052402111080.jpg",
        link: "/media-studies/undergraduate",
      },
      {
        name: "Legal Studies (Law)",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767765443787_law-06052402080759%20(1).jpg",
        link: "/legal-studies-law/undergraduate",
      },
      {
        name: "Pharmacy",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767765647071_pharmacy-06052402060294.jpg",
        link: "/pharmacy/undergraduate",
      },
      {
        name: "Allied Health Sciences",
        img: allied,
        link: "/allied-health-sciences/undergraduate",
      },
      {
        name: "Natural Sciences",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767765987771_science-22022410265426.jpg",
        link: "/natural-sciences/undergraduate",
      },
      {
        name: "Humanities",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767766128111_humanities-22022410271022.jpg",
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
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767087983152_technology-human-touch-background-modern-remake-cr-13082512135910.jpg",
        link: "/artificial-intelligence/postgraduate",
      },
      {
        name: "Computer Science Engineering",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767767408725_computer-science-05022408363442.jpg",
        link: "/computer-science-engineering/postgraduate",
      },
      {
        name: "Computer Application",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767095361811_comapplication-06052402172651.jpg",
        link: "/computer-application/postgraduate",
      },
      
      {
        name: "Agriculture",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767766401677_agriculture-06102303181750.jpg",
        link: "/agriculture/postgraduate",
      },
      {
        name: "Biotechnology",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767095575747_biotech-06052402151045.jpg",
        link: "/bio-technology/postgraduate",
      },
      {
        name: "Engineering",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767095876473_engineering-06052402032951.jpg",
        link: "/engineering/postgraduate",
      },
      {
        name: "Management",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767096152998_management-06052402013513.jpg",
        link: "/management/postgraduate",
      },
      {
        name: "Commerce and Economics",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767096326930_economics-06052402124859.jpg",
        link: "/commerce-and-economics/postgraduate",
      },
      {
        name: "Media Studies (Journalism)",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767096539429_media-06052402111080.jpg",
        link: "/media-studies/postgraduate",
      },
       {
        name: "Legal  Studies (Law)",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767765443787_law-06052402080759%20(1).jpg",
        link: "/legal-studies-law/postgraduate",
      },
      {
        name: "Natural Sciences",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767765987771_science-22022410265426.jpg",
        link: "/natural-sciences/postgraduate",
      },
      {
        name: "Social Work",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767766576548_socialwork-22022410252366.jpg",
        link: "/social-work/postgraduate",
      },
       {
        name: "Humanities",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767766128111_humanities-22022410271022.jpg",
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
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767767408725_computer-science-05022408363442.jpg",
        link: "/computer-science-engineering/integrated",
      },
      {
        name: "Biotechnology",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767095575747_biotech-06052402151045.jpg",
        link: "/bio-technology/integrated",
      },
      {
        name: "Engineering",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767095876473_engineering-06052402032951.jpg",
        link: "/engineering/integrated",
      },
      {
        name: "Legal Studies (Law)",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767765443787_law-06052402080759%20(1).jpg",
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
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767766783118_h71-06022412164235.jpg",
        link: "/polytechnic-lateral/polytechnic-diploma",
      },
      {
        name: "Polytechnic (Diploma)",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767689601101_polytechnic-05022408521642%20(1).jpg",
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
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767087983152_technology-human-touch-background-modern-remake-cr-13082512135910.jpg",
        link: "/artificial-intelligence/industry-honors1",
      },
      {
        name: "Computer Science Engineering",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767767408725_computer-science-05022408363442.jpg",
        link: "/computer-science-engineering/industry-honors1",
      },
      {
        name: "Computer Application",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767095361811_comapplication-06052402172651.jpg",
        link: "/computer-application/industry-honors1",
      },
      {
        name: "Engineering",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767095876473_engineering-06052402032951.jpg",
        link: "/engineering/industry-honors1",
      },
      {
        name: "Management",
        img: "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/program-discipline/1767096152998_management-06052402013513.jpg",
        link: "/management/industry-honors1",
      },
     
    ],
  },
];