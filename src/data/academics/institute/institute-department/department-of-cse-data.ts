import { customeOverViewType } from "../../../../types/home-data-type";

import missionImg from "../../../../assets/images/academics/departments/dept-mission-icon1.png";
import vissionImg from "../../../../assets/images/academics/departments/dept-mission-icon2.png";
import { counterDataType } from "../../../home/counterData";
import { InstituteProfile } from "../../../../types/profile-data-type";

import professor from "../../../../assets/images/academics/departments/shobhit-sinha-1-1--05052510362381.jpeg";
import { FeeTableData } from "../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../../utils/custom/CustomFacultyListCard";

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



export const cseFacultyOverviewData: customeOverViewType = {
  heading: "Department Of Computer Science And Engineering",
  content:
    "The Department of Computer Science and Engineering aims at imparting quality education and strives to quench the thirst for knowledge. The Department offers B.Tech, M.Tech and Ph.D programs with specialization in Software Engineering, Machine Learning and Big Data Analytics. Core courses like Computer Technologies, Distributed Computing, Information Security, Programming Languages, Computer Networks, Database Management System, Software Engineering, Operating System, Complier Construction, Computer Organization and Architecture are taught by competent and qualified faculty members. The syllabus is updated periodically to incorporate courses on innovative technologies like Android Application Development, Python Programming, Digital Image Processing, Cyber Security, Design Thinking and Cloud Application Development. The curriculum also incorporates industrial summer training which enables students to get familiar with work culture and in turn help them to groom themselves. The department organizes Seminars, Workshops, Industrial Visits and Conferences in collaboration with professional bodies and invites renowned speakers and experts from academia and industry. The strength of the department are the faculties from premier institutions like IIT’s, NIT’s, Central Universities and a disciplined academic culture of teaching and learning. Consistent hard work in the delivery of course contents, meticulous planning, mentoring and innovative teaching pedagogies help to shape and turn our students into outstanding performers. At under graduate level, more than 80% students are placed with multiple job offers.",
};

export const counterDataForFacultyCSE: counterDataType[] = [
  { id: 1, value: "2012", suffix: "", label: "Established" },
  { id: 2, value: "27", suffix: "", label: "Faculty & Staff" },
  { id: 3, value: "2000", suffix: "", label: "Students" },
];

export const CSDepartmentVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: missionImg,
    heading: "Mission",
    points: [
      "To expose graduate and postgraduate students to basic principles and cutting edge technologies in Computer Science and Engineering by adopting updated and industry ready model curriculum.",
      "To strengthen the students in multidisciplinary skills that are required to solve complex real world problems and work in collaborative projects by means of diverse teaching pedagogy.",
      "To promote research, innovation and industry collaboration amongst students and faculties and contribute towards the growth of the society by providing conducive environment and resources.",
      "To inculcate a sense of pride and responsibility towards the nation and enhance ethical, moral and professional standards of graduates through engaging activities.",
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: vissionImg,
    heading: "Vision",
    points: [
      "To build the nation by fostering industry and research oriented studies in Computer Science and Engineering and become a centre of excellence in developing indigenous technologies for the advancement of the society.",
    ],
  },
];

export const instituteProfilesCSE: InstituteProfile[] = [
  {
    id: 1,
    title: "Department Head",
    name: "Dr. Shobhit Sinha",
    position: "HoD DCSE, SRMU, Lucknow-Deva Road",
    image: professor,

    // detailsHeading: "Experience &Achievements:  ",
    useBullets: false,

    details: [
      "**Qualification:** M.Tech., Ph.D.",
      "**Experience:** 19 Years (9 years in IT sector, 10 years in Education Sector)",
      "**Specialization/ Area of Research:** Artificial Intelligence",
      "**Email ID: ID:** hod.cse@srmu.ac.in",
      "**Contact No.:** +91-9335242041",
    ],

    modalContent: `
        <h2 class='Dr. Shobhit Sinha</h2>
        <p class="text-[#ffb703] font-wieght-300 font-size-15px ">Assistant Professor</></p>
        <p>
         Dr. Shobhit Sinha is a distinguished academician and industry expert having specialization in Machine Learning , Argumentation Mining and Java Framework , holding a PhD in Artificial Intelligence, Dr. Sinha combines a wealth of experience across both the Information Technology sector and the educational domain, making him a highly regarded professional in his field. With nine years of experience in the IT industry, Dr. Sinha has contributed to innovative solutions and advancements in technology, focusing primarily on the development and implementation of cutting-edge machine learning algorithms and Java-based frameworks. His expertise has been instrumental in driving impactful projects and fostering technological growth in the organizations he has worked with.Transitioning into academia, Dr. Sinha brings almost a decade of experience to the educational sector.
        </p>
        <p class='mt-3'>
          He has a passion for nurturing talent and guiding young researchers, evident through his role as a supervisor for four PhD scholars, whom he is mentoring in their pursuit of groundbreaking research. His teaching and mentorship have inspired countless students and researchers to excel in the ever-evolving field of AI. Dr. Sinha is an accomplished researcher with numerous publications, including both research papers and book chapters in reputed indexed journals. His work has been recognized and cited by peers
        </p>
          <p class='mt-3'>
         globally, reflecting his substantial contributions to advancing knowledge in Artificial Intelligence, Machine Learning, and Java Framework. Dr. Sinha&#39;s profound knowledge and experience enable him to address complex technological challenges, propose innovative solutions, and lead transformative initiatives in both the industry and academia. modal content
        </p>
      `,
  },
];

export const cseIndustryIntegratedFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    // 1) Cyber Security with L&T
    {
      course: "B.Tech. in CSE (Cyber Security) with L&T",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,55,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in CSE (Cyber Security) with L&T</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board 
          with Physics and Mathematics as compulsory subjects along with one of the Chemistry/
          Computer Science/Technical Vocational Subject. Candidate must have obtained minimum 
          45% marks or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST 
          Category in the above subjects taken together.
        </p>
      `,
    },

    // 2) Data Science & AI with L&T
    {
      course: "B.Tech. in CSE (Data Science & Artificial Intelligence) with L&T",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,55,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in CSE (Data Science & Artificial Intelligence) with L&T</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board 
          with Physics and Mathematics as compulsory subjects along with one of the Chemistry/
          Computer Science/Technical Vocational Subject. Candidate must have obtained minimum 
          45% marks or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST 
          Category in the above subjects taken together.
        </p>
      `,
    },

    // 3) M.Tech. in Data Science
    {
      course: "M.Tech. in Data Science",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 1,07,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.Tech. in Data Science</h2>
        <p>
          Candidate must have passed B.Tech (CSE) from any recognized University or AICTE recognized 
          Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 
          45% marks or 5.0 CGPA for SC/ST Category.
        </p>

        <p class='font-semibold mt-2'>OR</p>

        <p>
          Candidate must have passed MCA/M.Sc(CS)/MA(CA)/M.Sc.(IT)/M.Sc.(Electronics)/B.Tech (EC) 
          from any recognized University or AICTE recognized Institute/College with minimum 
          aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category.
        </p>
      `,
    },

    // 4) AI & ML
    {
      course: "B.Tech. in CSE (Artificial Intelligence & Machine Learning)",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,50,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in CSE (Artificial Intelligence & Machine Learning)</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board 
          with Physics and Mathematics as compulsory subjects along with one of the Chemistry/
          Computer Science/Technical Vocational Subject. Candidate must have obtained minimum 
          45% marks or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST 
          Category in the above subjects taken together.
        </p>
      `,
    },
  ],
};

