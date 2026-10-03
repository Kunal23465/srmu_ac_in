import React, { useEffect, useState } from "react";

import Classes from "../../../utils/styles/Global.module.css";
import DepartmentSectionNav from "./DepartmentSectionNav";
import KamleshImg from "../../../assets/images/academics/institutes/cse/cse2.jpeg";
import SakshiImg from "../../../assets/images/academics/institutes/cse/cse3.jpeg";
import logosrmcem from "../../../assets/images/University-Logo-White.png";
import AdditionInScholarImg from "../../../assets/images/addition-in-scholar.png";
import MerchandiseScanImg from "../../../assets/images/merchandise-scan.jpeg";
import TechCollabImg from "../../../assets/images/new-information-system/Tech-Collaboration_-L-T-EduTech-SRMU.png";
import { Download, ChevronDown, ChevronUp, Search, Mail, Phone, ArrowLeft, ArrowRight, X, ShieldCheck, GraduationCap, Settings, Database, Lightbulb, Share2, MapPin, Facebook, Instagram, Linkedin, Youtube, Twitter, BadgeCheck, UsersRound, Accessibility, Medal, ChartNoAxesColumnIncreasing, Globe2, UserRound, Heart, Monitor, BrainCircuit, Code2, BookOpenCheck, Route, ChevronRight, Laptop, BriefcaseBusiness } from "lucide-react";
import { FaQuora, FaRedditAlien } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchBlogs } from "../../../store/blogs/blogsThunk";
import { normalizeRouteSlug } from "../../../utils/routeMatching";
import { ALL_TARGET_BLOGS } from "../../blog/RelatedArticlesAndPrograms";
import Map from "../../new-home/Map";

// ─── Data ────────────────────────────────────────────────────────────────────

const recruiterLogos = [
    ["https://ik.imagekit.io/ttalcskjf/tcs.webp", "TCS"],
    ["https://ik.imagekit.io/ttalcskjf/infosys.webp", "Infosys"],
    ["https://ik.imagekit.io/ttalcskjf/Wipro.webp", "Wipro"],
    ["https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original", "L&T"],
    ["https://ik.imagekit.io/ttalcskjf/images.png", "HCL Technologies"],
    ["https://ik.imagekit.io/ttalcskjf/Accenture.webp", "Accenture"],
    ["https://ik.imagekit.io/ttalcskjf/capgemini.webp", "Capgemini"],
    ["https://ik.imagekit.io/ttalcskjf/TM.webp", "Tech Mahindra"],
    ["https://ik.imagekit.io/ttalcskjf/IBM.webp", "IBM"],
    ["https://ik.imagekit.io/ttalcskjf/Cognizant_logo_2022.svg.webp", "Cognizant"],
    ["https://ik.imagekit.io/ttalcskjf/Deloitte.webp", "Deloitte"],
    ["https://ik.imagekit.io/ttalcskjf/EY.webp", "EY"],
] as const;

const departmentPrograms = [
    {
        category: "Under-Graduate Courses",
        badge: "Undergraduate",
        icon: GraduationCap,
        programs: [
            { title: "B.Tech. Computer Science Engineering", icon: Laptop, link: "/program/b-tech-computer-science-engineering" },
            { title: "B.Tech. in CSE (Artificial Intelligence & Machine Learning)", icon: BrainCircuit, link: "/program/b-tech-cse-artificial-intelligence-machine-learning" },
            { title: "B.Tech. in CSE (Cyber Security) with L&T", icon: ShieldCheck, link: "/program/b-tech-cse-cyber-security" },
            { title: "B.Tech. in CSE (Data Science & Artificial Intelligence) with L&T", icon: Database, link: "/program/b-tech-cse-data-science-artificial-intelligence" },
        ]
    },
    {
        category: "Post-Graduate Courses",
        badge: "Postgraduate",
        icon: BookOpenCheck,
        programs: [
            { title: "M.Tech. in Computer Science Engineering", icon: Monitor, link: "/program/m-tech-computer-science-engineering" },
            { title: "M.Tech. in Artificial Intelligence & Machine Learning", icon: BrainCircuit, link: "/program/m-tech-artificial-intelligence-machine-learning" },
            { title: "M.Tech. in Data Science", icon: Database, link: "/program/m-tech-data-science" },
            { title: "M.Tech. in Computer Science Engineering (Part Time)", icon: Code2, link: "/program/m-tech-computer-science-engineering-part-time" },
        ]
    },
    {
        category: "Integrated Programs",
        badge: "Integrated",
        icon: Code2,
        programs: [
            { title: "B.Tech. in CSE + M.B.A.", icon: BriefcaseBusiness, link: "/program/b-tech-cse-mba" },
            { title: "B.Tech. + M.Tech. in Computer Science Engineering", icon: Code2, link: "/program/b-tech-m-tech-cse" },
        ]
    },
    {
        category: "Lateral Entry Programs",
        badge: "Lateral entry",
        icon: Route,
        programs: [
            { title: "B.Tech. in Computer Science Engineering (Lateral Entry)", icon: Monitor, link: "/program/b-tech-computer-science-engineering-lateral-entry" },
        ]
    }
];

const aboutPillars = [
    { title: "Advanced Computing Resources", desc: "Access to 1000+ computers equipped with modern tools and technologies" },
    { title: "Research & Innovation", desc: "Distributed computing, networking, security, mobile systems & computer vision" },
    { title: "Flexible Learning", desc: "A flexible credit system aligned with student interests" },
    { title: "Industry Exposure", desc: "Industry interaction, projects, internships & practical experience" },
    { title: "Technology-Focused Curriculum", desc: "Kept current with emerging technologies" },
    { title: "Skill Development", desc: "Technical knowledge, problem-solving & professional skills" },
];

const quickStats = [
    { value: "₹53 LPA", label: "Highest Package" },
    { value: "200+", label: "Recruiters" },
    // { value: "∞", label: "Limitless Opportunities" },
    { value: "10", label: "Industry-Driven Projects" },
    { value: "150", label: "Student Research Projects" },
];

const faqItems = [
    {
        q: "What does the Department of Computer Science and Engineering at SRMU offer?",
        a: "The Department of Computer Science and Engineering at Shri Ramswaroop Memorial University offers an industry-oriented learning environment focused on programming, software development, artificial intelligence, machine learning, data, cloud computing, cybersecurity, networking, and emerging technologies.",
    },
    {
        q: "What programs are offered by the Department of Computer Science and Engineering?",
        a: "The department offers undergraduate and other technology-focused programs covering areas such as computer science and engineering, artificial intelligence and machine learning, data science, cybersecurity, and related emerging technology domains. Students can choose programs based on their academic interests and career goals.",
    },
    {
        q: "What practical facilities are available for CSE students at SRMU?",
        a: "CSE students have access to dedicated laboratories and practical learning facilities, including AI & ML, Cyber Security, Network Security, Cloud Computing, Database, Google Android, Research & Development, L&T Certified, and Oracle PeopleSoft labs.",
    },
    {
        q: "Does the CSE department have a cyber security lab?",
        a: "Yes. The department has a Cyber Security Lab where students can develop practical understanding of cybersecurity concepts, network security, ethical hacking, application security, vulnerability assessment, cyber forensics, and security practices.",
    },
    {
        q: "How does the CSE department provide practical learning?",
        a: "Students gain practical exposure through laboratory sessions, programming exercises, projects, workshops, hackathons, industrial activities, internships, and research-oriented work. These activities help students apply classroom concepts to real-world technology problems.",
    },
    {
        q: "What career opportunities are available after studying computer science engineering?",
        a: "CSE graduates can explore career opportunities in software development, artificial intelligence, machine learning, data science, cybersecurity, cloud computing, DevOps, networking, mobile application development, IT infrastructure, and research.",
    },
    {
        q: "What job roles can CSE graduates pursue?",
        a: "Depending on their skills and area of specialization, graduates can pursue roles such as software engineer, full-stack developer, AI engineer, machine learning engineer, data analyst, data scientist, cybersecurity analyst, cloud engineer, DevOps engineer, and network engineer.",
    },
    {
        q: "Does the CSE department provide industry-oriented learning?",
        a: "Yes. The department incorporates industry-oriented learning through practical laboratories, industry-linked activities, technical workshops, projects, and exposure to contemporary technologies. Industry-oriented initiatives help students understand how technical concepts are applied in professional environments.",
    },
    {
        q: "Can CSE students participate in research and innovation activities?",
        a: "Yes. Students can participate in research, development projects, technical activities, and innovation-oriented work. The Research & Development Lab and project-based learning provide opportunities to explore emerging areas of computer science and develop technology-focused solutions.",
    },
    {
        q: "What skills can students develop through the CSE program?",
        a: "Students can develop programming, software development, database management, problem-solving, data analysis, AI and ML, cloud computing, networking, cybersecurity, and project management skills. They also develop communication, teamwork, and analytical skills that are relevant to technology careers.",
    },
];

const events = [
    {
        tag: "GUEST LECTURE",
        title: "Energy System and Smart Grid",
        speaker: "Er. Mithilesh Kumar Gupta, Chief Engineer – PMC, UPPCL",
        shortDesc: "A knowledge-sharing session on renewable energy transition, power distribution and smart-grid technologies.",
        readMore: "The session on “Energy System and Smart Grid”, held on May 9, 2026, provided students with practical insights into India's transition towards a renewable-dominant energy mix. Er. Mithilesh Kumar Gupta, Chief Engineer at PMC, UPPCL, discussed contemporary developments in power systems and the growing role of smart-grid technologies.\n\nThe session also highlighted renewable integration, load-curve management and the changing requirements of modern energy networks. It enabled students to connect their classroom concepts with real-world challenges and industry practices in the power sector.",
        img: "/assets/images/new-information-system/1.webp"
    },
    {
        tag: "INDUSTRY EXPOSURE",
        title: "Cutting-Edge Technologies in Engineering for Sustainable Development",
        speaker: "Seemanta Engineering College",
        shortDesc: "An industry-oriented programme exploring emerging technologies, renewable energy, AI, smart systems and sustainable engineering.",
        readMore: "The “Cutting-Edge Technologies in Engineering for Sustainable Development” programme, conducted from September 15–20, 2025, exposed students to emerging engineering technologies supporting sustainable and environmentally responsible development.\n\nThe programme covered areas including renewable energy, artificial intelligence, smart systems, advanced materials and automation. It helped students understand how modern engineering innovations can address current and future societal and environmental challenges while strengthening their industry-oriented knowledge.",
        img: "/assets/images/new-information-system/2.webp"
    },
    {
        tag: "WORKSHOP",
        title: "Hands-on Practice on LabVIEW",
        speaker: "Dr. Sandeep Ojha & Dr. Alkesh Agarwal | SRMU",
        shortDesc: "Practical training in LabVIEW programming, virtual instrumentation, data acquisition and signal processing.",
        readMore: "The Hands-on Practice on LabVIEW workshop was organised by the Department of Electrical & Electronics Engineering (DEEE), Shri Ramswaroop Memorial University. The workshop provided participants with practical training in LabVIEW programming for virtual instrumentation, data acquisition, instrument interfacing, signal processing and automation.\n\nThrough hands-on sessions and mini-projects, students gained exposure to practical engineering applications and developed technical skills relevant to academic research as well as industrial applications.",
        img: "/assets/images/new-information-system/3.webp"
    },
    {
        tag: "HACKATHON",
        title: "Smart India Hackathon",
        speaker: "Year-wise SIH participation at SRMU",
        shortDesc: "Students participated in the Smart India Hackathon internal selection rounds, developing innovative solutions to real-world challenges.",
        readMore: "SRMU has conducted internal rounds of the Smart India Hackathon (SIH), supported by the Innovation Cell, Ministry of Education, Government of India. The internal selection process involved student teams working on problem statements and presenting technology-driven solutions.\n\nThe data shows continued participation across 2022, 2023, 2024 and 2025, with teams progressing through internal selection rounds and some being selected for the final round. The initiative provides students with an opportunity to apply their technical knowledge, teamwork and problem-solving abilities to practical challenges.",
        img: "/assets/images/new-information-system/4.webp"
    },
    {
        tag: "RESEARCH & PUBLICATIONS",
        title: "Research & Publications",
        speaker: "Dr. Vijay Laxmi Mishra",
        shortDesc: "16 publications in the last 1–2 years, including SCI/SCIE, Scopus-indexed conferences and Scopus-indexed book chapters.",
        readMore: "SRMU faculty members have contributed to research through publications across international journals, conferences and academic book chapters. Dr. Vijay Laxmi Mishra recorded 16 publications in the last 1–2 years, including SCI/SCIE publications, Scopus-indexed international conferences and Scopus-indexed book chapters.\n\nThe publication record reflects active engagement in research and knowledge creation, giving students opportunities to learn from contemporary research work and strengthen their understanding of emerging developments in engineering and technology.",
        img: "/assets/images/new-information-system/5.webp"
    },
    {
        tag: "PROJECT MADE BY STUDENT",
        title: "ConstructAI – AI-Powered Construction Assistant",
        speaker: "B.Tech Data Science Student Project",
        shortDesc: "An AI-powered platform combining architectural assistance, Vastu guidance and construction cost estimation.",
        readMore: "ConstructAI is an AI-powered student project designed to simplify different aspects of construction and architectural planning. The platform combines an AI chatbot with architectural and Vastu-related guidance to assist users during the construction planning process.\n\nThe project also incorporates price estimation, making it more useful for users looking to understand potential construction costs. The project demonstrates how students are applying artificial intelligence and software development concepts to create solutions for practical, real-world requirements.",
        img: "/assets/images/new-information-system/6.webp"
    },
];

const placementStats = [
    { value: "2000+", label: "Job Offers" },
    { value: "250+", label: "Corporate Recruiters" },
    { value: "4.5 LPA", label: "Average Package" },
    { value: "100%*", label: "Placement Record" },
    { value: "30%+", label: "Multiple Offers" },
];

const activityCounters = [
    { value: "150", label: "Guest Lectures" },
    { value: "50", label: "Field Visits" },
    { value: "06", label: "Conferences" },
    { value: "50", label: "Seminars" },
];

const facultyList = [
    // 1. HoD
    {
        name: "Dr. Shobhit Sinha",
        role: "HoD DCSE, SRMU, Lucknow-Deva Road",
        img: "/assets/images/new-information-system/Dr.-Shobhit-Sinha.webp",
        isHod: true,
        qualification: "M.Tech., Ph.D.",
        experience: "19 Years (9 years in IT sector, 10 years in Education Sector)",
        specialization: ["Artificial Intelligence"]
    },
    // 2. Associate Professors
    { name: "Dr. Rajeev Kumar", role: "Associate Professor", img: "/assets/images/new-information-system/Dr.-Rajeev-Kumar.webp" },
    { name: "Dr. Anil Kumar Pandey", role: "Associate Professor", img: "/assets/images/new-information-system/Dr.-Anil-Kumar-Pandey.webp" },
    { name: "Dr. Satya Bhushan Verma", role: "Associate Professor", img: "/assets/images/new-information-system/Dr.-Satya-Bhushan-Verma.webp" },
    // 3. Assistant Professors
    { name: "Ms. Reeta", role: "Assistant Professor", img: "/assets/images/new-information-system/Ms.-Reeta.webp" },
    { name: "Ms. Abhilasha Mandal", role: "Assistant Professor", img: "/assets/images/new-information-system/Ms.-Abhilasha-Mandal.webp" },
    { name: "Mr. Anil Kumar", role: "Assistant Professor", img: "/assets/images/new-information-system/Mr.-Anil-Kumar.webp" },
    { name: "Ms. Anjali Awasthi", role: "Assistant Professor", img: "/assets/images/new-information-system/Ms.-Anjali-Awasthi.webp" },
    { name: "Mr. Ijtaba Saleem Khan", role: "Assistant Professor", img: "/assets/images/new-information-system/Mr.-Ijtaba-Saleem-Khan.webp" },
    { name: "Mr. Aditya Pratap Singh", role: "Assistant Professor", img: "/assets/images/new-information-system/Mr.-Aditya-Pratap-Singh.webp" },
    { name: "Ms. Arpita Vishwakarma", role: "Assistant Professor", img: "/assets/images/new-information-system/Ms.-Arpita-Vishwakarma.webp" },
    { name: "Mr. Neelesh Mishra", role: "Assistant Professor", img: "/assets/images/new-information-system/Mr.-Neelesh-Mishra.webp" },
    { name: "Ms. Prabha Singh", role: "Assistant Professor", img: "/assets/images/new-information-system/Ms.-Prabha-Singh.webp" },
    { name: "Ms. Atifa Parveen", role: "Assistant Professor", img: "/assets/images/new-information-system/Ms.-Atifa-Parveen.webp" },
    { name: "Mr. Kamlesh Chandra Maurya", role: "Assistant Professor", img: KamleshImg },
    { name: "Ms. Sakshi Singh", role: "Assistant Professor", img: SakshiImg },
];

