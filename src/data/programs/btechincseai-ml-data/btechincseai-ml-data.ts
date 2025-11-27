import { WhyCardProps } from "../../../components/programs/btechinCSEAIandML/WhyCardComp";
import { customeOverViewType } from "../../../types/home-data-type";
import { counterDataType } from "../../home/counterData";
import img1 from "../../../assets/images/programs/btechincseaiandml/continuous-evaluation-system-15122301313957-211223-1505241033464.png"

import img4 from "../../../assets/images/programs/btechincseaiandml/opportunity-to-work-on-live-projects-1512230130556-15052410344778.png"
import img5 from "../../../assets/images/programs/btechincseaiandml/project-based-experiential-learning-15122301311298-15052410340799.png"
import img6 from "../../../assets/images/programs/btechincseaiandml/specialized-curriculum-designed-by-the-industry-ex-15052410365972.png"

import tcs from "../../../assets/images/programs/btechincseaiandml/tcs-21122310563080.png"
import lnt from "../../../assets/images/programs/btechincseaiandml/lt-logo-1280x720-1-removebg-preview-08022505052413.png"
import wipro from "../../../assets/images/programs/btechincseaiandml/wipro-21122310564977.png"
import sap from "../../../assets/images/programs/btechincseaiandml/sap-2112231056559.png"
import { FeeTableData } from "../../academics/faculty-of-civil-engineering/faculty-of-civil-engineering-data";

import dep1 from "../../../assets/images/programs/btechincseaiandml/dep1.jpg"
import dep2 from "../../../assets/images/programs/btechincseaiandml/dep2.jpg"
import dep3 from "../../../assets/images/programs/btechincseaiandml/dep3.jpg"
import dep4 from "../../../assets/images/programs/btechincseaiandml/dep4.jpg"
import { CustomProgramPLOAccordianProps } from "../../../utils/custom/CustomProgramPLOAccordian";




export const BtechCSEAIandMLOverviewData: customeOverViewType = {
    heading: "Overview",
    content:
        `
  <p>
  The B.Tech. Computer Science and Engineering program at SRMU with a specialization in Artificial Intelligence and Machine Learning offers students an immersive learning experience at the forefront of technological innovation. Through a comprehensive curriculum, students delve into the intricacies of AI and ML, mastering algorithms, data mining, pattern recognition, and more.
  </p>
  <br/>
  <p>
  This specialized track equips graduates with the skills and knowledge to develop intelligent systems, analyze complex datasets, and create innovative solutions that drive advancements in various industries, from healthcare and finance to autonomous vehicles and robotics. With hands-on projects, industry collaborations, and expert faculty guidance, students emerge as proficient professionals ready to tackle real-world challenges in the dynamic field of AI and ML.
  </p>
  <br/>
  <strong>Understanding Artificial Intelligence:</strong>
  <br/>
  <p>
  Artificial intelligence revolutionizes industries by simulating human intelligence in machines, empowering them to perform tasks that typically require human intervention. It encompasses various technologies like machine learning, natural language processing, and computer vision, enabling systems to learn, reason, and problem-solve autonomously.
  </p>
  <br/>
  <p>
  AI applications range from virtual assistants and recommendation systems to autonomous vehicles and medical diagnosis, driving innovation across sectors. As AI continues to evolve, its ethical implications, societal impact, and responsible deployment remain critical considerations in shaping its future.
  </p>
  <br/>
  <strong>Understanding Machine Learning:</strong>
  <br/>
  
  <p>
  Machine learning, a subset of artificial intelligence, empowers systems to learn from data and improve over time without explicit programming. It utilizes algorithms to analyze large datasets, identify patterns, and make predictions or decisions autonomously. From personalized recommendations on streaming platforms to fraud detection in banking, machine learning permeates diverse domains, optimizing processes and enhancing efficiency.
  </p>
  <br/>
  <p>
  As it continues to advance, understanding its principles and applications becomes increasingly essential in driving innovation and solving complex problems.
  </p>
  <br/>
  <p>
  Ramswaroop graduates get the advantage of gaining most comprehensive practical understanding of these futuristic technologies. The program is led by expert instructors who go on to expose the students to the fundamentals of NLP, AutoML, Quantum Computing, Data Preprocessing and Feature Engineering, Neural Networks and Deep Learning, Computer Vision, Reinforcement Learning and many more.
  </p>
  <br/>
  <p>
  SRMU is one of the best College for <strong>B.Tech. in CSE (Artificial Intelligence & Machine Learning)</strong>in Lucknow, Uttar Pradesh providing endless opportunities in this dynamic world of computing.
  </p>
  `
};



