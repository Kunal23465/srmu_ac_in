import { customeOverViewType } from "../../../types/home-data-type";

import drrsbajpai from "../../../assets/images/academics/institutes/dr.r.s.bajpai.webp";
import visionImg from "../../../assets/images/academics/institutes/dept-vision.webp";
import misionImg from "../../../assets/images/academics/institutes/dept-mission.webp";
import { departmentHighlightscardType, FeeTableData } from "../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import vijayLaxmi from "../../../assets/images/academics/institutes/vijaylaxmi.webp";
import mritunjayRai from "../../../assets/images/academics/institutes/dr.-mritumjay-rai.webp";
import vaibhavaSrivastava from "../../../assets/images/academics/institutes/vaibhav.webp";
import pappu from "../../../assets/images/academics/institutes/paapu.webp";
import chhaviMitharwal from "../../../assets/images/academics/institutes/chavi.webp";
import gauravVerma from "../../../assets/images/academics/institutes/gaurav.webp";
import sandeepTiwari from "../../../assets/images/academics/institutes/sandeep.webp";
import rsBajpai from "../../../assets/images/academics/institutes/dr.r.s.bajpai.webp";
import shivaniSingh from "../../../assets/images/academics/institutes/er.shivani-singh.webp";
import shubhaMishra from "../../../assets/images/academics/institutes/er.shubham-mishra-.webp";
import sandeepDixit from "../../../assets/images/academics/institutes/sandeep.webp";
import jayKumarPandey from "../../../assets/images/academics/institutes/dr.-jay-kumar-pandey.webp";
import anandPrakash from "../../../assets/images/academics/institutes/er.anand-.webp";
import abhishekSaxena from "../../../assets/images/academics/institutes/er.abhishek-saxena.webp";
import rohitKumar from "../../../assets/images/academics/institutes/rohit.webp";
import alkesh from "../../../assets/images/academics/institutes/dr-alkesh-agarwal.webp";
import researchpapers from "../../../assets/images/academics/institutes/researchpapers-.webp";
import skill from "../../../assets/images/academics/institutes/skill-.webp";
import evtechnology from "../../../assets/images/academics/institutes/evtechnology-.webp";
import learning from "../../../assets/images/academics/institutes/learning-.webp";
import holistic from "../../../assets/images/academics/institutes/holistic-.webp";
import corporate from "../../../assets/images/academics/institutes/corporate-manag-.webp";
import training from "../../../assets/images/academics/institutes/training-.webp";
import { FacultyItem } from "../../../utils/custom/CustomFacultyListCard";
import { InstituteProfile } from "../../../types/profile-data-type";
import { Student } from "../../../utils/custom/CustomPlacedStudentTable";
import { counterDataType } from "../../about/leadership-and-governance/leadership-and-governance-data";

export const electricalDepartmentHighlightsData: departmentHighlightscardType[] = [
  {
    image: researchpapers,
    title: "Creating a research oriented environment",
    description:
      "Department is actively engaged in publishing research papers in international journals and conferences. In addition to the above the department is continuously organizing world class international conferences.",
  },
  {
    image: skill,
    title: "Value added courses for skill enhancement",
    description:
      "The department meets the unique learning needs of each student and assists them in building a solid foundation of knowledge and skills by providing a wide variety of these courses.",
  },
  {
    image: evtechnology,
    title: "Industry collaborative programs in EV technology",
    description:
      "The department has launched an EV concentration program, created by industry professionals with an emphasis on developing industrial skills related to e-mobility.",
  },
  {
    image: learning,
    title: "Immersive learning practices for skill deployment",
    description:
      "To provide a learning-based environment on technical concepts applied to real-life situations with measurable outcomes, students are provided with industrial visits, guest lectures and sharing of best practices.",
  },
  {
    image: holistic,
    title: "Encouraging the culture of innovation & entrepreneurship",
    description:
      "Center for Innovation, Incubation and Entrepreneurship (CIIE) with a vision to encourage the culture of innovation by igniting and molding young minds to work for novel ideas towards benefit of the society.",
  },
  {
    image: corporate,
    title: "Providing curriculum based on futuristic technologies",
    description:
      "Collaborations with industry leaders to set up lab facilities providing access to platforms related to these futuristic technologies to help students and faculty members enhance their skills.",
  },
  {
    image: training,
    title: "Impeccable training & placement opportunities",
    description:
      "The Department of Electrical & Electronics Engineering holds a strong unified team working towards training the students on right technologies in right environment to make them industry ready.",
  },
];