const whyItems = [
    { num: "01", title: "Research-Oriented Academic Environment", desc: "The department encourages research activities and academic knowledge sharing through publications, conferences and expert interactions." },
    { num: "02", title: "Value-Added Learning", desc: "Students receive opportunities to develop additional technical knowledge and skills beyond their regular curriculum." },
    { num: "03", title: "Industry-Linked Programs", desc: "Specialized programs with industry collaboration provide exposure to industry-oriented learning in areas such as Cyber Security and Data Science & Artificial Intelligence." },
    { num: "04", title: "Emerging Technology Focus", desc: "The curriculum includes contemporary areas such as AI, Machine Learning, Cyber Security, Python, Cloud Application Development and Digital Image Processing." },
];

const careerItems = [
    ["Software Engineer / Developer"],
    ["Full-Stack Developer"],
    ["AI Engineer (Artificial", "Intelligence Engineer)"],
    ["Machine Learning Engineer"],
    ["Data Scientist"],
    ["Data Analyst"],
    ["Cybersecurity Analyst"],
    ["Network Security Engineer"],
    ["Cloud Engineer"],
    ["DevOps Engineer"],
    ["Systems & Database", "Administrator"],
    ["Research & Development", "(R&D) Engineer"],
];

const scholarshipItems = [
    { text: "SRMUSET Based Scholarship", icon: GraduationCap },
    { text: "MERIT Based Scholarship", icon: BadgeCheck },
    { text: "Defence, Paramilitary & Police", icon: ShieldCheck },
    { text: "Sibling/Ward of SRM Group Staff, Student & Alumni", icon: UsersRound },
    { text: "Divyang", icon: Accessibility },
    { text: "National/State Level", icon: MapPin },
    { text: "Sportsperson", icon: Medal },
    { text: "Career Progression", icon: ChartNoAxesColumnIncreasing },
    { text: "Student of another state and country", icon: Globe2 },
    { text: "Ward of a Single Parent", icon: UserRound },
    { text: "Divyang · Sportsperson · Single Parent", icon: UserRound },
];

const faqs = [
    { q: "What programs are offered by the Department of Computer Science & Information Systems?", a: "DCSIS offers computer application programs at undergraduate, postgraduate and doctoral levels. Its current program listing includes B.C.A. in Data Science & Artificial Intelligence with L&T, B.C.A. in Cyber Security with L&T and B.C.A. in Artificial Intelligence & Machine Learning." },
    { q: "What is the duration of the B.C.A. programs?", a: "The B.C.A. programs currently listed by DCSIS have a duration of 3 years." },
    { q: "Does DCSIS provide practical learning opportunities?", a: "Yes. The department highlights practical learning through projects, internships, industrial partnerships, guest lectures and access to advanced computing resources." },
    { q: "What areas can students explore in Computer Science & Information Systems?", a: "Students can explore areas including distributed computing, mobile systems, networking, security, computer architecture, computer vision, artificial intelligence and data science." },
    { q: "Does the department support research?", a: "Yes. Research is an important part of DCSIS, with specialized equipment and computing resources supporting research activities across multiple areas of computer science and information systems." },
    { q: "What kind of industry exposure is available?", a: "The department highlights industrial partnerships, internships, live projects, guest lectures and interactions with professionals from industry and research organizations." },
];

// ─── Component ────────────────────────────────────────────────────────────────

