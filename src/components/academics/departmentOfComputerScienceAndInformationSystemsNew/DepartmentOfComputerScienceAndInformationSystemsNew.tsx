import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchAllProgramFinder } from "../../../store/program-finder/programFinderThunk";
import { fetchProgramDisciplines } from "../../../store/program-finder/discipline/disciplineThunk";
import { fetchProgramFlags } from "../../../store/program-finder/program-flag/programFlagThunk";
import ProgramFilter from "../../admissions/program-finder/ProgramFilter";
import Classes from "../../../utils/styles/Global.module.css";
import { Download, ChevronDown, ChevronUp, Search, Mail, Phone, ArrowLeft, ArrowRight, X } from "lucide-react";
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
        title: "B.C.A. — Data Science & Artificial Intelligence with L&T",
        desc: "A three-year undergraduate program focused on data-driven technologies, artificial intelligence and practical computing skills, with industry exposure through the L&T collaboration.",
        duration: "3 Years", fee: "₹1,10,500",
    },
    {
        level: "Undergraduate",
        title: "B.C.A. — Cyber Security with L&T",
        desc: "A three-year program designed to build foundational knowledge in computer applications and cybersecurity, with industry-oriented learning through the L&T collaboration.",
        duration: "3 Years", fee: "₹1,10,500",
    },
    {
        level: "Undergraduate",
        title: "B.C.A. — Artificial Intelligence & Machine Learning",
        desc: "A three-year undergraduate program focused on computer applications, artificial intelligence and machine learning concepts.",
        duration: "3 Years", fee: "₹1,10,500",
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
    { value: "1000+", label: "Computers" },
    { value: "50", label: "Faculty & Staff" },
    { value: "2000", label: "Students" },
];

const events = [
    { tag: "Guest Lecture", title: "Data Science Fundamentals and its Application", speaker: "Mr. Shivam Tiwari, Data Engineer, IBM Hyderabad", date: "16 April 2025", img: "/assets/images/new-information-system/Data Science Fundamentals and its Application.webp" },
    { tag: "Guest Lecture", title: "National Science Day", speaker: "Dr. Anil Gaikwadji, Sr. Principal Scientist, CSIS, CDRI Lucknow", date: "28 February 2025", img: "/assets/images/new-information-system/National Science Day.webp" },
    { tag: "Workshop", title: "Inspiring Innovation and Learning", speaker: "Prof. Harish Chandra Verma", date: "06–08 February 2025", img: "/assets/images/new-information-system/Inspiring Innovation and Learning.webp" },
    { tag: "Workshop", title: "Internal Smart India Hackathon", speaker: "Prof. Diwaker Yadav, IET, AKTU", date: "06–09 September 2024", img: "/assets/images/new-information-system/Internal Smart India Hackathon.webp" },
    { tag: "Tech-Fest", title: "Awsar and Techfest", speaker: "Department-wide technology festival", date: "13–14 April 2024", img: "/assets/images/new-information-system/Awsar and Techfest.webp" },
    { tag: "Guest Lecture", title: "Use of Blockchain in Internet of Medical Things: A Systematic Review", speaker: "Dr. Bineet Kumar Gupta", date: "20 December 2023", img: "/assets/images/new-information-system/Use of Blockchain in Internet of Medical Things A Systematic Review.webp" },
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
        name: "Prof. (Dr.) Bineet Kumar Gupta", 
        role: "HoD, DCSIS", 
        img: "/assets/images/new-information-system/Bineet Kumar Gupta.webp",
        isHod: true,
        experience: "16+",
        email: "hod.csis@srmu.ac.in",
        contact: "+91-9621340860",
        specialization: ["Artificial Intelligence & Machine Learning", "Cyber Security", "Data Science", "Computational Neuro Science", "ICT", "IKS-Computing"]
    },
    { name: "Abhishek", role: "Faculty", img: "/assets/images/new-information-system/Abhishek.webp" },
    { name: "Ashok Masih", role: "Faculty", img: "/assets/images/new-information-system/Ashok Masih.webp" },
    { name: "Nirbhay", role: "Faculty", img: "/assets/images/new-information-system/Nirbhay.webp" },
    { name: "Priyanka", role: "Faculty", img: "/assets/images/new-information-system/Priyanka.webp" },
];

