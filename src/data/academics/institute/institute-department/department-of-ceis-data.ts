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
  { id: 2, value: "43", suffix: "", label: "Faculty & Staff" },
  { id: 3, value: "1800", suffix: "", label: "Students" },
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
      "**Qualification:** M.Tech. (Data Science), Ph.D. (Computer Science), M.Phil., Post Doc.",
      "**Experience:** 15+ Years",
      "**Specialization/ Area of Research:** Artificial Intelligence & Machine Learning, Data Science, ICT, Cyber Security, Computational Neuro Science, IKS-Computing",
      "**Email ID:** hod.csis@srmu.ac.in",
      "**ORCID ID:** https://orcid.org/0000-0003-1786-6348",
      "**Contact No.:** +91-9621340860",
    ],

    modalContent: `
      
      <p class='mt-3'>
        Prof. (Dr.) Bineet Kumar Gupta is a Post Doctorate in Deep Learning and holds a Ph.D. in Computer Science. 
        He is an eminent academician with more than 15 years of teaching and research experience. He is currently 
        serving as a Professor in the Department of Computer Science & Information Systems at Shri Ramswaroop Memorial 
        University, Lucknow-Deva Road. Dr. Gupta has actively contributed to several international bodies as a member 
        of issue panel review committees and workshop review committees.
      </p>

      <p class='mt-3'>
        He has supervised five Ph.D. scholars, while twelve scholars have already been awarded doctoral degrees under 
        his guidance. With more than 90 research publications in reputed international journals and conferences, 
        along with 7 books and 2 patents, Dr. Gupta has made significant contributions to the fields of Artificial Intelligence, 
        Data Science, Cyber Security, and Computational Neuro Science. He has also received five prestigious International 
        Travel Grants in recognition of his academic and research achievements.
      </p>
    `,
  },
];




export const counterDataFor2Csis: counterDataType[] = 
  [
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
  ];


