import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/departments/dept-mission-icon2.png";
import mission from "../../../../assets/images/academics/departments/dept-mission-icon1.png";
import { InstituteProfile} from "../../../../types/profile-data-type";
import { departmentHighlightscardType, FeeTableData } from "../../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../../utils/custom/CustomFacultyListCard";

import SKSingImg from "../../../../assets/images/academics/departments/mr-s.k-singh-11zon-2602240555005.jpg"

import DefaultImg from "../../../../assets/images/academics/departments/default-img.png";
import DayaShankarImg from "../../../../assets/images/academics/departments/11zon-cropped-42-11zon-23022405522962.jpeg";
import RamaNandImg from "../../../../assets/images/academics/departments/mr.-rama-nand-mishra-0703240256127.jpg";
import ArvindRawatImg from "../../../../assets/images/academics/departments/mr.-arvind-kumar-rawat-1--07032410404213.jpg";
import KamleshSinghImg from "../../../../assets/images/academics/departments/mr.-kamlesh-kumar-singh-07032402534666.jpg";
import MithleshKumarImg from "../../../../assets/images/academics/departments/11zon-cropped-41-11zon-23022405475146.jpeg";
import GauravMauryaImg from "../../../../assets/images/academics/departments/mr.-gaurav-kumar-maurya-0703240252522.jpg";
import ReshavRoushanImg from "../../../../assets/images/academics/departments/11zon-cropped-40-11zon-23022405415049.jpeg";
import AnkurRaiImg from "../../../../assets/images/academics/departments/mr.-ankur-rai-1--0703241014092.jpg";
import SurendraSinghImg from "../../../../assets/images/academics/departments/11zon-cropped-39-11zon-23022405371679.jpeg";
import JaiRajSinghImg from "../../../../assets/images/academics/departments/11zon-cropped-38-11zon-23022405301535.jpeg";



import depSlide1 from "../../../../assets/images/academics/departments/with-ibm-07052412210228.jpg";
import depSlide2 from "../../../../assets/images/academics/institutes/diverseprogram.jpg";
import depSlide3 from "../../../../assets/images/academics/departments/industrystalwart-06022401542865.jpg";
import depSlide4 from "../../../../assets/images/academics/departments/curriculum-07052412202574.jpg";
import depSlide5 from "../../../../assets/images/academics/departments/corporate-manag-0605240138369.jpg";
import depSlide6 from "../../../../assets/images/academics/departments/entrepreneurialecosystem-0602240302151.jpg";
import { Headers, Student } from "../../../../utils/custom/CustomPlacedStudentTable";

export const SRMUPolytechnicOverviewData: customeOverViewType = {
  heading: "SRMU Polytechnic",
  content:
    "SRMU Polytechnic was founded in the academic year 2015–16 with the goal of giving multiple options to students who want to pursue technical studies after Class 10. Three-year full-time diploma programs in civil engineering, electrical engineering, mechanical engineering, computer science engineering, and electronics and communication engineering are available at the University Polytechnic.",
  counterSibling:
    "The SRMU Polytechnic takes great pride in its highly qualified and accomplished faculty members, many of whom have worked in industry for many years. Our faculty members provide immersive, hands-on learning experiences that go beyond conventional classroom formats in addition to working on leading edge research initiatives. Students benefit from innovative curriculum and a team-based approach to project-based learning.Additionally, it offers students who passed Class 12 with Mathematics as a compulsory subject the option of Lateral Entry. Students can perform experiments in the state-of-the-art laboratories, which guarantee cutting-edge, practical engineering experience in well-equipped, modern facilities. In order to support aspirants in their goal-oriented academic pursuits, SRMU Polytechnic prepares them with high-level technical expertise and technological innovation. It achieves international standards of quality assurance in line with the demands of the public and private sectors, and offers students the academic environment of excellence, leadership, ethical guidelines, and lifelong learning necessary for a long and fruitful career.",
};

export const SRMUPolytechnicTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];



