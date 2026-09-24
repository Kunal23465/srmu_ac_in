import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchAllProgramFinder } from "../../../store/program-finder/programFinderThunk";
import { fetchProgramDisciplines } from "../../../store/program-finder/discipline/disciplineThunk";
import { fetchProgramFlags } from "../../../store/program-finder/program-flag/programFlagThunk";
import ProgramFilter from "../../admissions/program-finder/ProgramFilter";
import Classes from "../../../utils/styles/Global.module.css";
import KamleshImg from "../../../assets/images/academics/institutes/cse/cse2.jpeg";
import SakshiImg from "../../../assets/images/academics/institutes/cse/cse3.jpeg";
import { Download, ChevronDown, ChevronUp, Search, Mail, Phone, ArrowLeft, ArrowRight, X, Code2, Brain, BarChart3, ShieldCheck, Cloud, GraduationCap } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";

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
    { value: "2012", label: "Department Established" },
    { value: "27", label: "Faculty & Staff" },
    { value: "2000", label: "Students" },
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
    { 
        name: "Dr. Shobhit Sinha", 
        role: "HoD DCSE, SRMU, Lucknow-Deva Road", 
        img: "/assets/images/new-information-system/Dr.-Shobhit-Sinha.webp",
        isHod: true,
        qualification: "M.Tech., Ph.D.",
        experience: "19 Years (9 years in IT sector, 10 years in Education Sector)",
        specialization: ["Artificial Intelligence"]
    },
    { name: "Dr. Rajeev Kumar",          role: "Associate Professor",  img: "/assets/images/new-information-system/Dr.-Rajeev-Kumar.webp" },
    { name: "Ms. Reeta",                  role: "Assistant Professor",  img: "/assets/images/new-information-system/Ms.-Reeta.webp" },
    { name: "Dr. Anil Kumar Pandey",      role: "Associate Professor",  img: "/assets/images/new-information-system/Dr.-Anil-Kumar-Pandey.webp" },
    { name: "Ms. Abhilasha Mandal",       role: "Assistant Professor",  img: "/assets/images/new-information-system/Ms.-Abhilasha-Mandal.webp" },
    { name: "Mr. Anil Kumar",             role: "Assistant Professor",  img: "/assets/images/new-information-system/Mr.-Anil-Kumar.webp" },
    { name: "Ms. Anjali Awasthi",         role: "Assistant Professor",  img: "/assets/images/new-information-system/Ms.-Anjali-Awasthi.webp" },
    { name: "Mr. Ijtaba Saleem Khan",     role: "Assistant Professor",  img: "/assets/images/new-information-system/Mr.-Ijtaba-Saleem-Khan.webp" },
    { name: "Dr. Satya Bhushan Verma",    role: "Associate Professor",  img: "/assets/images/new-information-system/Dr.-Satya-Bhushan-Verma.webp" },
    { name: "Mr. Aditya Pratap Singh",    role: "Assistant Professor",  img: "/assets/images/new-information-system/Mr.-Aditya-Pratap-Singh.webp" },
    { name: "Ms. Arpita Vishwakarma",     role: "Assistant Professor",  img: "/assets/images/new-information-system/Ms.-Arpita-Vishwakarma.webp" },
    { name: "Mr. Neelesh Mishra",         role: "Assistant Professor",  img: "/assets/images/new-information-system/Mr.-Neelesh-Mishra.webp" },
    { name: "Ms. Prabha Singh",           role: "Assistant Professor",  img: "/assets/images/new-information-system/Ms.-Prabha-Singh.webp" },
    { name: "Ms. Atifa Parveen",          role: "Assistant Professor",  img: "/assets/images/new-information-system/Ms.-Atifa-Parveen.webp" },
    // No matching image file — shown at end
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
    const { data } = useSelector((state: RootState) => state.getProgramFinder);
    const { data: programFlag } = useSelector((state: RootState) => state.getProgramByFlag);
    const { discipline } = useSelector((state: RootState) => state.getDiscipline);
    
    const [selectedProgramFlag, setSelectedProgramFlag] = useState<string>("");
    const [selectedDiscipline, setSelectedDiscipline] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [selectedFaculty, setSelectedFaculty] = useState<any>(null);
    const [selectedEvent, setSelectedEvent] = useState<any>(null);
    const [videoPlaying, setVideoPlaying] = useState(false);
    
    // Accordion state for mobile view
    const [activeUgProgram, setActiveUgProgram] = useState<number | null>(null);
    const [activePgProgram, setActivePgProgram] = useState<number | null>(null);

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

    // Setup initial data
    useEffect(() => {
        dispatch(fetchProgramFlags());
        dispatch(fetchProgramDisciplines());
    }, [dispatch]);

    // Search debounce
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Fetch programs
    useEffect(() => {
        dispatch(
            fetchAllProgramFinder({
                programFlagSlug: selectedProgramFlag || undefined,
                programDisciplineSlug: selectedDiscipline || undefined,
                name: debouncedSearch || undefined,
            }),
        );
    }, [debouncedSearch, dispatch, selectedDiscipline, selectedProgramFlag]);

    const sortedData = [...data].sort((a, b) => {
        // @ts-ignore
        if (a.displayOrder === null) return 1;
        // @ts-ignore
        if (b.displayOrder === null) return -1;
        // @ts-ignore
        return a.displayOrder - b.displayOrder;
    });

    const [openFaq, setOpenFaq] = useState<number | null>(0);

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
            <main>

                {/* ── Hero Banner ─────────────────────────────────────────── */}
                <section className="relative w-full overflow-hidden flex items-center sm:pt-[78px] sm:pb-8 md:min-h-[720px] md:pt-36 md:pb-20 bg-[#071329]">
                    {/* Background Banner */}
                    <img
                        src="/assets/images/new-information-system/again-banner.jpg"
                        alt="Department of Computer Science & Information Systems"
                        className="hidden sm:block absolute inset-0 w-full h-full object-cover object-top z-0"
                    />
                    <img
                        src="/assets/images/new-information-system/mobile-banner-cse.jpg"
                        alt="Department of Computer Science & Information Systems"
                        className="sm:hidden absolute inset-0 w-full h-full object-cover object-top z-0"
                    />
                    
                    {/* Scrim – light enough to keep banner visible */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#071329]/75 via-[#091a38]/40 to-transparent z-0" />
                    


                    <div className="relative z-10 w-full pt-[90px] pb-8 sm:pt-0 sm:pb-0">
                        <div className={`${Classes["container"]} flex flex-col h-full sm:h-auto w-full`}>
                            {/* Banner Text */}
                            <div className="w-full max-w-[650px] text-white text-left mt-2 sm:mt-0">
                                <h2 className="text-[clamp(24px,3vw,36px)] font-semibold mb-1 leading-[1.2] drop-shadow-md">
                                    Department of 
                                </h2>
                                <h1 className="text-[clamp(40px,5vw,64px)] leading-[1.1] font-bold text-[#38bdf8] drop-shadow-md">
                                  Computer Science & Engineering
                                </h1>
                                <div className="h-[3px] bg-[#38bdf8] w-[140px] sm:w-[200px] mt-1 mb-2 sm:mb-4 rounded-full" />
                                <p className="text-[clamp(16px,2vw,22px)] font-light mt-2 sm:mt-4 drop-shadow-md text-justify">
                                    Shape Your Future with Computer Science & Engineering
                                </p>
                                {/* Hero stats row – desktop only */}
                                {/* <div className="hidden sm:flex gap-8 mt-5">
                                    {[{ v: "1000+", l: "Computers" }, { v: "50", l: "Faculty & Staff" }, { v: "2000", l: "Students" }].map(s => (
                                        <div key={s.l}>
                                            <span className="block text-[28px] font-bold text-[#ffc107] font-display leading-none">{s.v}</span>
                                            <span className="text-[12px] text-white/60 uppercase tracking-widest">{s.l}</span>
                                        </div>
                                    ))}
                                </div> */}
                            </div>

                            <div className="flex flex-row items-center gap-3 mt-auto sm:mt-8 w-full max-w-[650px]">
                                <a
                                    href="https://students.srmu.ac.in/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 sm:flex-none text-center bg-[#ffc107] text-[#14284E] font-bold text-[13px] sm:text-[15px] px-3 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-colors shadow-lg border border-[#ffc107]"
                                >
                                    Apply Now
                                </a>
                                <a
                                    href="/Broucher_SRMU_25_April___.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 sm:flex-none text-center flex items-center justify-center gap-1.5 sm:gap-2 bg-[#14284E] text-white font-bold text-[13px] sm:text-[15px] px-3 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-colors shadow-lg border border-[#1B4F91]"
                                >
                                    <Download className="w-4 h-4" />
                                    <span className="hidden sm:inline">Download Department</span> Brochure
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

                        <div className={`relative z-20 mt-4 -mb-10 sm:-mb-8 lg:-mb-12 sm:mt-0 sm:-mt-[55px] ${Classes["container"]}`}>
                            <ProgramFilter
                                data={sortedData}
                                programTypeOptions={programFlag}
                                disciplineOptions={discipline}
                                selectedProgramType={selectedProgramFlag}
                                selectedDiscipline={selectedDiscipline}
                                searchTerm={searchTerm}
                                onSearchChange={setSearchTerm}
                                onProgramTypeChange={setSelectedProgramFlag}
                                onDisciplineChange={setSelectedDiscipline}
                                isTypeFlag={true}
                                variant="light"
                                hideCourseList={true}
                            />
                        </div>

                {/* ── About the Department ─────────────────────────────────── */}
                <section className="pt-0 pb-8 md:pb-10 px-4 sm:px-6 bg-white">
                    <div className={`${Classes["container"]}`}>
                        <div className="flex flex-col gap-5 sm:gap-10">
                            {/* Video – lite embed for crisp thumbnail */}
                            <div className="relative w-full aspect-video h-auto sm:h-[480px] lg:h-[600px] rounded-2xl overflow-hidden border border-[#DCE6F2] shadow-[0_8px_30px_rgba(15,31,61,0.08)] bg-black">
                                {videoPlaying ? (
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://www.youtube.com/embed/JXkXd08VexI?autoplay=1"
                                        title="Department Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                ) : (
                                    <button
                                        onClick={() => setVideoPlaying(true)}
                                        className="absolute inset-0 w-full h-full group"
                                        aria-label="Play video"
                                    >
                                        {/* Custom video banner image */}
                                        <img
                                            src="/assets/images/new-information-system/video-banner.png"
                                            alt="Department Video"
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Play button overlay */}
                                        <span className="absolute inset-0 flex items-center justify-center">
                                            <span className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-red-600 group-hover:bg-red-700 shadow-2xl transition-all duration-200 group-hover:scale-110">
                                                <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-9 sm:h-9 text-white fill-current ml-1" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </span>
                                        </span>
                                    </button>
                                )}
                            </div>

                            {/* Copy */}
                            <div className="w-full">
                                <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-6 text-center">
                                     About the Department 
                                     {/* <span className="text-[#ffc107]">Computer Science and Engineering</span> */}
                                </h2>

                                <div className={`text-[#4B5A72] text-[15.5px] sm:text-[16px] leading-relaxed space-y-4 text-justify ${!rm["about"] ? "line-clamp-4 sm:line-clamp-none" : ""}`}>
                                    <p className="text-justify">The Department of Computer Science and Engineering at SRMU was established in 2012 with the objective of providing quality education and developing skilled professionals in the field of computing and information technology.</p>
                                    <p className="text-justify">The department offers B.Tech., M.Tech. and Ph.D. programs and provides academic exposure to core areas including computer technologies, distributed computing, information security, programming languages, computer networks, database management systems, software engineering, operating systems, compiler construction, and computer organization & architecture.</p>
                                    <p className="text-justify">The curriculum is periodically updated to incorporate emerging areas such as Python programming, Android application development, digital image processing, cyber security, design thinking, and cloud application development.</p>
                                    <p className="text-justify">Through industrial summer training, seminars, workshops, industrial visits, and conferences, students get opportunities to connect academic concepts with professional practices.</p>
                                    <p className="text-justify">For students searching for computer science engineering in Lucknow, the department provides a combination of foundational computing education, emerging technology exposure, industry interaction, and research-oriented learning.</p>
                                </div>

                                <button className="rm-btn sm:hidden mt-3 mx-auto flex" onClick={() => toggleRm("about")}>{rm["about"] ? "Read Less" : "Read More"}</button>

                                {/* Quick stats */}
                                <div className="flex gap-px mt-8 border border-[#DCE6F2] rounded-xl overflow-hidden shadow-sm">
                                    {quickStats.map((s, i) => (
                                        <div key={s.label} className={`flex-1 text-center py-5 px-3 ${i % 2 === 0 ? "bg-[#F6FAFE]" : "bg-white"}`}>
                                            <b className="block font-bold text-[24px] sm:text-[28px] text-[#14284E] font-display">{s.value}</b>
                                            <span className="text-[11.5px] sm:text-[12.5px] text-[#7C8994] uppercase tracking-[0.05em] font-semibold mt-1 block">{s.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Mission & Vision ─────────────────────────────────────── */}
                <section className="py-8 md:py-10 px-4 sm:px-6 bg-[#F0F6FB]">
                    <div className={`${Classes["container"]}`}>
                        <div className="grid md:grid-cols-2 gap-px bg-[#DCE6F2] border border-[#DCE6F2] rounded-2xl overflow-hidden">
                            <div className="bg-white p-8 sm:p-10">
                                <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                    <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block" /> Mission
                                </div>
                                <h3 className="text-[22px] font-bold font-display text-[#14284E] mb-5">What we work towards every day</h3>
                                <ul className="space-y-3">
                                    {[
                                        "To expose graduate and postgraduate students to fundamental principles and cutting-edge technologies in Computer Science and Engineering through an updated, industry-ready curriculum.",
                                        "To develop multidisciplinary skills required to solve complex real-world problems and participate in collaborative projects through diverse teaching approaches.",
                                        "To promote research, innovation and industry collaboration among students and faculty.",
                                        "To encourage professional, ethical and social responsibility among graduates.",
                                    ].map(item => (
                                        <li key={item} className="flex gap-3 text-[14.5px] text-[#3F4C56] text-justify">
                                            <span className="text-[#ffc107] font-bold shrink-0 mt-0.5">+</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-[#071329] p-8 sm:p-10">
                                <div className="text-[13px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-4">
                                    <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block" /> Vision
                                </div>
                                <h3 className="text-[22px] font-bold font-display text-white mb-5">Where we're headed</h3>
                                <p className="text-[14.5px] text-[#AEBBC6] leading-relaxed text-justify">
                                    To build the nation by fostering industry- and research-oriented studies in Computer Science and Engineering and to become a centre of excellence in developing indigenous technologies for the advancement of society.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Programs ─────────────────────────────────────────────── */}
                <section id="programs" className="py-8 md:py-10 px-4 sm:px-6 bg-white overflow-hidden relative scroll-mt-24">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-8">
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3">
                                Explore Programs
                                {/* <span className="text-[#ffc107]">Computer Science & Engineering </span> */}
                            </h2>
                            <p className={`text-[15.5px] text-[#4B5A72] leading-relaxed text-justify ${!rm["pgIntro"] ? "rm-clamp" : ""}`}>
                                The Department of Computer Science and Engineering offers undergraduate and postgraduate programs across core computing and emerging technology domains.
                            </p>
                            <button className="rm-btn mt-1" onClick={() => toggleRm("pgIntro")}>{rm["pgIntro"] ? "Read Less" : "Read More"}</button>
                        </div>

                        <h3 className="text-[17px] font-bold text-[#14284E] mb-5">Undergraduate – After Class 12th</h3>
                        
                        {/* Desktop Grid */}
                        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                            {programCards.filter(p => p.level === "Undergraduate").map((prog, i) => (
                                <div key={i} className="bg-white border border-[#E2E8F0] hover:border-[#1B4F91]/40 rounded-xl p-6 sm:p-7 pt-8 shadow-[0_4px_18px_rgba(15,31,61,0.03)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1 transition-all duration-300 relative group flex flex-col h-full mt-3">
                                    <span className="absolute -top-3.5 right-6 bg-[#ffc107] text-[#14284E] text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">{prog.level}</span>
                                    
                                    <h3 className="font-bold text-[18px] font-display text-[#14284E] mb-3 group-hover:text-[#1B4F91] transition-colors leading-snug pr-2">{prog.title}</h3>
                                    <p className="text-[13.5px] text-[#54626D] leading-relaxed mb-6 flex-grow text-justify">{prog.desc}</p>
                                    
                                    <div className="flex items-center gap-6 mb-6 p-4 bg-[#F8FAFC] rounded-xl border border-[#F1F5F9]">
                                        <div className="flex-1 border-r border-[#E2E8F0]">
                                            <span className="block text-[10.5px] text-[#8A97A1] font-bold uppercase tracking-wider mb-0.5">Duration</span>
                                            <b className="font-display text-[18px] text-[#14284E]">{prog.duration}</b>
                                        </div>
                                        <div className="flex-1">
                                            <span className="block text-[10.5px] text-[#8A97A1] font-bold uppercase tracking-wider mb-0.5">Annual Fee</span>
                                            <b className="font-display text-[18px] text-[#14284E]">{prog.fee}</b>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                        <a href="#" className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-bold bg-[#14284E] text-white rounded-full hover:bg-[#1B4F91] hover:shadow-md transition-all">
                                            View Details <ArrowRight className="w-3.5 h-3.5" />
                                        </a>
                                        <a href="https://students.srmu.ac.in/login" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-bold bg-[#ffc107] text-[#14284E] rounded-full hover:bg-[#FFD54F] hover:shadow-md transition-all">
                                            Apply Now <ArrowRight className="w-3.5 h-3.5" />
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
                                <div key={i} className="bg-white border border-[#E2E8F0] hover:border-[#1B4F91]/40 rounded-xl p-6 sm:p-7 pt-8 shadow-[0_4px_18px_rgba(15,31,61,0.03)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1 transition-all duration-300 relative z-20 group flex flex-col h-full mt-3">
                                    <span className="absolute -top-3.5 right-6 bg-[#14284E] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">{prog.level}</span>
                                    
                                    <h3 className="font-bold text-[18px] font-display text-[#14284E] mb-3 group-hover:text-[#1B4F91] transition-colors leading-snug pr-2">{prog.title}</h3>
                                    <p className="text-[13.5px] text-[#54626D] leading-relaxed mb-6 flex-grow text-justify">{prog.desc}</p>
                                    
                                    <div className="flex items-center gap-6 mb-6 p-4 bg-[#F8FAFC] rounded-xl border border-[#F1F5F9]">
                                        <div className="flex-1 border-r border-[#E2E8F0]">
                                            <span className="block text-[10.5px] text-[#8A97A1] font-bold uppercase tracking-wider mb-0.5">Duration</span>
                                            <b className="font-display text-[18px] text-[#14284E]">{prog.duration}</b>
                                        </div>
                                        <div className="flex-1">
                                            <span className="block text-[10.5px] text-[#8A97A1] font-bold uppercase tracking-wider mb-0.5">Annual Fee</span>
                                            <b className="font-display text-[18px] text-[#14284E]">{prog.fee}</b>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                        <a href="#" className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-bold bg-[#14284E] text-white rounded-full hover:bg-[#1B4F91] hover:shadow-md transition-all">
                                            View Details <ArrowRight className="w-3.5 h-3.5" />
                                        </a>
                                        <a href="https://students.srmu.ac.in/login" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-bold bg-[#ffc107] text-[#14284E] rounded-full hover:bg-[#FFD54F] hover:shadow-md transition-all">
                                            Apply Now <ArrowRight className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                            
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

                        {/* Decorative Background Image placed behind boxes, extending to screen edge */}
                            <div 
                                className="hidden lg:block absolute -bottom-16 z-0 pointer-events-none opacity-80"
                                style={{ right: "calc(50% - 50vw)", width: "800px", maxWidth: "60vw" }}
                            >
                                <img 
                                    src="/assets/images/new-information-system/to-merge.png" 
                                    alt="Decorative Background" 
                                    className="w-full h-auto object-contain object-right-bottom" 
                                />
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

                {/* ── Events ───────────────────────────────────────────────── */}
                <section id="events" className="py-8 md:py-10 px-4 sm:px-6 bg-[#F0F6FB] scroll-mt-24">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-8">
                            {/* <div className="text-[13px] sm:text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block shrink-0" /> Experiential Learning
                            </div> */}
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3">
                                From Classroom Concepts to <span className="text-[#ffc107]">Real-World Applications</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {events.map((ev, i) => (
                                <div key={i} className="flex flex-col h-full bg-white border border-[#DCE6F2] rounded-2xl overflow-hidden shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-full aspect-[16/9] relative overflow-hidden">
                                        <img src={ev.img} alt={ev.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                                    </div>
                                    <div className="p-5 sm:p-6 flex flex-col flex-grow">
                                        <span className="text-[10.5px] font-bold uppercase tracking-[0.06em] text-[#ffc107] mb-2 block">{ev.tag}</span>
                                        <h5 className="font-bold text-[15px] text-[#14284E] font-display mb-3 leading-snug line-clamp-2">{ev.title}</h5>
                                        <div className="text-[13px] text-[#54626D] mb-4 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#DCE6F2] shrink-0" />
                                            <span className="line-clamp-1">{ev.speaker}</span>
                                        </div>
                                        <p className="text-[13px] text-[#7C8994] line-clamp-3 flex-grow mb-4 text-justify">{ev.shortDesc}</p>
                                        <div className="mt-auto pt-4 border-t border-[#F1F5F9]">
                                            <button 
                                                onClick={() => setSelectedEvent(ev)}
                                                className="text-[12px] font-bold text-[#1B4F91] hover:text-[#ffc107] uppercase tracking-wider flex items-center gap-1 transition-colors"
                                            >
                                                Read More <ArrowRight className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
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


                                <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
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

                {/* ── Scholarships ─────────────────────────────────────────── */}
                <section className="pt-8 pb-4 sm:py-10 px-4 sm:px-6 bg-[#f8fafd] scroll-mt-24" id="scholarships">
                    <div className={`${Classes["container"]} mx-auto`}>
                        <h3 className="text-[20px] lg:text-[24px] font-bold font-display text-[#14284E] mb-4">Scholarship <span className="text-[#ffc107]">Schemes</span></h3>
                        <div className="block sm:hidden w-full rounded-xl overflow-hidden mb-6 bg-transparent shadow-sm">
                            <div className="relative w-full">
                                <img src="/scholar2mobile.jpg" className="w-full h-auto block" alt="Scholarship schemes" />
                                <div className="absolute inset-0 flex flex-col justify-start px-5 pt-4 pb-5 z-10 pointer-events-none">
                                    <div className="mb-3">
                                        <p className="text-[#1B4F91] font-bold text-[13px] mb-1">Avail Up to</p>
                                        <h2 className="text-[45px] font-black text-[#E31E24] leading-[0.85] tracking-tighter flex items-start">100%<span className="text-[20px] text-[#E31E24] font-bold ml-0.5 leading-none mt-1">*</span></h2>
                                        <p className="text-[#1B4F91] font-black text-[22px] leading-none mt-2">Scholarships</p>
                                    </div>
                                    <div className={`overflow-hidden ${!rm["scholarMob"] ? "h-[110px]" : "h-auto"}`}>
                                        <ul className="space-y-1.5 max-w-[480px]">
                                            {scholarshipItems.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-1.5 text-[#14284E] text-[11.5px] font-medium leading-[1.3]">
                                                    <span className="text-[#1B4F91] shrink-0 font-bold text-[12px] mt-[1px]">➢</span><span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button className="rm-btn !text-[#1B4F91] !mb-0 mt-2 pointer-events-auto" onClick={() => toggleRm("scholarMob")}>{rm["scholarMob"] ? "Read Less" : "Read More"}</button>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block relative w-full rounded-2xl overflow-hidden mb-6 shadow-sm bg-[#f0f4fa]">
                            <img src="/sharedimageScholar.png" className="block w-full h-[300px] sm:h-auto object-cover object-right" alt="Scholarships" />
                            <div className="absolute inset-0 z-10 p-5 sm:p-6 md:p-10 w-full sm:w-[85%] md:w-[75%] lg:w-[65%] flex flex-col justify-center pointer-events-none">
                                <div className="mb-4 sm:mb-6">
                                    <p className="text-[#1B4F91] font-bold text-[14px] sm:text-[18px] md:text-[22px] mb-1">Avail Up to</p>
                                    <h2 className="text-[55px] sm:text-[75px] md:text-[95px] font-black text-[#E31E24] leading-[0.8] tracking-tighter flex items-start">100%<span className="text-[24px] sm:text-[32px] md:text-[40px] leading-none ml-1 mt-1">*</span></h2>
                                    <p className="text-[#1B4F91] font-black text-[26px] sm:text-[36px] md:text-[44px] leading-none mt-2 sm:mt-3">Scholarships</p>
                                </div>
                                <ul className="space-y-1.5 sm:space-y-2 max-w-[480px]">
                                    {scholarshipItems.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-[#14284E] text-[13px] sm:text-[14.5px] md:text-[15.5px] font-medium leading-[1.3]">
                                            <span className="text-[#1B4F91] shrink-0 font-bold mt-[2px] text-[14px]">➢</span><span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center w-full">
                            <Link to="https://srmu.ac.in/scholarship-scheme" target="_blank" className="inline-flex items-center bg-[#ffc107] hover:bg-[#D78610] text-[#14284E] font-semibold text-[14.5px] px-6 py-3 rounded-md transition-colors shadow-sm hover:-translate-y-0.5">
                                View Details →
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
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3">
                                Learn from experienced <span className="text-[#ffc107]">academic & research professionals.</span>
                            </h2>
                            <p className="text-[15.5px] text-[#4B5A72] text-justify">
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
                                        <div key={f.name} className="bg-white border border-[#DCE6F2] rounded-2xl overflow-hidden text-center pb-2 shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col flex-shrink-0" style={{ width: "220px" }}>
                                            <div className="w-full bg-[#EAEAEA] mb-4 relative" style={{ aspectRatio: "4/5" }}>
                                                {f.isHod && (
                                                    <div className="absolute top-3 left-3 bg-[#ffc107] text-[#14284E] text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm z-10">
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
                                            <span className="text-[12px] text-[#ffc107] font-bold uppercase tracking-[0.05em]">{f.role}</span>
                                            <div className="mt-auto pt-4 pb-2">
                                                {f.isHod && (
                                                    <button
                                                        onClick={() => setSelectedFaculty(f)}
                                                        className="text-[12px] font-bold text-[#1B4F91] hover:text-[#ffc107] uppercase tracking-wider flex items-center justify-center gap-1 w-full transition-colors"
                                                    >
                                                        Read More <ArrowRight className="w-3.5 h-3.5" />
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
                <section className="pt-8 pb-6 md:pt-10 md:pb-6 px-4 sm:px-6 bg-[#071329]">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-8">
                            {/* <div className="text-[13px] sm:text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block shrink-0" /> Department Highlights
                            </div> */}
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-white">
                                What Makes the <span className="text-[#ffc107]">CSE Department Different in SRMU?</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                            {whyItems.map(w => (
                                <div key={w.num} className="bg-[#071329] p-7 sm:p-8 hover:bg-[#0f1b33] transition-colors">
                                    <span className="block text-[13px] text-[#ffc107] font-bold tracking-[0.08em] mb-3">{w.num}</span>
                                    <h4 className="text-white font-bold text-[17px] mb-3 font-display">{w.title}</h4>
                                    <p className="text-[#AEBBC6] text-[13.5px] leading-relaxed text-justify">{w.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Career Pathways ──────────────────────────────────────── */}
                <section id="careers" className="pt-6 pb-10 md:pt-8 md:pb-16 px-4 sm:px-6 bg-[#F8FAFC]">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-10 md:mb-12 text-center max-w-3xl mx-auto">
                            {/* <div className="text-[13px] sm:text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center justify-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block shrink-0" /> Career Pathways
                            </div> */}
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                Where Can a <span className="text-[#ffc107]">CSE Degree Take You?</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {careerItems.map((item, index) => (
                                <div key={index} className="bg-white p-6 md:p-8 rounded-2xl border border-[#DCE6F2] hover:border-[#ffc107]/50 shadow-[0_4px_18px_rgba(15,31,61,0.03)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] transition-all duration-300 group flex flex-col h-full">
                                    <div className="w-12 h-12 rounded-xl bg-[#F0F6FB] text-[#1B4F91] flex items-center justify-center mb-5 group-hover:bg-[#1B4F91] group-hover:text-white transition-colors duration-300">
                                        <item.icon className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <h4 className="font-display font-bold text-[18px] text-[#14284E] mb-3 leading-snug">{item.title}</h4>
                                    <p className="text-[#54626D] text-[14px] leading-relaxed flex-grow text-justify">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ──────────────────────────────────────────────────── */}
                {/*
                <section id="faq" className="py-8 md:py-10 px-4 sm:px-6 bg-[#F4F7FB]">
                    <div className={`${Classes["container"]} max-w-[900px]`}>
                        <div className="w-full mb-8">
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                Common questions, <span className="text-[#ffc107]">answered.</span>
                            </h2>
                        </div>

                        <div className="flex flex-col gap-3">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full text-left flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-[18px] font-bold text-[14.5px] sm:text-[15px] text-[#14284E]"
                                    >
                                        <span className="pr-2">{faq.q}</span>
                                        <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F0F6FB] text-[#14284E] flex items-center justify-center text-[18px] flex-shrink-0 transition-transform duration-300 font-sans ${openFaq === i ? "rotate-45" : ""}`}>
                                            +
                                        </span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 px-5 sm:px-6 ${openFaq === i ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"}`}>
                                        <p className="text-[14px] sm:text-[14.5px] text-[#4C5A65] leading-[1.6] text-justify">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                */}

                {/* ── CTA Band ─────────────────────────────────────────────── */}
                {/* <section id="apply" className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-[#3E6B54] to-[#5C8A72]">
                    <div className={`${Classes["container"]}`}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                            <h2 className="text-white font-bold font-display text-[clamp(22px,3vw,32px)] max-w-[480px] leading-[1.2]">
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

        </div>
    );
};

export default DepartmentOfComputerScienceAndEngineeringNew;
