import { customeOverViewType } from "../../../../types/home-data-type";
import { counterDataType } from "../../../home/counterData";
import vision from "../../../../assets/images/academics/departments/dept-mission-icon2.png";
import mission from "../../../../assets/images/academics/departments/dept-mission-icon1.png";
import kSrivastavaImg from "../../../../assets/images/academics/departments/krishna-srivastava.jpg";
import { InstituteProfile } from "../../../../types/profile-data-type";
import { FeeTableData } from "../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
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
    },
  ],
};

export const FacultyofChemicalSciencesCounterData2 = {
  counterData: [
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
  ],

  // Optional classes (can be null or ignored if unused)
  classes: "",
  aboutusClass: "",
};