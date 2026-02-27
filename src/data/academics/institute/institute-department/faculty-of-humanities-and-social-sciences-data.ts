import { customeOverViewType } from "../../../../types/home-data-type";
import { counterDataType } from "../../../home/counterData";
import vision from "../../../../assets/images/academics/departments/dept-mission-icon2.png";
import mission from "../../../../assets/images/academics/departments/dept-mission-icon1.png";
import shilpaImg from "../../../../assets/images/academics/departments/shilpa-shukla-21062411183124.jpg";
import { InstituteProfile } from "../../../../types/profile-data-type";
import { FeeTableData } from "../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
export const FacultyofHumanitiesandSocialSciencesOverviewData: customeOverViewType = {
  heading: "Faculty of Humanities and Social Sciences",
  content: `Department of Humanities and Social Sciences is a huge department comprising of UGC - NET/JRF qualified faculty members holding doctorate degrees from institutions of national repute. The department is oriented towards promoting quality education and research. The faculty members are devoted to imparting qualitative learning aptitude among the students that enable them crack various competitive examinations like UPSC, PSC, UGC- NET/ JRF etc. The department has been successful in organizing Guest Lectures, Training Workshops, Literary Fest, Socio-economic development programmes and International Conferences on various themes of Global literature, culture, polity, personality development and social thought.`,
  counterSibling:
    "With a focus on a classroom-to-field strategy, FoHS often provides internships and field experience with well-known NGOs and human rights organizations. The department uses a Choice-Based Credit Course approach to provide students with a wide selection of courses across several disciplines. It also offers top-notch research facilities to its teachers and students. The educational facility features an advanced library with over 10,000 books and features on-demand book services for both staff and students. Additionally, the department maintains subscriptions to well-known periodicals, giving staff and students access to the greatest publications in their specialties.",
};
export const FacultyofHumanitiesandSocialSciencesCounterData1: counterDataType[] = [
  { id: 1, value: "2012", suffix: "", label: "Established" },
  { id: 2, value: "35", suffix: "", label: "Faculty & Staff" },
  { id: 3, value: "625", suffix: "", label: "Students" },
];

export const FacultyofHumanitiesandSocialSciencesVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: mission,
    heading: "Mission",
    description:
      "The education and training of highly competent, enquiring and critically minded students in the Humanities by ensuring that the teaching programmes are internationally competitive and locally relevant.:",
    points: [
      "The education and training of highly competent, enquiring and critically minded students in the Humanities by ensuring that the teaching programmes are internationally competitive and locally relevant.",
      "The production of excellent teaching and research results in the Humanities, by employing the best qualified academics and support staff and ensuring that they are developed to their fullest potential.",
      "The application of management principles, guidelines, processes and practices to maintain and improve excellent academic performance in teaching, research and administration.",
      "To ensure, through our work performance and service rendering, that humanistic values are pursued to the benefit of the individual, the University and the communities (including the global community) we serve.",
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: vision,
    heading: "Vision",
    points: [
      "To be recognised nationally and internationally for its excellent contribution in education, research and community work in the humanities, social sciences and arts.",
    ],
  },
];

export const FacultyofHumanitiesandSocialSciencesinstituteProfiles: InstituteProfile[] = [
  {
    id: 1,
    title: "Department Head",
    name: "Dr. Shilpa Shukla",
    position: "Dean, FoHSS, SRMU, Lucknow-Deva Road",
    image: shilpaImg,

    summary: "",

    detailsHeading: "",
    useBullets: false,

    details: [
      "**Qualification: **M.A. (English), Ph.D. (English)",
      "**Experience**: 15+ years",
      "**Specialization/ Area of Research: **Gender Studies, Feminism,Afro-American Literature Women Studies",
      "**Email ID: **dean.hu@srmu.ac.in",
      "**ORCID ID: **https://orcid.org/0000-0002-8276-8886",
      "**Contact No.: **+91-9451371066",
    ],

    modalContent: `Dr. Shilpa Shukla 

`,
  },
];
export const FacultyofHumanitiesandSocialSciencesData1: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],

  rows: [
    {
      course: "M.A. in Psychology",
      duration: "2 Years",
      eligibility: "Click to View",
      fee: "Rs. 42,000/-",
    },
    {
      course: "M.A. in Political Science",
      duration: "2 Years",
      eligibility: "Click to View",
      fee: "Rs. 37,000/-",
    },
    {
      course: "M.A. in Sociology",
      duration: "2 Years",
      eligibility: "Click to View",
      fee: "Rs. 37,000/-",
    },
    {
      course: "M.P.H. (Master in Public Health)",
      duration: "2 Years",
      eligibility: "Click to View",
      fee: "Rs. 37,000/-",
    },
    {
      course: "M.A. in English",
      duration: "2 Years",
      eligibility: "Click to View",
      fee: "Rs. 37,000/-",
    },
    {
      course: "M.S.W. (Master of Social Work)",
      duration: "2 Years",
      eligibility: "Click to View",
      fee: "Rs. 42,000/-",
    },
  ],
};
export const FacultyofHumanitiesandSocialSciencesData2: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],

  rows: [
    {
      course: "B.A.(Hons.) in English",
      duration: "3 Years",
      eligibility: "Click to View",
      fee: "Rs. 32,000/-",
    },
    {
      course: "B.A.(Hons.) in Political Science",
      duration: "3 Years",
      eligibility: "Click to View",
      fee: "Rs. 32,000/-",
    },
    {
      course: "B.A.(Hons.) in Sociology",
      duration: "3 Years",
      eligibility: "Click to View",
      fee: "Rs. 32,000/-",
    },
    {
      course: "B.A.(Hons.) in Applied Psychology",
      duration: "3 Years",
      eligibility: "Click to View",
      fee: "Rs. 32,000/-",
    },
  ],
};

export const FacultyofHumanitiesandSocialSciencesCounterData2 = {
  counterData: [
    {
      id: 1,
      icon: "",
      value: "250",
      suffix: "",
      label: "Guest lectures",
    },
    {
      id: 2,
      icon: "",
      value: "50",
      suffix: "",
      label: "Field Visits",
    },
    {
      id: 3,
      icon: "",
      value: "20",
      suffix: "",
      label: "Conference & Seminars",
    },
  ],

  // Optional classes (can be null or ignored if unused)
  classes: "",
  aboutusClass: "",
};
