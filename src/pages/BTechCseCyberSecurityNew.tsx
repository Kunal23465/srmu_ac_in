import React, { useEffect, useState } from "react";
import Classes from "../utils/styles/Global.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Download, PhoneCall, Sparkles, BookOpen, Shield, Award, Trophy, CheckCircle2, Code2, Lock, Cpu, Compass } from "lucide-react";
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
    const [activeTab, setActiveTab] = useState("year1");
    const [openSection, setOpenSection] = useState<string | null>("objectives");
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

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

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

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

                <section
                    style={{
                        backgroundImage: "url('https://ik.imagekit.io/ttalcskjf/Banner%20Image.webp')",
                    }}
                    className="relative py-16 sm:py-20 lg:py-24 w-full bg-cover bg-center bg-no-repeat overflow-hidden"
                >
                    {/* Semi-Transparent Cinematic Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#071329]/82 via-[#091a38]/70 to-[#071329]/62 backdrop-brightness-[0.95]"></div>

                    {/* Subtle Tech Cyber Grid & Ambient Lights */}
                    <div className="absolute inset-0 bg-[radial-gradient(#38bdf820_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-50"></div>
                    <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#1b4f91]/25 rounded-full blur-[130px] pointer-events-none"></div>
                    <div className="absolute top-1/2 right-4 w-80 h-80 bg-[#ffc107]/15 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className={`${Classes["container"]} mt-16 relative z-10 grid lg:grid-cols-[1.18fr_0.82fr] gap-10 lg:gap-14`}>
                        {/* Left Side */}
                        <div className="flex flex-col items-start justify-between">
                            {/* Eyebrow / Kicker */}
                            <div className="mt-20">
                                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#ffc107]/15 border border-[#ffc107]/45 backdrop-blur-md shadow-[0_0_15px_rgba(255,193,7,0.2)] mb-5 group">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc107] opacity-85"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffc107]"></span>
                                    </span>
                                    <span className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold">B.Tech CSE (Cyber Security) — with Larsen &amp; Toubro</span>
                                </div>

                                {/* H1 */}
                                <h1 className="text-[clamp(30px,4vw,46px)] leading-[1.14] font-bold font-display text-white tracking-tight mb-4.5 drop-shadow-md">
                                    B.Tech CSE (Cyber Security) College in Lucknow
                                </h1>

                                {/* H2 */}
                                <h2 className="text-[clamp(20px,2.5vw,28px)] leading-[1.2] font-bold font-display text-sky-200 mb-3 drop-shadow-sm">
                                    Learn B.Tech CSE Cyber Security with L&T at SRMU
                                </h2>

                                {/* Tagline */}
                                <div className="inline-flex items-center gap-2 mb-4.5 px-3.5 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30 backdrop-blur-sm shadow-sm">
                                    <Sparkles className="w-4 h-4 text-[#ffc107] animate-pulse" />
                                    <p className="text-[18px] text-[#ffc107] font-semibold tracking-wide">Build the Skills to Secure the Digital World</p>
                                </div>

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
                            <div className="flex flex-wrap gap-3 w-full sm:w-auto mt-[40px]" id="apply">
                                <a
                                    href="#"
                                    className="relative group overflow-hidden bg-gradient-to-r from-[#ffc107] via-[#ffcd38] to-[#e0a800] text-[#071329] font-extrabold text-[14px] px-5.5 py-3.25 rounded-md shadow-[0_8px_20px_-8px_rgba(217,139,43,0.6)] hover:shadow-[0_12px_30px_rgba(255,193,7,0.65)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <span>Apply Now</span>
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                                <a
                                    href="#"
                                    className="bg-white/12 hover:bg-white/20 text-white font-bold text-[14px] px-5.5 py-3.25 rounded-md border border-white/25 hover:border-white/50 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                >
                                    <Download className="w-4 h-4 text-sky-300" />
                                    <span>Download Brochure</span>
                                </a>
                                <a
                                    href="#"
                                    className="bg-[#1b4f91]/35 hover:bg-[#1b4f91]/60 text-sky-100 hover:text-white font-bold text-[14px] px-5.5 py-3.25 rounded-md border border-[#38bdf8]/40 hover:border-[#38bdf8]/70 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                >
                                    <PhoneCall className="w-4 h-4 text-[#ffc107]" />
                                    <span>Talk to Admission Expert</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Side - Executive Program Highlights Hub */}
                        <div className="relative w-full max-w-[450px] mx-auto lg:ml-auto">
                            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#0e2247]/90 via-[#0a1b38]/90 to-[#07142b]/95 backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
                                <div className="absolute top-0 right-0 w-44 h-44 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#ffc107]/10 rounded-full blur-3xl pointer-events-none"></div>

                                {/* Top Header Badge */}
                                <div className="flex items-center justify-between gap-2 pb-5 mb-5 border-b border-white/10 relative z-10">
                                    <div className="flex items-center gap-2.5">
                                        {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1B4F91] to-[#2563eb] text-[#ffc107] flex items-center justify-center flex-none shadow-md border border-white/10">
                                            <Shield className="w-5 h-5" />
                                        </div> */}

                                        <img className="max-w-[100px] bg-white p-2 rounded-md" src="https://ik.imagekit.io/ttalcskjf/l-t.webp" alt="l&t" />
                                        <div>
                                            <div className="text-[11px] font-mono uppercase tracking-wider text-sky-300 font-semibold">L&amp;T Academic Collaboration</div>
                                            <div className="text-white font-display font-bold text-[15.5px]">B.Tech CSE (Cyber Security)</div>
                                        </div>
                                    </div>
                                    <span className="hidden sm:inline-flex text-nowrap items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-[11px] font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                        2026-27
                                    </span>
                                </div>

                                <div className="mb-5 relative z-10">
                                    <h3 className="text-white font-display font-bold text-[19px] sm:text-[21px] tracking-tight mb-1">Industry-Ready by Design</h3>
                                    <p className="text-sky-200/80 text-[14.5px] font-medium">Cyber labs · Live projects · Certifications</p>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-3 mb-5 relative z-10">
                                    <div className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-[#ffc107]/40 rounded-2xl p-3.5 transition-all duration-300 group shadow-sm">
                                        <div className="font-display font-black text-[20px] text-[#ffc107] group-hover:text-white transition-colors">10+</div>
                                        <div className="text-[11px] text-sky-100/90 font-semibold mt-0.5">Career Roles</div>
                                    </div>
                                    <div className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-[#ffc107]/40 rounded-2xl p-3.5 transition-all duration-300 group shadow-sm">
                                        <div className="font-display font-black text-[20px] text-[#ffc107] group-hover:text-white transition-colors">7+</div>
                                        <div className="text-[11px] text-sky-100/90 font-semibold mt-0.5">Certifications</div>
                                    </div>
                                    <div className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-[#ffc107]/40 rounded-2xl p-3.5 transition-all duration-300 group shadow-sm">
                                        <div className="font-display font-black text-[20px] text-[#ffc107] group-hover:text-white transition-colors">18+</div>
                                        <div className="text-[11px] text-sky-100/90 font-semibold mt-0.5">Enterprise Tools</div>
                                    </div>
                                    <div className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-[#ffc107]/40 rounded-2xl p-3.5 transition-all duration-300 group shadow-sm">
                                        <div className="font-display font-black text-[20px] text-[#ffc107] group-hover:text-white transition-colors">4 Yrs</div>
                                        <div className="text-[11px] text-sky-100/90 font-semibold mt-0.5">Guided Journey</div>
                                    </div>
                                </div>

                                {/* Key Highlights */}
                                <div className="space-y-2.5 pt-4 border-t border-white/10 relative z-10">
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


                <div className="bg-[#081427] border-y border-white/10 py-6.5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.06),transparent_70%)] pointer-events-none"></div>
                    <div className={`${Classes["container"]} mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-5 text-center relative z-10`}>
                        <div className="p-3 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
                            <div className="font-display font-black text-[21px] text-[#ffc107] tracking-tight">27+ Yrs</div>
                            <div className="text-[14.5px] text-[#C7D7EC] mt-1 font-medium">Academic Excellence</div>
                        </div>
                        <div className="p-3 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
                            <div className="font-display font-black text-[21px] text-[#ffc107] tracking-tight">30,000+</div>
                            <div className="text-[14.5px] text-[#C7D7EC] mt-1 font-medium">Alumni Network</div>
                        </div>
                        <div className="p-3 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
                            <div className="font-display font-black text-[21px] text-[#ffc107] tracking-tight">300+</div>
                            <div className="text-[14.5px] text-[#C7D7EC] mt-1 font-medium">Recruiting Companies</div>
                        </div>
                        <div className="p-3 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
                            <div className="font-display font-black text-[21px] text-[#ffc107] tracking-tight">L&amp;T</div>
                            <div className="text-[14.5px] text-[#C7D7EC] mt-1 font-medium">Industry-Integrated Learning</div>
                        </div>
                        <div className="p-3 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5 col-span-2 md:col-span-1">
                            <div className="font-display font-black text-[21px] text-[#ffc107] tracking-tight">Modern</div>
                            <div className="text-[14.5px] text-[#C7D7EC] mt-1 font-medium">Research Infrastructure</div>
                        </div>
                    </div>
                </div>




                <section id="why" className="py-[76px] px-6">
                    <div className={`${Classes["container"]}`}>
                        <div className="max-w-[700px] mb-11">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Why Cyber Security
                            </div> */}
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">Why Study B.Tech CSE Cyber Security in 2027?</h2>
                        </div>

                        {/* Callout quote */}
                        <div className="bg-white border-l-4 border-[#ffc107] rounded-2xl p-7 sm:p-8 shadow-[0_4px_20px_rgba(15,31,61,0.06)] border-y border-r border-[#DCE6F2]/60 text-[17px] text-[#14284E] font-semibold italic mb-8">
                            "Will this course still be relevant after four years?" — For cybersecurity, the answer is yes, and the demand continues to grow.
                        </div>

                        {/* 2-Column Paragraphs & Image Integration */}
                        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center my-8">
                            <div className="space-y-4">
                                <p className="text-[#4B5A72] text-[15.5px] leading-relaxed">
                                    Cybersecurity has become important across banks, hospitals, government organizations, e-commerce, manufacturing, technology companies, and cloud-based services.
                                    As organizations adopt cloud computing, artificial intelligence, IoT, and digital payments, they need professionals who can identify vulnerabilities, protect
                                    data, and respond to security threats.
                                </p>
                                <p className="text-[#4B5A72] text-[15.5px] leading-relaxed">
                                    A B.Tech in Computer Science and Engineering with Cyber Security provides students with a foundation in both computer science and information security, making it
                                    a relevant choice for students exploring the best B.Tech college in Lucknow for future-focused engineering education.
                                </p>
                            </div>
                            <div className="rounded-2xl overflow-hidden border border-[#DCE6F2] shadow-[0_4px_16px_rgba(15,31,61,0.05)] bg-[#f0f4fa] h-[200px] sm:h-[220px] flex items-center justify-center">
                                <img src="https://ik.imagekit.io/ttalcskjf/IMAGE%201.webp" alt="Data Protection - Cyber Security Growth" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Benefit Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                            <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 rounded-2xl p-7 shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1.5 transition-all duration-300 group">
                                <h3 className="text-[16.5px] font-bold font-display text-[#14284E] group-hover:text-[#1B4F91] transition-colors mb-2.5">High Demand</h3>
                                <p className="text-[14px] text-[#4B5A72] leading-relaxed">Cybersecurity roles are growing exponentially worldwide.</p>
                            </div>
                            <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 rounded-2xl p-7 shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1.5 transition-all duration-300 group">
                                <h3 className="text-[16.5px] font-bold font-display text-[#14284E] group-hover:text-[#1B4F91] transition-colors mb-2.5">Diverse Roles</h3>
                                <p className="text-[14px] text-[#4B5A72] leading-relaxed">From analyst to architect, the field offers varied career paths.</p>
                            </div>
                            <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 rounded-2xl p-7 shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1.5 transition-all duration-300 group">
                                <h3 className="text-[16.5px] font-bold font-display text-[#14284E] group-hover:text-[#1B4F91] transition-colors mb-2.5">Critical Skills</h3>
                                <p className="text-[14px] text-[#4B5A72] leading-relaxed">Protecting data and infrastructure is non-negotiable for modern businesses.</p>
                            </div>
                            <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 rounded-2xl p-7 shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1.5 transition-all duration-300 group">
                                <h3 className="text-[16.5px] font-bold font-display text-[#14284E] group-hover:text-[#1B4F91] transition-colors mb-2.5">Global Relevance</h3>
                                <p className="text-[14px] text-[#4B5A72] leading-relaxed">Cyber threats are a global issue, making your skills transferable anywhere.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-[76px] px-6 bg-gradient-to-b from-[#F6FAFE] via-[#EAF2FB] to-[#F6FAFE]">
                    <div className={`${Classes["container"]}`}>
                        <div className="max-w-[700px] mb-11">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Program Overview
                            </div> */}
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">B.Tech CSE Cyber Security at SRMU, Lucknow</h2>
                        </div>

                        <div className="w-full">
                            <p className="text-[15.5px] text-[#4B5A72] leading-relaxed mb-5">
                                At SRMU, the B.Tech CSE Cyber Security program in Lucknow combines foundational computer science knowledge with cybersecurity concepts and practical exposure.
                            </p>

                            <p className="text-[15.5px] text-[#14284E] font-semibold mb-4">Students learn through a combination of:</p>

                            {/* Learning pills */}
                            <div className="flex flex-wrap items-center gap-2 mb-6">
                                <span className="text-[#1B355F] text-[14px] font-medium">
                                    Classroom Learning
                                </span>

                                <span className="text-[#1B4F91]">→</span>

                                <span className="text-[#1B355F] text-[14px] font-medium">
                                    Cyber Labs
                                </span>

                                <span className="text-[#1B4F91]">→</span>

                                <span className="text-[#1B355F] text-[14px] font-medium">
                                    Projects
                                </span>

                                <span className="text-[#1B4F91]">→</span>

                                <span className="text-[#1B355F] text-[14px] font-medium">
                                    Industry Sessions
                                </span>

                                <span className="text-[#1B4F91]">→</span>

                                <span className="text-[#1B355F] text-[14px] font-medium">
                                    Internships
                                </span>

                                <span className="text-[#1B4F91]">→</span>

                                <span className="text-[#1B355F] text-[14px] font-medium">
                                    Capstone Work
                                </span>
                            </div>

                            <p className="text-[15.5px] text-[#4B5A72] leading-relaxed">
                                The program is designed to help students develop practical problem-solving skills alongside their technical knowledge. For students comparing options for the Best
                                B.Tech College in Lucknow, the program's industry-integrated approach with L&T provides an additional focus on practical learning.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="py-[76px] px-6">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-8">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Quick Facts
                            </div> */}
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">Industry-Integrated Learning with L&T</h2>
                            <p className="text-[16px] text-[#4B5A72] leading-relaxed">The program incorporates industry exposure through L&amp;T, helping students understand how cybersecurity concepts are applied in professional and technology-driven environments.</p>
                        </div>
                        <div className="bg-white border border-[#DCE6F2] rounded-3xl overflow-hidden shadow-[0_6px_25px_rgba(15,31,61,0.05)]">
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
                                    ].map((row, idx) => (
                                        <tr key={idx} className={`border-b border-[#DCE6F2] ${idx % 2 === 0 ? "bg-[#F6FAFE]" : "bg-white"} hover:bg-[#F6FAFE]/70 transition-colors`}>
                                            <td className="px-6 py-4 text-[14.5px] font-semibold text-[#1B355F] w-[38%]">{row[0]}</td>
                                            <td className="px-6 py-4 text-[14.5px] text-[#4B5A72] font-medium">{row[1]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section className="py-[76px] px-6 bg-white">
                    <div className={`${Classes["container"]} mx-auto`}>

                        {/* Section Heading */}
                        <div className="max-w-[700px] mb-10">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Why Choose SRMU
                            </div> */}

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.15] font-bold font-display text-[#14284E]">
                                Learn cyber security the way the industry works
                            </h2>

                            <p className="mt-4 text-[15px] leading-6 text-[#4B5A72]">
                                From the first year, you'll build, test, analyse and secure real
                                systems — not just study theory.
                            </p>
                        </div>

                        {/* Industry Integrated Curriculum */}
                        <div className="grid lg:grid-cols-2 gap-8 items-center mb-7">

                            <div>
                                <h3 className="text-[17px] font-bold font-display text-[#14284E] mb-3">
                                    Industry Integrated Curriculum with L&T
                                </h3>

                                <p className="text-[14.5px] leading-5 text-[#4B5A72] mb-4">
                                    Strengthened through academic collaboration with L&T, the
                                    curriculum bridges university education and industry expectations
                                    through application-oriented learning, case studies and
                                    problem-solving methodologies.
                                </p>

                                <ul className="space-y-2 mb-4 list-disc list-inside">
                                    <li className="text-[14.5px] text-[#1B4F91]">Secure Software Development</li>
                                    <li className="text-[14.5px] text-[#1B4F91]">Enterprise Network Security</li>
                                    <li className="text-[14.5px] text-[#1B4F91]">Cloud Infrastructure Security</li>
                                    <li className="text-[14.5px] text-[#1B4F91]">Cyber Risk Management</li>
                                    <li className="text-[14.5px] text-[#1B4F91]">Ethical Hacking Methodologies</li>
                                    <li className="text-[14.5px] text-[#1B4F91]">Security Auditing</li>
                                    <li className="text-[14.5px] text-[#1B4F91]">Digital Forensics</li>
                                    <li className="text-[14.5px] text-[#1B4F91]">Secure Coding Practices</li>
                                    <li className="text-[14.5px] text-[#1B4F91]">AI & Cyber Security Applications</li>
                                </ul>

                                <p className="text-[14.5px] leading-5 text-[#4B5A72]">
                                    <strong className="text-[#14284E]">Outcome:</strong>{" "}
                                    Graduate with both academic knowledge and industry-relevant
                                    skills — able to combine development, networking, and defence
                                    into one skill set employers are actively hiring for.
                                </p>
                            </div>

                            {/* Image */}
                            <div>
                                <img
                                    src="https://ik.imagekit.io/ttalcskjf/IMAGE%203.webp?updatedAt=1788439003298"
                                    alt="Students learning cyber security through practical industry-oriented training"
                                    className="w-full aspect-[16/9] object-cover rounded-xl border border-[#DCE6F2]"
                                    loading="lazy"
                                />
                            </div>

                        </div>

                        {/* Cyber Security Simulation Lab */}
                        <div className="bg-white border border-[#DCE6F2] rounded-xl p-5 mb-4">
                            <h3 className="text-[17px] font-bold font-display text-[#14284E] mb-3">
                                Cyber Security Simulation Lab
                            </h3>

                            <p className="text-[14.5px] font-semibold italic text-[#ffc107] mb-1">
                                Experience real-world attack scenarios safely.
                            </p>

                            <p className="text-[14.5px] leading-5 text-[#4B5A72] mb-4">
                                Students analyse vulnerabilities, secure systems, and understand
                                how organisations defend against modern cyber threats.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Network Monitoring</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Vulnerability Assessment</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Penetration Testing</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Malware Behaviour Analysis</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Threat Detection</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Security Monitoring</span>
                            </div>
                        </div>

                        {/* Ethical Hacking Lab */}
                        <div className="bg-white border border-[#DCE6F2] rounded-xl p-5 mb-4">
                            <h3 className="text-[17px] font-bold font-display text-[#14284E] mb-3">
                                Ethical Hacking Lab
                            </h3>

                            <p className="text-[14.5px] font-semibold italic text-[#ffc107] mb-1">
                                Think like an attacker to build stronger security.
                            </p>

                            <p className="text-[14.5px] leading-5 text-[#4B5A72] mb-4">
                                Students learn ethical hacking techniques under expert supervision
                                in legal, controlled lab environments.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Password Security</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Web Application Testing</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Network Exploitation</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Wireless Security</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Reconnaissance</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Vulnerability Scanning</span>
                            </div>
                        </div>

                        {/* Digital Forensics Lab */}
                        <div className="bg-white border border-[#DCE6F2] rounded-xl p-5 mb-4">
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

                            <div className="flex flex-wrap gap-2">
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Log Analysis</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Hard Disk Investigation</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Memory Forensics</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Email Investigation</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Incident Documentation</span>
                            </div>
                        </div>

                        {/* Cloud Security Lab */}
                        <div className="bg-white border border-[#DCE6F2] rounded-xl p-5 mb-4">
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

                            <div className="flex flex-wrap gap-2">
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Identity & Access Management</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Cloud Storage Security</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Virtual Machine Security</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Secure Deployment</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Cloud Monitoring</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Multi-Cloud Architecture</span>
                            </div>
                        </div>

                        {/* SOC Learning Environment */}
                        <div className="bg-white border border-[#DCE6F2] rounded-xl p-5">
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

                            <div className="flex flex-wrap gap-2">
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">SIEM Monitoring</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Security Alerts</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Threat Intelligence</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Incident Response</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Log Correlation</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-full px-3 py-2 text-[14.5px] text-[#1B4F91]">Threat Hunting</span>
                            </div>
                        </div>

                        <div className="w-full mt-10">
                            <video
                                src="https://ik.imagekit.io/ttalcskjf/Hands_Cybersecurity.mp4"
                                controls
                                className="w-full h-full object-cover aspect-video rounded-lg" >
                            </video>
                        </div>

                    </div>
                </section>



                {/* <section id="srmu" className="py-[76px] px-6 bg-gradient-to-b from-[#F6FAFE] via-[#EAF2FB] to-[#F6FAFE]">
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
                {/* <section className="py-[76px] px-6">
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
                <section id="journey" className="py-[76px] px-6 bg-gradient-to-b from-[#F6FAFE] via-[#EAF2FB] to-[#F6FAFE]">
                    <div className={`${Classes["container"]} mx-auto`}>

                        <div className="max-w-[700px] mb-11">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Learn. Build. Secure. Lead.
                            </div> */}

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                Your journey from student to cyber security professional
                            </h2>

                            <p className="mt-4 text-[15px] leading-7 text-[#4B5A72]">
                                Every year builds on the last — combining theory, practical implementation,
                                industry exposure and certifications.
                            </p>
                        </div>

                        {/* Tab Buttons */}
                        <div className="flex flex-wrap gap-2.5 mb-6.5">
                            <button className="font-display font-semibold text-[14.5px] px-5 py-2.75 rounded-lg border-[1.5px] bg-[#14284E] border-[#14284E] text-white">
                                Year 1
                            </button>

                            <button className="font-display font-semibold text-[14.5px] px-5 py-2.75 rounded-lg border-[1.5px] bg-white border-[#DCE6F2] text-[#4B5A72]">
                                Year 2
                            </button>

                            <button className="font-display font-semibold text-[14.5px] px-5 py-2.75 rounded-lg border-[1.5px] bg-white border-[#DCE6F2] text-[#4B5A72]">
                                Year 3
                            </button>

                            <button className="font-display font-semibold text-[14.5px] px-5 py-2.75 rounded-lg border-[1.5px] bg-white border-[#DCE6F2] text-[#4B5A72]">
                                Year 4
                            </button>
                        </div>

                        {/* Year 1 Content */}
                        <div className="bg-white border border-[#DCE6F2] rounded-xl p-7.5">

                            <div className="italic text-[#ffc107] font-semibold mb-5 text-[15px]">
                                "Every cyber security expert begins by understanding how computers actually work."
                            </div>

                            <div className="grid md:grid-cols-2 gap-6.5">

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

                                <div className="md:col-span-2 mt-2 pt-4.5 border-t border-[#DCE6F2] text-[14.5px] text-[#4B5A72]">
                                    <b className="text-[#14284E]">
                                        Outcome:
                                    </b>{" "}
                                    You'll understand how computers, operating systems, and programming
                                    languages work together — the foundation for cyber security.
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={`${Classes["container"]} mx-auto mt-20`}>

                        {/* Heading */}
                        <div className="w-full mb-10">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5 font-semibold">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Program Fee & Investment
                            </div> */}

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                Transparent fee structure
                            </h2>

                            <p className="mt-4 text-[15px] leading-7 text-[#4B5A72]">
                                A quality engineering education is an investment in your future — with
                                industry-oriented learning, advanced laboratories, and placement support.
                            </p>
                        </div>

                        {/* Fee Table */}
                        <div className="overflow-x-auto rounded-xl border border-[#DCE6F2] bg-white">
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
                        <p className="mt-4 text-[14.5px] leading-5 text-[#718096]">
                            Additional charges: Alumni Fee ₹500 and Degree Fee ₹1,000
                            (payable in the final year). *One-time refundable caution money as per
                            university policy. **Hostel and transportation are optional and subject
                            to university guidelines.
                        </p>

                        {/* Scholarship Section */}
                        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 mt-10">

                            {/* Left */}
                            <div>
                                <h3 className="text-[24px] font-bold font-display text-[#14284E] mb-4">
                                    Scholarship Schemes
                                </h3>

                                <p className="text-[14px] leading-7 text-[#4B5A72] mb-5">
                                    SRMU offers limited scholarships to support meritorious and deserving students at the time of admission. Scholarships are awarded strictly as per approved eligibility criteria and are applicable only in the first year of admission.
                                </p>

                                <Link to="https://srmu.ac.in/scholarship-scheme"
                                    target="_blank"
                                    className="inline-flex items-center bg-[#ffc107] hover:bg-[#D78610] text-[#14284E] font-semibold text-[14.5px] px-5 py-3 rounded-md transition-colors"
                                >
                                    View Details →
                                </Link>
                            </div>

                            {/* Right */}







                            <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">

                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 shrink-0 rounded-full bg-[#1B5A9D] text-white flex items-center justify-center text-[11px]">
                                        ✓
                                    </span>
                                    <span className="text-[14px] leading-5 text-[#1B355F]">
                                        Merit and SET-Based scholarships applicable only for First Year.
                                    </span>
                                </div>

                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 shrink-0 rounded-full bg-[#1B5A9D] text-white flex items-center justify-center text-[11px]">
                                        ✓
                                    </span>
                                    <span className="text-[14px] leading-5 text-[#1B355F]">
                                        Merit Based Scholarship
                                    </span>
                                </div>

                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 shrink-0 rounded-full bg-[#1B5A9D] text-white flex items-center justify-center text-[11px]">
                                        ✓
                                    </span>
                                    <span className="text-[14px] leading-5 text-[#1B355F]">
                                        Scholarships are available under limited seats in all categories.
                                    </span>
                                </div>

                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 shrink-0 rounded-full bg-[#1B5A9D] text-white flex items-center justify-center text-[11px]">
                                        ✓
                                    </span>
                                    <span className="text-[14px] leading-5 text-[#1B355F]">
                                        Only one scholarship scheme can be availed by a student.
                                    </span>
                                </div>

                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 shrink-0 rounded-full bg-[#1B5A9D] text-white flex items-center justify-center text-[11px]">
                                        ✓
                                    </span>
                                    <span className="text-[14px] leading-5 text-[#1B355F]">
                                        Special scholarships are granted subject to submission of satisfactory documents and approval.

                                    </span>
                                </div>

                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 shrink-0 rounded-full bg-[#1B5A9D] text-white flex items-center justify-center text-[11px]">
                                        ✓
                                    </span>
                                    <span className="text-[14px] leading-5 text-[#1B355F]">
                                        Scholarship may be withdrawn in case of delayed or non-payment of fees.
                                    </span>
                                </div>

                                {/* <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 shrink-0 rounded-full bg-[#1B5A9D] text-white flex items-center justify-center text-[11px]">
                                        ✓
                                    </span>
                                    <span className="text-[14px] leading-5 text-[#1B355F]">
                                        Blood Relatives of Staff and Students of Ramswaroop Group
                                    </span>
                                </div>

                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 shrink-0 rounded-full bg-[#1B5A9D] text-white flex items-center justify-center text-[11px]">
                                        ✓
                                    </span>
                                    <span className="text-[14px] leading-5 text-[#1B355F]">
                                        Divyang & Female Candidates
                                    </span>
                                </div>

                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 shrink-0 rounded-full bg-[#1B5A9D] text-white flex items-center justify-center text-[11px]">
                                        ✓
                                    </span>
                                    <span className="text-[14px] leading-5 text-[#1B355F]">
                                        EWS (Economically Weaker Section)
                                    </span>
                                </div> */}

                            </div>
                        </div>

                    </div>
                </section>





                {/* <section className="py-[76px] px-6 bg-white">
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
                {/* <section className="py-[76px] px-6 bg-[#F6FAFE]">
                    <div className={`${Classes["container"]} mx-auto`}>

                        <div className="w-full mb-10">
                           

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                Industry Exposure & Cyber Security Learning at SRMU, Lucknow
                            </h2>
                            <p className="text-[14.5px] leading-5 text-[#4B5A72]">
                                Cyber security education goes beyond textbooks. At SRMU, students pursuing B.Tech CSE Cyber Security participate in industry sessions, workshops, hackathons, and expert interactions that connect academic concepts with practical security scenarios.                            </p>
                            <h3 className="text-[19px] font-bold font-display text-[#14284E]"> Industry & Expert Sessions</h3>
                            <p className="text-[14.5px] leading-5 text-[#4B5A72]">
                                Students have been exposed to topics including operational technology security, cloud security, application security, ethical hacking, networking, Android security, and generative AI.
                            </p>
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

                <section className="py-[70px] px-6 ">
                    <div className={`${Classes["container"]} mx-auto`}>

                        {/* Heading */}
                        <h2 className="text-center text-[clamp(32px,4vw,48px)] leading-[1.1] font-bold font-display text-[#07324A] mb-16">
                            PO, PLO & PSO
                        </h2>

                        {/* PROGRAM OBJECTIVES */}
                        <div className="border-t border-[#CBD5DF]">

                            <button
                                type="button"
                                onClick={() => toggleSection("objectives")}
                                className="w-full flex items-stretch text-left cursor-pointer"
                            >
                                <div className="flex-1 py-8 pr-6">
                                    <h3 className="text-[22px] font-bold text-[#102D43]">
                                        Program Objectives
                                    </h3>

                                    {openSection === "objectives" && (
                                        <ul className="mt-8 pl-5 space-y-2 text-[15.5px] leading-6 text-[#14284E] list-disc">
                                            <li>
                                                To impart deep technical knowledge about the field of
                                                computer science and engineering.
                                            </li>

                                            <li>
                                                To develop an understanding of computer science and
                                                engineering at different levels of abstraction including
                                                computer architecture and design, operating systems,
                                                database management, algorithms and applications.
                                            </li>

                                            <li>
                                                To aware students with a strong foundation in the field
                                                of Mathematical and basics of engineering fundamentals
                                                necessary to analyze and evaluate real world engineering
                                                problems and to further prepare them for higher studies,
                                                R&amp;D.
                                            </li>

                                            <li>
                                                To develop life-long learning attitude among students and
                                                to make them aware about professional and social
                                                responsibility.
                                            </li>

                                            <li>
                                                To inculcate an understanding among the students for
                                                utilizing their knowledge of computer engineering and
                                                mathematical theory to solve current and future computing
                                                problems.
                                            </li>

                                            <li>
                                                To inspire leadership and professional values in the
                                                students.
                                            </li>
                                        </ul>
                                    )}
                                </div>

                                <div className="w-[90px] shrink-0 border-l border-[#CBD5DF] flex items-start justify-center pt-7">
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
                                <div className="flex-1 py-8 pr-6">
                                    <h3 className="text-[22px] font-bold text-[#102D43]">
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

                                <div className="w-[90px] shrink-0 border-l border-[#CBD5DF] flex items-start justify-center pt-7">
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
                                <div className="flex-1 py-8 pr-6">
                                    <h3 className="text-[22px] font-bold text-[#102D43]">
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

                                <div className="w-[90px] shrink-0 border-l border-[#CBD5DF] flex items-start justify-center pt-7">
                                    <span className="text-[34px] leading-none font-light text-[#202B32]">
                                        {openSection === "specific" ? "↓" : "→"}
                                    </span>
                                </div>
                            </button>
                        </div>

                    </div>
                </section>

                <section className="py-[76px] px-6 bg-gradient-to-b from-[#F6FAFE] via-[#EAF2FB] to-[#F6FAFE]">
                    <div className={`${Classes["container"]}`}>
                        <div className="w-full mb-11">

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">
                                Industry Exposure & Cyber Security Learning at SRMU, Lucknow
                            </h2>
                            <p className="text-[16px] text-[#4B5A72] leading-relaxed">
                                Cyber security education goes beyond textbooks. At SRMU, students pursuing B.Tech CSE Cyber Security participate in industry sessions, workshops, hackathons, and
                                expert interactions that connect academic concepts with practical security scenarios.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-[19px] font-bold font-display text-[#14284E] mb-3">Industry & Expert Sessions</h3>
                            <p className="text-[15.5px] text-[#4B5A72] leading-relaxed max-w-[78ch]">
                                Students have been exposed to topics including operational technology security, cloud security, application security, ethical hacking, networking, Android security,
                                and generative AI.
                            </p>
                        </div>


                        <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/35 rounded-3xl p-8 sm:p-9 shadow-[0_4px_20px_rgba(15,31,61,0.04)] mb-7 transition-all">
                            <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-7 items-start">
                                <div>
                                    <h4 className="text-[17px] font-bold font-display text-[#14284E] mb-2">Guest Lecture: From Code to Creativity - The Rise of Generative AI</h4>
                                    <div className="text-[14px] text-[#1B4F91] mb-4">
                                        <span className="font-semibold bg-[#F6FAFE] border border-[#DCE6F2] px-3.5 py-1.5 rounded-full inline-block">15 June 2026</span>
                                    </div>
                                    <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-3.5">
                                        A guest lecture on <strong>"From Code to Creativity: The Rise of Generative AI"</strong> was conducted for B.Tech CSE Cyber Security students by{" "}
                                        <strong>Er. Subham Mishra, Automation Test Engineer, TCS, Kolkata</strong>.
                                    </p>
                                    <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-4">
                                        The session introduced participants to key concepts in generative AI and provided practical exposure to AI tools and prompt engineering techniques.
                                    </p>
                                    <div className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-2xl p-5 mt-2">
                                        <h5 className="text-[14px] font-bold text-[#14284E] mb-2.5">Key Learning Outcomes</h5>
                                        <p className="text-[14px] text-[#4B5A72] mb-2.5">Students gained:</p>
                                        <ul className="list-disc pl-5 text-[14px] text-[#4B5A72] space-y-1.5">
                                            <li>A foundation in generative AI concepts</li>
                                            <li>Practical experience with AI tools</li>
                                            <li>Understanding of prompt engineering</li>
                                            <li>Awareness of applications of AI in technology and software development</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="rounded-2xl overflow-hidden border border-[#DCE6F2] shadow-sm bg-[#f0f4fa] h-[220px] sm:h-[260px] md:h-full md:min-h-[280px] flex items-center justify-center">
                                    <img src="https://ik.imagekit.io/ttalcskjf/IMAGE%202.webp" alt="Cybersecurity System - Generative AI Guest Lecture" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>


                        <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/35 rounded-3xl p-8 sm:p-9 shadow-[0_4px_20px_rgba(15,31,61,0.04)] mb-7 transition-all">
                            <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-7 items-center">
                                <div>
                                    <h4 className="text-[17px] font-bold font-display text-[#14284E] mb-2">Guest Lecture: Securing Industrial Control Systems-OT Security</h4>
                                    <div className="text-[14px] text-[#1B4F91] mb-4">
                                        <span className="font-semibold bg-[#F6FAFE] border border-[#DCE6F2] px-3.5 py-1.5 rounded-full inline-block">
                                            Mr. Rajeev Malhotra, L&T Cyber Security Division
                                        </span>
                                    </div>
                                    <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-3.5">Topic: Securing Industrial Control Systems (OT Security)</p>
                                    <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-3.5">
                                        The session explored how Operational Technology (OT) networks used in manufacturing environments can be targeted by cyber attackers.
                                    </p>
                                    <p className="text-[14.5px] text-[#4B5A72] leading-relaxed">
                                        Students were introduced to real-world detection and response workflows used in industrial security environments, followed by a discussion on career
                                        opportunities in OT security.
                                    </p>
                                </div>
                                <div className="rounded-2xl overflow-hidden border border-[#DCE6F2] shadow-sm bg-[#f0f4fa] h-[200px] sm:h-[220px] flex items-center justify-center">
                                    <img src="https://ik.imagekit.io/ttalcskjf/IMAGE%203.webp" alt="Cyber Security Digitization - OT Security Guest Lecture" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>


                        <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/35 rounded-3xl p-8 sm:p-9 shadow-[0_4px_20px_rgba(15,31,61,0.04)] transition-all">
                            <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-7 items-start">
                                <div>
                                    <h4 className="text-[17px] font-bold font-display text-[#14284E] mb-2">INDUSTRY WORKSHOP: Networking with Ethical Hacking & Android Development</h4>
                                    <div className="text-[14px] text-[#1B4F91] mb-4">
                                        <span className="font-semibold bg-[#F6FAFE] border border-[#DCE6F2] px-3.5 py-1.5 rounded-full inline-block">26 March 2025</span>
                                    </div>
                                    <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-3.5">
                                        A workshop on <strong>"Networking with Ethical Hacking & Android Development"</strong> was conducted by{" "}
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
                                <div className="rounded-2xl overflow-hidden border border-[#DCE6F2] shadow-sm bg-[#f0f4fa] h-[220px] sm:h-[260px] md:h-full md:min-h-[280px] flex items-center justify-center">
                                    <img src="https://ik.imagekit.io/ttalcskjf/IMAGE%204.webp" alt="Network Configuration - Ethical Hacking Workshop" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
                <section className="py-[76px] px-6 bg-white">
                    <div className={`${Classes["container"]} mx-auto`}>

                        {/* Heading */}
                        <div className="max-w-[600px] mb-10">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Industries Hiring
                            </div> */}

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.15] font-bold font-display text-[#14284E]">
                                Where digital systems need protecting
                            </h2>
                        </div>

                        {/* Image + Description */}
                        <div className="flex flex-col md:flex-row items-center gap-5 mb-6">

                            <div className="w-full md:w-[52%]">
                                <img
                                    src="https://ik.imagekit.io/ttalcskjf/IMAGE%203.webp?updatedAt=1788439003298"
                                    alt="Cyber security professionals protecting digital systems"
                                    className="w-full aspect-[16/9] object-cover rounded-xl border border-[#DCE6F2]"
                                    loading="lazy"
                                />
                            </div>

                            <div className="w-full md:w-[48%]">
                                <p className="text-[14.5px] leading-5 text-[#4B5A72]">
                                    From banking dashboards to hospital records, every industry now
                                    runs on data and digital systems — and every one of them needs
                                    professionals who can keep that data safe.
                                </p>
                            </div>

                        </div>

                        {/* Industry Cards */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                            {/* Banking */}
                            <div className="bg-white border border-[#DCE6F2] rounded-xl p-5">
                                <h3 className="text-[14.5px] font-bold font-display text-[#14284E] mb-3">
                                    Banking & Financial Services
                                </h3>

                                <div className="text-[14.5px] uppercase tracking-[0.06em] text-[#718096] mb-2">
                                    Protects
                                </div>

                                <p className="text-[12.5px] leading-5 text-[#4B5A72]">
                                    Online transactions, customer data, payment systems, digital banking
                                </p>
                            </div>

                            {/* Healthcare */}
                            <div className="bg-white border border-[#DCE6F2] rounded-xl p-5">
                                <h3 className="text-[14.5px] font-bold font-display text-[#14284E] mb-3">
                                    Healthcare
                                </h3>

                                <div className="text-[14.5px] uppercase tracking-[0.06em] text-[#718096] mb-2">
                                    Protects
                                </div>

                                <p className="text-[12.5px] leading-5 text-[#4B5A72]">
                                    Patient records, medical devices, healthcare applications, digital platforms
                                </p>
                            </div>

                            {/* Defence */}
                            <div className="bg-white border border-[#DCE6F2] rounded-xl p-5">
                                <h3 className="text-[14.5px] font-bold font-display text-[#14284E] mb-3">
                                    Defence & Government
                                </h3>

                                <div className="text-[14.5px] uppercase tracking-[0.06em] text-[#718096] mb-2">
                                    Protects
                                </div>

                                <p className="text-[12.5px] leading-5 text-[#4B5A72]">
                                    National security, critical infrastructure, government digital systems
                                </p>
                            </div>

                            {/* IT */}
                            <div className="bg-white border border-[#DCE6F2] rounded-xl p-5">
                                <h3 className="text-[14.5px] font-bold font-display text-[#14284E] mb-3">
                                    IT & Software Companies
                                </h3>

                                <div className="text-[14.5px] uppercase tracking-[0.06em] text-[#718096] mb-2">
                                    Protects
                                </div>

                                <p className="text-[12.5px] leading-5 text-[#4B5A72]">
                                    Application security, cloud protection, network security, data privacy
                                </p>
                            </div>

                            {/* E-Commerce */}
                            <div className="bg-white border border-[#DCE6F2] rounded-xl p-5">
                                <h3 className="text-[14.5px] font-bold font-display text-[#14284E] mb-3">
                                    E-Commerce
                                </h3>

                                <div className="text-[14.5px] uppercase tracking-[0.06em] text-[#718096] mb-2">
                                    Protects
                                </div>

                                <p className="text-[12.5px] leading-5 text-[#4B5A72]">
                                    Customer information, payment gateways, applications, digital transactions
                                </p>
                            </div>

                            {/* Telecom */}
                            <div className="bg-white border border-[#DCE6F2] rounded-xl p-5">
                                <h3 className="text-[14.5px] font-bold font-display text-[#14284E] mb-3">
                                    Telecom & Networking
                                </h3>

                                <div className="text-[14.5px] uppercase tracking-[0.06em] text-[#718096] mb-2">
                                    Protects
                                </div>

                                <p className="text-[12.5px] leading-5 text-[#4B5A72]">
                                    Network protection, infrastructure security, threat monitoring
                                </p>
                            </div>

                        </div>

                    </div>
                </section>
                <section className="py-[76px] px-6  bg-gradient-to-b from-[#F6FAFE] via-[#EAF2FB] to-[#F6FAFE]">
                    <div className={`${Classes["container"]} mx-auto`}>

                        {/* Heading */}
                        <div className="max-w-[700px] mb-10">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Placements & Recruitment
                            </div> */}

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                Where our students get placed
                            </h2>

                            <p className="mt-4 text-[15px] leading-6 text-[#4B5A72] max-w-[650px]">
                                Dedicated placement training — resume building, coding practice,
                                mock interviews and group discussions — starts from the final year.
                            </p>
                        </div>

                        {/* Placement Stats + Image */}
                        <div className="grid lg:grid-cols-2 gap-5 items-center">

                            {/* Stats */}
                            <div className="grid sm:grid-cols-2 gap-4">

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

                            {/* Placement Image */}
                            <div className="w-full">
                                <img
                                    src="https://ik.imagekit.io/ttalcskjf/IMAGE%202.webp?updatedAt=1788439003256"
                                    alt="Student preparing for career and placement"
                                    className="w-full aspect-[16/10] object-cover rounded-xl border border-[#DCE6F2]"
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
                                <div className="flex gap-2">
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

                            <div className="overflow-hidden" ref={emblaRef}>
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

                    </div>
                </section>
                <section className="py-[76px] px-6 ">
                    <div className={`${Classes["container"]} mx-auto`}>

                        {/* Heading */}
                        <div className="max-w-[650px] mb-9">
                            {/* <div className="text-[14.5px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Choosing Your Specialization
                            </div> */}

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.15] font-bold font-display text-[#14284E]">
                                Cyber Security vs. other specializations
                            </h2>
                        </div>

                        {/* Comparison Table 1 */}
                        <div className="overflow-x-auto mb-4">
                            <table className="w-full min-w-[700px] text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#EAF2FB] text-[#14284E]">
                                        <th className="px-3 py-3 text-[14.5px] font-semibold rounded-tl-lg">
                                            Feature
                                        </th>
                                        <th className="px-3 py-3 text-[14.5px] font-semibold">
                                            B.Tech Cyber Security
                                        </th>
                                        <th className="px-3 py-3 text-[14.5px] font-semibold rounded-tr-lg">
                                            B.Tech CSE
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="text-[#1B355F]">
                                    <tr className="border-b border-[#DCE6F2]">
                                        <td className="px-3 py-3 text-[14.5px]">Main Focus</td>
                                        <td className="px-3 py-3 text-[14.5px]">Digital Security</td>
                                        <td className="px-3 py-3 text-[14.5px]">Computing & Software Development</td>
                                    </tr>

                                    <tr className="border-b border-[#DCE6F2]">
                                        <td className="px-3 py-3 text-[14.5px]">Programming</td>
                                        <td className="px-3 py-3 text-[14.5px]">High</td>
                                        <td className="px-3 py-3 text-[14.5px]">Very High</td>
                                    </tr>

                                    <tr className="border-b border-[#DCE6F2]">
                                        <td className="px-3 py-3 text-[14.5px]">Networking</td>
                                        <td className="px-3 py-3 text-[14.5px]">High</td>
                                        <td className="px-3 py-3 text-[14.5px]">Medium</td>
                                    </tr>

                                    <tr className="border-b border-[#DCE6F2]">
                                        <td className="px-3 py-3 text-[14.5px]">Ethical Hacking</td>
                                        <td className="px-3 py-3 text-[14.5px]">High</td>
                                        <td className="px-3 py-3 text-[14.5px]">Low</td>
                                    </tr>

                                    <tr className="border-b border-[#DCE6F2]">
                                        <td className="px-3 py-3 text-[14.5px]">Cloud Security</td>
                                        <td className="px-3 py-3 text-[14.5px]">High</td>
                                        <td className="px-3 py-3 text-[14.5px]">Medium</td>
                                    </tr>

                                    <tr className="border-b border-[#DCE6F2]">
                                        <td className="px-3 py-3 text-[14.5px]">Software Development</td>
                                        <td className="px-3 py-3 text-[14.5px]">Medium</td>
                                        <td className="px-3 py-3 text-[14.5px]">High</td>
                                    </tr>

                                    <tr className="border-b border-[#DCE6F2]">
                                        <td className="px-3 py-3 text-[14.5px]">Security Careers</td>
                                        <td className="px-3 py-3 text-[14.5px]">Excellent</td>
                                        <td className="px-3 py-3 text-[14.5px]">Good</td>
                                    </tr>

                                    <tr>
                                        <td className="px-3 py-3 text-[14.5px]">AI Integration</td>
                                        <td className="px-3 py-3 text-[14.5px]">Growing</td>
                                        <td className="px-3 py-3 text-[14.5px]">High</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Comparison Table 2 */}
                        <div className="overflow-x-auto mb-7">
                            <table className="w-full min-w-[700px] text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#EAF2FB] text-[#14284E]">
                                        <th className="px-3 py-3 text-[14.5px] font-semibold rounded-tl-lg">
                                            Feature
                                        </th>
                                        <th className="px-3 py-3 text-[14.5px] font-semibold">
                                            Cyber Security
                                        </th>
                                        <th className="px-3 py-3 text-[14.5px] font-semibold rounded-tr-lg">
                                            AI / Data Science
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="text-[#1B355F]">
                                    <tr className="border-b border-[#DCE6F2]">
                                        <td className="px-3 py-3 text-[14.5px]">Core Area</td>
                                        <td className="px-3 py-3 text-[14.5px]">Protection of systems</td>
                                        <td className="px-3 py-3 text-[14.5px]">Data intelligence</td>
                                    </tr>

                                    <tr className="border-b border-[#DCE6F2]">
                                        <td className="px-3 py-3 text-[14.5px]">Main Skills</td>
                                        <td className="px-3 py-3 text-[14.5px]">Security, Networks, Defence</td>
                                        <td className="px-3 py-3 text-[14.5px]">ML, Statistics, Data</td>
                                    </tr>

                                    <tr className="border-b border-[#DCE6F2]">
                                        <td className="px-3 py-3 text-[14.5px]">Careers</td>
                                        <td className="px-3 py-3 text-[14.5px]">Security Engineer, SOC Analyst</td>
                                        <td className="px-3 py-3 text-[14.5px]">Data Scientist, ML Engineer</td>
                                    </tr>

                                    <tr className="border-b border-[#DCE6F2]">
                                        <td className="px-3 py-3 text-[14.5px]">Industry Demand</td>
                                        <td className="px-3 py-3 text-[14.5px]">Very High</td>
                                        <td className="px-3 py-3 text-[14.5px]">Very High</td>
                                    </tr>

                                    <tr>
                                        <td className="px-3 py-3 text-[14.5px]">Future Scope</td>
                                        <td className="px-3 py-3 text-[14.5px]">AI Security, Cloud Security</td>
                                        <td className="px-3 py-3 text-[14.5px]">Generative AI, Automation</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Choose Your Path */}
                        <div className="grid md:grid-cols-2 gap-4">

                            <div className="bg-white border border-[#DCE6F2] rounded-xl p-5">
                                <h3 className="text-[14.5px] font-bold font-display text-[#14284E] mb-3">
                                    Choose Cyber Security if you like:
                                </h3>

                                <ul className="space-y-2 ml-4 text-[14.5px] leading-5 text-[#4B5A72]">
                                    <li>✓ Solving security problems</li>
                                    <li>✓ Investigating technology issues</li>
                                    <li>✓ Understanding how systems work</li>
                                    <li>✓ Protecting digital information</li>
                                    <li>✓ Ethical hacking</li>
                                </ul>
                            </div>

                            <div className="bg-white border border-[#DCE6F2] rounded-xl p-5">
                                <h3 className="text-[14.5px] font-bold font-display text-[#14284E] mb-3">
                                    Choose CSE if you like:
                                </h3>

                                <ul className="space-y-2 ml-4 text-[14.5px] leading-5 text-[#4B5A72]">
                                    <li>✓ Software development</li>
                                    <li>✓ Application building</li>
                                    <li>✓ Programming-heavy careers</li>
                                    <li>✓ Artificial Intelligence</li>
                                    <li>✓ Data Science</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </section>

                {/* ============================================================
                CAREER PATHWAYS
                ============================================================ */}
                {/* <section className="py-[76px] px-6">
                    <div className={`${Classes["container"]} mx-auto`}>
                        <div className="max-w-[700px] mb-11">
                           
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">Your Future in Cyber Security</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6.5 perspective-[1200px]">
                          
                            <div className="relative h-[260px] group [perspective:1200px]">
                                <div className="relative w-full h-full text-left transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl p-7 flex flex-col bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 shadow-[0_4px_20px_rgba(15,31,61,0.04)] transition-all">
                                        <div className="w-12 h-12 rounded-xl bg-[#F6FAFE] border border-[#DCE6F2] flex items-center justify-center text-[22px] mb-4 shadow-sm">🛡️</div>
                                        <h3 className="text-[16.5px] font-bold font-display text-[#14284E] mb-2 leading-[1.25]">Security Analyst</h3>
                                        <div className="text-[14.5px] text-[#4B5A72] italic leading-relaxed">Monitor and defend network infrastructure.</div>
                                        <div className="mt-auto text-[10.5px] text-[#1B4F91] font-bold uppercase tracking-[0.06em] flex items-center gap-1.5">Hover to learn more →</div>
                                    </div>
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl p-7 flex flex-col bg-gradient-to-br from-[#14284E] to-[#0A1E3F] text-white [transform:rotateY(180deg)] overflow-hidden shadow-xl border border-white/10">
                                        <div className="text-[10px] uppercase text-[#ffc107] font-bold tracking-[0.08em] mb-2 mt-1 first:mt-0">Key Skills</div>
                                        <div className="text-[12.5px] text-[#DCE6F2] leading-relaxed">Network Security, SIEM, Vulnerability Management, Incident Response</div>
                                        <div className="text-[10px] uppercase text-[#ffc107] font-bold tracking-[0.08em] mb-2 mt-3.5">Average Salary (INR)</div>
                                        <div className="text-[12.5px] text-[#DCE6F2] font-semibold">6-12 LPA</div>
                                    </div>
                                </div>
                            </div>

                        
                            <div className="relative h-[260px] group [perspective:1200px]">
                                <div className="relative w-full h-full text-left transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl p-7 flex flex-col bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 shadow-[0_4px_20px_rgba(15,31,61,0.04)] transition-all">
                                        <div className="w-12 h-12 rounded-xl bg-[#F6FAFE] border border-[#DCE6F2] flex items-center justify-center text-[22px] mb-4 shadow-sm">🔍</div>
                                        <h3 className="text-[16.5px] font-bold font-display text-[#14284E] mb-2 leading-[1.25]">Penetration Tester</h3>
                                        <div className="text-[14.5px] text-[#4B5A72] italic leading-relaxed">Ethically hack systems to find vulnerabilities.</div>
                                        <div className="mt-auto text-[10.5px] text-[#1B4F91] font-bold uppercase tracking-[0.06em] flex items-center gap-1.5">Hover to learn more →</div>
                                    </div>
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl p-7 flex flex-col bg-gradient-to-br from-[#14284E] to-[#0A1E3F] text-white [transform:rotateY(180deg)] overflow-hidden shadow-xl border border-white/10">
                                        <div className="text-[10px] uppercase text-[#ffc107] font-bold tracking-[0.08em] mb-2 mt-1 first:mt-0">Key Skills</div>
                                        <div className="text-[12.5px] text-[#DCE6F2] leading-relaxed">Web App Security, Network Security, Ethical Hacking, Python, Kali Linux</div>
                                        <div className="text-[10px] uppercase text-[#ffc107] font-bold tracking-[0.08em] mb-2 mt-3.5">Average Salary (INR)</div>
                                        <div className="text-[12.5px] text-[#DCE6F2] font-semibold">8-15 LPA</div>
                                    </div>
                                </div>
                            </div>

                        
                            <div className="relative h-[260px] group [perspective:1200px]">
                                <div className="relative w-full h-full text-left transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl p-7 flex flex-col bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 shadow-[0_4px_20px_rgba(15,31,61,0.04)] transition-all">
                                        <div className="w-12 h-12 rounded-xl bg-[#F6FAFE] border border-[#DCE6F2] flex items-center justify-center text-[22px] mb-4 shadow-sm">⚖️</div>
                                        <h3 className="text-[16.5px] font-bold font-display text-[#14284E] mb-2 leading-[1.25]">Security Architect</h3>
                                        <div className="text-[14.5px] text-[#4B5A72] italic leading-relaxed">Design and build secure systems from the ground up.</div>
                                        <div className="mt-auto text-[10.5px] text-[#1B4F91] font-bold uppercase tracking-[0.06em] flex items-center gap-1.5">Hover to learn more →</div>
                                    </div>
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl p-7 flex flex-col bg-gradient-to-br from-[#14284E] to-[#0A1E3F] text-white [transform:rotateY(180deg)] overflow-hidden shadow-xl border border-white/10">
                                        <div className="text-[10px] uppercase text-[#ffc107] font-bold tracking-[0.08em] mb-2 mt-1 first:mt-0">Key Skills</div>
                                        <div className="text-[12.5px] text-[#DCE6F2] leading-relaxed">Security Design, Cloud Security, Cryptography, Network Architecture, Risk Management</div>
                                        <div className="text-[10px] uppercase text-[#ffc107] font-bold tracking-[0.08em] mb-2 mt-3.5">Average Salary (INR)</div>
                                        <div className="text-[12.5px] text-[#DCE6F2] font-semibold">15-25 LPA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* ============================================================
                QUICK FACTS
                ============================================================ */}


                {/* ============================================================
                FEE & ADMISSION
                ============================================================ */}
                {/* <section id="fee" className="py-[76px] px-6 ">
                    <div className={`${Classes["container"]} mx-auto`}>
                        <div className="max-w-[700px] mb-11">

                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">Start Your Journey with SRMU</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">

                            <div className="bg-white border border-[#DCE6F2] rounded-3xl p-7 sm:p-8 shadow-[0_6px_25px_rgba(15,31,61,0.05)]">
                                <h3 className="text-[19px] font-bold font-display text-[#14284E] mb-5">Program Fee</h3>
                                <div className="rounded-2xl border border-[#DCE6F2] overflow-hidden">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="px-5 py-4 text-left text-[12.5px] font-semibold uppercase tracking-[0.04em] bg-[#14284E] text-white">Particulars</th>
                                                <th className="px-5 py-4 text-left text-[12.5px] font-semibold uppercase tracking-[0.04em] bg-[#14284E] text-white">Amount (INR)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-[#DCE6F2] hover:bg-[#F6FAFE]/60 transition-colors">
                                                <td className="px-5 py-3.5 text-[14px] text-[#14284E]">Tuition Fee (per year)</td>
                                                <td className="px-5 py-3.5 text-[14px] text-[#14284E] font-bold">₹1,50,000</td>
                                            </tr>
                                            <tr className="border-b border-[#DCE6F2] bg-[#F6FAFE]/60 hover:bg-[#F6FAFE] transition-colors">
                                                <td className="px-5 py-3.5 text-[14px] text-[#14284E]">Academic Services Fee (per year)</td>
                                                <td className="px-5 py-3.5 text-[14px] text-[#14284E]">₹25,000</td>
                                            </tr>
                                            <tr className="border-b border-[#DCE6F2] hover:bg-[#F6FAFE]/60 transition-colors">
                                                <td className="px-5 py-3.5 text-[14px] text-[#14284E]">Security Deposit (Refundable)</td>
                                                <td className="px-5 py-3.5 text-[14px] text-[#14284E]">₹10,000</td>
                                            </tr>
                                            <tr className="bg-[#14284E]/5 font-bold">
                                                <td className="px-5 py-4 text-[14px] text-[#14284E] font-bold">Total (per year)</td>
                                                <td className="px-5 py-4 text-[14px] text-[#14284E] font-bold text-[#1B4F91]">₹1,85,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-[14.5px] text-[#7688A2] mt-4 leading-relaxed">* Fees are subject to revision. Scholarships available for meritorious students.</div>
                            </div>


                            <div className="bg-white border border-[#DCE6F2] rounded-3xl p-7 sm:p-8 shadow-[0_6px_25px_rgba(15,31,61,0.05)]">
                                <h3 className="text-[19px] font-bold font-display text-[#14284E] mb-6">Admission Process</h3>
                                <div className="space-y-6 relative before:absolute before:left-5 before:top-4 before:bottom-4 before:w-[2px] before:bg-[#DCE6F2]">
                                    <div className="flex gap-4 items-start relative z-10">
                                        <div className="w-10 h-10 rounded-xl bg-[#14284E] text-[#ffc107] flex items-center justify-center font-display font-bold flex-none shadow-sm text-[15px]">
                                            1
                                        </div>
                                        <div className="pt-0.5">
                                            <h4 className="text-[16px] font-bold font-display text-[#14284E] mb-1">Fill Application</h4>
                                            <p className="text-[14px] text-[#4B5A72] leading-relaxed">Complete the online application form on the SRMU website.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start relative z-10">
                                        <div className="w-10 h-10 rounded-xl bg-[#14284E] text-[#ffc107] flex items-center justify-center font-display font-bold flex-none shadow-sm text-[15px]">
                                            2
                                        </div>
                                        <div className="pt-0.5">
                                            <h4 className="text-[16px] font-bold font-display text-[#14284E] mb-1">Entrance & Counselling</h4>
                                            <p className="text-[14px] text-[#4B5A72] leading-relaxed">Appear for the university entrance exam or qualifying exam and attend the counselling process.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start relative z-10">
                                        <div className="w-10 h-10 rounded-xl bg-[#14284E] text-[#ffc107] flex items-center justify-center font-display font-bold flex-none shadow-sm text-[15px]">
                                            3
                                        </div>
                                        <div className="pt-0.5">
                                            <h4 className="text-[16px] font-bold font-display text-[#14284E] mb-1">Document Verification</h4>
                                            <p className="text-[14px] text-[#4B5A72] leading-relaxed">Verify your academic documents and eligibility.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start relative z-10">
                                        <div className="w-10 h-10 rounded-xl bg-[#14284E] text-[#ffc107] flex items-center justify-center font-display font-bold flex-none shadow-sm text-[15px]">
                                            4
                                        </div>
                                        <div className="pt-0.5">
                                            <h4 className="text-[16px] font-bold font-display text-[#14284E] mb-1">Fee Payment & Enrollment</h4>
                                            <p className="text-[14px] text-[#4B5A72] leading-relaxed">Pay the admission fee to secure your seat and complete enrollment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* ============================================================
                FINAL CTA
                ============================================================ */}
                <section className="py-[76px]  bg-gradient-to-b from-[#F6FAFE] via-[#EAF2FB] to-[#F6FAFE]">
                    <div className={`${Classes["container"]} px-6`}>
                        <div className="text-center bg-gradient-to-br from-[#071329] via-[#0e2144] to-[#14284E] rounded-3xl py-16 sm:py-20 px-8 sm:px-12 shadow-[0_20px_60px_-15px_rgba(20,40,78,0.45)] border border-white/10 relative overflow-hidden">
                            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1b4f91]/40 rounded-full blur-[100px] pointer-events-none"></div>
                            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#ffc107]/20 rounded-full blur-[100px] pointer-events-none"></div>

                            <div className="relative z-10">
                                <h2 className="text-[clamp(24px,3.2vw,34px)] font-bold font-display text-white mb-3.5 tracking-tight">Admissions Open</h2>
                                <p className="text-[#C7D3E6] text-[15.5px] max-w-[52ch] mx-auto mb-8 leading-relaxed font-normal">
                                    Talk to an admission expert, download the brochure, or check your scholarship eligibility today.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <a
                                        href="#"
                                        className="bg-gradient-to-r from-[#ffc107] via-[#ffcd38] to-[#e0a800] text-[#071329] font-extrabold text-[14px] px-8 py-3.5 rounded-xl shadow-[0_8px_25px_rgba(255,193,7,0.4)] hover:shadow-[0_12px_30px_rgba(255,193,7,0.6)] transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
                                    >
                                        <span>Apply Now</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-white/12 hover:bg-white/20 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl border border-white/25 hover:border-white/50 backdrop-blur-md shadow-md transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
                                    >

                                        <span>Calculate Scholarship</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default BTechCseCyberSecurityNew;