export const counterDataForBtechinCSEAIandML: counterDataType[] = [
    { id: 1, value: "NAAC", suffix: "", label: "Accredited" },
    { id: 2, value: "30", suffix: "LPA", label: "Highest Package" },
    { id: 3, value: "100", suffix: "%*", label: "Placement" },
    { id: 4, value: "30", suffix: "%", label: "Students have multiple job offers" },
];


// whyData.ts



export const whyData: WhyCardProps[] = [
    {
        img: img1,
        text: "Continuous evaluation system providing students several opportunities to improve their grades",
    },
    {
        img: img5,
        text: "Modules as per NEP for developing industry required skills",
    },
    {
        img: img4,
        text: "Curriculum developed by the experts from industry and university researchers",
    },
    {
        img: img1,
        text: "Multiple levels of industry certification",
    },
    {
        img: img1,
        text: "32 hours of blended teaching hours for every module to meet industry expectations",
    },
    {
        img: img5,
        text: "Sessions and lectures by industry leaders for experiential acquaintance to enhance learning",
    },
    {
        img: img4,
        text: "Industry sponsored labs for providing the best hands-on knowledge exposure",
    },
    {
        img: img6,
        text: "Opportunities to work on LIVE projects of IT Companies",
    },
    {
        img: img1,
        text: "350+ exclusive learning hours in industry hub",
    },
    {
        img: img5,
        text: "Student feedback mechanism for improving learning experience",
    },

    {
        img: img4,
        text: "Host of clubs to provide a platform for creativity",
    },
];



export const partnerDataforAIandML = [
    {
        img: tcs,
        title: "Accredited Campus",
    },
    {
        img: lnt,
        title: "Centre of Excellence",
    },
    {
        img: wipro,
        title: "Nodal Centre",
    },
    {
        img: sap,
        title: "Preferred Partner",
    },
];



