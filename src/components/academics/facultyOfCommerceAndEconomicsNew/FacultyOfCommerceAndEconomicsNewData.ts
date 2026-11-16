import {
    Activity,
    Banknote,
    BookOpenCheck,
    BriefcaseBusiness,
    ChartNoAxesColumnIncreasing,
    GraduationCap,
    Landmark,
    Microscope,
    Presentation,
    UsersRound,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import { facultyDataCommerceAndEconomics } from "../../../data/academics/institute/institute-department/institute-of-management-commerce-and-economics-data/institute-of-management-commerce-and-economics-data";
import departmentBanner from "../../../assets/images/academics/institutes/economics--08022401082492.webp";
import departmentOverview from "../../../assets/images/academics/departments/commerce-07052412092026.webp";
import practicalLearningImage from "../../../assets/images/academics/institutes/learning-.webp";
import researchImage from "../../../assets/images/academics/institutes/researchpapers-.webp";
import financeImage from "../../../assets/images/academics/institutes/skill-.webp";
import industryImage from "../../../assets/images/academics/institutes/corporate-manag-.webp";
import seminarImage from "../../../assets/images/academics/institutes/training-.webp";

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

const commerceFaculty = facultyDataCommerceAndEconomics.map((member) => {
    const name = member.name.replace(/^(Ms|Mr|Dr)\./, "$1. ");
    const isHead = name.includes("Veena Singh");

    return {
        id: String(member.id),
        name,
        role: isHead ? "Head of the Faculty · Commerce and Economics" : member.designation,
        img: member.image,
        isHod: isHead,
        ...(isHead
            ? {
                qualification: "Ph.D. in Finance, University of Allahabad; M.A. in Economics",
                experience: "20+ years",
                email: "hod.commerceeconomics@srmu.ac.in",
                contact: "+91-7599122275",
                specialization: [
                    "Finance and International Trade",
                    "Corporate Social Responsibility",
                    "Microfinance",
                    "Women Entrepreneurship",
                    "Agricultural Economics",
                ],
                expertise: "Dr. Veena Singh is a research supervisor specializing in finance and international trade. Her academic work includes research supervision, scholarly publications, book chapters, and edited volumes.",
            }
            : {}),
    };
});

export const facultyOfCommerceAndEconomicsNewData: CustomDepartmentNewData = {
    hero: {
        prefix: "Faculty of",
        title: "Commerce and Economics",
        backgroundImage: departmentBanner,
        stats: [
            { v: "2012", l: "Established" },
            { v: "18", l: "Faculty Members" },
            { v: "350", l: "Students" },
            { v: "05", l: "Programs" },
        ],
        quickStats: [
            { value: "2012", label: "Established" },
            { value: "18", label: "Faculty Members" },
            { value: "350", label: "Students" },
            { value: "05", label: "Programs" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Faculty of Commerce and Economics",
        paragraphs: [
            "The Faculty of Commerce and Economics at Shri Ramswaroop Memorial University (SRMU) provides students with an academic foundation in commerce, economics, accounting, finance, and business studies. The faculty aims to develop individuals with analytical thinking, financial understanding, economic awareness, and professional competencies.",
            "Through undergraduate and postgraduate programmes, students explore key areas such as financial accounting, business economics, taxation, financial management, business law, economic policies, and contemporary commercial practices.",
            "The academic approach combines classroom teaching with practical assignments, case studies, presentations, research activities, and interactive learning. Students are encouraged to understand financial systems, analyze economic developments, and apply theoretical concepts to real-world business and economic situations.",
            "The faculty strives to prepare graduates for opportunities in banking, finance, accounting, taxation, research, corporate organizations, government services, and higher education.",
        ],
        preview: "The Faculty of Commerce and Economics at Shri Ramswaroop Memorial University (SRMU) provides students with an academic foundation in commerce, economics, accounting, finance, and business studies.",
        image: departmentOverview,
        imageAlt: "Commerce and economics learning at SRMU",
    },
    missionVision: {
        missionItems: [
            "To provide quality education in commerce and economics through a comprehensive and industry-relevant curriculum.",
            "To develop analytical, financial, managerial, and research-oriented skills among students.",
            "To encourage critical thinking and practical understanding of commercial and economic concepts.",
            "To promote ethical values, professional integrity, and responsible decision-making.",
            "To create opportunities for academic research, innovation, and continuous professional development.",
        ],
        visionText: "To become a center of excellence in commerce and economics education by nurturing knowledgeable, analytical, and socially responsible professionals capable of contributing to business, financial systems, and economic development.",
    },
    programs: [
        {
            category: "Undergraduate",
            mobileLabel: "UG",
            badge: "Undergraduate",
            icon: GraduationCap,
            programs: [
                {
                    title: "B.Com. (Hons.) with L&T",
                    description: "An industry-integrated commerce programme connecting academic learning with contemporary professional requirements.",
                    icon: BriefcaseBusiness,
                    link: "/program/b-com-hons-with-l-t",
                },
                {
                    title: "B.A. (Hons.) in Economics",
                    description: "Study economic theory, markets, public policy, and economic development.",
                    icon: ChartNoAxesColumnIncreasing,
                    link: "/program/b-a-hons-economics",
                },
                {
                    title: "B.Com.",
                    description: "A four-year undergraduate programme covering accounting, finance, taxation, and commercial practices.",
                    icon: Banknote,
                    link: "/program/b-com",
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
                    title: "M.Com.",
                    description: "A two-year postgraduate programme in commerce and related disciplines.",
                    icon: Landmark,
                    link: "/program/m-com",
                },
                {
                    title: "M.Sc. in Economics",
                    description: "Postgraduate study in economics, financial systems, and economic analysis.",
                    icon: ChartNoAxesColumnIncreasing,
                    link: "/program/m-sc-economics",
                },
            ],
        },
    ],
    programHeadingBefore: "Explore",
    programHeadingHighlight: "Our Programs",
    labs: {
        headingBefore: "Practical Learning &",
        headingHighlight: "Academic Exposure",
        intro: "The Faculty of Commerce and Economics at SRMU emphasizes application-based learning to help students understand the practical relevance of commerce, finance, and economic principles. Through academic projects, financial analysis, case studies, presentations, research assignments, and interactive sessions, students develop the ability to interpret financial information, understand economic trends, and evaluate business decisions.",
        items: [
            { num: "01", title: "Accounting & Financial Management", desc: "Develop an understanding of financial accounting, cost accounting, financial reporting, budgeting, and financial decision-making.", accent: "#D62C2B", icon: Banknote, animClass: "lab-icon-float" },
            { num: "02", title: "Banking & Financial Services", desc: "Explore banking operations, financial markets, investment fundamentals, and the functioning of financial institutions.", accent: "#1B4F91", icon: Landmark, animClass: "lab-icon-pulse" },
            { num: "03", title: "Business & Corporate Studies", desc: "Understand business organization, commercial laws, taxation, corporate practices, and business management principles.", accent: "#D62C2B", icon: BriefcaseBusiness, animClass: "lab-icon-orbital" },
            { num: "04", title: "Economics & Policy Analysis", desc: "Study microeconomics, macroeconomics, economic development, public finance, and contemporary economic policies.", accent: "#1B4F91", icon: ChartNoAxesColumnIncreasing, animClass: "lab-icon-network" },
            { num: "05", title: "Research & Data Analysis", desc: "Develop analytical and research skills through economic studies, financial data interpretation, and academic projects.", accent: "#D62C2B", icon: Microscope, animClass: "lab-icon-glow" },
            { num: "06", title: "Industry-Integrated Learning", desc: "Gain exposure to industry-oriented learning through B.Com. (Hons.) with L&T, connecting commerce education with contemporary professional requirements.", accent: "#1B4F91", icon: Activity, animClass: "lab-icon-stack" },
        ],
    },
    highlights: {
        headingBefore: "What Makes the Faculty of Commerce and Economics",
        headingHighlight: "Different at SRMU?",
        items: [
            { num: "01", title: "Comprehensive Academic Programmes", desc: "Programmes across commerce and economics help students develop knowledge in accounting, finance, business studies, and economic principles.", icon: GraduationCap },
            { num: "02", title: "Industry-Integrated Learning", desc: "B.Com. (Hons.) with L&T offers an industry-oriented learning pathway connected to professional requirements.", icon: BriefcaseBusiness },
            { num: "03", title: "Strong Foundation in Finance & Accounting", desc: "Students develop an understanding of financial management, accounting practices, taxation, and commercial operations.", icon: Banknote },
            { num: "04", title: "Analytical & Research-Oriented Education", desc: "The academic approach encourages students to analyze financial information, interpret economic developments, and build research capabilities.", icon: Microscope },
            { num: "05", title: "Practical Learning Approach", desc: "Presentations, case studies, academic projects, and interactive sessions connect classroom learning with real-world applications.", icon: Presentation },
            { num: "06", title: "Diverse Career Pathways", desc: "Commerce and economics education provides a foundation for careers in banking, finance, accounting, taxation, research, consulting, and higher education.", icon: UsersRound },
        ],
    },
    events: {
        headingBefore: "From Classroom Concepts to",
        headingHighlight: "Real-World Applications",
        sectionSubtitle: "",
        intro: "The faculty encourages students to participate in academic and co-curricular activities that connect theoretical knowledge with practical applications in commerce and economics.",
        cards: [
            card("GUEST LECTURES", "Expert Sessions", "Expert sessions introduce students to emerging trends in commerce, banking, finance, economics, and business practices.", seminarImage, "Commerce, banking, finance, economics, and business"),
            card("WORKSHOPS & SEMINARS", "Interactive Learning", "Interactive learning sessions focus on accounting practices, financial literacy, taxation, economic developments, and professional skills.", practicalLearningImage, "Accounting, financial literacy, taxation, and professional skills"),
            card("INDUSTRY INTERACTIONS", "Learning from Professionals", "Engagement with professionals helps students understand corporate practices, financial systems, and evolving industry expectations.", industryImage, "Corporate practices and financial systems"),
            card("STUDENT PRESENTATIONS", "Ideas, Analysis & Discussion", "Academic presentations and group discussions strengthen communication, analytical thinking, and subject knowledge.", financeImage, "Communication, analysis, and subject knowledge"),
            card("RESEARCH ACTIVITIES", "Exploring Current Issues", "Research-based assignments and academic discussions encourage students to explore contemporary economic and financial issues.", researchImage, "Contemporary economic and financial issues"),
            card("ACADEMIC PROJECTS", "Applying What Students Learn", "Practical assignments and projects help students apply accounting, commerce, and economic concepts to real-world scenarios.", departmentOverview, "Commerce and economics applications"),
        ],
    },
    activitySections: [
        {
            id: "research-publications",
            eyebrow: "Research & Publications",
            heading: "Knowledge Development in Commerce and Economics",
            intro: "The Faculty of Commerce and Economics encourages academic research and knowledge development across commerce, finance, accounting, and economics. Faculty members and students are encouraged to explore contemporary economic developments, financial systems, business practices, and emerging commercial trends through research projects, academic publications, conferences, and seminars.",
            cards: [
                card("RESEARCH AREA", "Commerce & Accounting", "Academic inquiry explores accounting practice, commercial operations, taxation, and business management.", financeImage),
                card("RESEARCH AREA", "Finance & Financial Systems", "Research and academic discussion consider financial systems, banking, investment, and contemporary financial developments.", researchImage),
                card("RESEARCH AREA", "Economics & Policy", "Students and faculty explore economic development, economic trends, and policy issues through research assignments and academic activities.", practicalLearningImage),
            ],
        },
    ],
    career: {
        heading: "Where Can a Degree in Commerce and Economics Take You?",
        items: [
            ["Accountant"],
            ["Financial", "Analyst"],
            ["Banking", "Professional"],
            ["Tax", "Consultant"],
            ["Investment", "Analyst"],
            ["Economic", "Research Analyst"],
            ["Business", "Analyst"],
            ["Financial", "Consultant"],
            ["Auditor"],
            ["Corporate Finance", "Executive"],
            ["Market Research", "Analyst"],
            ["Academic", "Researcher"],
        ],
        descriptions: [
            { title: "Accounting", description: "Accountant" },
            { title: "Financial Analysis", description: "Financial Analyst" },
            { title: "Banking", description: "Banking Professional" },
            { title: "Taxation", description: "Tax Consultant" },
            { title: "Investment", description: "Investment Analyst" },
            { title: "Economic Research", description: "Economic Research Analyst" },
            { title: "Business Analysis", description: "Business Analyst" },
            { title: "Financial Services", description: "Financial Consultant" },
            { title: "Audit", description: "Auditor" },
            { title: "Corporate Finance", description: "Corporate Finance Executive" },
            { title: "Market Research", description: "Market Research Analyst" },
            { title: "Higher Education", description: "Academic Researcher" },
        ],
    },
    showCareerDescriptionCards: false,
    facultySection: {
        members: commerceFaculty,
        headingText: "Meet Our",
        headingHighlight: "Faculty",
        subheading: "Faculty members bring academic expertise across commerce, economics, accounting, finance, and business studies.",
        featuredLabel: "HEAD OF THE FACULTY",
        featuredDescription: "Dr. Veena Singh leads the Faculty of Commerce and Economics and supports teaching, research, and student mentorship across finance and economics.",
        profileDescription: "Faculty members support commerce and economics education through teaching, research, academic projects, and student guidance.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "What courses are offered by the Faculty of Commerce and Economics at SRMU?", a: "The faculty offers undergraduate and postgraduate programmes, including B.Com., B.Com. (Hons.) with L&T, B.A. (Hons.) in Economics, M.Com., and M.Sc. in Economics." },
        { q: "What is the duration of B.Com. at SRMU?", a: "The B.Com. programme has a duration of four years." },
        { q: "Does SRMU offer B.Com. with industry collaboration?", a: "Yes. SRMU offers B.Com. (Hons.) with L&T, an industry-integrated programme designed to connect commerce education with professional learning." },
        { q: "What is the duration of M.Com. at SRMU?", a: "The M.Com. programme is a two-year postgraduate programme." },
        { q: "What subjects are covered in commerce programmes?", a: "Commerce programmes cover areas such as financial accounting, business economics, taxation, financial management, business law, and corporate practices." },
        { q: "What career opportunities are available after B.Com.?", a: "Graduates can explore careers in accounting, banking, taxation, financial services, auditing, corporate finance, and business operations." },
        { q: "What career options are available after studying economics?", a: "Economics graduates can pursue opportunities in economic research, financial analysis, banking, policy analysis, consulting, and academic research." },
        { q: "What is the difference between a B.Com. and a B.A. (Hons.) in Economics?", a: "B.Com. focuses on accounting, finance, taxation, and commercial practices, whereas B.A. (Hons.) in Economics focuses on economic theories, markets, public policies, and economic analysis." },
        { q: "Does SRMU provide scholarships for commerce and economics students?", a: "Yes. Eligible students can apply for applicable university scholarship schemes subject to the prescribed eligibility criteria." },
        { q: "How can I apply for commerce and economics programmes at SRMU?", a: "Students can visit the official SRMU admission portal, explore programme details, check eligibility and fee information, and complete the online application process." },
    ],
    showFaculty: true,
    showScholarships: true,
    showBlogs: true,
};
