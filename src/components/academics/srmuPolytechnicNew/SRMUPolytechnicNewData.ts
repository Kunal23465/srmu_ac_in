import {
    BookOpen,
    Building2,
    Car,
    Cog,
    Factory,
    GraduationCap,
    Lightbulb,
    Monitor,
    Radio,
    ShieldCheck,
    UsersRound,
    Wrench,
    Zap,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import type { FacultyMember } from "../departmentOfComputerScienceAndEngineeringNew/DepartmentFaculty";
import {
    SRMUPolytechnicfacultyData,
    SRMUPolytechnicinstituteProfiles,
} from "../../../data/academics/institute/institute-department/srmu-polytechnic-data";
import polytechnicHero from "../../../assets/images/srmu-polytechnic-new/Polytechnic.webp";
import polytechnicOverview from "../../../assets/images/academics/institutes/polytechnic11-08022412560314.webp";
import civilLabImage from "../../../assets/images/academics/departments/civil-07052411084968.webp";
import mechanicalWorkshopImage from "../../../assets/images/academics/departments/workshop4-0905240105378.webp";
import electricalLabImage from "../../../assets/images/academics/departments/workshop4-0905240159526.webp";
import computerLabImage from "../../../assets/images/new-labo/computer-centres.webp";
import electronicsLabImage from "../../../assets/images/new-labo/engineering-labs.webp";
import automobileWorkshopImage from "../../../assets/images/campus-life/facilities/workshop.jpg";
import industryVisitImage from "../../../assets/images/academics/departments/industrystalwart-06022401542865.webp";
import technicalWorkshopImage from "../../../assets/images/academics/departments/workshop2-0705240116534.webp";
import expertLectureImage from "../../../assets/images/academics/departments/with-ibm-07052412210228.webp";
import projectLearningImage from "../../../assets/images/academics/institutes/diverseprogram.webp";
import technicalSeminarImage from "../../../assets/images/academics/departments/curriculum-07052412202574.webp";
import practicalTrainingImage from "../../../assets/images/academics/institutes/training-.webp";

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

const directorProfile = SRMUPolytechnicinstituteProfiles[0];

const polytechnicFaculty: FacultyMember[] = [
    {
        id: "polytechnic-deputy-director",
        name: directorProfile.name,
        role: directorProfile.position ?? directorProfile.title,
        img: directorProfile.image,
        isHod: true,
    },
    ...SRMUPolytechnicfacultyData.map((member) => ({
        id: String(member.id),
        name: member.name,
        role: member.designation,
        img: member.image,
    })),
];

const diplomaPrograms = [
    { title: "Diploma in Civil Engineering", description: "Three-year diploma programme in civil engineering.", icon: Building2, link: "/diploma-civil-engineering-new" },
    { title: "Diploma in Mechanical Engineering (Production)", description: "Three-year diploma programme in mechanical production engineering.", icon: Cog, link: "/diploma-mechanical-engineering-production-new" },
    { title: "Diploma in Mechanical Engineering (Automobile)", description: "Three-year diploma programme in automobile engineering.", icon: Car, link: "/diploma-mechanical-engineering-automobile-new" },
    { title: "Diploma in Electrical Engineering", description: "Three-year diploma programme in electrical engineering.", icon: Zap, link: "/diploma-electrical-engineering-new" },
    { title: "Diploma in Computer Science Engineering", description: "Three-year diploma programme in computer science engineering.", icon: Monitor, link: "/diploma-computer-science-engineering-new" },
    { title: "Diploma in Electronics & Communication Engineering", description: "Three-year diploma programme in electronics and communication engineering.", icon: Radio, link: "/diploma-electronics-communication-engineering-new" },
];

const lateralEntryPrograms = [
    { title: "Diploma in Civil Engineering (Lateral Entry)", description: "Two-year lateral-entry diploma programme in civil engineering.", icon: Building2, link: "/program/diploma-civil-engineering-lateral-entry" },
    { title: "Diploma in Mechanical Engineering (Production) (Lateral Entry)", description: "Two-year lateral-entry diploma programme in mechanical production engineering.", icon: Cog, link: "/program/diploma-mechanical-engineering-production-lateral-entry" },
    { title: "Diploma in Mechanical Engineering (Automobile) (Lateral Entry)", description: "Two-year lateral-entry diploma programme in automobile engineering.", icon: Car, link: "/program/diploma-mechanical-engineering-automobile-lateral-entry" },
    { title: "Diploma in Electrical Engineering (Lateral Entry)", description: "Two-year lateral-entry diploma programme in electrical engineering.", icon: Zap, link: "/program/diploma-electrical-engineering-lateral-entry" },
    { title: "Diploma in Computer Science Engineering (Lateral Entry)", description: "Two-year lateral-entry diploma programme in computer science engineering.", icon: Monitor, link: "/program/diploma-computer-science-engineering-lateral-entry" },
    { title: "Diploma in Electronics & Communication Engineering (Lateral Entry)", description: "Two-year lateral-entry diploma programme in electronics and communication engineering.", icon: Radio, link: "/program/diploma-electronics-communication-engineering-lateral-entry" },
];

export const srmuPolytechnicNewData: CustomDepartmentNewData = {
    navSections: [
        { id: "overview", label: "Overview" },
        { id: "programs", label: "Programmes" },
        { id: "labs", label: "Labs & Practical Learning" },
        { id: "events", label: "Learning Experiences" },
        { id: "faculty", label: "Faculty" },
        { id: "faq", label: "FAQs" },
    ],
    hero: {
        prefix: "SRMU",
        title: "Polytechnic",
        backgroundImage: polytechnicHero,
        stats: [
            { v: "2015–16", l: "Established", delay: "0ms" },
            { v: "06", l: "Diploma Specialisations", delay: "90ms" },
            { v: "06", l: "Practical Learning Labs", delay: "180ms" },
            { v: "03", l: "Years · Regular Diploma", delay: "270ms" },
        ],
        quickStats: [
            { value: "2015–16", label: "Established" },
            { value: "06", label: "Diploma Specialisations" },
            { value: "06", label: "Practical Learning Labs" },
            { value: "03 Years", label: "Regular Diploma" },
        ],
    },
    overview: {
        headingBefore: "About",
        headingHighlight: "SRMU Polytechnic",
        subtitle: "Technical education after Class 10",
        paragraphs: [
            "Established in the academic session 2015–16, SRMU Polytechnic aims to provide quality technical education to students aspiring to pursue engineering and technology programmes after Class 10. The institute offers diploma programmes in civil engineering, mechanical engineering (production and automobile), electrical engineering, computer science engineering, and electronics & communication engineering.",
            "At SRMU Polytechnic, learning extends beyond conventional classrooms through practical training, laboratory experiments, industrial visits, technical workshops, and project-based activities. The institute focuses on developing technical expertise, problem-solving abilities, and professional competencies that align with evolving industry requirements.",
            "With experienced faculty members, modern laboratories, and an industry-oriented academic approach, SRMU Polytechnic encourages students to transform their technical knowledge into practical skills.",
        ],
        preview: "SRMU Polytechnic combines technical education with practical training, laboratory work, industry exposure, and project-based learning.",
        image: polytechnicOverview,
        imageAlt: "SRMU Polytechnic students and faculty",
    },
    missionVision: {
        missionItems: [
            "To provide contemporary and industry-relevant technical education to aspiring students.",
            "To generate knowledge through technical training, industry visits, and expert interactions.",
            "To develop technical competencies through practical learning and hands-on experiences.",
            "To inculcate moral, ethical, and professional values among students.",
            "To respond effectively to the changing requirements of industries and society.",
            "To promote quality education and skill development across multiple engineering disciplines.",
        ],
        visionText: "To create and sustain an environment of technical education where young minds acquire the knowledge, practical skills, and professional competencies required to contribute to technological advancement and industrial development.",
    },
    programHeadingBefore: "Explore",
    programHeadingHighlight: "Programmes",
    programs: [
        {
            category: "Diploma Programmes",
            mobileLabel: "Diploma",
            badge: "After Class 10",
            icon: GraduationCap,
            programs: diplomaPrograms,
        },
        {
            category: "Diploma Lateral Entry",
            mobileLabel: "Lateral Entry",
            badge: "Second Year Entry",
            icon: GraduationCap,
            programs: lateralEntryPrograms,
        },
    ],
    labs: {
        headingBefore: "Labs &",
        headingHighlight: "Practical Learning",
        intro: "Well-equipped laboratories and workshops give students opportunities to perform experiments, understand engineering principles, and gain hands-on experience with tools, equipment, and technologies.",
        items: [
            { num: "01", title: "Civil Engineering Lab", desc: "Provides practical exposure to construction materials, surveying techniques, structural concepts, and testing methods used in civil engineering projects.", accent: "#d62c2b", icon: Building2, animClass: "lab-icon-network" },
            { num: "02", title: "Mechanical Engineering Workshop", desc: "Enables students to understand manufacturing processes, machining operations, workshop practices, and mechanical components through hands-on training.", accent: "#1B4F91", icon: Cog, animClass: "lab-icon-orbital" },
            { num: "03", title: "Electrical Engineering Lab", desc: "Provides practical learning in electrical circuits, machines, power systems, electrical measurements, and basic electrical installations.", accent: "#14284E", icon: Zap, animClass: "lab-icon-pulse" },
            { num: "04", title: "Computer Science Lab", desc: "Supports programming, computer applications, software fundamentals, database concepts, and digital technology skills through practical exercises.", accent: "#d62c2b", icon: Monitor, animClass: "lab-icon-float" },
            { num: "05", title: "Electronics & Communication Lab", desc: "Introduces students to electronic circuits, communication systems, electronic components, measurements, and basic instrumentation.", accent: "#1B4F91", icon: Radio, animClass: "lab-icon-glow" },
            { num: "06", title: "Automobile Engineering Workshop", desc: "Offers practical exposure to automobile components, engine systems, vehicle mechanisms, maintenance procedures, and automotive technologies.", accent: "#14284E", icon: Car, animClass: "lab-icon-stack" },
        ],
    },
    events: {
        headingBefore: "From Classroom Concepts to",
        headingHighlight: "Real-World Applications",
        sectionSubtitle: "Turning Technical Knowledge into Practical Expertise",
        intro: "SRMU Polytechnic emphasises experiential learning through industrial visits, technical workshops, expert lectures, seminars, and hands-on training. These activities help students understand real-world engineering applications and develop practical competencies for professional environments.",
        cards: [
            card("INDUSTRIAL VISITS", "Learning Through Industry Exposure", "Industrial visits provide opportunities to observe industrial operations, manufacturing processes, engineering applications, and workplace practices.", industryVisitImage),
            card("TECHNICAL WORKSHOPS", "Developing Practical Engineering Skills", "Hands-on workshops introduce students to technical tools, equipment, engineering processes, and emerging technologies relevant to their disciplines.", technicalWorkshopImage),
            card("EXPERT GUEST LECTURES", "Insights from Industry Professionals", "Expert interactions help students understand technological developments, industry expectations, professional challenges, and emerging career opportunities.", expertLectureImage),
            card("PROJECT-BASED LEARNING", "Applying Knowledge Through Innovation", "Technical projects encourage problem-solving, creativity, teamwork, and the practical application of engineering concepts.", projectLearningImage),
            card("TECHNICAL SEMINARS", "Exploring Emerging Technologies", "Academic seminars create opportunities to explore Artificial Intelligence, Electric Vehicles, Renewable Energy, Automation, and other technology-driven domains.", technicalSeminarImage),
            card("APPRENTICESHIP & PRACTICAL TRAINING", "Preparing for Professional Environments", "Practical training and apprenticeship opportunities help students develop workplace awareness, technical proficiency, and professional discipline.", practicalTrainingImage),
        ],
    },
    highlights: {
        headingBefore: "What Makes SRMU",
        headingHighlight: "Polytechnic Different?",
        items: [
            { num: "01", title: "Industry-Oriented Technical Education", desc: "Programs are designed to develop fundamental engineering knowledge alongside practical and technical competencies.", icon: BookOpen },
            { num: "02", title: "Hands-on Learning Experience", desc: "Laboratory sessions, workshops, and practical training help students understand real-world engineering applications.", icon: Wrench },
            { num: "03", title: "Experienced Faculty", desc: "Students receive academic guidance and technical mentoring from qualified faculty members with academic and industry experience.", icon: UsersRound },
            { num: "04", title: "Industrial Exposure", desc: "Industrial visits, expert lectures, and professional interactions help students understand workplace expectations and industry practices.", icon: Factory },
            { num: "05", title: "Emerging Technology Exposure", desc: "Students are encouraged to explore futuristic technologies such as artificial intelligence, cybersecurity, electric vehicles, and mechatronics.", icon: Lightbulb },
            { num: "06", title: "Supportive Learning Environment", desc: "Special academic support and learning interventions help students strengthen their understanding and progress towards their academic goals.", icon: ShieldCheck },
            { num: "07", title: "Career & Placement Support", desc: "Career guidance and placement assistance help students prepare for employment opportunities across relevant technical sectors.", icon: GraduationCap },
        ],
    },
    career: {
        heading: "Where Can a Polytechnic Diploma Take You?",
        items: [
            ["Civil", "Engineering"],
            ["Mechanical", "Production"],
            ["Automobile", "Engineering"],
            ["Electrical", "Engineering"],
            ["Computer Science", "Engineering"],
            ["Electronics &", "Communication"],
        ],
        descriptions: [
            { title: "Civil Engineering", description: "Technical and supervisory opportunities across construction and civil engineering industries." },
            { title: "Mechanical Engineering (Production)", description: "Technical opportunities across manufacturing and production environments." },
            { title: "Mechanical Engineering (Automobile)", description: "Technical opportunities in automobile and vehicle service industries." },
            { title: "Electrical Engineering", description: "Technical opportunities across electrical engineering and related industries." },
            { title: "Computer Science Engineering", description: "Technical opportunities in IT and computer-related sectors." },
            { title: "Electronics & Communication Engineering", description: "Technical opportunities across electronics and communication industries." },
        ],
    },
    facultySection: {
        members: polytechnicFaculty,
        headingText: "Meet the",
        headingHighlight: "Polytechnic Faculty",
        subheading: "Experienced faculty members support students through technical teaching, practical training, academic guidance, and industry-oriented learning.",
        featuredLabel: "DEPUTY DIRECTOR",
        featuredDescription: "The Polytechnic's academic leadership and faculty support technical education, practical skills, and professional development across its diploma programmes.",
        profileDescription: "Faculty members guide students through subject learning, practical work, and technical skill development.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "What is SRMU Polytechnic?", a: "SRMU Polytechnic is a technical education institute of Shri Ramswaroop Memorial University, established in the academic session 2015–16. It offers diploma programmes in various engineering disciplines with an emphasis on practical learning and industry exposure." },
        { q: "Which diploma courses are offered at SRMU Polytechnic?", a: "SRMU Polytechnic offers diploma programmes in Civil Engineering, Mechanical Engineering (Production and Automobile), Electrical Engineering, Computer Science Engineering, and Electronics & Communication Engineering." },
        { q: "What is the duration of diploma programmes at SRMU Polytechnic?", a: "The regular diploma programmes have a duration of three years, divided into six semesters." },
        { q: "Can I take admission to Polytechnic after Class 10?", a: "Yes. Students who have passed Class 10 or an equivalent examination from a recognised board can apply. The published eligibility criteria specify a minimum of 35% aggregate marks with Science, Mathematics, and English as compulsory subjects." },
        { q: "Does SRMU Polytechnic offer lateral entry admission?", a: "Yes. Eligible candidates who have completed Class 12 with Mathematics as a compulsory subject can explore lateral entry into the second year of selected diploma programmes." },
        { q: "What practical facilities are available at SRMU Polytechnic?", a: "Students benefit from engineering laboratories, workshops, and practical training facilities that support hands-on learning across Civil, Mechanical, Electrical, Computer Science, and Electronics & Communication Engineering." },
        { q: "Does SRMU Polytechnic organise industrial visits and workshops?", a: "Yes. Students participate in industrial visits, technical workshops, expert lectures, seminars, and practical training activities to gain exposure to engineering applications and industry practices." },
        { q: "What career opportunities are available after completing a Polytechnic diploma?", a: "Diploma graduates can explore technical and supervisory roles in construction, manufacturing, automobile, electrical, electronics, IT, and other engineering-related industries." },
        { q: "Does SRMU Polytechnic provide placement assistance?", a: "SRMU provides career guidance and placement assistance to help eligible students explore employment opportunities across relevant industries." },
        { q: "Can I pursue B.Tech after completing a Polytechnic diploma?", a: "Yes. Diploma holders can explore B.Tech lateral-entry admission into the second year, subject to the eligibility criteria and admission regulations applicable to the programme." },
        { q: "What makes SRMU Polytechnic a good choice for technical education?", a: "SRMU Polytechnic combines academic learning with practical training, experienced faculty, engineering laboratories, industry exposure, technical workshops, and professional development opportunities to help students build strong technical foundations." },
    ],
    showFaculty: true,
    showScholarships: true,
    showBlogs: true,
    showCareerDescriptionCards: false,
};