export const ProgramFeesAIandML: FeeTableData = {
    columns: ["Fee Type", "1st Year", "2nd Year", "3rd Year", "4th Year"],

    rows: [
        {
            course: "Tuition Fee",
            "1st Year": "113500",
            "2nd Year": "113500",
            "3rd Year": "113500",
            "4th Year": "113500",
            eligibilityContent: `
                <h2 class='font-bold text-lg mb-3'>Tuition Fee Details</h2>
                <ul class='list-disc pl-5 space-y-2'>
                    <li>1st Year: ₹1,13,500</li>
                    <li>2nd Year: ₹1,13,500</li>
                    <li>3rd Year: ₹1,13,500</li>
                    <li>4th Year: ₹1,13,500</li>
                </ul>
            `
        },
        {
            course: "Examination Fee",
            "1st Year": "13750",
            "2nd Year": "13750",
            "3rd Year": "13750",
            "4th Year": "13750",
            eligibilityContent: `
                <h2 class='font-bold text-lg mb-3'>Examination Fee</h2>
                <ul class='list-disc pl-5 space-y-2'>
                    <li>1st Year: ₹13,750</li>
                    <li>2nd Year: ₹13,750</li>
                    <li>3rd Year: ₹13,750</li>
                    <li>4th Year: ₹13,750</li>
                </ul>
            `
        },
        {
            course: "Other Fees + Training Fee (2nd Yr. Onward)",
            "1st Year": "14000",
            "2nd Year": "19000",
            "3rd Year": "19000",
            "4th Year": "19000",
            eligibilityContent: `
                <h2 class='font-bold text-lg mb-3'>Other + Training Fee</h2>
                <ul class='list-disc pl-5 space-y-2'>
                    <li>1st Year: ₹14,000</li>
                    <li>2nd Year: ₹19,000</li>
                    <li>3rd Year: ₹19,000</li>
                    <li>4th Year: ₹19,000</li>
                </ul>
            `
        },
        {
            course: "Development Fund",
            "1st Year": "13750",
            "2nd Year": "13750",
            "3rd Year": "13750",
            "4th Year": "13750",
            eligibilityContent: `
                <h2 class='font-bold text-lg mb-3'>Development Fund</h2>
                <ul class='list-disc pl-5 space-y-2'>
                    <li>1st Year: ₹13,750</li>
                    <li>2nd Year: ₹13,750</li>
                    <li>3rd Year: ₹13,750</li>
                    <li>4th Year: ₹13,750</li>
                </ul>
            `
        },
        {
            course: "Caution Money",
            "1st Year": "5000",
            "2nd Year": "NA",
            "3rd Year": "NA",
            "4th Year": "NA",
            eligibilityContent: `
                <h2 class='font-bold text-lg mb-3'>Caution Money</h2>
                <ul class='list-disc pl-5 space-y-2'>
                    <li>1st Year: ₹5,000 (Refundable)</li>
                    <li>2nd Year: NA</li>
                    <li>3rd Year: NA</li>
                    <li>4th Year: NA</li>
                </ul>
            `
        },
        {
            course: "Total Fee",
            "1st Year": "160000",
            "2nd Year": "160000",
            "3rd Year": "160000",
            "4th Year": "160000",
            eligibilityContent: `
                <h2 class='font-bold text-lg mb-3'>Total Fee (Without Hostel/Transport)</h2>
                <ul class='list-disc pl-5 space-y-2'>
                    <li>1st Year: ₹1,60,000</li>
                    <li>2nd Year: ₹1,60,000</li>
                    <li>3rd Year: ₹1,60,000</li>
                    <li>4th Year: ₹1,60,000</li>
                </ul>
            `
        },
        {
            course: "Hostel Fees + Caution Money (1st Yr Only)",
            "1st Year": "85000",
            "2nd Year": "80000",
            "3rd Year": "80000",
            "4th Year": "80000",
            eligibilityContent: `
                <h2 class='font-bold text-lg mb-3'>Hostel Fees</h2>
                <ul class='list-disc pl-5 space-y-2'>
                    <li>1st Year: ₹85,000</li>
                    <li>2nd Year: ₹80,000</li>
                    <li>3rd Year: ₹80,000</li>
                    <li>4th Year: ₹80,000</li>
                </ul>
            `
        },
        {
            course: "Transportation",
            "1st Year": "33000",
            "2nd Year": "33000",
            "3rd Year": "33000",
            "4th Year": "33000",
            eligibilityContent: `
                <h2 class='font-bold text-lg mb-3'>Transportation Fee</h2>
                <ul class='list-disc pl-5 space-y-2'>
                    <li>Same amount for all years</li>
                    <li>₹33,000 per year</li>
                </ul>
            `
        }
    ],

    notes: [
        "Alumni Fee: 500",
        "Degree Fee: 1000",
        "Both these fees are payable in the final year of the program"
    ]
};


export const scholarshipSchemesSample = {
    title: "Scholarship Schemes",
    description:
        "Career Counselling at Shri Ramswaroop Memorial University offers counselling to students, guiding the young minds by helping them to understand their strength and also to sail through at all levels in the job market.",
    schemes: [
        { id: 1, name: "SRMUSET (Shri Ramswaroop Memorial University Scholarship Entrance Test)" },
        { id: 2, name: "Merit Based Scholarship" },
        { id: 3, name: "CUET Score Based" },
        { id: 4, name: "National Entrance Score Based" },
        { id: 5, name: "Students Opting For Career Progression" },
        { id: 6, name: "Ward of Defense Persons/ Central Government/ State Government Employees" },
        { id: 7, name: "Ward of Martyrs" },
        { id: 8, name: "For National/ State Level Sportsperson" },
        { id: 9, name: "Blood Relatives of Staff and Students of Ramswaroop Group" },
        { id: 10, name: "Divyang & Female Candidates" },
        { id: 11, name: "EWS (Economically Weaker Section)" },
    ],
    buttonText: "View Details",
};



