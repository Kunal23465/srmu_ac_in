import React, { useEffect, useState } from "react";

import Classes from "../../../utils/styles/Global.module.css";
import KamleshImg from "../../../assets/images/academics/institutes/cse/cse2.jpeg";
import SakshiImg from "../../../assets/images/academics/institutes/cse/cse3.jpeg";
import logosrmcem from "../../../assets/images/University-Logo-White.png";
import { Download, ChevronDown, ChevronUp, Search, Mail, Phone, ArrowLeft, ArrowRight, X, Code2, Brain, BarChart3, ShieldCheck, Cloud, GraduationCap, Settings, Database, Lightbulb, Share2, MapPin, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { FaQuora, FaRedditAlien } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";
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

const programCards = [
    {
        level: "Undergraduate",
        title: "B.Tech. in CSE (Cyber Security) with L&T",
        desc: "Develop knowledge of computing fundamentals along with specialized learning in cybersecurity through an industry-linked program with L&T.",
        duration: "4 Years", fee: "₹1,47,000",
    },
    {
        level: "Undergraduate",
        title: "B.Tech. in CSE (Data Science & Artificial Intelligence) with L&T",
        desc: "Build foundations in computer science while developing skills in data science, artificial intelligence and related technologies.",
        duration: "4 Years", fee: "₹1,47,000",
    },
    {
        level: "Undergraduate",
        title: "B.Tech. in CSE (Artificial Intelligence & Machine Learning)",
        desc: "Explore computer science with a focus on Artificial Intelligence and Machine Learning and their applications across technology domains.",
        duration: "4 Years", fee: "₹1,43,000",
    },
    {
        level: "Postgraduate",
        title: "M.Tech. in Artificial Intelligence & Machine Learning",
        desc: "Pursue advanced study and research-oriented learning in Artificial Intelligence and Machine Learning.",
        duration: "2 Years", fee: "₹1,05,000",
    },
    {
        level: "Postgraduate",
        title: "M.Tech. in Data Science",
        desc: "Develop advanced knowledge in data science and analytical computing.",
        duration: "2 Years", fee: "₹1,05,000",
    },
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
    { value: "10", label: "Industry-Driven Capstone Projects" },
    { value: "150", label: "Student Research Projects/Year" },
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
    { name: "Dr. Rajeev Kumar",          role: "Associate Professor",  img: "/assets/images/new-information-system/Dr.-Rajeev-Kumar.webp" },
    { name: "Dr. Anil Kumar Pandey",      role: "Associate Professor",  img: "/assets/images/new-information-system/Dr.-Anil-Kumar-Pandey.webp" },
    { name: "Dr. Satya Bhushan Verma",    role: "Associate Professor",  img: "/assets/images/new-information-system/Dr.-Satya-Bhushan-Verma.webp" },
    // 3. Assistant Professors
    { name: "Ms. Reeta",                  role: "Assistant Professor",  img: "/assets/images/new-information-system/Ms.-Reeta.webp" },
    { name: "Ms. Abhilasha Mandal",       role: "Assistant Professor",  img: "/assets/images/new-information-system/Ms.-Abhilasha-Mandal.webp" },
    { name: "Mr. Anil Kumar",             role: "Assistant Professor",  img: "/assets/images/new-information-system/Mr.-Anil-Kumar.webp" },
    { name: "Ms. Anjali Awasthi",         role: "Assistant Professor",  img: "/assets/images/new-information-system/Ms.-Anjali-Awasthi.webp" },
    { name: "Mr. Ijtaba Saleem Khan",     role: "Assistant Professor",  img: "/assets/images/new-information-system/Mr.-Ijtaba-Saleem-Khan.webp" },
    { name: "Mr. Aditya Pratap Singh",    role: "Assistant Professor",  img: "/assets/images/new-information-system/Mr.-Aditya-Pratap-Singh.webp" },
    { name: "Ms. Arpita Vishwakarma",     role: "Assistant Professor",  img: "/assets/images/new-information-system/Ms.-Arpita-Vishwakarma.webp" },
    { name: "Mr. Neelesh Mishra",         role: "Assistant Professor",  img: "/assets/images/new-information-system/Mr.-Neelesh-Mishra.webp" },
    { name: "Ms. Prabha Singh",           role: "Assistant Professor",  img: "/assets/images/new-information-system/Ms.-Prabha-Singh.webp" },
    { name: "Ms. Atifa Parveen",          role: "Assistant Professor",  img: "/assets/images/new-information-system/Ms.-Atifa-Parveen.webp" },
    { name: "Mr. Kamlesh Chandra Maurya", role: "Assistant Professor",  img: KamleshImg },
    { name: "Ms. Sakshi Singh",           role: "Assistant Professor",  img: SakshiImg },
];

const whyItems = [
    { num: "01", title: "Research-Oriented Academic Environment", desc: "The department encourages research activities and academic knowledge sharing through publications, conferences and expert interactions." },
    { num: "02", title: "Value-Added Learning", desc: "Students receive opportunities to develop additional technical knowledge and skills beyond their regular curriculum." },
    { num: "03", title: "Industry-Linked Programs", desc: "Specialized programs with industry collaboration provide exposure to industry-oriented learning in areas such as Cyber Security and Data Science & Artificial Intelligence." },
    { num: "04", title: "Emerging Technology Focus", desc: "The curriculum includes contemporary areas such as AI, Machine Learning, Cyber Security, Python, Cloud Application Development and Digital Image Processing." },
];

const careerItems = [
    { title: "Software & Application Development", desc: "Build software applications, websites, and digital products across technology-driven industries.", icon: Code2 },
    { title: "Artificial Intelligence & Machine Learning", desc: "Work with intelligent systems, predictive models, automation, and machine learning applications.", icon: Brain },
    { title: "Data & Analytics", desc: "Explore careers in data analysis, data science, business analytics, and large-scale data processing.", icon: BarChart3 },
    { title: "Cyber Security", desc: "Build expertise in information security, network security, security operations, and cyber defense.", icon: ShieldCheck },
    { title: "Cloud & Computing", desc: "Work with cloud platforms, distributed systems, infrastructure, and modern computing environments.", icon: Cloud },
    { title: "Research & Higher Studies", desc: "Pursue M.Tech., Ph.D., research careers, or advanced specialization in emerging computing domains.", icon: GraduationCap },
];

const scholarshipItems = [
    "SRMUSET Based Scholarship",
    "MERIT Based Scholarship",
    "Defence, Paramilitary & Police",
    "Sibling/Ward of SRM Group Staff, Student & Alumni",
    "Divyang",
    "National/State Level",
    "Sportsperson",
    "Career Progression",
    "Student of another state and country",
    "Ward of a Single Parent",
    "Divyang · Sportsperson · Single Parent",
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

    const dispatch = useDispatch<AppDispatch>();
    const { data: blogCards } = useSelector((state: RootState) => state.getAllBlogs);

    const [selectedFaculty, setSelectedFaculty] = useState<any>(null);
    const [selectedEvent, setSelectedEvent] = useState<any>(null);
    
    // Accordion state for mobile view
    const [activeUgProgram, setActiveUgProgram] = useState<number | null>(null);
    const [activePgProgram, setActivePgProgram] = useState<number | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [showAllFaq, setShowAllFaq] = useState(false);

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

    // Careers Embla carousel (only active on mobile)
    const [careersEmblaRef, careersEmblaApi] = useEmblaCarousel({ 
        loop: false, 
        align: "start", 
        dragFree: true,
        breakpoints: {
            '(min-width: 640px)': { active: false }
        }
    });
    const [careersCanPrev, setCareersCanPrev] = useState(false);
    const [careersCanNext, setCareersCanNext] = useState(true);

    useEffect(() => {
        if (!careersEmblaApi) return;
        const update = () => {
            setCareersCanPrev(careersEmblaApi.canScrollPrev());
            setCareersCanNext(careersEmblaApi.canScrollNext());
        };
        update();
        careersEmblaApi.on("select", update);
        careersEmblaApi.on("reInit", update);
        return () => { careersEmblaApi.off("select", update); careersEmblaApi.off("reInit", update); };
    }, [careersEmblaApi]);


    const [rm, setRm] = useState<Record<string, boolean>>({});
    const toggleRm = (k: string) => setRm(p => ({ ...p, [k]: !p[k] }));

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
    const [canScrollPrev, setCanScrollPrev] = useState(true);
    const [canScrollNext, setCanScrollNext] = useState(true);

    useEffect(() => {
        if (!emblaApi) return;
        const updateScrollState = () => {
            setCanScrollPrev(emblaApi.canScrollPrev());
            setCanScrollNext(emblaApi.canScrollNext());
        };
        updateScrollState();
        emblaApi.on("select", updateScrollState);
        emblaApi.on("reInit", updateScrollState);

        const autoplay = window.setInterval(() => emblaApi.scrollNext(), 3500);

        return () => {
            emblaApi.off("select", updateScrollState);
            emblaApi.off("reInit", updateScrollState);
            window.clearInterval(autoplay);
        };
    }, [emblaApi]);

    return (
        <div className="text-[#14284E] bg-white antialiased">
            {/* ── Lab Icon Micro-animations ─────────────────────────────── */}
            <style>{`
                @media (prefers-reduced-motion: no-preference) {
                    /* L&T / Engineering – mechanical cog-like rock */
                    @keyframes lab-mechanical {
                        0%   { transform: rotate(0deg) scale(1); }
                        25%  { transform: rotate(8deg) scale(1.07); }
                        50%  { transform: rotate(-5deg) scale(1.05); }
                        75%  { transform: rotate(4deg) scale(1.08); }
                        100% { transform: rotate(0deg) scale(1); }
                    }
                    /* AI & ML – smooth orbital spin + float */
                    @keyframes lab-orbital {
                        0%   { transform: translateY(0px) rotate(0deg) scale(1); }
                        30%  { transform: translateY(-4px) rotate(12deg) scale(1.06); }
                        60%  { transform: translateY(-2px) rotate(-6deg) scale(1.09); }
                        100% { transform: translateY(0px) rotate(0deg) scale(1); }
                    }
                    /* Cyber Security – shield pulse */
                    @keyframes lab-pulse {
                        0%   { transform: scale(1);    filter: drop-shadow(0 0 0px rgba(20,40,78,0)); }
                        30%  { transform: scale(1.1);  filter: drop-shadow(0 0 6px rgba(20,40,78,0.35)); }
                        60%  { transform: scale(1.05); filter: drop-shadow(0 0 3px rgba(20,40,78,0.2)); }
                        100% { transform: scale(1);    filter: drop-shadow(0 0 0px rgba(20,40,78,0)); }
                    }
                    /* Cloud Computing – gentle float up */
                    @keyframes lab-float {
                        0%   { transform: translateY(0px) scale(1); }
                        40%  { transform: translateY(-7px) scale(1.06); }
                        70%  { transform: translateY(-4px) scale(1.04); }
                        100% { transform: translateY(0px) scale(1); }
                    }
                    /* Database – stack bounce down */
                    @keyframes lab-stack {
                        0%   { transform: translateY(0px) scaleY(1); }
                        25%  { transform: translateY(3px) scaleY(0.94); }
                        55%  { transform: translateY(-4px) scaleY(1.06); }
                        80%  { transform: translateY(-1px) scaleY(1.02); }
                        100% { transform: translateY(0px) scaleY(1); }
                    }
                    /* R&D – light glow/pulse */
                    @keyframes lab-glow {
                        0%   { transform: scale(1);    filter: drop-shadow(0 0 0px rgba(255,193,7,0)); }
                        35%  { transform: scale(1.1);  filter: drop-shadow(0 0 8px rgba(255,193,7,0.55)); }
                        65%  { transform: scale(1.06); filter: drop-shadow(0 0 4px rgba(255,193,7,0.3)); }
                        100% { transform: scale(1);    filter: drop-shadow(0 0 0px rgba(255,193,7,0)); }
                    }
                    /* Network Security – orbital network wave */
                    @keyframes lab-network {
                        0%   { transform: rotate(0deg) translateX(0px) scale(1); }
                        20%  { transform: rotate(-8deg) translateX(-2px) scale(1.05); }
                        50%  { transform: rotate(10deg) translateX(2px) scale(1.09); }
                        80%  { transform: rotate(-4deg) translateX(-1px) scale(1.06); }
                        100% { transform: rotate(0deg) translateX(0px) scale(1); }
                    }

                    .lab-icon-mechanical  { transition: transform 0.3s ease, filter 0.3s ease; }
                    .lab-icon-orbital     { transition: transform 0.3s ease, filter 0.3s ease; }
                    .lab-icon-pulse       { transition: transform 0.3s ease, filter 0.3s ease; }
                    .lab-icon-float       { transition: transform 0.3s ease, filter 0.3s ease; }
                    .lab-icon-stack       { transition: transform 0.3s ease, filter 0.3s ease; }
                    .lab-icon-glow        { transition: transform 0.3s ease, filter 0.3s ease; }
                    .lab-icon-network     { transition: transform 0.3s ease, filter 0.3s ease; }

                    .group:hover .lab-icon-mechanical { animation: lab-mechanical 650ms cubic-bezier(0.4,0,0.2,1) forwards; }
                    .group:hover .lab-icon-orbital    { animation: lab-orbital    700ms cubic-bezier(0.4,0,0.2,1) forwards; }
                    .group:hover .lab-icon-pulse      { animation: lab-pulse      600ms cubic-bezier(0.4,0,0.2,1) forwards; }
                    .group:hover .lab-icon-float      { animation: lab-float      750ms cubic-bezier(0.4,0,0.2,1) forwards; }
                    .group:hover .lab-icon-stack      { animation: lab-stack      600ms cubic-bezier(0.4,0,0.2,1) forwards; }
                    .group:hover .lab-icon-glow       { animation: lab-glow       700ms cubic-bezier(0.4,0,0.2,1) forwards; }
                    .group:hover .lab-icon-network    { animation: lab-network    680ms cubic-bezier(0.4,0,0.2,1) forwards; }
                }
            `}</style>
            <main>

                {/* ── Hero Banner ─────────────────────────────────────────── */}

                {/* ── MOBILE banner ── image bg + gradient overlay ─────── */}
                <section className="sm:hidden relative w-full overflow-hidden" style={{ minHeight: "520px" }}>
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
                        <p className="text-white/85 text-[18px] font-semibold mb-1.5 leading-snug">
                            Department of
                        </p>
                        <h1 className="text-[#38bdf8] text-[36px] font-bold leading-[1.15] mb-4">
                            Computer Science &amp; Engineering (CSE)
                        </h1>

                        {/* Gold separator */}
                        <div className="h-[3px] w-[80px] bg-[#ffc107] rounded-full mb-4" />

                        {/* Stats 2×2 grid */}
                        <div className="grid grid-cols-[auto_1fr_auto_1fr] gap-y-3 gap-x-3 mb-6 items-start">
                            {[
                                { v: "₹53LPA", l: "Highest Package" },
                                { v: "10", l: "Industry-Driven Capstone Projects" },
                                { v: "200+", l: "Recruiters" },
                                { v: "150", l: "Student Research Projects/Year" },
                            ].map((s) => (
                                <React.Fragment key={s.l}>
                                    <span className="text-[#ffc107] font-bold text-[14px] sm:text-[15px] leading-none mt-0.5">{s.v}</span>
                                    <span className="text-white/75 text-[11px] sm:text-[12px] leading-tight pr-1 sm:pr-2">{s.l}</span>
                                </React.Fragment>
                            ))}
                        </div>

                        {/* CTA buttons */}
                        <div className="hidden gap-3">
                            <a
                                href="https://students.srmu.ac.in/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center bg-[#ffc107] text-[#14284E] font-bold text-[14px] px-3 py-3 rounded-lg shadow-lg"
                            >
                                Apply Now
                            </a>
                            <a
                                href="/Broucher_SRMU_25_April___.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center flex items-center justify-center gap-1.5 bg-[#14284E]/80 text-white font-bold text-[14px] px-3 py-3 rounded-lg border border-white/20 backdrop-blur-sm"
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
                        <div className={`${Classes["container"]} flex flex-col h-full sm:h-auto w-full`}>
                            {/* Banner Text */}
                            <div className="w-full max-w-[650px] text-white text-left mt-2 sm:mt-0">
                                <h2 className="text-[clamp(20px,2.5vw,30px)] font-semibold mb-1 leading-[1.2] drop-shadow-md">
                                    Department of
                                </h2>
                                <h1 className="text-[clamp(32px,4vw,52px)] leading-[1.1] font-bold text-[#38bdf8] drop-shadow-md">
                                    Computer Science &amp; Engineering (CSE)
                                </h1>
                                <div className="h-[3px] bg-[#38bdf8] w-[200px] mt-1 mb-4 rounded-full" />
                                <p className="text-[clamp(14px,1.5vw,18px)] font-light mt-4 drop-shadow-md text-justify">
                                    Shape Your Future with Computer Science &amp; Engineering
                                </p>
                            </div>

                            <div className="flex flex-row items-center gap-3 mt-8 w-full max-w-[650px]">
                                <a
                                    href="https://students.srmu.ac.in/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-none text-center bg-[#ffc107] text-[#14284E] font-bold text-[15px] px-8 py-3.5 rounded-lg transition-colors shadow-lg border border-[#ffc107]"
                                >
                                    Apply Now
                                </a>
                                <a
                                    href="/Broucher_SRMU_25_April___.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-none text-center flex items-center justify-center gap-2 bg-[#14284E] text-white font-bold text-[15px] px-8 py-3.5 rounded-lg transition-colors shadow-lg border border-[#1B4F91]"
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
                            <div className="w-8 h-0.5 bg-[#ffc107] mx-auto mt-2 rounded-full" />
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
                            <p className="text-[10px] text-gray-500 flex items-start gap-1.5 text-justify">
                                <input type="checkbox" defaultChecked className="mt-0.5 shrink-0" />
                                I authorise SRMU and its representatives to Call, SMS, Email or WhatsApp me regarding admissions and programmes.
                            </p>
                            <button className="w-full bg-[#ffc107] hover:bg-[#e0a800] text-[#14284E] font-bold text-[14px] py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                                APPLY NOW →
                            </button>
                        </div>
                    </div>
                </section>

                {/* ── Quick Stats Banner ───────────────────────────────────── */}
                <section className="hidden sm:block w-full bg-[#E0F1FF]">
                    <div className="grid grid-cols-4 w-full max-w-7xl mx-auto px-6 py-6 gap-4">
                        {quickStats.map((s) => (
                            <div key={s.label} className="flex flex-col items-center justify-center text-center">
                                <span className="text-[#D94B38] font-bold text-[clamp(28px,3vw,36px)] leading-none whitespace-nowrap font-display mb-1.5">
                                    {s.value}
                                </span>
                                <span className="text-[#111827] text-[12px] sm:text-[13px] leading-snug uppercase tracking-[0.05em] font-extrabold">
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── About the Department ─────────────────────────────────── */}
                <section className="pt-6 sm:pt-8 pb-8 md:pb-10 px-4 sm:px-6 bg-white">
                    <div className={`${Classes["container"]}`}>
                        {/* Two-column: text left, image right */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                            {/* ── Left: text ── */}
                            <div className="w-full lg:flex-1">
                                <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3 text-center lg:text-left">
                                    About the <span className="text-[#ffc107]">Department</span>
                                </h2>

                                <div className={`text-[#4B5A72] text-[15.5px] sm:text-[16px] leading-relaxed space-y-4 text-justify ${!rm["about"] ? "line-clamp-4 sm:line-clamp-none" : ""}`}>
                                    <p className="text-justify">The Department of Computer Science and Engineering at SRMU was established in 2012 with the objective of providing quality education and developing skilled professionals in the field of computing and information technology.</p>
                                    <p className="text-justify">The department offers B.Tech., M.Tech. and Ph.D. programs and provides academic exposure to core areas including computer technologies, distributed computing, information security, programming languages, computer networks, database management systems, software engineering, operating systems, compiler construction, and computer organization & architecture.</p>
                                    <p className="text-justify">The curriculum is periodically updated to incorporate emerging areas such as Python programming, Android application development, digital image processing, cyber security, design thinking, and cloud application development.</p>
                                    <p className="text-justify">Through industrial summer training, seminars, workshops, industrial visits, and conferences, students get opportunities to connect academic concepts with professional practices.</p>
                                    <p className="text-justify">For students searching for computer science engineering in Lucknow, the department provides a combination of foundational computing education, emerging technology exposure, industry interaction, and research-oriented learning.</p>
                                </div>

                                <button className="rm-btn sm:hidden mt-3 mx-auto flex" onClick={() => toggleRm("about")}>{rm["about"] ? "Read Less" : "Read More"}</button>
                            </div>

                            {/* ── Right: image ── */}
                            <div className="flex w-full lg:w-[420px] xl:w-[460px] shrink-0 lg:self-stretch">
                                <img
                                    src="/assets/images/new-information-system/biggest-tech-collab.png"
                                    alt="Department Tech Collaboration"
                                    className="w-full h-auto lg:h-full object-cover object-bottom rounded-2xl shadow-[0_2px_12px_rgba(15,31,61,0.08)]"
                                />
                            </div>

                        </div>
                    </div>
                </section>

                {/* ── Mission & Vision ─────────────────────────────────────── */}
                <section className="py-8 md:py-10 px-4 sm:px-6 bg-[#F0F6FB]">
                    <div className={`${Classes["container"]}`}>
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">

                            {/* ── Left: Mission + Vision stacked ── */}
                            <div className="flex flex-col gap-px bg-[#DCE6F2] border border-[#DCE6F2] rounded-2xl overflow-hidden flex-1">
                                {/* Mission */}
                                <div className="bg-white p-8 sm:p-10 border-t-[4px] border-[#D94B38] flex-1">
                                    <div className="mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 28 29" fill="none">
                                            <path d="M17.6225 20.7205C18.5671 19.752 20.7541 18.4177 21.1551 15.0785C21.3152 14.056 21.2618 13.0115 20.9982 12.0107C20.7345 11.0098 20.2664 10.0745 19.6234 9.26356C18.9803 8.45264 18.1762 7.78372 17.2618 7.29897C16.3474 6.81423 15.3425 6.52417 14.3104 6.44708C13.2783 6.37 12.2415 6.50755 11.2652 6.85107C10.2889 7.1946 9.39439 7.73664 8.638 8.44304C7.8816 9.14944 7.27975 10.0049 6.87038 10.9554C6.461 11.906 6.25298 12.931 6.25942 13.966C6.25942 18.1325 8.78392 19.6475 9.85698 20.7205C10.6985 21.5875 10.5686 21.9122 10.5686 23.31C10.5588 23.4862 10.585 23.6625 10.6456 23.8282C10.7063 23.9939 10.8 24.1456 10.9212 24.2739C11.0423 24.4022 11.1883 24.5044 11.3503 24.5744C11.5123 24.6444 11.6868 24.6807 11.8633 24.681H15.6162C15.7927 24.6813 15.9675 24.6454 16.1297 24.5756C16.2919 24.5058 16.4381 24.4036 16.5593 24.2751C16.6804 24.1467 16.774 23.9948 16.8342 23.8288C16.8945 23.6628 16.9201 23.4862 16.9095 23.31C16.8459 21.8854 16.6765 21.6919 17.6225 20.7205Z" stroke="#D94B38" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M11.5656 24.6035V26.7383C11.5656 27.3214 11.8904 27.8 12.2899 27.8H15.1886C15.591 27.8 15.9143 27.32 15.9143 26.7383V24.6035M12.6387 9.72192C11.805 9.7223 11.0056 10.0537 10.4162 10.6434C9.82686 11.233 9.49577 12.0326 9.49577 12.8663M24.0921 14.2513H26.6816M21.4857 5.76292L23.3226 3.92602M22.8976 21.4464L24.7345 23.2819M13.74 0.800049V2.89391M4.19545 3.92461L6.01965 5.76292M2.78354 23.2819L4.60773 21.4464M3.38784 14.2513H0.799805" stroke="#D94B38" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#D94B38] font-bold flex items-center gap-2 mb-3.5">
                                        <span className="w-[22px] h-[2px] bg-[#D94B38] inline-block" /> Mission
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
                                                    <span className="text-[#D94B38] font-bold shrink-0 mt-0.5">+</span>
                                                    <div className={`${!rm["mission"] && index === 0 ? "line-clamp-2 sm:line-clamp-none" : ""}`}>{item}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button className="text-[14px] font-bold text-[#D94B38] hover:text-[#14284E] mt-4 flex items-center justify-center gap-1 sm:hidden mx-auto transition-colors" onClick={() => toggleRm("mission")}>
                                        {rm["mission"] ? "Read Less" : "Read More"}
                                    </button>
                                </div>
                                {/* Vision */}
                                <div className="bg-[#14284E] p-8 sm:p-10 border-t-[4px] border-[#ffc107] flex-1">
                                    <div className="mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 27 27" fill="none">
                                            <path d="M13.8003 2.26177C12.0086 2.26099 10.2441 2.70031 8.6619 3.54114C7.07972 4.38196 5.7283 5.59855 4.7264 7.08396C3.7245 8.56938 3.1028 10.2782 2.91593 12.0601C2.72907 13.8421 2.98276 15.6426 3.65472 17.3036C3.71572 17.4422 3.74827 17.5917 3.75042 17.7432C3.75257 17.8947 3.72428 18.045 3.66724 18.1854C3.6102 18.3257 3.52556 18.4532 3.41835 18.5602C3.31113 18.6672 3.18351 18.7516 3.04307 18.8084C2.90263 18.8652 2.29983 18.8555 2.16128 18.7943C2.02273 18.733 1.89789 18.6446 1.79416 18.5342C1.69043 18.4238 1.60992 18.2936 1.55741 18.1515C0.41602 15.3287 0.285442 12.1981 1.18779 9.28997C2.09014 6.38186 3.96995 3.87504 6.50881 2.19412C9.04767 0.513196 12.0895 -0.238498 15.1191 0.0663603C18.1487 0.371218 20.9798 1.71389 23.1328 3.86694C25.2859 6.02 26.6285 8.85109 26.9334 11.8807C27.2383 14.9103 26.4866 17.9521 24.8056 20.4909C23.1247 23.0298 20.6179 24.9096 17.7098 25.812C14.8017 26.7143 11.6711 26.5837 8.84821 25.4424C8.57605 25.3256 8.36048 25.1068 8.24779 24.833C8.13509 24.5591 8.13424 24.252 8.24542 23.9775C8.35659 23.703 8.57094 23.4831 8.84245 23.3648C9.11396 23.2466 9.42101 23.2395 9.6977 23.345C11.1934 23.9488 12.8042 24.2143 14.4146 24.1225C16.0249 24.0307 17.5951 23.5839 19.0126 22.8142C20.43 22.0444 21.6597 20.9708 22.6136 19.67C23.5675 18.3693 24.2219 16.8737 24.53 15.2904C24.8381 13.7072 24.7922 12.0753 24.3957 10.5118C23.9992 8.94834 23.2618 7.49188 22.2364 6.24677C21.211 5.00166 19.923 3.99872 18.4645 3.30978C17.006 2.62085 15.4133 2.26297 13.8003 2.26177Z" fill="#FFC800"/>
                                            <path d="M5.12459 13.201C5.12459 15.1881 5.79302 17.0199 6.91712 18.4835L6.20946 19.1911L6.16571 19.2364H4.40034C3.80028 19.2369 3.225 19.4757 2.80095 19.9003L0.330954 22.3703C0.172891 22.5286 0.0652728 22.7301 0.0216904 22.9495C-0.0218921 23.1689 0.00051653 23.3963 0.0860859 23.6029C0.171655 23.8096 0.316548 23.9862 0.502462 24.1106C0.688377 24.235 0.906975 24.3014 1.13065 24.3016H2.69986V25.8708C2.70006 26.0945 2.76653 26.3131 2.89089 26.499C3.01525 26.6849 3.19192 26.8298 3.39858 26.9154C3.60524 27.001 3.83262 27.0234 4.052 26.9798C4.27139 26.9362 4.47294 26.8286 4.6312 26.6705L7.1012 24.199C7.5254 23.7754 7.76417 23.2007 7.7651 22.6012V20.8358L7.81036 20.792L8.51801 20.0859C10.0716 21.2783 11.9829 21.9101 13.9411 21.8783C15.8993 21.8466 17.7892 21.1532 19.3033 19.9111C20.8174 18.6689 21.8667 16.951 22.2806 15.0368C22.6944 13.1225 22.4484 11.1246 21.5826 9.36794C20.7167 7.61127 19.282 6.19921 17.5118 5.36145C15.7416 4.52369 13.74 4.3095 11.8326 4.75373C9.92518 5.19797 8.22418 6.27448 7.00627 7.80817C5.78835 9.34187 5.12517 11.2425 5.12459 13.201ZM13.8005 6.78832C14.8069 6.78861 15.799 7.02573 16.6967 7.4805C17.5944 7.93528 18.3725 8.59495 18.968 9.40616C19.5635 10.2174 19.9598 11.1573 20.1247 12.1501C20.2896 13.1428 20.2185 14.1604 19.9173 15.1206C19.6161 16.0808 19.0931 16.9566 18.3906 17.6772C17.6882 18.3978 16.826 18.943 15.8738 19.2686C14.9216 19.5942 13.9062 19.6912 12.9095 19.5517C11.9129 19.4121 10.9632 19.04 10.137 18.4654L12.6206 15.9803C13.2654 16.2538 13.9852 16.2946 14.6567 16.0956C15.3282 15.8966 15.9096 15.4702 16.3012 14.8895C16.6928 14.3089 16.8702 13.61 16.803 12.9129C16.7359 12.2157 16.4283 11.5637 15.9331 11.0684C15.4378 10.5732 14.7858 10.2656 14.0886 10.1985C13.3914 10.1313 12.6926 10.3087 12.112 10.7003C11.5313 11.0919 11.1049 11.6733 10.9059 12.3448C10.7069 13.0163 10.7477 13.7361 11.0212 14.3809L8.53461 16.863C7.86556 15.9012 7.47278 14.7745 7.39892 13.6052C7.32506 12.4359 7.57295 11.2688 8.11567 10.2305C8.6584 9.19213 9.4752 8.32233 10.4774 7.7155C11.4796 7.10868 12.6289 6.78801 13.8005 6.78832ZM6.16571 20.7453L6.25624 20.8343V22.5996C6.2558 22.7996 6.17602 22.9911 6.03444 23.1323L4.20872 24.958V23.5472C4.20872 23.3471 4.12923 23.1552 3.98775 23.0137C3.84627 22.8723 3.65438 22.7928 3.45429 22.7928H2.042L3.86772 20.9671C3.93778 20.8968 4.02103 20.841 4.11269 20.8029C4.20434 20.7649 4.30261 20.7453 4.40185 20.7453H6.16571Z" fill="#FFC800"/>
                                        </svg>
                                    </div>
                                    <div className="text-[13px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-4">
                                        <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block" /> Vision
                                    </div>
                                    <h3 className="text-[22px] font-bold font-display text-white mb-5">Where we're headed</h3>
                                    <p className={`text-[14.5px] text-white/90 leading-relaxed text-justify ${!rm["vision"] ? "line-clamp-2 sm:line-clamp-none" : ""}`}>
                                        To build the nation by fostering industry- and research-oriented studies in Computer Science and Engineering and to become a centre of excellence in developing indigenous technologies for the advancement of society.
                                    </p>
                                    <button className="text-[14px] font-bold text-[#ffc107] hover:text-white mt-4 flex items-center justify-center gap-1 sm:hidden mx-auto transition-colors" onClick={() => toggleRm("vision")}>
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
                <section id="programs" className="py-8 md:pt-10 md:pb-6 px-4 sm:px-6 bg-white overflow-hidden relative scroll-mt-24">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-8">
                            <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3 flex items-center flex-wrap gap-4">
                                <span>Explore <span className="text-[#ffc107]">Programs</span></span>
                                <span className="text-[12px] font-bold bg-[#D94B38] text-white px-3 py-1.5 rounded-full flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span> Admissions open 2026
                                </span>
                            </h2>
                            <p className="text-[15.5px] text-[#4B5A72] leading-relaxed text-justify">
                                The Department of Computer Science and Engineering offers undergraduate and postgraduate programs across core computing and emerging technology domains.
                            </p>
                        </div>

                        <h3 className="text-[17px] font-bold text-[#14284E] mb-5">Undergraduate – After Class 12th</h3>
                        
                        {/* Desktop Grid */}
                        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                            {programCards.filter(p => p.level === "Undergraduate").map((prog, i) => (
                                <div key={i} className="bg-white border-[1.5px] border-[#D69E2E] rounded-xl p-6 sm:p-7 pt-8 shadow-[0_4px_18px_rgba(15,31,61,0.03)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1 transition-all duration-300 relative group flex flex-col h-full mt-4">
                                    <span className="absolute -top-3.5 right-6 bg-[#D69E2E] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">{prog.level}</span>
                                    
                                    <h3 className="font-bold text-[18px] font-display text-[#14284E] mb-3 group-hover:text-[#1B4F91] transition-colors leading-snug pr-2">{prog.title}</h3>
                                    <p className="text-[13.5px] text-[#54626D] leading-relaxed mb-6 flex-grow text-justify">{prog.desc}</p>
                                    
                                    <div className="flex items-center gap-6 mb-6 p-4 bg-[#EEF5FC] rounded-xl">
                                        <div className="flex-1">
                                            <span className="block text-[10.5px] text-[#54626D] font-bold uppercase tracking-wider mb-0.5">DURATION</span>
                                            <b className="font-display text-[16px] sm:text-[18px] text-[#14284E] block mt-1">{prog.duration}</b>
                                        </div>
                                        <div className="flex-1">
                                            <span className="block text-[10.5px] text-[#54626D] font-bold uppercase tracking-wider mb-0.5">ANNUAL FEE</span>
                                            <b className="font-display text-[16px] sm:text-[18px] text-[#D94B38] block mt-1">{prog.fee}</b>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                        <a href="#" className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-bold bg-[#14284E] text-white rounded-full hover:bg-[#1B4F91] hover:shadow-md transition-all">
                                            View Details →
                                        </a>
                                        <a href="https://students.srmu.ac.in/login" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-bold bg-[#ffc107] text-[#14284E] rounded-full hover:bg-[#FFD54F] hover:shadow-md transition-all">
                                            Apply Now →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Accordion */}
                        <div className="sm:hidden space-y-3 mb-10">
                            {programCards.filter(p => p.level === "Undergraduate").map((prog, i) => (
                                <div key={i}>
                                    <button type="button" onClick={() => setActiveUgProgram(activeUgProgram === i ? null : i)} className="w-full flex items-center justify-between rounded-xl border border-[#DCE6F2] bg-[#F6FAFE] px-4 py-4 text-left text-[14px] font-bold text-[#14284E]" aria-expanded={activeUgProgram === i}>
                                        <span className="font-bold text-[#14284E] leading-snug pr-4">{prog.title}</span>
                                        {activeUgProgram === i ? <ChevronUp className="w-5 h-5 shrink-0 text-[#1B4F91]" /> : <ChevronDown className="w-5 h-5 shrink-0 text-[#8A97A1]" />}
                                    </button>
                                    {activeUgProgram === i && (
                                        <div className="p-4 border border-t-0 border-[#DCE6F2] bg-white rounded-b-xl -mt-2 pt-6 shadow-sm">
                                            <p className="text-[13.5px] text-[#54626D] leading-relaxed mb-6 text-justify">{prog.desc}</p>
                                            
                                            <div className="flex items-center gap-6 mb-6 p-4 bg-[#F8FAFC] rounded-xl border border-[#F1F5F9]">
                                                <div className="flex-1 border-r border-[#E2E8F0]">
                                                    <span className="block text-[10.5px] text-[#8A97A1] font-bold uppercase tracking-wider mb-0.5">Duration</span>
                                                    <b className="font-display text-[16px] text-[#14284E]">{prog.duration}</b>
                                                </div>
                                                <div className="flex-1">
                                                    <span className="block text-[10.5px] text-[#8A97A1] font-bold uppercase tracking-wider mb-0.5">Annual Fee</span>
                                                    <b className="font-display text-[16px] text-[#14284E]">{prog.fee}</b>
                                                </div>
                                            </div>
                                            
                                            <div className="flex flex-col gap-3">
                                                <a href="#" className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-bold bg-[#14284E] text-white rounded-full hover:bg-[#1B4F91] transition-all">
                                                    View Details <ArrowRight className="w-3.5 h-3.5" />
                                                </a>
                                                <a href="https://students.srmu.ac.in/login" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-bold bg-[#ffc107] text-[#14284E] rounded-full hover:bg-[#FFD54F] transition-all">
                                                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <h3 className="text-[17px] font-bold text-[#14284E] mb-5 relative z-20">Postgraduate – After Graduation</h3>
                        
                        {/* Desktop Grid */}
                        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative">
                            {programCards.filter(p => p.level === "Postgraduate").map((prog, i) => (
                                <div key={i} className="bg-white border-[1.5px] border-[#14284E] rounded-xl p-6 sm:p-7 pt-8 shadow-[0_4px_18px_rgba(15,31,61,0.03)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1 transition-all duration-300 relative z-20 group flex flex-col h-full mt-4">
                                    <span className="absolute -top-3.5 right-6 bg-[#14284E] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">{prog.level}</span>
                                    
                                    <h3 className="font-bold text-[18px] font-display text-[#14284E] mb-3 group-hover:text-[#1B4F91] transition-colors leading-snug pr-2">{prog.title}</h3>
                                    <p className="text-[13.5px] text-[#54626D] leading-relaxed mb-6 flex-grow text-justify">{prog.desc}</p>
                                    
                                    <div className="flex items-center gap-6 mb-6 p-4 bg-[#EEF5FC] rounded-xl">
                                        <div className="flex-1">
                                            <span className="block text-[10.5px] text-[#54626D] font-bold uppercase tracking-wider mb-0.5">DURATION</span>
                                            <b className="font-display text-[16px] sm:text-[18px] text-[#14284E] block mt-1">{prog.duration}</b>
                                        </div>
                                        <div className="flex-1">
                                            <span className="block text-[10.5px] text-[#54626D] font-bold uppercase tracking-wider mb-0.5">ANNUAL FEE</span>
                                            <b className="font-display text-[16px] sm:text-[18px] text-[#D94B38] block mt-1">{prog.fee}</b>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                        <a href="#" className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-bold bg-[#14284E] text-white rounded-full hover:bg-[#1B4F91] hover:shadow-md transition-all">
                                            View Details →
                                        </a>
                                        <a href="https://students.srmu.ac.in/login" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-bold bg-[#ffc107] text-[#14284E] rounded-full hover:bg-[#FFD54F] hover:shadow-md transition-all">
                                            Apply Now →
                                        </a>
                                    </div>
                                </div>
                            ))}
                            {/* Decorative Background Image placed behind boxes, extending to screen edge */}
                            <div 
                                className="hidden lg:block absolute bottom-0 z-0 pointer-events-none opacity-80"
                                style={{ right: "calc(50% - 50vw)", width: "800px", maxWidth: "60vw" }}
                            >
                                <img 
                                    src="/assets/images/new-information-system/to-merge.png" 
                                    alt="Decorative Background" 
                                    className="w-full h-auto object-contain object-right-bottom" 
                                />
                            </div>
                        </div>

                        {/* Mobile Accordion */}
                        <div className="sm:hidden space-y-3 relative z-20">
                            {programCards.filter(p => p.level === "Postgraduate").map((prog, i) => (
                                <div key={i}>
                                    <button type="button" onClick={() => setActivePgProgram(activePgProgram === i ? null : i)} className="w-full flex items-center justify-between rounded-xl border border-[#DCE6F2] bg-[#F6FAFE] px-4 py-4 text-left text-[14px] font-bold text-[#14284E]" aria-expanded={activePgProgram === i}>
                                        <span className="font-bold text-[#14284E] leading-snug pr-4">{prog.title}</span>
                                        {activePgProgram === i ? <ChevronUp className="w-5 h-5 shrink-0 text-[#1B4F91]" /> : <ChevronDown className="w-5 h-5 shrink-0 text-[#8A97A1]" />}
                                    </button>
                                    {activePgProgram === i && (
                                        <div className="p-4 border border-t-0 border-[#DCE6F2] bg-white rounded-b-xl -mt-2 pt-6 shadow-sm">
                                            <p className="text-[13.5px] text-[#54626D] leading-relaxed mb-6 text-justify">{prog.desc}</p>
                                            
                                            <div className="flex items-center gap-6 mb-6 p-4 bg-[#F8FAFC] rounded-xl border border-[#F1F5F9]">
                                                <div className="flex-1 border-r border-[#E2E8F0]">
                                                    <span className="block text-[10.5px] text-[#8A97A1] font-bold uppercase tracking-wider mb-0.5">Duration</span>
                                                    <b className="font-display text-[16px] text-[#14284E]">{prog.duration}</b>
                                                </div>
                                                <div className="flex-1">
                                                    <span className="block text-[10.5px] text-[#8A97A1] font-bold uppercase tracking-wider mb-0.5">Annual Fee</span>
                                                    <b className="font-display text-[16px] text-[#14284E]">{prog.fee}</b>
                                                </div>
                                            </div>
                                            
                                            <div className="flex flex-col gap-3">
                                                <a href="#" className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-bold bg-[#14284E] text-white rounded-full hover:bg-[#1B4F91] transition-all">
                                                    View Details <ArrowRight className="w-3.5 h-3.5" />
                                                </a>
                                                <a href="https://students.srmu.ac.in/login" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-bold bg-[#ffc107] text-[#14284E] rounded-full hover:bg-[#FFD54F] transition-all">
                                                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-col items-center justify-center text-center">
                            {/* <p className="text-[13px] sm:text-[14px] text-[#4B5A72] mb-5 max-w-[800px]">
                                SRMU's current department page lists these programs and their respective durations and fee information.
                            </p> */}
                            <Link to="/programs" className="inline-flex items-center gap-2 bg-[#ffc107] hover:bg-[#FFD54F] text-[#14284E] font-bold text-[14px] px-8 py-3.5 rounded-lg shadow-sm transition-all hover:-translate-y-0.5">
                                View All CSE Programs <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── Labs & Practical Learning ─────────────────────────────── */}
                <section id="labs" className="py-8 md:pt-6 md:pb-12 px-4 sm:px-6 bg-white scroll-mt-24">
                    <div className={`${Classes["container"]}`}>

                        {/* Header & Controls */}
                        <div className="w-full mb-8 md:mb-10 flex flex-col gap-4">
                            <div className="w-full">
                                <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3">
                                    Labs &amp; <span className="text-[#ffc107]">Practical Learning</span>
                                </h2>
                                <p className={`text-[15.5px] text-[#4B5A72] leading-relaxed text-justify ${!rm["labs"] ? "line-clamp-3 sm:line-clamp-none" : ""}`}>
                                    The Department of Computer Science and Engineering at Shri Ramswaroop Memorial University provides students with practical learning environments designed to complement classroom teaching. Through programming, computing, networking, artificial intelligence, cloud technologies and industry-oriented laboratories, students get opportunities to apply concepts, develop projects and strengthen their technical skills.
                                </p>
                                <button className="text-[14px] font-bold text-[#ffc107] mt-3 flex items-center justify-start sm:hidden transition-colors hover:text-[#FFD54F]" onClick={() => toggleRm("labs")}>
                                    {rm["labs"] ? "Read Less" : "Read More"}
                                </button>
                            </div>
                            
                            {/* Navigation Buttons */}
                            <div className="flex items-center gap-3 shrink-0 self-start sm:hidden">
                                <button
                                    onClick={() => labsEmblaApi?.scrollPrev()}
                                    disabled={!labsCanPrev}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-sm text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                    aria-label="Previous Lab"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => labsEmblaApi?.scrollNext()}
                                    disabled={!labsCanNext}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-sm text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
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
                                        accent: "#D94B38",
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
                                        accent: "#D94B38",
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
                                        accent: "#D94B38",
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
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <span
                                                    className="block text-[22px] font-bold leading-none mb-1"
                                                    style={{ color: lab.accent }}
                                                >
                                                    {lab.num}
                                                </span>
                                                <span
                                                    className="text-[10px] font-bold uppercase tracking-[0.12em]"
                                                    style={{ color: lab.accent }}
                                                >
                                                    Lab {lab.num}
                                                </span>
                                            </div>
                                            <img
                                                src={lab.iconSrc}
                                                alt=""
                                                className={`w-10 h-10 object-contain shrink-0 opacity-90 ${lab.animClass}`}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-[15.5px] font-bold font-display text-[#14284E] mb-2 leading-snug group-hover:text-[#1B4F91] transition-colors">
                                            {lab.title}
                                        </h3>

                                        {/* Accent divider */}
                                        <div className="w-8 h-[2.5px] mb-3 rounded-full" style={{ backgroundColor: lab.accent }} />

                                        {/* Description */}
                                        <p className="text-[13px] text-[#4B5A72] leading-relaxed text-justify flex-grow">
                                            {lab.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col items-center justify-center text-center">
                            <Link to="/campus-life" className="inline-flex items-center gap-2 bg-[#ffc107] hover:bg-[#FFD54F] text-[#14284E] font-bold text-[14px] px-8 py-3.5 rounded-lg shadow-sm transition-all hover:-translate-y-0.5">
                                Take a Campus Tour <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                    </div>
                </section>

                {/* ── Events ───────────────────────────────────────────────── */}
                <section id="events" className="py-8 md:py-10 px-4 sm:px-6 bg-[#F0F6FB] scroll-mt-24">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-8 flex flex-col gap-4">
                            <div className="w-full">
                                {/* <div className="text-[12px] sm:text-[13px] tracking-[0.1em] uppercase text-[#D94B38] font-bold flex items-center gap-2 mb-3">
                                    <span className="w-4 h-[2px] bg-[#D94B38] inline-block shrink-0" /> BEYOND THE CLASSROOM <span className="w-4 h-[2px] bg-[#D94B38] inline-block shrink-0" />
                                </div> */}
                                <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3">
                                    From Classroom Concepts to <span className="text-[#ffc107]">Real-World Applications</span>
                                </h2>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex items-center gap-3 shrink-0 self-start sm:hidden">
                                <button
                                    onClick={() => eventsEmblaApi?.scrollPrev()}
                                    disabled={!eventsCanPrev}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-sm text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                    aria-label="Previous Event"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => eventsEmblaApi?.scrollNext()}
                                    disabled={!eventsCanNext}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-sm text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                    aria-label="Next Event"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="overflow-hidden sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0" ref={eventsEmblaRef}>
                            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-4 sm:pb-0">
                                {events.map((ev, i) => (
                                    <div key={i} className="flex flex-col shrink-0 w-[85vw] sm:w-auto sm:shrink bg-white border border-[#DCE6F2] border-b-[4px] border-b-[#D94B38] rounded-2xl overflow-hidden shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1 transition-all duration-300">
                                        <div className="w-full aspect-[16/9] relative overflow-hidden bg-[#DCE6F2]">
                                        <img src={ev.img} alt={ev.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                                    </div>
                                    <div className="p-5 sm:p-6 flex flex-col flex-grow">
                                        <span className="text-[10.5px] font-bold uppercase tracking-[0.06em] text-[#D94B38] mb-2 block">{ev.tag}</span>
                                        <h5 className="font-bold text-[16px] text-[#14284E] font-display mb-2 leading-snug line-clamp-2">{ev.title}</h5>
                                        <div className="text-[13.5px] text-[#3F4C56] mb-4 flex-grow">
                                            <span className="line-clamp-2">{ev.speaker}</span>
                                        </div>
                                        <div className="mt-auto pt-4 border-t border-[#F1F5F9]">
                                            <button 
                                                onClick={() => setSelectedEvent(ev)}
                                                className="text-[11.5px] font-bold text-[#D94B38] hover:text-[#1B4F91] uppercase tracking-[0.08em] flex items-center gap-1.5 transition-colors"
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
                            <a href="#" className="group px-8 py-3.5 text-[13.5px] font-bold uppercase tracking-wider bg-[#14284E] text-white rounded-xl shadow-[0_4px_14px_rgba(20,40,78,0.2)] hover:bg-[#1B4F91] hover:shadow-[0_6px_20px_rgba(20,40,78,0.3)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                                View All Events <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── Placements ───────────────────────────────────────────── */}
                <section className="pt-8 md:pt-10 pb-4 px-4 sm:px-6 bg-gradient-to-b from-white to-[#E0F1FF] scroll-mt-24" id="placements">
                    <div className={`${Classes["container"]} mx-auto`}>

                        {/* Placement Stats + Image */}
                        <div className="grid lg:grid-cols-2 gap-5 items-start">

                            {/* Stats */}

                            <div className="w-full">


                                <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                    Where Our Students <span className="text-[#ffc107]">Get Placed</span>
                                </h2>

                                <div className="mt-4">
                                    <p className={`text-[15px] leading-6 text-[#4B5A72] text-justify ${!rm['placement1'] ? 'rm-clamp' : ''}`}>
                                        Dedicated placement training — resume building, coding practice,
                                        mock interviews and group discussions — starts from the final year.
                                    </p>
                                    <button className="rm-btn" onClick={() => toggleRm('placement1')}>{rm['placement1'] ? 'Read Less' : 'Read More'}</button>
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
                                            <div className="text-[15px] font-bold text-[#ffc107] mb-1">{s.val}</div>
                                            <div className="text-[12.5px] text-white/80 leading-snug">{s.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Desktop stats — individual white cards */}
                                <div className="hidden sm:grid grid-cols-2 gap-4 mt-6">

                                    <div className="bg-white border border-[#DCE6F2] rounded-xl p-5 min-h-[90px] shadow-sm">
                                        <div className="text-[14.5px] font-semibold text-[#ffc107] mb-3">
                                            ₹53 LPA
                                        </div>

                                        <h3 className="text-[14px] font-bold font-display text-[#14284E]">
                                            Highest Package
                                        </h3>
                                    </div>

                                    <div className="bg-white border border-[#DCE6F2] rounded-xl p-5 min-h-[90px] shadow-sm">
                                        <div className="text-[14.5px] font-semibold text-[#ffc107] mb-3">
                                            ₹4.5 LPA
                                        </div>

                                        <h3 className="text-[14px] font-bold font-display text-[#14284E]">
                                            Average Package
                                        </h3>
                                    </div>

                                    <div className="bg-white border border-[#DCE6F2] rounded-xl p-5 min-h-[90px] shadow-sm">
                                        <div className="text-[14.5px] font-semibold text-[#ffc107] mb-3">
                                            1200+
                                        </div>

                                        <h3 className="text-[14px] font-bold font-display text-[#14284E]">
                                            Job Offers Given
                                        </h3>
                                    </div>

                                    <div className="bg-white border border-[#DCE6F2] rounded-xl p-5 min-h-[90px] shadow-sm">
                                        <div className="text-[14.5px] font-semibold text-[#ffc107] mb-3">
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

                        {/* Top Recruiters */}
                        <div className="mt-7">
                            <div className="flex items-center justify-between gap-4 mb-3.5">
                                <h3 className="text-[17px] font-bold font-display text-[#14284E]">
                                    Top Recruiters
                                </h3>
                                {/* Carousel arrows — desktop only */}
                                <div className="hidden sm:flex gap-2">
                                    <button
                                        type="button"
                                        onClick={() => emblaApi?.scrollPrev()}
                                        disabled={!canScrollPrev}
                                        title="Previous recruiters"
                                        aria-label="Previous recruiters"
                                        className="w-9 h-9 rounded-md border border-[#DCE6F2] bg-white text-[#14284E] flex items-center justify-center transition-colors hover:border-[#1B4F91] hover:text-[#1B4F91] disabled:opacity-40 disabled:cursor-not-allowed"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => emblaApi?.scrollNext()}
                                        disabled={!canScrollNext}
                                        title="Next recruiters"
                                        aria-label="Next recruiters"
                                        className="w-9 h-9 rounded-md border border-[#DCE6F2] bg-white text-[#14284E] flex items-center justify-center transition-colors hover:border-[#1B4F91] hover:text-[#1B4F91] disabled:opacity-40 disabled:cursor-not-allowed"
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Mobile — auto-scroll marquee */}
                            <div className="sm:hidden overflow-hidden relative">
                                <div className="flex gap-3 w-max animate-marquee hover:[animation-play-state:paused]">
                                    {[...recruiterLogos, ...recruiterLogos].map(([src, name], index) => (
                                        <div key={`${name}-${index}`} className="h-[64px] w-[110px] shrink-0 bg-white border border-[#DCE6F2] rounded-md px-3 py-2 flex items-center justify-center">
                                            <img src={src} alt={name} className="max-h-6 w-auto object-contain" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Desktop — Embla carousel */}
                            <div className="hidden sm:block overflow-hidden" ref={emblaRef}>
                                <div className="flex -ml-3">
                                    {recruiterLogos.map(([src, name]) => (
                                        <div key={name} className="flex-[0_0_50%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_16.666%] pl-3">
                                            <div className="h-[76px] bg-white border border-[#DCE6F2] rounded-md px-4 py-3 flex items-center justify-center">
                                                <img src={src} alt={name} className="max-h-7 w-auto object-contain" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* View Placement Details Button */}
                        <div className="flex justify-center w-full mt-10">
                            <Link to="https://srmu.ac.in/placements" target="_blank" className="inline-flex items-center bg-[#ffc107] hover:bg-[#D78610] text-[#14284E] font-semibold text-[14.5px] px-6 py-3 rounded-md transition-colors shadow-sm hover:-translate-y-0.5">
                                View Placement Details →
                            </Link>
                        </div>
                    </div>
                </section>


                {/* ── Faculty ──────────────────────────────────────────────── */}
                <section id="faculty" className="pt-4 pb-0 sm:py-10 px-4 sm:px-6 bg-white scroll-mt-24">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-8">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block" /> Faculty List
                            </div> */}
                            <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3">
                                Learn from experienced <span className="text-[#ffc107]">academic & research professionals.</span>
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
                                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-md text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Previous"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </button>

                            {/* Embla viewport */}
                            <div className="overflow-hidden" ref={facultyEmblaRef}>
                                <div className="flex gap-4">
                                    {facultyList.map(f => (
                                        <div key={f.name} className="bg-[#EEF5FC] border border-[#DCE6F2] border-b-[4px] border-b-[#D94B38] rounded-2xl overflow-hidden text-center pb-4 shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col flex-shrink-0" style={{ width: "220px" }}>
                                            <div className="w-full bg-[#EAEAEA] mb-4 relative" style={{ aspectRatio: "4/5" }}>
                                                {f.isHod && (
                                                    <div className="absolute top-3 left-3 bg-[#D94B38] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm z-10">
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
                                                        className="text-[11px] font-bold text-[#D94B38] hover:text-[#14284E] uppercase tracking-wider flex items-center justify-center gap-1 w-full transition-colors"
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
                                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-md text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Next"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* ── Key Highlights ───────────────────────────────────────── */}
                <section className="pt-8 pb-6 md:pt-10 md:pb-6 px-4 sm:px-6 bg-[#14284e]">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-8 flex flex-col gap-4">
                            <div className="w-full">
                                <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-white">
                                    What Makes the <span className="text-[#ffc107]">CSE Department Different</span> in SRMU?
                                </h2>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex items-center gap-3 shrink-0 self-start sm:hidden">
                                <button
                                    onClick={() => whyEmblaApi?.scrollPrev()}
                                    disabled={!whyCanPrev}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#14284e] border border-white/20 shadow-sm text-white hover:bg-white hover:text-[#14284e] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                    aria-label="Previous"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => whyEmblaApi?.scrollNext()}
                                    disabled={!whyCanNext}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#14284e] border border-white/20 shadow-sm text-white hover:bg-white hover:text-[#14284e] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                    aria-label="Next"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="overflow-hidden sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0" ref={whyEmblaRef}>
                            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-px pb-4 sm:pb-0 sm:bg-white/20 sm:border sm:border-white/20 sm:rounded-2xl sm:overflow-hidden">
                                {whyItems.map(w => (
                                    <div key={w.num} className="bg-[#14284e] p-7 sm:p-8 transition-colors flex flex-col shrink-0 w-[85vw] sm:w-auto sm:shrink rounded-2xl sm:rounded-none border border-white/20 sm:border-0">
                                        <div className="mb-5">
                                            <span className="block text-[14px] text-[#ffc107] font-bold tracking-[0.05em]">{w.num}</span>
                                            <div className="w-6 h-[2.5px] bg-[#D94B38] mt-2"></div>
                                        </div>
                                        <h4 className="text-white font-bold text-[17px] mb-3 font-display leading-snug">{w.title}</h4>
                                        <p className="text-white/80 text-[13.5px] leading-relaxed text-justify">{w.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Admission + Eligibility buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pb-2">
                            <a
                                href="https://students.srmu.ac.in/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#ffc107] hover:bg-[#FFD54F] text-[#14284E] font-bold text-[14px] px-8 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-md w-full sm:w-auto justify-center"
                            >
                                Admission <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#programs"
                                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-[14px] px-8 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                            >
                                Eligibility <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── Career Pathways ──────────────────────────────────────── */}
                <section id="careers" className="pt-6 pb-10 md:pt-8 md:pb-16 px-4 sm:px-6 bg-[#EEF5FC] border-b-[8px] border-[#D69E2E]">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-10 md:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div className="text-left max-w-3xl">
                                <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                    Where Can a <span className="text-[#ffc107]">CSE Degree</span> Take You?
                                </h2>
                            </div>
                            
                            {/* Navigation Buttons */}
                            <div className="flex items-center justify-start gap-3 shrink-0 sm:hidden">
                                <button
                                    onClick={() => careersEmblaApi?.scrollPrev()}
                                    disabled={!careersCanPrev}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-sm text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                    aria-label="Previous Career"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => careersEmblaApi?.scrollNext()}
                                    disabled={!careersCanNext}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-sm text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                    aria-label="Next Career"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="overflow-hidden sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0" ref={careersEmblaRef}>
                            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 touch-pan-y">
                                {careerItems.map((item, index) => (
                                    <div key={index} className="shrink-0 w-[85vw] sm:w-auto sm:shrink bg-white p-6 md:p-8 rounded-2xl border border-[#DCE6F2] border-t-[4px] border-t-[#D69E2E] hover:border-t-[#14284E] shadow-[0_4px_18px_rgba(15,31,61,0.03)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] transition-all duration-300 group flex flex-col h-full">
                                        <div className="w-12 h-12 rounded-xl bg-[#D69E2E] text-[#14284E] flex items-center justify-center mb-5 transition-colors duration-300 shadow-sm">
                                            <item.icon className="w-6 h-6" strokeWidth={1.5} />
                                        </div>
                                        <h4 className="font-display font-bold text-[18px] text-[#14284E] mb-3 leading-snug">{item.title}</h4>
                                        <p className="text-[#3F4C56] text-[13.5px] leading-relaxed flex-grow text-justify mb-4">{item.desc}</p>
                                        <div className="mt-auto pt-2">
                                            <button className="text-[11px] font-bold text-[#D94B38] hover:text-[#1B4F91] uppercase tracking-[0.08em] flex items-center gap-1.5 transition-colors">
                                                EXPLORE →
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Scholarships ─────────────────────────────────────────── */}
                <section className="pt-8 pb-4 sm:py-10 bg-white scroll-mt-24 border-b border-[#e0e0e0]" id="scholarships">
                    <div className={`${Classes["container"]} mx-auto`}>
                        <div className="flex flex-col lg:flex-row gap-5">
                            {/* Left Side: Jagran Banner */}
                            <div className="w-full lg:w-2/5 xl:w-[35%] flex">
                                <img src="/assets/images/new-information-system/beside-scholarship.png" alt="Future Ready University" className="w-full h-full object-cover rounded-xl" />
                            </div>

                            {/* Right Side: Scholarship Cards and Bottom Banner */}
                            <div className="w-full lg:w-3/5 xl:w-[65%] flex flex-col gap-5">
                                {/* Top: 3 Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                    {/* Card 1 */}
                                    <div className="border border-[#e0e0e0] bg-white p-5 flex flex-col rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-10 h-10 rounded-full bg-[#fce8e8] flex items-center justify-center mb-4 shrink-0">
                                            <GraduationCap className="w-5 h-5 text-[#D94B38]" />
                                        </div>
                                        <ul className="space-y-2">
                                            {scholarshipItems.slice(0, 3).map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-[#4B5A72] text-[12.5px] font-medium leading-[1.3]">
                                                    <span className="w-1 h-1 bg-[#D94B38] mt-[5px] shrink-0"></span><span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* Card 2 */}
                                    <div className="border border-[#e0e0e0] bg-white p-5 flex flex-col rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-10 h-10 rounded-full bg-[#fce8e8] flex items-center justify-center mb-4 shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D94B38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                        </div>
                                        <ul className="space-y-2">
                                            {scholarshipItems.slice(3, 6).map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-[#4B5A72] text-[12.5px] font-medium leading-[1.3]">
                                                    <span className="w-1 h-1 bg-[#D94B38] mt-[5px] shrink-0"></span><span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* Card 3 */}
                                    <div className="border border-[#e0e0e0] bg-white p-5 flex flex-col rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-10 h-10 rounded-full bg-[#fce8e8] flex items-center justify-center mb-4 shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-[#D94B38]" />
                                        </div>
                                        <ul className="space-y-2">
                                            {scholarshipItems.slice(6, 10).map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-[#4B5A72] text-[12.5px] font-medium leading-[1.3]">
                                                    <span className="w-1 h-1 bg-[#D94B38] mt-[5px] shrink-0"></span><span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                {/* Bottom: Wide Banner */}
                                <div className="w-full flex-grow relative rounded-xl overflow-hidden shadow-sm">
                                    <img src="/assets/images/new-information-system/new-scholarship.png" alt="Scholarships" className="w-full h-auto lg:h-full object-cover lg:min-h-[220px]" />
                                    {/* Desktop overlay button (sm and above only) */}
                                    <div className="hidden sm:block absolute bottom-[8%] left-[5%]">
                                        <Link 
                                            to="/scholarship" 
                                            className="inline-flex items-center gap-1.5 bg-[#ffc107] hover:bg-[#FFD54F] text-[#14284E] font-bold text-[12px] lg:text-[14px] px-5 lg:px-6 py-2 lg:py-2.5 rounded-md shadow-md transition-transform hover:-translate-y-0.5"
                                        >
                                            Apply Now <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                                {/* Mobile button (below the image, sm and below only) */}
                                <div className="sm:hidden flex justify-start mt-3 px-1">
                                    <Link 
                                        to="/scholarship" 
                                        className="inline-flex items-center gap-1.5 bg-[#ffc107] hover:bg-[#FFD54F] text-[#14284E] font-bold text-[13px] px-5 py-2.5 rounded-md shadow-md transition-transform active:scale-95"
                                    >
                                        Apply Now <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
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
                    <div className={`${Classes["container"]}`}>
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                            <div>
                                <div className="text-[12px] sm:text-[13px] tracking-[0.1em] uppercase text-[#D94B38] font-bold flex items-center gap-2 mb-2">
                                    <span className="w-4 h-[2px] bg-[#D94B38] inline-block shrink-0" /> From the Blog
                                </div>
                                <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                    Latest <span className="text-[#ffc107]">Insights & Resources</span>
                                </h2>
                                <p className="text-[14px] text-[#4B5A72] mt-2 max-w-xl">
                                    Guides, stories, and updates from the world of Computer Science & Engineering.
                                </p>
                            </div>
                            <div className="flex flex-row items-center justify-between sm:justify-end gap-3 shrink-0 w-full sm:w-auto">
                                <Link
                                    to="/blogs"
                                    className="shrink-0 inline-flex items-center gap-2 bg-[#14284E] hover:bg-[#1B4F91] text-white font-bold text-[13px] px-6 py-2.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-sm"
                                >
                                    All Blogs <ArrowRight className="w-4 h-4" />
                                </Link>

                                {/* Navigation Buttons */}
                                <div className="flex items-center gap-2 sm:hidden">
                                    <button
                                        onClick={() => blogsEmblaApi?.scrollPrev()}
                                        disabled={!blogsCanPrev}
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-sm text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                        aria-label="Previous Blog"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => blogsEmblaApi?.scrollNext()}
                                        disabled={!blogsCanNext}
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#DCE6F2] shadow-sm text-[#14284E] hover:bg-[#14284E] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
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
                                        <div key={card.id || card.slug || `blog-${idx}`} className="shrink-0 w-[85vw] sm:w-auto sm:shrink group flex flex-col bg-white border border-[#DCE6F2] border-b-[4px] border-b-[#ffc107] rounded-2xl overflow-hidden shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.10)] hover:-translate-y-1 transition-all duration-300">
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
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107] shrink-0" />
                                                        {card.postedOn}
                                                    </p>
                                                )}
                                                <h3 className="font-bold text-[15.5px] text-[#14284E] font-display leading-snug mb-4 flex-grow line-clamp-3 group-hover:text-[#1B4F91] transition-colors">
                                                    <Link to={blogPath}>{card.title}</Link>
                                                </h3>
                                                <div className="mt-auto pt-4 border-t border-[#F1F5F9]">
                                                    <Link
                                                        to={blogPath}
                                                        className="text-[11.5px] font-bold text-[#D94B38] hover:text-[#1B4F91] uppercase tracking-[0.08em] flex items-center gap-1.5 transition-colors"
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
                    </div>
                </section>
                    );
                })()}

                {/* ── Map Section ──────────────────────────────────────────── */}
                <Map />

                {/* ── FAQ ──────────────────────────────────────────────────── */}
                <section id="faq" className="py-10 md:py-14 px-4 sm:px-6 bg-[#F4F7FB]">
                    <div className={`${Classes["container"]} max-w-[900px]`}>
                        {/* Header */}
                        <div className="w-full mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div className="min-w-0 flex-1">
                                <div className="text-[12px] sm:text-[13px] tracking-[0.1em] uppercase text-[#D94B38] font-bold flex items-center gap-2 mb-3">
                                    <span className="w-4 h-[2px] bg-[#D94B38] inline-block shrink-0" /> FAQ
                                </div>
                                <h2 className="text-[clamp(28px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] break-words">
                                    Frequently Asked <span className="text-[#ffc107]">Questions</span>
                                </h2>
                                <p className="text-[14px] text-[#4B5A72] mt-2 break-words whitespace-normal">
                                    Discover Opportunities, Ignite Your Potential - Be Part of SRMU Uttar Pradesh
                                </p>
                            </div>
                            <button
                                onClick={() => setShowAllFaq(!showAllFaq)}
                                className="shrink-0 flex items-center justify-center gap-2 bg-[#1B4F91] hover:bg-[#14284E] text-white font-bold text-[13px] px-5 py-2.5 rounded-lg transition-colors w-fit"
                            >
                                View FAQ <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllFaq ? "rotate-180" : ""}`} />
                            </button>
                        </div>

                        {/* Accordion */}
                        <div className={`flex flex-col gap-3 transition-all duration-500 overflow-hidden ${showAllFaq ? "max-h-[3000px] opacity-100 mt-6" : "max-h-0 opacity-0"}`}>
                            {faqItems.map((faq, i) => (
                                <div
                                    key={i}
                                    className={`bg-white border rounded-xl overflow-hidden shadow-sm transition-all duration-200 ${
                                        openFaq === i ? "border-[#14284E]" : "border-[#E5E7EB]"
                                    }`}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full text-left flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-[18px]"
                                        aria-expanded={openFaq === i}
                                    >
                                        <span className="font-bold text-[14.5px] sm:text-[15px] text-[#14284E] pr-2 leading-snug">
                                            <span className="text-[#D94B38] mr-2">{String(i + 1).padStart(2, "0")}.</span>
                                            {faq.q}
                                        </span>
                                        <span
                                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[18px] shrink-0 transition-all duration-300 font-sans ${
                                                openFaq === i
                                                    ? "bg-[#14284E] text-white rotate-45"
                                                    : "bg-[#F0F6FB] text-[#14284E]"
                                            }`}
                                        >
                                            +
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 px-5 sm:px-6 ${
                                            openFaq === i ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
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
                    </div>
                </section>

                {/* ── CTA Band ─────────────────────────────────────────────── */}
                {/* <section id="apply" className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-[#3E6B54] to-[#5C8A72]">
                    <div className={`${Classes["container"]}`}>
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
                                    className="px-7 py-3 font-bold text-[14px] text-white border border-white/50 rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    Talk to a Counselor
                                </a>
                                <a
                                    href="/Broucher_SRMU_25_April___.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-7 py-3 font-bold text-[14px] text-white border border-white/50 rounded-lg hover:bg-white/10 transition-colors"
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
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors z-10 backdrop-blur-md"
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
                                <div className="text-[13px] text-[#ffc107] font-bold uppercase tracking-widest mb-6">{selectedFaculty.role}</div>
                                
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {selectedFaculty.qualification && (
                                            <div className="inline-flex items-baseline gap-2 bg-[#F0F6FB] border border-[#DCE6F2] px-4 py-2 rounded-lg text-[13px] text-[#3F4C56]">
                                                <span className="font-medium text-[#14284E]">Qualification:</span>
                                                <span className="font-display text-[14px] font-semibold text-[#14284E]">{selectedFaculty.qualification}</span>
                                            </div>
                                        )}
                                        {selectedFaculty.experience && (
                                            <div className="inline-flex items-baseline gap-2 bg-[#F0F6FB] border border-[#DCE6F2] px-4 py-2 rounded-lg text-[13px] text-[#3F4C56]">
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
                                            <a href={`mailto:${selectedFaculty.email}`} className="flex flex-col text-[13px] text-[#14284E] font-bold hover:text-[#ffc107]">
                                                <span className="text-[10.5px] text-[#8A97A1] uppercase tracking-[0.06em] font-semibold mb-0.5">Email</span>
                                                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" />{selectedFaculty.email}</span>
                                            </a>
                                            <a href={`tel:${selectedFaculty.contact}`} className="flex flex-col text-[13px] text-[#14284E] font-bold hover:text-[#ffc107]">
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
                            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                        
                        <div className="w-full aspect-[21/9] relative bg-[#F0F6FB]">
                            <img src={selectedEvent.img} alt={selectedEvent.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-6 right-6">
                                <span className="inline-block bg-[#ffc107] text-[#14284E] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm shadow-sm mb-2">{selectedEvent.tag}</span>
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
        <div role="contentinfo" className="bg-[#14284E] text-white pt-16 pb-6 border-t-[4px] border-[#ffc107]">
            <div className={`${Classes["container"]}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-8 mb-12">
                    
                    {/* Col 1: Brand & Contact */}
                    <div className="lg:col-span-2 space-y-6 lg:pr-6">
                        <div>
                            <img src={logosrmcem} alt="SRMU Logo" className="max-h-[60px] max-w-full w-auto object-contain object-left mb-5" />
                            <p className="text-[13px] text-gray-300 leading-relaxed text-justify mb-5">
                                Shri Ramswaroop Memorial University (SRMU), Lucknow- Deva Road, Barabanki, Uttar Pradesh is committed to providing quality education, fostering innovation and building a brighter future for our students.
                            </p>
                            
                            {/* <div className="flex gap-2.5">
                                <a href="https://www.linkedin.com/school/shri-ramswaroop-memorial-university/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffc107] hover:text-[#ffc107] transition-colors"><Linkedin className="w-4 h-4" /></a>
                                <a href="https://www.facebook.com/SRMUOFFICIAL/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffc107] hover:text-[#ffc107] transition-colors"><Facebook className="w-4 h-4" /></a>
                                <a href="https://www.instagram.com/srmulucknow_official/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffc107] hover:text-[#ffc107] transition-colors"><Instagram className="w-4 h-4" /></a>
                                <a href="https://www.youtube.com/channel/UCQBjHzkED5ESWvlQiwLNZ4Q" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffc107] hover:text-[#ffc107] transition-colors"><Youtube className="w-4 h-4" /></a>
                                <a href="https://twitter.com/srmu_lucknow" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffc107] hover:text-[#ffc107] transition-colors"><Twitter className="w-4 h-4" /></a>
                            </div> */}
                        </div>

                        <div className="space-y-5 pt-5 border-t border-white/10">
                            <div className="flex gap-3">
                                <MapPin className="w-5 h-5 text-[#ffc107] shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-[#ffc107] text-[13px] font-bold uppercase mb-1">Address</h4>
                                    <p className="text-[13px] text-gray-300 leading-relaxed">Shri Ramswaroop Memorial University (SRMU), Lucknow- Deva Road, Barabanki, Uttar Pradesh</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <MapPin className="w-5 h-5 text-[#ffc107] shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-[#ffc107] text-[13px] font-bold uppercase mb-1">Lucknow Office</h4>
                                    <p className="text-[13px] text-gray-300 leading-relaxed">C-2/42, Vishesh Khand, Opposite Chote Lal Nursery, Gomtinagar, Lucknow, Uttar Pradesh</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Phone className="w-5 h-5 text-[#ffc107] shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-[#ffc107] text-[12px] font-bold uppercase mb-1">Admission Helpline</h4>
                                    <p className="text-[13px] text-gray-300">+91-9838904666</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Phone className="w-5 h-5 text-[#ffc107] shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-[#ffc107] text-[12px] font-bold uppercase mb-1">Admission Toll Free</h4>
                                    <p className="text-[13px] text-gray-300">18001026004</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Mail className="w-5 h-5 text-[#ffc107] shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-[#ffc107] text-[13px] font-bold uppercase mb-1">Email</h4>
                                    <p className="text-[13px] text-gray-300">admissions@srmu.ac.in</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Columns Wrapper (3-col on mobile) */}
                    <div className="lg:col-span-3 grid grid-cols-3 gap-2 sm:gap-6 lg:mt-[80px]">
                        {/* Col 2: Quick Links */}
                        <div>
                            <h3 className="text-[#ffc107] font-bold text-[12px] sm:text-[14px] uppercase mb-4 sm:mb-6 tracking-wide">Quick Links</h3>
                            <ul className="space-y-3 sm:space-y-4 list-disc pl-4 marker:text-gray-300">
                                {[
                                    { name: "About SRMU", path: "/about-us" },
                                    { name: "Programs", path: "/program-finder" },
                                    { name: "Admissions", path: "/how-to-apply" },
                                    { name: "Placements", path: "/placements" },
                                    { name: "Life at SRMU", path: "/student-corner" },
                                    { name: "News & Updates", path: "/notice" },
                                    { name: "Contact Us", path: "/contact-us" }
                                ].map((item) => (
                                    <li key={item.name}><Link to={item.path} className="text-[12px] sm:text-[13.5px] text-gray-300 hover:text-[#ffc107] transition-colors">{item.name}</Link></li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 3: Student Life */}
                        <div>
                            <h3 className="text-[#ffc107] font-bold text-[12px] sm:text-[14px] uppercase mb-4 sm:mb-6 tracking-wide">Student Life</h3>
                            <ul className="space-y-3 sm:space-y-4 list-disc pl-4 marker:text-gray-300">
                                {[
                                    { name: "Facilities", path: "/facilities" },
                                    { name: "Library", path: "/central-library" },
                                    { name: "Clubs", path: "/clubs" },
                                    { name: "Blogs", path: "/blogs" },
                                    { name: "Shift Schedule", path: "/shift-schedule" }
                                ].map((item) => (
                                    <li key={item.name}><Link to={item.path} className="text-[12px] sm:text-[13.5px] text-gray-300 hover:text-[#ffc107] transition-colors">{item.name}</Link></li>
                                ))}
                                <li><a href="https://eyojan.srmu.ac.in/" target="_blank" rel="noreferrer" className="text-[12px] sm:text-[13.5px] text-gray-300 hover:text-[#ffc107] transition-colors">Student Login</a></li>
                                <li><a href="https://eyojan.srmu.ac.in/" target="_blank" rel="noreferrer" className="text-[12px] sm:text-[13.5px] text-gray-300 hover:text-[#ffc107] transition-colors">Staff Login</a></li>
                            </ul>
                        </div>

                        {/* Col 4: Information */}
                        <div>
                            <h3 className="text-[#ffc107] font-bold text-[12px] sm:text-[14px] uppercase mb-4 sm:mb-6 tracking-wide">Information</h3>
                            <ul className="space-y-3 sm:space-y-4 list-disc pl-4 marker:text-gray-300">
                                {[
                                    { name: "UGC & Approvals", path: "/ugc-approvals" },
                                    { name: "NAAC", path: "/naac" },
                                    { name: "AIU", path: "/aiu" },
                                    { name: "NIRF", path: "/nirf" },
                                    { name: "IQAC", path: "/iqac-overview" },
                                    { name: "Scholarships", path: "/scholarship-scheme" },
                                    { name: "Anti Ragging", path: "/anti-ragging" }
                                ].map((item) => (
                                    <li key={item.name}><Link to={item.path} className="text-[12px] sm:text-[13.5px] text-gray-300 hover:text-[#ffc107] transition-colors">{item.name}</Link></li>
                                ))}
                                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSde8Ov2JDvB1vYeL-jrqNrlman0gLstQVEWEJ6DN34-EsYdCQ/viewform" target="_blank" rel="noreferrer" className="text-[12px] sm:text-[13.5px] text-gray-300 hover:text-[#ffc107] transition-colors break-words">Grievance Redressal</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Col 5: Subscribe & Follow */}
                    <div className="lg:col-span-1 lg:min-w-[280px] lg:mt-[80px]">
                        <h3 className="text-[#ffc107] font-bold text-[14px] uppercase mb-6 tracking-wide">Subscribe to our updates</h3>
                        <p className="text-[13px] text-gray-300 mb-4 leading-relaxed">
                            Stay informed about the latest news, events and opportunities at SRMU.
                        </p>
                        <form className="flex flex-col sm:flex-row mb-10" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                className="flex-1 bg-transparent border border-gray-500 rounded-l-md px-3 py-2 text-[13px] text-white outline-none focus:border-[#ffc107]"
                            />
                            <button type="submit" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-[13px] font-bold px-4 py-2 rounded-r-md transition-colors whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>

                        <h3 className="text-[#ffc107] font-bold text-[14px] uppercase mb-6 tracking-wide">Follow Us</h3>
                        <div className="flex gap-2.5">
                            <a href="https://www.linkedin.com/school/shri-ramswaroop-memorial-university/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffc107] hover:text-[#ffc107] transition-colors"><Linkedin className="w-4 h-4" /></a>
                            <a href="https://www.facebook.com/SRMUOFFICIAL/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffc107] hover:text-[#ffc107] transition-colors"><Facebook className="w-4 h-4" /></a>
                            <a href="https://www.instagram.com/srmulucknow_official/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffc107] hover:text-[#ffc107] transition-colors"><Instagram className="w-4 h-4" /></a>
                            <a href="https://www.youtube.com/channel/UCQBjHzkED5ESWvlQiwLNZ4Q" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffc107] hover:text-[#ffc107] transition-colors"><Youtube className="w-4 h-4" /></a>
                            <a href="https://twitter.com/srmu_lucknow" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffc107] hover:text-[#ffc107] transition-colors"><Twitter className="w-4 h-4" /></a>
                            <a href="#" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffc107] hover:text-[#ffc107] transition-colors"><FaQuora className="w-4 h-4" /></a>
                            <a href="#" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ffc107] hover:text-[#ffc107] transition-colors"><FaRedditAlien className="w-[18px] h-[18px]" /></a>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[12px] text-gray-400">© 2025 Shri Ramswaroop Memorial University. All Rights Reserved.</p>
                    <div className="flex items-center gap-4 text-[12px] text-gray-400">
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