export const electricalDepartmentinstituteOverviewData: customeOverViewType = {
  heading: "Department of Electrical and Electronics Engineering",
  content: `The department of Electrical & Electronics Engineering was established in 2012. Currently department is offering undergraduate, post graduate and doctorate programmes in various specialized disciplines of electrical & electronics engineering, EV field, Renewable energy, artificial intelligence, machine learning, drone technology and microelectronics are the emerging field & field of the near future.

Department has started EV specialization programme in association with Morris Garages (MG) motors & ISIE, IoT & Artificial Intellegence with IBM. Programs are designed by industry experts with prime focus on practical industrial skill development towards E-Mobility and embedded systems. The department of Electrical & Electronics Engineering has well qualified faculty members and most faculty members hold PG/doctorate from reputed institutes like IIT Delhi, IIT Roorkee, IIT BHU and NIT Allahabad to name a few. Faculty members have specialization in diverse fields of Electrical & Electronics Engineering such as Power systems, Electrical Machines, Electrical Drives, High Voltage Engineering, Control systems, Instrumentation, Renewable Energy, Image Processing, Microwave Engineering, Absorbers and Patch Antennas, Virtual Instrumentation, Signal Processing, Information Theory & Coding and Digital Communication, competency in 5G technology with EIT, Melbourne Austrlia. Department has industrial and academic collaboration with TATA Motors, ISIE India, L&T and engineering Institute of technology (EIT), Melbourne Austrlia. SRMU in collaboration with EIT offers various programs such as Data Communication & Industrial IT, Electronics Engineering, Industrial automation, Instrumentation and process control, under graduate certificates, Advance Diplomas etc, where students can join online programs.

The faculty members have published significant number of research articles in International Journals, IEEE Transactions and in the Proceedings of various International and National Seminars, Conferences, Symposia and Workshops. The faculty members have also published several book chapters and prepared online teaching aid. The theoretical knowledge is further supplemented by well-equipped laboratories.

Department is equipped with latest state of art laboratories for electrical machines, power electronics, electric drives, power systems, control systems, micro-processor & microcontroller, electrical engineering, measurements and instrumentation and renewable energy with excellent computing facilities such as Scilab, Labview & PLC/SCADA software’s.`,
};

export const instituteFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const counterDataForDepartmentOfElectricalAndElectronicsEngineering: counterDataType[] = [
  { id: 1, value: "2012", suffix: "", label: "Established" },
  { id: 2, value: "24", suffix: "", label: "Faculty & Staff" },
  { id: 3, value: "215", suffix: "", label: "Students" },
];