export const cseIntegratedFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    // 1) B.Tech. in CSE + MBA
    {
      course: "B.Tech. in CSE + M.B.A.",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,47,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in CSE + M.B.A.</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board 
          with Physics and Mathematics as compulsory subjects along with one of the Chemistry/
          Computer Science/Technical Vocational Subject. Candidate must have obtained minimum 
          45% marks or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST 
          Category in the above subjects taken together.
        </p>
      `,
    },

    // 2) B.Tech. + M.Tech. in Computer Science Engineering
    {
      course: "B.Tech. + M.Tech. in Computer Science Engineering",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,47,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. + M.Tech. in Computer Science Engineering</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board 
          with Physics and Mathematics as compulsory subjects along with one of the Chemistry/
          Computer Science/Technical Vocational Subject. Candidate must have obtained minimum 
          45% marks or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST 
          Category in the above subjects taken together.
        </p>
      `,
    },
  ],
};

export const csePostUndergraduateFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    // 1) M.Tech. in Data Science
    {
      course: "M.Tech. in Data Science",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 1,07,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.Tech. in Data Science</h2>
        <p>
          Candidate must have passed <strong>B.Tech (CSE)</strong> from any recognized University or 
          AICTE recognized Institute/College with minimum aggregate marks of 
          <strong>50% or 5.5 CGPA for GEN/OBC</strong> and 
          <strong>45% or 5.0 CGPA for SC/ST Category</strong>.
        </p>
        <p class='mt-3 font-semibold'>OR</p>
        <p>
          Candidate must have passed 
          MCA / M.Sc(CS) / MA(CA) / M.Sc.(IT) / M.Sc.(Electronics) / B.Tech (EC) 
          from any recognized University or AICTE recognized Institute/College with the same 
          minimum percentage/CGPA requirements.
        </p>
      `,
    },

    // 2) M.Tech. in AI & Machine Learning
    {
      course: "M.Tech. in Artificial Intelligence & Machine Learning",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 1,07,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.Tech. in Artificial Intelligence & Machine Learning</h2>
        <p>
          Candidate must have passed 
          <strong>B.Tech.(CSE) / B.Tech.(IT) / B.Tech.(ECE) / B.Tech.(EN) / B.Tech.(EI)</strong> 
          from any recognized University or AICTE recognized Institute/College with minimum aggregate 
          marks of <strong>50% or 5.5 CGPA for GEN/OBC</strong> and 
          <strong>45% or 5.0 CGPA for SC/ST Category</strong>.
        </p>
        <p class='mt-3 font-semibold'>OR</p>
        <p>
          Candidate must have passed 
          MCA / M.Sc.(CS) / MA(CA) / M.Sc.(IT) / M.Sc.(Electronics) / M.Sc.(Maths) 
          with the same minimum percentage/CGPA requirements.
        </p>
      `,
    },

    // 3) M.Tech. in Computer Science Engineering
    {
      course: "M.Tech. in Computer Science Engineering",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 1,07,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.Tech. in Computer Science Engineering</h2>
        <p>
          Candidate must have passed <strong>B.Tech. (CSE)</strong> 
          from any recognized University or AICTE recognized Institute/College 
          with minimum <strong>50% or 5.5 CGPA for GEN/OBC</strong> and 
          <strong>45% or 5.0 CGPA for SC/ST Category</strong>.
        </p>
        <p class='mt-3 font-semibold'>OR</p>
        <p>
          Candidate must have passed 
          MCA / M.Sc.(CS) / MA(CA) / M.Sc.(IT) / M.Sc.(Electronics) / B.Tech. (EC) 
          with the same minimum percentage/CGPA requirements.
        </p>
      `,
    },

    // 4) M.Tech. in Computer Science Engineering (Part Time)
    {
      course: "M.Tech. in Computer Science Engineering (Part Time)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 69,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.Tech. in Computer Science Engineering (Part Time)</h2>
        <p>
          Candidate must have passed <strong>B.Tech. (CSE)</strong> 
          OR 
          MCA / M.Sc.(CS) / MA(CA) / M.Sc.(IT) / M.Sc.(Electronics) / B.Tech. (EC) 
          with minimum <strong>50% or 5.5 CGPA for GEN/OBC</strong> and 
          <strong>45% or 5.0 CGPA for SC/ST Category</strong>.
        </p>
        <p class='mt-3'>
          In addition, candidates must have at least 
          <strong>2 years of Teaching / Industrial / Research / Professional Work Experience</strong> 
          for the 3-year M.Tech. (Part Time) program.
        </p>
      `,
    },
  ],
};

