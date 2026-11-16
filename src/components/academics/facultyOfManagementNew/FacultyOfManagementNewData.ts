import {
    Banknote,
    BookOpenCheck,
    BriefcaseBusiness,
    Building2,
    ChartNoAxesColumnIncreasing,
    GraduationCap,
    Handshake,
    HeartPulse,
    Landmark,
    Lightbulb,
    Presentation,
    UsersRound,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import { managementfacultyData } from "../../../data/academics/institute/institute-department/institute-of-management-commerce-and-economics-data/faculty-of-management-data";
import departmentBanner from "../../../assets/images/academics/departments/management1-07052412144882.webp";
import departmentOverview from "../../../assets/images/academics/institutes/corporate-manag-.webp";
import practicalLearningImage from "../../../assets/images/academics/institutes/learning-.webp";
import researchImage from "../../../assets/images/academics/institutes/researchpapers-.webp";
import financeImage from "../../../assets/images/academics/institutes/skill-.webp";
import industryImage from "../../../assets/images/academics/institutes/corporate-manag-.webp";
import seminarImage from "../../../assets/images/academics/institutes/training-.webp";
import leadershipImage from "../../../assets/images/academics/institutes/holistic-.webp";
import researchDevelopmentImage from "../../../assets/images/academics/institutes/researchdevelopment.webp";

const card = (
    tag: string,
    title: string,
    shortDesc: string,
    img: string,
    speaker?: string,
): DepartmentActivityCardNew => ({
    tag,
    title,
    speaker,
    shortDesc,
    readMore: shortDesc,
    img,
});

const managementFaculty = managementfacultyData.map((member) => {
    const isHead = member.name.includes("Madhu Dixit");

    return {
        id: String(member.id),
        name: member.name,
        role: isHead ? "Professor & Head of the Faculty" : member.designation,
        img: member.image,
        isHod: isHead,
        ...(isHead
            ? {
                qualification: "M.B.A., UGC-NET, Ph.D.",
                experience: "20+ years",
                contact: "+91-9839420024",
                specialization: ["Finance", "Marketing", "Research Methodology"],
                expertise: "Prof. (Dr.) Madhu Dixit has over 20 years of academic experience. Her work includes more than 20 research papers, four book chapters, a funded research project, and doctoral supervision.",
            }
            : {}),
    };
});

export const facultyOfManagementNewData: CustomDepartmentNewData = {
    hero: {
        prefix: "Faculty of",
        title: "Management",
        backgroundImage: departmentBanner,
        stats: [
            { v: "2012", l: "Established" },
            { v: "24", l: "Faculty Members" },
            { v: "1,000", l: "Students" },
            { v: "08", l: "Programs" },
        ],
        quickStats: [
            { value: "2012", label: "Established" },
            { value: "24", label: "Faculty Members" },
            { value: "1,000", label: "Students" },
            { value: "08", label: "Programs" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Faculty of Management",
        paragraphs: [
            "The Faculty of Management at Shri Ramswaroop Memorial University (SRMU) aims to nurture future business leaders, entrepreneurs, and management professionals through industry-oriented and application-based education.",
            "The faculty offers undergraduate and postgraduate programmes in business administration, business analytics, AI-augmented FinTech, healthcare and hospital management, and leadership and governance. These programmes are designed to help students understand contemporary business practices, organizational strategies, financial systems, and emerging management trends.",
            "With an emphasis on experiential learning, students develop managerial, analytical, communication, leadership, and decision-making skills through classroom discussions, case studies, business projects, presentations, workshops, and industry interactions.",
            "Industry-integrated programmes in collaboration with L&T EduTech further connect academic learning with professional practices and evolving industry requirements.",
            "The faculty strives to prepare students for diverse career opportunities across corporate organizations, financial services, consulting, healthcare management, entrepreneurship, and other business sectors.",
        ],
        preview: "The Faculty of Management at Shri Ramswaroop Memorial University (SRMU) aims to nurture future business leaders, entrepreneurs, and management professionals through industry-oriented and application-based education.",
        image: departmentOverview,
        imageAlt: "Management students learning about business and organizations",
    },
    missionVision: {
        missionItems: [
            "To provide quality management education through an industry-relevant and continuously evolving curriculum.",
            "To develop leadership, managerial, analytical, and entrepreneurial capabilities among students.",
            "To encourage innovation, critical thinking, and strategic decision-making through practical learning.",
            "To strengthen industry-academia collaboration and connect classroom learning with professional requirements.",
            "To nurture ethical, socially responsible, and globally competent management professionals.",
        ],
        visionText: "To emerge as a center of excellence in management education by developing innovative, ethical, and industry-ready professionals who contribute to business growth, organizational leadership, and economic development.",
    },
    programs: [
        {
            category: "Undergraduate",
            mobileLabel: "UG",
            badge: "Undergraduate",
            icon: GraduationCap,
            programs: [
                {
                    title: "BBA",
                    description: "A three-year programme in business administration, organizational behavior, and management practice.",
                    icon: BriefcaseBusiness,
                    link: "/program/bba-bachelor-of-business-administration",
                },
                {
                    title: "BBA in Business Analytics with L&T",
                    description: "Explore business management, analytical tools, data interpretation, and data-driven decision-making.",
                    icon: ChartNoAxesColumnIncreasing,
                    link: "/program/bba-business-analytics",
                },
                {
                    title: "BBA in AI-Augmented FinTech with L&T",
                    description: "Study technology-enabled financial services and applications of AI in finance.",
                    icon: Banknote,
                    link: "/program/bba-ai-augmented-fintech",
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
                    title: "MBA",
                    description: "A two-year postgraduate programme in business administration and management.",
                    icon: BriefcaseBusiness,
                    link: "/program/mba-master-of-business-administration",
                },
                {
                    title: "MBA in Business Analytics with L&T",
                    description: "Develop management and analytical skills for data-informed organizational decisions.",
                    icon: ChartNoAxesColumnIncreasing,
                    link: "/program/mba-business-analytics",
                },
                {
                    title: "MBA in AI-Augmented FinTech with L&T",
                    description: "Explore leadership in financial services, fintech, and technology-enabled finance.",
                    icon: Banknote,
                    link: "/program/mba-ai-augmented-fintech",
                },
                {
                    title: "MBA in Healthcare & Hospital Management",
                    description: "Study healthcare administration, hospital operations, and healthcare service management.",
                    icon: HeartPulse,
                    link: "/program/m-b-a-healthcare-hospital-management",
                },
                {
                    title: "MBA in Leadership & Governance",
                    description: "Explore leadership principles, governance, strategic planning, and responsible decision-making.",
                    icon: Landmark,
                    link: "/program/m-b-a-leadership-governance",
                },
            ],
        },
    ],
    programHeadingBefore: "Explore",
    programHeadingHighlight: "Our Programs",
    labs: {
        headingBefore: "Practical Learning &",
        headingHighlight: "Experiential Education",
        intro: "The Faculty of Management at SRMU emphasizes practical and experiential learning to help students understand how management concepts are applied in real business environments. Through case studies, business simulations, market research, presentations, group projects, and industry interactions, students develop the ability to analyze business challenges, evaluate opportunities, and make informed decisions.",
        items: [
            { num: "01", title: "Business Administration & Management", desc: "Understand business operations, organizational behavior, strategic management, and managerial decision-making.", accent: "#D62C2B", icon: BriefcaseBusiness, animClass: "lab-icon-float" },
            { num: "02", title: "Business Analytics & Data-Driven Management", desc: "Explore business data, analytical tools, data interpretation, and technology-driven approaches to organizational decision-making.", accent: "#1B4F91", icon: ChartNoAxesColumnIncreasing, animClass: "lab-icon-network" },
            { num: "03", title: "AI-Augmented Financial Technology", desc: "Gain exposure to digital financial services, AI applications in finance, and technology-enabled financial solutions.", accent: "#D62C2B", icon: Banknote, animClass: "lab-icon-pulse" },
            { num: "04", title: "Marketing & Business Development", desc: "Develop knowledge of marketing strategies, consumer behavior, brand management, market research, and business development.", accent: "#1B4F91", icon: Lightbulb, animClass: "lab-icon-glow" },
            { num: "05", title: "Healthcare & Hospital Management", desc: "Understand healthcare administration, hospital operations, healthcare service management, and organizational practices in the healthcare sector.", accent: "#D62C2B", icon: HeartPulse, animClass: "lab-icon-stack" },
            { num: "06", title: "Leadership & Governance", desc: "Explore leadership principles, organizational governance, strategic planning, institutional management, and responsible decision-making.", accent: "#1B4F91", icon: UsersRound, animClass: "lab-icon-orbital" },
            { num: "07", title: "Industry-Integrated Learning", desc: "Programs offered in collaboration with L&T EduTech connect academic knowledge with professional practices and industry-oriented exposure.", accent: "#D62C2B", icon: Handshake, animClass: "lab-icon-float" },
        ],
    },
    highlights: {
        headingBefore: "What Makes the Faculty of Management",
        headingHighlight: "Different at SRMU?",
        items: [
            { num: "01", title: "Industry-Integrated Programs", desc: "Programs in collaboration with L&T EduTech provide exposure to industry-oriented learning in business analytics and AI-Augmented FinTech.", icon: Handshake },
            { num: "02", title: "Specialized Management Education", desc: "Students can explore business administration, healthcare management, financial technology, analytics, and leadership.", icon: GraduationCap },
            { num: "03", title: "Focus on Emerging Technologies", desc: "Business Analytics and AI-Augmented FinTech introduce students to evolving technology-driven business and financial practices.", icon: ChartNoAxesColumnIncreasing },
            { num: "04", title: "Practical & Experiential Learning", desc: "Case studies, business projects, presentations, and interactive activities help students understand real-world management challenges.", icon: Presentation },
            { num: "05", title: "Leadership & Entrepreneurial Development", desc: "Students are encouraged to develop strategic thinking, communication, teamwork, leadership, and entrepreneurial capabilities.", icon: Lightbulb },
            { num: "06", title: "Diverse Career Opportunities", desc: "Management education supports professional opportunities across business, finance, consulting, marketing, healthcare, and corporate administration.", icon: Building2 },
        ],
    },
    events: {
        headingBefore: "From Classroom Concepts to",
        headingHighlight: "Real-World Applications",
        sectionSubtitle: "",
        intro: "Students connect management theory with professional practice through expert-led sessions, industry engagement, business cases, and collaborative projects.",
        cards: [
            card("GUEST LECTURES", "Learning from Industry Experts", "Interactions with industry professionals and academic experts cover contemporary management practices, business trends, leadership, and entrepreneurship.", seminarImage, "Business trends, leadership, and entrepreneurship"),
            card("INDUSTRY INTERACTIONS", "Understanding Organizations", "Students gain exposure to corporate environments, organizational operations, and professional expectations through industry engagement.", industryImage, "Corporate environments and professional expectations"),
            card("WORKSHOPS & SEMINARS", "Exploring Emerging Practices", "Interactive sessions focus on business analytics, financial technology, marketing, leadership, and emerging management practices.", practicalLearningImage, "Analytics, financial technology, marketing, and leadership"),
            card("BUSINESS CASE STUDIES", "Analyzing Real-World Challenges", "Analysis of real-world business situations develops problem-solving, critical thinking, and strategic decision-making skills.", researchImage, "Problem-solving and strategic decision-making"),
            card("MANAGEMENT ACTIVITIES", "Building Teamwork & Leadership", "Business presentations, group discussions, management games, and collaborative activities strengthen teamwork and leadership capabilities.", leadershipImage, "Teamwork and leadership capabilities"),
            card("STUDENT PROJECTS", "Applying Management Knowledge", "Application-based projects allow students to explore business challenges, conduct market research, and develop practical solutions.", financeImage, "Business challenges and market research"),
        ],
    },
    activitySections: [
        {
            id: "research-publications",
            eyebrow: "Research & Publications",
            heading: "Research and Academic Exploration in Management",
            intro: "The Faculty of Management encourages research and academic exploration across contemporary management practices, business analytics, financial technology, organizational behavior, marketing, entrepreneurship, and leadership. Faculty members and students are encouraged to explore emerging business challenges, undertake research projects, publish academic work, and participate in conferences, seminars, and knowledge-sharing initiatives.",
            listTitle: "Research Activities",
            listItems: ["Research Publications", "Faculty Research", "Student Research", "Conferences & Seminars", "Doctoral Research"],
        },
    ],
    career: {
        heading: "Where Can a Degree in Management Take You?",
        items: [
            ["Business", "Analyst"],
            ["Management", "Consultant"],
            ["Marketing", "Manager"],
            ["Financial", "Analyst"],
            ["Human Resource", "Manager"],
            ["Business Development", "Manager"],
            ["Operations", "Manager"],
            ["FinTech", "Analyst"],
            ["Healthcare", "Administrator"],
            ["Hospital Operations", "Manager"],
            ["Project", "Manager"],
            ["Entrepreneur"],
        ],
        descriptions: [
            { title: "Business Analysis", description: "Business Analyst" },
            { title: "Management Consulting", description: "Management Consultant" },
            { title: "Marketing", description: "Marketing Manager" },
            { title: "Financial Services", description: "Financial Analyst" },
            { title: "Human Resources", description: "Human Resource Manager" },
            { title: "Business Development", description: "Business Development Manager" },
            { title: "Operations", description: "Operations Manager" },
            { title: "Financial Technology", description: "FinTech Analyst" },
            { title: "Healthcare Management", description: "Healthcare Administrator" },
            { title: "Hospital Administration", description: "Hospital Operations Manager" },
            { title: "Project Management", description: "Project Manager" },
            { title: "Entrepreneurship", description: "Entrepreneur" },
        ],
    },
    showCareerDescriptionCards: false,
    facultySection: {
        members: managementFaculty,
        headingText: "Meet Our",
        headingHighlight: "Faculty",
        subheading: "The Faculty of Management brings together experienced business educators and researchers across management, finance, marketing, analytics, and organizational leadership.",
        featuredLabel: "HEAD OF THE FACULTY",
        featuredDescription: "Prof. (Dr.) Madhu Dixit leads the Faculty of Management, with academic and research expertise in finance, marketing, and research methodology.",
        profileDescription: "Faculty members support management education through teaching, research, industry engagement, and student mentorship.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "What courses are offered by the Faculty of Management at SRMU?", a: "The faculty offers undergraduate and postgraduate programmes, including BBA, BBA in Business Analytics, BBA in AI-Augmented FinTech, MBA, MBA in Business Analytics, MBA in AI-Augmented FinTech, MBA in Healthcare & Hospital Management, and MBA in Leadership & Governance." },
        { q: "What is the duration of BBA at SRMU?", a: "The BBA programme has a duration of three years." },
        { q: "What is the duration of the MBA at SRMU?", a: "The MBA programme is a two-year postgraduate programme." },
        { q: "Does SRMU offer industry-integrated management programmes?", a: "Yes. SRMU offers industry-integrated BBA and MBA programmes in Business Analytics and AI-Augmented FinTech in collaboration with L&T EduTech." },
        { q: "What is BBA in Business Analytics?", a: "BBA in Business Analytics introduces business management concepts alongside analytical approaches, data interpretation, and data-driven business decision-making." },
        { q: "What is AI-Augmented FinTech?", a: "AI-Augmented FinTech focuses on the intersection of artificial intelligence and financial technology, including technology-driven financial services and emerging applications in finance." },
        { q: "What career opportunities are available after BBA?", a: "BBA graduates can explore opportunities in marketing, business development, sales, human resources, operations, business analysis, and entrepreneurship." },
        { q: "What career opportunities are available after an MBA?", a: "MBA graduates can pursue managerial and leadership opportunities in business administration, consulting, finance, marketing, business analytics, healthcare management, and operations." },
        { q: "Does SRMU offer scholarships for management students?", a: "Yes. Eligible students can explore university scholarship schemes subject to applicable eligibility criteria and scholarship policies." },
        { q: "How can I apply for management programmes at SRMU?", a: "Interested candidates can visit the official SRMU admission portal, explore programme eligibility and fee details, and complete the online application process." },
    ],
    showFaculty: true,
    showScholarships: true,
    showBlogs: true,
};