export const counterDataForPlacedStudentsOFDepartmentOfElectricalAndElectronicsEngineering: counterDataType[] = [
  {
    id: 1,
    icon: "",
    value: "200",
    suffix: "",
    label: "Guest lectures",
  },
  {
    id: 2,
    icon: "",
    value: "100",
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
];

export const ElectricalAndElectronicsdepartmentHeadProfileData: InstituteProfile[] = [
  {
    id: 1,
    title: "Department Head",
    name: "Prof. (Dr.) R.S. Bajpai",
    position: "Dean, FoEEE, SRMU, Lucknow–Deva Road",
    image: drrsbajpai,

    summary: "",

    useBullets: false,

    details: [
      "**Qualification:** M.Tech. (Power Electronics), Ph.D. (Renewable Energy)",
      "**Experience:** 38+ years",
      "**Specialization/ Area of Research:** Power Electronics, Power Quality, Renewable Energy and Electric Vehicle Technology",
      "**Email ID:** dean.eee@srmu.ac.in, rsbajpai.ee@srmu.ac.in",
      "**ORCID ID:** https://orcid.org/0000-0001-5117-1756",
      "**Contact No.: +91-8318859195**",
    ],

    modalContent: `
Prof. (Dr.) R S Bajpai, is currently HoD, Department of Electrical & Electronics Engineering. Previously, he served as a technical officer in Indian Air Force for 18 Years. Dr. Bajpai was born in Sep 1963 and holds M.Tech (Power Electronics) and Ph.D (Renewable Energy) from Motilal Nehru, National Institute of Technology (MNNIT) Allahabad. His area of interest is power electronics, power quality, renewable energy and electric vehicle technology. Professor Bajpai has 38 years of experience in teaching, research and academic administration. He is a renowned academician having more than three decades of experience in both industry & academic planning and administration; teaching, guiding, research.  He has published more than 40 research publications in various SCI/Scopus indexed journals, 03 book chapters and 04 patents. He has guided projects more than 60 students at UG level, 20 students at PG level and 10 research scholars.

Dr. Bajpai has been a recipient of many recognitions and awards such as; Awarded Dr P S Nigam Power Sector Award during 86th Annual General Meeting, held at Institutions of Engineers (India), State Centre Lucknow in 2006, academic excellence award at SRMCEM, Lucknow in 2007, and best technical engineer award in the field of power generation and distribution to the telecommunication and radar centers at Air Force Station, Lonavla in , Pune in 1999. His current research is focused to develop control strategies for cutting edge technologies in Power Quality, Artificial Intelligence, Electric Vehicle technology, Renewable Energy (Wind,Solar and Fuel Cell), Hydrogen powered vehicles, Fuel cell vehicles, Fast battery charging, Battery thermal management, Battery Charging Station, Green Hydrogen Production etc. He has made significant contributions to the development of excellence centers and laboratories in higher education. Dr. Bajpai executed demonstrative laboratory experiments with hybrid power generating systems that include solar, wind, hydro, and compressed air storage to demonstrate real-time uninterrupted power distribution from both DC and AC networks. Dr. Bajpai has also developed a renewable energy park and designed laboratory experiments on EV technology to demonstrate their influence on environmental pollution.
`,
  },
];

export const industryHonorsFeeData: FeeTableData = {
  columns: ["COURSES", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "M.Tech. in Electric Vehicle Technology",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 1,07,000/-",
      link: "program/m-tech-electric-vehicle-technology",
      eligibilityContent: `
            <h2 class='font-bold text-lg  flex justify-center  mb-3'>M.Tech. in Electric Vehicle Technology</h2>
            <p>Candidate must have passed B. Tech from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category. Candidate will be offered admission in M. Tech. only in that stream of Engineering in which he has obtained B. Tech.</p>
        `,
    },
    {
      course: "M.Tech. in Electric Vehicle Technology (Part Time)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 69,000/-",
      link: "program/m-tech-electric-vehicle-technology-part-time",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.Tech. in Electric Vehicle Technology (Part Time)</h2>
            <p>Candidate must have passed B. Tech from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category. Candidate will be offered admission in M. Tech. only in that stream of Engineering in which he has obtained B. Tech.</p>
            <p>In addition to the above mentioned basic M. Tech (Regular) eligibility, candidates must have at least 2 years Teaching/Industrial/Research/Professional Work Experience for 3 years M. Tech (Part Time) in CE, ME, CS, EC &amp; EE.</p>
        `,
    },
    {
      course: "B.Tech. in Electrical Engineering with L&T",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-ee-ev-engineering",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in EE (EV Engineering) with L&T</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Computer Science/Technical Vocational Subject with minimum aggregate marks of 45%.</p>
        `,
    },
    {
      course: "B.Tech. in Electrical Engineering (Lateral Entry) with L&T",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-ee-ev-engineering-lateral-entry",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in Electrical Engineering (Lateral Entry) with L&T</h2>
            <p>Candidate must have passed 3 or 4 year Diploma in technical stream from institutions recognized by AICTE or a State Board of Technical Education or B.Sc. degree in Biology/ Microbiology/ Botony/ Zoology/ Chemistry/ Physics/ Maths/ Physiology/ Biotechnology/ Biochemistry/ Agriculture with minimum aggregate marks of 45% or 5.0 CGPA for GEN/OBC and 40% marks or 4.5 CGPA for SC/ST Category.</p>
        `,
    },
    {
      course: "B.Tech. in Electronics & Communication Engineering with L&T",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-ece-ev-engineering",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in Electronics & Communication Engineering with L&T</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Computer Science/Technical Vocational Subject with minimum aggregate marks of 45%.</p>
        `,
    },
    {
      course: "B.Tech. in Electronics & Communication Engineering (Lateral Entry) with L&T",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-ece-ev-engineering-lateral-entry",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in Electronics & Communication Engineering (Lateral Entry) with L&T</h2>
            <p>Candidate must have passed 3 or 4 year Diploma in technical stream from institutions recognized by AICTE or a State Board of Technical Education or B.Sc. degree in Biology/ Microbiology/ Botony/ Zoology/ Chemistry/ Physics/ Maths/ Physiology/ Biotechnology/ Biochemistry/ Agriculture with minimum aggregate marks of 45% or 5.0 CGPA for GEN/OBC and 40% marks or 4.5 CGPA for SC/ST Category.</p>
        `,
    },
    {
      course: "B.Tech. in ECE (Semiconductor Design) with L&T",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/btech-ece-semiconductor-design",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in ECE (Semiconductor Design) with L&T</h2>
            <p>The B.Tech in Electronics & Communication Engineering (Semiconductor Design) at Shri Ramswaroop Memorial University (SRMU), Lucknow is a future-focused engineering program designed to prepare students for careers in the rapidly expanding semiconductor and electronics industry.</p>
        `,
    },
  ],
};

