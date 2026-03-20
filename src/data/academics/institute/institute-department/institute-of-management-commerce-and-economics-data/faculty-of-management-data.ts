import { customeOverViewType } from "../../../../../types/home-data-type";
import { counterDataType } from "../../../../about/leadership-and-governance/leadership-and-governance-data";
import missionImg from "../../../../../assets/images/academics/departments/dept-mission-icon1.png";
import vissionImg from "../../../../../assets/images/academics/departments/dept-mission-icon2.png";
import { InstituteProfile } from "../../../../../types/profile-data-type";
import facultyImg1 from "../../../../../assets/images/academics/institutes/faculty/wewgeew-removebg-preview-8--28052504250579.png";
import facultyImg2 from "../../../../../assets/images/academics/institutes/faculty/madhu.png";
import facultyImg3 from "../../../../../assets/images/academics/institutes/faculty/amritpal.png";
import facultyImg4 from "../../../../../assets/images/academics/institutes/faculty/sameena.png";
import facultyImg5 from "../../../../../assets/images/academics/institutes/faculty/mayank.png";
import facultyImg6 from "../../../../../assets/images/academics/institutes/faculty/amit-verma.png";
import facultyImg7 from "../../../../../assets/images/academics/institutes/faculty/alina.png";
import facultyImg8 from "../../../../../assets/images/academics/institutes/faculty/vishal.png";
import facultyImg9 from "../../../../../assets/images/academics/institutes/faculty/rahul.png";
import facultyImg10 from "../../../../../assets/images/academics/institutes/faculty/soniya.png";
import facultyImg11 from "../../../../../assets/images/academics/institutes/faculty/sharmishtha.png";
import facultyImg12 from "../../../../../assets/images/academics/institutes/faculty/mr.shivam-singh.jpg";
import facultyImg13 from "../../../../../assets/images/academics/institutes/faculty/aswani.jpg";
import facultyImg14 from "../../../../../assets/images/academics/institutes/faculty/uma-rajey.jpg";
import facultyImg15 from "../../../../../assets/images/academics/institutes/faculty/ms.-aditi-mishra.jpg";
import facultyImg16 from "../../../../../assets/images/academics/institutes/faculty/mr.-prashant-awasthi.jpg";
import facultyImg17 from "../../../../../assets/images/academics/institutes/faculty/dr.-pankaj-dhingra.jpg";
import facultyImg18 from "../../../../../assets/images/academics/institutes/faculty/dr.-amir-aijaz-syed.jpg";
import facultyImg19 from "../../../../../assets/images/academics/institutes/faculty/dr.-praveen-srivastava.jpg";
import facultyImg20 from "../../../../../assets/images/academics/institutes/faculty/dr.-kanupriya.jpg";
import facultyImg21 from "../../../../../assets/images/academics/institutes/faculty/default-img.png";
import facultyImg22 from "../../../../../assets/images/academics/institutes/faculty/ms.arti-das.jpg";
import facultyImg23 from "../../../../../assets/images/academics/institutes/faculty/neha-kapoor.jpg";
import facultyImg24 from "../../../../../assets/images/academics/institutes/faculty/ms.-ekta-yadav.jpg";
import facultyImg25 from "../../../../../assets/images/academics/institutes/faculty/ms.-nida.jpg";
import facultyImg26 from "../../../../../assets/images/academics/institutes/faculty/dr.-vipin-bihari.jpg";
import facultyImg27 from "../../../../../assets/images/academics/institutes/faculty/default-img.png";
import madhuDixitImg from "../../../../../assets/images/academics/institutes/faculty/madhu.png";
import { Student } from "../../../../../utils/custom/CustomPlacedStudentTable";
import { FacultyItem } from "../../../../../utils/custom/CustomFacultyListCard";
import { departmentHighlightscardType } from "../../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import depSlide1 from "../../../../../assets/images/academics/institutes/key-highlight/learning-07052412154679.jpg";
import depSlide2 from "../../../../../assets/images/academics/institutes/key-highlight/virtual-07022411154738.jpg";
import depSlide3 from "../../../../../assets/images/academics/institutes/key-highlight/with-ibm-07052412162437.jpg";
import depSlide4 from "../../../../../assets/images/academics/institutes/key-highlight/industry-certification-07022411152926.jpg";
import depSlide5 from "../../../../../assets/images/academics/institutes/key-highlight/industrystalwart-07022411132386.jpg";
import depSlide6 from "../../../../../assets/images/academics/institutes/key-highlight/bsc-it-07022411165864.jpg";
import depSlide7 from "../../../../../assets/images/academics/institutes/key-highlight/entrepreneurialecosystem-0702241115095.jpg";