const DepartmentOfComputerScienceAndEngineeringNew = () => {

    const reduceMotion = useReducedMotion();
    const dispatch = useDispatch<AppDispatch>();
    const { data: blogCards } = useSelector((state: RootState) => state.getAllBlogs);

    const [selectedFaculty, setSelectedFaculty] = useState<any>(null);
    const [selectedEvent, setSelectedEvent] = useState<any>(null);

    // Accordion state for mobile view
    const [activeProgramCategory, setActiveProgramCategory] = useState<number>(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [showAllFaq, setShowAllFaq] = useState(false);
    const [showAllCareers, setShowAllCareers] = useState(false);
    const [showAllScholarships, setShowAllScholarships] = useState(false);

    useEffect(() => {
        if (blogCards.length === 0) {
            dispatch(fetchBlogs());
        }
    }, [blogCards.length, dispatch]);

    // Faculty Embla carousel
    const [facultyEmblaRef, facultyEmblaApi] = useEmblaCarousel({ loop: false, align: "start", dragFree: true });
    const [facultyCanPrev, setFacultyCanPrev] = useState(false);
    const [facultyCanNext, setFacultyCanNext] = useState(true);

    useEffect(() => {
        if (!facultyEmblaApi) return;
        const update = () => {
            setFacultyCanPrev(facultyEmblaApi.canScrollPrev());
            setFacultyCanNext(facultyEmblaApi.canScrollNext());
        };
        update();
        facultyEmblaApi.on("select", update);
        facultyEmblaApi.on("reInit", update);
        return () => { facultyEmblaApi.off("select", update); facultyEmblaApi.off("reInit", update); };
    }, [facultyEmblaApi]);

    // Labs Embla carousel (only active on mobile)
    const [labsEmblaRef, labsEmblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        dragFree: true,
        breakpoints: {
            '(min-width: 640px)': { active: false }
        }
    });
    const [labsCanPrev, setLabsCanPrev] = useState(false);
    const [labsCanNext, setLabsCanNext] = useState(true);

    useEffect(() => {
        if (!labsEmblaApi) return;
        const update = () => {
            setLabsCanPrev(labsEmblaApi.canScrollPrev());
            setLabsCanNext(labsEmblaApi.canScrollNext());
        };
        update();
        labsEmblaApi.on("select", update);
        labsEmblaApi.on("reInit", update);
        return () => { labsEmblaApi.off("select", update); labsEmblaApi.off("reInit", update); };
    }, [labsEmblaApi]);

    // Programs Embla carousel (only active on mobile)
    const [programsEmblaRef, programsEmblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        dragFree: true,
        breakpoints: {
            '(min-width: 640px)': { active: false }
        }
    });
    const [programsCanPrev, setProgramsCanPrev] = useState(false);
    const [programsCanNext, setProgramsCanNext] = useState(true);

    useEffect(() => {
        if (!programsEmblaApi) return;
        const update = () => {
            setProgramsCanPrev(programsEmblaApi.canScrollPrev());
            setProgramsCanNext(programsEmblaApi.canScrollNext());
        };
        update();
        programsEmblaApi.on("select", update);
        programsEmblaApi.on("reInit", update);
        return () => { programsEmblaApi.off("select", update); programsEmblaApi.off("reInit", update); };
    }, [programsEmblaApi]);

    // Events Embla carousel (only active on mobile)
    const [eventsEmblaRef, eventsEmblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        dragFree: true,
        breakpoints: {
            '(min-width: 640px)': { active: false }
        }
    });
    const [eventsCanPrev, setEventsCanPrev] = useState(false);
    const [eventsCanNext, setEventsCanNext] = useState(true);

    useEffect(() => {
        if (!eventsEmblaApi) return;
        const update = () => {
            setEventsCanPrev(eventsEmblaApi.canScrollPrev());
            setEventsCanNext(eventsEmblaApi.canScrollNext());
        };
        update();
        eventsEmblaApi.on("select", update);
        eventsEmblaApi.on("reInit", update);
        return () => { eventsEmblaApi.off("select", update); eventsEmblaApi.off("reInit", update); };
    }, [eventsEmblaApi]);

    // Why SRMU Embla carousel (only active on mobile)
    const [whyEmblaRef, whyEmblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        dragFree: true,
        breakpoints: {
            '(min-width: 640px)': { active: false }
        }
    });
    const [whyCanPrev, setWhyCanPrev] = useState(false);
    const [whyCanNext, setWhyCanNext] = useState(true);

    useEffect(() => {
        if (!whyEmblaApi) return;
        const update = () => {
            setWhyCanPrev(whyEmblaApi.canScrollPrev());
            setWhyCanNext(whyEmblaApi.canScrollNext());
        };
        update();
        whyEmblaApi.on("select", update);
        whyEmblaApi.on("reInit", update);
        return () => { whyEmblaApi.off("select", update); whyEmblaApi.off("reInit", update); };
    }, [whyEmblaApi]);

    // Blogs Embla carousel (only active on mobile)
    const [blogsEmblaRef, blogsEmblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        dragFree: true,
        breakpoints: {
            '(min-width: 640px)': { active: false }
        }
    });
    const [blogsCanPrev, setBlogsCanPrev] = useState(false);
    const [blogsCanNext, setBlogsCanNext] = useState(true);

    useEffect(() => {
        if (!blogsEmblaApi) return;
        const update = () => {
            setBlogsCanPrev(blogsEmblaApi.canScrollPrev());
            setBlogsCanNext(blogsEmblaApi.canScrollNext());
        };
        update();
        blogsEmblaApi.on("select", update);
        blogsEmblaApi.on("reInit", update);
        return () => { blogsEmblaApi.off("select", update); blogsEmblaApi.off("reInit", update); };
    }, [blogsEmblaApi]);

    const [rm, setRm] = useState<Record<string, boolean>>({});
    const toggleRm = (k: string) => setRm(p => ({ ...p, [k]: !p[k] }));

    return (
        <div id="cse-page" className="text-[#14284E] bg-white antialiased">
            {/* ── Lab Icon Micro-animations ─────────────────────────────── */}
            <style>{`
                @media (max-width: 639px) {
                    .cse-mobile-button, .cse-mobile-button span:not([aria-hidden]) { font-size: 14px; }
                    .cse-mobile-button.cse-read-more {
                        text-transform: uppercase;
                        text-align: left;
                        justify-content: flex-start;
                        align-self: flex-start;
                        margin-left: 0;
                        margin-right: auto;
                    }
                    /* Widen content on mobile only for this page — override container gutter */
                    .cse-content-container {
                        padding-left: 0 !important;
                        padding-right: 0 !important;
                    }
                }

                @media (prefers-reduced-motion: no-preference) {
                    .cse-why-number { animation: cse-why-number-pulse 3s ease-in-out infinite; }
                    .cse-why-card:hover .cse-why-underline { transform: scaleX(1.7); }
                    .cse-why-underline { transition: transform 300ms ease; transform-origin: left; }
                }
                @keyframes cse-why-number-pulse {
                    0%, 100% { transform: scale(1); text-shadow: 0 0 0 transparent; }
                    50% { transform: scale(1.12); text-shadow: 0 0 12px rgba(255,183,3,0.45); }
                }

                /* ── Stat card count-up animation ── */
                @keyframes cse-stat-pop {
                    0%   { opacity: 0; transform: translateY(14px) scale(0.88); }
                    60%  { opacity: 1; transform: translateY(-3px) scale(1.06); }
                    100% { opacity: 1; transform: translateY(0)    scale(1); }
                }
                @keyframes cse-stat-glow {
                    0%,100% { text-shadow: 0 0 0px rgba(255,183,3,0); }
                    50%     { text-shadow: 0 0 18px rgba(255,183,3,0.75), 0 0 30px rgba(255,183,3,0.35); }
                }
                @media (prefers-reduced-motion: no-preference) {
                    .cse-stat-value {
                        animation: cse-stat-pop 0.55s cubic-bezier(.22,.68,0,1.3) both,
                                   cse-stat-glow 2.8s ease-in-out 0.6s infinite;
                    }
                    .cse-stat-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
                    .cse-stat-card:hover { transform: translateY(-4px) scale(1.04);
                        box-shadow: 0 12px 28px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,183,3,0.25); }
                    /* Mobile orbit ring — only the dashed ring rotates */
                    .cse-m-orbit { transform-origin: 185px 195px; animation: cse-career-spin 60s linear infinite; }
                    /* Mobile core — breathing + glow shadow */
                    .cse-m-core  { transform-origin: 185px 195px; animation: cse-m-breathe 4s ease-in-out infinite; }
                    @keyframes cse-m-breathe {
                        0%, 100% {
                            transform: scale(1);
                            filter: drop-shadow(0 0 0px rgba(38,61,112,0)) drop-shadow(0 6px 8px rgba(20,40,78,0.30));
                        }
                        50% {
                            transform: scale(1.07);
                            filter: drop-shadow(0 0 18px rgba(55,130,220,0.65)) drop-shadow(0 0 30px rgba(215,152,48,0.35)) drop-shadow(0 8px 16px rgba(20,40,78,0.40));
                        }
                    }
                }

                .cse-recruiter-track { display: flex; width: max-content; animation: cse-recruiter-scroll 30s linear infinite; }
                @keyframes cse-recruiter-scroll { to { transform: translateX(-50%); } }
                @media (prefers-reduced-motion: reduce) {
                    .cse-recruiter-track { animation: none; }
                    .cse-recruiter-copy { display: none; }
                }

                .cse-career-orbit, .cse-career-core {
                    transform-origin: 520px 350px;
                }
                .cse-career-diagram { display: block; width: 100%; }
                @media (max-width: 639px) {
                    .cse-career-diagram { display: none; }
                }
                @media (prefers-reduced-motion: no-preference) {
                    .cse-career-orbit { animation: cse-career-spin 60s linear infinite; }
                    .cse-career-core { animation: cse-career-breathe 5s ease-in-out infinite; }
                }
                @keyframes cse-career-spin { to { transform: rotate(360deg); } }
                @keyframes cse-career-breathe {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.025); }
                }

                @media (prefers-reduced-motion: no-preference) {
                    /* L&T / Engineering – mechanical cog-like rock */
                    @keyframes lab-mechanical {
                        0%   { transform: rotate(0deg) scale(1); }
                        25%  { transform: rotate(15deg) scale(1.2); }
                        50%  { transform: rotate(-10deg) scale(1.15); }
                        75%  { transform: rotate(12deg) scale(1.25); }
                        100% { transform: rotate(0deg) scale(1); }
                    }
                    /* AI & ML – smooth orbital spin + float */
                    @keyframes lab-orbital {
                        0%   { transform: translateY(0px) rotate(0deg) scale(1); }
                        30%  { transform: translateY(-8px) rotate(25deg) scale(1.2); }
                        60%  { transform: translateY(-4px) rotate(-15deg) scale(1.25); }
                        100% { transform: translateY(0px) rotate(0deg) scale(1); }
                    }
                    /* Cyber Security – shield pulse */
                    @keyframes lab-pulse {
                        0%   { transform: scale(1);    filter: drop-shadow(0 0 0px rgba(20,40,78,0)); }
                        30%  { transform: scale(1.25);  filter: drop-shadow(0 0 12px rgba(20,40,78,0.6)); }
                        60%  { transform: scale(1.15); filter: drop-shadow(0 0 8px rgba(20,40,78,0.4)); }
                        100% { transform: scale(1);    filter: drop-shadow(0 0 0px rgba(20,40,78,0)); }
                    }
                    /* Cloud Computing – gentle float up */
                    @keyframes lab-float {
                        0%   { transform: translateY(0px) scale(1); }
                        40%  { transform: translateY(-12px) scale(1.2); }
                        70%  { transform: translateY(-6px) scale(1.15); }
                        100% { transform: translateY(0px) scale(1); }
                    }
                    /* Database – stack bounce down */
                    @keyframes lab-stack {
                        0%   { transform: translateY(0px) scaleY(1) scaleX(1); }
                        25%  { transform: translateY(6px) scaleY(0.85) scaleX(1.1); }
                        55%  { transform: translateY(-8px) scaleY(1.15) scaleX(0.95); }
                        80%  { transform: translateY(-2px) scaleY(1.05) scaleX(1.02); }
                        100% { transform: translateY(0px) scaleY(1) scaleX(1); }
                    }
                    /* R&D – light glow/pulse */
                    @keyframes lab-glow {
                        0%   { transform: scale(1);    filter: drop-shadow(0 0 0px rgba(255,193,7,0)); }
                        35%  { transform: scale(1.25);  filter: drop-shadow(0 0 16px rgba(255,183,3,0.8)); }
                        65%  { transform: scale(1.15); filter: drop-shadow(0 0 10px rgba(255,183,3,0.5)); }
                        100% { transform: scale(1);    filter: drop-shadow(0 0 0px rgba(255,193,7,0)); }
                    }
                    /* Network Security – orbital network wave */
                    @keyframes lab-network {
                        0%   { transform: rotate(0deg) translateX(0px) scale(1); }
                        20%  { transform: rotate(-15deg) translateX(-5px) scale(1.15); }
                        50%  { transform: rotate(20deg) translateX(5px) scale(1.25); }
                        80%  { transform: rotate(-8deg) translateX(-2px) scale(1.18); }
                        100% { transform: rotate(0deg) translateX(0px) scale(1); }
                    }

                    .lab-icon-mechanical  { transition: transform 0.3s ease, filter 0.3s ease; }
                    .lab-icon-orbital     { transition: transform 0.3s ease, filter 0.3s ease; }
                    .lab-icon-pulse       { transition: transform 0.3s ease, filter 0.3s ease; }
                    .lab-icon-float       { transition: transform 0.3s ease, filter 0.3s ease; }
                    .lab-icon-stack       { transition: transform 0.3s ease, filter 0.3s ease; }
                    .lab-icon-glow        { transition: transform 0.3s ease, filter 0.3s ease; }
                    .lab-icon-network     { transition: transform 0.3s ease, filter 0.3s ease; }

                    .group:hover .lab-icon-mechanical { animation: lab-mechanical 1.5s ease-in-out infinite; }
                    .group:hover .lab-icon-orbital    { animation: lab-orbital    2s ease-in-out infinite; }
                    .group:hover .lab-icon-pulse      { animation: lab-pulse      1.5s ease-in-out infinite; }
                    .group:hover .lab-icon-float      { animation: lab-float      2s ease-in-out infinite; }
                    .group:hover .lab-icon-stack      { animation: lab-stack      1.5s ease-in-out infinite; }
                    .group:hover .lab-icon-glow       { animation: lab-glow       2s ease-in-out infinite; }
                    .group:hover .lab-icon-network    { animation: lab-network    2s ease-in-out infinite; }
                }
            `}</style>
            <main>

                {/* ── Hero Banner ─────────────────────────────────────────── */}

                {/* ── MOBILE banner ── image bg + gradient overlay ─────── */}
                <section className="sm:hidden relative w-full overflow-hidden" style={{ minHeight: "620px" }}>
                    {/* Full background image */}
                    <img
                        src="/assets/images/new-information-system/diff-banner.jpg"
                        alt="Department of Computer Science & Engineering"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                    />

                    {/* Gradient: transparent at top → deep navy at ~45% downward */}

                    {/* Text content — sits in the lower half over the gradient */}
                    <div className="absolute bottom-0 left-0 right-0 px-5 pt-6 pb-7 z-10">
                        {/* Title */}
                        <p className="text-[#38bdf8] !text-[16px] font-semibold mb-1.5 leading-snug">
                            Department of
                        </p>
                        <h1 className="text-white/85 text-[34px] font-bold leading-[1.15] mb-4">
                            Computer Science &amp; Engineering (CSE)
                        </h1>

                        {/* Gold separator */}
                        <div className="h-[3px] w-[80px] bg-[#ffb703] rounded-full mb-4" />

                        {/* Stats 2×2 card grid — Pic-1 style */}
                        <div className="grid grid-cols-2 gap-2.5 mb-6">
                            {[
                                { v: "₹53 LPA", l: "Highest Package", delay: "0ms" },
                                { v: "10", l: "Industry-Driven\nCapstone Projects", delay: "90ms" },
                                { v: "200+", l: "Recruiters", delay: "180ms" },
                                { v: "150", l: "Student Research\nProjects/Year", delay: "270ms" },
                            ].map((s) => (
                                <div
                                    key={s.l}
                                    className="cse-stat-card rounded-xl px-3 py-2.5"
                                    style={{
                                        background: "rgba(255,255,255,0.07)",
                                        backdropFilter: "blur(6px)",
                                        border: "1px solid rgba(255,255,255,0.13)",
                                    }}
                                >
                                    <div
                                        className="cse-stat-value text-[#ffb703] font-extrabold text-[20px] leading-none tracking-tight"
                                        style={{ animationDelay: s.delay }}
                                    >
                                        {s.v}
                                    </div>
                                    <div className="text-white/70 text-[10px] leading-snug mt-1 whitespace-pre-line">
                                        {s.l}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA buttons changes*/}
                        <div className="hidden gap-3">
                            <a
                                href="https://students.srmu.ac.in/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cse-mobile-button uppercase tracking-wider flex-1 text-center bg-[#ffb703] text-[#14284E] font-bold text-[14px] px-3 py-3 rounded-lg shadow-lg"
                            >
                                Apply Now
                            </a>
                            <a
                                href="/Broucher_SRMU_25_April___.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cse-mobile-button uppercase tracking-wider flex-1 text-center flex items-center justify-center gap-1.5 bg-[#14284E]/80 text-white font-bold text-[14px] px-3 py-3 rounded-lg border border-white/20 backdrop-blur-sm"
                            >
                                <Download className="w-4 h-4" /> Brochure
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── DESKTOP banner ──────────────────────────────────────── */}
                <section className="relative hidden sm:flex w-full overflow-hidden items-center sm:pt-[78px] sm:pb-8 md:min-h-[504px] md:pt-24 md:pb-14 bg-[#071329]">
                    {/* Background Banner */}
                    <img
                        src="/assets/images/new-information-system/again-banner.jpg"
                        alt="Department of Computer Science & Information Systems"
                        className="absolute inset-0 w-full h-full object-cover object-top z-0"
                    />

                    {/* Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#071329]/75 via-[#091a38]/40 to-transparent z-0" />

                    <div className="relative z-10 w-full pt-0 pb-0">
                        <div className={`${Classes["container"]} cse-content-container flex flex-col h-full sm:h-auto w-full`}>
                            {/* Banner Text */}
                            <div className="w-full max-w-[650px] text-white text-left mt-2 sm:mt-0">
                                <h2 className="text-[#38bdf8] text-[clamp(20px,2.5vw,30px)] font-semibold mb-1 leading-[1.2] drop-shadow-md">
                                    Department of
                                </h2>
                                <h1 className="text-[clamp(32px,4vw,52px)] leading-[1.1] font-bold text-white/85 drop-shadow-md">
                                    Computer Science &amp; Engineering (CSE)
                                </h1>
                                <div className="h-[3px] bg-[#38bdf8] w-[200px] mt-1 mb-4 rounded-full" />
                                {/* <p className="text-[clamp(14px,1.5vw,18px)] font-light mt-4 drop-shadow-md text-justify">
                                    Shape Your Future with Computer Science &amp; Engineering
                                </p> */}
                            </div>

                            <div className="flex flex-row items-center gap-3 mt-8 w-full max-w-[650px]">
                                <a
                                    href="https://students.srmu.ac.in/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cse-mobile-button uppercase tracking-wider flex-none text-center bg-[#ffb703] text-[#14284E] font-bold text-[12px] sm:text-[14px] px-4 sm:px-8 py-3.5 rounded-lg transition-colors shadow-lg border border-[#ffb703]"
                                >
                                    Apply Now
                                </a>
                                <a
                                    href="/Broucher_SRMU_25_April___.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cse-mobile-button uppercase tracking-wider flex-none text-center flex items-center justify-center gap-1 sm:gap-2 bg-[#e0f1ff] text-[#14284E] font-bold text-[12px] sm:text-[14px] px-4 sm:px-8 py-3.5 rounded-lg transition-colors shadow-lg border border-[#1B4F91]"
                                >
                                    <Download className="w-4 h-4" /> Department Brochure
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ── Mobile Apply Now Form ────────────────────────────────── */}
                <section className="sm:hidden bg-[#0f1b33] py-8 px-4 w-full">
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10 max-w-[650px] mx-auto">
                        <div className="bg-[#14284E] px-4 py-3 text-center">
                            <h3 className="text-white font-bold text-[15px]">Shri Ramswaroop Memorial University</h3>
                            <div className="w-8 h-0.5 bg-[#ffb703] mx-auto mt-2 rounded-full" />
                        </div>
                        <div className="bg-white px-4 py-4 space-y-2.5">
                            <div className="grid grid-cols-2 gap-2">
                                <input type="text" placeholder="First Name" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-700 outline-none focus:border-[#14284E]" />
                                <input type="text" placeholder="Last Name" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-700 outline-none focus:border-[#14284E]" />
                            </div>
                            <input type="email" placeholder="Email Address" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-700 outline-none focus:border-[#14284E]" />
                            <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-700 outline-none focus:border-[#14284E]" />
                            <div className="grid grid-cols-2 gap-2">
                                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-500 outline-none focus:border-[#14284E] bg-white">
                                    <option value="">Level</option>
                                    <option>UG</option>
                                    <option>PG</option>
                                </select>
                                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-500 outline-none focus:border-[#14284E] bg-white">
                                    <option value="">Programme</option>
                                    <option>B.C.A. — Data Science & AI with L&T</option>
                                    <option>B.C.A. — Cyber Security with L&T</option>
                                    <option>B.C.A. — AI & Machine Learning</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-500 outline-none focus:border-[#14284E] bg-white">
                                    <option value="">State</option>
                                    <option>Uttar Pradesh</option>
                                    <option>Delhi</option>
                                    <option>Other</option>
                                </select>
                                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-500 outline-none focus:border-[#14284E] bg-white">
                                    <option value="">City</option>
                                    <option>Lucknow</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <p className="!text-[8px] leading-tight text-gray-500 flex items-start gap-1 text-justify">
                                <input type="checkbox" defaultChecked className="mt-0.5 shrink-0 scale-75 origin-top-left" />
                                I authorise SRMU and its representatives to Call, SMS, Email or WhatsApp me regarding admissions and programmes.
                            </p>
                            <button className="cse-mobile-button w-full bg-[#ffb703] hover:bg-[#ffb703] text-[#14284E] font-bold uppercase tracking-wide text-[14px] py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                                APPLY NOW →
                            </button>
                        </div>
                    </div>
                </section>

                {/* ── Quick Stats Banner ───────────────────────────────────── */}
                <section className="hidden bg-[#E0F1FF] px-6 py-2 sm:block" aria-label="Department highlights">
                    <div className="mx-auto max-w-[1100px]">
                        <dl className="m-0 grid grid-cols-4 gap-x-4">
                            {quickStats.map((stat) => (
                                <div key={stat.label} className="flex min-w-0 flex-col items-center gap-0.5 text-center text-[#14284E]">
                                    <dt className="text-[9px] leading-snug font-bold tracking-[0.04em] uppercase lg:text-[11px]">{stat.label}</dt>
                                    <dd className="font-display order-first m-0 text-[26px] leading-none font-extrabold text-[#D62C2B] lg:text-[32px]">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                <DepartmentSectionNav />

                {/* ── About the Department ─────────────────────────────────── */}
                <section id="overview" className="pt-6 sm:pt-8 pb-8 md:pb-10 px-4 sm:px-6 bg-white scroll-mt-24">
                    <div className={`${Classes["container"]} cse-content-container`}>
                        {/* Two-column: text left, image right */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                            {/* ── Left: text ── */}
                            <div className="w-full lg:flex-1">
                                <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3 text-left lg:text-left">
                                    About the <span className="text-[#ffb703]">Department</span>
                                </h2>

                                <div className={`text-[#4B5A72] text-[15.5px] sm:text-[16px] leading-relaxed space-y-4 text-justify ${!rm["about"] ? "line-clamp-2 sm:line-clamp-none" : ""}`}>
                                    <p className="text-justify">The Department of Computer Science and Engineering at SRMU was established in 2012 with the objective of providing quality education and developing skilled professionals in the field of computing and information technology.</p>
                                    <p className="text-justify">The department offers B.Tech., M.Tech. and Ph.D. programs and provides academic exposure to core areas including computer technologies, distributed computing, information security, programming languages, computer networks, database management systems, software engineering, operating systems, compiler construction, and computer organization & architecture.</p>
                                    <p className="text-justify">The curriculum is periodically updated to incorporate emerging areas such as Python programming, Android application development, digital image processing, cyber security, design thinking, and cloud application development.</p>
                                    <p className="text-justify">Through industrial summer training, seminars, workshops, industrial visits, and conferences, students get opportunities to connect academic concepts with professional practices.</p>
                                    <p className="text-justify">For students searching for computer science engineering in Lucknow, the department provides a combination of foundational computing education, emerging technology exposure, industry interaction, and research-oriented learning.</p>
                                </div>

                                <button className="cse-read-more cse-mobile-button rm-btn sm:hidden mt-3 mx-auto flex" onClick={() => toggleRm("about")}>{rm["about"] ? "Read Less" : "Read More"}</button>
                            </div>

                            {/* ── Right: image ── */}
                            <div className="flex w-full lg:w-[420px] xl:w-[460px] shrink-0 lg:self-stretch">
                                <img
                                    src={TechCollabImg}
                                    alt="Department Tech Collaboration - L&T EduTech x SRMU"
                                    className="w-full h-auto lg:h-full object-cover object-center rounded-2xl shadow-[0_2px_12px_rgba(15,31,61,0.08)]"
                                />
                            </div>

                        </div>
                    </div>
                </section>

                {/* ── Mission & Vision ─────────────────────────────────────── */}
                <section className="py-8 md:py-10 px-4 sm:px-6 bg-[#F0F6FB]">
                    <div className={`${Classes["container"]} cse-content-container`}>
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">

                            {/* ── Left: Mission + Vision stacked ── */}
                            <div className="flex flex-col gap-px bg-[#DCE6F2] border border-[#d62c2b] rounded-2xl overflow-hidden flex-1">
                                {/* Mission */}
                                <div className="bg-white p-8 sm:p-10 border-t-[4px] border-[#d62c2b] flex-1">
                                    <div className="mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 28 29" fill="none">
                                            <path d="M17.6225 20.7205C18.5671 19.752 20.7541 18.4177 21.1551 15.0785C21.3152 14.056 21.2618 13.0115 20.9982 12.0107C20.7345 11.0098 20.2664 10.0745 19.6234 9.26356C18.9803 8.45264 18.1762 7.78372 17.2618 7.29897C16.3474 6.81423 15.3425 6.52417 14.3104 6.44708C13.2783 6.37 12.2415 6.50755 11.2652 6.85107C10.2889 7.1946 9.39439 7.73664 8.638 8.44304C7.8816 9.14944 7.27975 10.0049 6.87038 10.9554C6.461 11.906 6.25298 12.931 6.25942 13.966C6.25942 18.1325 8.78392 19.6475 9.85698 20.7205C10.6985 21.5875 10.5686 21.9122 10.5686 23.31C10.5588 23.4862 10.585 23.6625 10.6456 23.8282C10.7063 23.9939 10.8 24.1456 10.9212 24.2739C11.0423 24.4022 11.1883 24.5044 11.3503 24.5744C11.5123 24.6444 11.6868 24.6807 11.8633 24.681H15.6162C15.7927 24.6813 15.9675 24.6454 16.1297 24.5756C16.2919 24.5058 16.4381 24.4036 16.5593 24.2751C16.6804 24.1467 16.774 23.9948 16.8342 23.8288C16.8945 23.6628 16.9201 23.4862 16.9095 23.31C16.8459 21.8854 16.6765 21.6919 17.6225 20.7205Z" stroke="#d62c2b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11.5656 24.6035V26.7383C11.5656 27.3214 11.8904 27.8 12.2899 27.8H15.1886C15.591 27.8 15.9143 27.32 15.9143 26.7383V24.6035M12.6387 9.72192C11.805 9.7223 11.0056 10.0537 10.4162 10.6434C9.82686 11.233 9.49577 12.0326 9.49577 12.8663M24.0921 14.2513H26.6816M21.4857 5.76292L23.3226 3.92602M22.8976 21.4464L24.7345 23.2819M13.74 0.800049V2.89391M4.19545 3.92461L6.01965 5.76292M2.78354 23.2819L4.60773 21.4464M3.38784 14.2513H0.799805" stroke="#d62c2b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#d62c2b] font-bold flex items-center gap-2 mb-3.5">
                                        <span className="w-[22px] h-[2px] bg-[#d62c2b] inline-block" /> Mission
                                    </div>
                                    <h3 className="text-[22px] font-bold font-display text-[#14284E] mb-5">What we work towards every day</h3>

                                    <div>
                                        <ul className="space-y-3">
                                            {[
                                                "To expose graduate and postgraduate students to fundamental principles and cutting-edge technologies in Computer Science and Engineering through an updated, industry-ready curriculum.",
                                                "To develop multidisciplinary skills required to solve complex real-world problems and participate in collaborative projects through diverse teaching approaches.",
                                                "To promote research, innovation and industry collaboration among students and faculty.",
                                                "To encourage professional, ethical and social responsibility among graduates.",
                                            ].map((item, index) => (
                                                <li key={item} className={`${(!rm["mission"] && index > 0) ? "hidden sm:flex" : "flex"} items-start gap-3 text-[14.5px] text-[#3F4C56] text-justify`}>
                                                    <span className="text-[#d62c2b] font-bold shrink-0 mt-0.5">+</span>
                                                    <div className={`${!rm["mission"] && index === 0 ? "line-clamp-2 sm:line-clamp-none" : ""}`}>{item}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button className="cse-read-more cse-mobile-button text-[14px] font-bold uppercase tracking-wider text-[#d62c2b] hover:text-[#14284E] mt-4 flex items-center justify-center gap-1 sm:hidden mx-auto transition-colors" onClick={() => toggleRm("mission")}>
                                        {rm["mission"] ? "Read Less" : "Read More"}
                                    </button>
                                </div>
                                {/* Vision */}
                                <div className="bg-[#14284E] p-8 sm:p-10 border-t-[4px] border-[#ffb703] flex-1">
                                    <div className="mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 27 27" fill="none">
                                            <path d="M13.8003 2.26177C12.0086 2.26099 10.2441 2.70031 8.6619 3.54114C7.07972 4.38196 5.7283 5.59855 4.7264 7.08396C3.7245 8.56938 3.1028 10.2782 2.91593 12.0601C2.72907 13.8421 2.98276 15.6426 3.65472 17.3036C3.71572 17.4422 3.74827 17.5917 3.75042 17.7432C3.75257 17.8947 3.72428 18.045 3.66724 18.1854C3.6102 18.3257 3.52556 18.4532 3.41835 18.5602C3.31113 18.6672 3.18351 18.7516 3.04307 18.8084C2.90263 18.8652 2.29983 18.8555 2.16128 18.7943C2.02273 18.733 1.89789 18.6446 1.79416 18.5342C1.69043 18.4238 1.60992 18.2936 1.55741 18.1515C0.41602 15.3287 0.285442 12.1981 1.18779 9.28997C2.09014 6.38186 3.96995 3.87504 6.50881 2.19412C9.04767 0.513196 12.0895 -0.238498 15.1191 0.0663603C18.1487 0.371218 20.9798 1.71389 23.1328 3.86694C25.2859 6.02 26.6285 8.85109 26.9334 11.8807C27.2383 14.9103 26.4866 17.9521 24.8056 20.4909C23.1247 23.0298 20.6179 24.9096 17.7098 25.812C14.8017 26.7143 11.6711 26.5837 8.84821 25.4424C8.57605 25.3256 8.36048 25.1068 8.24779 24.833C8.13509 24.5591 8.13424 24.252 8.24542 23.9775C8.35659 23.703 8.57094 23.4831 8.84245 23.3648C9.11396 23.2466 9.42101 23.2395 9.6977 23.345C11.1934 23.9488 12.8042 24.2143 14.4146 24.1225C16.0249 24.0307 17.5951 23.5839 19.0126 22.8142C20.43 22.0444 21.6597 20.9708 22.6136 19.67C23.5675 18.3693 24.2219 16.8737 24.53 15.2904C24.8381 13.7072 24.7922 12.0753 24.3957 10.5118C23.9992 8.94834 23.2618 7.49188 22.2364 6.24677C21.211 5.00166 19.923 3.99872 18.4645 3.30978C17.006 2.62085 15.4133 2.26297 13.8003 2.26177Z" fill="#FFC800" />
                                            <path d="M5.12459 13.201C5.12459 15.1881 5.79302 17.0199 6.91712 18.4835L6.20946 19.1911L6.16571 19.2364H4.40034C3.80028 19.2369 3.225 19.4757 2.80095 19.9003L0.330954 22.3703C0.172891 22.5286 0.0652728 22.7301 0.0216904 22.9495C-0.0218921 23.1689 0.00051653 23.3963 0.0860859 23.6029C0.171655 23.8096 0.316548 23.9862 0.502462 24.1106C0.688377 24.235 0.906975 24.3014 1.13065 24.3016H2.69986V25.8708C2.70006 26.0945 2.76653 26.3131 2.89089 26.499C3.01525 26.6849 3.19192 26.8298 3.39858 26.9154C3.60524 27.001 3.83262 27.0234 4.052 26.9798C4.27139 26.9362 4.47294 26.8286 4.6312 26.6705L7.1012 24.199C7.5254 23.7754 7.76417 23.2007 7.7651 22.6012V20.8358L7.81036 20.792L8.51801 20.0859C10.0716 21.2783 11.9829 21.9101 13.9411 21.8783C15.8993 21.8466 17.7892 21.1532 19.3033 19.9111C20.8174 18.6689 21.8667 16.951 22.2806 15.0368C22.6944 13.1225 22.4484 11.1246 21.5826 9.36794C20.7167 7.61127 19.282 6.19921 17.5118 5.36145C15.7416 4.52369 13.74 4.3095 11.8326 4.75373C9.92518 5.19797 8.22418 6.27448 7.00627 7.80817C5.78835 9.34187 5.12517 11.2425 5.12459 13.201ZM13.8005 6.78832C14.8069 6.78861 15.799 7.02573 16.6967 7.4805C17.5944 7.93528 18.3725 8.59495 18.968 9.40616C19.5635 10.2174 19.9598 11.1573 20.1247 12.1501C20.2896 13.1428 20.2185 14.1604 19.9173 15.1206C19.6161 16.0808 19.0931 16.9566 18.3906 17.6772C17.6882 18.3978 16.826 18.943 15.8738 19.2686C14.9216 19.5942 13.9062 19.6912 12.9095 19.5517C11.9129 19.4121 10.9632 19.04 10.137 18.4654L12.6206 15.9803C13.2654 16.2538 13.9852 16.2946 14.6567 16.0956C15.3282 15.8966 15.9096 15.4702 16.3012 14.8895C16.6928 14.3089 16.8702 13.61 16.803 12.9129C16.7359 12.2157 16.4283 11.5637 15.9331 11.0684C15.4378 10.5732 14.7858 10.2656 14.0886 10.1985C13.3914 10.1313 12.6926 10.3087 12.112 10.7003C11.5313 11.0919 11.1049 11.6733 10.9059 12.3448C10.7069 13.0163 10.7477 13.7361 11.0212 14.3809L8.53461 16.863C7.86556 15.9012 7.47278 14.7745 7.39892 13.6052C7.32506 12.4359 7.57295 11.2688 8.11567 10.2305C8.6584 9.19213 9.4752 8.32233 10.4774 7.7155C11.4796 7.10868 12.6289 6.78801 13.8005 6.78832ZM6.16571 20.7453L6.25624 20.8343V22.5996C6.2558 22.7996 6.17602 22.9911 6.03444 23.1323L4.20872 24.958V23.5472C4.20872 23.3471 4.12923 23.1552 3.98775 23.0137C3.84627 22.8723 3.65438 22.7928 3.45429 22.7928H2.042L3.86772 20.9671C3.93778 20.8968 4.02103 20.841 4.11269 20.8029C4.20434 20.7649 4.30261 20.7453 4.40185 20.7453H6.16571Z" fill="#FFC800" />
                                        </svg>
                                    </div>
                                    <div className="text-[13px] tracking-[0.08em] uppercase text-[#ffb703] font-bold flex items-center gap-2 mb-4">
                                        <span className="w-[22px] h-[2px] bg-[#ffb703] inline-block" /> Vision
                                    </div>
                                    <h3 className="text-[22px] font-bold font-display text-white mb-5">Where we're headed</h3>
                                    <p className={`text-[14.5px] text-white/90 leading-relaxed text-justify ${!rm["vision"] ? "line-clamp-2 sm:line-clamp-none" : ""}`}>
                                        To build the nation by fostering industry- and research-oriented studies in Computer Science and Engineering and to become a centre of excellence in developing indigenous technologies for the advancement of society.
                                    </p>
                                    <button className="cse-read-more cse-mobile-button text-[14px] font-bold uppercase tracking-wider text-[#ffb703] hover:text-white mt-4 flex items-center justify-center gap-1 sm:hidden mx-auto transition-colors" onClick={() => toggleRm("vision")}>
                                        {rm["vision"] ? "Read Less" : "Read More"}
                                    </button>
                                </div>
                            </div>

                            {/* ── Right: YouTube video autoplay ── */}
                            <div className="w-full lg:w-[340px] xl:w-[380px] shrink-0 rounded-2xl overflow-hidden shadow-xl border border-[#DCE6F2]">
                                {/* 9:16 portrait aspect ratio wrapper */}
                                <div className="relative w-full" style={{ paddingTop: "177.78%" }}>
                                    <iframe
                                        src="https://www.youtube.com/embed/fs8msMDYd-s?autoplay=1&mute=1&loop=1&playlist=fs8msMDYd-s&rel=0&modestbranding=1&controls=1"
                                        title="Department Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ── Programs ─────────────────────────────────────────────── */}
                <section id="programs" aria-labelledby="programs-heading" className="relative isolate overflow-hidden bg-white px-4 pt-8 pb-12 text-[#14284E] scroll-mt-24 sm:px-6 lg:pt-5 lg:pb-14">
                    <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-16 size-52 rounded-full bg-[#E0F1FF]" />
                    <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-44 size-80 rounded-full border-[48px] border-[#E0F1FF] bg-[#E0F1FF]" />
                    <div aria-hidden="true" className="pointer-events-none absolute -right-20 -bottom-7 grid size-34 place-items-center rounded-full border-4 border-[#E0F1FF]">
                        <div className="size-23 rounded-full bg-[#FFB703]" />
                    </div>
                    <div className="relative mx-auto w-full max-w-[1504px] lg:w-[94%]">
                        <div className="mb-6 text-center">
                            <h2 id="programs-heading" className="font-display text-[clamp(28px,2.4vw,40px)] leading-[1.2] font-bold text-[#14284E]">
                                School of <span className="text-[#FFB703]">Computer Science Engineering</span>
                            </h2>
                            <div aria-hidden="true" className="mt-4 flex justify-center gap-2.5">
                                <span className="h-[3px] w-11 bg-[#FFB703]" />
                                <span className="h-[3px] w-5 bg-[#0F4A85]" />
                            </div>
                        </div>

                        <div className="grid items-start gap-7 lg:grid-cols-[minmax(260px,0.96fr)_minmax(0,3fr)] lg:gap-9">
                            <div className="rounded-2xl border border-[#E0F1FF] bg-white/80 px-3 pt-3 pb-4 shadow-[0_4px_24px_#3479c908] lg:mt-4">
                                <p className="mx-2.5 mb-5 text-[11px] leading-4 font-bold tracking-[0.2em] text-[#0F4A85]/70 uppercase">Choose your study level</p>
                                <div className="flex flex-col gap-2.5" role="group" aria-label="Program categories">
                                    {departmentPrograms.map((cat, idx) => (
                                        <button
                                            key={cat.category}
                                            type="button"
                                            aria-pressed={activeProgramCategory === idx}
                                            aria-controls="department-program-list"
                                            onClick={() => setActiveProgramCategory(idx)}
                                            className={`relative flex w-full flex-1 cursor-pointer items-center gap-4 rounded-[14px] px-5 py-4 text-left text-[#14284E] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4A85] motion-reduce:transition-none lg:gap-6 ${activeProgramCategory === idx ? "bg-[#E0F1FF] before:absolute before:inset-y-4 before:left-0 before:w-[5px] before:rounded-r-full before:bg-[#FFB703]" : "bg-transparent hover:bg-[#E0F1FF]/50"}`}
                                        >
                                            <span className={`grid size-[54px] shrink-0 place-items-center rounded-[20px] ${activeProgramCategory === idx ? "bg-white" : "bg-[#E0F1FF]"}`}>
                                                <cat.icon size={29} strokeWidth={1.9} aria-hidden="true" />
                                            </span>
                                            <span className="min-w-0 flex-1 text-[14px] leading-[1.5] font-semibold">
                                                <span className="block max-w-[145px]">{cat.category}</span>
                                                <small className="mt-1 block text-[12px] font-medium text-[#0F4A85]/70">{cat.programs.length} {cat.programs.length === 1 ? "program" : "programs"}</small>
                                            </span>
                                            <ChevronRight size={18} className="shrink-0 text-[#0F4A85]/70" aria-hidden="true" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div id="department-program-list" className="min-w-0">
                                <div className="mb-[18px] flex items-start justify-between gap-3">
                                    <h3 className="text-[16px] leading-6 font-semibold text-[#14284E] after:mt-1 after:block after:h-[3px] after:w-[38px] after:bg-[#FFB703] sm:text-[18px]">{departmentPrograms[activeProgramCategory].category}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="pt-1 text-right text-[12px] leading-5 font-medium text-[#0F4A85]/70 sm:block" role="status" aria-atomic="true">
                                            {departmentPrograms[activeProgramCategory].programs.length} {departmentPrograms[activeProgramCategory].programs.length === 1 ? "program" : "programs"} available
                                        </span>
                                        {/* Mobile carousel nav buttons */}
                                        <div className="flex items-center gap-2 sm:hidden">
                                            <button
                                                onClick={() => programsEmblaApi?.scrollPrev()}
                                                disabled={!programsCanPrev}
                                                className="cse-mobile-button w-8 h-8 flex items-center justify-center rounded-full bg-white border border-[#E0F1FF] shadow-sm text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                                aria-label="Previous program"
                                            >
                                                <ArrowLeft className="w-3.5 h-3.5" />
                                            </button>
                                            <button
                                                onClick={() => programsEmblaApi?.scrollNext()}
                                                disabled={!programsCanNext}
                                                className="cse-mobile-button w-8 h-8 flex items-center justify-center rounded-full bg-white border border-[#E0F1FF] shadow-sm text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                                aria-label="Next program"
                                            >
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Embla carousel wrapper — scroll on mobile, grid on sm+ */}
                                <div className="overflow-hidden sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0" ref={programsEmblaRef}>
                                    <div className="flex sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-5 pb-4 sm:pb-0 xl:gap-x-6">
                                        {departmentPrograms[activeProgramCategory].programs.map((prog) => (
                                            <article key={prog.link} className="flex min-h-[208px] min-w-0 flex-col rounded-2xl border border-[#E0F1FF] bg-white/85 px-6 pt-3.5 pb-[18px] shadow-[0_4px_20px_#3479c906] transition-shadow hover:shadow-[0_8px_24px_#3479c912] focus-within:border-[#21A5DB] motion-reduce:transition-none shrink-0 w-[80vw] sm:w-auto sm:shrink">
                                                <div className="mb-1 flex items-start justify-between gap-2">
                                                    <span className="grid size-[52px] shrink-0 place-items-center rounded-full bg-[#E0F1FF] text-[#0F4A85]">
                                                        <prog.icon size={28} strokeWidth={1.9} aria-hidden="true" />
                                                    </span>
                                                    <span className="mt-2 rounded-full bg-[#E0F1FF] px-3 py-1 text-center text-[10px] leading-[1.4] font-medium text-[#0F4A85]">
                                                        {departmentPrograms[activeProgramCategory].badge}
                                                    </span>
                                                </div>
                                                <h4 className="font-display mb-3 flex-1 text-[15.5px] leading-[1.4] font-semibold text-[#14284E]">{prog.title}</h4>
                                                <div>
                                                    <Link to={prog.link} aria-label={`View more about ${prog.title}`} className="group inline-flex min-h-10 items-center justify-between gap-5 rounded-full bg-[#FFB703] px-5 py-2.5 text-[10px] leading-5 font-bold text-[#14284E] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F4A85] motion-reduce:transition-none">
                                                        View more
                                                        <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" aria-hidden="true" />
                                                    </Link>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Labs & Practical Learning ─────────────────────────────── */}
                <section id="labs" className="py-8 md:pt-6 md:pb-12 px-4 sm:px-6 bg-white scroll-mt-24">
                    <div className={`${Classes["container"]} cse-content-container`}>

                        {/* Header & Controls */}
                        <div className="w-full mb-8 md:mb-10 flex flex-col gap-4">
                            <div className="w-full">
                                <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3">
                                    Labs &amp; <span className="text-[#ffb703]">Practical Learning</span>
                                </h2>
                                <p className={`text-[15.5px] text-[#4B5A72] leading-relaxed text-justify ${!rm["labs"] ? "line-clamp-2 sm:line-clamp-none" : ""}`}>
                                    The Department of Computer Science and Engineering at Shri Ramswaroop Memorial University provides students with practical learning environments designed to complement classroom teaching. Through programming, computing, networking, artificial intelligence, cloud technologies and industry-oriented laboratories, students get opportunities to apply concepts, develop projects and strengthen their technical skills.
                                </p>
                                <button className="cse-read-more cse-mobile-button text-[14px] font-bold text-[#ffb703] mt-3 flex items-center justify-start sm:hidden transition-colors hover:text-[#ffb703]" onClick={() => toggleRm("labs")}>
                                    {rm["labs"] ? "Read Less" : "Read More"}
                                </button>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex items-center gap-3 shrink-0 self-start sm:hidden">
                                <button
                                    onClick={() => labsEmblaApi?.scrollPrev()}
                                    disabled={!labsCanPrev}
                                    className="cse-mobile-button w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-sm text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                    aria-label="Previous Lab"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => labsEmblaApi?.scrollNext()}
                                    disabled={!labsCanNext}
                                    className="cse-mobile-button w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-sm text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                    aria-label="Next Lab"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Lab Cards Carousel */}
                        <div className="overflow-hidden sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0" ref={labsEmblaRef}>
                            <div className="flex sm:grid sm:grid-cols-12 gap-5 pb-4 sm:pb-0">
                                {([
                                    {
                                        num: "01",
                                        title: "L&T Certified Lab",
                                        desc: "An industry-oriented learning environment that supports practical exposure to technologies and skills aligned with contemporary engineering and professional requirements.",
                                        accent: "#d62c2b",
                                        iconSrc: "/assets/images/new-information-system/icons/1.png",
                                        animClass: "lab-icon-mechanical",
                                    },
                                    {
                                        num: "02",
                                        title: "Artificial Intelligence & Machine Learning Lab",
                                        desc: "Students work with AI and machine learning concepts through practical exercises involving data, algorithms, model development, and intelligent applications.",
                                        accent: "#1B4F91",
                                        iconSrc: "/assets/images/new-information-system/icons/2.png",
                                        animClass: "lab-icon-orbital",
                                    },
                                    {
                                        num: "03",
                                        title: "Cyber Security Lab",
                                        desc: "The Cyber Security Lab provides students with a practical environment to understand cybersecurity concepts, identify vulnerabilities, and develop skills for protecting digital systems and networks.",
                                        accent: "#14284E",
                                        iconSrc: "/assets/images/new-information-system/icons/3.png",
                                        animClass: "lab-icon-pulse",
                                    },
                                    {
                                        num: "04",
                                        title: "Cloud Computing Lab",
                                        desc: "Provides practical exposure to cloud-based computing concepts, distributed systems, virtualization, and deployment-oriented learning.",
                                        accent: "#d62c2b",
                                        iconSrc: "/assets/images/new-information-system/icons/4.png",
                                        animClass: "lab-icon-float",
                                    },
                                    {
                                        num: "05",
                                        title: "Database Lab",
                                        desc: "Students develop practical skills in database design, SQL, data management, querying, and database-driven application development.",
                                        accent: "#1B4F91",
                                        iconSrc: "/assets/images/new-information-system/icons/5.png",
                                        animClass: "lab-icon-stack",
                                    },
                                    {
                                        num: "06",
                                        title: "Research & Development Lab",
                                        desc: "Supports project-based learning, experimentation, and research activities in emerging areas of computer science and engineering.",
                                        accent: "#14284E",
                                        iconSrc: "/assets/images/new-information-system/icons/6.png",
                                        animClass: "lab-icon-glow",
                                    },
                                    {
                                        num: "07",
                                        title: "Network Security Lab",
                                        desc: "Provides hands-on learning in computer networks, network security, information security, and foundational cybersecurity practices.",
                                        accent: "#d62c2b",
                                        iconSrc: "/assets/images/new-information-system/icons/7.png",
                                        animClass: "lab-icon-network",
                                    },
                                ] as { num: string; title: string; desc: string; accent: string; iconSrc: string; animClass: string }[]).map((lab) => (
                                    <div
                                        key={lab.num}
                                        className={`col-span-12 sm:col-span-6 lg:col-span-4 ${parseInt(lab.num) <= 4 ? "xl:col-span-3" : "xl:col-span-4"} group relative flex flex-col rounded-2xl border border-[#DCE6F2] bg-white p-6 shadow-[0_2px_12px_rgba(15,31,61,0.04)] hover:shadow-[0_10px_28px_rgba(15,31,61,0.10)] hover:-translate-y-1 transition-all duration-300 overflow-hidden shrink-0 w-[85vw] sm:w-auto sm:shrink`}
                                    >
                                        {/* Accent top bar */}
                                        <div className="absolute top-0 left-0 right-0 h-[4px] rounded-t-2xl" style={{ backgroundColor: lab.accent }} />

                                        {/* Top row: number+label left, icon right */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex flex-col">
                                                <span
                                                    className="block text-[22px] font-bold leading-none mb-3"
                                                    style={{ color: lab.accent }}
                                                >
                                                    Lab/{lab.num}
                                                </span>
                                                <div className="w-8 h-[2.5px] rounded-full" style={{ backgroundColor: lab.accent }} />
                                            </div>
                                            <img
                                                src={lab.iconSrc}
                                                alt=""
                                                className={`w-10 h-10 object-contain shrink-0 opacity-90 group-hover:opacity-100 ${lab.animClass}`}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-[15.5px] font-bold font-display text-[#14284E] mb-2 leading-snug group-hover:text-[#1B4F91] transition-colors">
                                            {lab.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-[13px] text-[#4B5A72] leading-relaxed text-justify flex-grow">
                                            {lab.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col items-center justify-center text-center">
                            <Link to="/campus-life" className="cse-mobile-button inline-flex items-center gap-2 bg-[#ffb703] hover:bg-[#ffb703] text-[#14284E] font-bold uppercase tracking-wide text-[14px] px-8 py-3.5 rounded-lg shadow-sm transition-all hover:-translate-y-0.5">
                                Take a Campus Tour <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                    </div>
                </section>

                {/* ── Events ───────────────────────────────────────────────── */}
                <section id="events" className="py-8 md:py-10 px-4 sm:px-6 bg-[#F0F6FB] scroll-mt-24">
                    <div className={`${Classes["container"]} cse-content-container`}>
                        <div className="w-full mb-8 flex flex-col gap-4">
                            <div className="w-full">
                                {/* <div className="text-[12px] sm:text-[13px] tracking-[0.1em] uppercase text-[#d62c2b] font-bold flex items-center gap-2 mb-3">
                                    <span className="w-4 h-[2px] bg-[#d62c2b] inline-block shrink-0" /> BEYOND THE CLASSROOM <span className="w-4 h-[2px] bg-[#d62c2b] inline-block shrink-0" />
                                </div> */}
                                <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3">
                                    From Classroom Concepts to <span className="text-[#ffb703]">Real-World Applications</span>
                                </h2>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex items-center gap-3 shrink-0 self-start sm:hidden">
                                <button
                                    onClick={() => eventsEmblaApi?.scrollPrev()}
                                    disabled={!eventsCanPrev}
                                    className="cse-mobile-button w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-sm text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                    aria-label="Previous Event"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => eventsEmblaApi?.scrollNext()}
                                    disabled={!eventsCanNext}
                                    className="cse-mobile-button w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-sm text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                    aria-label="Next Event"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="overflow-hidden sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0" ref={eventsEmblaRef}>
                            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-4 sm:pb-0">
                                {events.map((ev, i) => (
                                    <div key={i} className="flex flex-col shrink-0 w-[85vw] sm:w-auto sm:shrink bg-white border border-[#DCE6F2] border-b-[4px] border-b-[#d62c2b] rounded-2xl overflow-hidden shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1 transition-all duration-300">
                                        <div className="w-full aspect-[16/9] relative overflow-hidden bg-[#DCE6F2]">
                                            <img src={ev.img} alt={ev.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                                        </div>
                                        <div className="p-5 sm:p-6 flex flex-col flex-grow">
                                            <span className="text-[10.5px] font-bold uppercase tracking-[0.06em] text-[#d62c2b] mb-2 block">{ev.tag}</span>
                                            <h5 className="font-bold text-[16px] text-[#14284E] font-display mb-2 leading-snug line-clamp-2">{ev.title}</h5>
                                            <div className="text-[13.5px] text-[#3F4C56] mb-4 flex-grow">
                                                <span className="line-clamp-2">{ev.speaker}</span>
                                            </div>
                                            <div className="mt-auto pt-4 border-t border-[#F1F5F9]">
                                                <button
                                                    onClick={() => setSelectedEvent(ev)}
                                                    className="cse-read-more cse-mobile-button text-[11.5px] font-bold text-[#d62c2b] hover:text-[#1B4F91] uppercase tracking-[0.08em] flex items-center gap-1.5 transition-colors"
                                                >
                                                    READ MORE →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center mt-10">
                            <a href="#" className="cse-mobile-button group px-8 py-3.5 text-[14px] font-bold uppercase tracking-wider bg-[#ffb703] text-[#14284E] rounded-xl shadow-[0_4px_14px_rgba(20,40,78,0.2)]  hover:shadow-[0_6px_20px_rgba(20,40,78,0.3)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                                View All Events <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── Placements ───────────────────────────────────────────── */}
                <section className="pt-8 md:pt-10 pb-4 px-4 sm:px-6 bg-white scroll-mt-24" id="placements">
                    <div className={`${Classes["container"]} cse-content-container mx-auto`}>

                        {/* Placement Stats + Image */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">

                            {/* Stats */}

                            <div className="w-full">


                                <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                    Where our Students <span className="text-[#ffb703]">Get Placed</span>
                                </h2>

                                <div className="mt-4">
                                    <p className={`text-[15px] leading-6 text-[#4B5A72] text-justify ${!rm['placement1'] ? 'rm-clamp' : ''}`}>
                                        Dedicated placement training — resume building, coding practice,
                                        mock interviews and group discussions — starts from the final year.
                                    </p>
                                    <button className="cse-read-more cse-mobile-button rm-btn" onClick={() => toggleRm('placement1')}>{rm['placement1'] ? 'Read Less' : 'Read More'}</button>
                                </div>

                                {/* Mobile stats — dark card */}
                                <div className="sm:hidden mt-6 bg-[#14284E] rounded-2xl p-5 grid grid-cols-2 gap-x-6 gap-y-5">
                                    {[
                                        { val: "₹53 LPA", label: "Highest Package" },
                                        { val: "₹4.5 LPA", label: "Average Package" },
                                        { val: "1200+", label: "Job Offers Given" },
                                        { val: "225+", label: "Students Placed" },
                                    ].map((s, i) => (
                                        <div key={i}>
                                            <div className="text-[15px] font-bold text-[#ffb703] mb-1">{s.val}</div>
                                            <div className="text-[12.5px] text-white/80 leading-snug">{s.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Desktop stats — individual white cards */}
                                <div className="hidden sm:grid grid-cols-2 gap-4 mt-6">

                                    <div className="bg-white border border-[#DCE6F2] rounded-xl p-5 min-h-[90px] shadow-sm">
                                        <div className="text-[14.5px] font-semibold text-[#ffb703] mb-3">
                                            ₹53 LPA
                                        </div>

                                        <h3 className="text-[14px] font-bold font-display text-[#14284E]">
                                            Highest Package
                                        </h3>
                                    </div>

                                    <div className="bg-white border border-[#DCE6F2] rounded-xl p-5 min-h-[90px] shadow-sm">
                                        <div className="text-[14.5px] font-semibold text-[#ffb703] mb-3">
                                            ₹4.5 LPA
                                        </div>

                                        <h3 className="text-[14px] font-bold font-display text-[#14284E]">
                                            Average Package
                                        </h3>
                                    </div>

                                    <div className="bg-white border border-[#DCE6F2] rounded-xl p-5 min-h-[90px] shadow-sm">
                                        <div className="text-[14.5px] font-semibold text-[#ffb703] mb-3">
                                            1200+
                                        </div>

                                        <h3 className="text-[14px] font-bold font-display text-[#14284E]">
                                            Job Offers Given
                                        </h3>
                                    </div>

                                    <div className="bg-white border border-[#DCE6F2] rounded-xl p-5 min-h-[90px] shadow-sm">
                                        <div className="text-[14.5px] font-semibold text-[#ffb703] mb-3">
                                            225+
                                        </div>

                                        <h3 className="text-[14px] font-bold font-display text-[#14284E]">
                                            Students Placed
                                        </h3>
                                    </div>

                                </div>

                            </div>

                            {/* Placement Image */}
                            <div className="w-full mt-6 lg:mt-0 hidden sm:block">
                                <img
                                    src="https://ik.imagekit.io/ttalcskjf/IMAGE%202.webp?updatedAt=1788439003256"
                                    alt="Student preparing for career and placement"
                                    className="w-full aspect-[14/8] object-cover rounded-xl border border-[#DCE6F2]"
                                    loading="lazy"
                                />
                            </div>

                        </div>

                        {/* Top Recruiters — seamless continuous scroll */}
                        <div className="mt-7">
                            <h3 className="text-[17px] font-bold font-display text-[#14284E] mb-3.5">
                                Top Recruiters
                            </h3>
                            <div className="overflow-hidden motion-reduce:overflow-x-auto">
                                <div className="cse-recruiter-track">
                                    {[0, 1].map(copy => (
                                        <div key={copy} className={`flex shrink-0 gap-3 pr-3 ${copy === 1 ? "cse-recruiter-copy" : ""}`} aria-hidden={copy === 1 ? true : undefined}>
                                            {recruiterLogos.map(([src, name]) => (
                                                <div key={name} className="h-[64px] w-[110px] sm:h-[76px] sm:w-[190px] shrink-0 bg-white rounded-md px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-center">
                                                    <img src={src} alt={copy === 0 ? name : ""} className="max-h-6 sm:max-h-7 max-w-full w-auto object-contain" />
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* View Placement Details Button */}
                        <div className="flex justify-center w-full mt-10">
                            <Link to="https://srmu.ac.in/placements" target="_blank" className="cse-mobile-button inline-flex items-center bg-[#ffb703] hover:bg-[#ffb703] text-[#14284E] font-bold uppercase tracking-wide text-[14px] px-6 py-3 rounded-md transition-colors shadow-sm hover:-translate-y-0.5">
                                View Placement Details →
                            </Link>
                        </div>
                    </div>
                </section>


                {/* ── Faculty ──────────────────────────────────────────────── */}
                <section id="faculty" className="pt-4 pb-0 sm:py-10 px-4 sm:px-6 bg-gradient-to-b from-white to-[#E0F1FF] scroll-mt-24">
                    <div className={`${Classes["container"]} cse-content-container`}>
                        <div className="w-full mb-8">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffb703] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffb703] inline-block" /> Faculty List
                            </div> */}
                            <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3">
                                Learn from Experienced <span className="text-[#ffb703]">Academic & Research Professionals.</span>
                            </h2>
                            <p className="text-[15.5px] text-[#4B5A72] text-justify mt-4 mb-6">
                                The university highlights faculty recruitment from reputed institutions including IIT, IIM, MNNIT and IIT-BHU, with an emphasis on interactive, personalized teaching.
                            </p>
                        </div>

                        {/* Faculty Embla Carousel */}
                        <div className="relative mb-0 sm:mb-10">
                            {/* Prev button */}
                            <button
                                onClick={() => facultyEmblaApi?.scrollPrev()}
                                disabled={!facultyCanPrev}
                                className="cse-mobile-button absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-md text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Previous"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </button>

                            {/* Embla viewport */}
                            <div className="overflow-hidden" ref={facultyEmblaRef}>
                                <div className="flex gap-4">
                                    {facultyList.map(f => (
                                        <div key={f.name} className="bg-[#EEF5FC] border border-[#DCE6F2] border-b-[4px] border-b-[#d62c2b] rounded-2xl overflow-hidden text-center pb-4 shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col flex-shrink-0" style={{ width: "220px" }}>
                                            <div className="w-full bg-[#EAEAEA] mb-4 relative" style={{ aspectRatio: "4/5" }}>
                                                {f.isHod && (
                                                    <div className="absolute top-3 left-3 bg-[#d62c2b] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm z-10">
                                                        HOD
                                                    </div>
                                                )}
                                                <img
                                                    src={f.img}
                                                    alt={f.name}
                                                    onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(f.name) + "&background=EAEAEA&color=14284E&size=256"; }}
                                                    className="w-full h-full object-cover object-top mix-blend-multiply relative z-0"
                                                />
                                            </div>
                                            <h5 className="font-bold text-[14px] text-[#14284E] px-3 mb-1 line-clamp-2">{f.name}</h5>
                                            <span className="text-[11px] text-[#1B4F91] font-bold uppercase tracking-[0.05em] px-2">{f.role}</span>
                                            <div className="mt-auto pt-3">
                                                {f.isHod && (
                                                    <button
                                                        onClick={() => setSelectedFaculty(f)}
                                                        className="cse-mobile-button text-[11px] font-bold text-[#d62c2b] hover:text-[#14284E] uppercase tracking-wider flex items-center justify-center gap-1 w-full transition-colors"
                                                    >
                                                        Read More →
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Next button */}
                            <button
                                onClick={() => facultyEmblaApi?.scrollNext()}
                                disabled={!facultyCanNext}
                                className="cse-mobile-button absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-md text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Next"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* ── Key Highlights ───────────────────────────────────────── */}
                <section className="pt-8 pb-6 md:pt-10 md:pb-6 px-4 sm:px-6 bg-[#14284e]">
                    <div className={`${Classes["container"]} cse-content-container`}>
                        <div className="w-full mb-8 flex flex-col gap-4">
                            <div className="w-full">
                                <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-white">
                                    What Makes the <span className="text-[#ffb703]">CSE Department Different</span> in SRMU?
                                </h2>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex items-center gap-3 shrink-0 self-start sm:hidden">
                                <button
                                    onClick={() => whyEmblaApi?.scrollPrev()}
                                    disabled={!whyCanPrev}
                                    className="cse-mobile-button w-10 h-10 flex items-center justify-center rounded-full bg-[#14284e] border border-white/20 shadow-sm text-white hover:bg-white hover:text-[#14284e] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                    aria-label="Previous"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => whyEmblaApi?.scrollNext()}
                                    disabled={!whyCanNext}
                                    className="cse-mobile-button w-10 h-10 flex items-center justify-center rounded-full bg-[#14284e] border border-white/20 shadow-sm text-white hover:bg-white hover:text-[#14284e] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                    aria-label="Next"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="overflow-hidden sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0" ref={whyEmblaRef}>
                            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-px pb-4 sm:pb-0 sm:bg-white/20 sm:border sm:border-white/20 sm:rounded-2xl sm:overflow-hidden">
                                {whyItems.map((w, index) => (
                                    <motion.div
                                        key={w.num}
                                        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.15 }}
                                        transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.1 }}
                                        whileHover={reduceMotion ? undefined : { y: -4, backgroundColor: "#1c355e", transition: { duration: 0.2, delay: 0 } }}
                                        className="cse-why-card bg-[#14284e] p-7 sm:p-8 flex flex-col shrink-0 w-[85vw] sm:w-auto sm:shrink rounded-2xl sm:rounded-none border border-white/20 sm:border-0"
                                    >
                                        <div className="mb-5">
                                            <span className="cse-why-number block w-fit origin-left text-[14px] text-[#ffb703] font-bold tracking-[0.05em]" style={{ animationDelay: `${index * 0.25}s` }}>{w.num}</span>
                                            <div className="cse-why-underline w-6 h-[2.5px] bg-[#d62c2b] mt-2"></div>
                                        </div>
                                        <h4 className="text-white font-bold text-[17px] mb-3 font-display leading-snug">{w.title}</h4>
                                        <p className="text-white/80 text-[13.5px] leading-relaxed text-justify">{w.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                {/* ── Career Pathways ──────────────────────────────────────── */}
                <section id="careers" className="pt-6 pb-2 md:pt-8 md:pb-3 px-4 sm:px-6 bg-[#EEF5FC] border-b-[8px] border-[#ffb703] overflow-hidden">
                    <div className={`${Classes["container"]} cse-content-container`}>
                        <div className="w-full mb-4 sm:mb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div className="text-left max-w-3xl">
                                <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                    Where can a <span className="text-[#ffb703]">CSE Degree</span> take you?
                                </h2>
                            </div>

                        </div>

                        <div className="mx-auto max-w-[1100px] overflow-hidden">
                            <svg className="cse-career-diagram" viewBox="0 35 1040 615" role="img" aria-labelledby="cse-career-title cse-career-description">
                                <title id="cse-career-title">Career Opportunities</title>
                                <desc id="cse-career-description">{careerItems.map(lines => lines.join(" ")).join(", ")}</desc>
                                <defs>
                                    <linearGradient id="cse-career-gradient" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#263d70" />
                                        <stop offset="100%" stopColor="#192748" />
                                    </linearGradient>
                                    <filter id="cse-career-shadow" x="-40%" y="-40%" width="180%" height="200%">
                                        <feDropShadow dx="0" dy="16" stdDeviation="13" floodColor="#14284e" floodOpacity="0.22" />
                                    </filter>
                                </defs>
                                <g className="cse-career-orbit" aria-hidden="true">
                                    <circle cx="520" cy="350" r="240" fill="none" stroke="#ccd5e1" strokeWidth="2" strokeDasharray="6 5" />
                                    <circle cx="520" cy="128" r="5" fill="#ffb703" />
                                </g>
                                <g aria-hidden="true">
                                    {careerItems.map((_, index) => {
                                        const angle = (index * 30 - 90) * Math.PI / 180;
                                        return <circle key={index} cx={520 + 240 * Math.cos(angle)} cy={350 + 240 * Math.sin(angle)} r="6" fill="#fff" stroke="#ffb703" strokeWidth="3" />;
                                    })}
                                </g>
                                <circle cx="520" cy="350" r="163" fill="none" stroke="#ffb703" strokeOpacity="0.35" strokeWidth="2" />
                                <g className="cse-career-core">
                                    <circle cx="520" cy="350" r="131" fill="#14284e" fillOpacity="0.045" />
                                    <circle cx="520" cy="350" r="112" fill="url(#cse-career-gradient)" filter="url(#cse-career-shadow)" />
                                    <text x="520" y="338" textAnchor="middle" fill="white" fontSize="23" fontWeight="700">
                                        <tspan x="520">Career</tspan>
                                        <tspan x="520" dy="28">Opportunities</tspan>
                                    </text>
                                    <path d="M500 383 H540" stroke="#ffb703" strokeWidth="3" strokeLinecap="round" />
                                </g>
                                <g className="cse-career-labels" fill="#14284e" fontSize="17" fontWeight="600" aria-hidden="true">
                                    {careerItems.map((lines, index) => {
                                        const angle = (index * 30 - 90) * Math.PI / 180;
                                        const centered = index === 0 || index === 6;
                                        const x = 520 + 240 * Math.cos(angle) + (centered ? 0 : index < 6 ? 22 : -22);
                                        const y = 350 + 240 * Math.sin(angle) + (index === 0 ? -46 : index === 6 ? 38 : 5) - (lines.length - 1) * 11;
                                        return (
                                            <text key={index} x={x} y={y} textAnchor={centered ? "middle" : index < 6 ? "start" : "end"} fontSize={index === 0 ? 21 : undefined}>
                                                {lines.map((line, lineIndex) => <tspan key={line} x={x} dy={lineIndex === 0 ? 0 : 23}>{line}</tspan>)}
                                                {/* {index === 0 && <tspan x={x} dy="24" fontSize="14" fontWeight="400" fill="#697586">(Software, Web, or Mobile App Developer)</tspan>} */}
                                            </text>
                                        );
                                    })}
                                </g>
                            </svg>
                            {/* Mobile-only compact circle diagram */}
                            <svg
                                className="sm:hidden block w-full"
                                viewBox="-80 10 530 390"
                                role="img"
                                aria-label="Career Opportunities diagram"
                            >
                                <defs>
                                    <linearGradient id="cse-m-grad" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#263d70" />
                                        <stop offset="100%" stopColor="#192748" />
                                    </linearGradient>
                                    <filter id="cse-m-shadow" x="-40%" y="-40%" width="180%" height="200%">
                                        <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#14284e" floodOpacity="0.25" />
                                    </filter>
                                </defs>

                                {/* Dashed orbit ring ONLY — this rotates */}
                                <g className="cse-m-orbit" aria-hidden="true">
                                    <circle cx="185" cy="195" r="145" fill="none" stroke="#ccd5e1" strokeWidth="1.5" strokeDasharray="5 4" />
                                </g>

                                {/* Fixed orbit dots — outside animated group */}
                                <g aria-hidden="true">
                                    {careerItems.map((_, i) => {
                                        const a = (i * 30 - 90) * Math.PI / 180;
                                        return <circle key={i} cx={185 + 145 * Math.cos(a)} cy={195 + 145 * Math.sin(a)} r="4" fill="#fff" stroke="#ffb703" strokeWidth="2" />;
                                    })}
                                </g>

                                {/* Core — breathing animation */}
                                <g className="cse-m-core">
                                    <circle cx="185" cy="195" r="68" fill="url(#cse-m-grad)" filter="url(#cse-m-shadow)" />
                                    <text x="185" y="187" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">
                                        <tspan x="185">Career</tspan>
                                        <tspan x="185" dy="17">Opportunities</tspan>
                                    </text>
                                    <path d="M170 218 H200" stroke="#ffb703" strokeWidth="2" strokeLinecap="round" />
                                </g>

                                {/* Labels — fixed, outside animated group */}
                                <g fill="#14284e" fontSize="9.5" fontWeight="600">
                                    {careerItems.map((lines, i) => {
                                        const a = (i * 30 - 90) * Math.PI / 180;
                                        const centered = i === 0 || i === 6;
                                        const ox = 185 + 145 * Math.cos(a);
                                        const oy = 195 + 145 * Math.sin(a);
                                        // Push labels further away from orbit dot so text has room
                                        const gap = 14;
                                        const lx = ox + (centered ? 0 : i < 6 ? gap : -gap);
                                        const ly = oy + (i === 0 ? -26 : i === 6 ? 24 : 3) - (lines.length - 1) * 7;
                                        return (
                                            <text key={i} x={lx} y={ly} textAnchor={centered ? "middle" : i < 6 ? "start" : "end"}>
                                                {lines.map((line, li) => (
                                                    <tspan key={line} x={lx} dy={li === 0 ? 0 : 13}>{line}</tspan>
                                                ))}
                                            </text>
                                        );
                                    })}
                                </g>
                            </svg>
                        </div>
                    </div>
                </section>

                {/* ── Scholarships ─────────────────────────────────────────── */}
                <section className="pt-4 pb-4 sm:py-10 px-4 sm:px-6 bg-white scroll-mt-24 border-b border-[#e0e0e0]" id="scholarships">
                    <div className={`${Classes["container"]} cse-content-container mx-auto`}>
                        <div className="flex flex-col lg:flex-row gap-5">

                            {/* Left Side: Jagran Banner */}
                            <div className="order-2 sm:order-none w-full lg:w-2/5 xl:w-[35%] flex">
                                <img src="/assets/images/Trophy.png" alt="Future Ready University" className="w-full h-auto object-cover rounded-[20px]" />
                            </div>

                            {/* Right Side: Scholarship Details */}
                            <div className="order-1 sm:order-none min-w-0 w-full lg:w-3/5 xl:w-[65%] flex flex-col gap-4">

                                {/* Top: Typography & Books Image */}
                                <div className="flex flex-row flex-wrap items-center justify-between bg-white rounded-[20px] p-5 border border-[#e0e0e0] shadow-sm">
                                    <div className="w-[55%] sm:w-[60%] flex flex-col items-start px-2">
                                        <span className="text-[#14284E] font-bold text-[18px] sm:text-[22px] mb-1 font-display">
                                            Avail Up to
                                        </span>
                                        <div className="text-[#d62c2b] font-black text-[50px] sm:text-[75px] leading-[0.8] tracking-tighter flex items-start mb-2 drop-shadow-sm">
                                            100% <span className="text-[28px] sm:text-[38px] leading-none mt-1 ml-1 text-[#ffb703] drop-shadow-sm">*</span>
                                        </div>
                                        <h2 className="text-[#14284E] font-black text-[24px] sm:text-[32px] font-display leading-[1] tracking-tight mb-4">
                                            Scholarships
                                        </h2>

                                        <div className="hidden sm:flex flex-row flex-nowrap items-center gap-2 sm:gap-3 w-full overflow-x-auto pb-1 sm:pb-0">
                                            <Link
                                                to="/scholarship"
                                                className="cse-mobile-button uppercase tracking-wider group relative overflow-hidden inline-flex flex-none items-center gap-1.5 sm:gap-2 bg-[#ffb703] text-[#14284E] font-bold text-[12px] sm:text-[14px] px-4 sm:px-6 py-2.5 rounded-full shadow-[0_4px_12px_rgba(255,183,3,0.3)] hover:shadow-[0_6px_16px_rgba(255,183,3,0.45)] transition-all hover:-translate-y-0.5"
                                            >
                                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                                                Apply Now
                                                <ArrowRight className="w-4 h-4 text-[#14284E] group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                                            </Link>
                                            <a
                                                href="#programs"
                                                className="cse-mobile-button uppercase tracking-wider group inline-flex flex-none items-center gap-1.5 sm:gap-2 bg-white border border-[#14284E]/20 text-[#14284E] font-bold text-[12px] sm:text-[14px] px-4 sm:px-6 py-2.5 rounded-full shadow-sm hover:bg-gray-50 hover:shadow-md transition-all hover:-translate-y-0.5"
                                            >
                                                Eligibility
                                                <ArrowRight className="w-4 h-4 text-[#14284E] group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="w-[45%] sm:w-[40%] flex justify-center mt-0">
                                        <img src={AdditionInScholarImg} alt="Scholarships" className="w-[90%] sm:w-[90%] max-w-[150px] sm:max-w-[250px] object-contain drop-shadow-md" />
                                    </div>

                                    {/* Mobile Buttons */}
                                    <div className="flex sm:hidden flex-row flex-wrap items-center gap-2 w-full mt-5 justify-center pb-1">
                                        <Link
                                            to="/scholarship"
                                            className="cse-mobile-button uppercase tracking-wider group relative overflow-hidden inline-flex flex-none items-center gap-1.5 bg-[#ffb703] text-[#14284E] font-bold text-[12px] px-4 py-2.5 rounded-full shadow-[0_4px_12px_rgba(255,183,3,0.3)] hover:shadow-[0_6px_16px_rgba(255,183,3,0.45)] transition-all"
                                        >
                                            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                                            Apply Now
                                            <ArrowRight className="w-4 h-4 text-[#14284E]" strokeWidth={2.5} />
                                        </Link>
                                        <a
                                            href="#programs"
                                            className="cse-mobile-button uppercase tracking-wider group inline-flex flex-none items-center gap-1.5 bg-white border border-[#14284E]/20 text-[#14284E] font-bold text-[12px] px-4 py-2.5 rounded-full shadow-sm transition-all"
                                        >
                                            Eligibility
                                            <ArrowRight className="w-4 h-4 text-[#14284E]" strokeWidth={2.5} />
                                        </a>
                                    </div>
                                </div>

                                {/* Bottom: Grid */}
                                <div className="bg-[#FAFAFA] p-4 sm:p-5 rounded-[20px] relative overflow-hidden border border-[#e0e0e0] flex-1">
                                    <div className="absolute -bottom-6 -right-6 opacity-20 pointer-events-none">
                                        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                                            <pattern id="dots2" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                                                <circle cx="2" cy="2" r="2" fill="#ffb703" />
                                            </pattern>
                                            <rect width="100" height="100" fill="url(#dots2)" />
                                        </svg>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 relative z-10 h-full content-start">
                                        {scholarshipItems.map((item, idx) => (
                                            <div key={idx} className={`flex items-center gap-3 bg-white p-2 px-3 sm:px-4 rounded-full shadow-[0_1px_8px_rgba(20,40,78,0.03)] hover:shadow-[0_4px_12px_rgba(20,40,78,0.08)] hover:-translate-y-0.5 transition-all duration-300 group cursor-default border border-[#F0F4F8] ${!showAllScholarships && idx >= 4 ? "hidden sm:flex" : ""}`}>
                                                <div className="w-7 h-7 rounded-full bg-[#FCE8E8] flex items-center justify-center shrink-0 group-hover:bg-[#d62c2b] group-hover:shadow-[0_4px_8px_rgba(214,44,43,0.3)] transition-all duration-300">
                                                    <item.icon className="w-3.5 h-3.5 text-[#d62c2b] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                                                </div>
                                                <div className="w-[1px] h-4 bg-gray-200 shrink-0"></div>
                                                <span className="text-[#14284E] text-[12px] sm:text-[13px] font-bold leading-snug sm:leading-[1.2] min-w-0 flex-1">
                                                    {item.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    {scholarshipItems.length > 4 && (
                                        <button
                                            onClick={() => setShowAllScholarships(!showAllScholarships)}
                                            className="cse-read-more cse-mobile-button text-[14px] font-bold text-[#ffb703] mt-3 pb-1 flex items-center justify-center sm:hidden transition-colors w-full z-20 relative"
                                        >
                                            {showAllScholarships ? "Read Less" : "Read More"}
                                        </button>
                                    )}
                                </div>

                            </div>
                        </div>

                        {/* Admission + Eligibility buttons */}
                        {/* 
                        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mt-8 pb-2">
                            <a
                                href="https://students.srmu.ac.in/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="uppercase tracking-wider flex-1 sm:flex-none flex items-center gap-1.5 sm:gap-2 bg-[#ffb703] hover:bg-[#e0a100] text-[#14284E] font-bold text-[14px]  px-2 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-md justify-center"
                            >
                                Admission <ArrowRight className="w-4 h-4 shrink-0" />
                            </a>
                            <a
                                href="#programs"
                                className="uppercase tracking-wider flex-1 sm:flex-none flex items-center gap-1.5 sm:gap-2 bg-white hover:bg-gray-50 border border-[#14284E]/30 text-[#14284E] font-bold text-[14px]  px-2 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-sm justify-center"
                            >
                                Eligibility <ArrowRight className="w-4 h-4 shrink-0" />
                            </a>
                        </div>
                        */}
                    </div>
                </section>

                {/* ── Blog Section (CSE only) ──────────────────────────── */}
                {(() => {
                    const csSlugs = new Set(ALL_TARGET_BLOGS.filter(b => b.category === "cs").map(b => b.slug));
                    const cseKeywords = [
                        "cse", "computer science", "bca", "b.tech cse", "btech cse",
                        "cyber security", "cybersecurity", "artificial intelligence",
                        "machine learning", "data science", "programming", "cloud computing",
                        "information technology", "software engineering", "network security",
                        "computer engineering", "it careers", "ai ", " ai,", "ai &",
                        "b.tech in cse", "b.tech in computer", "bca in", "cse vs",
                        "specialization", "b.tech cse vs"
                    ];
                    const isCSERelated = (card: any) => {
                        const slug = String(card.slug || "").trim();
                        if (csSlugs.has(slug)) return true;
                        const haystack = `${card.title || ""} ${slug}`.toLowerCase();
                        return cseKeywords.some(kw => haystack.includes(kw));
                    };
                    const csBlogs = blogCards.filter(isCSERelated).slice(0, 3);
                    if (csBlogs.length === 0) return null;
                    return (
                        <section className="py-10 md:py-14 px-4 sm:px-6 bg-white border-b border-[#DCE6F2]">
                            <div className={`${Classes["container"]} cse-content-container`}>
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                                    <div>
                                        {/* <div className="text-[12px] sm:text-[13px] tracking-[0.1em] uppercase text-[#d62c2b] font-bold flex items-center gap-2 mb-2">
                                            <span className="w-4 h-[2px] bg-[#d62c2b] inline-block shrink-0" /> From the Blog
                                        </div> */}
                                        <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                            Latest <span className="text-[#ffb703]">Insights & Resources</span>
                                        </h2>
                                        <p className="text-[14px] text-[#4B5A72] mt-2 max-w-xl">
                                            Guides, stories, and updates from the world of Computer Science & Engineering.
                                        </p>
                                    </div>
                                    <div className="flex sm:hidden items-center gap-3 shrink-0 w-full">
                                        {/* Navigation Buttons */}
                                        <div className="flex items-center gap-2 sm:hidden">
                                            <button
                                                onClick={() => blogsEmblaApi?.scrollPrev()}
                                                disabled={!blogsCanPrev}
                                                className="cse-mobile-button w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-sm text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                                aria-label="Previous Blog"
                                            >
                                                <ArrowLeft className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => blogsEmblaApi?.scrollNext()}
                                                disabled={!blogsCanNext}
                                                className="cse-mobile-button w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-sm text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                                aria-label="Next Blog"
                                            >
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Blog Cards — 3 cols on desktop */}
                                <div className="overflow-hidden sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0" ref={blogsEmblaRef}>
                                    <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 touch-pan-y">
                                        {csBlogs.map((card: any, idx: number) => {
                                            const resolvedSlug = String(card.slug || "").trim();
                                            const blogPath = `/blog/${resolvedSlug && resolvedSlug !== "null" ? resolvedSlug : normalizeRouteSlug(card.title || "")}`;
                                            return (
                                                <div key={card.id || card.slug || `blog-${idx}`} className="shrink-0 w-[85vw] sm:w-auto sm:shrink group flex flex-col bg-white border border-[#DCE6F2] border-b-[4px] border-b-[#ffb703] rounded-2xl overflow-hidden shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.10)] hover:-translate-y-1 transition-all duration-300">
                                                    {/* Image */}
                                                    <Link to={blogPath} className="block w-full aspect-[16/9] overflow-hidden bg-[#F0F6FB] shrink-0">
                                                        <img
                                                            src={card.imagePath}
                                                            alt={card.title || "Blog"}
                                                            loading="lazy"
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                    </Link>
                                                    {/* Content */}
                                                    <div className="p-5 flex flex-col flex-grow">
                                                        {card.postedOn && (
                                                            <p className="text-[11.5px] text-[#4B5A72] mb-3 flex items-center gap-1.5">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-[#ffb703] shrink-0" />
                                                                {card.postedOn}
                                                            </p>
                                                        )}
                                                        <h3 className="font-bold text-[15.5px] text-[#14284E] font-display leading-snug mb-4 flex-grow line-clamp-3 group-hover:text-[#1B4F91] transition-colors">
                                                            <Link to={blogPath}>{card.title}</Link>
                                                        </h3>
                                                        <div className="mt-auto pt-4 border-t border-[#F1F5F9]">
                                                            <Link
                                                                to={blogPath}
                                                                className="cse-mobile-button text-[11.5px] font-bold text-[#d62c2b] hover:text-[#1B4F91] uppercase tracking-[0.08em] flex items-center gap-1.5 transition-colors"
                                                            >
                                                                Read on the blog <ArrowRight className="w-3.5 h-3.5" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="flex justify-center mt-8">
                                    <Link
                                        to="/blogs"
                                        className="cse-mobile-button uppercase tracking-wider inline-flex items-center gap-2 bg-[#ffb703] text-[#14284E] font-bold text-[14px] px-6 py-3 rounded-lg shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                                    >
                                        Explore All Blogs <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </section>
                    );
                })()}

                {/* ── Map Section ──────────────────────────────────────────── */}
                <Map />

                {/* ── FAQ ──────────────────────────────────────────────────── */}
                <section id="faq" className="py-10 md:py-14 px-4 sm:px-6 bg-[#F4F7FB]">
                    <div className={`${Classes["container"]} cse-content-container max-w-[900px]`}>
                        {/* Header */}
                        <div className="w-full mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div className="min-w-0 flex-1">
                                {/* <div className="text-[12px] sm:text-[13px] tracking-[0.1em] uppercase text-[#d62c2b] font-bold flex items-center gap-2 mb-3">
                                    <span className="w-4 h-[2px] bg-[#d62c2b] inline-block shrink-0" /> FAQ
                                </div> */}
                                <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] break-words">
                                    Frequently Asked <span className="text-[#ffb703]">Questions</span>
                                </h2>
                                <p className="text-[14px] text-[#4B5A72] mt-2 break-words whitespace-normal">
                                    Discover Opportunities, Ignite Your Potential - Be Part of SRMU Uttar Pradesh
                                </p>
                            </div>
                        </div>

                        {/* Accordion */}
                        <div className="flex flex-col gap-3 mt-6">
                            {(showAllFaq ? faqItems : faqItems.slice(0, 3)).map((faq, i) => (
                                <div
                                    key={i}
                                    className={`bg-white border rounded-xl overflow-hidden shadow-sm transition-all duration-200 ${openFaq === i ? "border-[#14284E]" : "border-[#E5E7EB]"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="cse-mobile-button w-full text-left flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-[18px]"
                                        aria-expanded={openFaq === i}
                                    >
                                        <span className="font-bold text-[14.5px] sm:text-[15px] text-[#14284E] pr-2 leading-snug">
                                            <span className="text-[#d62c2b] mr-2">{String(i + 1).padStart(2, "0")}.</span>
                                            {faq.q}
                                        </span>
                                        <span
                                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[18px] shrink-0 transition-all duration-300 font-sans ${openFaq === i
                                                ? "bg-[#14284E] text-white rotate-45"
                                                : "bg-[#F6FAFE] text-[#14284E]"
                                                }`}
                                        >
                                            +
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 px-5 sm:px-6 ${openFaq === i ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
                                            }`}
                                    >
                                        <div className="w-full h-px bg-[#E5E7EB] mb-4" />
                                        <p className="text-[14px] sm:text-[14.5px] text-[#4C5A65] leading-[1.7] text-justify">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {faqItems.length > 3 && (
                            <div className="mt-8 flex justify-center">
                                <button
                                    onClick={() => setShowAllFaq(!showAllFaq)}
                                    className="cse-read-more cse-mobile-button !self-center !mx-auto uppercase tracking-wider flex items-center justify-center gap-2 bg-[#ffb703] text-[#14284E] font-bold text-[14px] px-8 py-3 rounded-lg transition-colors w-fit shadow-md"
                                >
                                    {showAllFaq ? "View Less" : "Read More"} <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllFaq ? "rotate-180" : ""}`} />
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* ── CTA Band ─────────────────────────────────────────────── */}
                {/* <section id="apply" className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-[#3E6B54] to-[#5C8A72]">
                    <div className={`${Classes["container"]} cse-content-container`}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                            <h2 className="text-white font-bold font-display text-[clamp(26px,3vw,32px)] max-w-[480px] leading-[1.2]">
                                Ready to build your future in computing?
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://students.srmu.ac.in/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-7 py-3 font-bold text-[14px] bg-white text-[#3E6B54] rounded-lg hover:bg-[#F0F6FB] transition-colors"
                                >
                                    Apply Now →
                                </a>
                                <a
                                    href="tel:+919621340860"
                                    className="uppercase tracking-wider px-7 py-3 font-bold text-[14px] text-white border border-white/50 rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    Talk to a Counselor
                                </a>
                                <a
                                    href="/Broucher_SRMU_25_April___.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="uppercase tracking-wider flex items-center gap-2 px-7 py-3 font-bold text-[14px] text-white border border-white/50 rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    <Download className="w-4 h-4" /> Download Brochure
                                </a>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* ── Faculty Modal ───────────────────────────────────────── */}
                {selectedFaculty && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedFaculty(null)}>
                        <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                            <button
                                onClick={() => setSelectedFaculty(null)}
                                className="cse-mobile-button absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors z-10 backdrop-blur-md"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="h-32 bg-[#14284E] relative">
                                <div className="absolute -bottom-16 left-6 border-4 border-white rounded-full overflow-hidden bg-[#EAEAEA] w-32 h-32 shadow-lg">
                                    <img
                                        src={selectedFaculty.img}
                                        alt={selectedFaculty.name}
                                        onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(selectedFaculty.name) + "&background=EAEAEA&color=14284E&size=256"; }}
                                        className="w-full h-full object-cover object-top mix-blend-multiply"
                                    />
                                </div>
                            </div>

                            <div className="pt-20 px-6 pb-8">
                                <h3 className="text-2xl font-bold font-display text-[#14284E] mb-1">{selectedFaculty.name}</h3>
                                <div className="text-[13px] text-[#ffb703] font-bold uppercase tracking-widest mb-6">{selectedFaculty.role}</div>

                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {selectedFaculty.qualification && (
                                            <div className="inline-flex items-baseline gap-2 bg-[#F8FAFC] border border-[#DCE6F2] px-4 py-2 rounded-lg text-[13px] text-[#3F4C56]">
                                                <span className="font-medium text-[#14284E]">Qualification:</span>
                                                <span className="font-display text-[14px] font-semibold text-[#14284E]">{selectedFaculty.qualification}</span>
                                            </div>
                                        )}
                                        {selectedFaculty.experience && (
                                            <div className="inline-flex items-baseline gap-2 bg-[#F8FAFC] border border-[#DCE6F2] px-4 py-2 rounded-lg text-[13px] text-[#3F4C56]">
                                                <span className="font-medium text-[#14284E]">Experience:</span>
                                                <span className="font-display text-[14px] font-semibold text-[#14284E]">{selectedFaculty.experience}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <h5 className="text-[11px] uppercase tracking-[0.08em] text-[#8A97A1] font-bold mb-2">About</h5>
                                        <p className="text-[14px] text-[#4C5A65] leading-relaxed text-justify">
                                            {selectedFaculty.name} is a dedicated {selectedFaculty.isHod ? "Head of Department" : "faculty member"} at the Department of Computer Science & Engineering, focusing on interactive, personalized teaching and fostering a research-oriented academic environment.
                                        </p>
                                    </div>

                                    {selectedFaculty.specialization ? (
                                        <div>
                                            <h5 className="text-[11px] uppercase tracking-[0.08em] text-[#8A97A1] font-bold mb-2">Areas of Specialization</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedFaculty.specialization.map((t: string) => (
                                                    <span key={t} className="px-3 py-1 bg-[#F0F6FB] text-[#1B4F91] text-[12px] rounded-full font-medium border border-[#DCE6F2]">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <h5 className="text-[11px] uppercase tracking-[0.08em] text-[#8A97A1] font-bold mb-2">Areas of Interest</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {["Computer Science", "Information Systems", "Emerging Technologies"].map(t => (
                                                    <span key={t} className="px-3 py-1 bg-[#F0F6FB] text-[#1B4F91] text-[12px] rounded-full font-medium border border-[#DCE6F2]">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {selectedFaculty.email && selectedFaculty.contact && (
                                        <div className="flex flex-wrap gap-6 pt-5 border-t border-[#DCE6F2] mt-4">
                                            <a href={`mailto:${selectedFaculty.email}`} className="flex flex-col text-[13px] text-[#14284E] font-bold hover:text-[#ffb703]">
                                                <span className="text-[10.5px] text-[#8A97A1] uppercase tracking-[0.06em] font-semibold mb-0.5">Email</span>
                                                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" />{selectedFaculty.email}</span>
                                            </a>
                                            <a href={`tel:${selectedFaculty.contact}`} className="flex flex-col text-[13px] text-[#14284E] font-bold hover:text-[#ffb703]">
                                                <span className="text-[10.5px] text-[#8A97A1] uppercase tracking-[0.06em] font-semibold mb-0.5">Contact</span>
                                                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" />{selectedFaculty.contact}</span>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            {/* ── Event Modal ─────────────────────────────────────────────────── */}
            {selectedEvent && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#071329]/40 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedEvent(null)}>
                    <div
                        className="bg-white rounded-2xl overflow-hidden w-full max-w-[600px] shadow-2xl animate-in zoom-in-95 duration-300 relative flex flex-col max-h-[90vh]"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedEvent(null)}
                            className="cse-mobile-button absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="w-full aspect-[21/9] relative bg-[#F0F6FB]">
                            <img src={selectedEvent.img} alt={selectedEvent.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-6 right-6">
                                <span className="inline-block bg-[#ffb703] text-[#14284E] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm shadow-sm mb-2">{selectedEvent.tag}</span>
                                <h3 className="text-[20px] font-bold text-white font-display leading-tight">{selectedEvent.title}</h3>
                            </div>
                        </div>

                        <div className="p-6 overflow-y-auto custom-scrollbar">
                            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#E2E8F0]">
                                <div className="w-2 h-2 rounded-full bg-[#1B4F91]" />
                                <span className="text-[13.5px] font-semibold text-[#14284E]">{selectedEvent.speaker}</span>
                            </div>
                            <div className="text-[14.5px] text-[#4B5A72] leading-relaxed space-y-4">
                                {selectedEvent.readMore.split('\n').map((paragraph: string, idx: number) => (
                                    paragraph.trim() ? <p key={idx} className="text-justify">{paragraph}</p> : null
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <DepartmentFooter />
        </div>
    );
};

const DepartmentFooter = () => {
    return (
        <div role="contentinfo" className="bg-[#14284E] text-white pt-16 pb-6 border-t-[4px] border-[#ffb703]">
            <div className={`${Classes["container"]} px-4 sm:px-6`}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-8 mb-12">

                    {/* Col 1: Brand & Contact */}
                    <div className="min-w-0 space-y-6 [overflow-wrap:anywhere] lg:col-span-2 lg:pr-6">
                        <div>
                            <img src={logosrmcem} alt="SRMU Logo" className="max-h-[60px] max-w-full w-auto object-contain object-left mb-5" />
                            <p className="text-[13px] text-gray-300 leading-relaxed text-justify mb-5">
                                Shri Ramswaroop Memorial University (SRMU), Lucknow- Deva Road, Barabanki, Uttar Pradesh is committed to providing quality education, fostering innovation and building a brighter future for our students.
                            </p>

                            {/* <div className="flex gap-2.5">
                                <a href="https://www.linkedin.com/school/shri-ramswaroop-memorial-university/" target="_blank" rel="noreferrer" className="font-bold uppercase tracking-wide w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffb703] hover:text-[#ffb703] transition-colors"><Linkedin className="w-4 h-4" /></a>
                                <a href="https://www.facebook.com/SRMUOFFICIAL/" target="_blank" rel="noreferrer" className="font-bold uppercase tracking-wide w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffb703] hover:text-[#ffb703] transition-colors"><Facebook className="w-4 h-4" /></a>
                                <a href="https://www.instagram.com/srmulucknow_official/" target="_blank" rel="noreferrer" className="font-bold uppercase tracking-wide w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffb703] hover:text-[#ffb703] transition-colors"><Instagram className="w-4 h-4" /></a>
                                <a href="https://www.youtube.com/channel/UCQBjHzkED5ESWvlQiwLNZ4Q" target="_blank" rel="noreferrer" className="font-bold uppercase tracking-wide w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffb703] hover:text-[#ffb703] transition-colors"><Youtube className="w-4 h-4" /></a>
                                <a href="https://twitter.com/srmu_lucknow" target="_blank" rel="noreferrer" className="font-bold uppercase tracking-wide w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffb703] hover:text-[#ffb703] transition-colors"><Twitter className="w-4 h-4" /></a>
                            </div> */}
                        </div>

                        <div className="space-y-5 pt-5 border-t border-white/10">
                            <div className="flex gap-3">
                                <MapPin className="w-5 h-5 text-[#ffb703] shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-[#ffb703] text-[13px] font-bold uppercase mb-1">Address</h4>
                                    <p className="text-[13px] text-gray-300 leading-relaxed">Shri Ramswaroop Memorial University (SRMU), Lucknow- Deva Road, Barabanki, Uttar Pradesh</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <MapPin className="w-5 h-5 text-[#ffb703] shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-[#ffb703] text-[13px] font-bold uppercase mb-1">Lucknow Office</h4>
                                    <p className="text-[13px] text-gray-300 leading-relaxed">C-2/42, Vishesh Khand, Opposite Chote Lal Nursery, Gomtinagar, Lucknow, Uttar Pradesh</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Phone className="w-5 h-5 text-[#ffb703] shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-[#ffb703] text-[12px] font-bold uppercase mb-1">Admission Helpline</h4>
                                    <p className="text-[13px] text-gray-300">+91-9838904666</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Phone className="w-5 h-5 text-[#ffb703] shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-[#ffb703] text-[12px] font-bold uppercase mb-1">Admission Toll Free</h4>
                                    <p className="text-[13px] text-gray-300">18001026004</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Mail className="w-5 h-5 text-[#ffb703] shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-[#ffb703] text-[13px] font-bold uppercase mb-1">Email</h4>
                                    <p className="text-[13px] text-gray-300">admissions@srmu.ac.in</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Columns Wrapper (3-col on mobile) */}
                    <div className="min-w-0 lg:col-span-3 grid grid-cols-3 gap-x-2 gap-y-6 [overflow-wrap:anywhere] sm:gap-6 lg:mt-[80px]">
                        {/* Col 2: Quick Links */}
                        <div className="min-w-0">
                            <h3 className="text-[#ffb703] font-bold text-[10px] min-[375px]:text-[11px] sm:text-[14px] uppercase mb-4 sm:mb-6 tracking-normal sm:tracking-wide">Quick Links</h3>
                            <ul className="space-y-3 sm:space-y-4 list-disc pl-3 sm:pl-4 marker:text-gray-300">
                                {[
                                    { name: "About SRMU", path: "/about-us" },
                                    { name: "Programs", path: "/program-finder" },
                                    { name: "Admissions", path: "/how-to-apply" },
                                    { name: "Placements", path: "/placements" },
                                    { name: "Life at SRMU", path: "/student-corner" },
                                    { name: "News & Updates", path: "/notice" },
                                    { name: "Contact Us", path: "/contact-us" }
                                ].map((item) => (
                                    <li key={item.name}><Link to={item.path} className="text-[11px] leading-relaxed min-[375px]:text-[12px] sm:text-[13.5px] text-gray-300 hover:text-[#ffb703] transition-colors">{item.name}</Link></li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 3: Student Life */}
                        <div className="min-w-0">
                            <h3 className="text-[#ffb703] font-bold text-[10px] min-[375px]:text-[11px] sm:text-[14px] uppercase mb-4 sm:mb-6 tracking-normal sm:tracking-wide">Student Life</h3>
                            <ul className="space-y-3 sm:space-y-4 list-disc pl-3 sm:pl-4 marker:text-gray-300">
                                {[
                                    { name: "Facilities", path: "/facilities" },
                                    { name: "Library", path: "/central-library" },
                                    { name: "Clubs", path: "/clubs" },
                                    { name: "Blogs", path: "/blogs" },
                                    { name: "Shift Schedule", path: "/shift-schedule" }
                                ].map((item) => (
                                    <li key={item.name}><Link to={item.path} className="text-[11px] leading-relaxed min-[375px]:text-[12px] sm:text-[13.5px] text-gray-300 hover:text-[#ffb703] transition-colors">{item.name}</Link></li>
                                ))}
                                <li><a href="https://eyojan.srmu.ac.in/" target="_blank" rel="noreferrer" className="text-[11px] leading-relaxed min-[375px]:text-[12px] sm:text-[13.5px] text-gray-300 hover:text-[#ffb703] transition-colors">Student Login</a></li>
                                <li><a href="https://eyojan.srmu.ac.in/" target="_blank" rel="noreferrer" className="text-[11px] leading-relaxed min-[375px]:text-[12px] sm:text-[13.5px] text-gray-300 hover:text-[#ffb703] transition-colors">Staff Login</a></li>
                            </ul>
                        </div>

                        {/* Col 4: Information */}
                        <div className="min-w-0">
                            <h3 className="text-[#ffb703] font-bold text-[10px] min-[375px]:text-[11px] sm:text-[14px] uppercase mb-4 sm:mb-6 tracking-normal sm:tracking-wide">Information</h3>
                            <ul className="space-y-3 sm:space-y-4 list-disc pl-3 sm:pl-4 marker:text-gray-300">
                                {[
                                    { name: "UGC & Approvals", path: "/ugc-approvals" },
                                    { name: "NAAC", path: "/naac" },
                                    { name: "AIU", path: "/aiu" },
                                    { name: "NIRF", path: "/nirf" },
                                    { name: "IQAC", path: "/iqac-overview" },
                                    { name: "Scholarships", path: "/scholarship-scheme" },
                                    { name: "Anti Ragging", path: "/anti-ragging" }
                                ].map((item) => (
                                    <li key={item.name}><Link to={item.path} className="text-[11px] leading-relaxed min-[375px]:text-[12px] sm:text-[13.5px] text-gray-300 hover:text-[#ffb703] transition-colors">{item.name}</Link></li>
                                ))}
                                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSde8Ov2JDvB1vYeL-jrqNrlman0gLstQVEWEJ6DN34-EsYdCQ/viewform" target="_blank" rel="noreferrer" className="text-[11px] leading-relaxed min-[375px]:text-[12px] sm:text-[13.5px] text-gray-300 hover:text-[#ffb703] transition-colors break-words">Grievance Redressal</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Col 5: Subscribe & Follow */}
                    <div className="min-w-0 lg:col-span-1 lg:mt-[80px]">
                        <h3 className="text-[#ffb703] font-bold text-[14px] uppercase mb-6 tracking-wide">Subscribe to our updates</h3>
                        <p className="text-[13px] text-gray-300 mb-4 leading-relaxed">
                            Stay informed about the latest news, events and opportunities at SRMU.
                        </p>
                        <form className="flex min-w-0 flex-col sm:flex-row lg:flex-col mb-10" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="min-w-0 w-full flex-1 bg-transparent border border-gray-500 rounded-l-md px-3 py-2 text-[13px] text-white outline-none focus:border-[#ffb703]"
                            />
                            <button type="submit" className="cse-mobile-button bg-[#3b82f6] hover:bg-[#2563eb] text-white text-[14px] font-bold uppercase tracking-wide px-4 py-2 rounded-r-md transition-colors whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>

                        <h3 className="text-[#ffb703] font-bold text-[14px] uppercase mb-6 tracking-wide">Follow Us</h3>
                        <div className="flex flex-wrap gap-2.5">
                            <a href="https://www.linkedin.com/school/shri-ramswaroop-memorial-university/" target="_blank" rel="noreferrer" className="cse-mobile-button font-bold uppercase tracking-wide w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffb703] hover:text-[#ffb703] transition-colors"><Linkedin className="w-4 h-4" /></a>
                            <a href="https://www.facebook.com/SRMUOFFICIAL/" target="_blank" rel="noreferrer" className="cse-mobile-button font-bold uppercase tracking-wide w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffb703] hover:text-[#ffb703] transition-colors"><Facebook className="w-4 h-4" /></a>
                            <a href="https://www.instagram.com/srmulucknow_official/" target="_blank" rel="noreferrer" className="cse-mobile-button font-bold uppercase tracking-wide w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffb703] hover:text-[#ffb703] transition-colors"><Instagram className="w-4 h-4" /></a>
                            <a href="https://www.youtube.com/channel/UCQBjHzkED5ESWvlQiwLNZ4Q" target="_blank" rel="noreferrer" className="cse-mobile-button font-bold uppercase tracking-wide w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffb703] hover:text-[#ffb703] transition-colors"><Youtube className="w-4 h-4" /></a>
                            <a href="https://twitter.com/srmu_lucknow" target="_blank" rel="noreferrer" className="cse-mobile-button font-bold uppercase tracking-wide w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffb703] hover:text-[#ffb703] transition-colors"><Twitter className="w-4 h-4" /></a>
                            <a href="#" target="_blank" rel="noreferrer" className="cse-mobile-button font-bold uppercase tracking-wide w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffb703] hover:text-[#ffb703] transition-colors"><FaQuora className="w-4 h-4" /></a>
                            <a href="#" target="_blank" rel="noreferrer" className="cse-mobile-button font-bold uppercase tracking-wide w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffb703] hover:text-[#ffb703] transition-colors"><FaRedditAlien className="w-[18px] h-[18px]" /></a>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-[#ffb703] font-bold text-[14px] uppercase mb-6 tracking-wide">Merch Shop</h3>
                            <p className="text-[13px] text-gray-300 mb-4 leading-relaxed">To Shop SRMU Merchandise Scan the Code</p>
                            <img src={MerchandiseScanImg} alt="Merchandise Scan" className="h-[60px] w-auto shadow-md" />
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[12px] text-gray-400">© 2025 Shri Ramswaroop Memorial University. All Rights Reserved.</p>
                    <div className="flex max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] text-gray-400">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="text-gray-600">|</span>
                        <Link to="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
                        <span className="text-gray-600">|</span>
                        <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentOfComputerScienceAndEngineeringNew;
