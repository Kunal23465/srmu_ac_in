import { customeOverViewType } from "../../../../types/home-data-type";

import missionImg from "../../../../assets/images/academics/departments/dept-mission-icon1.webp";
import vissionImg from "../../../../assets/images/academics/departments/dept-mission-icon2.webp";
import { counterDataType } from "../../../home/counterData";
import { InstituteProfile } from "../../../../types/profile-data-type";

import professor from "../../../../assets/images/academics/departments/csis/dr.-bineet-gupta.webp";
import { departmentHighlightscardType, FeeTableData } from "../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../../utils/custom/CustomFacultyListCard";
import { EventItem } from "../../../../utils/custom/CustomEventListCard";
import { toAbsoluteUrl } from "../../../../utils/seo";

// import fimg1 from ""
import cse_is1 from "../../../../assets/images/academics/institutes/cse-is/cse-is1.png";
import cse_is2 from "../../../../assets/images/academics/institutes/cse-is/cse-is2.png";
import cse_is3 from "../../../../assets/images/academics/institutes/cse-is/cse-is3.png";
import cse_is4 from "../../../../assets/images/academics/institutes/cse-is/Anuradha Yadav.png";
import cse_is5 from "../../../../assets/images/academics/institutes/cse-is/cse-is5.png";
import cse_is6 from "../../../../assets/images/academics/institutes/cse-is/cse-is6.png";
import cse_is7 from "../../../../assets/images/academics/institutes/cse-is/Sana Rabbani.png";
import cse_is8 from "../../../../assets/images/academics/institutes/cse-is/cse-is8.png";
import cse_is9 from "../../../../assets/images/academics/institutes/cse-is/cse-is9.png";
import cse_is10 from "../../../../assets/images/academics/institutes/cse-is/cse-is10.png";
import cse_is11 from "../../../../assets/images/academics/institutes/cse-is/cse-is11.png";
import cse_is12 from "../../../../assets/images/academics/institutes/cse-is/cse-is12.png";
import cse_is13 from "../../../../assets/images/academics/institutes/cse-is/cse-is13.png";
import cse_is14 from "../../../../assets/images/academics/institutes/cse-is/Bineet Kumar Gupta.png";
import cse_is15 from "../../../../assets/images/academics/institutes/cse-is/cse-is15.jpeg";
import cse_is16 from "../../../../assets/images/academics/institutes/cse-is/cse-is16.jpg";
import cse_is17 from "../../../../assets/images/academics/institutes/cse-is/cse-is17.jpeg";
import cse_is18 from "../../../../assets/images/academics/institutes/cse-is/cse-is18.jpeg";
import cse_is19 from "../../../../assets/images/academics/institutes/cse-is/cse-is19.jpeg";
import cse_is20 from "../../../../assets/images/academics/institutes/cse-is/cse-is20.jpg";
import cse_is21 from "../../../../assets/images/academics/institutes/cse-is/cse-is21.jpeg";
import cse_is22 from "../../../../assets/images/academics/institutes/cse-is/cse-is22.jpg";
import cse_is23 from "../../../../assets/images/academics/institutes/cse-is/cse-is23.jpg";
import cse_is24 from "../../../../assets/images/academics/institutes/cse-is/cse-is24.jpeg";
import cse_is25 from "../../../../assets/images/academics/institutes/cse-is/cse-is25.jpg";
import cse_is26 from "../../../../assets/images/academics/institutes/cse-is/cse-is26.jpeg";
import cse_is27 from "../../../../assets/images/academics/institutes/cse-is/Nirbhay Tiwari.png";
import cse_is28 from "../../../../assets/images/academics/institutes/cse-is/cse-is28.jpeg";
import cse_is29 from "../../../../assets/images/academics/institutes/cse-is/cse-is29.jpeg";
import cse_is30 from "../../../../assets/images/academics/institutes/cse-is/Roopam Srivastava.png";
import cse_is31 from "../../../../assets/images/academics/institutes/cse-is/Prem Kumar Yadav.png";
import cse_is32 from "../../../../assets/images/academics/institutes/cse-is/Abhishek Saxena.png";
import cse_is33 from "../../../../assets/images/academics/institutes/cse-is/Anjali Jaiswal.png";
import cse_is34 from "../../../../assets/images/academics/institutes/cse-is/Ved Prakash.png";
import cse_is35 from "../../../../assets/images/academics/institutes/cse-is/Kishan Pandey.png";
import cse_is36 from "../../../../assets/images/academics/institutes/cse-is/Divyanka Srivastava.png";
import cse_is37 from "../../../../assets/images/academics/institutes/cse-is/Amit Yadav.png";
import cse_is38 from "../../../../assets/images/academics/institutes/cse-is/Akash Chaudhary.png";

//Heighlights
import csehi1 from "../../../../assets/images/academics/institutes/cse-is/heighlights/csehi1.jpg";
import csehi2 from "../../../../assets/images/academics/institutes/cse-is/heighlights/csehi2.jpg";
import csehi3 from "../../../../assets/images/academics/institutes/cse-is/heighlights/csehi3.jpg";
import csehi4 from "../../../../assets/images/academics/institutes/cse-is/heighlights/csehi4.jpg";
import csehi5 from "../../../../assets/images/academics/institutes/cse-is/heighlights/csehi5.jpg";
import csehi6 from "../../../../assets/images/academics/institutes/cse-is/heighlights/csehi6.jpg";
import csehi7 from "../../../../assets/images/academics/institutes/cse-is/heighlights/csehi7.jpg";
// events
import cseev1 from "../../../../assets/images/academics/institutes/cse-is/events/cseev1.jpg";
import cseev2 from "../../../../assets/images/academics/institutes/cse-is/events/cseev2.jpg";
import cseev3 from "../../../../assets/images/academics/institutes/cse-is/events/cseev3.jpg";
import cseev4 from "../../../../assets/images/academics/institutes/cse-is/events/cseev4.jpg";
import cseev5 from "../../../../assets/images/academics/institutes/cse-is/events/cseev5.jpg";
import cseev6 from "../../../../assets/images/academics/institutes/cse-is/events/cseev6.jpg";
import cseev7 from "../../../../assets/images/academics/institutes/cse-is/events/cseev7.jpg";
import cseev8 from "../../../../assets/images/academics/institutes/cse-is/events/cseev8.jpg";
import cseev9 from "../../../../assets/images/academics/institutes/cse-is/events/cseev9.jpg";
import cseev10 from "../../../../assets/images/academics/institutes/cse-is/events/cseev10.jpg";
import cseev11 from "../../../../assets/images/academics/institutes/cse-is/events/cseev11.png";
import cseev12 from "../../../../assets/images/academics/institutes/cse-is/events/cseev12.jpg";
import cseev13 from "../../../../assets/images/academics/institutes/cse-is/events/cseev13.jpg";
import cseev14 from "../../../../assets/images/academics/institutes/cse-is/events/cseev14.jpg";
import cseev15 from "../../../../assets/images/academics/institutes/cse-is/events/cseev15.jpg";
import cseev16 from "../../../../assets/images/academics/institutes/cse-is/events/cseev16.jpg";
import cseev17 from "../../../../assets/images/academics/institutes/cse-is/events/cseev17.jpg";
import cseev18 from "../../../../assets/images/academics/institutes/cse-is/events/cseev18.jpg";
import cseev19 from "../../../../assets/images/academics/institutes/cse-is/events/cseev19.jpg";
import cseev20 from "../../../../assets/images/academics/institutes/cse-is/events/cseev20.jpg";
import cseev21 from "../../../../assets/images/academics/institutes/cse-is/events/cseev21.jpg";
import cseev22 from "../../../../assets/images/academics/institutes/cse-is/events/cseev22.jpg";
import cseev23 from "../../../../assets/images/academics/institutes/cse-is/events/cseev23.jpg";
import cseev24 from "../../../../assets/images/academics/institutes/cse-is/events/cseev24.jpg";
import cseev25 from "../../../../assets/images/academics/institutes/cse-is/events/cseev25.jpg";
import cseev26 from "../../../../assets/images/academics/institutes/cse-is/events/cseev26.jpg";
import cseev27 from "../../../../assets/images/academics/institutes/cse-is/events/cseev27.jpg";
import cseev28 from "../../../../assets/images/academics/institutes/cse-is/events/cseev28.jpg";
import cseev29 from "../../../../assets/images/academics/institutes/cse-is/events/cseev29.jpg";
import cseev30 from "../../../../assets/images/academics/institutes/cse-is/events/cseev30.jpg";

export interface Headers {
  name: string;
  program: string;
  company: string;
}

export interface Student {
  name: string;
  program: string;
  company: string;
}

const siteAsset = (path: string) => toAbsoluteUrl(path) || path;