export const steps = [
    {
        id: 1,
        title: "Achievements",
        image: "https://srmu.ac.in/storage/common-section/mission-08022405412963.jpg",
        bulletPoints: [
            "Parv Awasthi has secured top 11 position in in DUEX DANZA, conducted by MANFEST- VARCHASVA ,IIM Lucknow during 10th -12th Feb 2023",
            "5 Students CSE (Shivam Agarwal,Debashish Bose,Aditya Agarwal,Abhishek Singh Bohra,Gaurav Singh) qualified GATE exam in 2022-2023",
            "Debashish Bose selected for M. Tech program in NIT Karnataka, Surthal",
        ],
    },
    {
        id: 2,
        title: "Research",
        image: "https://srmu.ac.in/storage/common-section/vision-10102304420738.png",
        bulletPoints: ["100+ Research Papers published in reputed journals", "08+ Books and Book Chapters published", "05+ Ph.D. Awarded", "04+ Patents Granted/ Published"],
    },
    {
        id: 3,
        title: "Labs",
        image: "https://srmu.ac.in/storage/common-section/613x715-beyond-11zon-1-28022411364712-15052410402616.jpg",
        bulletPoints: [
            "Google Android Lab",
            "L&T Certified Lab",
            "Artificial Intelligence & Machine Learning Lab",
            "Cloud Computing Lab",
            "Research & Development Lab",
            "Cyber Security Lab",
        ],
    },
    {
        id: 4,
        title: "Beyond Academics",
        image: "https://srmu.ac.in/storage/common-section/core-values-08022405434112.jpg",
        bulletPoints: [
            "Parv Awasthi has secured top 11 position in in DUEX DANZA, conducted by MANFEST- VARCHASVA ,IIM Lucknow during 10th -12th Feb 2023",
            "Gagan Singh Yadav achieved 1st position in Table Tennis at Ullas 2023, Annual Fest held at SRMU",
            "Raj Singh Parihar achieved 2nd position in Football at Ullas 2023,Annual Fest held at SRMU",
        ],
    },
];




export const abc: CustomProgramPLOAccordianProps = {
    POdata: [
        {
            id: 1,
            content:
                "To impart deep technical knowledge about the field of computer science and engineering.",
        },
        {
            id: 2,
            content:
                "To develop an understanding of computer science and engineering at different levels of abstraction including computer architecture and design, operating systems, database management, algorithms and applications.",
        },
        {
            id: 3,
            content:
                "To aware students with a strong foundation in the field of Mathematics and basics of engineering fundamentals necessary to analyze and evaluate real world engineering problems and to further prepare them for higher studies, R&D.",
        },
        {
            id: 4,
            content:
                "To develop life-long learning attitude among students and to make them aware about professional and social responsibility.",
        },
        {
            id: 5,
            content:
                "To inculcate an understanding among the students for utilizing their knowledge of computer engineering and mathematical theory to solve current and future computing problems.",
        },
        {
            id: 6,
            content:
                "To inspire leadership and professional values in the students.",
        },
    ],


    PLOdata: [
  {
    id: 1,
    content:
      "Apply possessed knowledge of core subjects of production and industrial engineering to solve different problems.",
  },
  {
    id: 2,
    content:
      "Problem analysis: Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
  },
  {
    id: 3,
    content:
      "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
  },
  {
    id: 4,
    content:
      "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
  },
  {
    id: 5,
    content:
      "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
  },
  {
    id: 6,
    content:
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
  },
  {
    id: 7,
    content:
      "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
  },
  {
    id: 8,
    content:
      "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
  },
  {
    id: 9,
    content:
      "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
  },
  {
    id: 10,
    content:
      "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
  },
  {
    id: 11,
    content:
      "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
  },
  {
    id: 12,
    content:
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
  },
],


   PSOdata: [ 
  {
    id: 1,
    content:
      "Understand and develop computer programs in the areas related to algorithms, system software, multimedia, web design, big data analytics and networking by identifying, demonstrating and analyzing the knowledge of engineering in efficient design of computer-based systems of varying complexity.",
  },
  {
    id: 2,
    content:
      "Applying algorithmic principles, innovative Computer science and engineering design and implementation skills to propose optimal solutions to complex problems by choosing a better platform for research in emerging areas.",
  },
  {
    id: 3,
    content:
      "Identify standard Software Engineering practices and strategies by applying software project development methods using open-source programming environment to design and evaluate a quality product for business success.",
  },
  {
    id: 4,
    content:
      "Demonstrate and examine basic understanding of engineering fundamentals, professional/social ethics and apply mathematical foundations to design and solve computational problems.",
  },
],

};



export const careerData = [
  { name: 'Data Scientist' },
  { name: 'Data Analyst' },
  { name: 'Data Engineer' },
  { name: 'Machine Learning Engineer' },
  { name: 'Research Scientist' },
  { name: 'Robotics Engineer' },
  { name: 'Software Engineer' },
  { name: 'AI Researcher' },
  { name: 'AI Developer' },
  { name: 'Big Data Engineer' },
  { name: 'Algorithm Specialist' },
  { name: 'Business Intelligence Developer' },
];