export const SRMUPolytechnicCounterData1 = {
  counterData: [
    {
      id: 1,
      icon: "",
      value: "2015",
      suffix: "",
      label: "Established"
    },
    {
      id: 2,
      icon: "",
      value: "23",
      suffix: "",
      label: "Faculty & Staff"
    },
    {
      id: 3,
      icon: "",
      value: "600",
      suffix: "",
      label: "Students"
    },

  ],

  // Optional classes (can be null or ignored if unused)
  classes: "",
  aboutusClass: ""
};

export const SRMUPolytechnicCounterData2 = {
  counterData: [
    {
      id: 1,
      icon: "",
      value: "150",
      suffix: "",
      label: "Guest lectures"
    },
    {
      id: 2,
      icon: "",
      value: "100",
      suffix: "",
      label: "Field Visits"
    },
    {
      id: 3,
      icon: "",
      value: "5",
      suffix: "",
      label: "Conference & Seminars"
    },

  ],

  // Optional classes (can be null or ignored if unused)
  classes: "",
  aboutusClass: ""
};


export const SRMUPolytechnicVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: mission,
    heading: "Mission",
    description: "Within the scope of academic excellence, innovation and leadership in physics, the Faculty of Physical Sciences considers its two fold mission which are as follows",
    points: [
      "To provide current and in demand technical education to youth.",
      "To generate knowledge by providing technical support through industry visits and expert lectures.",
      "To inculcate moral, ethical and professional values amongst the students.",
      "To respond effectively to the changing needs of the industry and community as a whole.",
      "To promote quality education and training in multiple technical fields."
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: vision,
    heading: "Vision",
    points: [
      `“To Create and Sustain an Environment of Technical Education in which Youth Acquire Technical Skills and Knowledge”`
    ],
  },
];



export const SRMUPolytechnicinstituteProfiles: InstituteProfile[] = [
  {
    id: 1,
    title: "Department Head",
    name: "Mr. S.K. Singh",
    position: "Deputy Director, Polytechnic, SRMU, Lucknow-Deva Road",
    image: SKSingImg,

    summary:
      "",

    detailsHeading: "",
    useBullets: false,

    details: [
      "",
    ],

    modalContent: ``
  },


]; 







export const SRMUPolytechnicData1: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],

rows: [
  { col1: "Diploma in Civil Engineering", col2: "3 Years", col3: "Click to View", col4: "Rs. 57,000/-" },
  { col1: "Diploma in Civil Engineering (Lateral Entry)", col2: "2 Years", col3: "Click to View", col4: "Rs. 57,000/-" },
  { col1: "Diploma in Mechanical Engineering (Production)", col2: "3 Years", col3: "Click to View", col4: "Rs. 57,000/-" },
  { col1: "Diploma in Mechanical Engineering (Automobile)", col2: "3 Years", col3: "Click to View", col4: "Rs. 57,000/-" },
  { col1: "Diploma in Mechanical Engineering (Production) (Lateral Entry)", col2: "2 Years", col3: "Click to View", col4: "Rs. 57,000/-" },
  { col1: "Diploma in Mechanical Engineering (Automobile) (Lateral Entry)", col2: "2 Years", col3: "Click to View", col4: "Rs. 57,000/-" },
  { col1: "Diploma in Computer Science Engineering", col2: "3 Years", col3: "Click to View", col4: "Rs. 57,000/-" },
  { col1: "Diploma in Electronics & Communication Engineering", col2: "3 Years", col3: "Click to View", col4: "Rs. 57,000/-" },
  { col1: "Diploma in Electrical Engineering", col2: "3 Years", col3: "Click to View", col4: "Rs. 57,000/-" },
  { col1: "Diploma in Computer Science Engineering (Lateral Entry)", col2: "2 Years", col3: "Click to View", col4: "Rs. 57,000/-" },
  { col1: "Diploma in Electronics & Communication Engineering (Lateral Entry)", col2: "2 Years", col3: "Click to View", col4: "Rs. 57,000/-" },
  { col1: "Diploma in Electrical Engineering (Lateral Entry)", col2: "2 Years", col3: "Click to View", col4: "Rs. 57,000/-" },
],

};



