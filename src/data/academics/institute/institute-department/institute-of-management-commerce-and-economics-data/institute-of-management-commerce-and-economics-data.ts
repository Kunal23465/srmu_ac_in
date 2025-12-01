import { customeOverViewType } from "../../../../../types/home-data-type";
import vision from "../../../../../assets/images/academics/institutes/vision-card/Our-vision-13102304415245.png";
import mission from "../../../../../assets/images/academics/institutes/vision-card/Our-Mission-13102304092698.png";
import { CustomInstituteCourseCardProps } from "../../../../../utils/custom/CustomInstituteCoursesCard";
import courseImg1 from "../../../../../assets/images/academics/departments/commerce-07052412092026.jpg";
import courseImg2 from "../../../../../assets/images/academics/departments/management1-07052412144882.jpg";
import { InstituteProfile } from "../../../../../types/profile-data-type";
import AswaniImg from "../../../../../assets/images/academics/departments/aswani-26042512341893.jpg"
import missionImg from "../../../../../assets/images/academics/departments/dept-mission-icon1.png";
import vissionImg from "../../../../../assets/images/academics/departments/dept-mission-icon2.png";
import { counterDataType } from "../../../../about/leadership-and-governance/leadership-and-governance-data";
import veenaImg from "../../../../../assets/images/academics/institutes/dr-veena-singh.png";
import { FacultyItem } from "../../../../../utils/custom/CustomFacultyListCard";
import facultyImg1 from "../../../../../assets/images/academics/institutes/faculty/avantika.png";
import facultyImg2 from "../../../../../assets/images/academics/institutes/faculty/karnika.png";
import facultyImg3 from "../../../../../assets/images/academics/institutes/faculty/arachana.png";
import facultyImg4 from "../../../../../assets/images/academics/institutes/faculty/khushboo.png";
import facultyImg5 from "../../../../../assets/images/academics/institutes/faculty/avnare.png";
import facultyImg6 from "../../../../../assets/images/academics/institutes/faculty/syed.png";
import facultyImg7 from "../../../../../assets/images/academics/institutes/faculty/vaibhav.png";
import facultyImg8 from "../../../../../assets/images/academics/institutes/faculty/swati.png";
import facultyImg9 from "../../../../../assets/images/academics/institutes/faculty/smriti.png";
import facultyImg10 from "../../../../../assets/images/academics/institutes/faculty/shivangi.png";
import facultyImg11 from "../../../../../assets/images/academics/institutes/faculty/manoj.png";
import facultyImg12 from "../../../../../assets/images/academics/institutes/faculty/veena.png";
import facultyImg13 from "../../../../../assets/images/academics/institutes/faculty/dr.-gayatri-negi.jpg";
import facultyImg14 from "../../../../../assets/images/academics/institutes/faculty/dr.-nancy-gupta.jpg";
import facultyImg15 from "../../../../../assets/images/academics/institutes/faculty/ms.seema-shukla.jpg";
import facultyImg16 from "../../../../../assets/images/academics/institutes/faculty/dr.asha-srivastava.jpg";
import facultyImg17 from "../../../../../assets/images/academics/institutes/faculty/ms.rakshan.jpg";
import facultyImg18 from "../../../../../assets/images/academics/institutes/faculty/dr.-amit-trivedi.png";
import { departmentHighlightscardType } from "../../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import depSlide1 from "../../../../../assets/images/academics/institutes/key-highlight/learning-07052412154679.jpg";
import depSlide2 from "../../../../../assets/images/academics/institutes/key-highlight/virtual-07022411154738.jpg";
import depSlide3 from "../../../../../assets/images/academics/institutes/key-highlight/with-ibm-07052412162437.jpg";
import depSlide4 from "../../../../../assets/images/academics/institutes/key-highlight/industry-certification-07022411152926.jpg";
import depSlide5 from "../../../../../assets/images/academics/institutes/key-highlight/industrystalwart-07022411132386.jpg";
import depSlide6 from "../../../../../assets/images/academics/institutes/key-highlight/bsc-it-07022411165864.jpg";
import depSlide7 from "../../../../../assets/images/academics/institutes/key-highlight/entrepreneurialecosystem-0702241115095.jpg";
import { Student } from "../../../../../utils/custom/CustomPlacedStudentTable";
import { counterDataForFacultyManagement, managementCounterData2, managementDepartmentHeadData, managementDepartmentHighlights, managementDepartmentVMData, managementfacultyData, managementFeeData, managementFeeData1, managementFeeData2, managementOverviewData, managementPlacedStudents } from "./faculty-of-management-data";
export const InstituteofManagementCommerceandEconomicsOverviewData: customeOverViewType = {
  heading: "Institute of Management, Commerce and Economics",
  content:
    "The Institute of Management, Commerce and Economics (IMCE) was started in the year 2012. The highly qualified teaching members of the Institute of Management, Commerce & Economics offer state-of-the-art business education, preparing students for the quickly changing corporate environment. The Institute aggressively seeks for outstanding scholars who are committed to developing the next generation of leaders from all across the world. Modern amenities provided by the institute include smart classrooms equipped with latest ICT resources, a completely wi-fi environment, cutting-edge computer laboratories, well-stocked libraries, on-campus cafeterias, and sports facilities.",
  counterSibling:
    "The institute's instructional strategies include in-depth workshops, fieldwork, lectures, tutorials, seminars, and presentations. A flexible credit system that enables students to follow their own academic interests and benefit from a variety of educational opportunities is advantageous to them. IMCE seeks to be a trailblazer in management education through strong academic-industry collaboration, promoting entrepreneurial programs, and developing initiatives for international alliances. IMCE thrusts on creating an innovative, ethical and intellectual environment with a focus on leadership and management in a technology intensive global market. IMCE has been playing a pivotal role in the growth of students and scholars through blend of theory and practice, using highly innovative teaching pedagogy.",
};

export const InstituteofManagementCommerceandEconomicsTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const InstituteofManagementCommerceandEconomicsvisionMissionData = {
  backgroundColor: "#0f4a85",
  vision: {
    title: "Our Vision",
    description: [
      "To be a leading institute where knowledge and excellence&nbsp;shall be delivered through strong academic business collaborations for holistic development of students which will make them more creative and productive members of the country.",
    ],
    buttonText: "Vision",
    buttonBgColor: "bg-amber-400",
    imageUrl: vision,
  },

  mission: {
    title: "Our Mission",
    description: [
      "Offering high quality programs to prepare students to excel in a global and rapidly changing environment.",
      "Integrating theory and practice in programs helping student for successful employment and continuing higher education.",
      "Nurturing students through an advanced curriculum and effective pedagogy emphasizing on experiential learning to grow in their career and life.",
    ],
    buttonText: "Mission",
    buttonBgColor: "bg-amber-400",
    imageUrl: mission,
  },
};


export const InstituteofManagementCommerceandEconomicsinstituteProfiles: InstituteProfile[] = [
  {
    id: 1,
    title: "Institute Head",
    name: "Prof. (Dr.) Aswani Kumar",
    position: "Director IMCE, SRMU, Lucknow-Deva Road",
    image: AswaniImg,

    summary:
      "",

    detailsHeading: "",
    useBullets: false,

    details: [
      "**Qualification: **M.Sc., M.B.A., Ph.D.",
      "**Experience**: 25+ years",
      "**Specialization/ Area of Research: **Quantitative Techniques, Business Statistics, Research Methodology",
      "**Email ID: **director.mgmt@srmu.ac.in",
      "**Contact No.: **+91-9935832234",
    ],

    modalContent: `Dr. Aswani Kumar has an experience of more than 25 years in the field of academics, research and administration in several national and international institutes and Universities.  His experience lies in editing, reviewing research, academia and administration. He has a proven track record of strategic planning, academic excellence, and faculty development to enhance the institution’s reputation and student success. He has 18 research publications in international journals of repute & over 25 presentations at National and International Conferences. He was also involved in administrative responsibilities at International Universities. His experience also includes design of research and consultancy projects for government and corporate houses.`
  },


];
export const commerceAndEconomicsOverviewData: customeOverViewType = {
  heading: "Faculty of Commerce and Economics",
  content:
    "The Faculty of Commerce and Economics (FoC&E) started in the year 2012 as a department of Institute of Management, Commerce and Economics (IMCE) of Shri Ramswaroop Memorial University. It offers most advance and practical knowledge through its under graduate and postgraduate level programmes. The scientific pedagogy and industry vetted curriculum prepare the students for leadership roles in all functional areas of Commerce and Economics. A variety of teaching methods are deployed by the Faculty of Commerce & Economics, comprising lectures, role plays, case studies, group discussions, and seminars. The modern infrastructure offers a great study environment, and the faculty members are highly skilled. The department also arranges interactive seminars with well-known business leaders, which benefit students' general growth.",
};
export const counterDataForFacultyCommerce: counterDataType[] = [
  { id: 1, value: "2012", suffix: "", label: "Established" },
  { id: 2, value: "14", suffix: "", label: "Faculty & Staff" },
  { id: 3, value: "350", suffix: "", label: "Students" },
];

export const commerceAndEconomicsDepartmentVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: missionImg,
    heading: "Mission",
    points: [
      "Offer high quality education to prepare students with up to date and state-of-the art pedagogy to excel in a global environment.",
      "Strengthen the teaching-learning process through innovative practices and integrating theory and practice in teaching and research for successful employment and continuing higher education.",
      "Instill a competitive yet humane spirit in students through an advanced curriculum and effective pedagogy emphasizing on the holistic development to grow in their career and life as well",
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: vissionImg,
    heading: "Vision",
    points: [
      "To be a valued department which envisions to provide excellent and value-based Commerce and Economics education for the holistic development of the students to be productive members of society.",
    ],
  },
];

export const commerceAndEconomicsDepartmentHeadData: InstituteProfile[] = [
  {
    id: 1,
    title: "Department Head",
    name: "Dr. Veena Singh",
    position: "HoD Comm. & Eco., SRMU, Lucknow-Deva Road",
    image: veenaImg,

    summary: "",

    detailsHeading: "",
    useBullets: false,

    details: [
      "**Qualification: **M.A.(Economics), Ph.D.",
      "**Experience**: 20+ years",
      "**Specialization/ Area of Research: **Corporate Social Responsibility (CSR), Microfinance, Economics, Women Entrepreneurship, Agricultural Economics",
      "**Email ID: **hod.commerceeconomics@srmu.ac.in",
      "**Contact No.: **+91-7599122275",
    ],

    modalContent: `**Dr. Veena Singh** s a seasoned academician and researcher, currently serving as the Head of the Department of Commerce and Economics, as well as a Research Supervisor. She holds a Ph.D. in Finance from the prestigious University of Allahabad. With core specializations in Finance and International Trade, Dr. Singh has contributed significantly to both teaching and research. She has published extensively in reputed national and international peer-reviewed journals, including platforms like Springer, Elsevier, UGC CARE-listed, and Scopus-indexed journals. She has also presented papers at numerous national and international conferences, reflecting her active engagement with the broader academic community.

Dr. Singh is presently supervising four Ph.D. scholars, guiding them in diverse and socially relevant research areas such as Corporate Social Responsibility (CSR), Microfinance, Economics, Women Entrepreneurship, and Agricultural Economics. Her academic leadership is further demonstrated through her contributions to four book chapters and her role as Chief Editor for two edited volumes. With a deep commitment to interdisciplinary research, scholarly publishing, and mentorship, Dr. Veena Singh continues to be a highly respected figure in the academic world.
`,
  },
];
export interface FeeTableRow {
  [key: string]: string | number | React.ReactNode;
  eligibilityContent?: string | React.ReactNode;
}
export interface FeeTableData {
  columns: string[];
  rows: FeeTableRow[];
  notes?: string[];
}
export const commerceAndEconomicsFeeData: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],
  rows: [
    {
      course: "M.Com.",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 50,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.Com.</h2>
       <p>Candidate must have passed B.Com. with minimum aggregate marks of 50% or equivalent grade for GEN/OBC and 45% marks or equivalent grade for SC/ST Category.</p>
      `,
    },
    {
      course: "M.Sc. in Economics",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 50,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.Sc. in Economics</h2>
       <p>Candidates must have completed a Bachelor’s degree in Economics or any related discipline (like Commerce, Mathematics, or Statistics) from a recognized university with a minimum of 50% marks (45% for SC/ST candidates).</p>
      `,
    },
  ],
};

