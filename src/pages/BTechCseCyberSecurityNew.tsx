import React, { useState } from "react";
import Classes from "../utils/styles/Global.module.css";
import {
    ArrowRight,
    Download,
    PhoneCall,
    Sparkles,
    BookOpen,
    Shield,
    Award,
    Trophy,
    CheckCircle2,
    Code2,
    Lock,
    Cpu,
    Compass
} from "lucide-react";

const BTechCseCyberSecurityNew = () => {
    const [activeTab, setActiveTab] = useState("year1");

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
                {/* ============================================================
                BANNER / HERO SECTION
                ============================================================ */}
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

                    <div className={`${Classes["container"]} mt-16 relative z-10 grid lg:grid-cols-[1.18fr_0.82fr] gap-10 lg:gap-14 items-center`}>
                        {/* Left Side */}
                        <div className="flex flex-col items-start">
                            {/* Eyebrow / Kicker */}
                            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#ffc107]/15 border border-[#ffc107]/45 backdrop-blur-md shadow-[0_0_15px_rgba(255,193,7,0.2)] mb-5 group">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc107] opacity-85"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffc107]"></span>
                                </span>
                                <span className="text-[12px] tracking-[0.08em] uppercase text-[#ffc107] font-bold">
                                    B.Tech CSE (Cyber Security) — with Larsen &amp; Toubro
                                </span>
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
                                <p className="text-[18px] text-[#ffc107] font-semibold tracking-wide">
                                    Build the Skills to Secure the Digital World
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-[15.5px] text-[#D4E2F4] leading-relaxed mb-5.5 max-w-[56ch]">
                                Pursue B.Tech CSE (Cyber Security) in Lucknow at Shri Ramswaroop Memorial University (SRMU) and develop the technical skills needed to understand, protect, and secure modern digital systems. SRMU is among the institutions students consider when looking for the best B.Tech college in Lucknow for industry-oriented engineering education.
                            </p>

                            {/* Checklist */}
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 gap-x-4.5 w-full mb-7.5">
                                <li className="flex gap-2 items-start text-[14.5px] text-white font-medium">
                                    <span className="text-[#071329] bg-gradient-to-tr from-[#ffc107] to-[#ffe082] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] mt-0.5 flex-none shadow-[0_0_10px_rgba(255,193,7,0.5)]">✓</span>
                                    Industry-integrated learning with L&T
                                </li>
                                <li className="flex gap-2 items-start text-[14.5px] text-white font-medium">
                                    <span className="text-[#071329] bg-gradient-to-tr from-[#ffc107] to-[#ffe082] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] mt-0.5 flex-none shadow-[0_0_10px_rgba(255,193,7,0.5)]">✓</span>
                                    Hands-on cybersecurity laboratory exposure
                                </li>
                                <li className="flex gap-2 items-start text-[14.5px] text-white font-medium">
                                    <span className="text-[#071329] bg-gradient-to-tr from-[#ffc107] to-[#ffe082] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] mt-0.5 flex-none shadow-[0_0_10px_rgba(255,193,7,0.5)]">✓</span>
                                    Live projects and capstone development
                                </li>
                                <li className="flex gap-2 items-start text-[14.5px] text-white font-medium">
                                    <span className="text-[#071329] bg-gradient-to-tr from-[#ffc107] to-[#ffe082] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] mt-0.5 flex-none shadow-[0_0_10px_rgba(255,193,7,0.5)]">✓</span>
                                    Industry sessions and workshops
                                </li>
                                <li className="flex gap-2 items-start text-[14.5px] text-white font-medium sm:col-span-2">
                                    <span className="text-[#071329] bg-gradient-to-tr from-[#ffc107] to-[#ffe082] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] mt-0.5 flex-none shadow-[0_0_10px_rgba(255,193,7,0.5)]">✓</span>
                                    Internship and placement support
                                </li>
                            </ul>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-3 w-full sm:w-auto" id="apply">
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
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1B4F91] to-[#2563eb] text-[#ffc107] flex items-center justify-center flex-none shadow-md border border-white/10">
                                            <Shield className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-[11px] font-mono uppercase tracking-wider text-sky-300 font-semibold">
                                                L&amp;T Academic Collaboration
                                            </div>
                                            <div className="text-white font-display font-bold text-[15.5px]">
                                                B.Tech CSE (Cyber Security)
                                            </div>
                                        </div>
                                    </div>
                                    <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-[11px] font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                        2026-27
                                    </span>
                                </div>

                                <div className="mb-5 relative z-10">
                                    <h3 className="text-white font-display font-bold text-[19px] sm:text-[21px] tracking-tight mb-1">
                                        Industry-Ready by Design
                                    </h3>
                                    <p className="text-sky-200/80 text-[13.5px] font-medium">
                                        Cyber labs · Live projects · Certifications
                                    </p>
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

                {/* ============================================================
                TRUST BAR
                ============================================================ */}
                <div className="bg-[#081427] border-y border-white/10 py-6.5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.06),transparent_70%)] pointer-events-none"></div>
                    <div className={`${Classes["container"]} mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-5 text-center relative z-10`}>
                        <div className="p-3 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
                            <div className="font-display font-black text-[21px] text-[#ffc107] tracking-tight">27+ Yrs</div>
                            <div className="text-[12px] text-[#C7D7EC] mt-1 font-medium">Academic Excellence</div>
                        </div>
                        <div className="p-3 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
                            <div className="font-display font-black text-[21px] text-[#ffc107] tracking-tight">30,000+</div>
                            <div className="text-[12px] text-[#C7D7EC] mt-1 font-medium">Alumni Network</div>
                        </div>
                        <div className="p-3 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
                            <div className="font-display font-black text-[21px] text-[#ffc107] tracking-tight">300+</div>
                            <div className="text-[12px] text-[#C7D7EC] mt-1 font-medium">Recruiting Companies</div>
                        </div>
                        <div className="p-3 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
                            <div className="font-display font-black text-[21px] text-[#ffc107] tracking-tight">L&amp;T</div>
                            <div className="text-[12px] text-[#C7D7EC] mt-1 font-medium">Industry-Integrated Learning</div>
                        </div>
                        <div className="p-3 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5 col-span-2 md:col-span-1">
                            <div className="font-display font-black text-[21px] text-[#ffc107] tracking-tight">Modern</div>
                            <div className="text-[12px] text-[#C7D7EC] mt-1 font-medium">Research Infrastructure</div>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                WHY STUDY B.TECH CSE CYBER SECURITY IN 2027?
                ============================================================ */}
                <section id="why" className="py-[76px] px-6">
                    <div className={`${Classes["container"]}`}>
                        <div className="max-w-[700px] mb-11">
                            <div className="text-[12px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Why Cyber Security
                            </div>
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">
                                Why Study B.Tech CSE Cyber Security in 2027?
                            </h2>
                        </div>

                        {/* Callout quote */}
                        <div className="bg-white border-l-4 border-[#ffc107] rounded-2xl p-7 sm:p-8 shadow-[0_4px_20px_rgba(15,31,61,0.06)] border-y border-r border-[#DCE6F2]/60 text-[17px] text-[#14284E] font-semibold italic mb-8">
                            "Will this course still be relevant after four years?" — For cybersecurity, the answer is yes, and the demand continues to grow.
                        </div>

                        {/* 2-Column Paragraphs & Image Integration */}
                        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center my-8">
                            <div className="space-y-4">
                                <p className="text-[#4B5A72] text-[15.5px] leading-relaxed">
                                    Cybersecurity has become important across banks, hospitals, government organizations, e-commerce, manufacturing, technology companies, and cloud-based services. As organizations adopt cloud computing, artificial intelligence, IoT, and digital payments, they need professionals who can identify vulnerabilities, protect data, and respond to security threats.
                                </p>
                                <p className="text-[#4B5A72] text-[15.5px] leading-relaxed">
                                    A B.Tech in Computer Science and Engineering with Cyber Security provides students with a foundation in both computer science and information security, making it a relevant choice for students exploring the best B.Tech college in Lucknow for future-focused engineering education.
                                </p>
                            </div>
                            <div className="rounded-2xl overflow-hidden border border-[#DCE6F2] shadow-[0_4px_16px_rgba(15,31,61,0.05)] bg-[#f0f4fa] h-[200px] sm:h-[220px] flex items-center justify-center">
                                <img
                                    src="https://ik.imagekit.io/ttalcskjf/IMAGE%201.webp"
                                    alt="Data Protection - Cyber Security Growth"
                                    className="w-full h-full object-cover"
                                />
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

                {/* ============================================================
                B.TECH CSE CYBER SECURITY AT SRMU, LUCKNOW
                ============================================================ */}
                <section className="py-[76px] px-6 bg-gradient-to-b from-[#F6FAFE] via-[#EAF2FB] to-[#F6FAFE]">
                    <div className={`${Classes["container"]}`}>
                        <div className="max-w-[700px] mb-11">
                            <div className="text-[12px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Program Overview
                            </div>
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">
                                B.Tech CSE Cyber Security at SRMU, Lucknow
                            </h2>
                        </div>

                        <div className="bg-white border border-[#DCE6F2] rounded-3xl p-8 sm:p-10 shadow-[0_6px_25px_rgba(15,31,61,0.05)]">
                            <p className="text-[15.5px] text-[#4B5A72] leading-relaxed mb-5">
                                At SRMU, the B.Tech CSE Cyber Security program in Lucknow combines foundational computer science knowledge with cybersecurity concepts and practical exposure.
                            </p>

                            <p className="text-[15.5px] text-[#14284E] font-semibold mb-4">
                                Students learn through a combination of:
                            </p>

                            {/* Learning pills */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="bg-[#F6FAFE] hover:bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 text-[#1B355F] text-[14px] px-4.5 py-2.5 rounded-full font-medium shadow-sm transition-all">Classroom Learning</span>
                                <span className="bg-[#F6FAFE] hover:bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 text-[#1B355F] text-[14px] px-4.5 py-2.5 rounded-full font-medium shadow-sm transition-all">Cyber Labs</span>
                                <span className="bg-[#F6FAFE] hover:bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 text-[#1B355F] text-[14px] px-4.5 py-2.5 rounded-full font-medium shadow-sm transition-all">Projects</span>
                                <span className="bg-[#F6FAFE] hover:bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 text-[#1B355F] text-[14px] px-4.5 py-2.5 rounded-full font-medium shadow-sm transition-all">Industry Sessions</span>
                                <span className="bg-[#F6FAFE] hover:bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 text-[#1B355F] text-[14px] px-4.5 py-2.5 rounded-full font-medium shadow-sm transition-all">Internships</span>
                                <span className="bg-[#F6FAFE] hover:bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 text-[#1B355F] text-[14px] px-4.5 py-2.5 rounded-full font-medium shadow-sm transition-all">Capstone Work</span>
                            </div>

                            <p className="text-[15.5px] text-[#4B5A72] leading-relaxed">
                                The program is designed to help students develop practical problem-solving skills alongside their technical knowledge. For students comparing options for the Best B.Tech College in Lucknow, the program's industry-integrated approach with L&T provides an additional focus on practical learning.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                INDUSTRY-INTEGRATED LEARNING WITH L&T
                ============================================================ */}
                <section id="srmu" className="py-[76px] px-6">
                    <div className={`${Classes["container"]}`}>
                        <div className="max-w-[700px] mb-11">
                            <div className="text-[12px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Industry Partnership
                            </div>
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">
                                Industry-Integrated Learning with L&T
                            </h2>
                            <p className="text-[16px] text-[#4B5A72] leading-relaxed">
                                The program incorporates industry exposure through L&T, helping students understand how cybersecurity concepts are applied in professional and technology-driven environments.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-white border border-[#DCE6F2] rounded-3xl p-8 sm:p-10 shadow-[0_6px_25px_rgba(15,31,61,0.05)]">
                            <div>
                                <h3 className="text-[19px] font-bold font-display text-[#14284E] mb-3">Industry Integrated Curriculum with L&T</h3>
                                <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-5">
                                    Strengthened through academic collaboration with L&T, the curriculum bridges university education and industry expectations through application-oriented learning, case studies and problem-solving methodologies.
                                </p>
                                <div className="flex flex-wrap gap-2.5 mb-5">
                                    <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Live Projects</span>
                                    <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Industry Visits</span>
                                    <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Guest Lectures</span>
                                    <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Case Studies</span>
                                    <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Workshops</span>
                                </div>
                                <div className="p-4 rounded-xl bg-[#F6FAFE] border border-[#DCE6F2]">
                                    <p className="text-[14.5px] text-[#4B5A72] leading-relaxed">
                                        <b className="text-[#14284E]">Outcome:</b> Graduate with both academic knowledge and industry-relevant skills — able to combine development, networking, and defence into one skill set employers are actively hiring for.
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-2xl overflow-hidden border border-[#DCE6F2] shadow-sm flex justify-center items-center bg-[#f0f4fa] h-[220px] sm:h-[260px] md:h-full md:min-h-[280px]">
                                <img
                                    src="https://ik.imagekit.io/ttalcskjf/IMAGE%203.webp"
                                    alt="L&T Industry Integrated Curriculum"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                INDUSTRY EXPOSURE & CYBER SECURITY LEARNING
                ============================================================ */}
                <section className="py-[76px] px-6 bg-gradient-to-b from-[#F6FAFE] via-[#EAF2FB] to-[#F6FAFE]">
                    <div className={`${Classes["container"]}`}>
                        <div className="max-w-[700px] mb-11">
                            <div className="text-[12px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Industry Exposure
                            </div>
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">
                                Industry Exposure & Cyber Security Learning at SRMU, Lucknow
                            </h2>
                            <p className="text-[16px] text-[#4B5A72] leading-relaxed">
                                Cyber security education goes beyond textbooks. At SRMU, students pursuing B.Tech CSE Cyber Security participate in industry sessions, workshops, hackathons, and expert interactions that connect academic concepts with practical security scenarios.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-[19px] font-bold font-display text-[#14284E] mb-3">Industry & Expert Sessions</h3>
                            <p className="text-[15.5px] text-[#4B5A72] leading-relaxed max-w-[78ch]">
                                Students have been exposed to topics including operational technology security, cloud security, application security, ethical hacking, networking, Android security, and generative AI.
                            </p>
                        </div>

                        {/* Guest Lecture 1 */}
                        <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/35 rounded-3xl p-8 sm:p-9 shadow-[0_4px_20px_rgba(15,31,61,0.04)] mb-7 transition-all">
                            <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-7 items-start">
                                <div>
                                    <h4 className="text-[17px] font-bold font-display text-[#14284E] mb-2">Guest Lecture: From Code to Creativity - The Rise of Generative AI</h4>
                                    <div className="text-[14px] text-[#1B4F91] mb-4">
                                        <span className="font-semibold bg-[#F6FAFE] border border-[#DCE6F2] px-3.5 py-1.5 rounded-full inline-block">15 June 2026</span>
                                    </div>
                                    <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-3.5">
                                        A guest lecture on <strong>"From Code to Creativity: The Rise of Generative AI"</strong> was conducted for B.Tech CSE Cyber Security students by <strong>Er. Subham Mishra, Automation Test Engineer, TCS, Kolkata</strong>.
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
                                    <img
                                        src="https://ik.imagekit.io/ttalcskjf/IMAGE%202.webp"
                                        alt="Cybersecurity System - Generative AI Guest Lecture"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Guest Lecture 2 */}
                        <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/35 rounded-3xl p-8 sm:p-9 shadow-[0_4px_20px_rgba(15,31,61,0.04)] mb-7 transition-all">
                            <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-7 items-center">
                                <div>
                                    <h4 className="text-[17px] font-bold font-display text-[#14284E] mb-2">Guest Lecture: Securing Industrial Control Systems-OT Security</h4>
                                    <div className="text-[14px] text-[#1B4F91] mb-4">
                                        <span className="font-semibold bg-[#F6FAFE] border border-[#DCE6F2] px-3.5 py-1.5 rounded-full inline-block">Mr. Rajeev Malhotra, L&T Cyber Security Division</span>
                                    </div>
                                    <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-3.5">
                                        Topic: Securing Industrial Control Systems (OT Security)
                                    </p>
                                    <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-3.5">
                                        The session explored how Operational Technology (OT) networks used in manufacturing environments can be targeted by cyber attackers.
                                    </p>
                                    <p className="text-[14.5px] text-[#4B5A72] leading-relaxed">
                                        Students were introduced to real-world detection and response workflows used in industrial security environments, followed by a discussion on career opportunities in OT security.
                                    </p>
                                </div>
                                <div className="rounded-2xl overflow-hidden border border-[#DCE6F2] shadow-sm bg-[#f0f4fa] h-[200px] sm:h-[220px] flex items-center justify-center">
                                    <img
                                        src="https://ik.imagekit.io/ttalcskjf/IMAGE%203.webp"
                                        alt="Cyber Security Digitization - OT Security Guest Lecture"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Industry Workshop */}
                        <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/35 rounded-3xl p-8 sm:p-9 shadow-[0_4px_20px_rgba(15,31,61,0.04)] transition-all">
                            <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-7 items-start">
                                <div>
                                    <h4 className="text-[17px] font-bold font-display text-[#14284E] mb-2">INDUSTRY WORKSHOP: Networking with Ethical Hacking & Android Development</h4>
                                    <div className="text-[14px] text-[#1B4F91] mb-4">
                                        <span className="font-semibold bg-[#F6FAFE] border border-[#DCE6F2] px-3.5 py-1.5 rounded-full inline-block">26 March 2025</span>
                                    </div>
                                    <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-3.5">
                                        A workshop on <strong>"Networking with Ethical Hacking & Android Development"</strong> was conducted by <strong>Mr. Santu Purkait, Director, Netcamp Solutions Pvt. Ltd.</strong>
                                    </p>
                                    <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-3.5">
                                        The workshop introduced students to practical concepts related to:
                                    </p>
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
                                    <img
                                        src="https://ik.imagekit.io/ttalcskjf/IMAGE%204.webp"
                                        alt="Network Configuration - Ethical Hacking Workshop"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                LABS & FACILITIES
                ============================================================ */}
                <section className="py-[76px] px-6">
                    <div className={`${Classes["container"]}`}>
                        <div className="max-w-[700px] mb-11">
                            <div className="text-[12px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Labs & Facilities
                            </div>
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">
                                Hands-on Cybersecurity Labs
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-7">
                            {/* Lab 1 */}
                            <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 rounded-3xl p-8 sm:p-9 shadow-[0_4px_20px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.07)] hover:-translate-y-1 transition-all duration-300">
                                <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-7 items-center">
                                    <div>
                                        <div className="flex justify-between items-start gap-3 flex-wrap mb-3.5">
                                            <h3 className="text-[19px] font-bold font-display text-[#14284E]">Cyber Security & Digital Forensics Lab</h3>
                                            <span className="italic text-[#ffc107] text-[13.5px] font-semibold bg-[#071329] px-3.5 py-1 rounded-full shadow-sm">"Secure, Investigate, Analyze"</span>
                                        </div>
                                        <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-4.5">
                                            Hands-on lab with tools for penetration testing, malware analysis, and forensic investigation on real-world scenarios.
                                        </p>
                                        <div className="flex flex-wrap gap-2.5">
                                            <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Kali Linux</span>
                                            <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Wireshark</span>
                                            <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Metasploit</span>
                                            <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Autopsy</span>
                                        </div>
                                    </div>
                                    <div className="rounded-2xl overflow-hidden border border-[#DCE6F2] shadow-sm bg-[#f0f4fa] h-[190px] sm:h-[210px] flex items-center justify-center">
                                        <img
                                            src="https://ik.imagekit.io/ttalcskjf/IMAGE%201.webp"
                                            alt="Data Protection - Cyber Security and Digital Forensics Lab"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Lab 2 */}
                            <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 rounded-3xl p-8 sm:p-9 shadow-[0_4px_20px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.07)] hover:-translate-y-1 transition-all duration-300">
                                <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-7 items-center">
                                    <div>
                                        <div className="flex justify-between items-start gap-3 flex-wrap mb-3.5">
                                            <h3 className="text-[19px] font-bold font-display text-[#14284E]">Network Security & Operations Lab</h3>
                                            <span className="italic text-[#ffc107] text-[13.5px] font-semibold bg-[#071329] px-3.5 py-1 rounded-full shadow-sm">"Monitor, Defend, Respond"</span>
                                        </div>
                                        <p className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-4.5">
                                            Simulate enterprise network environments to practice security monitoring, threat detection, and incident response.
                                        </p>
                                        <div className="flex flex-wrap gap-2.5">
                                            <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Cisco Packet Tracer</span>
                                            <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Snort</span>
                                            <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Splunk</span>
                                            <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.5 py-1.75 rounded-full font-medium shadow-sm">Wireshark</span>
                                        </div>
                                    </div>
                                    <div className="rounded-2xl overflow-hidden border border-[#DCE6F2] shadow-sm bg-[#f0f4fa] h-[190px] sm:h-[210px] flex items-center justify-center">
                                        <img
                                            src="https://ik.imagekit.io/ttalcskjf/IMAGE%202.webp"
                                            alt="Cybersecurity System - Network Security and Operations Lab"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                4-YEAR JOURNEY (Tabs)
                ============================================================ */}
                <section id="journey" className="py-[76px] px-6 bg-gradient-to-b from-[#F6FAFE] via-[#EAF2FB] to-[#F6FAFE]">
                    <div className={`${Classes["container"]} mx-auto`}>
                        <div className="max-w-[700px] mb-11">
                            <div className="text-[12px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Your 4-Year Journey
                            </div>
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                From Foundations to Industry Expert
                            </h2>
                        </div>

                        {/* Tab Buttons */}
                        <div className="flex flex-wrap gap-2.5 mb-6.5">
                            <button
                                className={`font-display font-semibold text-[13.5px] px-5 py-2.75 rounded-lg border-[1.5px] transition-colors cursor-pointer ${activeTab === "year1" ? "bg-[#14284E] border-[#14284E] text-white" : "bg-white border-[#DCE6F2] text-[#4B5A72] hover:bg-[#EAF2FB]"}`}
                                onClick={() => handleTabClick("year1")}
                            >
                                Year 1
                            </button>
                            <button
                                className={`font-display font-semibold text-[13.5px] px-5 py-2.75 rounded-lg border-[1.5px] transition-colors cursor-pointer ${activeTab === "year2" ? "bg-[#14284E] border-[#14284E] text-white" : "bg-white border-[#DCE6F2] text-[#4B5A72] hover:bg-[#EAF2FB]"}`}
                                onClick={() => handleTabClick("year2")}
                            >
                                Year 2
                            </button>
                            <button
                                className={`font-display font-semibold text-[13.5px] px-5 py-2.75 rounded-lg border-[1.5px] transition-colors cursor-pointer ${activeTab === "year3" ? "bg-[#14284E] border-[#14284E] text-white" : "bg-white border-[#DCE6F2] text-[#4B5A72] hover:bg-[#EAF2FB]"}`}
                                onClick={() => handleTabClick("year3")}
                            >
                                Year 3
                            </button>
                            <button
                                className={`font-display font-semibold text-[13.5px] px-5 py-2.75 rounded-lg border-[1.5px] transition-colors cursor-pointer ${activeTab === "year4" ? "bg-[#14284E] border-[#14284E] text-white" : "bg-white border-[#DCE6F2] text-[#4B5A72] hover:bg-[#EAF2FB]"}`}
                                onClick={() => handleTabClick("year4")}
                            >
                                Year 4
                            </button>
                        </div>

                        {/* Tab Panels */}
                        {Object.keys(yearData).map((key) => (
                            <div key={key} className={`${activeTab === key ? "block" : "hidden"} bg-white border border-[#DCE6F2] rounded-xl p-7.5`}>
                                <div className="italic text-[#ffc107] font-semibold mb-5 text-[15px]">{yearData[key].quote}</div>
                                <div className="grid md:grid-cols-2 gap-6.5">
                                    {yearData[key].cols.map((col, index) => (
                                        <div key={index}>
                                            <h4 className="text-[11.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">{col.heading}</h4>
                                            <ul>
                                                {col.items.map((item, idx) => (
                                                    <li key={idx} className="text-[14.5px] py-1.5 border-b border-dashed border-[#DCE6F2] text-[#14284E] last:border-b-0">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                    <div className="md:col-span-2 mt-2 pt-4.5 border-t border-[#DCE6F2] text-[14.5px] text-[#4B5A72]">
                                        <b className="text-[#14284E]">{yearData[key].outcome}</b>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ============================================================
                CAREER PATHWAYS
                ============================================================ */}
                <section className="py-[76px] px-6">
                    <div className={`${Classes["container"]} mx-auto`}>
                        <div className="max-w-[700px] mb-11">
                            <div className="text-[12px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Career Pathways
                            </div>
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                Your Future in Cyber Security
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6.5 perspective-[1200px]">
                            {/* Career Card 1 */}
                            <div className="relative h-[260px] group [perspective:1200px]">
                                <div className="relative w-full h-full text-left transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl p-7 flex flex-col bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 shadow-[0_4px_20px_rgba(15,31,61,0.04)] transition-all">
                                        <div className="w-12 h-12 rounded-xl bg-[#F6FAFE] border border-[#DCE6F2] flex items-center justify-center text-[22px] mb-4 shadow-sm">🛡️</div>
                                        <h3 className="text-[16.5px] font-bold font-display text-[#14284E] mb-2 leading-[1.25]">Security Analyst</h3>
                                        <div className="text-[13px] text-[#4B5A72] italic leading-relaxed">Monitor and defend network infrastructure.</div>
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

                            {/* Career Card 2 */}
                            <div className="relative h-[260px] group [perspective:1200px]">
                                <div className="relative w-full h-full text-left transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl p-7 flex flex-col bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 shadow-[0_4px_20px_rgba(15,31,61,0.04)] transition-all">
                                        <div className="w-12 h-12 rounded-xl bg-[#F6FAFE] border border-[#DCE6F2] flex items-center justify-center text-[22px] mb-4 shadow-sm">🔍</div>
                                        <h3 className="text-[16.5px] font-bold font-display text-[#14284E] mb-2 leading-[1.25]">Penetration Tester</h3>
                                        <div className="text-[13px] text-[#4B5A72] italic leading-relaxed">Ethically hack systems to find vulnerabilities.</div>
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

                            {/* Career Card 3 */}
                            <div className="relative h-[260px] group [perspective:1200px]">
                                <div className="relative w-full h-full text-left transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl p-7 flex flex-col bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 shadow-[0_4px_20px_rgba(15,31,61,0.04)] transition-all">
                                        <div className="w-12 h-12 rounded-xl bg-[#F6FAFE] border border-[#DCE6F2] flex items-center justify-center text-[22px] mb-4 shadow-sm">⚖️</div>
                                        <h3 className="text-[16.5px] font-bold font-display text-[#14284E] mb-2 leading-[1.25]">Security Architect</h3>
                                        <div className="text-[13px] text-[#4B5A72] italic leading-relaxed">Design and build secure systems from the ground up.</div>
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
                </section>

                {/* ============================================================
                QUICK FACTS
                ============================================================ */}
                <section className="py-[76px] px-6 bg-gradient-to-b from-[#F6FAFE] via-[#EAF2FB] to-[#F6FAFE]">
                    <div className={`${Classes["container"]}`}>
                        <div className="max-w-[700px] mb-8">
                            <div className="text-[12px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Quick Facts
                            </div>
                            <h2 className="text-[24px] leading-[1.2] font-bold font-display text-[#14284E]">Program at a glance</h2>
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
                                        ["Career Support", "Resume Building, Coding, Mock Interviews & Placement Training"]
                                    ].map((row, idx) => (
                                        <tr key={idx} className={`border-b border-[#DCE6F2] ${idx % 2 === 0 ? 'bg-[#F6FAFE]' : 'bg-white'} hover:bg-[#F6FAFE]/70 transition-colors`}>
                                            <td className="px-6 py-4 text-[14.5px] font-semibold text-[#1B355F] w-[38%]">{row[0]}</td>
                                            <td className="px-6 py-4 text-[14.5px] text-[#4B5A72] font-medium">{row[1]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                FEE & ADMISSION
                ============================================================ */}
                <section id="fee" className="py-[76px] px-6 bg-gradient-to-b from-[#F6FAFE] via-[#EAF2FB] to-[#F6FAFE]">
                    <div className={`${Classes["container"]} mx-auto`}>
                        <div className="max-w-[700px] mb-11">
                            <div className="text-[12px] tracking-[0.08em] uppercase text-[#ffc107] font-bold flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Admissions & Fee
                            </div>
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                                Start Your Journey with SRMU
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                            {/* Fee Table */}
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
                                <div className="text-[13px] text-[#7688A2] mt-4 leading-relaxed">* Fees are subject to revision. Scholarships available for meritorious students.</div>
                            </div>

                            {/* Admission Process */}
                            <div className="bg-white border border-[#DCE6F2] rounded-3xl p-7 sm:p-8 shadow-[0_6px_25px_rgba(15,31,61,0.05)]">
                                <h3 className="text-[19px] font-bold font-display text-[#14284E] mb-6">Admission Process</h3>
                                <div className="space-y-6 relative before:absolute before:left-5 before:top-4 before:bottom-4 before:w-[2px] before:bg-[#DCE6F2]">
                                    <div className="flex gap-4 items-start relative z-10">
                                        <div className="w-10 h-10 rounded-xl bg-[#14284E] text-[#ffc107] flex items-center justify-center font-display font-bold flex-none shadow-sm text-[15px]">1</div>
                                        <div className="pt-0.5">
                                            <h4 className="text-[16px] font-bold font-display text-[#14284E] mb-1">Fill Application</h4>
                                            <p className="text-[14px] text-[#4B5A72] leading-relaxed">Complete the online application form on the SRMU website.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start relative z-10">
                                        <div className="w-10 h-10 rounded-xl bg-[#14284E] text-[#ffc107] flex items-center justify-center font-display font-bold flex-none shadow-sm text-[15px]">2</div>
                                        <div className="pt-0.5">
                                            <h4 className="text-[16px] font-bold font-display text-[#14284E] mb-1">Entrance & Counselling</h4>
                                            <p className="text-[14px] text-[#4B5A72] leading-relaxed">Appear for the university entrance exam or qualifying exam and attend the counselling process.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start relative z-10">
                                        <div className="w-10 h-10 rounded-xl bg-[#14284E] text-[#ffc107] flex items-center justify-center font-display font-bold flex-none shadow-sm text-[15px]">3</div>
                                        <div className="pt-0.5">
                                            <h4 className="text-[16px] font-bold font-display text-[#14284E] mb-1">Document Verification</h4>
                                            <p className="text-[14px] text-[#4B5A72] leading-relaxed">Verify your academic documents and eligibility.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start relative z-10">
                                        <div className="w-10 h-10 rounded-xl bg-[#14284E] text-[#ffc107] flex items-center justify-center font-display font-bold flex-none shadow-sm text-[15px]">4</div>
                                        <div className="pt-0.5">
                                            <h4 className="text-[16px] font-bold font-display text-[#14284E] mb-1">Fee Payment & Enrollment</h4>
                                            <p className="text-[14px] text-[#4B5A72] leading-relaxed">Pay the admission fee to secure your seat and complete enrollment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                FINAL CTA
                ============================================================ */}
                <div className={`${Classes["container"]} px-6 my-14 sm:my-20`}>
                    <div className="text-center bg-gradient-to-br from-[#071329] via-[#0e2144] to-[#14284E] rounded-3xl py-16 sm:py-20 px-8 sm:px-12 shadow-[0_20px_60px_-15px_rgba(20,40,78,0.45)] border border-white/10 relative overflow-hidden">
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1b4f91]/40 rounded-full blur-[100px] pointer-events-none"></div>
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#ffc107]/20 rounded-full blur-[100px] pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-[clamp(24px,3.2vw,34px)] font-bold font-display text-white mb-3.5 tracking-tight">
                                Ready to build a career in Cyber Security?
                            </h2>
                            <p className="text-[#C7D3E6] text-[15.5px] max-w-[52ch] mx-auto mb-8 leading-relaxed font-normal">
                                Join SRMU's B.Tech CSE program with L&T and become an industry-ready expert. Apply now for the upcoming academic year.
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
                                    <Download className="w-4 h-4 text-sky-300" />
                                    <span>Download Brochure</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BTechCseCyberSecurityNew;