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
    name: "Dr. Jitendra Kumar Yadav",
    designation: "Associate Professor",
    image: siteAsset("/storage/teams/11zon-cropped-51-11zon-24022411552388.jpeg"),
  },
  {
    id: 2,
    name: "Dr. Arun Kumar Singh",
    designation: "Assistant Professor",
    image: siteAsset("/storage/teams/11zon-cropped-63-11zon-24022412420575.jpeg"),
  },
  {
    id: 3,
    name: "Dr. Shipra Shukla",
    designation: "Assistant Professor",
    image: siteAsset("/storage/teams/shipra-shukla-21062410305431.jpg"),
  },
  {
    id: 4,
    name: "Dr. Aparna Mishra",
    designation: "Assistant Professor",
    image: siteAsset("/storage/teams/11zon-cropped-64-11zon-2402241246085.jpeg"),
  },
  {
    id: 5,
    name: "Ms. Laxmi Singh",
    designation: "Assistant Professor",
    image: siteAsset("/storage/teams/11zon-cropped-65-11zon-24022412490935.jpeg"),
  },
  {
    id: 6,
    name: "Dr. Anil Kumar",
    designation: "Assistant Professor",
    image: siteAsset("/storage/teams/anil-kumar-21062410351813.jpg"),
  },
  {
    id: 7,
    name: "Dr. Pradeep Kumar Singh",
    designation: "Assistant Professor",
    image: siteAsset("/storage/teams/11zon-cropped-67-11zon-24022401000860.jpeg"),
  },
  {
    id: 8,
    name: "Dr. Shefalica Singh",
    designation: "Assistant Professor",
    image: siteAsset("/storage/teams/11zon-cropped-68-11zon-24022401032815.jpeg"),
  },
  {
    id: 9,
    name: "Ms. Aisha Haleem",
    designation: "Assistant Professor",
    image: siteAsset("/storage/teams/11zon-cropped-70-11zon-24022401243876.jpeg"),
  },
  {
    id: 10,
    name: "Dr. Pallavi Sharma",
    designation: "Assistant Professor",
    image: siteAsset("/storage/teams/11zon-cropped-69-11zon-24022401064879.jpeg"),
  },
  {
    id: 11,
    name: "Dr. Andleeb Zahra",
    designation: "Assistant Professor",
    image: siteAsset("/storage/teams/11zon-cropped-61-11zon-2402241237123.jpeg"),
  },
  {
    id: 12,
    name: "Dr. Ritika Srivastava",
    designation: "Assistant Professor",
    image: siteAsset("/storage/teams/11zon-cropped-53-11zon-24022412052050.jpeg"),
  },
  {
    id: 13,
    name: "Dr. Rashmi Saxena",
    designation: "Assistant Professor",
    image: siteAsset("/storage/teams/11zon-cropped-54-11zon-24022412090693.jpeg"),
  },
  {
    id: 14,
    name: "Dr. Shweta Shukla",
    designation: "Assistant Professor",
    image: siteAsset("/storage/teams/shweta-shukla-21062410384041.jpg"),
  },
  {
    id: 15,
    name: "Dr. Pavitra Bajpai",
    image: siteAsset("/storage/teams/11zon-cropped-56-11zon-24022412164143.jpeg"),
    designation: "Assistant Professor",
  },
  {
    id: 16,
    name: "Dr. Ram Pratap Yadav",
    image: siteAsset("/storage/teams/ram-pratap-yadav-21062410403441.jpg"),
    designation: "Assistant Professor",
  },
  {
    id: 17,
    name: "Dr. Anil Kumar",
    image: siteAsset("/storage/teams/11zon-cropped-57-11zon-24022412234281.jpeg"),
    designation: "Assistant Professor",
  },
  {
    id: 18,
    name: "Dr. Manjari Kureel",
    image: siteAsset("/storage/teams/11zon-cropped-58-11zon-2402241228557.jpeg"),
    designation: "Assistant Professor",
  },
  {
    id: 19,
    name: "Dr. Afiya Bano",
    image: siteAsset("/storage/teams/11zon-cropped-59-11zon-24022412313355.jpeg"),
    designation: "Assistant Professor",
  },
  {
    id: 20,
    name: "Dr. Devina Sharma",
    image: siteAsset("/storage/teams/11zon-cropped-60-11zon-24022412342499.jpeg"),
    designation: "Assistant Professor",
  },
  {
    id: 21,
    name: "Dr. Shilpa Shukla",
    image: siteAsset("/storage/teams/shilpa-shukla-21062411183124.jpg"),
    designation: "Professor",
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
    image: siteAsset("/storage/common-section/commerce1-07022412450975.jpg"),
    title: "Employability embedded as a theme in the courses",
    description:
      "Our students have employability embedded as a theme in their courses and faculty members ensure knowledge transfer and consultancy activities with public and private enterprises.",
  },
  {
    image: siteAsset("/storage/common-section/mentor-07052401175363.jpg"),
    title: "Focused classes for students preparing for civil services",
    description: "Individual student mentorship and remedial classes for better learning with focused preparation for government competitive examinations.",
  },
  {
    image: siteAsset("/storage/common-section/researhethics-07052401194820.jpg"),
    title: "Skill enhancement as per NEP 2020",
    description:
      "Students receive practical experience which helps them apply their academic knowledge in real-world situations, develops practical abilities, and increases employability.",
  },
  {
    image: siteAsset("/storage/common-section/holistic-07022412523126.jpg"),
    title: "Multiple activities for improving experiential learning",
    description:
      "For betterment of the students, the department organizes seminars, workshops, national & international conferences, field visits, social work, and guest lectures.",
  },
  {
    image: siteAsset("/storage/common-section/workshop1-07052401182610.jpg"),
    title: "Opportunity of learning skill-oriented courses",
    description: "The department provides various value-added courses to make students research-oriented and develop critical thinking among them.",
  },
  {
    image: siteAsset("/storage/common-section/virtual-07022401103942.jpg"),
    title: "Only campus in the region providing glocal syllabi",
    description: "The department has built a vibrant learning environment celebrating diversity and promoting innovation by integrating global and local scenarios.",
  },
  {
    image: siteAsset("/storage/common-section/faculty-07052401185631.jpg"),
    title: "Faculty having competency to explore themes of humanities",
    description: "Faculty members from prestigious institutions bring an innovative, non-conventional mindset to explore various aspects of humanities through modern pedagogy.",
  },
];




