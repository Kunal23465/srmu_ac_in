
import React, { useEffect, useState, useRef } from "react";
import Classes from "../utils/styles/Global.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Download, PhoneCall, Sparkles, BookOpen, Shield, Award, Trophy, CheckCircle2, Code2, Lock, Cpu, Compass, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const recruiterLogos = [
    ["https://ik.imagekit.io/ttalcskjf/tcs.webp", "TCS"],
    ["https://ik.imagekit.io/ttalcskjf/infosys.webp", "Infosys"],
    ["https://ik.imagekit.io/ttalcskjf/Wipro.webp", "Wipro"],
    ["https://ik.imagekit.io/ttalcskjf/l-t.webp?updatedAt=1788591605708", "L&T"],
    ["https://ik.imagekit.io/ttalcskjf/images.png", "HCL Technologies"],
    ["https://ik.imagekit.io/ttalcskjf/Accenture.webp", "Accenture"],
    ["https://ik.imagekit.io/ttalcskjf/capgemini.webp", "Capgemini"],
    ["https://ik.imagekit.io/ttalcskjf/TM.webp", "Tech Mahindra"],
    ["https://ik.imagekit.io/ttalcskjf/IBM.webp", "IBM"],
    ["https://ik.imagekit.io/ttalcskjf/Cognizant_logo_2022.svg.webp", "Cognizant"],
    ["https://ik.imagekit.io/ttalcskjf/Deloitte.webp", "Deloitte"],
    ["https://ik.imagekit.io/ttalcskjf/EY.webp", "EY"],
] as const;