export const integratedFeeData: FeeTableData = {
  columns: ["COURSES", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "B.Tech. + M.Tech. in Electrical Engineering",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-m-tech-ee",
      eligibilityContent: `
            <h2 class='font-bold flex justify-center  text-lg mb-3'>B.Tech. + M.Tech. in Electrical Engineering</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics/Biology as compulsory subject alongwith Chemistry/ Biotechnology/ Computer Science/Technical Vocational Subject. Candidate must obtained minimum marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category in the above subjects taken together.</p>
        `,
    },
    {
      course: "B.Tech in EE + M.B.A.",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-ee-mba",
      eligibilityContent: `
            <h2 class='font-bold  flex justify-center  text-lg mb-3'> B.Tech in EE + M.B.A.</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjects alongwith one of the Chemistry/Computer Science/Technical Vocational Subject. Candidate must obtained minimum 45% marks or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category in the above subjects taken together.<br>
            &nbsp;</p>
        `,
    },
    {
      course: "B.Tech. in ECE + M.B.A.",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-ece-mba",
      eligibilityContent: `
            <h2 class='font-bold  flex justify-center  text-lg mb-3'>B.Tech. in ECE + M.B.A.</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjects alongwith one of the Chemistry/Computer Science/Technical Vocational Subject. Candidate must obtained minimum 45% marks or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category in the above subjects taken together.</p>
        `,
    },
    {
      course: "B.Tech. + M.Tech. in Electronics & Communication Engineering",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-m-tech-ece",
      eligibilityContent: `
            <h2 class='font-bold  flex justify-center  text-lg mb-3'>B.Tech. + M.Tech. in Electronics & Communication Engineering</h2>
            <p>Candidate must have passed 3 or 4 year Diploma in technical stream from institutions recognized by AICTE or a State Board of Technical Education or B.Sc. degree in Biology/ Microbiology/ Botony/ Zoology/ Chemistry/ Physics/ Maths/ Physiology/ Biotechnology/ Biochemistry/ Agriculture with minimum aggregate marks of 45% or 5.0 CGPA for GEN/OBC and 40% marks or 4.5 CGPA for SC/ST Category.<br>
            &nbsp;</p>
        `,
    },
  ],
};