export const managementOverviewData: customeOverViewType = {
    heading: "Faculty Of Management",
    content:
        "The Faculty of Management (FoM) started in the year 2012 as a department of Institute of Management, Commerce and Economics(IMCE) of Shri Ramswaroop Memorial University. It offers advance and practical knowledge through its under graduate, postgraduate and doctorate level programmes. The scientific pedagogy and industry vetted curriculum prepare the students for leadership roles in all functional areas of management. Our faculty is made up of experienced business minds and distinguished scholars who are enthusiastic about sharing their knowledge with the upcoming generation of business leaders. Through innovative research and academic publications, we hope to further knowledge and benefit the business community. In management education, case studies are frequently used to foster critical thinking, problem-solving, and decision-making abilities. Students are encouraged to hear from guest speakers with real-world experience and industry views. These speakers are members of the business community. In order to make sure that its graduates are equipped for the workforce and have real-world experience to supplement their academic knowledge, the Faculty of Management gives priority to internships and placements. Our objective for offering these opportunities is to equip students with the expertise, skills, and confidence necessary to succeed in their chosen fields and significantly impact the business community.",
};
export const counterDataForFacultyManagement: counterDataType[] = [
    { id: 1, value: "2012", suffix: "", label: "Established" },
    { id: 2, value: "24", suffix: "", label: "Faculty & Staff" },
    { id: 3, value: "1000", suffix: "", label: "Students" },
];

export const managementDepartmentVMData = [
    {
        id: 1,
        bgColor: "#E5F3FC",
        img: vissionImg,
        heading: "Mission",
        points: [
            "Imparting high quality professional education, training and research in the field of management and business studies.",
            " Disseminating knowledge and information by organizing seminars/workshops/ value added courses and develop professionalism.",
            "Interacting with the industry, educational & research organizations and alumni for curriculum development, training and research to meet the demand of quality human resource.",
            " Using scientific, technical and modern pedagogy for continuously improving the teaching learning process."
        ],
    },
    {
        id: 2,
        bgColor: "#FFF2D2",
        img: missionImg,
        heading: "Vision",
        points: [
            "To be a valued and preferred choice for pursuing Business & Management programmes and develop competent management professionals.",
        ],
    },
];