const BTechCseCyberSecurityNew = () => {
    const labsScrollRef = useRef<HTMLDivElement>(null);
    const scrollLabs = (direction: 'left' | 'right') => {
        if (labsScrollRef.current) {
            const amount = direction === 'left' ? -250 : 250;
            labsScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };

    const industriesScrollRef = useRef<HTMLDivElement>(null);
    const scrollIndustries = (direction: 'left' | 'right') => {
        if (industriesScrollRef.current) {
            const amount = direction === 'left' ? -220 : 220;
            industriesScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };

    const [activeTab, setActiveTab] = useState("year1");
    const [openSection, setOpenSection] = useState<string | null>(null);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);
    const [openIndustry, setOpenIndustry] = useState(null);
    const [rm, setRm] = useState<Record<string, boolean>>({});
    const toggleRm = (k: string) => setRm(p => ({ ...p, [k]: !p[k] }));

    // const toggleIndustry = (industry) => {
    //     setOpenIndustry((prev) =>
    //         prev === industry ? null : industry
    //     );
    // };
    const toggleSection = (section: string) => {
        setOpenSection((currentSection) => currentSection === section ? null : section);
    };

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
            window.clearInterval(autoplay);
            emblaApi.off("select", updateScrollState);
            emblaApi.off("reInit", updateScrollState);
        };
    }, [emblaApi]);

    // const handleTabClick = (tab) => {
    //     setActiveTab(tab);
    // };

    // Data for the Year Journey Tabs
    const yearData = {
        year1: {
            title: "Year 1: Foundations",
            quote: "Build a strong base in programming, mathematics, and core computer science principles.",
            cols: [
                {
                    heading: "Core Subjects",
                    items: ["Programming in C & Python", "Discrete Mathematics", "Digital Logic Design", "Data Structures & Algorithms (Basics)", "Computer Organization"],
                },
                {
                    heading: "Cyber Security Focus",
                    items: ["Introduction to Cyber Security", "Linux Fundamentals", "Networking Basics", "Ethical Hacking Overview"],
                },
            ],
            outcome: "Outcome: Solid foundation for advanced topics and hands-on labs.",
        },
        year2: {
            title: "Year 2: Core Development & Security",
            quote: "Dive deeper into development, networking, and security operations.",
            cols: [
                {
                    heading: "Core Subjects",
                    items: ["Object-Oriented Programming (Java/C++)", "Database Management Systems", "Operating Systems", "Advanced DSA"],
                },
                {
                    heading: "Cyber Security Focus",
                    items: ["Cryptography & Network Security", "Web Application Security", "Security Operations & Monitoring", "Vulnerability Assessment"],
                },
            ],
            outcome: "Outcome: Ability to build secure applications and identify vulnerabilities.",
        },
        year3: {
            title: "Year 3: Advanced Security & Specialization",
            quote: "Specialize in advanced security domains and hands-on penetration testing.",
            cols: [
                {
                    heading: "Core Subjects",
                    items: ["Machine Learning / AI Fundamentals", "Cloud Computing (AWS/Azure)", "DevOps & Automation"],
                },
                {
                    heading: "Cyber Security Focus",
                    items: ["Penetration Testing & Ethical Hacking", "Digital Forensics", "Malware Analysis", "Security Architecture & Design"],
                },
            ],
            outcome: "Outcome: Specialized skills for roles like Penetration Tester & Security Analyst.",
        },
        year4: {
            title: "Year 4: Capstone & Industry Readiness",
            quote: "Apply your skills to a major capstone project and prepare for the industry.",
            cols: [
                {
                    heading: "Core Subjects",
                    items: ["Project Management", "Research Methodology"],
                },
                {
                    heading: "Cyber Security Focus",
                    items: ["Security Governance & Compliance", "Incident Response & Threat Hunting", "Advanced Security Topics"],
                },
            ],
            outcome: "Outcome: An industry-ready professional with a portfolio of projects and certifications.",
        },
    };

    return (
        <div className="text-[#14284E] bg-white antialiased mt-12">
            <main>

                <section className="relative pt-4 sm:pt-20 lg:pt-24 pb-8 lg:pb-12 w-full overflow-hidden">
                    {/* Background Video */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    >
                        <source src="/bannerVideo.mp4" type="video/mp4" />
                    </video>
                    {/* Semi-Transparent Cinematic Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#071329]/55 via-[#091a38]/40 to-[#071329]/25"></div>

                    {/* Subtle Tech Cyber Grid & Ambient Lights */}
                    <div className="absolute inset-0 bg-[radial-gradient(#38bdf820_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-50"></div>
                    <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#1b4f91]/25 rounded-full blur-[130px] pointer-events-none"></div>
                    <div className="absolute top-1/2 right-4 w-80 h-80 bg-[#ffc107]/15 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className={`${Classes["container"]} mt-0 sm:mt-16 relative z-10 grid lg:grid-cols-[1.18fr_0.82fr] gap-10 lg:gap-14`}>
                        {/* Left Side */}
                        <div className="flex flex-col items-start justify-center h-full pt-8 lg:pt-0">
                            {/* Eyebrow / Kicker */}
                            <div className="w-full">
                                {/* <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#ffc107]/15 border border-[#ffc107]/45 backdrop-blur-md shadow-[0_0_15px_rgba(255,193,7,0.2)] mb-5 group">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc107] opacity-85"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffc107]"></span>
                                    </span>
                                    <span className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold align-middle">
                                        B.Tech CSE (Cyber Security) — with
                                        <span className="hidden sm:inline"> Larsen &amp; Toubro</span>
                                        <span className="sm:hidden inline-block ml-1.5 align-middle">
                                            <img src="https://ik.imagekit.io/ttalcskjf/l-t.webp?updatedAt=1788591605708" alt="L&T" className="h-[22px] w-auto object-contain" />
                                        </span>
                                    </span>
                                </div> */}

                                {/* H1 */}
                                <h1 className="text-[clamp(30px,4vw,46px)] leading-[1.14] font-bold font-display text-white tracking-tight mb-4.5 flex flex-wrap items-center gap-2">
    <span className="drop-shadow-md">Learn B.Tech CSE Cyber Security in Lucknow with</span> 
    <span className="bg-white/95 px-2.5 py-1 rounded-lg shadow-sm flex items-center shrink-0">
        <img 
            src="https://ik.imagekit.io/ttalcskjf/l-t.webp?updatedAt=1788591605708" 
            alt="L&T EduTech" 
            className="inline-block h-[0.85em] w-auto align-middle"
        />
    </span>
    <span className="drop-shadow-md">at SRMU</span>
</h1>

                                {/* H2 */}
                                {/* <h2 className="text-[clamp(20px,2.5vw,28px)] leading-[1.2] font-bold font-display text-sky-200 mb-3 drop-shadow-sm">
                                    Learn B.Tech CSE Cyber Security with L&T at SRMU
                                </h2> */}

                                {/* Tagline */}
                                {/* <div className="inline-flex items-center gap-2 mb-4.5 px-3.5 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30 backdrop-blur-sm shadow-sm">
                                    <Sparkles className="w-4 h-4 text-[#ffc107] animate-pulse" />
                                    <p className="text-[18px] text-[#ffc107] font-semibold tracking-wide">Build the Skills to Secure the Digital World</p>
                                </div> */}

                            </div>

                            {/* Description */}
                            {/* <p className="text-[15.5px] text-[#D4E2F4] leading-relaxed mb-5.5 max-w-[56ch]">
                                Pursue B.Tech CSE (Cyber Security) in Lucknow at Shri Ramswaroop Memorial University (SRMU) and develop the technical skills needed to understand, protect, and
                                secure modern digital systems. SRMU is among the institutions students consider when looking for the best B.Tech college in Lucknow for industry-oriented
                                engineering education.
                            </p> */}

                            {/* Checklist */}
                            {/* <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 gap-x-4.5 w-full mb-7.5">
                                <li className="flex gap-2 items-start text-[14.5px] text-white font-medium">
                                    <span className="text-[#071329] bg-gradient-to-tr from-[#ffc107] to-[#ffe082] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] mt-0.5 flex-none shadow-[0_0_10px_rgba(255,193,7,0.5)]">
                                        ✓
                                    </span>
                                    Industry-integrated learning with L&T
                                </li>
                                <li className="flex gap-2 items-start text-[14.5px] text-white font-medium">
                                    <span className="text-[#071329] bg-gradient-to-tr from-[#ffc107] to-[#ffe082] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] mt-0.5 flex-none shadow-[0_0_10px_rgba(255,193,7,0.5)]">
                                        ✓
                                    </span>
                                    Hands-on cybersecurity laboratory exposure
                                </li>
                                <li className="flex gap-2 items-start text-[14.5px] text-white font-medium">
                                    <span className="text-[#071329] bg-gradient-to-tr from-[#ffc107] to-[#ffe082] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] mt-0.5 flex-none shadow-[0_0_10px_rgba(255,193,7,0.5)]">
                                        ✓
                                    </span>
                                    Live projects and capstone development
                                </li>
                                <li className="flex gap-2 items-start text-[14.5px] text-white font-medium">
                                    <span className="text-[#071329] bg-gradient-to-tr from-[#ffc107] to-[#ffe082] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] mt-0.5 flex-none shadow-[0_0_10px_rgba(255,193,7,0.5)]">
                                        ✓
                                    </span>
                                    Industry sessions and workshops
                                </li>
                                <li className="flex gap-2 items-start text-[14.5px] text-white font-medium sm:col-span-2">
                                    <span className="text-[#071329] bg-gradient-to-tr from-[#ffc107] to-[#ffe082] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] mt-0.5 flex-none shadow-[0_0_10px_rgba(255,193,7,0.5)]">
                                        ✓
                                    </span>
                                    Internship and placement support
                                </li>
                            </ul> */}

                            {/* CTA Buttons */}
                            <div className="hidden sm:flex w-full sm:w-auto justify-between sm:justify-start items-center gap-1.5 sm:gap-3 mt-8 sm:mt-10 sm:flex-wrap" id="apply">
                                <a
                                    href="https://students.srmu.ac.in/login?_gl=1*1hjhqxh*_gcl_au*ODkzODU3MDY4LjE3ODkxODk4NTc.*_ga*Mjc4NTk1MjY4LjE3ODkxODk4NTc.*_ga_QZEQ59Q6ZL*czE3ODkxOTIxMTIkbzIkZzEkdDE3ODkxOTM2NDIkajYwJGwwJGg1NzMzMjQwNzM."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 sm:flex-none relative group overflow-hidden bg-gradient-to-r from-[#ffc107] via-[#ffcd38] to-[#e0a800] text-[#071329] font-extrabold text-[10px] sm:text-[14px] px-1 sm:px-5.5 py-2.5 sm:py-3.25 rounded-md shadow-[0_8px_20px_-8px_rgba(217,139,43,0.6)] hover:shadow-[0_12px_30px_rgba(255,193,7,0.65)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-center whitespace-nowrap"
                                >
                                    <span>Apply Now</span>
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                                <a
                                    href="/Broucher_SRMU_25_April___.pdf"
                                    target="_blank"
                                    className="flex-1 sm:flex-none bg-white/12 hover:bg-white/20 text-white font-bold text-[10px] sm:text-[14px] px-1 sm:px-5.5 py-2.5 sm:py-3.25 rounded-md border border-white/25 hover:border-white/50 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-1 sm:gap-2 text-center whitespace-nowrap"
                                >
                                    <Download className="w-3 h-3 sm:w-4 sm:h-4 text-sky-300 shrink-0" />
                                    <span className="sm:hidden">Brochure</span>
                                    <span className="hidden sm:inline">Download Brochure</span>
                                </a>
                                <a
                                    href="#"
                                    className="flex-1 sm:flex-none bg-[#1b4f91]/35 hover:bg-[#1b4f91]/60 text-sky-100 hover:text-white font-bold text-[10px] sm:text-[14px] px-1 sm:px-5.5 py-2.5 sm:py-3.25 rounded-md border border-[#38bdf8]/40 hover:border-[#38bdf8]/70 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-1 sm:gap-2 text-center whitespace-nowrap"
                                >
                                    <PhoneCall className="w-3 h-3 sm:w-4 sm:h-4 text-[#ffc107] shrink-0" />
                                    <span className="sm:hidden">Talk to Expert</span>
                                    <span className="hidden sm:inline">Talk to Admission Expert</span>
                                </a>
                            </div>

                            {/* Mobile-only Apply Now Form */}
                            <div className="sm:hidden mt-5 rounded-2xl overflow-hidden shadow-xl border border-white/10">
                                <div className="bg-[#14284E] px-4 py-3 text-center">
                                    <h3 className="text-white font-bold text-[15px]">Shri Ramswaroop Memorial University</h3>
                                    <p className="text-sky-200 text-[11px] mt-0.5">Begin your journey in under 60 seconds</p>
                                    <div className="w-8 h-0.5 bg-[#ffc107] mx-auto mt-2 rounded-full"></div>
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
                                            <option>B.Tech CSE Cyber Security</option>
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
                        </div>

                        {/* Right Side - Executive Program Highlights Hub */}
                        <div className="relative w-full max-w-[450px] mx-auto lg:ml-auto">
                            <div className="relative rounded-none p-0 bg-transparent shadow-none sm:rounded-3xl sm:p-8 sm:bg-gradient-to-b sm:from-[#0e2247]/90 sm:via-[#0a1b38]/90 sm:to-[#07142b]/95 sm:backdrop-blur-2xl sm:border sm:border-white/15 sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
                                <div className="absolute top-0 right-0 w-44 h-44 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#ffc107]/10 rounded-full blur-3xl pointer-events-none"></div>

                                {/* Top Header Badge */}
                                <div className="hidden sm:flex items-center justify-between gap-2 pb-5 mb-5 border-b border-white/10 relative z-10">
                                    <div className="flex items-center gap-2.5">
                                        {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1B4F91] to-[#2563eb] text-[#ffc107] flex items-center justify-center flex-none shadow-md border border-white/10">
                                            <Shield className="w-5 h-5" />
                                        </div> */}

                                        <img className="max-w-[100px] bg-white p-2 rounded-md" src="https://ik.imagekit.io/ttalcskjf/l-t.webp" alt="l&t" />
                                    </div>
                                    <span className="hidden sm:inline-flex text-nowrap items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-[11px] font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                        2026-27
                                    </span>
                                </div>

                                <div className="hidden sm:block mb-5 relative z-10">
                                    <h3 className="text-white font-display font-bold text-[19px] sm:text-[21px] tracking-tight mb-1">Industry-Ready by Design</h3>
                                    <p className="text-sky-200/80 text-[14.5px] font-medium">Cyber labs · Live projects · Certifications</p>
                                </div>

                                {/* Stats — hidden on mobile */}
                                <div className="hidden sm:grid grid-cols-2 gap-2 sm:gap-3 mb-5 relative z-10">
                                    <div className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-[#ffc107]/40 rounded-lg sm:rounded-2xl p-2 sm:p-3.5 text-center sm:text-left transition-all duration-300 group shadow-sm">
                                        <div className="font-display font-bold sm:font-black text-[20px] text-[#ffc107] group-hover:text-white transition-colors">10+</div>
                                        <div className="text-[9px] sm:text-[11px] text-sky-100/90 font-semibold mt-0.5">Career Roles</div>
                                    </div>
                                    <div className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-[#ffc107]/40 rounded-lg sm:rounded-2xl p-2 sm:p-3.5 text-center sm:text-left transition-all duration-300 group shadow-sm">
                                        <div className="font-display font-bold sm:font-black text-[20px] text-[#ffc107] group-hover:text-white transition-colors">7+</div>
                                        <div className="text-[9px] sm:text-[11px] text-sky-100/90 font-semibold mt-0.5">Certifications</div>
                                    </div>
                                    <div className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-[#ffc107]/40 rounded-lg sm:rounded-2xl p-2 sm:p-3.5 text-center sm:text-left transition-all duration-300 group shadow-sm">
                                        <div className="font-display font-bold sm:font-black text-[20px] text-[#ffc107] group-hover:text-white transition-colors">18+</div>
                                        <div className="text-[9px] sm:text-[11px] text-sky-100/90 font-semibold mt-0.5">Enterprise Tools</div>
                                    </div>
                                    <div className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-[#ffc107]/40 rounded-lg sm:rounded-2xl p-2 sm:p-3.5 text-center sm:text-left transition-all duration-300 group shadow-sm">
                                        <div className="font-display font-bold sm:font-black text-[20px] text-[#ffc107] group-hover:text-white transition-colors">4 Yrs</div>
                                        <div className="text-[9px] sm:text-[11px] text-sky-100/90 font-semibold mt-0.5">Guided Journey</div>
                                    </div>
                                </div>

                                {/* Key Highlights */}
                                <div className="hidden sm:block space-y-2.5 pt-4 border-t border-white/10 relative z-10">
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#DCE6F2] font-medium bg-white/[0.03] px-3 py-2 rounded-xl border border-white/5">
                                        <Lock className="w-4 h-4 text-[#ffc107] flex-none" />
                                        <span>Dedicated Security Operations &amp; Forensics Lab</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#DCE6F2] font-medium bg-white/[0.03] px-3 py-2 rounded-xl border border-white/5">
                                        <Cpu className="w-4 h-4 text-sky-400 flex-none" />
                                        <span>Industry Mentorship with L&amp;T Cyber Division</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[12.5px] text-[#DCE6F2] font-medium bg-white/[0.03] px-3 py-2 rounded-xl border border-white/5">
                                        <Award className="w-4 h-4 text-[#ffc107] flex-none" />
                                        <span>Placement Training &amp; Global Industry Certifications</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="bg-[#0F4A85] border-y border-white/10 py-3 sm:py-6.5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.06),transparent_70%)] pointer-events-none"></div>
                    {/* Desktop View */}
                    <div className={`hidden sm:grid sm:grid-cols-2 md:grid-cols-5 sm:items-stretch gap-5 text-center relative z-10 ${Classes["container"]} mx-auto px-6`}>
                        <div className="shrink-0 flex flex-col items-center justify-center gap-1 min-h-[30px] p-3 block rounded-xl border-transparent hover:bg-white/[0.03] transition-colors hover:border-white/5">
                            <div className="font-display font-black text-[21px] text-[#ffc107] tracking-tight">27+ Yrs</div>
                            <div className="text-[14.5px] text-[#C7D7EC] mt-1 font-medium whitespace-nowrap">Academic Excellence</div>
                        </div>
                        <div className="shrink-0 flex flex-col items-center justify-center gap-1 min-h-[30px] p-3 block rounded-xl border-transparent hover:bg-white/[0.03] transition-colors hover:border-white/5">
                            <div className="font-display font-black text-[21px] text-[#ffc107] tracking-tight">30,000+</div>
                            <div className="text-[14.5px] text-[#C7D7EC] mt-1 font-medium whitespace-nowrap">Alumni Network</div>
                        </div>
                        <div className="shrink-0 flex flex-col items-center justify-center gap-1 min-h-[30px] p-3 block rounded-xl border-transparent hover:bg-white/[0.03] transition-colors hover:border-white/5">
                            <div className="font-display font-black text-[21px] text-[#ffc107] tracking-tight">300+</div>
                            <div className="text-[14.5px] text-[#C7D7EC] mt-1 font-medium whitespace-nowrap">Recruiting Companies</div>
                        </div>
                        <div className="shrink-0 flex flex-col items-center justify-center gap-1 min-h-[30px] p-3 block rounded-xl border-transparent hover:bg-white/[0.03] transition-colors hover:border-white/5">
                            <div className="font-display font-black text-[21px] text-[#ffc107] tracking-tight">L&amp;T</div>
                            <div className="text-[14.5px] text-[#C7D7EC] mt-1 font-medium whitespace-nowrap">Industry-Integrated Learning</div>
                        </div>
                        <div className="shrink-0 flex flex-col items-center justify-center gap-1 min-h-[30px] p-3 block rounded-xl border-transparent hover:bg-white/[0.03] transition-colors hover:border-white/5 col-span-2 md:col-span-1">
                            <div className="font-display font-black text-[21px] text-[#ffc107] tracking-tight">Modern</div>
                            <div className="text-[14.5px] text-[#C7D7EC] mt-1 font-medium whitespace-nowrap">Research Infrastructure</div>
                        </div>
                    </div>

                    {/* Mobile View (Marquee) */}
                    <div className="sm:hidden relative z-10 w-full overflow-hidden flex items-center">
                        <div className="flex w-max animate-marquee gap-2 pl-2 hover:pause">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex gap-2">
                                    <div className="shrink-0 flex items-center justify-center gap-1 min-h-[30px] px-3 py-1.5 rounded-full border border-dashed border-white/25">
                                        <div className="font-display font-black text-[13px] text-white tracking-tight">27+ Yrs</div>
                                        <div className="text-[11px] text-[#C7D7EC] font-medium whitespace-nowrap">Academic Excellence</div>
                                    </div>
                                    <div className="shrink-0 flex items-center justify-center gap-1 min-h-[30px] px-3 py-1.5 rounded-full border border-dashed border-white/25">
                                        <div className="font-display font-black text-[13px] text-white tracking-tight">30,000+</div>
                                        <div className="text-[11px] text-[#C7D7EC] font-medium whitespace-nowrap">Alumni Network</div>
                                    </div>
                                    <div className="shrink-0 flex items-center justify-center gap-1 min-h-[30px] px-3 py-1.5 rounded-full border border-dashed border-white/25">
                                        <div className="font-display font-black text-[13px] text-white tracking-tight">300+</div>
                                        <div className="text-[11px] text-[#C7D7EC] font-medium whitespace-nowrap">Recruiting Companies</div>
                                    </div>
                                    <div className="shrink-0 flex items-center justify-center gap-1 min-h-[30px] px-3 py-1.5 rounded-full border border-dashed border-white/25">
                                        <div className="font-display font-black text-[13px] text-white tracking-tight">L&amp;T</div>
                                        <div className="text-[11px] text-[#C7D7EC] font-medium whitespace-nowrap">Industry-Integrated Learning</div>
                                    </div>
                                    <div className="shrink-0 flex items-center justify-center gap-1 min-h-[30px] px-3 py-1.5 rounded-full border border-dashed border-white/25">
                                        <div className="font-display font-black text-[13px] text-white tracking-tight">Modern</div>
                                        <div className="text-[11px] text-[#C7D7EC] font-medium whitespace-nowrap">Research Infrastructure</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>




                <section id="why" className="pt-8 md:pt-10 pb-4 sm:pb-6 px-4 sm:px-6 bg-[#F0F6FB]">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-5 sm:mb-11">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Why Cyber Security
                            </div> */}
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">Why Study B.Tech CSE Cyber <span className="text-[#ffc107]">Security in 2027 ?</span></h2>
                        </div>

                        {/* Callout quote */}
                        <div className="relative bg-[#FFFBEB] sm:bg-white border border-[#ffc107] sm:border-l-4 sm:border-l-[#ffc107] sm:border-t-[#ffc107] sm:border-b-[#ffc107] sm:border-r-[#ffc107] rounded-2xl p-7 sm:p-8  text-[14px] leading-5 sm:text-[17px] sm:leading-normal text-[#14284E] font-semibold italic mb-4 sm:mb-8">
                            <span className="absolute top-4 left-7 sm:hidden text-[#D78610] text-[30px] not-italic font-black leading-none">“</span>
                            <div className={`${!rm['quote'] ? 'line-clamp-2 sm:line-clamp-none' : ''}`}>
                                <span className="hidden sm:inline">"</span>Will this course still be relevant after four years?<span className="hidden sm:inline">"</span> — For cybersecurity, the answer is yes, and the demand continues to grow.
                            </div>
                            <button className="rm-btn sm:hidden mt-1.5 !mb-0" onClick={() => toggleRm('quote')}>{rm['quote'] ? 'Read Less' : 'Read More'}</button>
                        </div>

                        {/* 2-Column Paragraphs & Image Integration */}
                        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center my-8">
                            <div className="space-y-4">
                                <div>
                                    <p className={`text-[#4B5A72] text-[15.5px] leading-relaxed ${!rm['cyber1'] ? 'rm-clamp' : ''}`}>
                                        Cybersecurity has become important across banks, hospitals, government organizations, e-commerce, manufacturing, technology companies, and cloud-based services.
                                        As organizations adopt cloud computing, artificial intelligence, IoT, and digital payments, they need professionals who can identify vulnerabilities, protect
                                        data, and respond to security threats.
                                    </p>
                                    <button className="rm-btn" onClick={() => toggleRm('cyber1')}>{rm['cyber1'] ? 'Read Less' : 'Read More'}</button>
                                </div>
                                <div>
                                    <p className={`text-[#4B5A72] text-[15.5px] leading-relaxed ${!rm['cyber2'] ? 'rm-clamp' : ''}`}>
                                        A B.Tech in Computer Science and Engineering with Cyber Security provides students with a foundation in both computer science and information security, making it
                                        a relevant choice for students exploring the best B.Tech college in Lucknow for future-focused engineering education.
                                    </p>
                                    <button className="rm-btn" onClick={() => toggleRm('cyber2')}>{rm['cyber2'] ? 'Read Less' : 'Read More'}</button>
                                </div>
                            </div>
                            <div className="flex rounded-2xl overflow-hidden border border-[#DCE6F2] shadow-[0_4px_16px_rgba(15,31,61,0.05)] bg-[#f0f4fa] h-[200px] sm:h-[220px] items-center justify-center">
                                <img src="https://ik.imagekit.io/ttalcskjf/IMAGE%201.webp" alt="Data Protection - Cyber Security Growth" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Benefit Cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-10">
                            <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 rounded-2xl p-3 sm:p-7 shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1.5 transition-all duration-300 group">
                                <span className="block sm:hidden w-2 h-2 rounded-full bg-[#28B7A8] mb-2"></span>
                                <h3 className="text-[13px] sm:text-[16.5px] font-bold font-display text-[#14284E] group-hover:text-[#1B4F91] transition-colors mb-2.5">High Demand</h3>
                                <p className="text-[12.5px] sm:text-[14px] text-[#4B5A72] leading-5 sm:leading-relaxed">Cybersecurity roles are growing exponentially worldwide.</p>
                            </div>
                            <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 rounded-2xl p-3 sm:p-7 shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1.5 transition-all duration-300 group">
                                <span className="block sm:hidden w-2 h-2 rounded-full bg-[#28B7A8] mb-2"></span>
                                <h3 className="text-[13px] sm:text-[16.5px] font-bold font-display text-[#14284E] group-hover:text-[#1B4F91] transition-colors mb-2.5">Diverse Roles</h3>
                                <p className="text-[12.5px] sm:text-[14px] text-[#4B5A72] leading-5 sm:leading-relaxed">From analyst to architect, the field offers varied career paths.</p>
                            </div>
                            <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 rounded-2xl p-3 sm:p-7 shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1.5 transition-all duration-300 group">
                                <span className="block sm:hidden w-2 h-2 rounded-full bg-[#28B7A8] mb-2"></span>
                                <h3 className="text-[13px] sm:text-[16.5px] font-bold font-display text-[#14284E] group-hover:text-[#1B4F91] transition-colors mb-2.5">Critical Skills</h3>
                                <p className="text-[12.5px] sm:text-[14px] text-[#4B5A72] leading-5 sm:leading-relaxed">Protecting data and infrastructure is non-negotiable for modern businesses.</p>
                            </div>
                            <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 rounded-2xl p-3 sm:p-7 shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1.5 transition-all duration-300 group">
                                <span className="block sm:hidden w-2 h-2 rounded-full bg-[#28B7A8] mb-2"></span>
                                <h3 className="text-[13px] sm:text-[16.5px] font-bold font-display text-[#14284E] group-hover:text-[#1B4F91] transition-colors mb-2.5">Global Relevance</h3>
                                <p className="text-[12.5px] sm:text-[14px] text-[#4B5A72] leading-5 sm:leading-relaxed">Cyber threats are a global issue, making your skills transferable anywhere.</p>
                            </div>
                        </div>

                        {/* Centered Apply Now Button */}
                        <div className="flex justify-center mt-6 sm:mt-10">
                            <a
                                href="https://students.srmu.ac.in/login?_gl=1*1hjhqxh*_gcl_au*ODkzODU3MDY4LjE3ODkxODk4NTc.*_ga*Mjc4NTk1MjY4LjE3ODkxODk4NTc.*_ga_QZEQ59Q6ZL*czE3ODkxOTIxMTIkbzIkZzEkdDE3ODkxOTM2NDIkajYwJGwwJGg1NzMzMjQwNzM."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group overflow-hidden bg-gradient-to-r from-[#ffc107] via-[#ffcd38] to-[#e0a800] text-[#071329] font-extrabold text-[14px] sm:text-[15px] px-8 py-3.5 rounded-lg shadow-[0_8px_20px_-8px_rgba(217,139,43,0.6)] hover:shadow-[0_12px_30px_rgba(255,193,7,0.65)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-center"
                            >
                                <span>Apply Now</span>
                                <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </section>
                <section className="pt-2 sm:pt-4 pb-8 md:pb-10 px-4 sm:px-6 bg-[#F0F6FB]">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-11">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Program Overview
                            </div> */}
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">B.Tech CSE Cyber Security at SRMU, <span className="text-[#ffc107]">Lucknow</span></h2>
                        </div>

                        <div className="w-full">
                            <div className="mb-5">
                                <p className={`text-[15.5px] text-[#4B5A72] leading-relaxed ${!rm['ovw1'] ? 'rm-clamp' : ''}`}>
                                    At SRMU, the B.Tech CSE Cyber Security program in Lucknow combines foundational computer science knowledge with cybersecurity concepts and practical exposure.
                                </p>
                                <button className="rm-btn" onClick={() => toggleRm('ovw1')}>{rm['ovw1'] ? 'Read Less' : 'Read More'}</button>
                            </div>

                            <p className="text-[15.5px] text-[#14284E] font-semibold mb-4">Students learn through a combination of:</p>

                            {/* Learning pills */}
                            <div className="flex flex-nowrap items-center gap-2 overflow-x-auto sm:flex-wrap sm:overflow-visible mb-6 pb-1" style={{ scrollbarWidth: 'none' }}>
                                <span className="shrink-0 inline-flex flex-col items-center justify-center min-w-[88px] sm:min-w-[142px] h-[64px] rounded-xl bg-[#14284E] text-white text-[10px] sm:text-[12px] font-bold sm:h-auto sm:rounded-none sm:bg-transparent sm:text-[#1B355F] sm:text-[14px] sm:font-medium">
                                    <span className="text-[#ffc107] text-[10px] sm:text-[11px] mb-1 sm:hidden">01</span>
                                    Classroom
                                </span>

                                <span className="text-[#1B4F91] text-[12px] sm:text-base">→</span>

                                <span className="shrink-0 inline-flex flex-col items-center justify-center min-w-[88px] sm:min-w-[142px] h-[64px] rounded-xl bg-[#14284E] text-white text-[10px] sm:text-[12px] font-bold sm:h-auto sm:rounded-none sm:bg-transparent sm:text-[#1B355F] sm:text-[14px] sm:font-medium">
                                    <span className="text-[#ffc107] text-[10px] sm:text-[11px] mb-1 sm:hidden">02</span>
                                    Cyber Labs
                                </span>

                                <span className="text-[#1B4F91] text-[12px] sm:text-base">→</span>

                                <span className="shrink-0 inline-flex flex-col items-center justify-center min-w-[88px] sm:min-w-[142px] h-[64px] rounded-xl bg-[#14284E] text-white text-[10px] sm:text-[12px] font-bold sm:h-auto sm:rounded-none sm:bg-transparent sm:text-[#1B355F] sm:text-[14px] sm:font-medium">
                                    <span className="text-[#ffc107] text-[10px] sm:text-[11px] mb-1 sm:hidden">03</span>
                                    Projects
                                </span>

                                <span className="text-[#1B4F91] text-[12px] sm:text-base">→</span>

                                <span className="shrink-0 inline-flex flex-col items-center justify-center min-w-[88px] sm:min-w-[142px] h-[64px] rounded-xl bg-[#14284E] text-white text-[10px] sm:text-[12px] font-bold sm:h-auto sm:rounded-none sm:bg-transparent sm:text-[#1B355F] sm:text-[14px] sm:font-medium">
                                    <span className="text-[#ffc107] text-[10px] sm:text-[11px] mb-1 sm:hidden">04</span>
                                    Industry Sessions
                                </span>

                                <span className="text-[#1B4F91] text-[12px] sm:text-base">→</span>

                                <span className="shrink-0 inline-flex flex-col items-center justify-center min-w-[88px] sm:min-w-[142px] h-[64px] rounded-xl bg-[#14284E] text-white text-[10px] sm:text-[12px] font-bold sm:h-auto sm:rounded-none sm:bg-transparent sm:text-[#1B355F] sm:text-[14px] sm:font-medium">
                                    <span className="text-[#ffc107] text-[10px] sm:text-[11px] mb-1 sm:hidden">05</span>
                                    Internships
                                </span>

                                <span className="text-[#1B4F91] text-[12px] sm:text-base">→</span>

                                <span className="shrink-0 inline-flex flex-col items-center justify-center min-w-[88px] sm:min-w-[142px] h-[64px] rounded-xl bg-[#14284E] text-white text-[10px] sm:text-[12px] font-bold sm:h-auto sm:rounded-none sm:bg-transparent sm:text-[#1B355F] sm:text-[14px] sm:font-medium">
                                    <span className="text-[#ffc107] text-[10px] sm:text-[11px] mb-1 sm:hidden">06</span>
                                    Capstone Work
                                </span>
                            </div>

                            <div>
                                <p className={`text-[15.5px] text-[#4B5A72] leading-relaxed ${!rm['ovw2'] ? 'rm-clamp' : ''}`}>
                                    The program is designed to help students develop practical problem-solving skills alongside their technical knowledge. For students comparing options for the Best
                                    B.Tech College in Lucknow, the program's industry-integrated approach with L&T provides an additional focus on practical learning.
                                </p>
                                <button className="rm-btn" onClick={() => toggleRm('ovw2')}>{rm['ovw2'] ? 'Read Less' : 'Read More'}</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section 
                    className="relative py-8 md:py-10 px-4 sm:px-6 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/back2.png')" }}
                >
                    <div className={`relative z-10 ${Classes["container"]}`}>
                        <div className="w-full mb-8 text-center max-w-4xl mx-auto">
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">
                                Industry-Integrated Learning with <span className="text-[#ffc107]">L&amp;T</span>
                            </h2>
                            <div>
                                <p className={`text-[16px] text-[#4B5A72] leading-relaxed ${!rm['lt1'] ? 'rm-clamp' : ''}`}>
                                    The program incorporates industry exposure through L&amp;T, helping students understand how cybersecurity concepts are applied in professional and technology-driven environments.
                                </p>
                                <button className="rm-btn mx-auto mt-2" onClick={() => toggleRm('lt1')}>{rm['lt1'] ? 'Read Less' : 'Read More'}</button>
                            </div>
                        </div>
                        <div className="bg-white border border-[#DCE6F2] rounded-xl sm:rounded-3xl overflow-hidden shadow-[0_6px_25px_rgba(15,31,61,0.05)] max-w-4xl mx-auto">
                            <table className="w-full border-collapse">
                                <tbody>
                                    {[
                                        ["Program", "B.Tech CSE (Cyber Security)"],
                                        ["Duration", "4 Years"],
                                        ["Eligibility", "10+2 with Physics & Mathematics"],
                                        ["Approved By", "UGC"],
                                        ["University Accreditation", "NAAC Accredited"],
                                        ["Industry Partner", "Larsen & Toubro (L&T)"],
                                        ["Learning Model", "Classroom + Labs + Projects + Industry Learning"],
                                        ["Internship", "Included"],
                                        ["Placement Assistance", "Available"],
                                        ["Research Opportunities", "Yes"],
                                        ["Capstone Project", "Yes"],
                                        ["Industry Certifications", "Supported"],
                                        ["Career Support", "Resume Building, Coding, Mock Interviews & Placement Training"],
                                    ].slice(0, rm['table_more'] ? undefined : 6).map((row, idx) => (
                                        <tr key={idx} className={`border-b border-[#DCE6F2] ${idx % 2 === 0 ? "bg-[#F6FAFE]" : "bg-white"} hover:bg-[#F6FAFE]/70 transition-colors`}>
                                            <td className="px-3.5 py-3 sm:px-6 sm:py-4 text-[13px] sm:text-[14.5px] font-normal sm:font-semibold text-[#5B667A] sm:text-[#1B355F] w-[40%] sm:w-[38%]">{row[0]}</td>
                                            <td className="px-3.5 py-3 sm:px-6 sm:py-4 text-[13px] sm:text-[14.5px] text-right text-[#20283A] sm:text-[#4B5A72] font-semibold sm:font-medium">{row[1]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="bg-[#F6FAFE] py-3 flex justify-center">
                                <button type="button" onClick={() => toggleRm('table_more')} className="flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors">
                                    {rm['table_more'] ? 'Show Less' : 'See Full Content'}
                                    <ChevronDown className={`w-4 h-4 transition-transform ${rm['table_more'] ? 'rotate-180' : ''}`} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-b from-white to-[#E6E6E7]">
                    <div className={`${Classes["container"]} mx-auto`}>



                        {/* Section Heading */}
                        <div className="w-full mb-5 sm:mb-10">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Why Choose SRMU
                            </div> */}

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.15] font-bold font-display text-[#14284E]">
                                Learn Cyber Security the way <span className="text-[#ffc107]">Industry Works</span>
                            </h2>

                            <p className="mt-4 text-[15px] leading-6 text-[#4B5A72]">
                                From the first year, you'll build, test, analyse and secure real
                                systems — not just study theory.
                            </p>
                        </div>

                        {/* Industry Integrated Curriculum */}
                        <div className="flex flex-col gap-6 sm:gap-8 mb-7">

                            {/* Image - Moved above the text for desktop */}
                            <div className="hidden sm:block w-full">
                                <img
                                    src="/shared-image2.png"
                                    alt="Industry Integrated Curriculum with L&T"
                                    className="w-full h-auto object-contain rounded-xl"
                                    loading="lazy"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="w-full">
                                <h3 className="text-[17px] sm:text-[19px] font-bold font-display text-[#14284E] mb-3">
                                    Industry Integrated Curriculum with L&T
                                </h3>

                                <div>
                                    <p className={`text-[14.5px] leading-5 text-[#4B5A72] ${!rm['curr1'] ? 'rm-clamp' : ''}`}>
                                        Strengthened through academic collaboration with L&T, the
                                        curriculum bridges university education and industry expectations
                                        through application-oriented learning, case studies and
                                        problem-solving methodologies.
                                    </p>
                                    <button className="rm-btn" onClick={() => toggleRm('curr1')}>{rm['curr1'] ? 'Read Less' : 'Read More'}</button>
                                </div>
                            </div>

                        </div>

                        <div className="sm:hidden mb-5 flex items-end justify-between gap-4">
                            <div>
                                <h2 className="mt-2 text-[22px] leading-tight font-bold font-display text-[#14284E]">Where Theory Becomes Practice</h2>
                            </div>
                            <div className="flex gap-2 shrink-0">
                                <button
                                    type="button"
                                    onClick={() => scrollLabs('left')}
                                    className="w-8 h-8 rounded-md border border-[#DCE6F2] bg-white text-[#14284E] flex items-center justify-center transition-colors hover:border-[#1B4F91] hover:text-[#1B4F91]"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => scrollLabs('right')}
                                    className="w-8 h-8 rounded-md border border-[#DCE6F2] bg-white text-[#14284E] flex items-center justify-center transition-colors hover:border-[#1B4F91] hover:text-[#1B4F91]"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div ref={labsScrollRef} className="flex flex-nowrap gap-3 overflow-x-auto pb-2 scrollbar-hide sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0 sm:overflow-visible sm:pb-0 scroll-smooth">

                            {/* Cyber Security Simulation Lab */}
                            <div 
                                style={{ backgroundImage: "url('/backgroundIm.png')" }}
                                className="relative bg-cover bg-right bg-no-repeat shrink-0 w-[235px] bg-white border border-[#DCE6F2] rounded-2xl overflow-hidden sm:w-auto sm:shrink shadow-[0_2px_12px_rgba(15,31,61,0.05)] hover:shadow-[0_8px_28px_rgba(15,31,61,0.1)] hover:-translate-y-1 transition-all duration-300 group"
                            >
                                {/* Gradient to blend the image seamlessly into the white background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent sm:from-white sm:via-white/70 sm:to-transparent pointer-events-none z-0"></div>

                                <div className="relative z-10">
                                    {/* Mobile Header */}
                                    <button
                                        type="button"
                                        onClick={() => toggleSection("cyber")}
                                        className="relative md:hidden w-full flex items-center justify-between px-4 pt-8 pb-3 text-left"
                                        aria-expanded={openSection === "cyber"}
                                    >
                                    <span className="absolute top-3 left-4 text-[10px] font-mono font-semibold uppercase tracking-[0.12em] text-[#168C82]">LAB / 01</span>
                                    <h3 className="text-[17px] font-bold font-display text-[#14284E]">
                                        Cyber Security Simulation Lab
                                    </h3>

                                    <span className="hidden text-[24px] font-medium text-[#1B4F91] leading-none">
                                        {openSection === "cyber" ? "−" : "+"}
                                    </span>
                                </button>

                                {/* Desktop / Tablet Content */}
                                <div className="hidden md:block">
                                    {/* Accent bar */}
                                    <div className="h-1 w-full bg-gradient-to-r from-[#1B4F91] to-[#38bdf8]"></div>
                                    <div className="p-5 pt-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EBF5FF] text-[#1B4F91] text-[10px] font-bold uppercase tracking-widest mb-3">LAB / 01</span>
                                        <h3 className="text-[17px] font-bold font-display text-[#14284E] mb-2 group-hover:text-[#1B4F91] transition-colors">
                                        Cyber Security Simulation Lab
                                    </h3>

                                    <p className="text-[14.5px] font-semibold italic text-[#ffc107] mb-1">
                                        Experience real-world attack scenarios safely.
                                    </p>

                                    <p className="text-[14.5px] leading-5 text-[#4B5A72] mb-4">
                                        Students analyse vulnerabilities, secure systems, and understand
                                        how organisations defend against modern cyber threats.
                                    </p>

                                    <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[#4B5A72] text-[13px] sm:text-[14.5px]">
                                        <li className="">
                                            Network Monitoring
                                        </li>
                                        <li className="">
                                            Vulnerability Assessment
                                        </li>
                                        <li className="">
                                            Penetration Testing
                                        </li>
                                        <li className="">
                                            Malware Behaviour Analysis
                                        </li>
                                        <li className="">
                                            Threat Detection
                                        </li>
                                        <li className="">
                                            Security Monitoring
                                        </li>
                                    </ul>
                                    </div>
                                </div>

                                {/* Mobile Content */}
                                {true && (
                                    <div className="md:hidden px-3 pb-3 text-[12.5px] [&_p]:text-[12.5px] [&_p]:leading-4 [&_span]:px-2.5 [&_span]:py-1 [&_span]:text-[11px]">
                                        <p className="text-[14.5px] font-semibold italic text-[#ffc107] mb-1">
                                            Experience real-world attack scenarios safely.
                                        </p>

                                        <p className="text-[14.5px] leading-5 text-[#4B5A72] mb-4">
                                            Students analyse vulnerabilities, secure systems, and understand
                                            how organisations defend against modern cyber threats.
                                        </p>

                                        <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[#4B5A72] text-[13px] sm:text-[14.5px]">
                                            <li className="">
                                                Network Monitoring
                                            </li>
                                            <li className="">
                                                Vulnerability Assessment
                                            </li>
                                            <li className="">
                                                Penetration Testing
                                            </li>
                                            <li className="">
                                                Malware Behaviour Analysis
                                            </li>
                                            <li className="">
                                                Threat Detection
                                            </li>
                                            <li className="">
                                                Security Monitoring
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                </div>
                            </div>

                            {/* Reel */}
                            <div className="order-first sm:order-none shrink-0 w-[235px] sm:w-[280px] lg:w-[320px] sm:justify-self-center flex flex-col">

                                {/* Video wrapper with gradient border */}
                                <div className="relative p-[2px] rounded-2xl bg-gradient-to-b from-[#1B4F91] via-[#38bdf8] to-[#ffc107] shadow-[0_8px_32px_rgba(27,79,145,0.25)]">
                                    <div className="rounded-[14px] overflow-hidden bg-black flex items-center justify-center">
                                        <video
                                            src="/MicrosoftTeams-video.mp4"
                                            width="720"
                                            height="1280"
                                            controls
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-auto aspect-[9/16] object-cover"
                                        ></video>
                                    </div>
                                </div>
                            </div>

                            {/* Ethical Hacking Lab */}
                            <div className="shrink-0 w-[235px] bg-white border border-[#DCE6F2] rounded-2xl overflow-hidden sm:w-auto sm:shrink shadow-[0_2px_12px_rgba(15,31,61,0.05)] hover:shadow-[0_8px_28px_rgba(15,31,61,0.1)] hover:-translate-y-1 transition-all duration-300 group">

                                {/* Mobile Header */}
                                <button
                                    type="button"
                                    onClick={() => toggleSection("ethical")}
                                    className="relative md:hidden w-full flex items-center justify-between px-4 pt-8 pb-3 text-left"
                                    aria-expanded={openSection === "ethical"}
                                >
                                    <span className="absolute top-3 left-4 text-[10px] font-mono font-semibold uppercase tracking-[0.12em] text-[#168C82]">LAB / 02</span>
                                    <h3 className="text-[17px] font-bold font-display text-[#14284E]">
                                        Ethical Hacking Lab
                                    </h3>

                                    <span className="hidden text-[24px] font-medium text-[#1B4F91] leading-none">
                                        {openSection === "ethical" ? "−" : "+"}
                                    </span>
                                </button>

                                {/* Desktop / Tablet Content */}
                                <div className="hidden md:block">
                                    <div className="h-1 w-full bg-gradient-to-r from-[#1B4F91] to-[#38bdf8]"></div>
                                    <div className="p-5 pt-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EBF5FF] text-[#1B4F91] text-[10px] font-bold uppercase tracking-widest mb-3">LAB / 02</span>
                                        <h3 className="text-[17px] font-bold font-display text-[#14284E] mb-2 group-hover:text-[#1B4F91] transition-colors">
                                        Ethical Hacking Lab
                                    </h3>

                                    <p className="text-[14.5px] font-semibold italic text-[#ffc107] mb-1">
                                        Think like an attacker to build stronger security.
                                    </p>

                                    <p className="text-[14.5px] leading-5 text-[#4B5A72] mb-4">
                                        Students learn ethical hacking techniques under expert supervision
                                        in legal, controlled lab environments.
                                    </p>

                                    <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[#4B5A72] text-[13px] sm:text-[14.5px]">
                                        <li className="">
                                            Password Security
                                        </li>
                                        <li className="">
                                            Web Application Testing
                                        </li>
                                        <li className="">
                                            Network Exploitation
                                        </li>
                                        <li className="">
                                            Wireless Security
                                        </li>
                                        <li className="">
                                            Reconnaissance
                                        </li>
                                        <li className="">
                                            Vulnerability Scanning
                                        </li>
                                    </ul>
                                    </div>
                                </div>

                                {/* Mobile Content */}
                                {true && (
                                    <div className="md:hidden px-3 pb-3 text-[12.5px] [&_p]:text-[12.5px] [&_p]:leading-4 [&_span]:px-2.5 [&_span]:py-1 [&_span]:text-[11px]">
                                        <p className="text-[14.5px] font-semibold italic text-[#ffc107] mb-1">
                                            Think like an attacker to build stronger security.
                                        </p>

                                        <p className="text-[14.5px] leading-5 text-[#4B5A72] mb-4">
                                            Students learn ethical hacking techniques under expert supervision
                                            in legal, controlled lab environments.
                                        </p>

                                        <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[#4B5A72] text-[13px] sm:text-[14.5px]">
                                            <li className="">
                                                Password Security
                                            </li>
                                            <li className="">
                                                Web Application Testing
                                            </li>
                                            <li className="">
                                                Network Exploitation
                                            </li>
                                            <li className="">
                                                Wireless Security
                                            </li>
                                            <li className="">
                                                Reconnaissance
                                            </li>
                                            <li className="">
                                                Vulnerability Scanning
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>


                            {/* Digital Forensics Lab */}
                            <div className="shrink-0 w-[235px] bg-white border border-[#DCE6F2] rounded-xl overflow-hidden sm:w-auto sm:shrink">

                                {/* Mobile Header */}
                                <button
                                    type="button"
                                    onClick={() => toggleSection("forensics")}
                                    className="relative md:hidden w-full flex items-center justify-between px-4 pt-8 pb-3 text-left"
                                    aria-expanded={openSection === "forensics"}
                                >
                                    <span className="absolute top-3 left-4 text-[10px] font-mono font-semibold uppercase tracking-[0.12em] text-[#168C82]">LAB / 03</span>
                                    <h3 className="text-[17px] font-bold font-display text-[#14284E]">
                                        Digital Forensics Lab
                                    </h3>

                                    <span className="hidden text-[24px] font-medium text-[#1B4F91] leading-none">
                                        {openSection === "forensics" ? "−" : "+"}
                                    </span>
                                </button>

                                {/* Desktop / Tablet Content */}
                                <div className="hidden md:block p-5">
                                    <h3 className="text-[17px] font-bold font-display text-[#14284E] mb-3">
                                        Digital Forensics Lab
                                    </h3>

                                    <p className="text-[14.5px] font-semibold italic text-[#ffc107] mb-1">
                                        Every cyber attack leaves digital evidence.
                                    </p>

                                    <p className="text-[14.5px] leading-5 text-[#4B5A72] mb-4">
                                        Students learn how investigators recover, preserve, and analyse
                                        digital evidence using professional forensic methodologies.
                                    </p>

                                    <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[#4B5A72] text-[13px] sm:text-[14.5px]">
                                        <li className="">
                                            Log Analysis
                                        </li>
                                        <li className="">
                                            Hard Disk Investigation
                                        </li>
                                        <li className="">
                                            Memory Forensics
                                        </li>
                                        <li className="">
                                            Email Investigation
                                        </li>
                                        <li className="">
                                            Incident Documentation
                                        </li>
                                    </ul>
                                </div>

                                {/* Mobile Content */}
                                {true && (
                                    <div className="md:hidden px-3 pb-3 text-[12.5px] [&_p]:text-[12.5px] [&_p]:leading-4 [&_span]:px-2.5 [&_span]:py-1 [&_span]:text-[11px]">
                                        <p className="text-[14.5px] font-semibold italic text-[#ffc107] mb-1">
                                            Every cyber attack leaves digital evidence.
                                        </p>

                                        <p className="text-[14.5px] leading-5 text-[#4B5A72] mb-4">
                                            Students learn how investigators recover, preserve, and analyse
                                            digital evidence using professional forensic methodologies.
                                        </p>

                                        <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[#4B5A72] text-[13px] sm:text-[14.5px]">
                                            <li className="">
                                                Log Analysis
                                            </li>
                                            <li className="">
                                                Hard Disk Investigation
                                            </li>
                                            <li className="">
                                                Memory Forensics
                                            </li>
                                            <li className="">
                                                Email Investigation
                                            </li>
                                            <li className="">
                                                Incident Documentation
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>


                            {/* Cloud Security Lab */}
                            <div className="shrink-0 w-[235px] bg-white border border-[#DCE6F2] rounded-xl overflow-hidden sm:w-auto sm:shrink">

                                {/* Mobile Header */}
                                <button
                                    type="button"
                                    onClick={() => toggleSection("cloud")}
                                    className="relative md:hidden w-full flex items-center justify-between px-4 pt-8 pb-3 text-left"
                                    aria-expanded={openSection === "cloud"}
                                >
                                    <span className="absolute top-3 left-4 text-[10px] font-mono font-semibold uppercase tracking-[0.12em] text-[#168C82]">LAB / 04</span>
                                    <h3 className="text-[17px] font-bold font-display text-[#14284E]">
                                        Cloud Security Lab
                                    </h3>

                                    <span className="hidden text-[24px] font-medium text-[#1B4F91] leading-none">
                                        {openSection === "cloud" ? "−" : "+"}
                                    </span>
                                </button>

                                {/* Desktop / Tablet Content */}
                                <div className="hidden md:block p-5">
                                    <h3 className="text-[17px] font-bold font-display text-[#14284E] mb-3">
                                        Cloud Security Lab
                                    </h3>

                                    <p className="text-[14.5px] font-semibold italic text-[#ffc107] mb-1">
                                        Modern businesses run on cloud infrastructure.
                                    </p>

                                    <p className="text-[14.5px] leading-5 text-[#4B5A72] mb-4">
                                        Students gain practical exposure to securing cloud environments
                                        across identity, storage, and deployment.
                                    </p>

                                    <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[#4B5A72] text-[13px] sm:text-[14.5px]">
                                        <li className="">
                                            Identity & Access Management
                                        </li>
                                        <li className="">
                                            Cloud Storage Security
                                        </li>
                                        <li className="">
                                            Virtual Machine Security
                                        </li>
                                        <li className="">
                                            Secure Deployment
                                        </li>
                                        <li className="">
                                            Cloud Monitoring
                                        </li>
                                        <li className="">
                                            Multi-Cloud Architecture
                                        </li>
                                    </ul>
                                </div>

                                {/* Mobile Content */}
                                {true && (
                                    <div className="md:hidden px-3 pb-3 text-[12.5px] [&_p]:text-[12.5px] [&_p]:leading-4 [&_span]:px-2.5 [&_span]:py-1 [&_span]:text-[11px]">
                                        <p className="text-[14.5px] font-semibold italic text-[#ffc107] mb-1">
                                            Modern businesses run on cloud infrastructure.
                                        </p>

                                        <p className="text-[14.5px] leading-5 text-[#4B5A72] mb-4">
                                            Students gain practical exposure to securing cloud environments
                                            across identity, storage, and deployment.
                                        </p>

                                        <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[#4B5A72] text-[13px] sm:text-[14.5px]">
                                            <li className="mb-1.5">
                                                Identity & Access Management
                                            </li>
                                            <li className="mb-1.5">
                                                Cloud Storage Security
                                            </li>
                                            <li className="mb-1.5">
                                                Virtual Machine Security
                                            </li>
                                            <li className="mb-1.5">
                                                Secure Deployment
                                            </li>
                                            <li className="mb-1.5">
                                                Cloud Monitoring
                                            </li>
                                            <li className="mb-1.5">
                                                Multi-Cloud Architecture
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>


                            {/* Security Operations Centre */}
                            <div className="shrink-0 w-[235px] bg-white border border-[#DCE6F2] rounded-xl overflow-hidden sm:w-auto sm:shrink">

                                {/* Mobile Header */}
                                <button
                                    type="button"
                                    onClick={() => toggleSection("soc")}
                                    className="relative md:hidden w-full flex items-center justify-between px-4 pt-8 pb-3 text-left"
                                    aria-expanded={openSection === "soc"}
                                >
                                    <span className="absolute top-3 left-4 text-[10px] font-mono font-semibold uppercase tracking-[0.12em] text-[#168C82]">LAB / 05</span>
                                    <h3 className="text-[17px] font-bold font-display text-[#14284E]">
                                        Security Operations Centre (SOC) Learning Environment
                                    </h3>

                                    <span className="hidden text-[24px] font-medium text-[#1B4F91] leading-none ml-3 shrink-0">
                                        {openSection === "soc" ? "−" : "+"}
                                    </span>
                                </button>

                                {/* Desktop / Tablet Content */}
                                <div className="hidden md:block p-5">
                                    <h3 className="text-[17px] font-bold font-display text-[#14284E] mb-3">
                                        Security Operations Centre (SOC) Learning Environment
                                    </h3>

                                    <p className="text-[14.5px] font-semibold italic text-[#ffc107] mb-1">
                                        Understand how organisations monitor threats 24×7.
                                    </p>

                                    <p className="text-[14.5px] leading-5 text-[#4B5A72] mb-4">
                                        Students learn how a real SOC team detects, investigates and
                                        responds to live threats.
                                    </p>

                                    <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[#4B5A72] text-[13px] sm:text-[14.5px]">
                                        <li className="">
                                            SIEM Monitoring
                                        </li>
                                        <li className="">
                                            Security Alerts
                                        </li>
                                        <li className="">
                                            Threat Intelligence
                                        </li>
                                        <li className="">
                                            Incident Response
                                        </li>
                                        <li className="">
                                            Log Correlation
                                        </li>
                                        <li className="">
                                            Threat Hunting
                                        </li>
                                    </ul>
                                </div>

                                {/* Mobile Content */}
                                {true && (
                                    <div className="md:hidden px-3 pb-3 text-[12.5px] [&_p]:text-[12.5px] [&_p]:leading-4 [&_span]:px-2.5 [&_span]:py-1 [&_span]:text-[11px]">
                                        <p className="text-[14.5px] font-semibold italic text-[#ffc107] mb-1">
                                            Understand how organisations monitor threats 24×7.
                                        </p>

                                        <p className="text-[14.5px] leading-5 text-[#4B5A72] mb-4">
                                            Students learn how a real SOC team detects, investigates and
                                            responds to live threats.
                                        </p>

                                        <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[#4B5A72] text-[13px] sm:text-[14.5px]">
                                            <li className="">
                                                SIEM Monitoring
                                            </li>
                                            <li className="">
                                                Security Alerts
                                            </li>
                                            <li className="">
                                                Threat Intelligence
                                            </li>
                                            <li className="">
                                                Incident Response
                                            </li>
                                            <li className="">
                                                Log Correlation
                                            </li>
                                            <li className="">
                                                Threat Hunting
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                        </div>



                    </div>

                        {/* Helpline Button */}
                        <div className="mt-8 flex justify-center w-full">
                            <a 
                                href="tel:18001026004" 
                                className="relative group overflow-hidden bg-gradient-to-r from-[#ffc107] via-[#ffcd38] to-[#e0a800] text-[#071329] font-extrabold text-[14px] sm:text-[15px] px-8 py-3.5 rounded-lg shadow-[0_8px_20px_-8px_rgba(217,139,43,0.6)] hover:shadow-[0_12px_30px_rgba(255,193,7,0.65)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-center"
                            >
                                <PhoneCall className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                                <span>Have Query? Talk to Expert</span>
                            </a>
                        </div>
                </section>



                {/* <section id="srmu" className="py-8 md:py-10  px-4 sm:px-6 bg-gradient-to-b from-[#F6FAFE] via-[#EAF2FB] to-[#F6FAFE]">
                    <div className={`${Classes["container"]}`}>
                        <div className="max-w-[700px] mb-11">
                           
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">Industry-Integrated Learning with L&T</h2>
                            <p className="text-[16px] text-[#4B5A72] leading-relaxed">
                                The program incorporates industry exposure through L&T, helping students understand how cybersecurity concepts are applied in professional and technology-driven
                                environments.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-white border border-[#DCE6F2] rounded-3xl p-8 sm:p-10 shadow-[0_6px_25px_rgba(15,31,61,0.05)]">
                            <div>
                                <h3 className="text-[19px] font-bold font-display text-[#14284E] mb-3">Industry Integrated Curriculum with L&T</h3>
                                <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-5">
                                    Strengthened through academic collaboration with L&T, the curriculum bridges university education and industry expectations through application-oriented learning,
                                    case studies and problem-solving methodologies.
                                </p>
                                <div className="flex flex-wrap gap-2.5 mb-5">
                                    <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14.5px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Live Projects</span>
                                    <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14.5px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Industry Visits</span>
                                    <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14.5px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Guest Lectures</span>
                                    <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14.5px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Case Studies</span>
                                    <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14.5px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Workshops</span>
                                </div>
                                <div className="p-4 rounded-xl bg-[#F6FAFE] border border-[#DCE6F2]">
                                    <p className="text-[14.5px] text-[#4B5A72] leading-relaxed">
                                        <b className="text-[#14284E]">Outcome:</b> Graduate with both academic knowledge and industry-relevant skills — able to combine development, networking, and
                                        defence into one skill set employers are actively hiring for.
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-2xl overflow-hidden border border-[#DCE6F2] shadow-sm flex justify-center items-center bg-[#f0f4fa] h-[220px] sm:h-[260px] md:h-full md:min-h-[280px]">
                                <img src="https://ik.imagekit.io/ttalcskjf/IMAGE%203.webp" alt="L&T Industry Integrated Curriculum" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section> */}




                {/* ============================================================
                LABS & FACILITIES
                ============================================================ */}
                {/* <section className="py-8 md:py-10  px-4 sm:px-6">
                    <div className={`${Classes["container"]}`}>
                        <div className="max-w-[700px] mb-11">

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">Hands-on Cybersecurity Labs</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-7">

                            <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 rounded-3xl p-8 sm:p-9 shadow-[0_4px_20px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.07)] hover:-translate-y-1 transition-all duration-300">
                                <div className="w-full">
                                    <div>
                                        <div className="flex justify-between items-start gap-3 flex-wrap mb-3.5">
                                            <h3 className="text-[19px] font-bold font-display text-[#14284E]">Cyber Security & Digital Forensics Lab</h3>
                                            <span className="italic text-[#ffc107] text-[14.5px] font-semibold bg-[#071329] px-3.5 py-1 rounded-full shadow-sm">"Secure, Investigate, Analyze"</span>
                                        </div>
                                        <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-4.5">
                                            Hands-on lab with tools for penetration testing, malware analysis, and forensic investigation on real-world scenarios.
                                        </p>
                                        <div className="flex flex-wrap gap-2.5">
                                            <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14.5px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Kali Linux</span>
                                            <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14.5px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Wireshark</span>
                                            <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14.5px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Metasploit</span>
                                            <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14.5px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Autopsy</span>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 rounded-3xl p-8 sm:p-9 shadow-[0_4px_20px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.07)] hover:-translate-y-1 transition-all duration-300">
                                <div className="w-full">
                                    <div>
                                        <div className="flex justify-between items-start gap-3 flex-wrap mb-3.5">
                                            <h3 className="text-[19px] font-bold font-display text-[#14284E]">Network Security & Operations Lab</h3>
                                            <span className="italic text-[#ffc107] text-[14.5px] font-semibold bg-[#071329] px-3.5 py-1 rounded-full shadow-sm">"Monitor, Defend, Respond"</span>
                                        </div>
                                        <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-4.5">
                                            Simulate enterprise network environments to practice security monitoring, threat detection, and incident response.
                                        </p>
                                        <div className="flex flex-wrap gap-2.5">
                                            <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14.5px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Cisco Packet Tracer</span>
                                            <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14.5px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Snort</span>
                                            <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14.5px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Splunk</span>
                                            <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14.5px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Wireshark</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="w-full ">
                                <video
                                    src="https://ik.imagekit.io/ttalcskjf/Hands_Cybersecurity.mp4"
                                    controls
                                    className="w-full h-full object-cover aspect-video rounded-lg" >
                                </video>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* ============================================================
                4-YEAR JOURNEY (Tabs)
                ============================================================ */}
                <section id="journey" className="py-8 md:py-10 px-4 sm:px-6 bg-[#E0F1FF]">
                    <div className={`${Classes["container"]} mx-auto`}>

                        <div className="w-full mb-11">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Learn. Build. Secure. Lead.
                            </div> */}

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                Your Journey from Student to Cyber <span className="text-[#ffc107]">Security Professional</span>
                            </h2>

                            <p className="mt-4 text-[15px] leading-7 text-[#4B5A72]">
                                Every year builds on the last — combining theory, practical implementation,
                                industry exposure and certifications.
                            </p>
                        </div>

                        {/* Tab Buttons */}
                        <div className="hidden md:flex justify-center flex-wrap gap-2.5 mb-6.5">
                            {[
                                { id: "year1", label: "Year 1" },
                                { id: "year2", label: "Year 2" },
                                { id: "year3", label: "Year 3" },
                                { id: "year4", label: "Year 4" }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`font-display font-semibold text-[14.5px] px-5 py-2.75 rounded-lg border-[1.5px] ${
                                        activeTab === tab.id
                                            ? "bg-[#14284E] border-[#14284E] text-white"
                                            : "bg-white border-[#DCE6F2] text-[#4B5A72]"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="md:hidden space-y-3 mb-8">
                            {["Year 1 — Foundations", "Year 2", "Year 3", "Year 4"].map((title, index) => {
                                const yearKey = `year${index + 1}`;

                                return (
                                    <div key={yearKey}>
                                        <button
                                            type="button"
                                            onClick={() => setActiveTab(activeTab === yearKey ? "" : yearKey)}
                                            className="w-full flex items-center justify-between rounded-xl border border-[#DCE6F2] bg-[#F6FAFE] px-3.5 py-3.5 text-left text-[13px] font-bold text-[#20283A]"
                                            aria-expanded={activeTab === yearKey}
                                        >
                                            <span className="font-normal text-[#5B667A]">Year</span>
                                            <span className="font-bold text-[#20283A]">{title}</span>
                                        </button>

                                        {activeTab === yearKey && yearKey === "year1" && (
                                            <div className="pt-4 pb-4 space-y-4 text-[13px] text-[#5B667A]">
                                                <div>
                                                    <h4 className="font-bold text-[#20283A] mb-3">Subjects</h4>
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        <li>Programming Fundamentals (C & Python)</li>
                                                        <li>Engineering Mathematics</li>
                                                        <li>Computer Organization</li>
                                                        <li>Digital Electronics</li>
                                                        <li>Linux Basics</li>
                                                        <li>Problem Solving Techniques</li>
                                                        <li>Communication Skills</li>
                                                        <li>Engineering Physics</li>
                                                    </ul>
                                                </div>

                                                {!rm[`${yearKey}_more`] && (
                                                    <button type="button" onClick={() => toggleRm(`${yearKey}_more`)} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5">
                                                        See Full Curriculum <ChevronDown className="w-4 h-4" />
                                                    </button>
                                                )}

                                                <div className={`space-y-4 ${rm[`${yearKey}_more`] ? 'block' : 'hidden'}`}>
                                                <div>
                                                    <h4 className="font-bold text-[#20283A] mb-3">Practical Learning</h4>
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        <li>Install and configure Linux</li>
                                                        <li>Write your first secure programs</li>
                                                        <li>Learn Git & GitHub</li>
                                                        <li>Build command-line applications</li>
                                                        <li>Understand computer architecture</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#20283A] mb-3">Projects</h4>
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        <li>Password Generator</li>
                                                        <li>File Encryption Tool</li>
                                                        <li>Student Management System</li>
                                                        <li>Basic Calculator using C</li>
                                                        <li>Command Line Notes App</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#20283A] mb-3">Software / Tools</h4>
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        <li>Visual Studio Code</li>
                                                        <li>Ubuntu Linux</li>
                                                        <li>GitHub</li>
                                                        <li>CodeBlocks</li>
                                                        <li>VirtualBox</li>
                                                    </ul>
                                                </div>
                                                {rm[`${yearKey}_more`] && (
                                                    <button type="button" onClick={() => toggleRm(`${yearKey}_more`)} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 mt-2">
                                                        Show Less <ChevronUp className="w-4 h-4" />
                                                    </button>
                                                )}
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === yearKey && yearKey === "year2" && (
                                            <div className="pt-4 pb-4 space-y-4 text-[13px] text-[#5B667A]">
                                                <div>
                                                    <h4 className="font-bold text-[#20283A] mb-3">Subjects</h4>
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        <li>Data Structures & Algorithms</li>
                                                        <li>Operating Systems</li>
                                                        <li>Computer Networks</li>
                                                        <li>Database Management Systems</li>
                                                        <li>Python Programming</li>
                                                        <li>Object-Oriented Programming</li>
                                                        <li>Cryptography</li>
                                                        <li>Information Security</li>
                                                    </ul>
                                                </div>

                                                {!rm[`${yearKey}_more`] && (
                                                    <button type="button" onClick={() => toggleRm(`${yearKey}_more`)} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5">
                                                        See Full Curriculum <ChevronDown className="w-4 h-4" />
                                                    </button>
                                                )}

                                                <div className={`space-y-4 ${rm[`${yearKey}_more`] ? 'block' : 'hidden'}`}>
                                                <div>
                                                    <h4 className="font-bold text-[#20283A] mb-3">Practical Learning</h4>
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        <li>Configure secure networks</li>
                                                        <li>Implement encryption algorithms</li>
                                                        <li>Build secure databases</li>
                                                        <li>Perform packet analysis</li>
                                                        <li>Learn secure coding practices</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#20283A] mb-3">Projects</h4>
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        <li>Secure Login System</li>
                                                        <li>File Encryption Software</li>
                                                        <li>Network Packet Analyzer</li>
                                                        <li>Database Access Control System</li>
                                                        <li>Password Vault</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#20283A] mb-3">Software / Tools</h4>
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        <li>MySQL</li>
                                                        <li>Cisco Packet Tracer</li>
                                                        <li>Wireshark</li>
                                                        <li>Ubuntu</li>
                                                        <li>GitHub</li>
                                                    </ul>
                                                </div>
                                                <div className="pt-2">
                                                    <strong className="text-[#20283A]">Outcome:</strong> You'll develop skills in network configuration, SQL security, encryption, secure authentication, and Python automation.
                                                </div>
                                                {rm[`${yearKey}_more`] && (
                                                    <button type="button" onClick={() => toggleRm(`${yearKey}_more`)} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 mt-2">
                                                        Show Less <ChevronUp className="w-4 h-4" />
                                                    </button>
                                                )}
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === yearKey && yearKey === "year3" && (
                                            <div className="pt-4 pb-4 space-y-4 text-[13px] text-[#5B667A]">
                                                <div>
                                                    <h4 className="font-bold text-[#20283A] mb-3">Subjects</h4>
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        <li>Ethical Hacking</li>
                                                        <li>Penetration Testing</li>
                                                        <li>Cloud Security</li>
                                                        <li>Cyber Laws</li>
                                                        <li>Malware Analysis</li>
                                                        <li>Digital Forensics</li>
                                                        <li>Secure Software Development</li>
                                                        <li>Incident Response</li>
                                                        <li>SIEM Fundamentals</li>
                                                    </ul>
                                                </div>

                                                {!rm[`${yearKey}_more`] && (
                                                    <button type="button" onClick={() => toggleRm(`${yearKey}_more`)} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5">
                                                        See Full Curriculum <ChevronDown className="w-4 h-4" />
                                                    </button>
                                                )}

                                                <div className={`space-y-4 ${rm[`${yearKey}_more`] ? 'block' : 'hidden'}`}>
                                                <div>
                                                    <h4 className="font-bold text-[#20283A] mb-3">Practical Learning</h4>
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        <li>Vulnerability Assessment</li>
                                                        <li>Security Audits</li>
                                                        <li>Malware Behaviour Analysis</li>
                                                        <li>Penetration Testing</li>
                                                        <li>Web Security Testing</li>
                                                        <li>Mobile Application Security</li>
                                                        <li>Digital Evidence Collection</li>
                                                        <li>Threat Hunting</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#20283A] mb-3">Projects</h4>
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        <li>AI-Based Phishing Detector</li>
                                                        <li>Vulnerability Scanner</li>
                                                        <li>Secure Banking Portal</li>
                                                        <li>Cloud Access Manager</li>
                                                        <li>Secure Online Voting System</li>
                                                        <li>Malware Detection Dashboard</li>
                                                        <li>IoT Security Framework</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#20283A] mb-3">Software / Tools</h4>
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        <li>Kali Linux</li>
                                                        <li>Burp Suite</li>
                                                        <li>Metasploit</li>
                                                        <li>OWASP ZAP</li>
                                                        <li>Nmap</li>
                                                        <li>Splunk</li>
                                                        <li>Snort IDS</li>
                                                        <li>Security Onion</li>
                                                        <li>VMware</li>
                                                    </ul>
                                                </div>
                                                <div className="pt-2">
                                                    <strong className="text-[#20283A]">Outcome:</strong> Students spend more time in labs than classrooms — mastering ethical hacking, penetration testing, digital forensics, and cloud security.
                                                </div>
                                                {rm[`${yearKey}_more`] && (
                                                    <button type="button" onClick={() => toggleRm(`${yearKey}_more`)} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 mt-2">
                                                        Show Less <ChevronUp className="w-4 h-4" />
                                                    </button>
                                                )}
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === yearKey && yearKey === "year4" && (
                                            <div className="pt-4 pb-4 space-y-4 text-[13px] text-[#5B667A]">
                                                <div>
                                                    <h4 className="font-bold text-[#20283A] mb-3">Subjects</h4>
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        <li>Capstone Project</li>
                                                        <li>Industry Internship</li>
                                                        <li>Research Methodology</li>
                                                        <li>Artificial Intelligence Security</li>
                                                        <li>DevSecOps</li>
                                                        <li>Cloud Security Architecture</li>
                                                        <li>Emerging Cyber Technologies</li>
                                                    </ul>
                                                </div>

                                                {!rm[`${yearKey}_more`] && (
                                                    <button type="button" onClick={() => toggleRm(`${yearKey}_more`)} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5">
                                                        See Full Curriculum <ChevronDown className="w-4 h-4" />
                                                    </button>
                                                )}

                                                <div className={`space-y-4 ${rm[`${yearKey}_more`] ? 'block' : 'hidden'}`}>
                                                <div>
                                                    <h4 className="font-bold text-[#20283A] mb-3">Practical Learning</h4>
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        <li>Aptitude Training</li>
                                                        <li>Coding Interviews</li>
                                                        <li>HR Interviews</li>
                                                        <li>Technical Interviews</li>
                                                        <li>Resume Building</li>
                                                        <li>LinkedIn Branding</li>
                                                        <li>Mock Group Discussions</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#20283A] mb-3">Projects</h4>
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        <li>Enterprise SOC Dashboard</li>
                                                        <li>AI Intrusion Detection System</li>
                                                        <li>Blockchain Identity Management</li>
                                                        <li>Smart Healthcare Security Platform</li>
                                                        <li>Cloud Security Monitoring Dashboard</li>
                                                        <li>Ransomware Detection using Machine Learning</li>
                                                        <li>Secure Smart City Infrastructure</li>
                                                        <li>Autonomous Threat Intelligence Platform</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#20283A] mb-3">Software / Tools</h4>
                                                    <ul className="list-none pl-1 space-y-2">
                                                        <li>—</li>
                                                    </ul>
                                                </div>
                                                <div className="pt-2">
                                                    <strong className="text-[#20283A]">Outcome:</strong> The final year focuses on solving real business challenges through internships, research, industry projects, and placement preparation.
                                                </div>
                                                {rm[`${yearKey}_more`] && (
                                                    <button type="button" onClick={() => toggleRm(`${yearKey}_more`)} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 mt-2">
                                                        Show Less <ChevronUp className="w-4 h-4" />
                                                    </button>
                                                )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Year 1 Content */}
                        {activeTab === "year1" && (
                            <div className="hidden md:block bg-white border border-[#DCE6F2] rounded-xl p-7.5 max-w-4xl mx-auto">

                                <div className="italic text-[#ffc107] font-semibold mb-5 text-[15px]">
                                    "Every cyber security expert begins by understanding how computers actually work."
                                </div>

                            <div className="flex flex-col gap-6.5">

                                <div>
                                    <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">
                                        Subjects
                                    </h4>

                                    <ul>
                                        <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                            Programming Fundamentals (C & Python)
                                        </li>
                                        <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                            Engineering Mathematics
                                        </li>
                                        <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                            Computer Organization
                                        </li>
                                        <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                            Digital Electronics
                                        </li>
                                        <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                            Linux Basics
                                        </li>
                                        <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                            Problem Solving Techniques
                                        </li>
                                        <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                            Communication Skills
                                        </li>
                                        <li className="text-[14.5px] py-1.5 text-[#14284E]">
                                            Engineering Physics
                                        </li>
                                    </ul>
                                </div>

                                {rm['year1_more'] && (
                                    <>
                                        <div>
                                            <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">
                                                Practical Learning
                                            </h4>

                                            <ul>
                                                <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                                    Install and configure Linux
                                                </li>
                                                <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                                    Write your first secure programs
                                                </li>
                                                <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                                    Learn Git & GitHub
                                                </li>
                                                <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                                    Build command-line applications
                                                </li>
                                                <li className="text-[14.5px] py-1.5 text-[#14284E]">
                                                    Understand computer architecture
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">
                                                Projects
                                            </h4>

                                            <ul>
                                                <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                                    Password Generator
                                                </li>
                                                <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                                    File Encryption Tool
                                                </li>
                                                <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                                    Student Management System
                                                </li>
                                                <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                                    Basic Calculator using C
                                                </li>
                                                <li className="text-[14.5px] py-1.5 text-[#14284E]">
                                                    Command Line Notes App
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">
                                                Software / Tools
                                            </h4>

                                            <ul>
                                                <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                                    Visual Studio Code
                                                </li>
                                                <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                                    Ubuntu Linux
                                                </li>
                                                <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                                    GitHub
                                                </li>
                                                <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">
                                                    CodeBlocks
                                                </li>
                                                <li className="text-[14.5px] py-1.5 text-[#14284E]">
                                                    VirtualBox
                                                </li>
                                            </ul>
                                        </div>

                                        {/* <div className="md:col-span-2 mt-2 pt-4.5 border-t border-[#DCE6F2] text-[14.5px] text-[#4B5A72]">
                                            <b className="text-[#14284E]">
                                                Outcome:
                                            </b>{" "}
                                            You'll understand how computers, operating systems, and programming
                                            languages work together — the foundation for cyber security.
                                        </div> */}
                                    </>
                                )}
                            </div>
                            
                            {!rm['year1_more'] && (
                                <div className="mt-5 flex justify-center">
                                    <button type="button" onClick={() => toggleRm('year1_more')} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 border border-[#DCE6F2] rounded-lg bg-[#F6FAFE] hover:bg-[#EAF2FB]">
                                        See Full Curriculum <ChevronDown className="w-4 h-4" />
                                    </button>
                                </div>
                            )}

                            {rm['year1_more'] && (
                                <div className="mt-5 flex justify-center">
                                    <button type="button" onClick={() => toggleRm('year1_more')} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 px-6 border border-[#DCE6F2] rounded-lg bg-[#F6FAFE] hover:bg-[#EAF2FB]">
                                        Show Less <ChevronUp className="w-4 h-4" />
                                    </button>
                                </div>
                            )}
                        </div>
                        )}

                        {/* Year 2 Content */}
                        {activeTab === "year2" && (
                            <div className="hidden md:block bg-white border border-[#DCE6F2] rounded-xl p-7.5 max-w-4xl mx-auto">
                                <div className="italic text-[#D78610] font-semibold mb-5 text-[15px]">
                                    "Now you begin thinking like both a developer and a defender."
                                </div>
                                <div className="flex flex-col gap-6.5">
                                    <div>
                                        <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">
                                            Subjects
                                        </h4>
                                        <ul>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Data Structures & Algorithms</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Operating Systems</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Computer Networks</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Database Management Systems</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Python Programming</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Object-Oriented Programming</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Cryptography</li>
                                            <li className="text-[14.5px] py-1.5 text-[#14284E]">Information Security</li>
                                        </ul>
                                    </div>
                                    
                                    {rm['year2_more'] && (
                                        <>
                                            <div>
                                                <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">
                                                    Practical Learning
                                                </h4>
                                                <ul>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Configure secure networks</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Implement encryption algorithms</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Build secure databases</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Perform packet analysis</li>
                                                    <li className="text-[14.5px] py-1.5 text-[#14284E]">Learn secure coding practices</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">
                                                    Projects
                                                </h4>
                                                <ul>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Secure Login System</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">File Encryption Software</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Network Packet Analyzer</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Database Access Control System</li>
                                                    <li className="text-[14.5px] py-1.5 text-[#14284E]">Password Vault</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">
                                                    Software / Tools
                                                </h4>
                                                <ul>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">MySQL</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Cisco Packet Tracer</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Wireshark</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Ubuntu</li>
                                                    <li className="text-[14.5px] py-1.5 text-[#14284E]">GitHub</li>
                                                </ul>
                                            </div>
                                            <div className="md:col-span-2 mt-2 pt-4.5 border-t border-[#DCE6F2] text-[14.5px] text-[#4B5A72]">
                                                <b className="text-[#14284E]">Outcome:</b> You'll develop skills in network configuration, SQL security, encryption, secure authentication, and Python automation.
                                            </div>
                                        </>
                                    )}
                                </div>

                                {!rm['year2_more'] && (
                                    <div className="mt-5 flex justify-center">
                                        <button type="button" onClick={() => toggleRm('year2_more')} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 border border-[#DCE6F2] rounded-lg bg-[#F6FAFE] hover:bg-[#EAF2FB]">
                                            See Full Curriculum <ChevronDown className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                                {rm['year2_more'] && (
                                    <div className="mt-5 flex justify-center">
                                        <button type="button" onClick={() => toggleRm('year2_more')} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 px-6 border border-[#DCE6F2] rounded-lg bg-[#F6FAFE] hover:bg-[#EAF2FB]">
                                            Show Less <ChevronUp className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Year 3 Content */}
                        {activeTab === "year3" && (
                            <div className="hidden md:block bg-white border border-[#DCE6F2] rounded-xl p-7.5 max-w-4xl mx-auto">
                                <div className="italic text-[#D78610] font-semibold mb-5 text-[15px]">
                                    "This is where you start solving real cyber security challenges."
                                </div>
                                <div className="flex flex-col gap-6.5">
                                    <div>
                                        <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">
                                            Subjects
                                        </h4>
                                        <ul>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Ethical Hacking</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Penetration Testing</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Cloud Security</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Cyber Laws</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Malware Analysis</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Digital Forensics</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Secure Software Development</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Incident Response</li>
                                            <li className="text-[14.5px] py-1.5 text-[#14284E]">SIEM Fundamentals</li>
                                        </ul>
                                    </div>
                                    {rm['year3_more'] && (
                                        <>
                                            <div>
                                                <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">
                                                    Practical Learning
                                                </h4>
                                                <ul>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Vulnerability Assessment</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Security Audits</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Malware Behaviour Analysis</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Penetration Testing</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Web Security Testing</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Mobile Application Security</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Digital Evidence Collection</li>
                                                    <li className="text-[14.5px] py-1.5 text-[#14284E]">Threat Hunting</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">
                                                    Projects
                                                </h4>
                                                <ul>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">AI-Based Phishing Detector</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Vulnerability Scanner</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Secure Banking Portal</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Cloud Access Manager</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Secure Online Voting System</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Malware Detection Dashboard</li>
                                                    <li className="text-[14.5px] py-1.5 text-[#14284E]">IoT Security Framework</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">
                                                    Software / Tools
                                                </h4>
                                                <ul>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Kali Linux</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Burp Suite</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Metasploit</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">OWASP ZAP</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Nmap</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Splunk</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Snort IDS</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Security Onion</li>
                                                    <li className="text-[14.5px] py-1.5 text-[#14284E]">VMware</li>
                                                </ul>
                                            </div>
                                            <div className="md:col-span-2 mt-2 pt-4.5 border-t border-[#DCE6F2] text-[14.5px] text-[#4B5A72]">
                                                <b className="text-[#14284E]">Outcome:</b> Students spend more time in labs than classrooms — mastering ethical hacking, penetration testing, digital forensics, and cloud security.
                                            </div>
                                        </>
                                    )}
                                </div>
                                {!rm['year3_more'] && (
                                    <div className="mt-5 flex justify-center">
                                        <button type="button" onClick={() => toggleRm('year3_more')} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 border border-[#DCE6F2] rounded-lg bg-[#F6FAFE] hover:bg-[#EAF2FB]">
                                            See Full Curriculum <ChevronDown className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                                {rm['year3_more'] && (
                                    <div className="mt-5 flex justify-center">
                                        <button type="button" onClick={() => toggleRm('year3_more')} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 px-6 border border-[#DCE6F2] rounded-lg bg-[#F6FAFE] hover:bg-[#EAF2FB]">
                                            Show Less <ChevronUp className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                                </div>
                        )}

                        {/* Year 4 Content */}
                        {activeTab === "year4" && (
                            <div className="hidden md:block bg-white border border-[#DCE6F2] rounded-xl p-7.5 max-w-4xl mx-auto">
                                <div className="italic text-[#D78610] font-semibold mb-5 text-[15px]">
                                    "Your classroom becomes the workplace."
                                </div>
                                <div className="flex flex-col gap-6.5">
                                    <div>
                                        <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">
                                            Subjects
                                        </h4>
                                        <ul>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Capstone Project</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Industry Internship</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Research Methodology</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Artificial Intelligence Security</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">DevSecOps</li>
                                            <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Cloud Security Architecture</li>
                                            <li className="text-[14.5px] py-1.5 text-[#14284E]">Emerging Cyber Technologies</li>
                                        </ul>
                                    </div>
                                    
                                    {rm['year4_more'] && (
                                        <>
                                            <div>
                                                <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">
                                                    Practical Learning
                                                </h4>
                                                <ul>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Aptitude Training</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Coding Interviews</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">HR Interviews</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Technical Interviews</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Resume Building</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">LinkedIn Branding</li>
                                                    <li className="text-[14.5px] py-1.5 text-[#14284E]">Mock Group Discussions</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">
                                                    Projects
                                                </h4>
                                                <ul>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Enterprise SOC Dashboard</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">AI Intrusion Detection System</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Blockchain Identity Management</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Smart Healthcare Security Platform</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Cloud Security Monitoring Dashboard</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Ransomware Detection using Machine Learning</li>
                                                    <li className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E]">Secure Smart City Infrastructure</li>
                                                    <li className="text-[14.5px] py-1.5 text-[#14284E]">Autonomous Threat Intelligence Platform</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">
                                                    Software / Tools
                                                </h4>
                                                <ul>
                                                    <li className="text-[14.5px] py-1.5 text-[#14284E]">—</li>
                                                </ul>
                                            </div>
                                            <div className="md:col-span-2 mt-2 pt-4.5 border-t border-[#DCE6F2] text-[14.5px] text-[#4B5A72]">
                                                <b className="text-[#14284E]">Outcome:</b> The final year focuses on solving real business challenges through internships, research, industry projects, and placement preparation.
                                            </div>
                                        </>
                                    )}
                                </div>
                                {!rm['year4_more'] && (
                                    <div className="mt-5 flex justify-center">
                                        <button type="button" onClick={() => toggleRm('year4_more')} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 border border-[#DCE6F2] rounded-lg bg-[#F6FAFE] hover:bg-[#EAF2FB]">
                                            See Full Curriculum <ChevronDown className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                                {rm['year4_more'] && (
                                    <div className="mt-5 flex justify-center">
                                        <button type="button" onClick={() => toggleRm('year4_more')} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 px-6 border border-[#DCE6F2] rounded-lg bg-[#F6FAFE] hover:bg-[#EAF2FB]">
                                            Show Less <ChevronUp className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                                </div>
                        )}
                    </div>
                </section>
                <section className="py-8 md:py-10 px-4 sm:px-6 bg-gray-200">
                    <div className={`${Classes["container"]} mx-auto`}>

                        {/* Heading */}
                        <div className="w-full mb-10">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5 font-semibold">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Program Fee & Investment
                            </div> */}

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                Transparent Fee <span className="text-[#ffc107]">Structure</span>
                            </h2>

                            <div className="mt-4">
                                <p className={`text-[15px] leading-7 text-[#4B5A72] ${!rm['fee1'] ? 'rm-clamp' : ''}`}>
                                    A quality engineering education is an investment in your future — with
                                    industry-oriented learning, advanced laboratories, and placement support.
                                </p>
                                <button className="rm-btn" onClick={() => toggleRm('fee1')}>{rm['fee1'] ? 'Read Less' : 'Read More'}</button>
                            </div>
                        </div>

                        {/* Mobile Fee Cards (sm:hidden) */}
                        <div className="sm:hidden space-y-4">
                            {/* Card 1: Course Fee */}
                            <div className="rounded-2xl border border-[#DCE6F2] bg-white overflow-hidden">
                                <div className="flex items-center justify-between px-4 py-3.5 border-b border-[#DCE6F2]">
                                    <span className="font-bold text-[14px] text-[#14284E]">Course Fee</span>
                                    <span className="text-[11px] font-bold text-white bg-[#14284E] px-3 py-1 rounded-full">Per Year</span>
                                </div>
                                <div className="divide-y divide-dashed divide-[#DCE6F2]">
                                    <div className="flex items-center justify-between px-4 py-3">
                                        <span className="text-[13px] text-[#4B5A72]">1st / 2nd / 3rd / 4th Year</span>
                                        <span className="text-[13px] font-semibold text-[#14284E]">₹1,70,000 each</span>
                                    </div>
                                    <div className="flex items-center justify-between px-4 py-3">
                                        <span className="text-[13px] text-[#4B5A72]">Student Welfare Fund</span>
                                        <span className="text-[13px] font-semibold text-[#14284E]">₹100</span>
                                    </div>
                                    <div className="flex items-center justify-between px-4 py-3">
                                        <span className="text-[13px] text-[#4B5A72]">Caution Money (1st Yr only)*</span>
                                        <span className="text-[13px] font-semibold text-[#14284E]">₹5,000</span>
                                    </div>
                                    <div className="flex items-center justify-between px-4 py-3">
                                        <span className="text-[13px] text-[#4B5A72]">Academic Fee Total – Yr 1</span>
                                        <span className="text-[13px] font-semibold text-[#ffc107]">₹1,75,100</span>
                                    </div>
                                    <div className="flex items-center justify-between px-4 py-3">
                                        <span className="text-[13px] text-[#4B5A72]">Academic Fee Total – Yr 2–4</span>
                                        <span className="text-[13px] font-semibold text-[#ffc107]">₹1,70,100</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Optional Add-ons */}
                            <div className="rounded-2xl border border-[#DCE6F2] bg-white overflow-hidden">
                                <div className="px-4 py-3.5 border-b border-[#DCE6F2]">
                                    <span className="font-bold text-[14px] text-[#14284E]">Optional Add-ons</span>
                                </div>
                                <div className="divide-y divide-dashed divide-[#DCE6F2]">
                                    <div className="flex items-center justify-between px-4 py-3">
                                        <span className="text-[13px] text-[#4B5A72]">Hostel Fee (1st Year)</span>
                                        <span className="text-[13px] font-semibold text-[#14284E]">₹85,000</span>
                                    </div>
                                    <div className="flex items-center justify-between px-4 py-3">
                                        <span className="text-[13px] text-[#4B5A72]">Hostel Fee (Yr 2–4)</span>
                                        <span className="text-[13px] font-semibold text-[#14284E]">₹80,000</span>
                                    </div>
                                    <div className="flex items-center justify-between px-4 py-3">
                                        <span className="text-[13px] text-[#4B5A72]">Transportation (per year)</span>
                                        <span className="text-[13px] font-semibold text-[#14284E]">₹35,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fee Table — Desktop only */}
                        <div className="hidden sm:block overflow-x-auto rounded-xl border border-[#DCE6F2] bg-white">
                            <table className="w-full min-w-[800px] text-left">
                                <thead>
                                    <tr className="bg-[#142E5C] text-white">
                                        <th className="px-5 py-4 text-[14.5px] uppercase font-semibold">
                                            Fee Component
                                        </th>
                                        <th className="px-5 py-4 text-[14.5px] uppercase font-semibold">
                                            1st Year
                                        </th>
                                        <th className="px-5 py-4 text-[14.5px] uppercase font-semibold">
                                            2nd Year
                                        </th>
                                        <th className="px-5 py-4 text-[14.5px] uppercase font-semibold">
                                            3rd Year
                                        </th>
                                        <th className="px-5 py-4 text-[14.5px] uppercase font-semibold">
                                            4th Year
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="text-[#1B355F] text-[14px]">

                                    <tr className="border-b border-[#DCE6F2]">
                                        <td className="px-5 py-4">Course Fee</td>
                                        <td className="px-5 py-4">₹1,70,000</td>
                                        <td className="px-5 py-4">₹1,70,000</td>
                                        <td className="px-5 py-4">₹1,70,000</td>
                                        <td className="px-5 py-4">₹1,70,000</td>
                                    </tr>

                                    <tr className="border-b border-[#DCE6F2] bg-[#F6FAFE]">
                                        <td className="px-5 py-4">Student Welfare Fund</td>
                                        <td className="px-5 py-4">₹100</td>
                                        <td className="px-5 py-4">₹100</td>
                                        <td className="px-5 py-4">₹100</td>
                                        <td className="px-5 py-4">₹100</td>
                                    </tr>

                                    <tr className="border-b border-[#DCE6F2]">
                                        <td className="px-5 py-4">Caution Money*</td>
                                        <td className="px-5 py-4">₹5,000</td>
                                        <td className="px-5 py-4">–</td>
                                        <td className="px-5 py-4">–</td>
                                        <td className="px-5 py-4">–</td>
                                    </tr>

                                    <tr className="border-b border-[#DCE6F2] bg-[#F6FAFE] font-semibold">
                                        <td className="px-5 py-4 text-[#ffc107]">
                                            Academic Fee Total
                                        </td>
                                        <td className="px-5 py-4 text-[#ffc107]">₹1,75,100</td>
                                        <td className="px-5 py-4 text-[#ffc107]">₹1,70,100</td>
                                        <td className="px-5 py-4 text-[#ffc107]">₹1,70,100</td>
                                        <td className="px-5 py-4 text-[#ffc107]">₹1,70,100</td>
                                    </tr>

                                    <tr className="border-b border-[#DCE6F2]">
                                        <td className="px-5 py-4">Hostel Fee (Optional)**</td>
                                        <td className="px-5 py-4">₹85,000</td>
                                        <td className="px-5 py-4">₹80,000</td>
                                        <td className="px-5 py-4">₹80,000</td>
                                        <td className="px-5 py-4">₹80,000</td>
                                    </tr>

                                    <tr className="bg-[#F6FAFE]">
                                        <td className="px-5 py-4">Transportation (Optional)</td>
                                        <td className="px-5 py-4">₹35,000</td>
                                        <td className="px-5 py-4">₹35,000</td>
                                        <td className="px-5 py-4">₹35,000</td>
                                        <td className="px-5 py-4">₹35,000</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        {/* Fee Note */}
                        <div className="mt-4">
                            <p className={`text-[14.5px] leading-5 text-[#718096] ${!rm['feeNote'] ? 'rm-clamp' : ''}`}>
                                Additional charges: Alumni Fee ₹500 and Degree Fee ₹1,000
                                (payable in the final year). *One-time refundable caution money as per
                                university policy. **Hostel and transportation are optional and subject
                                to university guidelines.
                            </p>
                            <button className="rm-btn" onClick={() => toggleRm('feeNote')}>{rm['feeNote'] ? 'Read Less' : 'Read More'}</button>
                        </div>

                        {/* Scholarship Section Shared Header & Banner */}
                        <h3 className="text-[20px] lg:text-[24px] font-bold font-display text-[#14284E] mt-10 mb-4">
                            Scholarship Schemes
                        </h3>

                        {/* Mobile scholarship layout */}
                        <div className="block sm:hidden w-full rounded-xl overflow-hidden mb-6 bg-transparent shadow-sm">
                            {/* scholar1mobile — plain, no overlay */}
                            <img src="/scholar1mobile.jpg" className="w-full h-auto block" alt="SRMU Scholarships" />
                            {/* scholar2mobile — dark gradient + text overlaid */}
                            <div className="relative w-full">
                                <img src="/scholar2mobile.jpg" className="w-full h-auto block" alt="Girl with laptop" />
                                
                                <div className="absolute inset-0 flex flex-col justify-start px-5 pt-4 pb-5 z-10 pointer-events-none">
                                    <h2 className="text-[22px] font-black leading-[1.1] uppercase mb-2 tracking-tight">
                                        <span className="text-[#14284E]">SRMU'S</span> <br />
                                        <span className="text-red-600">EXCLUSIVE</span><br />
                                        <span className="text-black">SCHOLARSHIPS</span>
                                    </h2>
                                    <h3 className="text-[13px] font-bold text-[#1B4F91] mb-2">
                                        Rewarding Merit, Empowering Futures
                                    </h3>
                                    <p className={`text-[11.5px] text-[#4B5A72] leading-[1.5] ${!rm['scholarMob'] ? 'line-clamp-2' : ''}`}>
                                        Meritorious and deserving students can avail limited scholarships at the time of admission, subject to approved eligibility criteria. Scholarships are applicable only in the first year of admission.
                                    </p>
                                    <button className="rm-btn !text-[#1B4F91] !mb-0 mt-1 pointer-events-auto" onClick={() => toggleRm('scholarMob')}>
                                        {rm['scholarMob'] ? 'Read Less' : 'Read More'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Desktop scholarship banner */}
                        <div className="hidden sm:block relative w-full rounded-2xl overflow-hidden mb-6 shadow-sm bg-[#f0f4fa]">
                             <img src="/sharedimageScholar.jpg" className="block w-full h-[300px] sm:h-auto object-cover object-right" alt="Scholarships" />
                             
                             {/* Text Overlay (No background gradient) */}
                             <div className="absolute inset-0 z-10 p-5 sm:p-6 md:p-10 w-full sm:w-[85%] md:w-[75%] lg:w-[65%] flex flex-col justify-center pointer-events-none">
                                 <h2 className="text-[18px] sm:text-[24px] md:text-[30px] font-black leading-[1.1] uppercase mb-2 tracking-tight">
                                     <span className="text-[#14284E]">SRMU’S</span> <br />
                                     <span className="text-red-600">EXCLUSIVE</span> <br />
                                     <span className="text-black">SCHOLARSHIPS</span>
                                 </h2>
                                 <h3 className="text-[14px] sm:text-[17px] font-bold text-[#1B4F91] mb-2">
                                     Rewarding Merit, Empowering Futures
                                 </h3>
                                 <p className="text-[12px] sm:text-[13.5px] md:text-[14px] text-[#4B5A72] max-w-[420px] leading-relaxed">
                                     Meritorious and deserving students can avail limited scholarships at the time of admission, subject to approved eligibility criteria. Scholarships are applicable only in the first year of admission.
                                 </p>
                             </div>
                        </div>

                        <div className="flex justify-center w-full">
                            <Link to="https://srmu.ac.in/scholarship-scheme" target="_blank" className="inline-flex items-center bg-[#ffc107] hover:bg-[#D78610] text-[#14284E] font-semibold text-[14.5px] px-6 py-3 rounded-md transition-colors shadow-sm hover:-translate-y-0.5">
                                View Details →
                            </Link>
                        </div>





                    </div>
                </section>


                {/* <section className="py-8 md:py-10  px-4 sm:px-6 bg-white">
                    <div className={`${Classes["container"]} mx-auto`}>

                  
                        <div className="max-w-[700px] mb-10">
                           

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.1] font-bold font-display text-[#14284E]">
                                Every semester includes practical implementation
                            </h2>

                            <p className="mt-4 text-[15px] leading-6 text-[#4B5A72]">
                                Instead of only writing examinations, students develop projects
                                that become portfolio pieces.
                            </p>
                        </div>

                      
                        <div className="border border-[#DCE6F2] rounded-xl p-5 bg-white shadow-sm mb-5">
                            <div className="text-[14.5px] uppercase font-semibold text-[#ffc107] mb-2">
                                L&T Industry Project
                            </div>

                            <h3 className="text-[15px] font-bold font-display text-[#14284E] mb-2">
                                Secure Access Monitoring System for Industrial Networks
                            </h3>

                            <p className="text-[14.5px] leading-5 text-[#4B5A72]">
                                Working with L&T's cyber security team, students design a monitoring
                                system that detects unauthorised access attempts across industrial
                                control networks — the same OT (Operational Technology) environments
                                L&T secures for manufacturing and infrastructure clients. Students
                                build the detection logic, test it against simulated intrusion
                                attempts, and present findings the way a real SOC team would report
                                to a client.
                            </p>
                        </div>

                    
                        <div className="flex flex-wrap gap-2">
                            <span className="border border-[#DCE6F2] rounded-md px-3 py-2 text-[14.5px] font-medium text-[#14284E]">
                                AI-based Phishing Detection
                            </span>

                            <span className="border border-[#DCE6F2] rounded-md px-3 py-2 text-[14.5px] font-medium text-[#14284E]">
                                Secure Banking Portal
                            </span>

                            <span className="border border-[#DCE6F2] rounded-md px-3 py-2 text-[14.5px] font-medium text-[#14284E]">
                                Ransomware Detection Tool
                            </span>

                            <span className="border border-[#DCE6F2] rounded-md px-3 py-2 text-[14.5px] font-medium text-[#14284E]">
                                Password Manager
                            </span>

                            <span className="border border-[#DCE6F2] rounded-md px-3 py-2 text-[14.5px] font-medium text-[#14284E]">
                                Smart Home Security
                            </span>

                            <span className="border border-[#DCE6F2] rounded-md px-3 py-2 text-[14.5px] font-medium text-[#14284E]">
                                Cloud IAM Dashboard
                            </span>

                            <span className="border border-[#DCE6F2] rounded-md px-3 py-2 text-[14.5px] font-medium text-[#14284E]">
                                Packet Sniffer
                            </span>

                            <span className="border border-[#DCE6F2] rounded-md px-3 py-2 text-[14.5px] font-medium text-[#14284E]">
                                Malware Sandbox
                            </span>

                            <span className="border border-[#DCE6F2] rounded-md px-3 py-2 text-[14.5px] font-medium text-[#14284E]">
                                Secure Chat Application
                            </span>

                            <span className="border border-[#DCE6F2] rounded-md px-3 py-2 text-[14.5px] font-medium text-[#14284E]">
                                IoT Device Security Monitor
                            </span>
                        </div>

                    </div>
                </section> */}
                {/* <section className="py-8 md:py-10  px-4 sm:px-6 bg-[#F6FAFE]">
                    <div className={`${Classes["container"]} mx-auto`}>

                        <div className="w-full mb-10">
                           

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                Industry Exposure & Cyber Security Learning at SRMU, Lucknow
                            </h2>
                            <div>
                                <p className={`text-[14.5px] leading-5 text-[#4B5A72] ${!rm['indExp1'] ? 'rm-clamp' : ''}`}>
                                    Cyber security education goes beyond textbooks. At SRMU, students pursuing B.Tech CSE Cyber Security participate in industry sessions, workshops, hackathons, and expert interactions that connect academic concepts with practical security scenarios.
                                </p>
                                <button className="rm-btn" onClick={() => toggleRm('indExp1')}>{rm['indExp1'] ? 'Read Less' : 'Read More'}</button>
                            </div>
                            <h3 className="text-[19px] font-bold font-display text-[#14284E]"> Industry &amp; Expert Sessions</h3>
                            <div>
                                <p className={`text-[14.5px] leading-5 text-[#4B5A72] ${!rm['indExp2'] ? 'rm-clamp' : ''}`}>
                                    Students have been exposed to topics including operational technology security, cloud security, application security, ethical hacking, networking, Android security, and generative AI.
                                </p>
                                <button className="rm-btn" onClick={() => toggleRm('indExp2')}>{rm['indExp2'] ? 'Read Less' : 'Read More'}</button>
                            </div>
                        </div>

                       

                     
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="bg-white border border-[#DCE6F2] rounded-xl p-5">
                                <div className="text-[14.5px] uppercase tracking-[0.08em] text-[#ffc107] font-semibold mb-4">
                                    Guest Lecture
                                </div>

                                <p className="text-[11px] text-[#4B5A72] mb-3">
                                    15 June 2026
                                </p>

                                <h3 className="text-[15px] font-bold text-[#14284E] mb-2">
                                    From Code to Creativity: The Rise of Generative AI
                                </h3>

                                <p className="text-[14.5px] font-semibold italic text-[#14284E] mb-3">
                                    Er. Subham Mishra, Automation Test Engineer, TCS, Kolkata
                                </p>

                                <p className="text-[14.5px] leading-5 text-[#4B5A72] mb-3">
                                    The session introduced students to key concepts in generative AI and
                                    provided practical exposure to AI tools and prompt engineering
                                    techniques.
                                </p>

                                <p className="text-[14.5px] leading-5 text-[#4B5A72]">
                                    Students gained a foundation in generative AI concepts, practical
                                    experience with AI tools, an understanding of prompt engineering, and
                                    awareness of AI applications in technology and software development.
                                </p>
                            </div>

                            <div className="bg-white border border-[#DCE6F2] rounded-xl p-5">
                                <div className="text-[14.5px] uppercase tracking-[0.08em] text-[#ffc107] font-semibold mb-4">
                                    Guest Lecturer
                                </div>

                                <p className="text-[11px] text-[#4B5A72] mb-3">
                                    B.Tech CSE (Cyber Security)
                                </p>

                                <h3 className="text-[15px] font-bold text-[#14284E] mb-2">
                                    Mr. Rajeev Malhotra, L&T Cyber Security Division
                                </h3>

                                <p className="text-[14.5px] font-semibold italic text-[#14284E] mb-3">
                                    Securing Industrial Control Systems (OT Security)
                                </p>

                                <p className="text-[14.5px] leading-5 text-[#4B5A72]">
                                    Explored how OT networks in manufacturing plants are targeted
                                    by attackers. Walked students through real detection and
                                    response workflows used at L&T. Concluded with a live Q&A on
                                    career paths in OT security.
                                </p>
                            </div>



                            <div className="bg-white border border-[#DCE6F2] rounded-xl p-5">
                                <div className="text-[14.5px] uppercase tracking-[0.08em] text-[#ffc107] font-semibold mb-4">
                                    Industry Workshop
                                </div>

                                <p className="text-[11px] text-[#4B5A72] mb-3">
                                    26 March 2025
                                </p>

                                <h3 className="text-[15px] font-bold text-[#14284E] mb-2">
                                    Networking with Ethical Hacking & Android Development
                                </h3>

                                <p className="text-[14.5px] font-semibold italic text-[#14284E] mb-3">
                                    Conducted by Mr. Santu Purkait, Director, Netcamp Solutions Pvt. Ltd.
                                </p>

                                <p className="text-[14.5px] leading-5 text-[#4B5A72] mb-3">
                                    The workshop introduced students to practical concepts related to
                                    network security, penetration testing, ethical hacking, cyber security
                                    best practices, secure Android application development, and mobile
                                    application security.
                                </p>

                                <p className="text-[14.5px] leading-5 text-[#4B5A72]">
                                    The session helped students connect networking fundamentals with
                                    practical ethical hacking and application security concepts, while
                                    understanding real-world cyber threats and defense mechanisms.
                                </p>
                            </div>



                        </div>

                    </div>
                </section> */}

                <section className="py-8 md:py-10 px-6 bg-[#F0F6FB]">
                    <div className={`${Classes["container"]} mx-auto`}>

                        {/* Heading */}
                        <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                            PO, PLO &  <span className="text-[#ffc107]">PSO</span>
                        </h2>


                        {/* PROGRAM OBJECTIVES */}
                        <div className="border-t border-[#CBD5DF] mt-5">

                            <button
                                type="button"
                                onClick={() => toggleSection("objectives")}
                                className="w-full flex items-stretch text-left cursor-pointer"
                            >
                                <div className="flex-1 py-8 md:py-5 pr-6">
                                    <h3 className="text-[17px] sm:text-[18px] md:text-[22px] font-bold text-[#102D43]">
                                        Program Objectives
                                    </h3>

                                    {/* Toggle on both mobile and desktop */}
                                    {openSection === "objectives" && (
                                        <ul className="mt-8 pl-5 space-y-2 text-[15.5px] leading-6 text-[#14284E] list-disc">
                                            <li>
                                                To impart deep technical knowledge about the field of
                                                computer science and engineering.
                                            </li>

                                            <li>
                                                <span className={!rm['obj2d'] ? 'rm-clamp' : ''}>
                                                    To develop an understanding of computer science and
                                                    engineering at different levels of abstraction including
                                                    computer architecture and design, operating systems,
                                                    database management, algorithms and applications.
                                                </span>
                                                <button className="rm-btn block" onClick={() => toggleRm('obj2d')}>{rm['obj2d'] ? 'Read Less' : 'Read More'}</button>
                                            </li>

                                            <li>
                                                <span className={!rm['obj3d'] ? 'rm-clamp' : ''}>
                                                    To aware students with a strong foundation in the field
                                                    of Mathematical and basics of engineering fundamentals
                                                    necessary to analyze and evaluate real world engineering
                                                    problems and to further prepare them for higher studies,
                                                    R&amp;D.
                                                </span>
                                                <button className="rm-btn block" onClick={() => toggleRm('obj3d')}>{rm['obj3d'] ? 'Read Less' : 'Read More'}</button>
                                            </li>

                                            <li>
                                                <span className={!rm['obj4d'] ? 'rm-clamp' : ''}>
                                                    To develop life-long learning attitude among students and
                                                    to make them aware about professional and social
                                                    responsibility.
                                                </span>
                                                <button className="rm-btn block" onClick={() => toggleRm('obj4d')}>{rm['obj4d'] ? 'Read Less' : 'Read More'}</button>
                                            </li>

                                            <li>
                                                <span className={!rm['obj5d'] ? 'rm-clamp' : ''}>
                                                    To inculcate an understanding among the students for
                                                    utilizing their knowledge of computer engineering and
                                                    mathematical theory to solve current and future computing
                                                    problems.
                                                </span>
                                                <button className="rm-btn block" onClick={() => toggleRm('obj5d')}>{rm['obj5d'] ? 'Read Less' : 'Read More'}</button>
                                            </li>

                                            <li>
                                                To inspire leadership and professional values in the
                                                students.
                                            </li>
                                        </ul>
                                    )}
                                </div>

                                <div className="flex w-[60px] sm:w-[90px] shrink-0 border-l border-[#CBD5DF] items-start justify-center pt-7 md:pt-5">
                                    <span className="text-[34px] leading-none font-light text-[#202B32]">
                                        {openSection === "objectives" ? "↓" : "→"}
                                    </span>
                                </div>
                            </button>

                        </div>

                        {/* PROGRAM LEARNING OUTCOMES */}
                        <div className="border-t border-[#CBD5DF]">
                            <button
                                type="button"
                                onClick={() => toggleSection("outcomes")}
                                className="w-full flex items-stretch text-left cursor-pointer"
                            >
                                <div className="flex-1 py-8 md:py-5 pr-6">
                                    <h3 className="text-[17px] sm:text-[18px] md:text-[22px] font-bold text-[#102D43]">
                                        Program Learning Outcomes
                                    </h3>

                                    {openSection === "outcomes" && (
                                        <div className="mt-7">
                                            <ul className="pl-5 space-y-2 text-[15.5px] leading-6 text-[#14284E] list-disc">
                                                <li>
                                                    Apply possessed knowledge of core subjects of production and industrial engineering to solve different problems.
                                                </li>

                                                <li>
                                                    Problem analysis: Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.
                                                </li>

                                                <li>
                                                    Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.
                                                </li>

                                                <li>
                                                    Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.
                                                </li>

                                                <li>
                                                    Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.
                                                </li>

                                                <li>
                                                    The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.
                                                </li>

                                                <li>
                                                    Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.
                                                </li>

                                                <li>
                                                    Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.
                                                </li>

                                                <li>
                                                    Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.
                                                </li>

                                                <li>
                                                    Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.
                                                </li>

                                                <li>
                                                    Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.
                                                </li>

                                                <li>
                                                    Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <div className="flex w-[60px] sm:w-[90px] shrink-0 border-l border-[#CBD5DF] items-start justify-center pt-7 md:pt-5">
                                    <span className="text-[34px] leading-none font-light text-[#202B32]">
                                        {openSection === "outcomes" ? "↓" : "→"}
                                    </span>
                                </div>
                            </button>
                        </div>

                        {/* PROGRAM SPECIFIC OUTCOMES */}
                        <div className="border-t border-b border-[#CBD5DF]">
                            <button
                                type="button"
                                onClick={() => toggleSection("specific")}
                                className="w-full flex items-stretch text-left cursor-pointer"
                            >
                                <div className="flex-1 py-8 md:py-5 pr-6">
                                    <h3 className="text-[17px] sm:text-[18px] md:text-[22px] font-bold text-[#102D43]">
                                        Program Specific Outcomes
                                    </h3>

                                    {openSection === "specific" && (
                                        <div className="mt-7">
                                            <ul className="pl-5 space-y-2 text-[15.5px] leading-6 text-[#14284E] list-disc">
                                                <li>
                                                    Understand and develop computer programs in the areas
                                                    related to algorithms, system software, multimedia, web
                                                    design, big data analytics and networking by identifying,
                                                    demonstrating and analyzing the knowledge of engineering
                                                    in efficient design of computer-based systems of varying
                                                    complexity.
                                                </li>

                                                <li>
                                                    Applying algorithmic principles, innovative Computer
                                                    science and engineering design and implementation skills
                                                    to propose optimal solutions to complex problems by
                                                    choosing a better platform for research in emerging areas.
                                                </li>

                                                <li>
                                                    Identify standard Software Engineering practices and
                                                    strategies by applying software project development
                                                    methods using open-source programming environment to
                                                    design and evaluate a quality product for business success.
                                                </li>

                                                <li>
                                                    Demonstrate and examine basic understanding of engineering
                                                    fundamentals, professional/social ethics and apply
                                                    mathematical foundations to design and solve computational
                                                    problems.
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <div className="flex w-[60px] sm:w-[90px] shrink-0 border-l border-[#CBD5DF] items-start justify-center pt-7 md:pt-5">
                                    <span className="text-[34px] leading-none font-light text-[#202B32]">
                                        {openSection === "specific" ? "↓" : "→"}
                                    </span>
                                </div>
                            </button>
                        </div>

                    </div>
                </section>

                <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-b from-white to-[#E0F1FF]">
                    <div className={`${Classes["container"]}`}>
                        {/* <div className="w-full mb-6">

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">
                                Industry Exposure & Cyber Security Learning at <span className="text-[#ffc107]">SRMU, Lucknow</span>
                            </h2>

                        </div> */}

                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> */}
                        <div className="w-full">
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">
                                Industry Exposure & Cyber Security Learning at <span className="text-[#ffc107]">SRMU, Lucknow</span>
                            </h2>
                            <p className={`text-[16px] text-[#4B5A72] leading-relaxed ${!rm['indExp3'] ? 'rm-clamp' : ''}`}>
                                Cyber security education goes beyond textbooks. At SRMU, students pursuing B.Tech CSE Cyber Security participate in industry sessions, workshops, hackathons, and
                                expert interactions that connect academic concepts with practical security scenarios.
                            </p>
                            <button className="rm-btn" onClick={() => toggleRm('indExp3')}>{rm['indExp3'] ? 'Read Less' : 'Read More'}</button>
                            <h3 className="text-[19px] font-bold font-display text-[#14284E] my-3">Industry & Expert Sessions</h3>
                            <p className={`text-[15.5px] text-[#4B5A72] leading-relaxed max-w-[78ch] ${!rm['indExp4'] ? 'rm-clamp' : ''}`}>
                                Students have been exposed to topics including operational technology security, cloud security, application security, ethical hacking, networking, Android security,
                                and generative AI.
                            </p>
                            <button className="rm-btn" onClick={() => toggleRm('indExp4')}>{rm['indExp4'] ? 'Read Less' : 'Read More'}</button>
                        </div>

                        {/* </div> */}
                        <div className="grid md:grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-5 mt-6">

                            <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/35 rounded-3xl p-4 sm:p-6 shadow-[0_4px_20px_rgba(15,31,61,0.04)] transition-all">
                                {/* <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-7 items-start"> */}


                                <div className="w-full">
                                    {/* Mobile header */}
                                    <div className="sm:hidden">
                                        <div className="text-[11px] font-bold uppercase tracking-widest text-[#D78610] mb-2">15 June 2026</div>
                                        <h4 className="text-[15px] font-bold font-display text-[#14284E] mb-1">Guest Lecture: From Code to Creativity - The Rise of Generative AI</h4>
                                        <p className="text-[12.5px] text-[#8A96A8] mb-3">Er. Subham Mishra · Automation Test Engineer, TCS Kolkata</p>
                                    </div>
                                    {/* Desktop header */}
                                    <div className="hidden sm:block">
                                        <h4 className="text-[17px] font-bold font-display text-[#14284E] mb-2">Guest Lecture: From Code to Creativity - The Rise of Generative AI</h4>
                                        <div className="text-[14px] text-[#1B4F91] mb-4">
                                            <span className="font-semibold bg-[#F6FAFE] border border-[#DCE6F2] px-3.5 py-1.5 rounded-full inline-block">15 June 2026</span>
                                        </div>
                                    </div>
                                    <div className={!rm['glDesc'] ? 'rm-clamp' : ''}>
                                        <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-3.5">
                                            A guest lecture on <strong>"From Code to Creativity: The Rise of Generative AI"</strong> was conducted for B.Tech CSE Cyber Security students by{" "}
                                            <strong>Er. Subham Mishra, Automation Test Engineer, TCS, Kolkata</strong>.
                                        </p>
                                        <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-4">
                                            The session introduced participants to key concepts in generative AI and provided practical exposure to AI tools and prompt engineering techniques.
                                        </p>
                                    </div>
                                    <button className="rm-btn" onClick={() => toggleRm('glDesc')}>{rm['glDesc'] ? 'Read Less' : 'Read More'}</button>

                                </div>
                                {/* <div className="rounded-2xl overflow-hidden border border-[#DCE6F2] shadow-sm bg-[#f0f4fa] h-[220px] sm:h-[260px] md:h-full md:min-h-[280px] flex items-center justify-center">
                                    <img src="https://ik.imagekit.io/ttalcskjf/IMAGE%202.webp" alt="Cybersecurity System - Generative AI Guest Lecture" className="w-full h-full object-cover" />
                                </div> */}
                                {/* </div> */}
                            </div>


                            <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/35 rounded-3xl p-4 sm:p-6 shadow-[0_4px_20px_rgba(15,31,61,0.04)] transition-all">
                                {/* <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-7 items-center"> */}
                                <div className="w-full">
                                    {/* Mobile header */}
                                    <div className="sm:hidden">
                                        <div className="text-[11px] font-bold uppercase tracking-widest text-[#D78610] mb-2">Guest Lecture</div>
                                        <h4 className="text-[15px] font-bold font-display text-[#14284E] mb-1">Securing Industrial Control Systems-OT Security</h4>
                                        <p className="text-[12.5px] text-[#8A96A8] mb-3">Mr. Rajeev Malhotra · L&amp;T Cyber Security Division</p>
                                    </div>
                                    {/* Desktop header */}
                                    <div className="hidden sm:block">
                                        <h4 className="text-[17px] font-bold font-display text-[#14284E] mb-2">Guest Lecture: Securing Industrial Control Systems-OT Security</h4>
                                        <div className="text-[14px] text-[#1B4F91] mb-4">
                                            <span className="font-semibold bg-[#F6FAFE] border border-[#DCE6F2] px-3.5 py-1.5 rounded-full inline-block">
                                                Mr. Rajeev Malhotra, L&amp;T Cyber Security Division
                                            </span>
                                        </div>
                                    </div>
                                    <div className={!rm['otSec'] ? 'rm-clamp' : ''}>
                                        <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-3.5">Topic: Securing Industrial Control Systems (OT Security)</p>
                                        <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-3.5">
                                            The session explored how Operational Technology (OT) networks used in manufacturing environments can be targeted by cyber attackers.
                                        </p>
                                        <p className="text-[14.5px] text-[#4B5A72] leading-relaxed">
                                            Students were introduced to real-world detection and response workflows used in industrial security environments, followed by a discussion on career
                                            opportunities in OT security.
                                        </p>
                                    </div>
                                    <button className="rm-btn" onClick={() => toggleRm('otSec')}>{rm['otSec'] ? 'Read Less' : 'Read More'}</button>
                                </div>
                                {/* <div className="rounded-2xl overflow-hidden border border-[#DCE6F2] shadow-sm bg-[#f0f4fa] h-[200px] sm:h-[220px] flex items-center justify-center">
                                    <img src="https://ik.imagekit.io/ttalcskjf/IMAGE%203.webp" alt="Cyber Security Digitization - OT Security Guest Lecture" className="w-full h-full object-cover" />
                                </div> */}
                            </div>


                            <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/35 rounded-3xl p-4 sm:p-6 shadow-[0_4px_20px_rgba(15,31,61,0.04)] transition-all">
                                <div>
                                    {/* Mobile header */}
                                    <div className="sm:hidden">
                                        <div className="text-[11px] font-bold uppercase tracking-widest text-[#D78610] mb-2">26 March 2025</div>
                                        <h4 className="text-[15px] font-bold font-display text-[#14284E] mb-1">Industry Workshop: Networking with Ethical Hacking &amp; Android Development</h4>
                                        <p className="text-[12.5px] text-[#8A96A8] mb-3">Mr. Santu Purkait · Director, Netcamp Solutions Pvt. Ltd.</p>
                                    </div>
                                    {/* Desktop header */}
                                    <div className="hidden sm:block">
                                        <h4 className="text-[17px] font-bold font-display text-[#14284E] mb-2">INDUSTRY WORKSHOP: Networking with Ethical Hacking &amp; Android Development</h4>
                                        <div className="text-[14px] text-[#1B4F91] mb-4">
                                            <span className="font-semibold bg-[#F6FAFE] border border-[#DCE6F2] px-3.5 py-1.5 rounded-full inline-block">26 March 2025</span>
                                        </div>
                                    </div>
                                    <div className={!rm['workshop'] ? 'rm-clamp' : ''}>
                                        <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-3.5">
                                            A workshop on <strong>"Networking with Ethical Hacking &amp; Android Development"</strong> was conducted by{" "}
                                            <strong>Mr. Santu Purkait, Director, Netcamp Solutions Pvt. Ltd.</strong>
                                        </p>
                                        <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-3.5">The workshop introduced students to practical concepts related to:</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pl-5 text-[14px] text-[#4B5A72] mb-4">
                                            <li className="list-disc">Network security</li>
                                            <li className="list-disc">Penetration testing</li>
                                            <li className="list-disc">Ethical hacking</li>
                                            <li className="list-disc">Cyber security best practices</li>
                                            <li className="list-disc">Secure Android application development</li>
                                            <li className="list-disc">Mobile application security</li>
                                            <li className="list-disc sm:col-span-2">Real-world cyber threats and defense mechanisms</li>
                                        </ul>
                                        <p className="text-[14.5px] text-[#4B5A72] leading-relaxed">
                                            The session helped students connect networking fundamentals with practical ethical hacking and application security concepts.
                                        </p>
                                    </div>
                                    <button className="rm-btn" onClick={() => toggleRm('workshop')}>{rm['workshop'] ? 'Read Less' : 'Read More'}</button>
                                </div>
                            </div>
                            <div className="block bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/35 rounded-3xl p-4 sm:p-6 shadow-[0_4px_20px_rgba(15,31,61,0.04)] transition-all">

                                <img
                                    src="/Cyber-awareness-workshop.webp"
                                    alt="Cyber security professionals protecting digital systems"
                                    className="w-full  object-cover rounded-xl border border-[#DCE6F2]"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Know Your Department Button */}
                        <div className="flex justify-center w-full mt-8 sm:mt-12">
                            <Link to="https://srmu.ac.in/department-of-computer-science-and-engineering" target="_blank" className="inline-flex items-center bg-[#ffc107] hover:bg-[#D78610] text-[#14284E] font-semibold text-[14.5px] px-6 py-3 rounded-md transition-colors shadow-sm hover:-translate-y-0.5">
                                Know Your Department →
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="py-8 md:py-10 px-4 sm:px-6 bg-[#E6E6E7]">
                    <div className={`${Classes["container"]} mx-auto`}>

                        {/* Heading */}
                        <div className="w-full mb-10">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Industries Hiring
                            </div> */}

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.15] font-bold font-display text-[#14284E]">
                                Where Digital Systems Need <span className="text-[#ffc107]">Protecting</span>
                            </h2>
                        </div>

                        {/* ===================== MOBILE LAYOUT ===================== */}
                        <div className="md:hidden flex flex-col gap-5 mb-6">
                            <div className="hidden sm:block w-full">
                                <img
                                    src="https://ik.imagekit.io/ttalcskjf/IMAGE%203.webp?updatedAt=1788439003298"
                                    alt="Cyber security professionals protecting digital systems"
                                    className="w-full aspect-[16/9] object-cover rounded-xl border border-[#DCE6F2]"
                                    loading="lazy"
                                />
                            </div>
                            <div className="w-full">
                                <p className={`text-[14.5px] leading-5 text-[#4B5A72] ${!rm['digSys'] ? 'rm-clamp' : ''}`}>
                                    From banking dashboards to hospital records, every industry now
                                    runs on data and digital systems — and every one of them needs
                                    professionals who can keep that data safe.
                                </p>
                                <div className="mt-4 flex flex-wrap items-center gap-4">
                                    <button className="rm-btn !mt-0" onClick={() => toggleRm('digSys')}>{rm['digSys'] ? 'Read Less' : 'Read More'}</button>
                                    
                                    <a
                                        href="/Broucher_SRMU_25_April___.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#14284E] hover:bg-[#1B4F91] text-white text-[13px] font-semibold rounded-lg shadow-sm transition-colors"
                                    >
                                        <Download className="w-3.5 h-3.5" />
                                        Download Brochure
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Industry Cards — Mobile Scrollable */}
                        <div className="md:hidden mt-4 relative">
                            {/* Scroll Buttons */}
                            <div className="flex gap-2 justify-end mb-3 shrink-0">
                                <button
                                    type="button"
                                    onClick={() => scrollIndustries('left')}
                                    className="w-8 h-8 rounded-md border border-[#DCE6F2] bg-white text-[#14284E] flex items-center justify-center transition-colors hover:border-[#1B4F91] hover:text-[#1B4F91]"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => scrollIndustries('right')}
                                    className="w-8 h-8 rounded-md border border-[#DCE6F2] bg-white text-[#14284E] flex items-center justify-center transition-colors hover:border-[#1B4F91] hover:text-[#1B4F91]"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                            
                            <div ref={industriesScrollRef} className="flex flex-nowrap gap-3 overflow-x-auto pb-2 scrollbar-hide scroll-smooth">
                                {[
                                    { title: "Banking & Financial Services", desc: "Online transactions, customer data, digital banking" },
                                    { title: "Healthcare", desc: "Patient records, medical devices, digital platforms" },
                                    { title: "Defence & Government", desc: "National security, critical infrastructure" },
                                    { title: "IT & Software", desc: "Application, cloud & network security, privacy" },
                                    { title: "E-Commerce", desc: "Customer info, payment gateways, transactions" },
                                    { title: "Telecom & Networking", desc: "Network & infrastructure security, monitoring" },
                                ].map((item, i) => (
                                    <div key={i} className="shrink-0 w-[calc(50%-6px)] bg-white border border-[#DCE6F2] rounded-xl p-4 whitespace-normal">
                                        <h3 className="text-[13px] font-bold font-display text-[#14284E] mb-2 leading-snug">{item.title}</h3>
                                        <div className="text-[10px] uppercase tracking-[0.08em] text-[#38B2AC] font-semibold mb-1.5">Protects</div>
                                        <p className="text-[11.5px] leading-[1.5] text-[#4B5A72]">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ===================== DESKTOP LAYOUT ===================== */}
                        <div className="hidden md:grid md:grid-cols-[1.3fr_1fr] lg:grid-cols-[1.5fr_1fr] gap-6 mt-6 items-start">
                            {/* Left Column */}
                            <div className="flex flex-col gap-5">
                                <div className="w-full">
                                    <img
                                        src="https://ik.imagekit.io/ttalcskjf/IMAGE%203.webp?updatedAt=1788439003298"
                                        alt="Cyber security professionals protecting digital systems"
                                        className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover rounded-xl border border-[#DCE6F2]"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="pr-4">
                                    <p className="text-[15px] leading-relaxed text-[#4B5A72]">
                                        From banking dashboards to hospital records, every industry now
                                        runs on data and digital systems — and every one of them needs
                                        professionals who can keep that data safe.
                                    </p>
                                    <a
                                        href="/Broucher_SRMU_25_April___.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-[#14284E] text-white text-[14px] font-semibold rounded-lg hover:bg-[#1B4F91] hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg"
                                    >
                                        <Download className="w-4 h-4" />
                                        Download Brochure
                                    </a>
                                </div>
                            </div>

                            {/* Right Column (Single Column of Boxes) */}
                            <div className="flex flex-col gap-3">
                                {/* Banking */}
                                <div className="bg-white border border-[#DCE6F2] rounded-xl overflow-hidden px-4 py-3">
                                    <h3 className="text-[13.5px] font-bold font-display text-[#14284E] mb-1">Banking &amp; Financial Services</h3>
                                    <div className="text-[11px] uppercase tracking-[0.06em] text-[#718096] font-medium mb-1">Protects</div>
                                    <p className="text-[12px] leading-5 text-[#4B5A72] truncate" title="Online transactions, customer data, payment systems, digital banking">Online transactions, customer data, payment systems, digital banking</p>
                                </div>

                                {/* IT */}
                                <div className="bg-white border border-[#DCE6F2] rounded-xl overflow-hidden px-4 py-3">
                                    <h3 className="text-[13.5px] font-bold font-display text-[#14284E] mb-1">IT &amp; Software Companies</h3>
                                    <div className="text-[11px] uppercase tracking-[0.06em] text-[#718096] font-medium mb-1">Protects</div>
                                    <p className="text-[12px] leading-5 text-[#4B5A72] truncate" title="Application security, cloud protection, network security, data privacy">Application security, cloud protection, network security, data privacy</p>
                                </div>

                                {/* Healthcare */}
                                <div className="bg-white border border-[#DCE6F2] rounded-xl overflow-hidden px-4 py-3">
                                    <h3 className="text-[13.5px] font-bold font-display text-[#14284E] mb-1">Healthcare</h3>
                                    <div className="text-[11px] uppercase tracking-[0.06em] text-[#718096] font-medium mb-1">Protects</div>
                                    <p className="text-[12px] leading-5 text-[#4B5A72] truncate" title="Patient records, medical devices, healthcare applications, digital platforms">Patient records, medical devices, healthcare applications, digital platforms</p>
                                </div>

                                {/* Defence */}
                                <div className="bg-white border border-[#DCE6F2] rounded-xl overflow-hidden px-4 py-3">
                                    <h3 className="text-[13.5px] font-bold font-display text-[#14284E] mb-1">Defence &amp; Government</h3>
                                    <div className="text-[11px] uppercase tracking-[0.06em] text-[#718096] font-medium mb-1">Protects</div>
                                    <p className="text-[12px] leading-5 text-[#4B5A72] truncate" title="National security, critical infrastructure, government digital systems">National security, critical infrastructure, government digital systems</p>
                                </div>

                                {/* E-Commerce */}
                                <div className="bg-white border border-[#DCE6F2] rounded-xl overflow-hidden px-4 py-3">
                                    <h3 className="text-[13.5px] font-bold font-display text-[#14284E] mb-1">E-Commerce</h3>
                                    <div className="text-[11px] uppercase tracking-[0.06em] text-[#718096] font-medium mb-1">Protects</div>
                                    <p className="text-[12px] leading-5 text-[#4B5A72] truncate" title="Customer information, payment gateways, applications, digital transactions">Customer information, payment gateways, applications, digital transactions</p>
                                </div>

                                {/* Telecom */}
                                <div className="bg-white border border-[#DCE6F2] rounded-xl overflow-hidden px-4 py-3">
                                    <h3 className="text-[13.5px] font-bold font-display text-[#14284E] mb-1">Telecom &amp; Networking</h3>
                                    <div className="text-[11px] uppercase tracking-[0.06em] text-[#718096] font-medium mb-1">Protects</div>
                                    <p className="text-[12px] leading-5 text-[#4B5A72] truncate" title="Network protection, infrastructure security, threat monitoring">Network protection, infrastructure security, threat monitoring</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="pt-8 md:pt-10 pb-4 px-4 sm:px-6 bg-gradient-to-b from-white to-[#E0F1FF]">
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
                                        { val: "₹42 LPA", label: "Highest Package" },
                                        { val: "₹6.5 LPA", label: "Average Package" },
                                        { val: "150+", label: "Recruiting Companies" },
                                        { val: "90%+", label: "Students Placed" },
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
                                            ₹42 LPA
                                        </div>

                                        <h3 className="text-[14px] font-bold font-display text-[#14284E]">
                                            Highest Package
                                        </h3>
                                    </div>

                                    <div className="bg-white border border-[#DCE6F2] rounded-xl p-5 min-h-[90px] shadow-sm">
                                        <div className="text-[14.5px] font-semibold text-[#ffc107] mb-3">
                                            ₹6.5 LPA
                                        </div>

                                        <h3 className="text-[14px] font-bold font-display text-[#14284E]">
                                            Average Package
                                        </h3>
                                    </div>

                                    <div className="bg-white border border-[#DCE6F2] rounded-xl p-5 min-h-[90px] shadow-sm">
                                        <div className="text-[14.5px] font-semibold text-[#ffc107] mb-3">
                                            150+
                                        </div>

                                        <h3 className="text-[14px] font-bold font-display text-[#14284E]">
                                            Recruiting Companies
                                        </h3>
                                    </div>

                                    <div className="bg-white border border-[#DCE6F2] rounded-xl p-5 min-h-[90px] shadow-sm">
                                        <div className="text-[14.5px] font-semibold text-[#ffc107] mb-3">
                                            90%+
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
                <section className="pt-2 md:pt-4 pb-8 md:pb-10 px-4 sm:px-6 bg-[#E0F1FF]">
                    <div className={`${Classes["container"]} mx-auto`}>

                        {/* Heading */}
                        <div className="w-full mb-9">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Choosing Your Specialization
                            </div> */}

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.15] font-bold font-display text-[#14284E]">
                                Cyber Security vs. Other <span className="text-[#ffc107]">Specializations</span>
                            </h2>
                        </div>

                        {/* Comparison Table 1 — Mobile */}
                        <div className="sm:hidden mb-4 rounded-xl overflow-hidden border border-[#DCE6F2] bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#14284E] text-white">
                                        <th className="px-3 py-2.5 text-[12px] font-semibold">Feature</th>
                                        <th className="px-3 py-2.5 text-[12px] font-semibold">Cyber Security</th>
                                        <th className="px-3 py-2.5 text-[12px] font-semibold">CSE</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[#1B355F]">
                                    {[
                                        ["Main Focus", "Digital Security", "Computing & Software Development"],
                                        ["Programming", "High", "Very High"],
                                        ["Networking", "High", "Medium"],
                                        ["Ethical Hacking", "High", "Low"],
                                        ["Cloud Security", "High", "Medium"],
                                        ["Software Development", "Medium", "High"],
                                        ["Security Careers", "Excellent", "Good"],
                                        ["AI Integration", "Growing", "High"],
                                    ].slice(0, rm['table1'] ? undefined : 3).map(([f, cs, cse], i) => (
                                        <tr key={i} className="border-b border-[#DCE6F2] last:border-0">
                                            <td className="px-3 py-2.5 text-[12px]">{f}</td>
                                            <td className="px-3 py-2.5 text-[12px]">{cs}</td>
                                            <td className="px-3 py-2.5 text-[12px]">{cse}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button 
                                className="w-full py-2.5 flex items-center justify-center text-[#14284E] font-semibold text-[13px] border-t border-[#DCE6F2]"
                                onClick={() => toggleRm('table1')}
                            >
                                {rm['table1'] ? (
                                    <>View Less <ChevronUp className="w-4 h-4 ml-1" /></>
                                ) : (
                                    <>View More <ChevronDown className="w-4 h-4 ml-1" /></>
                                )}
                            </button>
                        </div>

                        {/* Comparison Table 2 — Mobile */}
                        <div className="sm:hidden mb-4 rounded-xl overflow-hidden border border-[#DCE6F2] bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#14284E] text-white">
                                        <th className="px-3 py-2.5 text-[12px] font-semibold">Feature</th>
                                        <th className="px-3 py-2.5 text-[12px] font-semibold">Cyber Security</th>
                                        <th className="px-3 py-2.5 text-[12px] font-semibold">AI / Data Sci</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[#1B355F]">
                                    {[
                                        ["Core Area", "Protection of systems", "Data intelligence"],
                                        ["Main Skills", "Security, Networks", "ML, Statistics"],
                                        ["Careers", "SOC Analyst", "ML Engineer"],
                                        ["Industry Demand", "Very High", "Very High"],
                                        ["Future Scope", "AI Security", "Generative AI"],
                                    ].slice(0, rm['table2'] ? undefined : 3).map(([f, cs, ai], i) => (
                                        <tr key={i} className="border-b border-[#DCE6F2] last:border-0">
                                            <td className="px-3 py-2.5 text-[12px]">{f}</td>
                                            <td className="px-3 py-2.5 text-[12px]">{cs}</td>
                                            <td className="px-3 py-2.5 text-[12px]">{ai}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button 
                                className="w-full py-2.5 flex items-center justify-center text-[#14284E] font-semibold text-[13px] border-t border-[#DCE6F2]"
                                onClick={() => toggleRm('table2')}
                            >
                                {rm['table2'] ? (
                                    <>View Less <ChevronUp className="w-4 h-4 ml-1" /></>
                                ) : (
                                    <>View More <ChevronDown className="w-4 h-4 ml-1" /></>
                                )}
                            </button>
                        </div>

                        {/* Comparison Tables — Desktop */}
                        <div className="hidden sm:flex flex-col lg:flex-row gap-6 mb-10">
                            {/* Comparison Table 1 */}
                            <div className="flex-1 overflow-x-auto bg-white border border-[#DCE6F2] rounded-xl shadow-[0_4px_20px_rgba(15,31,61,0.03)]">
                                <table className="w-full min-w-[400px] table-fixed text-left border-collapse h-full">
                                    <thead>
                                        <tr className="bg-[#F4F7FB] border-b border-[#DCE6F2] text-[#14284E]">
                                            <th className="px-4 lg:px-6 py-4 text-[14px] font-bold w-[30%]">Feature</th>
                                            <th className="px-4 lg:px-6 py-4 text-[14px] font-bold w-[35%]">Cyber Security</th>
                                            <th className="px-4 lg:px-6 py-4 text-[14px] font-bold w-[35%]">CSE</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[#4B5A72]">
                                        <tr className="border-b border-[#F0F4F8]">
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Main Focus</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Digital Security</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Computing & Software Development</td>
                                        </tr>
                                        <tr className="border-b border-[#F0F4F8]">
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Programming</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">High</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Very High</td>
                                        </tr>
                                        <tr className="border-b border-[#F0F4F8]">
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Networking</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">High</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Medium</td>
                                        </tr>
                                        <tr className="border-b border-[#F0F4F8]">
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Ethical Hacking</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">High</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Low</td>
                                        </tr>
                                        <tr className="border-b border-[#F0F4F8]">
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Cloud Security</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">High</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Medium</td>
                                        </tr>
                                        <tr className="border-b border-[#F0F4F8]">
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Software Development</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Medium</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">High</td>
                                        </tr>
                                        <tr className="border-b border-[#F0F4F8]">
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Security Careers</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Excellent</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Good</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">AI Integration</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Growing</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">High</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Comparison Table 2 */}
                            <div className="flex-1 overflow-x-auto bg-white border border-[#DCE6F2] rounded-xl shadow-[0_4px_20px_rgba(15,31,61,0.03)]">
                                <table className="w-full min-w-[400px] table-fixed text-left border-collapse h-full">
                                    <thead>
                                        <tr className="bg-[#F4F7FB] border-b border-[#DCE6F2] text-[#14284E]">
                                            <th className="px-4 lg:px-6 py-4 text-[14px] font-bold w-[30%]">Feature</th>
                                            <th className="px-4 lg:px-6 py-4 text-[14px] font-bold w-[35%]">Cyber Security</th>
                                            <th className="px-4 lg:px-6 py-4 text-[14px] font-bold w-[35%]">AI / Data Sci</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[#4B5A72]">
                                        <tr className="border-b border-[#F0F4F8]">
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Core Area</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Protection of systems</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Data intelligence</td>
                                        </tr>
                                        <tr className="border-b border-[#F0F4F8]">
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Main Skills</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Security, Networks, Defence</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">ML, Statistics, Data</td>
                                        </tr>
                                        <tr className="border-b border-[#F0F4F8]">
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Careers</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Security Engineer, SOC Analyst</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Data Scientist, ML Engineer</td>
                                        </tr>
                                        <tr className="border-b border-[#F0F4F8]">
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Industry Demand</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Very High</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Very High</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Future Scope</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">AI Security, Cloud Security</td>
                                            <td className="px-4 lg:px-6 py-4 text-[13.5px]">Generative AI, Automation</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Choose Your Path */}
                        <div className="grid md:grid-cols-2 gap-4">

                            <div className="bg-[#E6FAF8] sm:bg-white border border-[#DCE6F2] rounded-xl p-5">
                                <h3 className="text-[14.5px] font-bold font-display text-[#14284E] mb-3">
                                    Choose Cyber Security if you like:
                                </h3>

                                <ul className="space-y-2 list-none! ml-0 sm:ml-4 text-[14.5px] leading-5 text-[#4B5A72]">
                                    <li><span className="text-[#2BB5A0] sm:text-[#4B5A72]">✓</span> Solving security problems</li>
                                    <li><span className="text-[#2BB5A0] sm:text-[#4B5A72]">✓</span> Investigating technology issues</li>
                                    <li><span className="text-[#2BB5A0] sm:text-[#4B5A72]">✓</span> Understanding how systems work</li>
                                    <li><span className="text-[#2BB5A0] sm:text-[#4B5A72]">✓</span> Protecting digital information</li>
                                    <li><span className="text-[#2BB5A0] sm:text-[#4B5A72]">✓</span> Ethical hacking</li>
                                </ul>
                            </div>

                            <div className="bg-[#FFFBEB] sm:bg-white border border-[#DCE6F2] rounded-xl p-5">
                                <h3 className="text-[14.5px] font-bold font-display text-[#14284E] mb-3">
                                    Choose CSE if you like:
                                </h3>

                                <ul className="space-y-2 list-none! ml-0 sm:ml-4 text-[14.5px] leading-5 text-[#4B5A72]">
                                    <li><span className="text-[#2BB5A0] sm:text-[#4B5A72]">✓</span> Software development</li>
                                    <li><span className="text-[#2BB5A0] sm:text-[#4B5A72]">✓</span> Application building</li>
                                    <li><span className="text-[#2BB5A0] sm:text-[#4B5A72]">✓</span> Programming-heavy careers</li>
                                    <li><span className="text-[#2BB5A0] sm:text-[#4B5A72]">✓</span> Artificial Intelligence</li>
                                    <li><span className="text-[#2BB5A0] sm:text-[#4B5A72]">✓</span> Data Science</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </section>

            </main>
        </div>
    );
};

export default BTechCseCyberSecurityNew;