export const postGraduateFeeData: FeeTableData = {
  columns: ["COURSES", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "M.Tech. in Renewable Energy & Energy Audit",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 1,07,000/-",
      link: "program/m-tech-renewable-energy-energy-audit",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.Tech. in Renewable Energy & Energy Audit</h2>
            <p>Candidate must have passed B. Tech from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category. Candidate will be offered admission in M. Tech. only in that stream of Engineering in which he has obtained B. Tech.</p>
        `,
    },
    {
      course: "M.Tech. in Renewable Energy & Energy Audit (Part Time)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 69,000/-",
      link: "program/m-tech-renewable-energy-energy-audit-part-time",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.Tech. in Renewable Energy & Energy Audit (Part Time)</h2>
            <p>Candidate must have passed B. Tech from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category. Candidate will be offered admission in M. Tech. only in that stream of Engineering in which he has obtained B. Tech.</p>
            <p>In addition to the above mentioned basic M. Tech (Regular) eligibility, candidates must have at least 2 years Teaching/Industrial/Research/Professional Work Experience for 3 years M. Tech (Part Time) in CE, ME, CS, EC &amp; EE.</p>
        `,
    },
    {
      course: "M.Tech. in Digital Communication",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 1,07,000/-",
      link: "program/m-tech-digital-communication",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.Tech. in Digital Communication</h2>
            <p>Candidate must have passed B. Tech from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category. Candidate will be offered admission in M. Tech. only in that stream of Engineering in which he has obtained B. Tech.</p>
        `,
    },
    {
      course: "M.Tech. in Digital Communication (Part Time)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 69,000/-",
      link: "program/m-tech-digital-communication-part-time",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.Tech. in Digital Communication (Part Time)</h2>
            <p>Candidate must have passed B. Tech from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category. Candidate will be offered admission in M. Tech. only in that stream of Engineering in which he has obtained B. Tech.</p>
            <p>In addition to the above mentioned basic M. Tech (Regular) eligibility, candidates must have at least 2 years Teaching/Industrial/Research/Professional Work Experience for 3 years M. Tech (Part Time) in CE, ME, CS, EC &amp; EE.</p>
        `,
    },
    {
      course: "M.Tech. in Power Electronics & Electric Drives",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 1,07,000/-",
      link: "program/m-tech-power-electronics-electric-drives1",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.Tech. in Power Electronics & Electric Drives</h2>
            <p>Candidate must have passed B. Tech from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category. Candidate will be offered admission in M. Tech. only in that stream of Engineering in which he has obtained B. Tech.</p>
        `,
    },
    {
      course: "M.Tech. in Power Electronics & Electric Drives (Part Time)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 69,000/-",
      link: "program/m-tech-power-electronics-electric-drives-part-time",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.Tech. in Power Electronics & Electric Drives (Part Time)</h2>
            <p>Candidate must have passed B.Tech. (CSE) from any recognized University or AICTE recognized Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category.</p>
            <p>OR</p>
            <p>Candidate must have passed MCA/M.Sc.(CS)/MA(CA)/M.Sc.(IT)/M.Sc.(Electronics)/B.Tech. (EC) from any recognized University or AICTE recognized Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category.</p>
            <p>In addition to above mentioned basic M.Tech. (Regular) eligibility, candidates must have at least 2 years of Teaching/Industrial/Research/Professional Work Experience for 3 years M.Tech. (Part Time) program.</p>
        `,
    },
    {
      course: "M.Tech. in Electric Vehicle Technology",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 1,07,000/-",
      link: "program/m-tech-electric-vehicle-technology",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.Tech. in Electric Vehicle Technology</h2>
            <p>Candidate must have passed B. Tech from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category. Candidate will be offered admission in M. Tech. only in that stream of Engineering in which he has obtained B. Tech.</p>
        `,
    },
    {
      course: "M.Tech. in Electric Vehicle Technology (Part Time)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 69,000/-",
      link: "program/m-tech-electric-vehicle-technology-part-time",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.Tech. in Electric Vehicle Technology (Part Time)</h2>
            <p>Candidate must have passed B. Tech from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category. Candidate will be offered admission in M. Tech. only in that stream of Engineering in which he has obtained B. Tech.</p>
            <p>In addition to the above mentioned basic M. Tech (Regular) eligibility, candidates must have at least 2 years Teaching/Industrial/Research/Professional Work Experience for 3 years M. Tech (Part Time) in CE, ME, CS, EC &amp; EE.</p>
        `,
    },
  ],
};