const whyItems = [
    { num: "01", title: "Industry-Informed Curriculum", desc: "The department provides a curriculum designed to keep pace with developments in computer applications and emerging technologies, with regular updates supported by industry inputs." },
    { num: "02", title: "Project-Based Experiential Learning", desc: "Students get opportunities for practical learning through industrial partnerships, internships and live projects involving industry partners such as IBM." },
    { num: "03", title: "Advanced Computing Infrastructure", desc: "DCSIS provides modern computing facilities, specialized equipment, software and more than 1,000 computers to support teaching, projects and research." },
];

const careerPanes: Record<string, string[]> = {
    capps: ["Software Development", "Application Development", "Web Development", "Systems Support", "IT Services"],
    dai: ["Data Analyst", "Data Science", "Machine Learning", "Artificial Intelligence", "Business Analytics"],
    cyber: ["Cyber Security", "Information Security", "Security Operations", "Network Security", "Security Analysis"],
    tech: ["Research & Development", "Computer Systems", "Networking", "Mobile Computing", "Computer Vision", "Higher Studies & Research"],
};

const careerTabLabels = [
    { key: "capps", label: "Computer Applications" },
    { key: "dai", label: "Data & Artificial Intelligence" },
    { key: "cyber", label: "Cyber Security" },
    { key: "tech", label: "Technology & Research" },
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

const DepartmentOfComputerScienceAndInformationSystemsNew = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data } = useSelector((state: RootState) => state.getProgramFinder);
    const { data: programFlag } = useSelector((state: RootState) => state.getProgramByFlag);
    const { discipline } = useSelector((state: RootState) => state.getDiscipline);
    
    const [selectedProgramFlag, setSelectedProgramFlag] = useState<string>("");
    const [selectedDiscipline, setSelectedDiscipline] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [selectedFaculty, setSelectedFaculty] = useState<any>(null);

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
    const [activeCareerTab, setActiveCareerTab] = useState("capps");
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
                        src="/assets/images/new-information-system/Banner.webp"
                        alt="Department of Computer Science & Information Systems"
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                    
                    {/* Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#071329]/90 via-[#091a38]/60 to-transparent sm:from-[#071329]/15 sm:via-[#091a38]/5 z-0" />
                    
                    {/* Grid overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(#38bdf820_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-50 z-0" />
                    <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#1b4f91]/25 rounded-full blur-[130px] pointer-events-none z-0" />
                    <div className="absolute top-1/2 right-4 w-80 h-80 bg-[#ffc107]/15 rounded-full blur-[120px] pointer-events-none z-0" />

                    <div className="relative z-10 w-full pt-[90px] pb-8 sm:pt-0 sm:pb-0">
                        <div className={`${Classes["container"]} flex flex-col h-full sm:h-auto w-full`}>
                            {/* Banner Text */}
                            <div className="w-full max-w-[650px] text-white text-left mt-2 sm:mt-0">
                                <h2 className="text-[clamp(24px,3vw,36px)] font-semibold mb-1 leading-[1.2] drop-shadow-md">
                                    Department of Computer Science
                                </h2>
                                <h1 className="text-[clamp(40px,5vw,64px)] leading-[1.1] font-bold text-[#38bdf8] drop-shadow-md">
                                    & Engineering
                                </h1>
                                <div className="h-[3px] bg-[#38bdf8] w-[140px] sm:w-[200px] mt-1 mb-2 sm:mb-4 rounded-full" />
                                <p className="text-[clamp(16px,2vw,22px)] font-light mt-2 sm:mt-4 drop-shadow-md">
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
                            <p className="text-[10px] text-gray-500 flex items-start gap-1.5">
                                <input type="checkbox" defaultChecked className="mt-0.5 shrink-0" />
                                I authorise SRMU and its representatives to Call, SMS, Email or WhatsApp me regarding admissions and programmes.
                            </p>
                            <button className="w-full bg-[#ffc107] hover:bg-[#e0a800] text-[#14284E] font-bold text-[14px] py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                                APPLY NOW →
                            </button>
                        </div>
                    </div>
                </section>

                        <div className={`relative z-20 mt-4 sm:mt-0 sm:-mt-[55px] ${Classes["container"]}`}>
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
                <section className="pt-8 md:pt-10 pb-8 md:pb-10 px-4 sm:px-6 bg-white">
                    <div className={`${Classes["container"]}`}>
                        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
                            {/* Image */}
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=900&auto=format&fit=crop"
                                    alt="Advanced computing lab at DCSIS"
                                    className="w-full rounded-2xl border border-[#DCE6F2] shadow-[0_8px_30px_rgba(15,31,61,0.08)] object-cover h-[320px] sm:h-[380px]"
                                />
                                <div className="absolute -bottom-4 -left-4 bg-[#ffc107] text-[#14284E] px-5 py-3 font-bold text-[13.5px] shadow-[0_8px_20px_rgba(0,0,0,0.2)] rounded-lg">
                                    Advanced Computing Labs
                                </div>
                            </div>

                            {/* Copy */}
                            <div>
                                {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                    <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block" />
                                    About the Department
                                </div> */}
                                <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-4">
                                    Computing education, grounded in <span className="text-[#ffc107]">knowledge and innovation.</span>
                                </h2>

                                <div className={`text-[#4B5A72] text-[15.5px] leading-relaxed space-y-3 ${!rm["about"] ? "line-clamp-4 sm:line-clamp-none" : ""}`}>
                                    <p>The Department of Computer Science & Information Systems (DCSIS) at SRMU provides computing resources for teaching and research across areas such as distributed computing, mobile systems, networking, security, computer architecture and computer vision.</p>
                                    <p>The department follows a well-developed curriculum with a flexible credit system, giving students the opportunity to select courses according to their academic interests while developing relevant knowledge and practical skills.</p>
                                </div>

                                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 ${!rm["about"] ? "hidden sm:grid" : "grid"}`}>
                                    {aboutPillars.map(p => (
                                        <div key={p.title} className="border-l-[3px] border-[#ffc107] pl-3">
                                            <b className="block text-[14px] text-[#14284E]">{p.title}</b>
                                            <span className="text-[12.5px] text-[#5C6B76]">{p.desc}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="rm-btn sm:hidden mt-3" onClick={() => toggleRm("about")}>{rm["about"] ? "Read Less" : "Read More"}</button>

                                {/* Quick stats */}
                                <div className="flex gap-px mt-6 border border-[#DCE6F2] rounded-xl overflow-hidden">
                                    {quickStats.map((s, i) => (
                                        <div key={s.label} className={`flex-1 text-center py-4 px-2 ${i % 2 === 0 ? "bg-[#F6FAFE]" : "bg-white"}`}>
                                            <b className="block font-bold text-[22px] text-[#14284E] font-display">{s.value}</b>
                                            <span className="text-[11px] text-[#7C8994] uppercase tracking-[0.05em]">{s.label}</span>
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
                                <h3 className="text-[22px] font-bold font-display text-[#14284E] mb-5">What we work toward every day</h3>
                                <ul className="space-y-3">
                                    {[
                                        "To educate and prepare ICT professionals and train them for further higher studies.",
                                        "To contribute to society through developments in computer science and emerging technologies.",
                                        "To seek innovations in teaching and learning through interactive instruction and global engagement.",
                                    ].map(item => (
                                        <li key={item} className="flex gap-3 text-[14.5px] text-[#3F4C56]">
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
                                <p className="text-[14.5px] text-[#AEBBC6] leading-relaxed">
                                    To be recognized as a centre of Computer Science and Information Systems through teaching, learning and research activities, producing skilled and innovative professionals who are oriented towards serving society with moral values.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Programs ─────────────────────────────────────────────── */}
                <section id="programs" className="py-8 md:py-10 px-4 sm:px-6 bg-white">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-8">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block" /> Program Finder
                            </div> */}
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3">
                                Pick a program based on where <span className="text-[#ffc107]">you want to begin.</span>
                            </h2>
                            <p className={`text-[15.5px] text-[#4B5A72] leading-relaxed max-w-[70ch] ${!rm["pgIntro"] ? "rm-clamp" : ""}`}>
                                Whether you are starting after Class 12 or looking to build specialized skills in emerging areas of computing, DCSIS offers programs designed around computer science, information systems, artificial intelligence, data science and cybersecurity.
                            </p>
                            <button className="rm-btn mt-1" onClick={() => toggleRm("pgIntro")}>{rm["pgIntro"] ? "Read Less" : "Read More"}</button>
                        </div>

                        <h3 className="text-[17px] font-bold text-[#14284E] mb-5">Undergraduate — After Class 12th</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {programCards.map((prog, i) => (
                                <div key={i} className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 rounded-2xl p-6 sm:p-7 pt-8 shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1 transition-all duration-300 relative group flex flex-col h-full mt-3">
                                    <span className="absolute -top-3.5 right-6 bg-gradient-to-r from-[#ffc107] to-[#FFD54F] text-[#14284E] text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md border border-white/50">{prog.level}</span>
                                    
                                    <h3 className="font-bold text-[18px] font-display text-[#14284E] mb-3 group-hover:text-[#1B4F91] transition-colors leading-snug pr-2">{prog.title}</h3>
                                    <p className="text-[13.5px] text-[#54626D] leading-relaxed mb-6 flex-grow">{prog.desc}</p>
                                    
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
                                        <a href="#" className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-bold bg-[#14284E] text-white rounded-xl hover:bg-[#1B4F91] hover:shadow-md transition-all">
                                            View Details <ArrowRight className="w-3.5 h-3.5" />
                                        </a>
                                        <a href="https://students.srmu.ac.in/login" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-bold bg-[#ffc107] text-[#14284E] rounded-xl hover:bg-[#FFD54F] hover:shadow-md transition-all">
                                            Apply Now <ArrowRight className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Events ───────────────────────────────────────────────── */}
                <section id="events" className="py-8 md:py-10 px-4 sm:px-6 bg-[#F0F6FB]">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-8">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block" /> Events of the Department
                            </div> */}
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3">
                                Learning beyond <span className="text-[#ffc107]">the classroom.</span>
                            </h2>
                            <p className={`text-[15.5px] text-[#4B5A72] max-w-[70ch] leading-relaxed ${!rm["evtIntro"] ? "rm-clamp" : ""}`}>
                                Guest lectures, workshops, seminars, webinars and technology-focused activities give students opportunities to interact with academicians, researchers and industry professionals.
                            </p>
                            <button className="rm-btn mt-1" onClick={() => toggleRm("evtIntro")}>{rm["evtIntro"] ? "Read Less" : "Read More"}</button>
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
                                        <div className="text-[13px] text-[#54626D] mt-auto flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#DCE6F2] shrink-0" />
                                            <span className="line-clamp-1">{ev.speaker}</span>
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
                <section className="pt-8 md:pt-10 pb-4 px-4 sm:px-6 bg-gradient-to-b from-white to-[#E0F1FF]" id="placements">
                    <div className={`${Classes["container"]} mx-auto`}>

                        {/* Placement Stats + Image */}
                        <div className="grid lg:grid-cols-2 gap-5 items-start">

                            {/* Stats */}

                            <div className="w-full">


                                <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                    Where Our Students <span className="text-[#ffc107]">Get Placed</span>
                                </h2>

                                <div className="mt-4">
                                    <p className={`text-[15px] leading-6 text-[#4B5A72] max-w-[650px] ${!rm['placement1'] ? 'rm-clamp' : ''}`}>
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
                            <div className="w-full mt-6 lg:mt-0">
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
                <section id="faculty" className="py-8 md:py-10 px-4 sm:px-6 bg-white">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-8">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block" /> Faculty List
                            </div> */}
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3">
                                Learn from experienced <span className="text-[#ffc107]">academic & research professionals.</span>
                            </h2>
                            <p className="text-[15.5px] text-[#4B5A72] max-w-[70ch]">
                                The university highlights faculty recruitment from reputed institutions including IIT, IIM, MNNIT and IIT-BHU, with an emphasis on interactive, personalized teaching.
                            </p>
                        </div>

                        {/* Faculty mini grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                            {facultyList.map(f => (
                                <div key={f.name} className="bg-white border border-[#DCE6F2] rounded-2xl overflow-hidden text-center pb-2 shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                                    <div className="w-full aspect-[4/5] bg-[#EAEAEA] mb-4 relative">
                                        {f.isHod && (
                                            <div className="absolute top-3 left-3 bg-[#ffc107] text-[#14284E] text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm z-10">
                                                HOD
                                            </div>
                                        )}
                                        <img
                                            src={f.img}
                                            alt={f.name}
                                            className="w-full h-full object-cover object-top mix-blend-multiply relative z-0"
                                        />
                                    </div>
                                    <h5 className="font-bold text-[14px] text-[#14284E] px-3 mb-1 line-clamp-2">{f.name}</h5>
                                    <span className="text-[12px] text-[#ffc107] font-bold uppercase tracking-[0.05em]">{f.role}</span>
                                    <div className="mt-auto pt-4 pb-2">
                                        <button 
                                            onClick={() => setSelectedFaculty(f)}
                                            className="text-[12px] font-bold text-[#1B4F91] hover:text-[#ffc107] uppercase tracking-wider flex items-center justify-center gap-1 w-full transition-colors"
                                        >
                                            Read More <ArrowRight className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Key Highlights ───────────────────────────────────────── */}
                <section className="py-8 md:py-10 px-4 sm:px-6 bg-[#071329]">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-8">
                            {/* <div className="text-[13px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block" /> Key Highlights
                            </div> */}
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-white">
                                A learning environment designed <span className="text-[#ffc107]">around technology.</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                            {whyItems.map(w => (
                                <div key={w.num} className="bg-[#071329] p-7 sm:p-8 hover:bg-[#0f1b33] transition-colors">
                                    <span className="block text-[13px] text-[#ffc107] font-bold tracking-[0.08em] mb-3">{w.num}</span>
                                    <h4 className="text-white font-bold text-[17px] mb-3 font-display">{w.title}</h4>
                                    <p className="text-[#AEBBC6] text-[13.5px] leading-relaxed">{w.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Career Pathways ──────────────────────────────────────── */}
                <section id="careers" className="py-8 md:py-10 px-4 sm:px-6 bg-white">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-8">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block" /> Career Pathways
                            </div> */}
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                Where computing skills <span className="text-[#ffc107]">can take you.</span>
                            </h2>
                        </div>

                        {/* Tab buttons */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {careerTabLabels.map(t => (
                                <button
                                    key={t.key}
                                    onClick={() => setActiveCareerTab(t.key)}
                                    className={`px-4 py-2.5 text-[13.5px] font-bold rounded-lg border-[1.5px] transition-colors ${activeCareerTab === t.key ? "bg-[#14284E] text-white border-[#14284E]" : "bg-white text-[#4C5A65] border-[#DCE6F2] hover:border-[#14284E]"}`}
                                >
                                    {t.label}
                                </button>
                            ))}
                        </div>

                        {/* Chips */}
                        <div className="flex flex-wrap gap-3">
                            {careerPanes[activeCareerTab].map(chip => (
                                <span key={chip} className="px-4 py-2.5 bg-[#F0F6FB] border border-[#DCE6F2] text-[13.5px] text-[#14284E] font-semibold rounded-lg">
                                    <span className="text-[#ffc107] font-bold mr-1">+</span>{chip}
                                </span>
                            ))}
                        </div>
                        <p className="text-[12.5px] text-[#7C8994] mt-5">These are career pathways associated with each subject area, not guaranteed placement outcomes.</p>
                    </div>
                </section>

                {/* ── FAQ ──────────────────────────────────────────────────── */}
                <section id="faq" className="py-8 md:py-10 px-4 sm:px-6 bg-[#F4F7FB]">
                    <div className={`${Classes["container"]} max-w-[900px]`}>
                        <div className="w-full mb-8">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block" /> FAQs
                            </div> */}
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
                                        <p className="text-[14px] sm:text-[14.5px] text-[#4C5A65] leading-[1.6]">
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
                                    <img src={selectedFaculty.img} alt={selectedFaculty.name} className="w-full h-full object-cover object-top mix-blend-multiply" />
                                </div>
                            </div>
                            
                            <div className="pt-20 px-6 pb-8">
                                <h3 className="text-2xl font-bold font-display text-[#14284E] mb-1">{selectedFaculty.name}</h3>
                                <div className="text-[13px] text-[#ffc107] font-bold uppercase tracking-widest mb-6">{selectedFaculty.role}</div>
                                
                                <div className="space-y-4">
                                    {selectedFaculty.isHod && (
                                        <div className="inline-flex items-baseline gap-2 bg-[#F0F6FB] border border-[#DCE6F2] px-4 py-2 rounded-lg text-[13px] text-[#3F4C56] mb-2">
                                            <b className="font-display text-[20px] text-[#14284E]">{selectedFaculty.experience}</b> years of experience
                                        </div>
                                    )}

                                    <div>
                                        <h5 className="text-[11px] uppercase tracking-[0.08em] text-[#8A97A1] font-bold mb-2">About</h5>
                                        <p className="text-[14px] text-[#4C5A65] leading-relaxed">
                                            {selectedFaculty.name} is a dedicated {selectedFaculty.role.toLowerCase()} at the Department of Computer Science & Information Systems, focusing on interactive, personalized teaching and fostering a research-oriented academic environment.
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
        </div>
    );
};

export default DepartmentOfComputerScienceAndInformationSystemsNew;