export const managementDepartmentHeadData: InstituteProfile[] = [
    {
        id: 2,
        title: "Department Head",
        name: "Prof. (Dr.) Madhu Dixit",
        position: "HoD Management, SRMU, Lucknow-Deva Road",
        image: madhuDixitImg,

        summary: "",

        detailsHeading: "",
        useBullets: false,

        details: [
            "**Qualification:** M.B.A., UGC-NET, Ph.D.",
            "**Experience:** 20+ years",
            "**Specialization / Area of Research:** Finance, Marketing and Research Methodology",
            "**Email ID:** hod.management@srm ac.in",
            "**Contact No.:** +91-9839420024",
        ],

        modalContent: `
**Prof. (Dr.) Madhu Dixit** has over 20 years of rich academic experience and has established herself as a dedicated educator, researcher, and academic leader. Qualified with UGC-NET and a Ph.D., she actively contributes to teaching, research, and university-level administration.

Her core areas of specialization include **Finance, Marketing, and Research Methodology**, where she has made significant contributions through both academic and practical engagement. She has authored more than **20 research papers**, contributed to **4 book chapters**, and successfully led **one funded research project**.

Under her guidance, **five Ph.D. scholars** have been awarded their doctoral degrees, reflecting her strong mentorship and research capabilities. In recognition of her academic excellence and contributions, she has also received multiple appreciations along with **one prestigious international award**.

Her blend of scholarly excellence, administrative leadership, and commitment to quality education continues to inspire students, researchers, and colleagues alike.
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
export const managementFeeData: FeeTableData = {
    columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],
    rows: [
        {
            course: "B.B.A. (Business Analytics) with L&T",
            duration: "3 Years",
            eligibility: "Click",
            fee: "Rs. 1,00,000/-",
            eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.B.A. (Business Analytics) with L&T</h2>
       <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board in any stream with minimum aggregate marks of 45% or CGPA of 5.0 for Gen/OBC and 40% marks or CGPA of 4.5 for SC/ST Category.</p>
      `,
        },
        {
            course: "M.B.A. (Business Analytics) with L&T",
            duration: "2 Years",
            eligibility: "Click",
            fee: "Rs. 1,60,000/-",
            eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.B.A. (Business Analytics) with L&T</h2>
       <p>Candidate must have passed Graduation or equivalent system in any discipline from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or CGPA of 5.5 for Gen/OBC category and 45% marks or CGPA of 5.0 for SC/ST Category.</p>
      `,
        },
    ],
};

export const managementFeeData1: FeeTableData = {
    columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],
    rows: [
        {
            course: "M.B.A. (Master of Business Administration)",
            duration: "2 Years",
            eligibility: "Click",
            fee: "Rs. 1,40,000/-",
            eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.B.A. (Master of Business Administration)</h2>
       <p>Candidate must have passed Graduation or equivalent system in any discipline from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or CGPA of 5.5 for Gen/OBC category and 45% marks or CGPA of 5.0 for SC/ST Category.</p>
      `,
        },
        {
            course: "M.B.A. (Business Analytics) with L&T",
            duration: "2 Years",
            eligibility: "Click",
            fee: "Rs. 1,60,000/-",
            eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.B.A. (Business Analytics) with L&T</h2>
       <p>Candidate must have passed Graduation or equivalent system in any discipline from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or CGPA of 5.5 for Gen/OBC category and 45% marks or CGPA of 5.0 for SC/ST Category.</p>
      `,
        },
        {
            course: "M.B.A. in Healthcare & Hospital Management",
            duration: "2 Years",
            eligibility: "Click",
            fee: "Rs. 1,50,000/-",
            eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.B.A. in Healthcare & Hospital Management</h2>
       <p>Candidate must have passed Graduation or equivalent system in any discipline from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or CGPA of 5.5 for Gen/OBC category and 45% marks or CGPA of 5.0 for SC/ST Category.</p>
      `,
        },
        {
            course: "M.B.A. in Leadership & Governance",
            duration: "2 Years",
            eligibility: "Click",
            fee: "Rs. 1,40,000/-",
            eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.B.A. in Leadership & Governance</h2>
       <p>Candidate must have passed Graduation or equivalent system in any discipline from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or CGPA of 5.5 for Gen/OBC category and 45% marks or CGPA of 5.0 for SC/ST Category.</p>
      `,
        },
    ],
};
export const managementFeeData2: FeeTableData = {
    columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],
    rows: [
        {
            course: "B.B.A. (Bachelor of Business Administration)",
            duration: "3 Years",
            eligibility: "Click",
            fee: "Rs. 87,000/-",
            eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.B.A. (Bachelor of Business Administration)</h2>
       <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board in any stream with minimum aggregate marks of 45% or CGPA of 5.0 for Gen/OBC and 40% marks or CGPA of 4.5 for SC/ST Category.</p>
      `,
        },
        {
            course: "B.B.A. (Business Analytics) with L&T",
            duration: "3 Years",
            eligibility: "Click",
            fee: "Rs. 1,00,000/-",
            eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.B.A. (Business Analytics) with L&T</h2>
       <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board in any stream with minimum aggregate marks of 45% or CGPA of 5.0 for Gen/OBC and 40% marks or CGPA of 4.5 for SC/ST Category.</p>
      `,
        },
    ],
};

export const managementfacultyData: FacultyItem[] = [
    { id: 1, name: "Dr. Syed Asif Mehdi", designation: "Assistant Professor", image: facultyImg1 },
    { id: 2, name: "Prof. (Dr.) Madhu Dixit", designation: "Professor", image: facultyImg2 },
    { id: 3, name: "Dr. Amritpal Singh Sidhu", designation: "Assistant Professor", image: facultyImg3 },
    { id: 4, name: "Dr. Sameena Ghazal", designation: "Assistant Professor", image: facultyImg4 },
    { id: 5, name: "Mr. Mayank Srivastava", designation: "Assistant Professor", image: facultyImg5 },
    { id: 6, name: "Mr. Amit Verma", designation: "Assistant Professor", image: facultyImg6 },
    { id: 7, name: "Ms. Alina Khan", designation: "Assistant Professor", image: facultyImg7 },
    { id: 8, name: "Mr. Vishal Jaiswal", designation: "Assistant Professor", image: facultyImg8 },
    { id: 9, name: "Mr. Rahul Sharma", designation: "Assistant Professor", image: facultyImg9 },
    { id: 10, name: "Ms. Soniya Gupta", designation: "Assistant Professor", image: facultyImg10 },
    { id: 11, name: "Ms. Sharmishtha Gupta", designation: "Assistant Professor", image: facultyImg11 },
    { id: 12, name: "Mr. Shivam Singh", designation: "Assistant Professor", image: facultyImg12 },
    { id: 13, name: "Prof. (Dr.) Aswani Kumar", designation: "Professor", image: facultyImg13 },
    { id: 14, name: "Dr. Uma Rajey Shukla Ojha", designation: "Assistant Professor", image: facultyImg14 },
    { id: 15, name: "Ms. Aditi Mishra", designation: "Assistant Professor", image: facultyImg15 },
    { id: 16, name: "Mr. Prashant Awasthi", designation: "Assistant Professor", image: facultyImg16 },
    { id: 17, name: "Dr. Pankaj Dhingra", designation: "Associate Professor", image: facultyImg17 },
    { id: 18, name: "Dr. Aamir Aijaz Syed", designation: "Assistant Professor", image: facultyImg18 },
    { id: 19, name: "Dr. Praveen Srivastava", designation: "Associate Professor", image: facultyImg19 },
    { id: 20, name: "Dr. Kanupriya", designation: "Assistant Professor", image: facultyImg20 },
    { id: 21, name: "Dr. Ratna Singh", designation: "Assistant Professor", image: facultyImg21 },
    { id: 22, name: "Ms. Arti Das", designation: "Assistant Professor", image: facultyImg22 },
    { id: 23, name: "Ms. Neha Kapoor", designation: "Assistant Professor", image: facultyImg23 },
    { id: 24, name: "Ms. Ekta Yadav", designation: "Assistant Professor", image: facultyImg24 },
    { id: 25, name: "Ms. Nidha", designation: "Assistant Professor", image: facultyImg25 },
    { id: 26, name: "Dr. Vipin Bihari Srivastava", designation: "Associate Professor", image: facultyImg26 },
    { id: 27, name: "Mr. Syed Asif Mehdi", designation: "Assistant Professor", image: facultyImg27 },
];

export const managementDepartmentHighlights: departmentHighlightscardType[] = [
    {
        image: depSlide1,
        title: "Highly qualified faculty members",
        description:
            "About 90% of the faculty hold doctorate degree and it is ensured that these faculty have their academic background from institutes of national and international repute.",
    },
    {
        image: depSlide2,
        title: "Adoption of the choice based credit system",
        description:
            "The flexibility in curriculum is introduced with choices in the form of inter and intra-disciplinary electives, generic electives, open electives, skill enhancement courses and value added courses.",
    },
    {
        image: depSlide3,
        title: "Links with national and international centers of learning",
        description:
            "International Study Tours, Workshops, Seminars and Guest Lectures are a part of academic curriculum at Faculty of Management to help students gain confidence to face the world.",
    },
    {
        image: depSlide4,
        title: "Students are trained for the Industry, by the Industry",
        description:
            "Collaborations with different industry leaders like IBM etc. have been done to provide students of these programs the most advanced and globally accepted curriculum.",
    },
    {
        image: depSlide5,
        title: "Giving avenues for holistic development to students",
        description:
            "16 Clubs, NCC and NSS, extension services and community work are embedded in curricula to sensitize the students towards the needs of the society and provide them with a holistic development.",
    },
    {
        image: depSlide6,
        title: "Introducing unique Industry honors program",
        description:
            "Through Corporate World Interface, the Industry Honors Program seeks to provide students with an understanding of a variety of functional areas in management.",
    },
    {
        image: depSlide7,
        title: "Consistent track record in campus placements",
        description:
            "100% placement record with more than 30% students having multiple job offers in management, department provides the best return on investment.",
    },
];
export const managementCounterData2: counterDataType[] = 
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
            value: "180",
            suffix: "",
            label: "Field Visits",
        },
        {
            id: 3,
            icon: "",
            value: "30",
            suffix: "",
            label: "Conference & Seminars",
        },
    ];
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

export const managementPlacedStudents: Student[] = [
    { name: "Shivang Jaiswal", program: "M.B.A. (Master of Business Administration)", company: "Amazon" },
    { name: "Rohan Kapoor", program: "M.B.A. (Master of Business Administration)", company: "TATA AIG" },
    { name: "Anushka Kanojia", program: "M.B.A. (Master of Business Administration)", company: "TATA AIG" },
    { name: "Shweta Tewari", program: "M.B.A. (Master of Business Administration)", company: "TATA AIG" },
    { name: "Utkarsh Gupta", program: "M.B.A. (Master of Business Administration)", company: "TATA AIG" },
    { name: "Shivam Gupta", program: "M.B.A. (Master of Business Administration)", company: "TATA AIG" },
    { name: "Shivam Singh", program: "M.B.A. (Master of Business Administration)", company: "TATA AIG" },
    { name: "Aditya Prakash Singh", program: "M.B.A. (Master of Business Administration)", company: "TATA AIG" },
    { name: "Saurabh Srivastava", program: "M.B.A. (Master of Business Administration)", company: "TATA AIG" },
    { name: "Shikharkant", program: "M.B.A. (Master of Business Administration)", company: "TATA AIG" },
];