export const csISFacultyOverviewData: customeOverViewType = {
  heading: "Department Of Computer Science And Information Systems",
  content:
    "We at DCSIS provide a wealth of computing resources for teaching and research. For solitary research projects in the fields of distributed computing, mobile systems, networking, security, computer architecture, and vision, the department provides specialized equipment. Our students' access to resources helps them acquire the abilities and know-how required for success in the field of computing. Our well developed curriculum and completely adjustable credit system provide our students the freedom to select whatever courses they are interested in while also enabling them to gain applicable information and skills. The department provides Computer Applications programs at the undergraduate, graduate, and doctorate levels. Our programs aim to give students extensive knowledge and abilities in the specific fields of their choice, together with a strong foundation in the basic ideas of computer science.",
  counterSibling:
    "The department is a leader in technology in India because to its cutting-edge infrastructure and solid industrial partnerships. With over 1000 cutting-edge computers outfitted with the newest instruments and technologies, our teachers and students are able to carry out innovative research and cutting-edge projects in a wide range of computer science and information systems-related fields. In brief, with strong emphasis on research, teaching, and community outreach, the Department of Computer Science & Information Systems is a preeminent organization in the field of computer application. Our students benefit from flexible courses and abundant computer resources, as well as academic members committed to research that help them gain relevant knowledge and skills. We are convinced that our students will dominate the CSIS industry in the future because to our dedication to innovation and quality.",
};

export const counterDataForFacultyCSIS: counterDataType[] = [
  { id: 1, value: "2017", suffix: "", label: "Established" },
  { id: 2, value: "50", suffix: "", label: "Faculty & Staff" },
  { id: 3, value: "2000", suffix: "", label: "Students" },
];

export const CSISDepartmentVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: missionImg,
    heading: "Mission",
    points: [
      "To educate and prepare ICT professionals and train them for furtherhigher studies.",
      "To contribute to society by evolving in the fields of computer scienceand emergingtechnologies.",
      "To seek innovations in teaching & learning through interactiveinstructions and global engagement.",
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: vissionImg,
    heading: "Vision",
    points: [
      "To be recognized as a center of Computer Science and Information Systems through teaching, learning and researchactivities to produce skilled, innovative professionals and orientthem towards serving the society with moral values.",
    ],
  },
];

export const instituteProfilesCSIS: InstituteProfile[] = [
  {
    id: 1,
    title: "Department Head",
    name: "Prof. (Dr.) Bineet Kumar Gupta",
    position: "HoD DCSIS, SRMU, Lucknow-Deva Road",
    image: professor,

    useBullets: false,

    details: [
      "**Qualification:**M.Tech. (Data Science), Ph.D. (AI/ML/Data Science/ICT/Cyber Security/Computational Neuro Science/IKS-Computing)",
      "**Experience:** 16+ Years",
      "**Specialization/ Area of Research:** Artificial Intelligence & Machine Learning, Data Science, ICT, Cyber Security, Computational Neuro Science, IKS-Computing",
      "**Email ID:** hod.csis@srmu.ac.in",
      "**ORCID ID:** https://orcid.org/0000-0003-1786-6348",
      "**Contact No.:** +91-9621340860",
    ],

    modalContent: `
      
      <p class='mt-3'>
       Dr.  Bineet Gupta is Post Doc. in Deep Learning and has obtained his Ph.D. in Computer Science. He is known academician having more than 16 years of teaching and research experience.
      </p>

      <p class='mt-3'>
      Currently he is working as Professor in the Department of Computer Science & Information Systems, Institute of Technology, Shri Ramswaroop Memorial University Lucknow Deva Road UP, India. He has been member of Issue Panel Review Committee, workshop review committee of various international societies. Prof. (Dr.) Bineet Kumar Gupta is currently supervising five Ph.D. students and 15 Ph.D. students have already been awarded degrees. He has published more than 100 research articles in various International Journals and Conferences of repute, 7 Books and 2 Patent. Prof. (Dr.) Bineet Kumar Gupta is receiver of 7 International Travel Grants through various International bodies.
      </p>
    `,
  },
];

export const counterDataFor2Csis: counterDataType[] = [
  {
    id: 1,
    icon: "",
    value: "150",
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
    value: "06",
    suffix: "",
    label: "Conference",
  },
  {
    id: 4,
    icon: "",
    value: "50",
    suffix: "",
    label: "Seminars",
  },
];

