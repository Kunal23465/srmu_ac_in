import {
    Activity,
    BookOpenCheck,
    Calculator,
    ChartNoAxesColumnIncreasing,
    Database,
    GraduationCap,
    Lightbulb,
    Microscope,
    Presentation,
    UsersRound,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import type { FacultyMember } from "../departmentOfComputerScienceAndEngineeringNew/DepartmentFaculty";
import { FacultyOfMathematicalAndStatisticalSciencesfacultyData } from "../../../data/academics/institute/institute-department/faculty-of-mathematical-and-statistical-sciences-data";
import departmentBanner from "../../../assets/images/academics/departments/maths1-07022412033456.webp";
import departmentOverview from "../../../assets/images/academics/departments/maths-07022411311165.webp";
import spSSLabImage from "../../../assets/images/academics/departments/maths/facilities-bg-lg.webp";
import conferenceImage from "../../../assets/images/research/publication/NATIONALMATHSCONFERENCE(2)-24112310463276.jpeg";
import numbersLectureImage from "../../../assets/images/academics/departments/wee-0206250448025.webp";
import centralLimitLectureImage from "../../../assets/images/academics/departments/guest7-09052401033814.webp";
import vedicWorkshopImage from "../../../assets/images/academics/departments/workshop3-09052401005812.webp";
import mathematicsConferenceImage from "../../../assets/images/academics/departments/nation6-09052402004527.webp";
import mathematicsSeminarImage from "../../../assets/images/academics/departments/internation1-09052401044878.webp";
import applicationImage from "../../../assets/images/academics/departments/guest6-09052401032821.webp";

const activityCard = (
    tag: string,
    title: string,
    description: string,
    img: string,
    speaker?: string,
): DepartmentActivityCardNew => ({
    tag,
    title,
    speaker,
    shortDesc: description,
    readMore: description,
    img,
});

const mathematicalFaculty: FacultyMember[] = FacultyOfMathematicalAndStatisticalSciencesfacultyData.map((member) => {
    const isDean = member.name === "Prof. (Dr.) V.N. Pathak";

    return {
        id: String(member.id),
        name: member.name,
        role: isDean ? "Professor & Dean" : member.designation,
        img: member.image,
        isHod: isDean,
        ...(isDean ? {
            qualification: "M.Sc. in Mathematics and Ph.D. in Mathematics",
            experience: "22+ years",
            email: "dean.maths@srmu.ac.in",
            contact: "+91-9415063248",
            specialization: ["Differential Geometry", "Operations Research"],
            expertise: "Prof. (Dr.) V.N. Pathak is a senior academician in Mathematics with more than twenty years of teaching and research experience. He has published more than twenty research papers, attended and chaired sessions at national and international conferences, and received the Best Faculty Award three times. He currently guides research scholars in Differential Geometry and Operations Research and serves as Dean of the Faculty of Mathematical and Statistical Sciences.",
        } : {}),
    };
});

export const facultyOfMathematicalAndStatisticalSciencesNewData: CustomDepartmentNewData = {
    navSections: [
        { id: "overview", label: "Overview" },
        { id: "programs", label: "Programmes" },
        { id: "labs", label: "Practical Learning" },
        { id: "events", label: "Activities" },
        { id: "faculty", label: "Faculty" },
        { id: "faq", label: "FAQs" },
    ],
    hero: {
        prefix: "Faculty of",
        title: "Mathematical and Statistical Sciences",
        backgroundImage: departmentBanner,
        stats: [
            { v: "2012", l: "Established", delay: "0ms" },
            { v: "19", l: "Faculty & Staff", delay: "90ms" },
            { v: "455", l: "Students", delay: "180ms" },
            { v: "03", l: "Programmes", delay: "270ms" },
        ],
        quickStats: [
            { value: "2012", label: "Established" },
            { value: "19", label: "Faculty & Staff" },
            { value: "455", label: "Students" },
            { value: "03", label: "Programmes" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Faculty",
        subtitle: "Mathematics, Statistics & Their Applications",
        paragraphs: [
            "Established in 2012, the Faculty of Mathematical and Statistical Sciences is part of the Institute of Natural Sciences and Humanities at Shri Ramswaroop Memorial University. The faculty brings together the study of mathematics and statistics, encouraging students to explore theoretical concepts while understanding their practical applications.",
            "Its academic approach focuses on problem-solving, quantitative reasoning, mathematical modelling, and statistical analysis. Through undergraduate and postgraduate learning, students develop the analytical abilities required for higher education, research, and careers across diverse sectors.",
        ],
        preview: "Established in 2012, the Faculty of Mathematical and Statistical Sciences is part of the Institute of Natural Sciences and Humanities at Shri Ramswaroop Memorial University.",
        image: departmentOverview,
        imageAlt: "Mathematical and statistical sciences learning at SRMU",
    },
    missionVision: {
        missionItems: [
            "Encourage students to pursue mathematics and statistics to acquire knowledge and apply it to emerging challenges.",
            "Help students understand the role of mathematical sciences in solving real-life problems.",
            "Develop the ability to apply mathematical knowledge, supported by computational skills, to interdisciplinary fields.",
            "Strengthen mathematical and statistical skills for research, innovation, and societal development.",
            "Promote participative learning, critical thinking, and professional ethics.",
        ],
        visionText: "To be recognized for excellence in teaching and research by preparing confident undergraduate and postgraduate students who can take up future challenges in higher education, research, and careers in mathematics, statistics, and allied fields.",
    },
    programs: [
        {
            category: "Undergraduate",
            mobileLabel: "UG",
            badge: "Undergraduate",
            icon: GraduationCap,
            programs: [
                {
                    title: "B.Sc. (Hons.) in Mathematics",
                    description: "Build a strong foundation in mathematics, quantitative reasoning, and analytical problem-solving.",
                    icon: Calculator,
                    link: "/program/b-sc-hons-mathematics",
                },
            ],
        },
        {
            category: "Postgraduate",
            mobileLabel: "PG",
            badge: "Postgraduate",
            icon: BookOpenCheck,
            programs: [
                {
                    title: "M.Sc. in Mathematics",
                    description: "Develop advanced mathematical knowledge and prepare for research, higher education, and analytical careers.",
                    icon: ChartNoAxesColumnIncreasing,
                    link: "/program/m-sc-mathematics",
                },
                {
                    title: "M.Sc. in Statistics",
                    description: "Study statistical methods, probability, data analysis, and applications across research and professional fields.",
                    icon: Activity,
                    link: "/program/m-sc-statistics",
                },
            ],
        },
    ],
    programHeadingBefore: "Explore",
    programHeadingHighlight: "Our Programmes",
    labs: {
        headingBefore: "Learning Through",
        headingHighlight: "Practical Application",
        intro: "Mathematics and statistics extend beyond classroom concepts. The faculty encourages students to understand how quantitative methods, computational tools, and analytical techniques are used in academic research and professional settings.",
        learningAreas: [
            "Mathematical Modelling and Problem-Solving",
            "Statistical Analysis and Interpretation",
            "Applied Mathematics",
            "Probability and Data Analysis",
            "Computational Mathematics",
            "Research Methodology",
        ],
        itemsHeading: "Academic and Research Facilities",
        items: [
            { num: "01", title: "SPSS Lab", desc: "Exposure to statistical analysis and interpretation using statistical software.", accent: "#D62C2B", icon: ChartNoAxesColumnIncreasing, animClass: "lab-icon-network" },
            { num: "02", title: "Computer Lab", desc: "Support for computational learning and mathematical applications.", accent: "#1B4F91", icon: Database, animClass: "lab-icon-stack" },
            { num: "03", title: "Research Lab", desc: "An academic environment for research-oriented learning.", accent: "#D62C2B", icon: Microscope, animClass: "lab-icon-glow" },
            { num: "04", title: "Vedic Science Center", desc: "An opportunity to explore traditional Indian mathematical knowledge.", accent: "#1B4F91", icon: Lightbulb, animClass: "lab-icon-pulse" },
            { num: "05", title: "Communication Lab", desc: "Support for developing academic communication skills.", accent: "#D62C2B", icon: Presentation, animClass: "lab-icon-float" },
        ],
    },
    highlights: {
        headingBefore: "A Strong Foundation in",
        headingHighlight: "Mathematical Sciences",
        items: [
            { num: "01", title: "Strong Mathematical Foundation", desc: "Students develop conceptual clarity in mathematics and statistics, preparing for advanced study and professional applications.", icon: GraduationCap },
            { num: "02", title: "Research-Oriented Environment", desc: "Exposure to research papers, conferences, seminars, and academic discussions encourages students to explore mathematical inquiry.", icon: Microscope },
            { num: "03", title: "Competitive Examination Preparation", desc: "A strong academic foundation supports preparation for examinations such as IIT-JAM, JEST, and entrance examinations for central universities.", icon: BookOpenCheck },
            { num: "04", title: "Interdisciplinary Learning", desc: "Mathematical and statistical knowledge connects with applications in science, technology, business, and other fields.", icon: Activity },
            { num: "05", title: "Experienced Faculty", desc: "Students learn from academicians with doctoral qualifications, research experience, and expertise in their fields.", icon: UsersRound },
        ],
    },
    events: {
        headingBefore: "From Classroom Concepts to",
        headingHighlight: "Academic Engagement",
        sectionSubtitle: "",
        intro: "The faculty encourages students to connect mathematical and statistical concepts with contemporary research, emerging applications, and academic discussions through expert lectures, workshops, conferences, and seminars.",
        cards: [
            activityCard("GUEST LECTURE", "Numbers and Their Relevance in Our Daily Life", "The lecture explored the relevance of numbers and mathematical concepts in everyday situations, helping students understand the practical significance of mathematics beyond academic study.", numbersLectureImage, "8 November 2024 | Dr. Preeti Bajpai, Professor of Mathematics, BITS Pilani, Dubai Campus"),
            activityCard("GUEST LECTURE", "An Overview of the Central Limit Theorem", "The session introduced students to the Central Limit Theorem and its importance in statistical reasoning, probability, and data analysis.", centralLimitLectureImage, "21 February 2025 | Prof. (Dr.) Arvind Bhatt"),
            activityCard("INTERNATIONAL CONFERENCE", "Sustainable Innovation: Bridging Research and Industry for a Resilient Future", "The international conference provided an academic platform for discussion on sustainable innovation, research developments, and industry-oriented approaches to contemporary challenges.", conferenceImage, "7–9 April 2025"),
            activityCard("WORKSHOP", "Introduction to Vedic Ganit & Innovations", "The workshop introduced participants to Vedic mathematical methods and their applications, encouraging exploration of traditional approaches to mathematical problem-solving.", vedicWorkshopImage, "21–26 February 2022"),
            activityCard("CONFERENCE", "Recent Trends in Mathematics with Applications", "The conference brought together academic discussions on developments in mathematics and its applications across different fields.", mathematicsConferenceImage, "30–31 January 2020"),
            activityCard("SEMINAR", "Emerging Trends in Mathematics and Its Applications", "The seminar focused on emerging developments in mathematics and their relevance to contemporary academic and practical applications.", mathematicsSeminarImage, "23 March 2023"),
        ],
    },
    activitySections: [
        {
            id: "research-publications",
            eyebrow: "Research, Learning & Applications",
            heading: "Research & Publications",
            intro: "The faculty promotes research-oriented learning and the application of mathematical and statistical methods across academic, scientific, technological, and professional settings.",
            cards: [
                activityCard("ACADEMIC FOUNDATION", "Strong Foundation in Mathematical Sciences", "Students develop conceptual clarity in mathematics and statistics, preparing them for advanced learning and professional applications.", departmentOverview),
                activityCard("RESEARCH ENVIRONMENT", "Research-Oriented Academic Environment", "Exposure to research papers, conferences, seminars, and academic discussions encourages students to explore new areas of mathematical inquiry.", conferenceImage),
                activityCard("EXAM PREPARATION", "Preparation for Competitive Examinations", "The faculty's academic foundation supports students preparing for examinations such as IIT-JAM, JEST, and entrance examinations for central universities.", mathematicsConferenceImage),
                activityCard("INTERDISCIPLINARY LEARNING", "Mathematics Across Disciplines", "Mathematical and statistical knowledge is connected with applications in science, technology, business, and other fields.", applicationImage),
                activityCard("EXPERIENCED FACULTY", "Academic Guidance & Research", "Students learn under academicians with doctoral qualifications, research experience, and expertise in their respective areas.", spSSLabImage),
            ],
        },
    ],
    career: {
        heading: "Career Opportunities",
        items: [
            ["Mathematician"],
            ["Statistician"],
            ["Data Analyst"],
            ["Research Associate"],
            ["Statistical Analyst"],
            ["Quantitative Analyst"],
            ["Academic Researcher"],
            ["Mathematics Educator"],
            ["Operations Research Analyst"],
            ["Risk Analyst"],
        ],
        descriptions: [
            { title: "Mathematics", description: "Mathematician" },
            { title: "Statistics", description: "Statistician" },
            { title: "Data & Analytics", description: "Data Analyst" },
            { title: "Research", description: "Research Associate" },
            { title: "Statistical Analysis", description: "Statistical Analyst" },
            { title: "Quantitative Analysis", description: "Quantitative Analyst" },
            { title: "Higher Education", description: "Academic Researcher" },
            { title: "Teaching", description: "Mathematics Educator" },
            { title: "Operations Research", description: "Operations Research Analyst" },
            { title: "Risk & Finance", description: "Risk Analyst" },
        ],
    },
    facultySection: {
        members: mathematicalFaculty,
        headingText: "What Makes the",
        headingHighlight: "Faculty Different?",
        subheading: "Faculty members bring academic expertise in mathematics, statistics, research, and their applications across interdisciplinary fields. The faculty's academic foundation supports students preparing for examinations such as IIT-JAM, JEST, and entrance examinations for central universities.",
        featuredLabel: "DEAN",
        featuredDescription: "Prof. (Dr.) V.N. Pathak leads the faculty's academic and research work in mathematical sciences, including Differential Geometry and Operations Research.",
        profileDescription: "Faculty members support learning and research across mathematics, statistics, quantitative analysis, and interdisciplinary applications.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "What programmes are offered by the Faculty of Mathematical and Statistical Sciences at SRMU?", a: "The faculty offers B.Sc. (Hons.) in Mathematics, M.Sc. in Mathematics, and M.Sc. in Statistics." },
        { q: "What is the duration of the M.Sc. Mathematics programme?", a: "The M.Sc. Mathematics programme is two years long." },
        { q: "What is the duration of the M.Sc. Statistics programme?", a: "The M.Sc. Statistics programme is two years long." },
        { q: "What is the annual fee for M.Sc. Mathematics at SRMU?", a: "The listed annual fee is ₹47,000. Check the programme page for the latest fee details." },
        { q: "What is the annual fee for M.Sc. Statistics at SRMU?", a: "The listed annual fee is ₹47,000. Check the programme page for the latest fee details." },
        { q: "What subjects are covered in mathematics and statistics?", a: "Students explore mathematical modelling, applied mathematics, probability, statistical analysis, and computational methods." },
        { q: "What career opportunities are available after studying mathematics?", a: "Graduates can explore opportunities in teaching, research, data analysis, quantitative analysis, finance, and other analytical fields." },
        { q: "Does SRMU provide research opportunities in mathematics and statistics?", a: "The faculty supports research activities through scholarly publications, academic conferences, research projects, and doctoral research." },
        { q: "Does the faculty support preparation for competitive examinations?", a: "The faculty's academic foundation can support preparation for examinations such as IIT-JAM, JEST, and entrance examinations for central universities." },
        { q: "Where is SRMU located?", a: "Shri Ramswaroop Memorial University is located on Lucknow–Deva Road, Barabanki, Uttar Pradesh." },
    ],
    showFaculty: true,
    showScholarships: true,
    showBlogs: true,
    showCareerDescriptionCards: false,
};
