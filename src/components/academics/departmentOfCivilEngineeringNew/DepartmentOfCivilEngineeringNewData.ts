import {
    Activity,
    Cpu,
    Factory,
    GraduationCap,
    Lightbulb,
    Microscope,
    Settings,
    Wrench,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import departmentBanner from "../../../assets/images/academics/departments/civil-07052411084968.webp";
import departmentOverview from "../../../assets/images/home/departmentalvideos/civil.png";
import industryExposureImage from "../../../assets/images/academics/institutes/training-.webp";
import practicalLearningImage from "../../../assets/images/academics/institutes/skill-.webp";
import designLearningImage from "../../../assets/images/academics/institutes/learning-.webp";
import researchLearningImage from "../../../assets/images/academics/institutes/researchpapers-.webp";

const activityCard = (
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

export const departmentOfCivilEngineeringNewData: CustomDepartmentNewData = {
    navSections: [
        { id: "overview", label: "Overview" },
        { id: "programs", label: "Programmes" },
        { id: "labs", label: "Labs & Practical Learning" },
        { id: "events", label: "Activities" },
        { id: "research-publications", label: "Research" },
        { id: "faq", label: "FAQs" },
    ],
    hero: {
        prefix: "Department of",
        title: "Civil Engineering",
        backgroundImage: departmentBanner,
        stats: [
            { v: "08", l: "Programme Options", delay: "0ms" },
            { v: "07", l: "Key Learning Areas", delay: "90ms" },
            { v: "06", l: "Practical Learning Areas", delay: "180ms" },
            { v: "12", l: "Career Roles", delay: "270ms" },
        ],
        quickStats: [
            { value: "08", label: "Programme Options" },
            { value: "07", label: "Key Learning Areas" },
            { value: "06", label: "Practical Learning Areas" },
            { value: "12", label: "Career Roles" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Department",
        subtitle: "Civil Engineering at SRMU",
        paragraphs: [
            "The Department of Civil Engineering focuses on developing skilled professionals equipped to contribute to the planning, design, construction, and maintenance of modern infrastructure. The department emphasizes fundamental engineering principles, practical learning, technical skills, and industry exposure.",
            "Students explore structural engineering, surveying, construction technology, infrastructure development, and computer-aided design. Exposure to industry practices, including visits to organizations such as Larsen & Toubro (L&T), helps students understand how engineering concepts are applied in real-world construction and infrastructure projects.",
            "Civil engineering combines theoretical knowledge with practical application. Students develop their understanding through technical exercises, design-based learning, surveying practices, and project-oriented activities.",
        ],
        preview: "The Department of Civil Engineering develops skilled professionals for the planning, design, construction, and maintenance of modern infrastructure through engineering fundamentals, practical learning, technical skills, and industry exposure.",
        image: departmentOverview,
        imageAlt: "Civil engineering drawing and industry exposure at SRMU",
    },
    missionVision: {
        missionItems: [
            "To provide quality education in core areas of civil engineering.",
            "To develop technical, analytical, and problem-solving skills through practical learning.",
            "To encourage innovation, research, and sustainable engineering practices.",
            "To connect academic learning with industry requirements and professional standards.",
            "To promote ethical values and social responsibility among future engineers.",
        ],
        visionText: "To develop competent civil engineering professionals who contribute to sustainable infrastructure development through technical knowledge, innovation, and responsible engineering practices.",
    },
    programHeadingBefore: "Explore",
    programHeadingHighlight: "Programmes",
    programs: [
        {
            category: "Undergraduate Programmes",
            mobileLabel: "Undergraduate",
            badge: "B.Tech.",
            icon: GraduationCap,
            programs: [
                {
                    title: "B.Tech. in Civil Engineering with L&T",
                    description: "Study civil engineering with exposure to construction and infrastructure practices.",
                    icon: Factory,
                    link: "/program/b-tech-civil-engineering",
                },
                {
                    title: "B.Tech. in Civil Engineering (Lateral Entry)",
                    icon: GraduationCap,
                    link: "/program/b-tech-civil-engineering-lateral-entry",
                },
            ],
        },
        {
            category: "Diploma Programmes",
            mobileLabel: "Diploma",
            badge: "Diploma",
            icon: Wrench,
            programs: [
                {
                    title: "Diploma in Civil Engineering",
                    icon: Wrench,
                    link: "/program/diploma-civil-engineering",
                },
                {
                    title: "Diploma in Civil Engineering (Lateral Entry)",
                    icon: GraduationCap,
                    link: "/program/diploma-civil-engineering-lateral-entry",
                },
            ],
        },
        {
            category: "Postgraduate Programmes",
            mobileLabel: "Postgraduate",
            badge: "M.Tech.",
            icon: Cpu,
            programs: [
                {
                    title: "M.Tech. in Structural Engineering",
                    icon: Settings,
                    link: "/program/m-tech-structural-engineering",
                },
                {
                    title: "M.Tech. in Structural Engineering (Part Time)",
                    icon: Settings,
                    link: "/program/m-tech-structural-engineering-part-time",
                },
                {
                    title: "M.Tech. in Environmental Engineering",
                    icon: Lightbulb,
                    link: "/program/m-tech-environmental-engineering",
                },
                {
                    title: "M.Tech. in Environmental Engineering (Part Time)",
                    icon: Lightbulb,
                    link: "/program/m-tech-environmental-engineering-part-time",
                },
            ],
        },
    ],
    labs: {
        headingBefore: "Key Practical",
        headingHighlight: "Learning Areas",
        intro: "Practical learning connects civil engineering principles with design, surveying, construction methods, and infrastructure development.",
        items: [
            { num: "01", title: "Surveying & Geomatics", desc: "Understand land measurement, levelling, and surveying techniques.", accent: "#d62c2b", icon: Activity, animClass: "lab-icon-orbital" },
            { num: "02", title: "Structural Engineering", desc: "Learn the principles of structural analysis and design.", accent: "#1B4F91", icon: Settings, animClass: "lab-icon-pulse" },
            { num: "03", title: "Construction Technology", desc: "Explore construction materials, methods, and processes.", accent: "#14284E", icon: Factory, animClass: "lab-icon-float" },
            { num: "04", title: "Computer-Aided Design", desc: "Develop technical drawing and design skills using tools such as AutoCAD.", accent: "#d62c2b", icon: Cpu, animClass: "lab-icon-network" },
            { num: "05", title: "Infrastructure Projects", desc: "Understand the planning and development of buildings, roads, and other infrastructure.", accent: "#1B4F91", icon: Wrench, animClass: "lab-icon-stack" },
            { num: "06", title: "Environmental Engineering", desc: "Explore sustainable approaches to environmental management and infrastructure.", accent: "#14284E", icon: Lightbulb, animClass: "lab-icon-glow" },
        ],
    },
    highlights: {
        headingBefore: "Why Study Civil Engineering at",
        headingHighlight: "SRMU?",
        items: [
            { num: "01", title: "INDUSTRY-ORIENTED LEARNING", desc: "Industry exposure helps students understand professional engineering practices and construction projects.", icon: Factory },
            { num: "02", title: "PRACTICAL SKILL DEVELOPMENT", desc: "Learning activities include surveying, structural engineering, construction technology, and design.", icon: Wrench },
            { num: "03", title: "L&T INDUSTRY EXPOSURE", desc: "Industry visits help students learn about construction and infrastructure practices.", icon: Activity },
            { num: "04", title: "INFRASTRUCTURE-FOCUSED CURRICULUM", desc: "Students study important areas of civil engineering, from structural design and surveying to construction technology.", icon: GraduationCap },
            { num: "05", title: "PROJECT-BASED LEARNING", desc: "Project-oriented activities help students apply theoretical concepts to engineering challenges.", icon: Settings },
            { num: "06", title: "CAREER DEVELOPMENT", desc: "The department focuses on technical knowledge, professional skills, and industry readiness.", icon: Microscope },
        ],
    },
    events: {
        headingBefore: "Learning Beyond the",
        headingHighlight: "Classroom",
        sectionSubtitle: "Academic Activities & Industry Exposure",
        intro: "Civil engineering students gain exposure to practical applications through academic activities, industry interactions, technical workshops, and project-based learning.",
        cards: [
            activityCard(
                "EXPERT INTERACTION",
                "Guest Lectures & Technical Sessions",
                "Expert interactions and technical sessions introduce students to developments, professional practices, and specialised areas of civil engineering.",
                industryExposureImage,
                "Professional practices and emerging developments",
            ),
            activityCard(
                "INDUSTRY VISIT",
                "Construction & Infrastructure Exposure",
                "Industrial visits, including exposure to organizations such as Larsen & Toubro (L&T), help students connect engineering concepts with construction and infrastructure projects.",
                departmentOverview,
                "Industry-oriented learning",
            ),
            activityCard(
                "TECHNICAL WORKSHOP",
                "Practical Skills & Engineering Tools",
                "Technical workshops provide opportunities to develop practical skills in engineering tools, construction techniques, design applications, and emerging technologies.",
                practicalLearningImage,
                "Technical skills and design applications",
            ),
        ],
    },
    activitySections: [
        {
            id: "industry-exposure",
            eyebrow: "Industrial Visits & Industry Exposure",
            heading: "Learning from Civil Engineering Workplaces",
            intro: "Industry exposure helps students understand construction processes, infrastructure development, project management, and the application of engineering principles at project sites.",
            cards: [
                activityCard(
                    "L&T INDUSTRY EXPOSURE",
                    "Construction & Infrastructure Practices",
                    "Visits to organizations such as Larsen & Toubro (L&T) help students see how civil engineering concepts are applied in real-world construction and infrastructure projects.",
                    departmentOverview,
                    "Industry connection",
                ),
            ],
        },
        {
            id: "workshops",
            eyebrow: "Workshops & Technical Training",
            heading: "Develop Practical Civil Engineering Skills",
            intro: "Technical exercises, design-based learning, surveying practices, and workshops help students build practical understanding across civil engineering.",
            cards: [
                activityCard(
                    "TECHNICAL LEARNING",
                    "Design, Surveying & Construction",
                    "Students develop skills in technical drawing, computer-aided design, surveying, construction methods, and infrastructure planning.",
                    designLearningImage,
                    "Practical engineering skills",
                ),
            ],
            listTitle: "Practical learning includes",
            listItems: [
                "Surveying and land measurement",
                "Structural analysis and design",
                "Construction materials, methods, and processes",
                "AutoCAD and computer-aided design",
                "Planning buildings, roads, and infrastructure",
                "Sustainable environmental management",
            ],
        },
        {
            id: "student-projects",
            eyebrow: "Student Projects & Innovation",
            heading: "Applying Engineering Concepts to Practical Challenges",
            intro: "Project-oriented activities encourage students to apply civil engineering concepts, develop technical solutions, and strengthen design, analysis, and problem-solving abilities.",
            cards: [
                activityCard(
                    "STUDENT PROJECTS",
                    "Design, Analysis & Problem Solving",
                    "Students apply theoretical concepts through project work and technical exercises related to civil engineering and infrastructure challenges.",
                    researchLearningImage,
                    "Project-oriented activities",
                ),
            ],
        },
    ],
    research: {
        eyebrow: "Research & Innovation",
        heading: "Exploring Sustainable Infrastructure Through Research",
        description: "Research and innovation can help address evolving challenges in infrastructure development, construction, and environmental sustainability.",
        cards: [
            activityCard("RESEARCH AREA", "Structural Engineering & Analysis", "Explore the analysis and design of structures for the built environment.", researchLearningImage),
            activityCard("RESEARCH AREA", "Sustainable Construction Materials", "Study construction materials and practices that support sustainable development.", departmentBanner),
            activityCard("RESEARCH AREA", "Environmental Engineering", "Explore sustainable approaches to environmental management and infrastructure.", practicalLearningImage),
            activityCard("RESEARCH AREA", "Infrastructure Development", "Examine planning and development challenges across buildings, roads, and infrastructure.", departmentOverview),
            activityCard("RESEARCH AREA", "Construction Technology & Management", "Study construction processes, technology, and project management practices.", industryExposureImage),
            activityCard("RESEARCH AREA", "Geotechnical Engineering", "Explore geotechnical considerations in civil engineering and infrastructure projects.", designLearningImage),
            activityCard("RESEARCH AREA", "Smart & Sustainable Infrastructure", "Consider approaches to sustainable infrastructure and evolving engineering needs.", researchLearningImage),
        ],
    },
    career: {
        heading: "Career Opportunities",
        items: [
            ["Civil Engineer"],
            ["Structural Design", "Engineer"],
            ["Site Engineer"],
            ["Construction Project", "Engineer"],
            ["Planning Engineer"],
            ["Quantity Surveyor"],
            ["Quality Control", "Engineer"],
            ["Survey Engineer"],
            ["Geotechnical Engineer"],
            ["Environmental Engineer"],
            ["Infrastructure", "Development Engineer"],
            ["CAD Design Engineer"],
        ],
        descriptions: [],
    },
    community: {
        eyebrow: "CAREER PREPARATION",
        heading: "Preparing Engineers for the Infrastructure Sector",
        paragraphs: [
            "The department aims to prepare students for professional opportunities across construction, infrastructure, structural design, project management, and related engineering sectors.",
            "Students can also pursue postgraduate studies and research in areas such as structural engineering, environmental engineering, geotechnical engineering, and construction management.",
        ],
        focusTitle: "Career Preparation Focus Areas",
        focusAreas: [
            "Technical and domain-specific knowledge",
            "Design and analytical skills",
            "Software and computer-aided design proficiency",
            "Project planning and management",
            "Communication and teamwork",
            "Industry awareness and professional development",
        ],
    },
    faq: [
        {
            q: "What programmes are offered by the Department of Civil Engineering at SRMU?",
            a: "The programme offerings include B.Tech. in Civil Engineering with L&T, B.Tech. in Civil Engineering (Lateral Entry), Diploma in Civil Engineering and its lateral-entry option, M.Tech. in Structural Engineering, and M.Tech. in Environmental Engineering, including part-time options.",
        },
        {
            q: "What are the major areas covered in civil engineering?",
            a: "Students explore structural engineering, surveying and geomatics, construction technology, environmental engineering, infrastructure development, and computer-aided design.",
        },
        {
            q: "Does civil engineering include practical learning?",
            a: "Yes. Practical learning includes technical exercises, design-based learning, surveying practices, project-oriented activities, and exposure to construction and infrastructure practices.",
        },
        {
            q: "How is AutoCAD used in civil engineering?",
            a: "AutoCAD supports technical drawing and design skills relevant to construction and infrastructure projects.",
        },
        {
            q: "What career opportunities are available after civil engineering?",
            a: "Graduates can explore roles such as civil engineer, site engineer, structural design engineer, planning engineer, construction project engineer, quantity surveyor, survey engineer, and environmental engineer.",
        },
        {
            q: "Can students pursue higher studies after a B.Tech. in Civil Engineering?",
            a: "Yes. Students can pursue postgraduate studies in specialised areas such as structural engineering, environmental engineering, geotechnical engineering, and construction management.",
        },
        {
            q: "What is the scope of civil engineering?",
            a: "Civil engineering offers opportunities in construction, infrastructure development, transportation, structural design, environmental management, and urban development.",
        },
        {
            q: "How does industrial exposure help civil engineering students?",
            a: "Industrial exposure helps students understand construction processes, engineering practices, project execution, and the application of classroom concepts in professional environments.",
        },
    ],
    showFaculty: false,
    showScholarships: true,
    showBlogs: true,
    showCareerDescriptionCards: false,
};