export const commerceAndEconomicsFeeData1: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],
  rows: [
    {
      course: "B.Com.(Hons.) with L&T",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 87,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Com.(Hons.) with L&T</h2>
       <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board with Commerce or related subjects/Maths with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.</p>
      `,
    },
    {
      course: "B.A.(Hons.) in Economics",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 42,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.A.(Hons.) in Economics</h2>
       <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board with Commerce or related subjects/Maths with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.</p>
      `,
    },
    {
      course: "B.Com. (Bachelor of Commerce)",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 30,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Com. (Bachelor of Commerce)</h2>
       <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board with Commerce or related subjects/Maths with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.</p>
      `,
    },
  ],
};


export const facultyData: FacultyItem[] = [
  {
    id: 1,
    name: "Ms.Avantika Tripathi",
    designation: "Assistant Professor",
    image: facultyImg1,
    // cardBgColor: "#001219",
  },
  {
    id: 2,
    name: "Dr.Karnika Srivastava",
    designation: "Associate Professor",
    image: facultyImg2,
    // cardBgColor: "#003049",
  },
  {
    id: 3,
    name: "Ms.Arachana Mohanty",
    designation: "Assistant Professor",
    image: facultyImg3,
    // cardBgColor: "#370617",
  },
  {
    id: 4,
    name: "Ms.Khushboo Joshi",
    designation: "Assistant Professor",
    image: facultyImg4,
    // cardBgColor: "#283618",
  },
  {
    id: 5,
    name: "Mr.Avnare Singh",
    designation: "Assistant Professor",
    image: facultyImg5,
    // cardBgColor: "#432818",
  },
  {
    id: 6,
    name: "Mr.Syed Mohd Azeem",
    designation: "Assistant Professor",
    image: facultyImg6,
    // cardBgColor: "#432818",
  },
  {
    id: 7,
    name: "Dr.Vaibhav Sharma",
    designation: "Assistant Professor",
    image: facultyImg7,
    // cardBgColor: "#432818",
  },
  {
    id: 8,
    name: "Dr.Swati Tiwari",
    designation: "Assistant Professor",
    image: facultyImg8,
    // cardBgColor: "#432818",
  },
  {
    id: 9,
    name: "Ms.Smriti Singh",
    designation: "Assistant Professor",
    image: facultyImg9,
    // cardBgColor: "#432818",
  },
  {
    id: 10,
    name: "Ms.Shivangi Nigam",
    designation: "Assistant Professor",
    image: facultyImg10,
    // cardBgColor: "#432818",
  },
  {
    id: 11,
    name: "Prof. (Dr.) Manoj Kumar",
    designation: "Professor",
    image: facultyImg11,
    // cardBgColor: "#432818",
  },
  {
    id: 12,
    name: "Dr.Veena Singh",
    designation: "Assistant Professor",
    image: facultyImg12,
    // cardBgColor: "#432818",
  },
  {
    id: 13,
    name: "Dr.Gayatri Negi",
    designation: "Assistant Professor",
    image: facultyImg13,
    // cardBgColor: "#432818",
  },
  {
    id: 14,
    name: "Dr.Nancy Gupta",
    designation: "Assistant Professor",
    image: facultyImg14,
    // cardBgColor: "#432818",
  },
  {
    id: 15,
    name: "Ms.Seema Shukla",
    designation: "Assistant Professor",
    image: facultyImg15,
    // cardBgColor: "#432818",
  },
  {
    id: 16,
    name: "Dr.Asha Srivastava",
    designation: "Assistant Professor",
    image: facultyImg16,
    // cardBgColor: "#432818",
  },
  {
    id: 17,
    name: "Dr. Rakhshan",
    designation: "Assistant Professor",
    image: facultyImg17,
    // cardBgColor: "#432818",
  },
  {
    id: 18,
    name: "Dr. Amit Trivedi",
    designation: "Assistant Professor",
    image: facultyImg18,
    // cardBgColor: "#432818",
  },
];


export const departmentHighlights: departmentHighlightscardType[] = [
  {
    image: depSlide1,
    title: "Amplifying learning experience through innovative pedagogy",
    description:
      "To provide students with the best possible learning experience, the department uses different approaches to teaching, including lectures, case studies, role plays, group discussions and seminars.",
  },
  {
    image: depSlide2,
    title: "Regular mentoring for ICWA / ICAI",
    description:
      "Special modules have been incorporated in curricula and regular mentoring is done to provide assistance to the students preparing for ICWA, ICAI etc.",
  },
  {
    image: depSlide3,
    title: "Structuring coursework as per NEP-2020",
    description:
      "In the context of higher education, departments provide flexible study routes that let students select their academic paths with a variety of entry and exit options.",
  },
  {
    image: depSlide4,
    title: "Industry certification courses for better acumen",
    description:
      "Comprehensive understanding of the financial securities markets, including bonds, stocks, and commodities, is provided by certification programs offered by industry partners.",
  },
  {
    image: depSlide5,
    title: "Interactive sessions with industry stalwarts",
    description:
      "The department organizes interactive seminars, guest lectures and workshops with prominent corporate leaders that benefit students' overall growth.",
  },
  {
    image: depSlide6,
    title: "Ultra modern infrastructure & ICT techniques",
    description:
      "Top-notch learning is made possible by the cutting-edge infrastructure and the proficiency of many ICT techniques practiced by the faculty members.",
  },
  {
    image: depSlide7,
    title: "Assured internship & placement opportunities",
    description:
      "Department has strong corporate linkages with firms operating in the field of finance and accounting resulting in lucrative internship and placement opportunities.",
  },
];
export const counterData2 = {
  counterData: [
    {
      id: 1,
      icon: "",
      value: "100",
      suffix: "",
      label: "Guest lectures",
    },
    {
      id: 2,
      icon: "",
      value: "40",
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
};
export interface Headers {
  name: string;
  program: string;
  company: string;
}
export const tableHeaders: Headers = {
  name: "NAME OF STUDENT",
  program: "PROGRAM",
  company: "COMPANY",
};

export const placedStudents: Student[] = [
  { name: "Abhi Kaushiki Singh", program: "B.Com. (Bachelor of Commerce)", company: "eTeam" },
  { name: "Anshika Chaudhary", program: "B.Com. (Bachelor of Commerce)", company: "eTeam" },
  { name: "Ritika Deundi", program: "B.Com. (Hons.) with L&T", company: "Coforge" },
  { name: "Sakshi Tripathi", program: "B.Com. (Hons.) with L&T", company: "Coforge" },
  { name: "Suryanshu Pandey", program: "B.Com. (Bachelor of Commerce)", company: "Teachnook" },
  { name: "Manya Singh", program: "B.Com. (Hons.) with L&T", company: "Edu Gorilla" },
  { name: "Aditi Yadav", program: "B.Com. (Hons.) with L&T", company: "Edu Gorilla" },
  { name: "Vishal Choudhary", program: "B.Com. (Hons.) with L&T", company: "Jupsoft" },
  { name: "Vishal Choudhary", program: "B.Com. (Hons.) with L&T", company: "Jupsoft" },
  { name: "Prashant Shekhar Singh", program: "B.Com. (Hons.) with L&T", company: "Silver Lane Properties" },
  { name: "Shreya Baranwal", program: "B.Com. (Hons.) with L&T", company: "Gyan Dairy" },
  { name: "Vishal Kumar Gupta", program: "B.Com. (Hons.) with L&T", company: "Gyan Dairy" },
  { name: "Jitendra Kumar", program: "B.Com. (Hons.) with L&T", company: "Gyan Dairy" },
  { name: "Anshika Chaudhary", program: "B.Com. (Bachelor of Commerce)", company: "Teachnook" },
  { name: "Riyashi Khullar", program: "B.Com. (Hons.) with L&T", company: "My Captain" },
  { name: "Aryan Verma", program: "B.Com. (Hons.) with L&T", company: "My Captain" },
  { name: "Aditi Yadav", program: "B.Com. (Hons.) with L&T", company: "Byjus" },
  { name: "Mahek Pandey", program: "B.Com. (Bachelor of Commerce)", company: "Reliance Securities" },
  { name: "Anjali Chaudhary", program: "B.Com. (Bachelor of Commerce)", company: "Reliance Securities" },
  { name: "Priya Kumari", program: "B.Com. (Bachelor of Commerce)", company: "Reliance Securities" },
  { name: "Sanskriti Gupta", program: "B.Com. (Bachelor of Commerce)", company: "Reliance Securities" },
  { name: "Akanksha Suryavanshi", program: "B.Com. (Bachelor of Commerce)", company: "Sonata Finance Pvt. Ltd" },
  { name: "Saloni Agarwal", program: "B.Com. (Bachelor of Commerce)", company: "Sonata Finance Pvt. Ltd" },
  { name: "Anjali Choudhary", program: "B.Com. (Bachelor of Commerce)", company: "Sonata Finance Pvt. Ltd" },
  { name: "Anushka Singh", program: "B.Com. (Hons.) with L&T", company: "Shri Ram Fortune" },
  { name: "Riyashi Khullar", program: "B.Com. (Hons.) with L&T", company: "IGT Solutions" },
  { name: "Arun Kumar Yadav", program: "B.Com. (Bachelor of Commerce)", company: "TCS" },
  { name: "Anant N.P. Shukla", program: "B.Com. (Bachelor of Commerce)", company: "Learning Route" },
];

export const instituteCourseCardData: CustomInstituteCourseCardProps[] = [
  {
    imageUrl: courseImg1,
    departmentName: "Faculty of Commerce and Economics",
    path: "faculty-of-commerce-and-economics",
    departmentDetails: {
      overviewData: commerceAndEconomicsOverviewData,
      counterData: counterDataForFacultyCommerce,
      mvData: commerceAndEconomicsDepartmentVMData,
      departmentHeadData: commerceAndEconomicsDepartmentHeadData,
      feeTableData: {
        tab1: { label: "Postgraduate", data: commerceAndEconomicsFeeData },
        tab2: { label: "Undergraduate", data: commerceAndEconomicsFeeData1 },
      },
      facultyData: facultyData,
      departmentHighlightsData: departmentHighlights,
      counterData2: counterData2,
      placedStudentsData: placedStudents,
    }
  },
  {
    imageUrl: courseImg2,
    departmentName: "Faculty Of Management",
    path: "faculty-of-management",
    departmentDetails: {
      overviewData: managementOverviewData,
      counterData: counterDataForFacultyManagement,
      mvData: managementDepartmentVMData,
      departmentHeadData: managementDepartmentHeadData,
      feeTableData: {
        tab1: { label: "Industry Honors", data: managementFeeData },
        tab2: { label: "Postgraduate", data: managementFeeData1 },
        tab3: { label: "Undergraduate", data: managementFeeData2 },
      },

      facultyData: managementfacultyData,
      departmentHighlightsData: managementDepartmentHighlights,
      counterData2: managementCounterData2,
      placedStudentsData: managementPlacedStudents,

    }
  },

];