export const SRMUPolytechnicfacultyData: FacultyItem[] = [
  {
    id: 1,
    name: "Mr. Deepak Kumar",
    designation: "Lecturer",
    image: DefaultImg,
  },
  {
    id: 2,
    name: "Mr. Alok Nigam",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 3,
    name: "Mr. Raj Deepak Verma",
    designation: "Lecturer",
    image: DefaultImg,
  },
  {
    id: 4,
    name: "Mr. Daya Shankar Shukla",
    designation: "Lecturer",
    image: DayaShankarImg,
  },
  {
    id: 5,
    name: "Mr. Rama Nand Mishra",
    designation: "Lecturer",
    image: RamaNandImg,
  },
  {
    id: 6,
    name: "Mr. Arvind Kumar Rawat",
    designation: "Lecturer",
    image: ArvindRawatImg,
  },
  {
    id: 7,
    name: "Mr. Kamlesh Kumar Singh",
    designation: "Lecturer",
    image: KamleshSinghImg,
  },
  {
    id: 8,
    name: "Mr. Mithlesh Kumar",
    designation: "Lecturer",
    image: MithleshKumarImg,
  },
  {
    id: 9,
    name: "Ms. Smriti Mishra",
    designation: "Lecturer",
    image: DefaultImg,
  },
  {
    id: 10,
    name: "Ms. Arshita Srivastava",
    designation: "Lecturer",
    image: DefaultImg,
  },
  {
    id: 11,
    name: "Mr. Gaurav Pratap Maurya",
    designation: "Lecturer",
    image: GauravMauryaImg,
  },
  {
    id: 12,
    name: "Mr. Reshav Roushan",
    designation: "Lecturer",
    image: ReshavRoushanImg,
  },
  {
    id: 13,
    name: "Mr. Vivek Dayal",
    designation: "Lecturer",
    image: DefaultImg,
  },
  {
    id: 14,
    name: "Mr. Ankur Rai",
    designation: "Lecturer",
    image: AnkurRaiImg,
  },
  {
    id: 15,
    name: "Mr. Surendra Pratap Singh",
    designation: "Lecturer",
    image: SurendraSinghImg,
  },
  {
    id: 16,
    name: "Mr. Jai Raj Singh",
    designation: "Lecturer",
    image: JaiRajSinghImg,
  },
  {
    id: 17,
    name: "Ms. Divya Awasthi",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
];

export const SRMUPolytechnicdepartmentHighlights: departmentHighlightscardType[] = [
  {
    image: depSlide1,
    title: "Exposure to futuristic technologies",
    description: "Students are provided with opportunities to develop an understanding of technologies like Artificial Intelligence, Cybersecurity, EV Technology, Mechatronics & many more.",
  },
  {
    image: depSlide2,
    title: "Special programs for advanced learners and slow learners",
    description: "For turning around slow learners to achieve their academic goals, the comprehensive integrated intervention measures are adopted.",
  },
  {
    image: depSlide3,
    title: "Highly qualified & experienced faculty",
    description: "The Polytechnic takes great pride in its highly qualified and accomplished faculty members, many of whom have worked in industry for many years.",
  },
  {
    image: depSlide4,
    title: "Practical training, apprenticeship & workshops",
    description: "Students gain the ability to apply theory to real-world situations and supplement their academic work with practical knowledge gained via workshops as well as regular training.",
  },
  {
    image: depSlide5,
    title: "Best in class labs for immersive learning experience",
    description: "The department ensures that our students receive cutting edge, realistic engineering training in state-of-the-art facilities.",
  },
  {
    image: depSlide6,
    title: "100%* Placement record with multiple job offers",
    description: "A collaborative approach to project-based learning and creative curriculum help students acquire industry-required skills that make them employable.",
  },
];


export const tableHeaders: Headers = {
    name: "NAME OF STUDENT",
    program: "PROGRAM",
    company: "COMPANY",
  };

export const placedStudents: Student[] = [
  { name: "Syed Kaif Imam", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Faraj Haidar", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Aditya Maurya", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Aditya Verma", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Sachin Kumar", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Amit Kumar", program: "Diploma in Mechanical Engineering (Production)", company: "subros" },
  { name: "Archita Verma", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Hanuman Kumar", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Dhananjay Gond", program: "Diploma in Mechanical Engineering (Production)", company: "subros" },
  { name: "Deepak Kumar Gond", program: "Diploma in Mechanical Engineering (Production)", company: "subros" },
  { name: "Prince Kumar", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Sujeet Pandey", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Harsh Singh", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Dhruv Singh", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Shams Tabarez", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Amit Kumar Singh", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Jatin Verma", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Hemant Pandey", program: "Diploma in Electronics & Communication Engineering", company: "subros" },
  { name: "Samiksha Mishra", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Aryan Singh", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Govind Chauhan", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Saubhagya Prakash", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Himanshu Singh", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Manish Yadav", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Ankur Kumar Singh", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Rahul Singh", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Riya Singh", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Deepak Singh", program: "Diploma in Mechanical Engineering (Production)", company: "subros" },
  { name: "Rizwan Ali", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Hemant Kumar Singh", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Satyam Saroj", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Sumit Raj Singh", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Aditya Kumar Singh", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Krishna Kumar Pandey", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Ujjawal Shukla", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Shivam Pandey", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Anurag Kumar Maurya", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Rudranarayan Verma", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Harinandan .", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Milind Suman", program: "Diploma in Electronics & Communication Engineering", company: "subros" },
  { name: "Nitish Patel", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Raj Kumar", program: "Diploma in Mechanical Engineering (Production)", company: "subros" },
  { name: "Aaradhy .", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Raj Kumar Mishra", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Shivam Singh", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Abhishek Mishra", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Ashutosh Kumar Rai", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Hritik Raj Khare", program: "Diploma in Mechanical Engineering (Production)", company: "subros" },
  { name: "Ayushi Singh", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Anuj Sharma", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Md Imran Khan", program: "Diploma in Mechanical Engineering (Production)", company: "subros" },
  { name: "Virendra Kumar Yadav", program: "Diploma in Mechanical Engineering (Production)", company: "subros" },
  { name: "Wakar Ashraf", program: "Diploma in Mechanical Engineering (Production)", company: "subros" },
  { name: "Gurudayal Singh", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Nikhil Singh", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Anuj Yadav", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Shiv Kumar", program: "Diploma in Mechanical Engineering (Production)", company: "subros" },
  { name: "Aditya Srivastav", program: "Diploma in Civil Engineering", company: "KP Reliable" },
  { name: "Rahul Verma", program: "Diploma in Civil Engineering", company: "KP Reliable" },
  { name: "Saurabh Srivastava", program: "Diploma in Civil Engineering", company: "KP Reliable" },
  { name: "Amar Singh", program: "Diploma in Civil Engineering", company: "KP Reliable" },
  { name: "Aditya Kumar", program: "Diploma in Civil Engineering", company: "KP Reliable" },
  { name: "Eklavya Singh", program: "Diploma in Civil Engineering", company: "KP Reliable" },
  { name: "Vaibhav Mishra", program: "Diploma in Civil Engineering", company: "KP Reliable" },
  { name: "Faraj Haidar", program: "Diploma in Computer Science Engineering", company: "KP Reliable" },
  { name: "Rahul Gupta", program: "Diploma in Computer Science Engineering", company: "KP Reliable" },
  { name: "Awnit Singh", program: "Diploma in Computer Science Engineering", company: "KP Reliable" },
  { name: "Dhruv Singh", program: "Diploma in Computer Science Engineering", company: "KP Reliable" },
  { name: "Md Wasim", program: "Diploma in Computer Science Engineering", company: "KP Reliable" },
  { name: "Anurag Singh", program: "Diploma in Computer Science Engineering", company: "KP Reliable" },
  { name: "Archita Verma", program: "Diploma in Computer Science Engineering", company: "KP Reliable" },
  { name: "Karan Sharma", program: "Diploma in Mechanical Engineering (Automobile)", company: "KP Reliable" },
  { name: "Hritik Raj Khare", program: "Diploma in Mechanical Engineering (Automobile)", company: "KP Reliable" },
  { name: "Aftab Ansari", program: "Diploma in Mechanical Engineering (Automobile)", company: "KP Reliable" },
  { name: "Krishna Mohan Chauhan", program: "Diploma in Mechanical Engineering (Automobile)", company: "KP Reliable" },
  { name: "Yuvraj Singh", program: "Diploma in Electrical Engineering", company: "Krishna Maruti Ltd." },
  { name: "Shiv kumar", program: "Diploma in Mechanical Engineering (Automobile)", company: "KP Reliable" },
  { name: "Amar Singh", program: "Diploma in Civil Engineering", company: "Krishna Maruti Ltd." },
  { name: "Aditya Kumar", program: "Diploma in Civil Engineering", company: "Krishna Maruti Ltd." },
  { name: "Abhinav Tiwari", program: "Diploma in Civil Engineering", company: "Krishna Maruti Ltd." },
  { name: "Md Imran Khan", program: "Diploma in Mechanical Engineering (Automobile)", company: "KP Reliable" },
  { name: "Raj Kumar", program: "Diploma in Mechanical Engineering (Automobile)", company: "KP Reliable" },
  { name: "Abdul Ajij Ansari", program: "Diploma in Mechanical Engineering (Automobile)", company: "KP Reliable" },
  { name: "Krishna Mohan Chauhan", program: "Diploma in Mechanical Engineering (Automobile)", company: "Krishna Maruti Ltd." },
  { name: "Himanshu Singh", program: "Diploma in Electrical Engineering", company: "KP Reliable" },
  { name: "Aman Kumar", program: "Diploma in Electrical Engineering", company: "Krishna Maruti Ltd." },
  { name: "Rohit Kumar", program: "Diploma in Electrical Engineering", company: "Krishna Maruti Ltd." },
  { name: "Taranpreet Singh", program: "Diploma in Electrical Engineering", company: "Krishna Maruti Ltd." },
  { name: "Sandeep Singh", program: "Diploma in Electrical Engineering", company: "Krishna Maruti Ltd." },
  { name: "Himanshu Singh", program: "Diploma in Electrical Engineering", company: "Krishna Maruti Ltd." },
  { name: "Krishna Kumar Pandey", program: "Diploma in Electrical Engineering", company: "Krishna Maruti Ltd." },
  { name: "Awnit Singh", program: "Diploma in Computer Science Engineering", company: "Krishna Maruti Ltd." },
  { name: "Hanuman kumar", program: "Diploma in Electrical Engineering", company: "Krishna Maruti Ltd." },
  { name: "Jatin verma", program: "Diploma in Electrical Engineering", company: "KP Reliable" },
  { name: "Eklavya Singh", program: "Diploma in Civil Engineering", company: "Krishna Maruti Ltd." },
  { name: "Mandeep Prajapati", program: "Diploma in Electrical Engineering", company: "KP Reliable" },
  { name: "Faraj Haidar", program: "Diploma in Computer Science Engineering", company: "Krishna Maruti Ltd." },
  { name: "Hanuman kumar", program: "Diploma in Electrical Engineering", company: "KP Reliable" },
  { name: "Yuvraj Singh", program: "Diploma in Electrical Engineering", company: "KP Reliable" },
  { name: "Md. Imran Khan", program: "Diploma in Mechanical Engineering (Automobile)", company: "Krishna Maruti Ltd." },
  { name: "Rudranarayan verma", program: "Diploma in Electrical Engineering", company: "KP Reliable" },
  { name: "Anurag Singh", program: "Diploma in Computer Science Engineering", company: "Krishna Maruti Ltd." },
  { name: "Taranpreet Singh", program: "Diploma in Electrical Engineering", company: "KP Reliable" },
  { name: "Hemant Pandey", program: "Diploma in Electrical Engineering", company: "KP Reliable" },
  { name: "Rahul Gupta", program: "Diploma in Computer Science Engineering", company: "Krishna Maruti Ltd." },
  { name: "Abhishek Mishra", program: "Diploma in Electrical Engineering", company: "Krishna Maruti Ltd." },
  { name: "Rohit kumar", program: "Diploma in Electrical Engineering", company: "Kirloskar" },
  { name: "Utkarsh Singh", program: "Diploma in Civil Engineering", company: "Krishna Maruti Ltd." },
  { name: "Aman Kumar", program: "Diploma in Electrical Engineering", company: "KP Reliable" },
  { name: "Raj Kumar", program: "Diploma in Mechanical Engineering (Automobile)", company: "Krishna Maruti Ltd." },
  { name: "Rudranarayan Verma", program: "Diploma in Electrical Engineering", company: "Krishna Maruti Ltd." },
  { name: "Vishwajeet Kumar", program: "Diploma in Electrical Engineering", company: "KP Reliable" },
  { name: "Piyush Singh", program: "Diploma in Computer Science Engineering", company: "Krishna Maruti Ltd." },
  { name: "Dhruv Singh", program: "Diploma in Computer Science Engineering", company: "Krishna Maruti Ltd." },
  { name: "Karan Sharma", program: "Diploma in Mechanical Engineering (Automobile)", company: "Krishna Maruti Ltd." },
  { name: "Junaid Akhtar", program: "Diploma in Electrical Engineering", company: "KP Reliable" },
  { name: "Krishna Kumar Pandey", program: "Diploma in Electrical Engineering", company: "KP Reliable" },
  { name: "Abdul Ajij Ansari", program: "Diploma in Mechanical Engineering (Automobile)", company: "Krishna Maruti Ltd." },
  { name: "Aftab Ansari", program: "Diploma in Mechanical Engineering (Automobile)", company: "Krishna Maruti Ltd." },
  { name: "Abhishek Singh", program: "Diploma in Civil Engineering", company: "subros" },
  { name: "Adarsh Patel", program: "Diploma in Civil Engineering", company: "subros" },
  { name: "Aditya Dwivedi", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Aditya Maurya", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Aditya Singh", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Afzal Hasmi", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Amit Kumar", program: "Diploma in Mechanical Engineering (Production)", company: "subros" },
  { name: "Ankur Verma", program: "Diploma in Civil Engineering", company: "subros" },
  { name: "Anshu Kumar", program: "Diploma in Civil Engineering", company: "subros" },
  { name: "Anushi", program: "Diploma in Civil Engineering", company: "subros" },
  { name: "Arjun Rao", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Arpit Mishra", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Arun singh", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Aryan Singh", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Aryan Srivastava", program: "Diploma in Mechanical Engineering (Production)", company: "subros" },
  { name: "Ashutosh Kumar Yadav", program: "Diploma in Mechanical Engineering (Production)", company: "subros" },
  { name: "Ayush Singh", program: "Diploma in Civil Engineering", company: "subros" },
  { name: "Ayush Thakurai", program: "Diploma in Civil Engineering", company: "subros" },
  { name: "Deepak Kumar Gond", program: "Diploma in Mechanical Engineering (Production)", company: "subros" },
  { name: "Dhananjay Gond", program: "Diploma in Mechanical Engineering (Production)", company: "subros" },
  { name: "Harsh Pathak", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Harshit Singh", program: "Diploma in Mechanical Engineering (Production)", company: "subros" },
  { name: "Harshit Singh", program: "Diploma in Mechanical Engineering (Production)", company: "subros" },
  { name: "Hemant Kumar Singh", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Kunwar Nagender Pratap Singh", program: "Diploma in Civil Engineering", company: "subros" },
  { name: "Maneesh Mishra", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Anjali Bharti", program: "Diploma in Computer Science Engineering", company: "Yokohama" },
  { name: "Neha Yadav", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Nitin Singh", program: "Diploma in Civil Engineering", company: "subros" },
  { name: "Nitish Patel", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Pawan Kumar Upadhyay", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Piyush Pandey", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Piyush Yadav", program: "Diploma in Civil Engineering", company: "subros" },
  { name: "Prakhar Verma", program: "Diploma in Civil Engineering", company: "subros" },
  { name: "Prince Gupta", program: "Diploma in Civil Engineering", company: "subros" },
  { name: "Prince Kumar", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Ranjeet Kumar", program: "Diploma in Mechanical Engineering (Automobile)", company: "subros" },
  { name: "Sachin Kumar Pandey", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Sachin Verma", program: "Diploma in Civil Engineering", company: "subros" },
  { name: "Satyam Saroj", program: "Diploma in Electrical Engineering", company: "subros" },
  { name: "Saumya", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Saurabh Rai", program: "Diploma in Civil Engineering", company: "subros" },
  { name: "Abhishek Yadav", program: "Diploma in Civil Engineering", company: "KP Reliable" },
  { name: "Saurabh Yadav", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Sudhir Maurya", program: "Diploma in Civil Engineering", company: "subros" },
  { name: "Adarsh Patel", program: "Diploma in Civil Engineering", company: "KP Reliable" },
  { name: "Anshu Kumar", program: "Diploma in Civil Engineering", company: "KP Reliable" },
  { name: "Sumit Raj Singh", program: "Diploma in Computer Science Engineering", company: "subros" },
  { name: "Prakhar Verma", program: "Diploma in Civil Engineering", company: "KP Reliable" },
  { name: "Vanshika Yadav", program: "Diploma in Civil Engineering", company: "subros" },
  { name: "Nitin Singh", program: "Diploma in Civil Engineering", company: "KP Reliable" },
  { name: "Prince Gupta", program: "Diploma in Civil Engineering", company: "KP Reliable" },
  { name: "Sachin Verma", program: "Diploma in Civil Engineering", company: "KP Reliable" },
  { name: "Sandeep Yadav", program: "Diploma in Civil Engineering", company: "KP Reliable" },
  { name: "Amit Kumar", program: "Diploma in Mechanical Engineering (Production)", company: "KP Reliable" },
  { name: "Aryan Srivastava", program: "Diploma in Mechanical Engineering (Automobile)", company: "KP Reliable" },
  { name: "Ashutosh Kumar Yadav", program: "Diploma in Mechanical Engineering (Production)", company: "KP Reliable" },
  { name: "Deepak Kumar Gond", program: "Diploma in Mechanical Engineering (Production)", company: "KP Reliable" },
  { name: "Dhananjay Gond", program: "Diploma in Mechanical Engineering (Production)", company: "KP Reliable" },
  { name: "Harshit Singh", program: "Diploma in Mechanical Engineering (Production)", company: "KP Reliable" },
  { name: "Ranjeet Kumar", program: "Diploma in Mechanical Engineering (Production)", company: "KP Reliable" },
  { name: "Shashwat Pratap Singh", program: "Diploma in Mechanical Engineering (Production)", company: "KP Reliable" },
  { name: "Punit Rai", program: "Diploma in Electrical Engineering", company: "Dhoot Transmission" },
  { name: "Shubham Rai Srivastava", program: "Diploma in Electrical Engineering", company: "Dhoot Transmission" },
  { name: "Anuj Sharma", program: "Diploma in Electrical Engineering", company: "Dhoot Transmission" },
  { name: "Sachin Kumar", program: "Diploma in Electrical Engineering", company: "Dhoot Transmission" },
  { name: "Kaisar Alam", program: "Diploma in Electrical Engineering", company: "Dhoot Transmission" },
  { name: "Hemant Kr. Singh", program: "Diploma in Electrical Engineering", company: "Dhoot Transmission" },
  { name: "Ranjeet Kumar", program: "Diploma in Mechanical Engineering (Automobile)", company: "SPM Autocomp" },
  { name: "Deepak Kumar Gond", program: "Diploma in Mechanical Engineering (Automobile)", company: "SPM Autocomp" },
  { name: "Chandra Mohan Rao", program: "Diploma in Mechanical Engineering (Automobile)", company: "SPM Autocomp" },
  { name: "Chandra Mohan Rao", program: "Diploma in Mechanical Engineering (Automobile)", company: "SPM Autocomp" },
  { name: "Ashutosh Kumar Yadav", program: "Diploma in Mechanical Engineering (Automobile)", company: "SPM Autocomp" },
  { name: "Dhananjay Gond", program: "Diploma in Mechanical Engineering (Automobile)", company: "SPM Autocomp" },
  { name: "Amit kumar", program: "Diploma in Mechanical Engineering (Automobile)", company: "SPM Autocomp" },
  { name: "Shashwat Pratap Singh", program: "Diploma in Mechanical Engineering (Automobile)", company: "SPM Autocomp" },
  { name: "Eklavya", program: "Diploma in Civil Engineering", company: "RDC Concrete" },
  { name: "Vishwajeet Kumar", program: "Diploma in Electrical Engineering", company: "JBM Auto" },
  { name: "Yuvraj Singh", program: "Diploma in Electrical Engineering", company: "JBM Auto" },
  { name: "Taran Preet Singh", program: "Diploma in Electrical Engineering", company: "JBM Auto" },
  { name: "Avinash Kumar Dubey", program: "Diploma in Mechanical Engineering (Production)", company: "Startek, Lucknow" },
];


import img1 from "../../../../assets/images/academics/departments/visit4-09052401060928.jpg";
import img2 from "../../../../assets/images/academics/departments/visit2-09052401062027.jpg";
import img3 from "../../../../assets/images/academics/departments/visit-1002240138332.jpg";
import img4 from "../../../../assets/images/academics/departments/guest6-09052401064571.jpg";
import img5 from "../../../../assets/images/academics/departments/guest7-09052401065435.jpg";
import img6 from "../../../../assets/images/academics/departments/workshop4-0905240105378.jpg";
import img7 from "../../../../assets/images/academics/departments/webinar5-09052401052852.jpg";
import img8 from "../../../../assets/images/academics/departments/workship2-09052401051860.jpg";
import img9 from "../../../../assets/images/academics/departments/internation1-09052401044878.jpg";
import img10 from "../../../../assets/images/academics/departments/national2-09052401045858.jpg";
import { EventItem } from "../../../../utils/custom/CustomEventListCard";


export const SRMUPolytechnicDepartmentEventsData: EventItem[] = [
  {
    id: 1,
    title: "Industrial Visit",
    venue: "Gobind Industries Pvt. Ltd.",
    date: "29th September, 2023",
    image: img1,
    cardBgColor: "#ffffff",
  },
  {
    id: 2,
    title: "Industrial Visit",
    topic: "Various Experiments related to Civil Engineering",
    venue: "Scorpian Club",
    date: "07th November, 2023",
    image: img2,
    cardBgColor: "#ffffff",
  },
  {
    id: 3,
    title: "Industrial Visit",
    topic: "Renewable Energy Resources and their Applications",
    venue: "UP NEDA, Dewa Road",
    date: "09th November, 2023",
    image: img3,
    cardBgColor: "#ffffff",
  },
  {
    id: 4,
    title: "Guest Lecture",
    speaker: "Er. Abhinav Srivastava",
    topic: "Future Scope and to be Entrepreneur in the field of Solar Energy & LED Lights",
    date: "21st September, 2023",
    image: img4,
    cardBgColor: "#ffffff",
  },
  {
    id: 5,
    title: "Guest Lecture",
    speaker: "Mr. K P Singh",
    topic: "Modern CAD/CAM & Survey Expert",
    date: "20th September, 2022",
    image: img5,
    cardBgColor: "#ffffff",
  },
  {
    id: 6,
    title: "Workshop",
    topic: "New Plasma Technology for Managing Municipal Solid Waste",
    date: "11th July, 2023",
    image: img6,
    cardBgColor: "#ffffff",
  },
  {
    id: 7,
    title: "Workshop",
    topic: "Python - Data Science",
    date: "26th October, 2023",
    image: img7,
    cardBgColor: "#ffffff",
  },
  {
    id: 8,
    title: "Workshop",
    topic: "3D Modelling for Civil Drawing",
    date: "26th October, 2023",
    image: img8,
    cardBgColor: "#ffffff",
  },
  {
    id: 9,
    title: "Seminar",
    speaker: "Mr. A K Singh",
    topic: "Network Security",
    date: "09th October, 2022",
    image: img9,
    cardBgColor: "#ffffff",
  },
  {
    id: 10,
    title: "Seminar",
    topic: "Computer Hardware & Maintenance",
    date: "02nd May, 2023",
    image: img10,
    cardBgColor: "#ffffff",
  },
];