export const csisIndustryIntegratedFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    // 1) B.C.A. (Data Science & Artificial Intelligence) with L&T
    {
      course: "B.C.A. (Data Science & Artificial Intelligence) with L&T",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,00,000/-",
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
      fee: "Rs. 1,00,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.C.A. (Cyber Security) with L&T</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Board 
          with minimum aggregate marks of <strong>45% for GEN/OBC</strong> and 
          <strong>40% for SC/ST Category</strong>.
        </p>
      `,
    },

    // 3) BCA (Artificial Intelligence & Machine Learning)
    {
      course: "BCA (Artificial Intelligence & Machine Learning)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,00,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>BCA (Artificial Intelligence & Machine Learning)</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Board 
          with minimum aggregate marks of <strong>45% for GEN/OBC</strong> and 
          <strong>40% for SC/ST Category</strong>.
        </p>
      `,
    },
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
      fee: "Rs. 82,000/-",
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
      fee: "Rs. 1,00,000/-",
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
      fee: "Rs. 1,00,000/-",
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
      fee: "Rs. 1,00,000/-",
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
    image: "https://testweb.srmu.ac.in/storage/teams/efweqf-27052512495787.png",
  },
  {
    id: 2,
    name: "Dr. Archana Sachindeo Maurya",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/aaa-27052511272472.png",
  },
  {
    id: 3,
    name: "Mr. Jullius Kumar",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/efweqf-27052511292394.png",
  },
  {
    id: 4,
    name: "Ms. Anuradha Yadav",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/efweqf-27052511485845.png",
  },
  {
    id: 5,
    name: "Ms. Aakriti Nigam",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/efweqf-27052511502765.png",
  },
  {
    id: 6,
    name: "Mr. Abhinav Pratap Singh",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/efweqf-27052511513589.png",
  },
  {
    id: 7,
    name: "Ms. Sana Rabbani",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/efweqf-2705251152502.png",
  },
  {
    id: 8,
    name: "Ms. Hina Rabbani",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/efweqf-27052511541123.png",
  },
  {
    id: 9,
    name: "Mr. Anjanee Kumar Yadav",
    designation: "Lecturer",
    image: "https://testweb.srmu.ac.in/storage/teams/efweqf-27052512471857.png",
  },
  {
    id: 10,
    name: "Mr. Yash Raj",
    designation: "Lecturer",
    image: "https://testweb.srmu.ac.in/storage/teams/efweqf-27052512460514.png",
  },
  {
    id: 11,
    name: "Mr. Amit Srivastava",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/efweqf-2705251245034.png",
  },
  {
    id: 12,
    name: "Mr. Swapnil Verma",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/efweqf-27052512435234.png",
  },
  {
    id: 13,
    name: "Mr. Ambrish Mishra",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/efweqf-27052511555079.png",
  },
  {
    id: 14,
    name: "Prof. (Dr.) Bineet Kumar Gupta",
    designation: "Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/dr.-bineet-gupta-11zon-27022412022550.jpg",
  },
  {
    id: 15,
    name: "Mr. Shamim Ahmad",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/11zon-cropped-20-11zon-21022405591034.jpeg",
  },
  {
    id: 16,
    name: "Dr. Nitya Nand Dwivedi",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/dr.-nitya-nand-dwivedi-15062402045381.jpg",
  },
  {
    id: 17,
    name: "Ms. Sweta Singh",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/11zon-cropped-18-11zon-21022405511010.jpeg",
  },
  {
    id: 18,
    name: "Mr. Sarvjeet Pal",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/11zon-cropped-5-11zon-1--21022405372788.jpeg",
  },
  {
    id: 19,
    name: "Mr. Sanjay Kumar Sonkar",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/11zon-cropped-3-11zon-21022405332950.jpeg",
  },
  {
    id: 20,
    name: "Mr. Ankit Kumar Singh",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/ankit-kumar-singh-15062402264847.jpg",
  },
  {
    id: 21,
    name: "Mr. Kartikesh Tiwari",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/11zon-cropped-13-11zon-21022405092962.jpeg",
  },
  {
    id: 22,
    name: "Mr. Abhijityaditya Prakash",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/mr.-abhijityaditya-prakash-11zon-24022405240957.jpg",
  },
  {
    id: 23,
    name: "Mr. Harendra Singh Kharkwal",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/harendra-singh-kharkwal-15062402320536.jpg",
  },
  {
    id: 24,
    name: "Mr. Ashok Masih",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/mr.-ashok-masih-24022405282742.JPG",
  },
  {
    id: 25,
    name: "Mr. Atul Verma",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/mr.-atul-verma-11zon-24022405321830.jpg",
  },
  {
    id: 26,
    name: "Ms. Priyanka Keshari",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/11zon-cropped-9-11zon-2102240434574.jpeg",
  },
  {
    id: 27,
    name: "Mr. Nirbhay Tiwari",
    designation: "Lecturer",
    image: "https://testweb.srmu.ac.in/storage/teams/11zon-cropped-12-11zon-21022405052688.jpeg",
  },
  {
    id: 28,
    name: "Ms. Deepa Kaushik",
    designation: "Lecturer",
    image: "https://testweb.srmu.ac.in/storage/teams/11zon-cropped-15-11zon-21022405224332.jpeg",
  },
  {
    id: 29,
    name: "Ms. Shilpi Shukla",
    designation: "Assistant Professor",
    image: "https://testweb.srmu.ac.in/storage/teams/11zon-cropped-1-11zon-21022405293529.jpeg",
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
    image: "https://testweb.srmu.ac.in/storage/common-section/researchpapers-05022405242651.jpg",
    title: "Specialized curriculum designed by the industry experts",
    description:
      "In order to stay up with the most recent advancements in the field of computer applications, the department provides a cutting-edge curriculum that was created with the assistance of industry professionals and is updated on a regular basis.",
  },
  {
    image: "https://testweb.srmu.ac.in/storage/common-section/liveproject-0502240532494.jpg",
    title: "Project based experiential learning",
    description:
      "Numerous chances for practical learning are given to students, such as industrial partnerships, internships, and live projects of industry partners like IBM.",
  },
  {
    image: "https://testweb.srmu.ac.in/storage/common-section/computerlab31-05022405380613.jpg",
    title: "State-of-the-art Infrastructure",
    description:
      "Modern facilities, including cutting-edge labs and specialized software, are available to the department to ensure that students get the best educational experience possible.",
  },
  {
    image: "https://testweb.srmu.ac.in/storage/common-section/manage--06052401302479.jpg",
    title: "Strong industry linkages for best exposure",
    description:
      "Students are provided with access to the latest developments and technological advances in the sector with the help of the department's strong connections with top IT companies and industry professionals.",
  },
  {
    image: "https://testweb.srmu.ac.in/storage/common-section/industrystalwart-05022405332258.jpg",
    title: "Distinguished faculty from best institutes",
    description:
      "The University takes pride in recruiting distinguished faculty from best institutes who provide an intimate, interactive, personalized approach to learning.",
  },
  {
    image: "https://testweb.srmu.ac.in/storage/common-section/integration-07052411442613.jpg",
    title: "Integration of revolutionary technologies in curricula",
    description:
      "The department has established partnerships with top research institutes and enterprises worldwide, giving students access to a global education and exposure to cutting-edge technologies.",
  },
  {
    image: "https://testweb.srmu.ac.in/storage/common-section/holistic-05022405592539.jpg",
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
    image: "https://testweb.srmu.ac.in/storage/events/international-09052411453621-27052501204641.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 2,
    title: "Guest Lecture",
    topic: "International Women's Day",
    speaker: "Prof. Dr. Bineet Kumar Gupta, Head of DCSIS, SRMU Barabanki",
    date: "08th March, 2025",
    image: "https://testweb.srmu.ac.in/storage/events/guest7-09052411400897-27052502171469.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 3,
    title: "Guest Lecture",
    topic: "National Science Day",
    speaker: "Dr. Anil Gaikwadji, Sr. Principal Scientist CSIS, CDRI Lucknow",
    date: "28th February, 2025",
    image: "https://testweb.srmu.ac.in/storage/events/guest5-09052411462660-27052502194613.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 4,
    title: "Guest Lecture",
    topic: "Use of Business Analytics in Computing",
    speaker: "Shri Sandeep Shivhare, Registrar, BSIP Lucknow",
    date: "12th November, 2024",
    image: "https://testweb.srmu.ac.in/storage/events/guest8-09052411464928-27052502205419.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 5,
    title: "Guest Lecture",
    topic: "Overthrow Challenges in Life",
    speaker: "Lt. Col. (Dr.) Praveen Kumar Singh, ADG – UIDAI",
    date: "21st September, 2024",
    image: "https://testweb.srmu.ac.in/storage/events/international-09052411453621-27052502225285.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 6,
    title: "Webinar",
    topic: "Higher Education in Ireland",
    speaker: "Ms. Ishita Singh, Regional Advisor (South Asia), Technological University of Shannon",
    date: "20th September, 2024",
    image: "https://testweb.srmu.ac.in/storage/events/webinar1-0905241126383-27052502262114.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 7,
    title: "Webinar",
    topic: "Let us Learn Research",
    speaker: "Prof. Dr. Amar Pal Singh, VC Dr. RML National Law University Lucknow; Prof. Dr. Sanjay Singh, Director of Giri Institute of Development Studies Lucknow; Prof. Dr. Ajith Abraham, VC Bennett University-Greater Noida",
    date: "04th October, 2024",
    image: "https://testweb.srmu.ac.in/storage/events/webinar2-09052411264713-27052502294078.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 8,
    title: "Guest Lecture",
    topic: "Technological Advancement and Social Imposition",
    speaker: "Prof. Ambrish S. Vidyarthi, Vice Chancellor, Bikaner Technical University Rajasthan",
    date: "22nd February, 2024",
    image: "https://testweb.srmu.ac.in/storage/events/international-09052411453621-27052504031819.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 9,
    title: "Guest Lecture",
    topic: "Technological Advancement and Social Imposition",
    speaker: "Prof. Ambrish S. Vidyarthi, Vice Chancellor, Bikaner Technical University Rajasthan",
    date: "22nd February, 2024",
    image: "https://testweb.srmu.ac.in/storage/events/international-09052411453621-27052504042021.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 10,
    title: "Guest Lecture",
    topic: "World Nature Conservation Day",
    speaker: "Dr. Mridul Shukla, STO, NBRI Lucknow",
    date: "27th July, 2024",
    image: "https://testweb.srmu.ac.in/storage/events/national3-09052411470965-27052504052555.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 11,
    title: "Workshop",
    topic: "Inspiring Innovation and Learning",
    speaker: "Prof. Harish Chandra Verma, Indian Physicist",
    date: "06th–08th February, 2025",
    image: "https://testweb.srmu.ac.in/storage/events/wew-27052504082364.png",
    cardBgColor: "#ffffff",
  },
  {
    id: 12,
    title: "Workshop",
    topic: "Internal Smart India Hackathon",
    speaker: "Prof. Diwaker Yadav, IET, AKTU",
    date: "06th–09th September, 2024",
    image: "https://testweb.srmu.ac.in/themes/images/apply-img3.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 13,
    title: "Awareness Program",
    topic: "Voting Awareness Program \u201CMy Vote My Pride\u201D",
    date: "13th May, 2024",
    image: "https://testweb.srmu.ac.in/storage/events/workshop4-09052411402287-27052504112582.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 14,
    title: "Tech-Fest",
    topic: "Awsar and Techfest",
    date: "13th–14th April, 2024",
    image: "https://testweb.srmu.ac.in/storage/events/webinar1-0905241126383-2705250413038.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 15,
    title: "Seminar",
    topic: "Engineer's Day",
    speaker: "Dr. G.P. Singh (Keynote Speaker)",
    date: "15th September, 2023",
    image: "https://testweb.srmu.ac.in/storage/events/webinar2-09052411264713-27052504141455.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 16,
    title: "Guest Lecture",
    topic: "Core Java and IBM Hack Challenge",
    speaker: "Mr. Aman Bakshi",
    date: "10th September, 2022",
    image: "https://testweb.srmu.ac.in/storage/events/guest1-09052411461239.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 17,
    title: "Guest Lecture",
    topic: "Use of Business Analytics in Computing",
    speaker: "Mr. Manish Kumar Srivastava",
    date: "02nd January, 2023",
    image: "https://testweb.srmu.ac.in/storage/events/guest5-09052411462660.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 18,
    title: "Guest Lecture",
    topic: "Progression to Higher Education",
    speaker: "Mr. Asad Siddiqui",
    date: "08th April, 2023",
    image: "https://testweb.srmu.ac.in/storage/events/webinar5-09052411464258.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 19,
    title: "Guest Lecture",
    topic: "Excelling the Capabilities for Placement",
    speaker: "Dr. Om Prakash",
    date: "27th October, 2023",
    image: "https://testweb.srmu.ac.in/storage/events/guest8-09052411464928.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 20,
    title: "Guest Lecture",
    topic: "Use of Blockchain in Internet of Medical Things: A Systematic Review",
    speaker: "Dr. Bineet Kumar Gupta",
    date: "20th December, 2023",
    image: "https://testweb.srmu.ac.in/storage/events/nationalseminar-09052411465664.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 21,
    title: "Guest Lecture",
    topic: "Transforming Research: Navigating the Digital Frontier - A deep dive into Digital Innovation in Banking",
    speaker: "Dr. Rajeev Kumar",
    date: "28th December, 2023",
    image: "https://testweb.srmu.ac.in/storage/events/national3-09052411470965.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 22,
    title: "Workshop",
    topic: "Interaction Programme by TCS iON",
    date: "20th–21st September, 2022",
    image: "https://testweb.srmu.ac.in/storage/events/workshop1-09052411440630.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 23,
    title: "Workshop",
    topic: "Enhancing Research Capabilities",
    date: "24th September, 2022",
    image: "https://testweb.srmu.ac.in/storage/events/workship2-09052411441476.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 24,
    title: "Workshop",
    topic: "Technical Writing & Research Ethics",
    date: "12th January, 2023",
    image: "https://testweb.srmu.ac.in/storage/events/workshop3-09052411442174.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 25,
    title: "Workshop",
    topic: "Contribution of AI in Digital World",
    date: "04th February, 2023",
    image: "https://testweb.srmu.ac.in/storage/events/workshop4-09052411442724.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 26,
    title: "Workshop",
    topic: "Cyber Bullying: A Case of Digital Threat",
    date: "17th February, 2023",
    image: "https://testweb.srmu.ac.in/storage/events/workshop5-09052411443482.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 27,
    title: "Workshop",
    topic: "Use of Computing in Satellite Techniques",
    date: "27th March, 2023",
    image: "https://testweb.srmu.ac.in/storage/events/visit3-09052411444684.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 28,
    title: "Seminar",
    topic: "Higher Education Opportunities in Ireland",
    speaker: "Mr. Vikas Bansal",
    date: "01st October, 2022",
    image: "https://testweb.srmu.ac.in/storage/events/guest4-09052411451350.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 29,
    title: "Seminar",
    topic: "Interaction Programme by Sitare University",
    speaker: "Mr. Vikas Sikka",
    date: "11th October, 2022",
    image: "https://testweb.srmu.ac.in/storage/events/guest6-09052411452137.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 30,
    title: "Seminar",
    topic: "Emerging India: Emerging Society",
    speaker: "Mr. Anil Kumar Pal",
    date: "15th February, 2023",
    image: "https://testweb.srmu.ac.in/storage/events/internation1-09052411452858.jpg",
    cardBgColor: "#ffffff",
  },
];