export const csisIndustryIntegratedFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    // 1) B.C.A. (Data Science & Artificial Intelligence) with L&T
    {
      course: "B.C.A. (Data Science & Artificial Intelligence) with L&T",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,10,500/-",
      link: "program/bca-data-science-artificial-intelligence",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.C.A. (Data Science & Artificial Intelligence) with L&T</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Board 
          with minimum aggregate marks of <strong>45% for GEN/OBC</strong> and 
          <strong>40% for SC/ST Category</strong>.
        </p>
      `,
    },

    // 2) B.C.A. (Cyber Security) with L&T
    {
      course: "B.C.A. (Cyber Security) with L&T",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,10,500/-",
      link: "program/bca-cyber-security",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.C.A. (Cyber Security) with L&T</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Board 
          with minimum aggregate marks of <strong>45% for GEN/OBC</strong> and 
          <strong>40% for SC/ST Category</strong>.
        </p>
      `,
    },
    {
      course: "B.C.A. (Artificial Intelligence & Machine Learning)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,10,500/-",
      link: "program/bca-artificial-intelligence-machine-learning",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.C.A. (Artificial Intelligence & Machine Learning)</h2>
        <p>
          Candidate must have passed 10+2 or an equivalent examination from any recognized Board with a minimum aggregate of 
          <strong>45% for GEN/OBC</strong> and <strong>40% for SC/ST Category</strong>.
        </p>
        <p>
          Students should meet the minimum academic standards required to pursue AI and ML specialization at undergraduate level.
        </p>
      `,
    },

    // 3) BCA (Artificial Intelligence & Machine Learning)
    // {
    //   course: "BCA (Artificial Intelligence & Machine Learning)",
    //   duration: "3 Years",
    //   eligibility: "Click",
    //   fee: "Rs. 1,10,500/-",
    //   link:"program/bca-artificial-intelligence-machine-learning",
    //   eligibilityContent: `
    //     <h2 class='font-bold text-lg mb-3'>BCA (Artificial Intelligence & Machine Learning)</h2>
    //     <p>
    //       Candidate must have passed 10+2 or equivalent system from any recognized Board
    //       with minimum aggregate marks of <strong>45% for GEN/OBC</strong> and
    //       <strong>40% for SC/ST Category</strong>.
    //     </p>
    //   `,
    // },
  ],
};

