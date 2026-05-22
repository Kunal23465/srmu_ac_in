import { customeOverViewType } from "../../../../types/home-data-type";
import { counterDataType } from "../../../home/counterData";
import vision from "../../../../assets/images/academics/departments/dept-mission-icon2.webp";
import mission from "../../../../assets/images/academics/departments/dept-mission-icon1.webp";
import kSrivastavaImg from "../../../../assets/images/academics/departments/krishna-srivastava.webp";
import { InstituteProfile } from "../../../../types/profile-data-type";
import { departmentHighlightscardType, FeeTableData } from "../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../../utils/custom/CustomFacultyListCard";
import dolly from "../../../../assets/images/academics/departments/faculty-of-chemical-science/Dolly Kumari.webp";
import krishna from "../../../../assets/images/academics/departments/faculty-of-chemical-science/Krishna Srivastava.webp";
import rahul from "../../../../assets/images/academics/departments/faculty-of-chemical-science/Dr.-Rahul-Kumar-Vishwakarma.webp";
import sadhna from "../../../../assets/images/academics/departments/faculty-of-chemical-science/Sadhana Singh.webp";
import sumit from "../../../../assets/images/academics/departments/faculty-of-chemical-science/Dr.-Sumit-Chaudhari.webp";
import shailendra from "../../../../assets/images/academics/departments/faculty-of-chemical-science/Dr.-Shailendra-K-Bharti.webp";
import vijay from "../../../../assets/images/academics/departments/faculty-of-chemical-science/Dr.-Vijay-Kumar-Singh.webp";
import { EventItem } from "../../../../utils/custom/CustomEventListCard";
import eveimg1 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/events/img1.webp";
import eveimg2 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/events/img2.webp";
import eveimg3 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/events/img3.webp";
import eveimg4 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/events/img4.webp";
import eveimg5 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/events/img5.webp";
import eveimg6 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/events/img6.webp";
import eveimg7 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/events/img7.webp";
import eveimg8 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/events/img8.webp";
import eveimg9 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/events/img9.webp";
import eveimg10 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/events/img10.webp";
import eveimg11 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/events/img11.webp";
import heighlightimg1 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/departmentHeighlight/img1.webp";
import heighlightimg2 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/departmentHeighlight/img2.webp";
import heighlightimg3 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/departmentHeighlight/img3.webp";
import heighlightimg4 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/departmentHeighlight/img4.webp";
import heighlightimg5 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/departmentHeighlight/img5.webp";
import heighlightimg6 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/departmentHeighlight/img6.webp";
import heighlightimg7 from "../../../../assets/images/academics/departments/faculty-of-chemical-science/departmentHeighlight/img7.webp";
export const FacultyofChemicalSciencesOverviewData: customeOverViewType = {
  heading: "Faculty of Chemical Sciences",
  content: `The Faculty of Chemical Sciences (FoCS) was established under the aegis of the Institute of Natural Sciences and Humanities (INSH) in the year 2012 for the teaching-learning of basic chemistry in all the engineering programs. The department started B.Sc. (Hons.) and Ph.D programs in Chemistry in the year of 2013 while M.Sc. program in Chemistry in 2015. Chemistry is all pervasive in everything we see around us. Chemistry, being the central science, finds applications in areas as diverse as basic sciences, medical, environmental, and biological sciences, engineering, etc. With the advent of nanopesticides, enantioselective organocatalysis, mechanochemistry, directed enzyme revolution, reversible deactivation radical polymerisation, 3D Bioprinting, computational chemistry, etc the science of chemistry has undergone a pattern shift in the last two decades.Our programs, both at the UG and PG levels, are designed keeping in view both the fundamental concepts, and revolutionary technologies. The curricula include industrial visits, seminars, projects and dissertations. The chemistry labs are well equipped with state-of-the-art equipment and instruments and the curricula lays due emphasis on practical. To further enrich the academic and research experience of the students and teachers alike, the faculty organizes conferences, workshops, webinars, faculty development programmes and has the collaborations and MoUs signed with organizations of well repute. We also invite prominent personalities as guest speakers during seminars and conferences. We have a few outreach activities to the credit for example, during Covid-19 pandemic period, our department distributed 4500 litres of hand sanitizer in the nearby villages prepared in our lab.`,
  counterSibling:
    "The faculty members are from prestigious national and international institutions with rich and diverse research and teaching experience. Their research area varies natural product chemistry, computational chemistry and organic synthesis for medicinal uses, solid-state green chemistry, material science, phase transition and polymorphism, crystal growth and crystal engineering etc. and they have expertise in designing and synthesis of novel binary organic materials such as compounds, eutectics, deep eutectics, nanomaterials and electro-ceramics by adopting solid-state green methodology etc. They have publications in high impact peer-reviewed journals and are actively engaged in research activities. The faculty members also have many patents published to their credits.",
};
export const FacultyofChemicalSciencesCounterData1: counterDataType[] = [
  { id: 1, value: "2012", suffix: "", label: "Established" },
  { id: 2, value: "12", suffix: "", label: "Faculty & Staff" },
  { id: 3, value: "405", suffix: "", label: "Students" },
];

export const FacultyofChemicalSciencesVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: mission,
    heading: "Mission",
    description: "To encourage our students to pursue Mathematics with a purpose of acquiring knowledge for future applications and for that we:",
    points: [
      "The Chemistry Department is committed to prepare competitive, professional graduates and post-graduates within an innovative and intellectually stimulating environment.",
      "To support other academic programs of the University by offering quality chemistry learning experiences, conduct basic and applied research of national and international impact.",
      "To build proactive partnerships with industry and offer effective training, educational and technical services to the society.",
      "To instill among students integrity, professionalism and lifelong learning.",
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: vision,
    heading: "Vision",
    points: [
      "To build a foundation for excellence and development of the institution, by igniting and nurturing enthusiasm, interests and passion, in the study of chemistry, in professional courses, through interdisciplinary research, innovation and collaboration.",
    ],
  },
];

export const FacultyofChemicalSciencesinstituteProfiles: InstituteProfile[] = [
  {
    id: 1,
    title: "Department Head",
    name: "Prof. (Dr.) Krishna Srivastava",
    position: "Dean, FoMS, SRMU, Lucknow-Deva Road",
    image: kSrivastavaImg,

    summary: "",

    detailsHeading: "",
    useBullets: false,

    details: [
      "**Qualification: **M.Sc. (Chemistry), Ph.D. (Chemistry)",
      "**Experience**: 21+ years",
      "**Specialization/ Area of Research: **Synthesis of Hetrocyclic Medicinal Compound",
      "**Email ID: **dean.cy@srmu.ac.in",
      "**ORCID ID: **https://orcid.org/0000-0002-8276-8886",
      "**Contact No.: **+91-9415797078",
    ],

    modalContent: ` Dr. Krishna Srivastava holds M.Sc., Ph.D. and presently working as a Professor and Dean, Faculty of Chemical Sciences. He completed his Ph.D. from University of Lucknow in the year 2006 in Heterocyclic Medicinal compounds. Dr. Srivastava has more than 75 research publications, 18 patents (10 granted and 8 sent for publication) and several book chapters. Dr. Srivastava has authored several text and reference books related to Organic Chemistry. A total of 6 fellows have been awarded their doctorate under his supervision while 4 research scholars are undergoing their Ph.D. at present. He is associated with a number of professional bodies like Vigyan Bharati, Indian Science Congress Association (ISCA), Uttar Pradesh Science Academy (UPSA) and Translational Biomedical Research Society (TBRS), Chemistry Teachers Association with the life-membership. He has conducted several National and International Conferences, Seminars, Workshops and Faculty Development Programmes (FDPs). He has delivered expert talks in India as well as abroad. 

His research area encompasses medicinal chemistry, computational chemistry, organometallic chemistry and synthesis chemistry. Besides, Dr Srivastava has also been the Chief Warden and Chief Proctor of the University for many years.
`,
  },
];
export const FacultyofChemicalSciencesData1: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],

  rows: [
    {
      course: "M.Sc. in Chemistry",
      duration: "2 Years",
      eligibility: "Click to View",
      fee: "Rs. 47,000/-",
      link:"program/m-sc-chemistry",
    },
  ],
};
export const FacultyofChemicalSciencesData2: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],

  rows: [
    {
      course: "B.Sc.(Hons.) in Chemistry",
      duration: "3 Years",
      eligibility: "Click to View",
      fee: "Rs. 42,000/-",
      link:"program/b-sc-hons-chemistry",
    },
  ],
};

export const FacultyofChemicalSciencesCounterData2: counterDataType[] =  [
    {
      id: 1,
      icon: "",
      value: "125",
      suffix: "",
      label: "Guest lectures",
    },
    {
      id: 2,
      icon: "",
      value: "25",
      suffix: "",
      label: "Field Visits",
    },
    {
      id: 3,
      icon: "",
      value: "10",
      suffix: "",
      label: "Conference & Seminars",
    },
  ];
export const PlacedStudentsDataOfFacultyChemicalScienceData: FacultyItem[] = [
  {
    id: 1,
    name: "Dr. Sumit Chaudhary",
    designation: "Assistant Professor",
    image: sumit,
  },
  {
    id: 2,
    name: "Dr. Rahul Kumar Vishwakarma",
    designation: "Assistant Professor",
    image: rahul,
  },
  {
    id: 3,
    name: "Dr. Dolly Kumari",
    designation: "Assistant Professor",
    image: dolly,
  },
  {
    id: 4,
    name: "Dr. Sadhana Singh",
    designation: "Assistant Professor",
    image: sadhna,
  },
  {
    id: 5,
    name: "Prof. (Dr.) Krishna Srivastava",
    designation: "Professor",
    image: krishna,
  },
   {
    id: 6,
    name: "Prof. (Dr.) Shailendra K Bharti",
    designation: "Professor",
    image: shailendra,
  },
   {
    id: 7,
    name: "Prof. (Dr.) Vijay Kumar Singh",
    designation: "Professor",
    image: vijay,
  },
];