export const csisDepartmentEventsData: EventItem[] = [
  {
    id: 1,
    title: "Guest Lecture",
    topic: "Epidimiology and Treatment of Osteoporosis in India",
    speaker: "Dr. Subhash Yadav",
    date: "02nd August, 2023",
    image: siteAsset("/storage/events/guest8-09052401565461.jpg"),
    cardBgColor: "#ffffff",
  },
  {
    id: 2,
    title: "Guest Lecture",
    topic: "Career in Civil Services",
    speaker: "Mr. Paritosh Parmar",
    date: "11th September, 2023",
    image: siteAsset("/storage/events/guest6-09052401570467.jpg"),
    cardBgColor: "#ffffff",
  },
  {
    id: 3,
    title: "Guest Lecture",
    topic: "Adolescent Health",
    speaker: "Dr. Mithilesh Chaturvedi",
    date: "30th September, 2023",
    image: siteAsset("/storage/events/guest2-09052401573075.jpg"),
    cardBgColor: "#ffffff",
  },
  {
    id: 4,
    title: "Workshop",
    topic: "Cross Cultural Communication",
    date: "24th September, 2023",
    image: siteAsset("/storage/events/workship2-09052401560833.jpg"),
    cardBgColor: "#ffffff",
  },
  {
    id: 5,
    title: "Industrial Visit",
    topic: "Budget Session",
    venue: "Vidhan Sabha",
    date: "24th February, 2023",
    image: siteAsset("/storage/events/visit-10022411563546.jpg"),
    cardBgColor: "#ffffff",
  },
  {
    id: 6,
    title: "Workshop",
    topic: "Health Promotion of Mental Health and Life Skills",
    date: "05th April, 2023",
    image: siteAsset("/storage/events/workshop3-09052401555523.jpg"),
    cardBgColor: "#ffffff",
  },
  {
    id: 7,
    title: "Workshop",
    topic: "SIFPSA",
    date: "28th August, 2023",
    image: siteAsset("/storage/events/workshop4-09052401554527.jpg"),
    cardBgColor: "#ffffff",
  },
  {
    id: 8,
    title: "Seminar",
    topic: "Human Health and Drug Addiction Issues and Challenges",
    date: "26th June, 2023",
    image: siteAsset("/storage/events/nation6-09052401564037.jpg"),
    cardBgColor: "#ffffff",
  },
  {
    id: 9,
    title: "International Conference",
    topic: "Rethinking the Global South Literatures, Cultures and Media",
    date: "02nd–03rd February, 2019",
    image: siteAsset("/storage/events/nation5-09052401563145.jpg"),
    cardBgColor: "#ffffff",
  },
  {
    id: 10,
    title: "Guest Lecture",
    topic: "Preventions of Cruelty on Animals",
    speaker: "Mr. Utkarsh Mishra",
    date: "12th April, 2023",
    image: siteAsset("/storage/events/guest7-09052401573962.jpg"),
    cardBgColor: "#ffffff",
  },
  {
    id: 11,
    title: "Workshop",
    topic: "Awareness regarding the Bones & Skeleton",
    date: "30th September, 2023",
    image: siteAsset("/storage/events/webinar5-09052401553462.jpg"),
    cardBgColor: "#ffffff",
  },
];