export const cseundergraduateFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    // 1) B.Tech. in CSE + MBA
    {
      course: "B.Tech. in CSE + M.B.A.",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,47,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in CSE + M.B.A.</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board 
          with Physics and Mathematics as compulsory subjects along with one of the Chemistry/
          Computer Science/Technical Vocational Subject.
        </p>
        <p>
          Candidate must have obtained minimum <strong>45% marks</strong> or equivalent grade for GEN/OBC 
          and <strong>40% marks</strong> or equivalent grade for SC/ST Category in the above subjects taken together.
        </p>
      `,
    },

    // 2) B.Tech. in CSE (Cyber Security) with L&T
    {
      course: "B.Tech. in CSE (Cyber Security) with L&T",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,55,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in CSE (Cyber Security) with L&T</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board 
          with Physics and Mathematics as compulsory subjects along with one of the Chemistry/
          Computer Science/Technical Vocational Subject.
        </p>
        <p>
          Candidate must have obtained minimum <strong>45% marks</strong> for GEN/OBC and 
          <strong>40% marks</strong> for SC/ST Category in the above subjects taken together.
        </p>
      `,
    },

    // 3) B.Tech. in CSE (Data Science & AI) with L&T
    {
      course: "B.Tech. in CSE (Data Science & Artificial Intelligence) with L&T",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,55,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in CSE (Data Science & Artificial Intelligence) with L&T</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board 
          with Physics and Mathematics as compulsory subjects alongwith one of the Chemistry/
          Computer Science/Technical Vocational Subject.
        </p>
        <p>
          Candidate must have obtained minimum <strong>45% marks</strong> for GEN/OBC and 
          <strong>40% marks</strong> for SC/ST Category in the above subjects taken together.
        </p>
      `,
    },

    // 4) B.Tech. + M.Tech. in Computer Science Engineering
    {
      course: "B.Tech. + M.Tech. in Computer Science Engineering",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,47,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. + M.Tech. in Computer Science Engineering</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board 
          with Physics and Mathematics as compulsory subjects along with one of the Chemistry/
          Computer Science/Technical Vocational Subject.
        </p>
        <p>
          Candidate must have obtained minimum <strong>45% marks</strong> for GEN/OBC and 
          <strong>40% marks</strong> for SC/ST Category in the above subjects taken together.
        </p>
      `,
    },

    // 5) B.Tech. in CSE (AI & ML)
    {
      course: "B.Tech. in CSE (Artificial Intelligence & Machine Learning)",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,50,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in CSE (Artificial Intelligence & Machine Learning)</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board 
          with Physics and Mathematics as compulsory subjects alongwith one of the Chemistry/
          Computer Science/Technical Vocational Subject.
        </p>
        <p>
          Candidate must have obtained minimum <strong>45% marks</strong> for GEN/OBC and 
          <strong>40% marks</strong> for SC/ST Category in the above subjects taken together.
        </p>
      `,
    },

    // 6) B.Tech. in Computer Science Engineering
    {
      course: "B.Tech. in Computer Science Engineering",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,47,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in Computer Science Engineering</h2>
        <p>
          Candidate must have passed 10+2 or equivalent from recognized Central/State Board 
          with Physics and Mathematics as compulsory subjects along with one of the Chemistry/
          Computer Science/Technical Vocational Subject.
        </p>
        <p>
          Candidate must have obtained minimum <strong>45% marks</strong> for GEN/OBC and 
          <strong>40% marks</strong> for SC/ST Category in the above subjects taken together.
        </p>
      `,
    },

    // 7) B.Tech. in Computer Science Engineering (Lateral Entry)
    {
      course: "B.Tech. in Computer Science Engineering (Lateral Entry)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in Computer Science Engineering (Lateral Entry)</h2>
        <p>
          Candidate must have passed a <strong>3 or 4 year Diploma</strong> in a technical stream from 
          institutions recognized by AICTE or a State Board of Technical Education.
        </p>
        <p>
          OR must have passed <strong>B.Sc.</strong> degree in Biology, Microbiology, Botany, Zoology, 
          Chemistry, Physics, Maths, Physiology, Biotechnology, Biochemistry, Agriculture with 
          minimum <strong>45% or 5.0 CGPA for GEN/OBC</strong> and 
          <strong>40% or 4.5 CGPA for SC/ST Category</strong>.
        </p>
      `,
    },
  ],
};




// faculty -cse


export const CsefacultyData: FacultyItem[] = [
  {
    id: 1,
    name: "Dr. Rajeev Kumar",
    designation: "Assistant Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#001219",
  },
  {
    id: 2,
    name: "Mr. Kamlesh Chandra Maurya",
    designation: "Assistant Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#003049",
  },
  {
    id: 3,
    name: "Ms. Sakshi Singh",
    designation: "Assistant Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#370617",
  },
  {
    id: 4,
    name: "Ms. Reeta",
    designation: "Assistant Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#283618",
  },
  {
    id: 5,
    name: "Dr. Anil Kumar Pandey",
    designation: "Assistant Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#432818",
  },
  {
    id: 5,
    name: "Ms. Abhilasha Mandal",
    designation: "Assistant Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#432818",
  },
  {
    id: 5,
    name: "Mr. Anil Kumar",
    designation: "Assistant Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#432818",
  },
  {
    id: 5,
    name: "Ms. Anjali Awasthi",
    designation: "Assistant Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#432818",
  },
  {
    id: 5,
    name: "Mr. Ijtaba Saleem Khan",
    designation: "Assistant Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#432818",
  },
  {
    id: 5,
    name: "Dr. Satya Bhushan Verma",
    designation: "Assistant Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#432818",
  },
  {
    id: 5,
    name: "Mr. Aditya Pratap Singh",
    designation: "Assistant Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#432818",
  },
  {
    id: 5,
    name: "Ms. Arpita Vishwakarma",
    designation: "Assistant Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#432818",
  },
  {
    id: 5,
    name: "Mr. Neelesh Mishra",
    designation: "Assistant Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#432818",
  },
  {
    id: 5,
    name: "Ms. Prabha Singh",
    designation: "Assistant Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#432818",
  },
  {
    id: 5,
    name: "Ms. Atifa Parveen",
    designation: "Assistant Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#432818",
  },
  {
    id: 5,
    name: "Dr. Shobhit Sinha",
    designation: "Assistant Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#432818",
  },
];


 export const csetableHeaders: Headers = {
   name: "NAME OF STUDENT",
   program: "PROGRAM",
   company: "COMPANY",
 };

export const CseplacedStudents: Student[] = [
  { name: "Aman Mishra", program: "B.Tech. in Computer Science Engineering", company: "WIPRO" },
  { name: "Md Ataa Khan", program: "B.Tech. in Computer Science Engineering", company: "SAP" },
  { name: "Shivam Agarwal", program: "B.Tech. in Computer Science Engineering", company: "SAP" },
  { name: "Tushar Trivedi", program: "B.Tech. in Computer Science Engineering", company: "SAP" },
  { name: "Ananya Sinha", program: "B.Tech. in Computer Science Engineering", company: "Learning Route" },
  { name: "Pooja Verma", program: "B.Tech. in Computer Science Engineering", company: "HCL Infosystems" },
  { name: "Priyanshu Singh", program: "B.Tech. in Computer Science Engineering", company: "Planet Spark" },
  { name: "Divyansh Trivedi", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Awantika Dwivedi", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Jalaj Agarwal", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Harshit Shukla", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Shivangi Pandey", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Prem Prakash Verma", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Shivendra Shukla", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Utkarsh Singh Rajawat", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Md Armaan", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Prabhat Singh", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Anshika Sahni", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Tushar Gupta", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Deepesh Singh", program: "B.Tech. in Computer Science Engineering", company: "WIPRO" },
  { name: "Anushka Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Vivek Dixit", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Aniket Tandon", program: "B.Tech. in Computer Science Engineering", company: "Mobiloitte" },
  { name: "Diwakar Singh", program: "B.Tech. in Computer Science Engineering", company: "Mobiloitte" },
  { name: "Vinayak Tripathi", program: "B.Tech. in Computer Science Engineering", company: "Mobiloitte" },
  { name: "Pragya Tripathi", program: "B.Tech. in Computer Science Engineering", company: "Mobiloitte" },
  { name: "Mohd Sameer Ahmad", program: "B.Tech. in Computer Science Engineering", company: "PayTM" },
  { name: "Devendra Giri", program: "B.Tech. in Computer Science Engineering", company: "Savantis" },
  { name: "Kushagra Singh", program: "B.Tech. in Computer Science Engineering", company: "Mobiloitte" },
  { name: "Neha Srivastava", program: "B.Tech. in Computer Science Engineering", company: "PayTM" },
  { name: "Tushar Banerjee", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Abhinav Singh", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Sagar Shukla", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Ritik Sati", program: "B.Tech. in Computer Science Engineering", company: "PayTM" },
  { name: "Sarthak Negi", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Ananya Sinha", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Prince Sharma", program: "B.Tech. in Computer Science Engineering", company: "PayTM" },
  { name: "Akshita Gupta", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Ankita Tiwari", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Labanya Das", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Swarnima Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Harsh Prakash", program: "B.Tech. in Computer Science Engineering", company: "Global logic" },
  { name: "Ayushi Singh", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Abhishek Giri", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Ram Kumar Shukla", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Pratham Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Kanika Bajpai", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Misbah Naqvi", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Nikhil Kumar", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Ruchi Singh", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Kanika Chowdhary", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Nitin Verma", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Anushree Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Aditya Agrawal", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Shreya Gupta", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Mrityunjay Yadav", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Utpal Singh", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Abhay Prajapati", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Harshit Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Mobiloitte" },
  { name: "Prakhar Mishra", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Shubham Pal", program: "B.Tech. in Computer Science Engineering", company: "Mobiloitte" },
  { name: "Sayed Alhmd Husain Kazmi", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Sanskar Kesharwani", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Mritunjay Singh", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Vaibhav Agarwal", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Md Saif Ali", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Prashant Singh", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Naveen Kumar Yadav", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Muskan Prajapati", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Shivam Agarwal", program: "B.Tech. in Computer Science Engineering", company: "Coditas" },
  { name: "Raunak Kumar", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Prashant Singh", program: "B.Tech. in Computer Science Engineering", company: "NEC" },
  { name: "Ayush Mahendra", program: "B.Tech. in Computer Science Engineering", company: "NEC" },
  { name: "Ayush Kumar", program: "B.Tech. in Computer Science Engineering", company: "PayTM" },
  { name: "Shivangi Sharma", program: "B.Tech. in Computer Science Engineering", company: "WIPRO" },
  { name: "Ashish Pratap", program: "B.Tech. in Computer Science Engineering", company: "WIPRO" },
  { name: "Antra Singh", program: "B.Tech. in Computer Science Engineering", company: "WIPRO" },
  { name: "Harshit Kishore", program: "B.Tech. in Computer Science Engineering", company: "Naehas" },
  { name: "Aditi Sinha", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Naveen Kumar Yadav", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Apratim Chakraborty", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Shruti Pandey", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Sitlendra Pratap Singh", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Aakriti Singh", program: "B.Tech. in Computer Science Engineering", company: "Global logic" },
  { name: "Kaynat Fatima", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Utkarsh Mishra", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Mohd Yousuf Parvez", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Vineet Verma", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Abhijeet Pandey", program: "B.Tech. in Computer Science Engineering", company: "WIPRO" },
  { name: "Aliza Zaheer", program: "B.Tech. in Computer Science Engineering", company: "WIPRO" },
  { name: "Bhaskar Verma", program: "B.Tech. in Computer Science Engineering", company: "WIPRO" },
  { name: "Dipanshu Yadav", program: "B.Tech. in Computer Science Engineering", company: "WIPRO" },
  { name: "Jatin Mishra", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Kartik Gupta", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Meghna Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Global logic" },
  { name: "Vinayak Vedant Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Prashant Singh", program: "B.Tech. in Computer Science Engineering", company: "Tech Mahindra" },
  { name: "Sandeep Kumar Shama", program: "B.Tech. in Computer Science Engineering", company: "HCL Infosystems" },
  { name: "Deepanshu Sharma", program: "B.Tech. in Computer Science Engineering", company: "Tech Mahindra" },
  { name: "Sumit Srivastava", program: "B.Tech. in Computer Science Engineering", company: "WIPRO" },
  { name: "Abhishek Srivastav", program: "B.Tech. in Computer Science Engineering", company: "Tech Mahindra" },
  { name: "Vivek Singh Rathore", program: "B.Tech. in Computer Science Engineering", company: "WIPRO" },
  { name: "Ritik Gupta", program: "B.Tech. in Computer Science Engineering", company: "Zenus Group" },
  { name: "Sanjeev Kumar Mishra", program: "B.Tech. in Computer Science Engineering", company: "Zenus Group" },
  { name: "Rishabh Gaur", program: "B.Tech. in Computer Science Engineering", company: "Tech Mahindra" },
  { name: "Rajeev Ranjan", program: "B.Tech. in Computer Science Engineering", company: "WIPRO" },
  { name: "Pratyush Rathore", program: "B.Tech. in Computer Science Engineering", company: "Planet Spark" },
  { name: "Saad Ahmad Abbasi", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Stuti Tiwari", program: "B.Tech. in Computer Science Engineering", company: "Savantis" },
  { name: "Akash Srivastava", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Aditya Dwivedi", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Imran Khan", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Anoop Pandey", program: "B.Tech. in Computer Science Engineering", company: "HCL Infosystems" },
  { name: "Kartik Rajput", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Suraj Pal", program: "B.Tech. in Computer Science Engineering", company: "WIPRO" },
  { name: "Abhishek Giri", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Anshu Negi", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Rimjhim Verma", program: "B.Tech. in Computer Science Engineering", company: "PayTM" },
  { name: "Sumit Rajpal", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Debashish Bose", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Shivansh Sharma", program: "B.Tech. in Computer Science Engineering", company: "Infosys" },
  { name: "Manu Singh", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Mritunjay Singh", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Neeraj Tiwari", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Mohd Qayam Hasan", program: "B.Tech. in Computer Science Engineering", company: "WIPRO" },
  { name: "Abhishek Singh", program: "B.Tech. in Computer Science Engineering", company: "Global logic" },
  { name: "Puru Chaudhary", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "SuryaJeet Singh", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Rishabh Gaur", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Romit Mukherjee", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Khushi Srivastava", program: "B.Tech. in Computer Science Engineering", company: "WIPRO" },
  { name: "Shivam Agarwal", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Nidhi Yadav", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Tushar Banerjee", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Syed Bilal Abbas", program: "B.Tech. in Computer Science Engineering", company: "Learning Route" },
  { name: "Deepika Chauhan", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Savinav Verma", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Shashank Raj Singh", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Preeti Chauhan", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Vivek Prakash", program: "B.Tech. in Computer Science Engineering", company: "Coditas" },
  { name: "Ayush Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Akhil Maurya", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Sumit Kumar Pandey", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Shantanu Dasila", program: "B.Tech. in Computer Science Engineering", company: "Hero Futures Energies" },
  { name: "Praween Dubey", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Pawan Kumar Rai", program: "B.Tech. in Computer Science Engineering", company: "WIPRO" },
  { name: "Harsh Kumar", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },
  { name: "Priyanshu Singh", program: "B.Tech. in Computer Science Engineering", company: "eTeam" },
  { name: "Ashutosh", program: "B.Tech. in Computer Science Engineering", company: "WIPRO" },
  { name: "Purti Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Anns Maria", program: "B.Tech. in Computer Science Engineering", company: "Net Connect Global" },
  { name: "Pragati Sharma", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Shivam Agarwal", program: "B.Tech. in Computer Science Engineering", company: "Accenture" },
  { name: "Vikas Kumar Gond", program: "B.Tech. in Computer Science Engineering", company: "Infosys" },
  { name: "Rishi Singh", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Ankit Yadav", program: "B.Tech. in Computer Science Engineering", company: "NovelVox" },
  { name: "Shreya Yadav", program: "B.Tech. in Computer Science Engineering", company: "VBeyond" },
  { name: "Sachin Bisht", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Aditya Mishra", program: "B.Tech. in Computer Science Engineering", company: "Byjus" },
  { name: "Abhishek Awasthi", program: "B.Tech. in Computer Science Engineering", company: "Tecgrah Consulting" },
  { name: "Akanksha Tripathi", program: "B.Tech. in Computer Science Engineering", company: "Collabera" },
  { name: "Arunav Roy", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Saurabh Chandra", program: "B.Tech. in Computer Science Engineering", company: "Collabera" },
  { name: "Shashwat Agnihotri", program: "B.Tech. in Computer Science Engineering", company: "Planet Spark" },
  { name: "Antima Rai", program: "B.Tech. in Computer Science Engineering", company: "Vinove Software" },
  { name: "Aditya Kushwaha", program: "B.Tech. in Computer Science Engineering", company: "SAP" },
  { name: "Shubham Verma", program: "B.Tech. in Computer Science Engineering", company: "Coforge" },
  { name: "Rajat Saxena", program: "B.Tech. in Computer Science Engineering", company: "Coforge" },
  { name: "Nikhil Kumar Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Coforge" },
  { name: "Garima Arora", program: "B.Tech. in Computer Science Engineering", company: "Collabera" },
  { name: "Harshita Anand", program: "B.Tech. in Computer Science Engineering", company: "Learning Route" },
  { name: "Sumit Kumar Maurya", program: "B.Tech. in Computer Science Engineering", company: "VVDN" },
  { name: "Unnati lndravan", program: "B.Tech. in Computer Science Engineering", company: "Extramarks" },
  { name: "Saumya Bajpai", program: "B.Tech. in Computer Science Engineering", company: "Huron" },
  { name: "Anisha Sharma", program: "B.Tech. in Computer Science Engineering", company: "Huron" },
  { name: "Alav Rathore", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Hasan Ahmed Khan", program: "B.Tech. in Computer Science Engineering", company: "VBeyond" },
  { name: "Atul Singh", program: "B.Tech. in Computer Science Engineering", company: "Vinove Software" },
  { name: "Muskan Taval", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Tushar Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Collabera" },
  { name: "Pranjal Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Smartbrains" },
  { name: "Rajnish Kumar", program: "B.Tech. in Computer Science Engineering", company: "Cloud Analogy" },
  { name: "Zuha Fatima", program: "B.Tech. in Computer Science Engineering", company: "Capgemini" },
  { name: "Vaibhav Dixit", program: "B.Tech. in Computer Science Engineering", company: "Fexle Services" },
  { name: "Md Javed Ahmed Ansari", program: "B.Tech. in Computer Science Engineering", company: "eTeam" },
  { name: "Dakshesh Mani Tripathi", program: "B.Tech. in Computer Science Engineering", company: "eTeam" },
  { name: "Divvansh Mishra", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Jay Chand Yadav", program: "B.Tech. in Computer Science Engineering", company: "Fexle Services" },
  { name: "Soham Dwivedi", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Ankit Sinah", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Saket Kumar Vishwakarma", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Devanshi", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Kavva Sinqh", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Saksham Srivastava", program: "B.Tech. in Computer Science Engineering", company: "eTeam" },
  { name: "Ayushi Singh", program: "B.Tech. in Computer Science Engineering", company: "eTeam" },
  { name: "Deepshikha Mahawar", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Rishabh Raj Jain", program: "B.Tech. in Computer Science Engineering", company: "eTeam" },
  { name: "Ali Khan", program: "B.Tech. in Computer Science Engineering", company: "eTeam" },
  { name: "Pawan Kumar Chandra", program: "B.Tech. in Computer Science Engineering", company: "Coral telecom" },
  { name: "Tushar Dubey", program: "B.Tech. in Computer Science Engineering", company: "eTeam" },
  { name: "Kumar Sambhav Saxena", program: "B.Tech. in Computer Science Engineering", company: "Collabera" },
  { name: "Vikrant Singh Somvanshi", program: "B.Tech. in Computer Science Engineering", company: "Cloud Analogy" },
  { name: "Bhavishya Gupta", program: "B.Tech. in Computer Science Engineering", company: "amDocs" },
  { name: "Vishwa Vallabh", program: "B.Tech. in Computer Science Engineering", company: "amDocs" },
  { name: "Anuj Shukla", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Preeti Keshri", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Shikhar Kumar Mishra", program: "B.Tech. in Computer Science Engineering", company: "Sopra Steria" },
  { name: "Nitva Pandey", program: "B.Tech. in Computer Science Engineering", company: "Extramarks" },
  { name: "Suraj Prasad", program: "B.Tech. in Computer Science Engineering", company: "MobCoder" },
  { name: "Satish Tiwari", program: "B.Tech. in Computer Science Engineering", company: "MobCoder" },
  { name: "Vinay Kumar", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Vimesh Prajapati", program: "B.Tech. in Computer Science Engineering", company: "Huron" },
  { name: "Vishal Trioathi", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Priya Mishra", program: "B.Tech. in Computer Science Engineering", company: "Huron" },
  { name: "Himanshu Goswami", program: "B.Tech. in Computer Science Engineering", company: "Extramarks" },
  { name: "Vikas Kumar Choubey", program: "B.Tech. in Computer Science Engineering", company: "Accenture" },
  { name: "Vishal Kumar Singh", program: "B.Tech. in Computer Science Engineering", company: "Sopra Steria" },
  { name: "Anuraq Pratap Sinqh", program: "B.Tech. in Computer Science Engineering", company: "VBeyond" },
  { name: "Prakhar Dixit", program: "B.Tech. in Computer Science Engineering", company: "VBeyond" },
  { name: "Zafar Abbas", program: "B.Tech. in Computer Science Engineering", company: "Tranzita" },
  { name: "Zaki lrshad", program: "B.Tech. in Computer Science Engineering", company: "VBeyond" },
  { name: "Rahul Kumar", program: "B.Tech. in Computer Science Engineering", company: "Mphasis" },
  { name: "Kushara Pardal", program: "B.Tech. in Computer Science Engineering", company: "VBeyond" },
  { name: "Piyush Dubey", program: "B.Tech. in Computer Science Engineering", company: "VBeyond" },
  { name: "Ayush Sharma", program: "B.Tech. in Computer Science Engineering", company: "OLA through Cocubes" },
  { name: "Priyanshu Singh", program: "B.Tech. in Computer Science Engineering", company: "Corizo" },
  { name: "Aishwar Sharma", program: "B.Tech. in Computer Science Engineering", company: "Mphasis" },
  { name: "Shikhar Saxena", program: "B.Tech. in Computer Science Engineering", company: "World Fashion Exchange" },
  { name: "Anchal Gupta", program: "B.Tech. in Computer Science Engineering", company: "Mphasis" },
  { name: "Avichal Upadhyay", program: "B.Tech. in Computer Science Engineering", company: "Mphasis" },
  { name: "Deepika Verma", program: "B.Tech. in Computer Science Engineering", company: "Mphasis" },
  { name: "Harshit Dubey", program: "B.Tech. in Computer Science Engineering", company: "Mphasis" },
  { name: "Pooja Pathak", program: "B.Tech. in Computer Science Engineering", company: "Cloud Analogy" },
  { name: "Ronit Singh", program: "B.Tech. in Computer Science Engineering", company: "Mphasis" },
  { name: "Sonali Yadav", program: "B.Tech. in Computer Science Engineering", company: "Mphasis" },
  { name: "Sonali Yadav", program: "B.Tech. in Computer Science Engineering", company: "Mphasis" }, // duplicate (kept as provided)
  { name: "Pushpanjali Mani Singh", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Tushar Lakhanpal", program: "B.Tech. in Computer Science Engineering", company: "Mphasis" },
  { name: "Anuhshka Saxena", program: "B.Tech. in Computer Science Engineering", company: "Extramarks" },
  { name: "Vaishnavi Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Mphasis" },
  { name: "Alish Chaudharv", program: "B.Tech. in Computer Science Engineering", company: "Certybox" },
  { name: "Sudhir Pandey", program: "B.Tech. in Computer Science Engineering", company: "Certybox" },
  { name: "Ekta Rai", program: "B.Tech. in Computer Science Engineering", company: "MobCoder" },
  { name: "Md. Shadab", program: "B.Tech. in Computer Science Engineering", company: "Certybox" },
  { name: "Pragati Malviya", program: "B.Tech. in Computer Science Engineering", company: "Harman Connected services" },
  { name: "Himanshu Mishra", program: "B.Tech. in Computer Science Engineering", company: "Tranzita" },
  { name: "Kushagra Misra", program: "B.Tech. in Computer Science Engineering", company: "Magic Edtech" },
  { name: "Aditi Sharma", program: "B.Tech. in Computer Science Engineering", company: "Coral telecom" },
  { name: "Diqvijay Sinqh", program: "B.Tech. in Computer Science Engineering", company: "Webkul" },
  { name: "Prakhar Gupta", program: "B.Tech. in Computer Science Engineering", company: "Skolar" },
  { name: "Shivam Tiwari", program: "B.Tech. in Computer Science Engineering", company: "Corizo" },
  { name: "Vijay Shankar Mishra", program: "B.Tech. in Computer Science Engineering", company: "Corizo" },
  { name: "Md Salman", program: "B.Tech. in Computer Science Engineering", company: "Singsys" },
  { name: "Vishi Chaurasia", program: "B.Tech. in Computer Science Engineering", company: "Webkul" },
  { name: "Paritosh Nigam", program: "B.Tech. in Computer Science Engineering", company: "Corizo" },
  { name: "Anmol Verma", program: "B.Tech. in Computer Science Engineering", company: "Corizo" },
  { name: "Aman Yadav", program: "B.Tech. in Computer Science Engineering", company: "Corizo" },
  { name: "Swarnima Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Vinove Software" },
  { name: "Utkarsh Sharma", program: "B.Tech. in Computer Science Engineering", company: "Corizo" },
  { name: "Debashish Bose", program: "B.Tech. in Computer Science Engineering", company: "Vinove Software" },
  { name: "Aaryan Singh", program: "B.Tech. in Computer Science Engineering", company: "Corizo" },
  { name: "Harsh Pandey", program: "B.Tech. in Computer Science Engineering", company: "Learning Route" },
  { name: "Malika Tandon", program: "B.Tech. in Computer Science Engineering", company: "Extramarks" },
  { name: "Anand Krishna", program: "B.Tech. in Computer Science Engineering", company: "Corizo" },
  { name: "Rupesh Kumar Sahu", program: "B.Tech. in Computer Science Engineering", company: "Corizo" },
  { name: "Manya Vaish", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Sarvesh Kumar Tewari", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Shivanqi Sinqh", program: "B.Tech. in Computer Science Engineering", company: "Extramarks" },
  { name: "Siddharth Pandey", program: "B.Tech. in Computer Science Engineering", company: "Singsys" },
  { name: "Md Ammar", program: "B.Tech. in Computer Science Engineering", company: "Nucleus Software" },
  { name: "Komal Gupta", program: "B.Tech. in Computer Science Engineering", company: "Certybox" },
  { name: "Sneha Mishra", program: "B.Tech. in Computer Science Engineering", company: "Certybox" },
  { name: "Anmol Mishra", program: "B.Tech. in Computer Science Engineering", company: "Planet Spark" },
  { name: "Aman Srivastav", program: "B.Tech. in Computer Science Engineering", company: "Coforge" },
  { name: "Ganga Sagar Pal", program: "B.Tech. in Computer Science Engineering", company: "Coforge" },
  { name: "Pushpak Saxena", program: "B.Tech. in Computer Science Engineering", company: "Coforge" },
  { name: "Akhil Mishra", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Anand Krishna", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Devansh Panjwani", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Eleen Verma", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Harshit Tiwari", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Madhavendra Kumar Awasthi", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Mohd. Farhan Siddiqui", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Poorva Sahu", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Pranjal Bhardwaj", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Pranjal Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Prateek Singh", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Shubham Kumar", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Subral Jaiswal", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Shubhangi Singh", program: "B.Tech. in Computer Science Engineering", company: "Coforge" },
  { name: "Harshit Sharma", program: "B.Tech. in Computer Science Engineering", company: "Cloud Analogy" },
  { name: "Vivek Dwivedi", program: "B.Tech. in Computer Science Engineering", company: "Collabera" },
  { name: "Harshit Sinha", program: "B.Tech. in Computer Science Engineering", company: "Collabera" },
  { name: "Ranu Sharma", program: "B.Tech. in Computer Science Engineering", company: "AU Bank" },
  { name: "Anjali Singh", program: "B.Tech. in Computer Science Engineering", company: "Collabera" },
  { name: "Ayush Kumar Shrivastava", program: "B.Tech. in Computer Science Engineering", company: "Collabera" },
  { name: "Ritesh Singh", program: "B.Tech. in Computer Science Engineering", company: "Cloud Analogy" },
  { name: "Divynashu Singh", program: "B.Tech. in Computer Science Engineering", company: "Cloud Analogy" },
  { name: "Anurag Soni", program: "B.Tech. in Computer Science Engineering", company: "AU Bank" },
  { name: "Himanshu Srivastava", program: "B.Tech. in Computer Science Engineering", company: "AU Bank" },
  { name: "Ganesh Bhusal", program: "B.Tech. in Computer Science Engineering", company: "Cloud Analogy" },
  { name: "Agam Srivastava", program: "B.Tech. in Computer Science Engineering", company: "mFilterit" },
  { name: "Shayoun Bhaduri", program: "B.Tech. in Computer Science Engineering", company: "Teachnook" },
  { name: "Devendra Pratap Yadav", program: "B.Tech. in Computer Science Engineering", company: "eTeam" },
  { name: "Dakshesh Mani Tripathi", program: "B.Tech. in Computer Science Engineering", company: "Teachnook" },
  { name: "Ayushi Singh", program: "B.Tech. in Computer Science Engineering", company: "Teachnook" },
  { name: "Vikas Yadav", program: "B.Tech. in Computer Science Engineering", company: "Teachnook" },
  { name: "Divyanshu Singh Rathaour", program: "B.Tech. in Computer Science Engineering", company: "Unified Cloud Systems" },
  { name: "Shivam Tiwari", program: "B.Tech. in Computer Science Engineering", company: "Teachnook" },
  { name: "Harshit Shukla", program: "B.Tech. in Computer Science Engineering", company: "Unified Cloud Systems" },
  { name: "Avinash Yadav", program: "B.Tech. in Computer Science Engineering", company: "Teachnook" },
  { name: "Abhishek Singh", program: "B.Tech. in Computer Science Engineering", company: "Teachnook" },
  { name: "Shivam Upadhyay", program: "B.Tech. in Computer Science Engineering", company: "Teachnook" },
  { name: "Dhairya Seth", program: "B.Tech. in Computer Science Engineering", company: "Teachnook" },
  { name: "Anand Krishna", program: "B.Tech. in Computer Science Engineering", company: "Teachnook" },
  { name: "Ravitej Pratap Nishad", program: "B.Tech. in Computer Science Engineering", company: "Teachnook" },
  { name: "Abhishek Singh", program: "B.Tech. in Computer Science Engineering", company: "Teachnook" },
  { name: "Yogendra Singh", program: "B.Tech. in Computer Science Engineering", company: "Teachnook" },
  { name: "Akshat Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Teachnook" },
  { name: "Jayendra Pratap Singh", program: "B.Tech. in Computer Science Engineering", company: "Teachnook" },
  { name: "Ruchi Chaurasia", program: "B.Tech. in Computer Science Engineering", company: "Aspiring CEO" },
  { name: "Abhishek Shukla", program: "B.Tech. in Computer Science Engineering", company: "Kaushal Enterprises" },
  { name: "Abhishek Kumar", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Aditi Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Rishabh Raj Jain", program: "B.Tech. in Computer Science Engineering", company: "Alpine tech" },
  { name: "Adrika Tiwari", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Hiralal", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Vikram Singh", program: "B.Tech. in Computer Science Engineering", company: "Alpine tech" },
  { name: "Md Wajihulla", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Pintu Kumar Jaiswal", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Ravi Sharma", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Vaibhav Pathak", program: "B.Tech. in Computer Science Engineering", company: "Chetu Inc" },
  { name: "Arjita Sharma", program: "B.Tech. in Computer Science Engineering", company: "Raystead Infotech" },
  { name: "Rajat Singh", program: "B.Tech. in Computer Science Engineering", company: "SkillZee" },
  { name: "Akriti Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Raystead Infotech" },
  { name: "Bhoop Narayan Gupta", program: "B.Tech. in Computer Science Engineering", company: "Enoble IP" },
  { name: "Vaishali Tripathi", program: "B.Tech. in Computer Science Engineering", company: "Enoble IP" },
  { name: "Meenakshi Bhattacharya", program: "B.Tech. in Computer Science Engineering", company: "Brahmavarta Group" },
  { name: "Shantanu Dasila", program: "B.Tech. in Computer Science Engineering", company: "Brahmavarta Group" },
  { name: "Vijay Shankar Mishra", program: "B.Tech. in Computer Science Engineering", company: "Brahmavarta Group" },
  { name: "Pranjal Bhardwaj", program: "B.Tech. in Computer Science Engineering", company: "Brahmavarta Group" },
  { name: "Poorva Sahu", program: "B.Tech. in Computer Science Engineering", company: "Brahmavarta Group" },
  { name: "Abhishek Singh", program: "B.Tech. in Computer Science Engineering", company: "Brahmavarta Group" },
  { name: "Ankit Upadhyay", program: "B.Tech. in Computer Science Engineering", company: "Enoble IP" },
  { name: "Adarsh Kumar", program: "B.Tech. in Computer Science Engineering", company: "Balaji Constructions" },
  { name: "Arti Chaurasia", program: "B.Tech. in Computer Science Engineering", company: "Balaji Constructions" },
  { name: "Vibhor Tewari", program: "B.Tech. in Computer Science Engineering", company: "Dataman" },
  { name: "Ujjwal Vishwakarma", program: "B.Tech. in Computer Science Engineering", company: "Nucleus Software" },
  { name: "Shameel Ali", program: "B.Tech. in Computer Science Engineering", company: "Nucleus Software" },
  { name: "Saloni Upadhyay", program: "B.Tech. in Computer Science Engineering", company: "Nucleus Software" },
  { name: "Shreya Bhardwaj", program: "B.Tech. in Computer Science Engineering", company: "Nucleus Software" },
  { name: "Aniket Tewari", program: "B.Tech. in Computer Science Engineering", company: "Nucleus Software" },

  { name: "Md Yasir Kamal", program: "B.Tech. in Computer Science Engineering", company: "Decathelon" },
  { name: "Aishwarva Tandon", program: "B.Tech. in Computer Science Engineering", company: "Phronesis" },
  { name: "Ritika Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Databorouqh India Pvt Ltd" },

  { name: "Prerna Rai", program: "B.Tech. in Computer Science Engineering", company: "Teachnook" },

  { name: "Shayoun Bhaduri", program: "B.Tech. in Computer Science Engineering", company: "YTT Group" },
  { name: "Meenakshi Bhattacharya", program: "B.Tech. in Computer Science Engineering", company: "YTT Group" },
  { name: "Pranjal Srivastava", program: "B.Tech. in Computer Science Engineering", company: "YTT Group" },

  { name: "Nivedita Tripathi", program: "B.Tech. in Computer Science Engineering", company: "Unicode System Pvt. Ltd" },
  { name: "Shriya kapoor", program: "B.Tech. in Computer Science Engineering", company: "Phronesis" },
  { name: "Rashi Shukla", program: "B.Tech. in Computer Science Engineering", company: "Teachnook" },

  { name: "Anand Krishna", program: "B.Tech. in Computer Science Engineering", company: "Anlage Infotech (India) Private Ltd." },
  { name: "Shivam Tiwari", program: "B.Tech. in Computer Science Engineering", company: "Anlage Infotech (India) Private Ltd." },
  { name: "Aakarsh Arora", program: "B.Tech. in Computer Science Engineering", company: "Anlage Infotech (India) Private Ltd." },

  { name: "Sumit Tewari", program: "B.Tech. in Computer Science Engineering", company: "SkillCircle" },

  { name: "Aditya Mishra", program: "B.Tech. in Computer Science Engineering", company: "uCertify" },
  { name: "Vaibhav Pathak", program: "B.Tech. in Computer Science Engineering", company: "uCertify" },

  { name: "Lovkush Pandey", program: "B.Tech. in Computer Science Engineering", company: "Startek, Lucknow" },
  { name: "Utkarsh Pandey", program: "B.Tech. in Computer Science Engineering", company: "Hike Education" },
  { name: "Alok Singh", program: "B.Tech. in Computer Science Engineering", company: "Linkquest" },

  { name: "Akshat Srivastava", program: "B.Tech. in Computer Science Engineering", company: "SkillZee" },
  { name: "Abhishek John Charan", program: "B.Tech. in Computer Science Engineering", company: "SkillZee" },

  { name: "Khan Salma Imran", program: "B.Tech. in Computer Science Engineering", company: "Unicode System Pvt. Ltd" },
  { name: "Shashank Upadhyay", program: "B.Tech. in Computer Science Engineering", company: "Puneet Automobiles" },
  { name: "Muskan Gupta", program: "B.Tech. in Computer Science Engineering", company: "Unicode System Pvt. Ltd" },
  { name: "Vaishali Sinoh", program: "B.Tech. in Computer Science Engineering", company: "Unicode System Pvt. Ltd" },

  { name: "Kaustubh Krishna", program: "B.Tech. in Computer Science Engineering", company: "Databorouqh India Pvt Ltd" },
  { name: "Ayush Kumar Singh", program: "B.Tech. in Computer Science Engineering", company: "Digihive Ltd" },
  { name: "Priyanka yadav", program: "B.Tech. in Computer Science Engineering", company: "Unicode System Pvt. Ltd" },

  { name: "Shruti Tiwari", program: "B.Tech. in Computer Science Engineering", company: "Allsoft Solutions" },

  { name: "Yashwita Mishra", program: "B.Tech. in Computer Science Engineering", company: "Continuum Global" },
  { name: "Devansh Sinqh", program: "B.Tech. in Computer Science Engineering", company: "Continuum Global" },

  { name: "Vivek Singh", program: "B.Tech. in Computer Science Engineering", company: "Pie infocomm" },

  { name: "Ataurrahman Khan", program: "B.Tech. in Computer Science Engineering", company: "SRDT" },
  { name: "Pawan Aarahari", program: "B.Tech. in Computer Science Engineering", company: "SRDT" },
  { name: "Rohit Mishra", program: "B.Tech. in Computer Science Engineering", company: "SRDT" },
  { name: "Shashank Srivastava", program: "B.Tech. in Computer Science Engineering", company: "SRDT" },

   { name: "Nikhil Sahu", program: "B.Tech. in Computer Science Engineering", company: "Orbit" },
  { name: "Rajmani Pandey", program: "B.Tech. in Computer Science Engineering", company: "Kaushal Enterprises" },
  { name: "Satyam Singh", program: "B.Tech. in Computer Science Engineering", company: "Kaushal Enterprises" },
  { name: "Divyam Verma", program: "B.Tech. in Computer Science Engineering", company: "Techqrt Pvt limited" },
  { name: "Anand Krishna", program: "B.Tech. in Computer Science Engineering", company: "Learningshala" },
  { name: "Vansh Trivedi", program: "B.Tech. in Computer Science Engineering", company: "Learning Route" },
  { name: "Sachin Kumar Singh", program: "B.Tech. in Computer Science Engineering", company: "Byjus" },
  { name: "Akash Deep Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Qarmatek service private limited" },
  { name: "Lovkush Pandey", program: "B.Tech. in Computer Science Engineering", company: "Byjus" },
  { name: "Vaibhav Pratap Singh", program: "B.Tech. in Computer Science Engineering", company: "Hire Expert Pvt Ltd" },
  { name: "Aditya Mishra", program: "B.Tech. in Computer Science Engineering", company: "Byjus" },
  { name: "Nekesh", program: "B.Tech. in Computer Science Engineering", company: "Byjus" },
  { name: "Prem Prakash Verma", program: "B.Tech. in Computer Science Engineering", company: "Byjus" },
  { name: "Abhishek Giri", program: "B.Tech. in Computer Science Engineering", company: "Byjus" },

  { name: "Alok Singh", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },
  { name: "Khushi Budhraja", program: "B.Tech. in Computer Science Engineering", company: "Cedcoss Technologies Pvt Ltd" },

  { name: "Harsh Singh", program: "B.Tech. in Computer Science Engineering", company: "Tech Mahindra" },
  { name: "Vigya Singh", program: "B.Tech. in Computer Science Engineering", company: "Green Essence" },
  { name: "Sachin Kumar Singh", program: "B.Tech. in Computer Science Engineering", company: "Tech Mahindra" },
  { name: "Srijan Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Tech Mahindra" },
  { name: "Mohd. Farhan Siddiqui", program: "B.Tech. in Computer Science Engineering", company: "EMEIS Technologies" },

  { name: "Priyanshu Singh", program: "B.Tech. in Computer Science Engineering", company: "Unfold Story" },
  { name: "Vaibhav Pathak", program: "B.Tech. in Computer Science Engineering", company: "Byjus" },

  { name: "Srijan Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Intellipaat" },
  { name: "Aditi Sinha", program: "B.Tech. in Computer Science Engineering", company: "Intellipaat" },

  { name: "Tanya Tripthi", program: "B.Tech. in Computer Science Engineering", company: "Planet Spark" },
  { name: "Harsh Srivastava", program: "B.Tech. in Computer Science Engineering", company: "iFortis" },

  { name: "Aman Kumar Modanwal", program: "B.Tech. in Computer Science Engineering", company: "Webads" },
  { name: "Mrityunjai Shukla", program: "B.Tech. in Computer Science Engineering", company: "Agilysys" },

  { name: "Nekesh", program: "B.Tech. in Computer Science Engineering", company: "VDart" },
  { name: "Divya Gupta", program: "B.Tech. in Computer Science Engineering", company: "VDart" },
  { name: "Purva Srivastava", program: "B.Tech. in Computer Science Engineering", company: "Ozibook" },
  { name: "Ritik Trivedi", program: "B.Tech. in Computer Science Engineering", company: "VDart" },

  { name: "Riza Abbas", program: "B.Tech. in Computer Science Engineering", company: "AMA Creations" },
  { name: "Saurav Kumar Pandey", program: "B.Tech. in Computer Science Engineering", company: "Securium Solutions" },
  { name: "Anshika Pandey", program: "B.Tech. in Computer Science Engineering", company: "Innovative Techline pvt ltd" },

  { name: "Sneha Singh", program: "B.Tech. in Computer Science Engineering", company: "NS Matrix" },
  { name: "Rahul Gupta", program: "B.Tech. in Computer Science Engineering", company: "NS Matrix" },
  { name: "Mohd Abbas", program: "B.Tech. in Computer Science Engineering", company: "Soft Clap Pvt Ltd" },
  { name: "Kanisk", program: "B.Tech. in Computer Science Engineering", company: "NS Matrix" },
  { name: "Ahmad Khan", program: "B.Tech. in Computer Science Engineering", company: "Soft Clap Pvt Ltd" },
  { name: "Tashu Singh", program: "B.Tech. in Computer Science Engineering", company: "NS Matrix" },
  { name: "Ritik Trivedi", program: "B.Tech. in Computer Science Engineering", company: "NS Matrix" },
  { name: "Sakshi Agarwal", program: "B.Tech. in Computer Science Engineering", company: "NS Matrix" },
  { name: "Akahat Jaiswal", program: "B.Tech. in Computer Science Engineering", company: "NS Matrix" },

  { name: "Harsh Pathak", program: "B.Tech. in Computer Science Engineering", company: "Sumukh Enterprises" },
  { name: "Mritunjay Singh", program: "B.Tech. in Computer Science Engineering", company: "TCS" },
  { name: "Utkarsh Pandey", program: "B.Tech. in Computer Science Engineering", company: "7 Con technologies" },

  { name: "Ayushi Mishra", program: "B.Tech. in Computer Science Engineering", company: "Webangel" },
  { name: "Tashu Singh", program: "B.Tech. in Computer Science Engineering", company: "Webangel" },
  { name: "sakshi Agarwal", program: "B.Tech. in Computer Science Engineering", company: "Webangel" },

  { name: "Rahula Raj", program: "B.Tech. in Computer Science Engineering", company: "Fourbrick Technology" },
  { name: "Abhay Prajapati", program: "B.Tech. in Computer Science Engineering", company: "Shoora Vagmine's Pvt Ltd" },
  { name: "Shivendra Shukla", program: "B.Tech. in Computer Science Engineering", company: "Head feid" },
  { name: "Abhay Nigam", program: "B.Tech. in Computer Science Engineering", company: "Salesken" },
  { name: "Rahul Bali", program: "B.Tech. in Computer Science Engineering", company: "register karo" },

  { name: "Shreya Nigam", program: "B.Tech. in Computer Science Engineering", company: "SAP" },
  { name: "Akshay Kumar", program: "B.Tech. in Computer Science Engineering", company: "SAP" },
  { name: "Akshay Kumar", program: "B.Tech. in Computer Science Engineering", company: "Josh Technology" },

  { name: "Tejasva Maurya", program: "B.Tech. in Computer Science Engineering", company: "Cognizant" },

  { name: "Satyendra Kumar", program: "B.Tech. in Computer Science Engineering", company: "QSS Technosoft" },
  { name: "Aman Singh", program: "B.Tech. in Computer Science Engineering", company: "QSS Technosoft" },

  { name: "Alviya Zaheer", program: "B.Tech. in Computer Science Engineering", company: "Planet Spark" },
  { name: "Shubhangi Gupta", program: "B.Tech. in Computer Science Engineering", company: "Hike Education" }

];