export const EventsOfDepartmentsOfFacultiesOfChemicalScienceData: EventItem[] = [
  {
    id: 1,
    title: "Guest Lecture",
    speaker: "Dr. Brijesh Rathi",
    topic: "Various Career Prospects in Chemistry",
    date: "06th October, 2018",
    image: eveimg1,
    cardBgColor: "#ffffff",
  },
  {
    id: 2,
    title: "Guest Lecture",
    speaker: "Dr. Sanjeev Kumar Shukla (Senior Scientist, CSIR-CDRI)",
    topic: "The application of Nuclear Magnetic Resonance",
    date: "28th September, 2018",
    image: eveimg2,
    cardBgColor: "#ffffff",
  },
  {
    id: 3,
    title: "Guest Lecture",
    speaker: "Dr. Dinesh Kumar (Associate Professor, SGPGIMS Campus, Lucknow)",
    topic: "NMR Spectroscopy for Biomarker Discovery and Therapeutic Development",
    date: "14th May, 2022",
    image: eveimg3,
    cardBgColor: "#ffffff",
  },
  {
    id: 4,
    title: "Industrial Visit",
    topic: "Demonstration and Handling of GCMS",
    date: "27th September, 2018",
    image: eveimg4,
    cardBgColor: "#ffffff",
  },
  {
    id: 5,
    title: "Industrial Visit",
    topic: "Awareness about Nutrition, Exercises, Diseases & Yoga",
    date: "27th September, 2023",
    image: eveimg5,
    cardBgColor: "#ffffff",
  },
  {
    id: 6,
    title: "National Conference",
    topic: "Recent Approaches and Innovations in Chemical Sciences (RAICS)",
    date: "02nd–03rd November, 2018",
    image: eveimg6,
    cardBgColor: "#ffffff",
  },
  {
    id: 7,
    title: "Seminar",
    topic: "Innovation for Nation: Innovate for New India",
    date: "03rd March, 2020",
    image: eveimg7,
    cardBgColor: "#ffffff",
  },
  {
    id: 8,
    title: "Workshop",
    topic: "Important Techniques for Characterization of Molecules",
    date: "25th–29th March, 2019",
    image: eveimg8,
    cardBgColor: "#ffffff",
  },
  {
    id: 9,
    title: "National Seminar",
    topic: "Applications of Technical Terminology in Science & Technology",
    date: "23rd–24th October, 2019",
    image: eveimg9,
    cardBgColor: "#ffffff",
  },
  {
    id: 10,
    title: "National Symposium",
    speaker: "Professor (Dr.) Gajanan Pandey",
    topic: "Advancements in Chemical Field",
    date: "28th–29th April, 2023",
    image: eveimg10,
    cardBgColor: "#ffffff",
  },
  {
    id: 11,
    title: "Workshop",
    topic: "Computer Aided Molecular Modeling",
    date: "20th–25th May, 2023",
    image: eveimg11,
    cardBgColor: "#ffffff",
  },
];

export const DepartmentHighlightsOfFacultiesOfChemicalScienceData: departmentHighlightscardType[] = [
  {
    title: "High-quality instruction and multidisciplinary research",
    description: "The department promotes multidisciplinary research and works in conjunction with other departments and organizations to tackle practical issues and obstacles.",
    image: heighlightimg1,
  },
  {
    title: "Specialized guidance for clearing competitive exams",
    description:
      "The department offers students preparing for major competitive examinations like IIT-JAM, Central Universities, JEST, etc., a solid educational foundation in a variety of scientific fields.",
    image: heighlightimg2,
  },
  {
    title: "Highly skilled instructors with a wide range of experience",
    description: "Faculty members have master's and doctoral degrees from reputable institutions and have experience working on both domestic and foreign research projects.",
    image: heighlightimg3,
  },
  {
    title: "Modern infrastructure for practical learning",
    description:
      "With cutting-edge labs and facilities, the department provides immersive learning opportunities and hands-on training that prepares students for successful careers in academia, research, and industry.",
    image: heighlightimg4,
  },
  {
    title: "Curriculum & structure in accordance with NEP-2020",
    description:
      "The department is committed to providing a vibrant learning environment and offers programs designed and implemented in compliance with NEP 2020, providing multiple entry and exit options.",
    image: heighlightimg5,
  },
  {
    title: "Partnering with organizations to encourage research",
    description: "The department promotes a strong research ecosystem through collaboration with reputed academic institutions and industrial organizations.",
    image: heighlightimg6,
  },
  {
    title: "Notable alumni with a consistent track record",
    description:
      "Several reputable national and international governmental and non-governmental organizations employ the department's graduates as academics, analysts, entrepreneurs and research associates.",
    image: heighlightimg7,
  },
];