export const csispostgraduateFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "M.C.A. (Master of Computer Application)",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 1,09,000/-",
      link: "program/mca",
      eligibilityContent: `
    <h2 class='font-bold text-lg mb-3'>M.C.A. (Master of Computer Application)</h2>
    <p>
      Candidate must have a graduate degree with minimum aggregate marks of 
      <strong>50% or equivalent grade for GEN/OBC</strong> and 
      <strong>45% marks or equivalent grade for SC/ST Category</strong>.
    </p>
    <p>
      They should have <strong>Mathematics</strong> as one of the subjects at 
      the <strong>10+2 level</strong> or at <strong>graduation</strong>.
    </p>
  `,
    },
  ],
};
export const csisugFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "B.Sc. in Information Technology",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 68,000/-",
      link: "program/b-sc-information-technology",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Sc. in Information Technology</h2>
        <p>
          Candidate must have passed 10+2 or an equivalent examination from any recognized Board with a minimum aggregate of 
          <strong>45% marks for GEN/OBC</strong> and <strong>40% marks for SC/ST Category</strong>.
        </p>
        <p>
          The qualification must be obtained from a recognized board and should meet the minimum academic standards set for undergraduate admissions.
        </p>
      `,
    },

    {
      course: "B.C.A. (Bachelor of Computer Applications)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 85,000/-",
      link: "program/bca-bachelor-of-computer-applications",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.C.A. (Bachelor of Computer Applications)</h2>
        <p>
          Candidates must have passed 10+2 or an equivalent system from any recognized Board with a minimum aggregate of 
          <strong>45% for GEN/OBC</strong> and <strong>40% for SC/ST Category</strong>.
        </p>
        <p>
          The qualifying examination should be completed in any stream, meeting the minimum required percentage as per the category norms.
        </p>
      `,
    },

    {
      course: "B.C.A. (Data Science & Artificial Intelligence) with L&T",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,10,500/-",
      link: "program/bca-data-science-artificial-intelligence",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.C.A. (Data Science & Artificial Intelligence) with L&T</h2>
        <p>
          Candidate must have passed 10+2 or an equivalent examination from any recognized Board with a minimum aggregate of 
          <strong>45% for GEN/OBC</strong> and <strong>40% for SC/ST Category</strong>.
        </p>
        <p>
          Students should possess strong analytical skills and meet the minimum academic requirements to pursue specialization in Data Science & AI.
        </p>
      `,
    },

    {
      course: "B.C.A. (Cyber Security) with L&T",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,10,500/-",
      link: "program/bca-cyber-security",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.C.A. (Cyber Security) with L&T</h2>
        <p>
          Candidate must have passed 10+2 or an equivalent examination from any recognized Board with a minimum aggregate of 
          <strong>45% for GEN/OBC</strong> and <strong>40% for SC/ST Category</strong>.
        </p>
        <p>
          Applicants must fulfill the minimum eligibility criteria to pursue advanced learning in Cyber Security and digital protection technologies.
        </p>
      `,
    },

    {
      course: "B.C.A. (Artificial Intelligence & Machine Learning)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,10,500/-",
      link: "program/bca-artificial-intelligence-machine-learning",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.C.A. (Artificial Intelligence & Machine Learning)</h2>
        <p>
          Candidate must have passed 10+2 or an equivalent examination from any recognized Board with a minimum aggregate of 
          <strong>45% for GEN/OBC</strong> and <strong>40% for SC/ST Category</strong>.
        </p>
        <p>
          Students should meet the minimum academic standards required to pursue AI and ML specialization at undergraduate level.
        </p>
      `,
    },
  ],
};

export const CsisfacultyData: FacultyItem[] = [
  {
    id: 1,
    name: "Mr. Rohit Anand",
    designation: "Lecturer",
    image: cse_is1,
  },
  {
    id: 2,
    name: "Dr. Archana Sachindeo Maurya",
    designation: "Assistant Professor",
    image: cse_is2,
  },
  {
    id: 3,
    name: "Mr. Jullius Kumar",
    designation: "Assistant Professor",
    image: cse_is3,
  },
  {
    id: 4,
    name: "Ms. Anuradha Yadav",
    designation: "Assistant Professor",
    image: cse_is4,
  },
  {
    id: 5,
    name: "Ms. Aakriti Nigam",
    designation: "Assistant Professor",
    image: cse_is5,
  },
  {
    id: 6,
    name: "Mr. Abhinav Pratap Singh",
    designation: "Assistant Professor",
    image: cse_is6,
  },
  {
    id: 7,
    name: "Ms. Sana Rabbani",
    designation: "Assistant Professor",
    image: cse_is7,
  },
  {
    id: 8,
    name: "Ms. Hina Rabbani",
    designation: "Assistant Professor",
    image: cse_is8,
  },
  {
    id: 9,
    name: "Mr. Anjanee Kumar Yadav",
    designation: "Lecturer",
    image: cse_is9,
  },
  {
    id: 10,
    name: "Mr. Yash Raj",
    designation: "Lecturer",
    image: cse_is10,
  },
  {
    id: 11,
    name: "Mr. Amit Srivastava",
    designation: "Assistant Professor",
    image: cse_is11,
  },
  {
    id: 12,
    name: "Mr. Swapnil Verma",
    designation: "Assistant Professor",
    image: cse_is12,
  },
  {
    id: 13,
    name: "Mr. Ambrish Mishra",
    designation: "Assistant Professor",
    image: cse_is13,
  },
  {
    id: 14,
    name: "Prof. (Dr.) Bineet Kumar Gupta",
    designation: "Professor",
    image: cse_is14,
  },
  {
    id: 15,
    name: "Mr. Shamim Ahmad",
    designation: "Assistant Professor",
    image: cse_is15,
  },
  {
    id: 16,
    name: "Dr. Nitya Nand Dwivedi",
    designation: "Assistant Professor",
    image: cse_is16,
  },
  {
    id: 17,
    name: "Ms. Sweta Singh",
    designation: "Assistant Professor",
    image: cse_is17,
  },
  {
    id: 18,
    name: "Mr. Sarvjeet Pal",
    designation: "Assistant Professor",
    image: cse_is18,
  },
  {
    id: 19,
    name: "Mr. Sanjay Kumar Sonkar",
    designation: "Assistant Professor",
    image: cse_is19,
  },
  {
    id: 20,
    name: "Mr. Ankit Kumar Singh",
    designation: "Assistant Professor",
    image: cse_is20,
  },
  {
    id: 21,
    name: "Mr. Kartikesh Tiwari",
    designation: "Assistant Professor",
    image: cse_is21,
  },
  {
    id: 22,
    name: "Mr. Abhijityaditya Prakash",
    designation: "Assistant Professor",
    image: cse_is22,
  },
  {
    id: 23,
    name: "Mr. Harendra Singh Kharkwal",
    designation: "Assistant Professor",
    image: cse_is23,
  },
  {
    id: 24,
    name: "Mr. Ashok Masih",
    designation: "Assistant Professor",
    image: cse_is24,
  },
  {
    id: 25,
    name: "Mr. Atul Verma",
    designation: "Assistant Professor",
    image: cse_is25,
  },
  {
    id: 26,
    name: "Ms. Priyanka Keshari",
    designation: "Assistant Professor",
    image: cse_is26,
  },
  {
    id: 27,
    name: "Mr. Nirbhay Tiwari",
    designation: "Lecturer",
    image: cse_is27,
  },
  {
    id: 28,
    name: "Ms. Deepa Kaushik",
    designation: "Lecturer",
    image: cse_is28,
  },
  {
    id: 29,
    name: "Ms. Shilpi Shukla",
    designation: "Assistant Professor",
    image: cse_is29,
  },
  // new
  {
    id: 30,
    name: "Dr. Roopam Srivastava",
    designation: "Assistant Professor",
    image: cse_is30,
  },
  {
    id: 31,
    name: "Mr. Prem Kumar Yadav",
    designation: "Lecturer",
    image: cse_is31,
  },
  {
    id: 32,
    name: "Mr. Abhishek Saxena",
    designation: "Lecturer",
    image: cse_is32,
  },
  {
    id: 33,
    name: "Ms. Anjali Jaiswal",
    designation: "Lecturer",
    image: cse_is33,
  },
  {
    id: 32,
    name: "Mr. Ved Prakash",
    designation: "Lecturer",
    image: cse_is34,
  },
  {
    id: 34,
    name: "Mr. Kishan Pandey",
    designation: "Lecturer",
    image: cse_is35,
  },
  {
    id: 35,
    name: "Ms. Divyanka Srivastava",
    designation: "Lecturer",
    image: cse_is36,
  },
  {
    id: 36,
    name: "Mr. Amit Yadav",
    designation: "Lecturer",
    image: cse_is37,
  },
  {
    id: 37,
    name: "Mr. Akash Chaudhary",
    designation: "Lecturer",
    image: cse_is38,
  },
];

export const csistableHeaders: Headers = {
  name: "NAME OF STUDENT",
  program: "PROGRAM",
  company: "COMPANY",
};

export const CsisplacedStudents: Student[] = [
  { name: "Jishnu Ukil", program: "B.A.(Hons.) in English", company: "Planet Spark" },
  { name: "Arpita Khare", program: "B.A.(Hons.) in English", company: "My Captain" },
  { name: "Jishnu Ukil", program: "B.A.(Hons.) in English", company: "Jaro Education" },
  { name: "Hritik Ramesh", program: "B.A.(Hons.) in English", company: "AssetTrust Services" },
  { name: "Drishti Majumdar", program: "B.A.(Hons.) in English", company: "Corizo" },
  { name: "Shachi Tripathi", program: "M.A. in English", company: "Securium Solutions" },
  { name: "Areeba Rehman", program: "B.A.(Hons.) in Sociology", company: "Technotask Business Solutions" },
  { name: "Satyam Tiwari", program: "M.A. in English", company: "Piramal Finance" },
  { name: "Sagar Singh", program: "B.A.(Hons.) in English", company: "Andromeda Sales & Distribution" },
  { name: "Shalini Pandey", program: "B.A.(Hons.) in English", company: "Gajraj Entertainment Pvt" },
];

export const departmentHighlightsCsis: departmentHighlightscardType[] = [
  {
    image: csehi1,
    title: "Specialized curriculum designed by the industry experts",
    description:
      "In order to stay up with the most recent advancements in the field of computer applications, the department provides a cutting-edge curriculum that was created with the assistance of industry professionals and is updated on a regular basis.",
  },
  {
    image: csehi2,
    title: "Project based experiential learning",
    description: "Numerous chances for practical learning are given to students, such as industrial partnerships, internships, and live projects of industry partners like IBM.",
  },
  {
    image: csehi3,
    title: "State-of-the-art Infrastructure",
    description:
      "Modern facilities, including cutting-edge labs and specialized software, are available to the department to ensure that students get the best educational experience possible.",
  },
  {
    image: csehi4,
    title: "Strong industry linkages for best exposure",
    description:
      "Students are provided with access to the latest developments and technological advances in the sector with the help of the department's strong connections with top IT companies and industry professionals.",
  },
  {
    image: csehi5,
    title: "Distinguished faculty from best institutes",
    description: "The University takes pride in recruiting distinguished faculty from best institutes who provide an intimate, interactive, personalized approach to learning.",
  },
  {
    image: csehi6,
    title: "Integration of revolutionary technologies in curricula",
    description:
      "The department has established partnerships with top research institutes and enterprises worldwide, giving students access to a global education and exposure to cutting-edge technologies.",
  },
  {
    image: csehi7,
    title: "Open electives to enhance employability quotient",
    description:
      "Value-added courses are included in the curriculum and are intended to provide students the skills they need to succeed in life and enhance their employability quotient.",
  },
];

export const csisDepartmentEventsData: EventItem[] = [
  {
    id: 1,
    title: "Guest Lecture",
    topic: "Data Science Fundamentals and its Application",
    speaker: "Mr. Shivam Tiwari, Data Engineer, IBM Hyderabad",
    date: "16th April, 2025",
    image: cseev1,
    cardBgColor: "#ffffff",
  },
  {
    id: 2,
    title: "Guest Lecture",
    topic: "International Women's Day",
    speaker: "Prof. Dr. Bineet Kumar Gupta, Head of DCSIS, SRMU Barabanki",
    date: "08th March, 2025",
    image: cseev2,
    cardBgColor: "#ffffff",
  },
  {
    id: 3,
    title: "Guest Lecture",
    topic: "National Science Day",
    speaker: "Dr. Anil Gaikwadji, Sr. Principal Scientist CSIS, CDRI Lucknow",
    date: "28th February, 2025",
    image: cseev3,
    cardBgColor: "#ffffff",
  },
  {
    id: 4,
    title: "Guest Lecture",
    topic: "Use of Business Analytics in Computing",
    speaker: "Shri Sandeep Shivhare, Registrar, BSIP Lucknow",
    date: "12th November, 2024",
    image: cseev4,
    cardBgColor: "#ffffff",
  },
  {
    id: 5,
    title: "Guest Lecture",
    topic: "Overthrow Challenges in Life",
    speaker: "Lt. Col. (Dr.) Praveen Kumar Singh, ADG – UIDAI",
    date: "21st September, 2024",
    image: cseev5,
    cardBgColor: "#ffffff",
  },
  {
    id: 6,
    title: "Webinar",
    topic: "Higher Education in Ireland",
    speaker: "Ms. Ishita Singh, Regional Advisor (South Asia), Technological University of Shannon",
    date: "20th September, 2024",
    image: cseev6,
    cardBgColor: "#ffffff",
  },
  {
    id: 7,
    title: "Webinar",
    topic: "Let us Learn Research",
    speaker:
      "Prof. Dr. Amar Pal Singh, VC Dr. RML National Law University Lucknow; Prof. Dr. Sanjay Singh, Director of Giri Institute of Development Studies Lucknow; Prof. Dr. Ajith Abraham, VC Bennett University-Greater Noida",
    date: "04th October, 2024",
    image: cseev7,
    cardBgColor: "#ffffff",
  },
  {
    id: 8,
    title: "Guest Lecture",
    topic: "Technological Advancement and Social Imposition",
    speaker: "Prof. Ambrish S. Vidyarthi, Vice Chancellor, Bikaner Technical University Rajasthan",
    date: "22nd February, 2024",
    image: cseev8,
    cardBgColor: "#ffffff",
  },
  {
    id: 9,
    title: "Guest Lecture",
    topic: "Technological Advancement and Social Imposition",
    speaker: "Prof. Ambrish S. Vidyarthi, Vice Chancellor, Bikaner Technical University Rajasthan",
    date: "22nd February, 2024",
    image: cseev9,
    cardBgColor: "#ffffff",
  },
  {
    id: 10,
    title: "Guest Lecture",
    topic: "World Nature Conservation Day",
    speaker: "Dr. Mridul Shukla, STO, NBRI Lucknow",
    date: "27th July, 2024",
    image: cseev10,
    cardBgColor: "#ffffff",
  },
  {
    id: 11,
    title: "Workshop",
    topic: "Inspiring Innovation and Learning",
    speaker: "Prof. Harish Chandra Verma, Indian Physicist",
    date: "06th–08th February, 2025",
    image: cseev11,
    cardBgColor: "#ffffff",
  },
  {
    id: 12,
    title: "Workshop",
    topic: "Internal Smart India Hackathon",
    speaker: "Prof. Diwaker Yadav, IET, AKTU",
    date: "06th–09th September, 2024",
    image: cseev12,
    cardBgColor: "#ffffff",
  },
  {
    id: 13,
    title: "Awareness Program",
    topic: "Voting Awareness Program \u201CMy Vote My Pride\u201D",
    date: "13th May, 2024",
    image: cseev13,
    cardBgColor: "#ffffff",
  },
  {
    id: 14,
    title: "Tech-Fest",
    topic: "Awsar and Techfest",
    date: "13th–14th April, 2024",
    image: cseev14,
    cardBgColor: "#ffffff",
  },
  {
    id: 15,
    title: "Seminar",
    topic: "Engineer's Day",
    speaker: "Dr. G.P. Singh (Keynote Speaker)",
    date: "15th September, 2023",
    image: cseev15,
    cardBgColor: "#ffffff",
  },
  {
    id: 16,
    title: "Guest Lecture",
    topic: "Core Java and IBM Hack Challenge",
    speaker: "Mr. Aman Bakshi",
    date: "10th September, 2022",
    image: cseev16,
    cardBgColor: "#ffffff",
  },
  {
    id: 17,
    title: "Guest Lecture",
    topic: "Use of Business Analytics in Computing",
    speaker: "Mr. Manish Kumar Srivastava",
    date: "02nd January, 2023",
    image: cseev17,
    cardBgColor: "#ffffff",
  },
  {
    id: 18,
    title: "Guest Lecture",
    topic: "Progression to Higher Education",
    speaker: "Mr. Asad Siddiqui",
    date: "08th April, 2023",
    image: cseev18,
    cardBgColor: "#ffffff",
  },
  {
    id: 19,
    title: "Guest Lecture",
    topic: "Excelling the Capabilities for Placement",
    speaker: "Dr. Om Prakash",
    date: "27th October, 2023",
    image: cseev19,
    cardBgColor: "#ffffff",
  },
  {
    id: 20,
    title: "Guest Lecture",
    topic: "Use of Blockchain in Internet of Medical Things: A Systematic Review",
    speaker: "Dr. Bineet Kumar Gupta",
    date: "20th December, 2023",
    image: cseev20,
    cardBgColor: "#ffffff",
  },
  {
    id: 21,
    title: "Guest Lecture",
    topic: "Transforming Research: Navigating the Digital Frontier - A deep dive into Digital Innovation in Banking",
    speaker: "Dr. Rajeev Kumar",
    date: "28th December, 2023",
    image: cseev21,
    cardBgColor: "#ffffff",
  },
  {
    id: 22,
    title: "Workshop",
    topic: "Interaction Programme by TCS iON",
    date: "20th–21st September, 2022",
    image: cseev22,
    cardBgColor: "#ffffff",
  },
  {
    id: 23,
    title: "Workshop",
    topic: "Enhancing Research Capabilities",
    date: "24th September, 2022",
    image: cseev23,
    cardBgColor: "#ffffff",
  },
  {
    id: 24,
    title: "Workshop",
    topic: "Technical Writing & Research Ethics",
    date: "12th January, 2023",
    image: cseev24,
    cardBgColor: "#ffffff",
  },
  {
    id: 25,
    title: "Workshop",
    topic: "Contribution of AI in Digital World",
    date: "04th February, 2023",
    image: cseev25,
    cardBgColor: "#ffffff",
  },
  {
    id: 26,
    title: "Workshop",
    topic: "Cyber Bullying: A Case of Digital Threat",
    date: "17th February, 2023",
    image: cseev26,
    cardBgColor: "#ffffff",
  },
  {
    id: 27,
    title: "Workshop",
    topic: "Use of Computing in Satellite Techniques",
    date: "27th March, 2023",
    image: cseev27,
    cardBgColor: "#ffffff",
  },
  {
    id: 28,
    title: "Seminar",
    topic: "Higher Education Opportunities in Ireland",
    speaker: "Mr. Vikas Bansal",
    date: "01st October, 2022",
    image: cseev28,
    cardBgColor: "#ffffff",
  },
  {
    id: 29,
    title: "Seminar",
    topic: "Interaction Programme by Sitare University",
    speaker: "Mr. Vikas Sikka",
    date: "11th October, 2022",
    image: cseev29,
    cardBgColor: "#ffffff",
  },
  {
    id: 30,
    title: "Seminar",
    topic: "Emerging India: Emerging Society",
    speaker: "Mr. Anil Kumar Pal",
    date: "15th February, 2023",
    image: cseev30,
    cardBgColor: "#ffffff",
  },
];