export const underGraduateFeeData: FeeTableData = {
  columns: ["COURSES", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "B.Tech. + M.Tech. in Electrical Engineering",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-m-tech-ee",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. + M.Tech. in Electrical Engineering</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics/Biology as compulsory subject alongwith Chemistry/ Biotechnology/ Computer Science/Technical Vocational Subject. Candidate must obtained minimum marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category in the above subjects taken together.</p>
        `,
    },
    {
      course: "B.Tech in EE + M.B.A.",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-ee-mba",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech in EE + M.B.A.</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjects alongwith one of the Chemistry/Computer Science/Technical Vocational Subject. Candidate must obtained minimum 45% marks or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category in the above subjects taken together.<br>
&nbsp;</p>
        `,
    },
    {
      course: "B.Tech. in ECE + M.B.A.",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-ece-mba",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in ECE + M.B.A.</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjects alongwith one of the Chemistry/Computer Science/Technical Vocational Subject. Candidate must obtained minimum 45% marks or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category in the above subjects taken together.</p>
        `,
    },
    {
      course: "B.Tech. in Electrical Engineering with L&T",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-ee-ev-engineering",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in EE (EV Engineering) with L&T</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Computer Science/Technical Vocational Subject with minimum aggregate marks of 45%.</p>
        `,
    },
    {
      course: "B.Tech. in Electrical Engineering (Lateral Entry) with L&T",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-ee-ev-engineering-lateral-entry",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in Electrical Engineering (Lateral Entry) with L&T</h2>
            <p>Candidate must have passed 3 or 4 year Diploma in technical stream from institutions recognized by AICTE or a State Board of Technical Education or B.Sc. degree in Biology/ Microbiology/ Botony/ Zoology/ Chemistry/ Physics/ Maths/ Physiology/ Biotechnology/ Biochemistry/ Agriculture with minimum aggregate marks of 45% or 5.0 CGPA for GEN/OBC and 40% marks or 4.5 CGPA for SC/ST Category.</p>
        `,
    },
    // {
    //   course: "B.Tech. in Electrical Engineering",
    //   duration: "4 Years",
    //   eligibility: "Click",
    //   fee: "Rs. 1,52,000/-",
    //   eligibilityContent: `
    //         <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in Electrical Engineering</h2>
    //         <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Computer Science/Technical Vocational Subject with minimum aggregate marks of 45%.</p>
    //         <section>&nbsp;</section>
    //     `,
    // },
    // {
    //   course: "B.Tech. in Electronics & Communication Engineering",
    //   duration: "4 Years",
    //   eligibility: "Click",
    //   fee: "Rs. 1,52,000/-",
    //   link:"program/b-tech-ece-ev-engineering",
    //   eligibilityContent: `
    //         <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in Electronics & Communication Engineering</h2>
    //         <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Computer Science/Technical Vocational Subject with minimum aggregate marks of 45%.</p>
    //         <section>&nbsp;</section>
    //     `,
    // },
    {
      course: "B.Tech. in Electronics & Communication Engineering (Lateral Entry)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-ece-ev-engineering-lateral-entry",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in Electronics & Communication Engineering (Lateral Entry)</h2>
            <p>Candidate must have passed 3 or 4 year Diploma in technical stream from institutions recognized by AICTE or a State Board of Technical Education or B.Sc. degree in Biology/ Microbiology/ Botony/ Zoology/ Chemistry/ Physics/ Maths/ Physiology/ Biotechnology/ Biochemistry/ Agriculture with minimum aggregate marks of 45% or 5.0 CGPA for GEN/OBC and 40% marks or 4.5 CGPA for SC/ST Category.</p>
            <section>&nbsp;</section>
        `,
    },
    {
      course: "B.Tech. + M.Tech. in Electronics & Communication Engineering",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-m-tech-ece",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. + M.Tech. in Electronics & Communication Engineering</h2>
            <p>Candidate must have passed 3 or 4 year Diploma in technical stream from institutions recognized by AICTE or a State Board of Technical Education or B.Sc. degree in Biology/ Microbiology/ Botony/ Zoology/ Chemistry/ Physics/ Maths/ Physiology/ Biotechnology/ Biochemistry/ Agriculture with minimum aggregate marks of 45% or 5.0 CGPA for GEN/OBC and 40% marks or 4.5 CGPA for SC/ST Category.<br>
&nbsp;</p>
        `,
    },
    {
      course: "B.Tech. in Electrical Engineering with L&T",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-ee-ev-engineering",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in Electrical Engineering with L&T</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Computer Science/Technical Vocational Subject with minimum aggregate marks of 45%.</p>
            <section>&nbsp;</section>
        `,
    },
    {
      course: "B.Tech. in Electrical Engineering (Lateral Entry) with L&T",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-ee-ev-engineering-lateral-entry",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in Electrical Engineering (Lateral Entry) with L&T</h2>
            <p>Candidate must have passed 3 or 4 year Diploma in technical stream from institutions recognized by AICTE or a State Board of Technical Education or B.Sc. degree in Biology/ Microbiology/ Botony/ Zoology/ Chemistry/ Physics/ Maths/ Physiology/ Biotechnology/ Biochemistry/ Agriculture with minimum aggregate marks of 45% or 5.0 CGPA for GEN/OBC and 40% marks or 4.5 CGPA for SC/ST Category.</p>
            <section>&nbsp;</section>
        `,
    },
    {
      course: "B.Tech. in Electronics & Communication Engineering with L&T",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-ece-ev-engineering",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in Electronics & Communication Engineering with L&T</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Computer Science/Technical Vocational Subject with minimum aggregate marks of 45%.</p>
            <section>&nbsp;</section>
        `,
    },
    {
      course: "B.Tech. in Electronics & Communication Engineering (Lateral Entry) with L&T",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/b-tech-ece-ev-engineering-lateral-entry",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in Electronics & Communication Engineering (Lateral Entry) with L&T</h2>
            <p>Candidate must have passed 3 or 4 year Diploma in technical stream from institutions recognized by AICTE or a State Board of Technical Education or B.Sc. degree in Biology/ Microbiology/ Botony/ Zoology/ Chemistry/ Physics/ Maths/ Physiology/ Biotechnology/ Biochemistry/ Agriculture with minimum aggregate marks of 45% or 5.0 CGPA for GEN/OBC and 40% marks or 4.5 CGPA for SC/ST Category.</p>
            <section>&nbsp;</section>
        `,
    },
    {
      course: "B.Tech. in ECE (Semiconductor Design) with L&T",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,52,000/-",
      link: "program/btech-ece-semiconductor-design",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in ECE (Semiconductor Design) with L&T</h2>
            <p>The B.Tech in Electronics & Communication Engineering (Semiconductor Design) at Shri Ramswaroop Memorial University (SRMU), Lucknow is a future-focused engineering program designed to prepare students for careers in the rapidly expanding semiconductor and electronics industry.</p>
        `,
    },
  ],
};

export const ElectricalAndElectronicsfacultyDetails: FacultyItem[] = [
  {
    id: 1,
    name: "Dr. Vijay Laxmi Mishra",
    designation: "Assistant Professor",
    image: vijayLaxmi,
    cardBgColor: "transparent",
  },

  {
    id: 2,
    name: "Dr. Mritunjay Rai",
    designation: "Assistant Professor",
    image: mritunjayRai,
    cardBgColor: "transparent",
  },

  {
    id: 3,
    name: "Dr. Vaibhava Srivastava",
    designation: "Assistant Professor",
    image: vaibhavaSrivastava,
    cardBgColor: "transparent",
  },

  {
    id: 4,
    name: "Mr. Pappu Kumar",
    designation: "Assistant Professor",
    image: pappu,
    cardBgColor: "transparent",
  },

  {
    id: 5,
    name: "Dr. Chhavi Mitharwal",
    designation: "Assistant Professor",
    image: chhaviMitharwal,
    cardBgColor: "transparent",
  },

  {
    id: 6,
    name: "Dr. Gaurav Verma",
    designation: "Assistant Professor",
    image: gauravVerma,
    cardBgColor: "transparent",
  },

  {
    id: 7,
    name: "Mr. Rohit Kumar",
    designation: "Assistant Professor",
    image: rohitKumar,
    cardBgColor: "transparent",
  },

  {
    id: 8,
    name: "Mr. Sandeep Tiwari",
    designation: "Assistant Professor",
    image: sandeepTiwari,
    cardBgColor: "transparent",
  },

  {
    id: 9,
    name: "Prof. (Dr.) R.S. Bajpai",
    designation: "Professor",
    image: rsBajpai,
    cardBgColor: "transparent",
  },

  {
    id: 10,
    name: "Ms. Shivani Singh",
    designation: "Assistant Professor-On Maternity Leave",
    image: shivaniSingh,
    cardBgColor: "transparent",
  },

  {
    id: 11,
    name: "Dr. Shubham Mishra",
    designation: "Assistant Professor",
    image: shubhaMishra,
    cardBgColor: "transparent",
  },

  {
    id: 12,
    name: "Mr. Sandeep Dixit",
    designation: "Assistant Professor",
    image: sandeepDixit,
    cardBgColor: "transparent",
  },

  {
    id: 13,
    name: "Dr. Jay Kumar Pandey",
    designation: "Assistant Professor",
    image: jayKumarPandey,
    cardBgColor: "transparent",
  },

  {
    id: 14,
    name: "Mr. Anand Prakash Pandey",
    designation: "Assistant Professor",
    image: anandPrakash,
    cardBgColor: "transparent",
  },

  {
    id: 15,
    name: "Mr. Abhishek Kumar Saxena",
    designation: "Assistant Professor",
    image: abhishekSaxena,
    cardBgColor: "transparent",
  },

  {
    id: 16,
    name: "Dr. Alkesh Agarwal",
    designation: "Associate Professor",
    image: alkesh,
    cardBgColor: "transparent",
  },
];

export const DepartmentOfElectricalAndElectronicsEngineeringVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: misionImg,
    heading: "Mission",
    points: [
      "To prepare engineering graduates with deep understanding of the fundamentals of Electrical & Electronics Engineering.",
      "To collaborate with industry, research organizations and academia for encouraging creativity and innovation.",
      "To achieve excellence in teaching and to provide a platform for developing new products and systems that can help industry and society as a whole.",
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: visionImg,
    heading: "Vision",
    points: ["To impart quality education in the field of Electrical & Electronics Engineering and to produce globally competent engineers to serve the society."],
  },
];

export const DepartmentOfElectricalAndElectronicsPlacedStudents: Student[] = [
  { name: "Lavisha Rupani", program: "B.Tech. in Electrical Engineering", company: "Cognizant" },
  { name: "Gaurav Tiwari", program: "B.Tech. in Electrical Engineering", company: "Cognizant" },
  { name: "Sudhanshu Ranjan", program: "B.Tech. in Electrical Engineering", company: "Hettich" },
  { name: "Abhinav Singh", program: "B.Tech. in Electrical Engineering", company: "PayTM" },
  { name: "Gauri Pandey", program: "B.Tech. in Electrical Engineering", company: "Collabera" },
  { name: "Sakshi Mishra", program: "B.Tech. in Electrical Engineering", company: "Edge Technosoft" },
  { name: "Ishika Jindal", program: "B.Tech. in Electrical Engineering", company: "Planet Spark" },
  { name: "Aditya Gupta", program: "B.Tech. in Electrical Engineering", company: "Yes Papers" },
  { name: "Shivam Kumar Rai", program: "B.Tech. in Electrical Engineering", company: "Collabera" },
  { name: "Avanish Chaudhary", program: "B.Tech. in Electrical Engineering", company: "Collabera" },
  { name: "Murlee Dhar Joshee", program: "B.Tech. in Electrical Engineering", company: "Teachnook" },
  { name: "Shahsank Kumar", program: "B.Tech. in Electrical Engineering", company: "Through Nextgen Ventures" },
  { name: "Arunima Srivastava", program: "B.Tech. in Electrical Engineering", company: "Teachnook" },
  { name: "Gaurav Tiwari", program: "B.Tech. in Electrical Engineering", company: "Windmoller" },
  { name: "Sumit Singh", program: "B.Tech. in Electrical Engineering", company: "VDart" },
];
