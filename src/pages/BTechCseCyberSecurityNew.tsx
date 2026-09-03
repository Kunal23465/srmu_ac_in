import React, { useState } from "react";
import Classes from "../utils/styles/Global.module.css";
// ${Classes["container"]}
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
        <div className=" text-[#14284E] bg-white antialiased">
            <main>
                {/* Hero Section */}
                <section className="py-16 w-full bg-gradient-to-b from-white to-[#EAF2FB]">
                    <div className={`${Classes["container"]} grid md:grid-cols-[1.2fr_0.8fr] gap-12.5 items-center`}>
                        <div>
                            <span className=" text-[12px] tracking-[0.08em] uppercase text-[#ffc107] font-semibold inline-block mb-4">
                                B.Tech CSE (Cyber Security) — with Larsen &amp; Toubro
                            </span>
                            <h1 className="text-[clamp(30px,4vw,46px)] leading-[1.14] font-bold font-display text-[#14284E] mb-4.5">
                                Learn B.Tech CSE Cyber Security with L&T at SRMU
                            </h1>
                            <p className="text-[18px] text-[#4B5A72] font-semibold mb-4.5">Build the Skills to Secure the Digital World</p>
                            <p className="text-[15.5px] text-[#4B5A72] mb-5.5 max-w-[56ch]">
                                Pursue B.Tech CSE (Cyber Security) in Lucknow at Shri Ramswaroop Memorial University (SRMU) and develop the technical skills needed to understand, protect, and secure modern digital systems. SRMU is among the institutions students consider when looking for the best B.Tech college in Lucknow for industry-oriented engineering education.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 gap-x-4.5 mb-7.5">
                                <li className="flex gap-2 items-start text-[14.5px] text-[#1B355F] font-medium">
                                    <span className="text-white bg-[#1B4F91] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] mt-0.5 flex-none">✓</span>
                                    Industry-integrated learning with L&T
                                </li>
                                <li className="flex gap-2 items-start text-[14.5px] text-[#1B355F] font-medium">
                                    <span className="text-white bg-[#1B4F91] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] mt-0.5 flex-none">✓</span>
                                    Hands-on cybersecurity laboratory exposure
                                </li>
                                <li className="flex gap-2 items-start text-[14.5px] text-[#1B355F] font-medium">
                                    <span className="text-white bg-[#1B4F91] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] mt-0.5 flex-none">✓</span>
                                    Live projects and capstone development
                                </li>
                                <li className="flex gap-2 items-start text-[14.5px] text-[#1B355F] font-medium">
                                    <span className="text-white bg-[#1B4F91] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] mt-0.5 flex-none">✓</span>
                                    Industry sessions and workshops
                                </li>
                                <li className="flex gap-2 items-start text-[14.5px] text-[#1B355F] font-medium">
                                    <span className="text-white bg-[#1B4F91] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] mt-0.5 flex-none">✓</span>
                                    Internship and placement support
                                </li>
                            </ul>
                            <div className="flex flex-wrap gap-3" id="apply">
                                <a
                                    href="#"
                                    className="bg-[#ffc107] text-[#2A1B04] font-bold text-[14px] px-5.5 py-3.25 rounded-md shadow-[0_8px_20px_-8px_rgba(217,139,43,0.6)] hover:bg-[#ffc107] hover:text-white transition-all hover:-translate-y-0.5"
                                >
                                    Apply Now
                                </a>
                                <a
                                    href="#"
                                    className="bg-white text-[#1B355F] font-bold text-[14px] px-5.5 py-3.25 rounded-md border border-[#DCE6F2] hover:border-[#1B4F91] hover:text-[#1B4F91] transition-all hover:-translate-y-0.5"
                                >
                                    Download Brochure
                                </a>
                                <a
                                    href="#"
                                    className="bg-white text-[#1B355F] font-bold text-[14px] px-5.5 py-3.25 rounded-md border border-[#DCE6F2] hover:border-[#1B4F91] hover:text-[#1B4F91] transition-all hover:-translate-y-0.5"
                                >
                                    Talk to Admission Expert
                                </a>
                                <a
                                    href="#"
                                    className="bg-white text-[#1B355F] font-bold text-[14px] px-5.5 py-3.25 rounded-md border border-[#DCE6F2] hover:border-[#1B4F91] hover:text-[#1B4F91] transition-all hover:-translate-y-0.5"
                                >
                                    WhatsApp Now
                                </a>
                            </div>
                        </div>

                        <div className="bg-[#14284E] rounded-2xl p-8.5 relative overflow-hidden shadow-[0_30px_70px_-25px_rgba(15,31,61,0.55)] text-center">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:16px_16px]"></div>
                            <svg className="w-full max-w-[220px] mx-auto mb-5.5 relative block" viewBox="0 0 200 220" fill="none">
                                <path d="M100 10L20 45v55c0 55 34 88 80 100 46-12 80-45 80-100V45L100 10z" fill="#1B355F" stroke="#ffc107" strokeWidth="2" />
                                <path d="M65 108l24 24 46-50" stroke="#ffc107" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3 className="text-white text-[18px] text-center mb-1.5 relative">Industry-Ready by Design</h3>
                            <p className="text-[#AFC0DA] text-[13.5px] text-center relative">Cyber labs · Live projects · Certifications</p>
                            <div className="grid grid-cols-2 gap-3 mt-6.5 relative">
                                <div className="bg-white/6 border border-white/14 rounded-[10px] p-3.5 text-center">
                                    <div className="font-display font-bold text-[20px] text-[#ffc107]">10+</div>
                                    <div className="text-[11px] text-[#AFC0DA] mt-0.5">Career Roles</div>
                                </div>
                                <div className="bg-white/6 border border-white/14 rounded-[10px] p-3.5 text-center">
                                    <div className="font-display font-bold text-[20px] text-[#ffc107]">7+</div>
                                    <div className="text-[11px] text-[#AFC0DA] mt-0.5">Certifications</div>
                                </div>
                                <div className="bg-white/6 border border-white/14 rounded-[10px] p-3.5 text-center">
                                    <div className="font-display font-bold text-[20px] text-[#ffc107]">18+</div>
                                    <div className="text-[11px] text-[#AFC0DA] mt-0.5">Enterprise Tools</div>
                                </div>
                                <div className="bg-white/6 border border-white/14 rounded-[10px] p-3.5 text-center">
                                    <div className="font-display font-bold text-[20px] text-[#ffc107]">4 Yrs</div>
                                    <div className="text-[11px] text-[#AFC0DA] mt-0.5">Guided Journey</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust Bar */}
                <div className="bg-[#14284E] py-6.5">
                    <div className={`${Classes["container"]} mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-5 text-center`}>
                        <div>
                            <div className="font-display font-bold text-[21px] text-[#ffc107]">27+ Yrs</div>
                            <div className="text-[12px] text-[#C7D3E6] mt-1">Academic Excellence</div>
                        </div>
                        <div>
                            <div className="font-display font-bold text-[21px] text-[#ffc107]">30,000+</div>
                            <div className="text-[12px] text-[#C7D3E6] mt-1">Alumni Network</div>
                        </div>
                        <div>
                            <div className="font-display font-bold text-[21px] text-[#ffc107]">300+</div>
                            <div className="text-[12px] text-[#C7D3E6] mt-1">Recruiting Companies</div>
                        </div>
                        <div>
                            <div className="font-display font-bold text-[21px] text-[#ffc107]">L&amp;T</div>
                            <div className="text-[12px] text-[#C7D3E6] mt-1">Industry-Integrated Learning</div>
                        </div>
                        <div>
                            <div className="font-display font-bold text-[21px] text-[#ffc107]">Modern</div>
                            <div className="text-[12px] text-[#C7D3E6] mt-1">Research Infrastructure</div>
                        </div>
                    </div>
                </div>

                {/* Why Cyber Security */}
                <section id="why" className="py-[76px] px-6">
                    <div className={`${Classes["container"]}`}>
                        <div className="max-w-[700px] mb-11">
                            <div className=" text-[12px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Why Cyber Security
                            </div>
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">Why Study B.Tech CSE Cyber Security in 2027?</h2>
                        </div>
                        <div className="bg-white border-l-4 border-[#ffc107] rounded-sm p-6.5 shadow-[0_2px_16px_rgba(15,31,61,0.06)] text-[17px] text-[#14284E] font-semibold italic">
                            "Will this course still be relevant after four years?" — For Cyber Security, the answer is yes, and the demand is only increasing.
                        </div>
                        <p className="my-5.5 text-[#4B5A72] text-[15.5px] max-w-[76ch]">
                            Cybersecurity has become important across banks, hospitals, government organizations, e-commerce, manufacturing, technology companies, and cloud-based services. As organizations adopt cloud computing, artificial intelligence, IoT, and digital payments, they need professionals who can identify vulnerabilities, protect data, and respond to security threats.
                        </p>
                        <p className="my-5.5 text-[#4B5A72] text-[15.5px] max-w-[76ch]">
                            A B.Tech in Computer Science and Engineering with Cyber Security provides students with a foundation in both computer science and information security, making it a relevant choice for students exploring the best B.Tech college in Lucknow for future-focused engineering education.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            <div className="bg-white border border-[#DCE6F2] rounded-xl p-6 shadow-[0_2px_14px_rgba(15,31,61,0.04)]">
                                <h3 className="text-[16.5px] font-bold font-display text-[#14284E] mb-2">High Demand</h3>
                                <p className="text-[14px] text-[#4B5A72]">Cybersecurity roles are growing exponentially worldwide.</p>
                            </div>
                            <div className="bg-white border border-[#DCE6F2] rounded-xl p-6 shadow-[0_2px_14px_rgba(15,31,61,0.04)]">
                                <h3 className="text-[16.5px] font-bold font-display text-[#14284E] mb-2">Diverse Roles</h3>
                                <p className="text-[14px] text-[#4B5A72]">From analyst to architect, the field offers varied career paths.</p>
                            </div>
                            <div className="bg-white border border-[#DCE6F2] rounded-xl p-6 shadow-[0_2px_14px_rgba(15,31,61,0.04)]">
                                <h3 className="text-[16.5px] font-bold font-display text-[#14284E] mb-2">Critical Skills</h3>
                                <p className="text-[14px] text-[#4B5A72]">Protecting data and infrastructure is non-negotiable for modern businesses.</p>
                            </div>
                            <div className="bg-white border border-[#DCE6F2] rounded-xl p-6 shadow-[0_2px_14px_rgba(15,31,61,0.04)]">
                                <h3 className="text-[16.5px] font-bold font-display text-[#14284E] mb-2">Global Relevance</h3>
                                <p className="text-[14px] text-[#4B5A72]">Cyber threats are a global issue, making your skills transferable anywhere.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* B.Tech CSE Cyber Security at SRMU */}
                <section className="py-[76px] px-6 bg-gradient-to-b from-[#F6FAFE] via-[#EAF2FB] to-[#F6FAFE]">
                    <div className={`${Classes["container"]}`}>
                        <div className="max-w-[700px] mb-11">
                            <div className=" text-[12px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Program Overview
                            </div>
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">B.Tech CSE Cyber Security at SRMU, Lucknow</h2>
                        </div>
                        <div className="bg-white border border-[#DCE6F2] rounded-xl p-7.5">
                            <p className="text-[15.5px] text-[#4B5A72] mb-4">
                                At SRMU, the B.Tech CSE Cyber Security program in Lucknow combines foundational computer science knowledge with cybersecurity concepts and practical exposure.
                            </p>
                            <p className="text-[15.5px] text-[#4B5A72] mb-4">
                                Students learn through a combination of:
                            </p>
                            <div className="flex flex-wrap gap-3 mb-4">
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14px] px-4 py-2 rounded-full font-medium">Classroom Learning</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14px] px-4 py-2 rounded-full font-medium">Cyber Labs</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14px] px-4 py-2 rounded-full font-medium">Projects</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14px] px-4 py-2 rounded-full font-medium">Industry Sessions</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14px] px-4 py-2 rounded-full font-medium">Internships</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[14px] px-4 py-2 rounded-full font-medium">Capstone Work</span>
                            </div>
                            <p className="text-[15.5px] text-[#4B5A72]">
                                The program is designed to help students develop practical problem-solving skills alongside their technical knowledge. For students comparing options for the Best B.Tech College in Lucknow, the program's industry-integrated approach with L&T provides an additional focus on practical learning.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Industry-Integrated Learning with L&T */}
                <section id="srmu" className="py-[76px] px-6">
                    <div className={`${Classes["container"]}`}>
                        <div className="max-w-[700px] mb-11">
                            <div className=" text-[12px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Industry Partnership
                            </div>
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">Industry-Integrated Learning with L&T</h2>
                            <p className="text-[16px] text-[#4B5A72]">
                                The program incorporates industry exposure through L&T, helping students understand how cybersecurity concepts are applied in professional and technology-driven environments.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            <div>
                                <h3 className="text-[19px] font-bold font-display text-[#14284E] mb-2.5">Industry Integrated Curriculum with L&T</h3>
                                <p className="text-[14.5px] text-[#4B5A72] mb-4">
                                    Strengthened through academic collaboration with L&T, the curriculum bridges university education and industry expectations through application-oriented learning, case studies and problem-solving methodologies.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.25 py-1.75 rounded-full font-medium">Live Projects</span>
                                    <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.25 py-1.75 rounded-full font-medium">Industry Visits</span>
                                    <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.25 py-1.75 rounded-full font-medium">Guest Lectures</span>
                                    <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.25 py-1.75 rounded-full font-medium">Case Studies</span>
                                    <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.25 py-1.75 rounded-full font-medium">Workshops</span>
                                </div>
                                <p className="text-[14.5px] text-[#4B5A72] mt-4">
                                    <b className="text-[#14284E]">Outcome:</b> Graduate with both academic knowledge and industry-relevant skills — able to combine development, networking, and defence into one skill set employers are actively hiring for.
                                </p>
                            </div>
                            <div className="rounded-xl overflow-hidden border border-[#DCE6F2] flex justify-center items-center min-h-[260px] bg-[#f0f4fa]">
                                <img src="https://ik.imagekit.io/ttalcskjf/Integrated-Curriculum.webp" alt="Industry-Integrated" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industry Exposure & Cyber Security Learning */}
                <section className="py-[76px] px-6 bg-gradient-to-b from-[#F6FAFE] via-[#EAF2FB] to-[#F6FAFE]">
                    <div className={`${Classes["container"]}`}>
                        <div className="max-w-[700px] mb-11">
                            <div className=" text-[12px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Industry Exposure
                            </div>
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">Industry Exposure & Cyber Security Learning at SRMU, Lucknow</h2>
                            <p className="text-[16px] text-[#4B5A72]">
                                Cyber security education goes beyond textbooks. At SRMU, students pursuing B.Tech CSE Cyber Security participate in industry sessions, workshops, hackathons, and expert interactions that connect academic concepts with practical security scenarios.
                            </p>
                        </div>

                        {/* Industry & Expert Sessions */}
                        <div className="mb-8">
                            <h3 className="text-[19px] font-bold font-display text-[#14284E] mb-4">Industry & Expert Sessions</h3>
                            <p className="text-[15.5px] text-[#4B5A72] mb-6">
                                Students have been exposed to topics including operational technology security, cloud security, application security, ethical hacking, networking, Android security, and generative AI.
                            </p>
                        </div>

                        {/* Guest Lecture 1 */}
                        <div className="bg-white border border-[#DCE6F2] rounded-xl p-7.5 mb-6">
                            <h4 className="text-[17px] font-bold font-display text-[#14284E] mb-2">Guest Lecture: From Code to Creativity - The Rise of Generative AI</h4>
                            <div className="text-[14px] text-[#4B5A72] mb-3">
                                <span className="font-semibold">15 June 2026</span>
                            </div>
                            <p className="text-[14.5px] text-[#4B5A72] mb-3">
                                A guest lecture on <strong>"From Code to Creativity: The Rise of Generative AI"</strong> was conducted for B.Tech CSE Cyber Security students by <strong>Er. Subham Mishra, Automation Test Engineer, TCS, Kolkata</strong>.
                            </p>
                            <p className="text-[14.5px] text-[#4B5A72] mb-3">
                                The session introduced participants to key concepts in generative AI and provided practical exposure to AI tools and prompt engineering techniques.
                            </p>
                            <div className="bg-[#F6FAFE] border border-[#DCE6F2] rounded-lg p-5 mt-3">
                                <h5 className="text-[14px] font-bold text-[#14284E] mb-2">Key Learning Outcomes</h5>
                                <p className="text-[14px] text-[#4B5A72] mb-2">Students gained:</p>
                                <ul className="list-disc pl-5 text-[14px] text-[#4B5A72] space-y-1">
                                    <li>A foundation in generative AI concepts</li>
                                    <li>Practical experience with AI tools</li>
                                    <li>Understanding of prompt engineering</li>
                                    <li>Awareness of applications of AI in technology and software development</li>
                                </ul>
                            </div>
                        </div>

                        {/* Guest Lecture 2 */}
                        <div className="bg-white border border-[#DCE6F2] rounded-xl p-7.5 mb-6">
                            <h4 className="text-[17px] font-bold font-display text-[#14284E] mb-2">Guest Lecture: Securing Industrial Control Systems-OT Security</h4>
                            <div className="text-[14px] text-[#4B5A72] mb-3">
                                <span className="font-semibold">Mr. Rajeev Malhotra, L&T Cyber Security Division</span>
                            </div>
                            <p className="text-[14.5px] text-[#4B5A72] mb-3">
                                Topic: Securing Industrial Control Systems (OT Security)
                            </p>
                            <p className="text-[14.5px] text-[#4B5A72] mb-3">
                                The session explored how Operational Technology (OT) networks used in manufacturing environments can be targeted by cyber attackers.
                            </p>
                            <p className="text-[14.5px] text-[#4B5A72]">
                                Students were introduced to real-world detection and response workflows used in industrial security environments, followed by a discussion on career opportunities in OT security.
                            </p>
                        </div>

                        {/* Industry Workshop */}
                        <div className="bg-white border border-[#DCE6F2] rounded-xl p-7.5">
                            <h4 className="text-[17px] font-bold font-display text-[#14284E] mb-2">INDUSTRY WORKSHOP: Networking with Ethical Hacking & Android Development</h4>
                            <div className="text-[14px] text-[#4B5A72] mb-3">
                                <span className="font-semibold">26 March 2025</span>
                            </div>
                            <p className="text-[14.5px] text-[#4B5A72] mb-3">
                                A workshop on <strong>"Networking with Ethical Hacking & Android Development"</strong> was conducted by <strong>Mr. Santu Purkait, Director, Netcamp Solutions Pvt. Ltd.</strong>
                            </p>
                            <p className="text-[14.5px] text-[#4B5A72] mb-3">
                                The workshop introduced students to practical concepts related to:
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-5 text-[14px] text-[#4B5A72] mb-3">
                                <li className="list-disc">Network security</li>
                                <li className="list-disc">Penetration testing</li>
                                <li className="list-disc">Ethical hacking</li>
                                <li className="list-disc">Cyber security best practices</li>
                                <li className="list-disc">Secure Android application development</li>
                                <li className="list-disc">Mobile application security</li>
                                <li className="list-disc">Real-world cyber threats and defense mechanisms</li>
                            </ul>
                            <p className="text-[14.5px] text-[#4B5A72]">
                                The session helped students connect networking fundamentals with practical ethical hacking and application security concepts.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Lab List */}
                <section className="py-[76px] px-6">
                    <div className={`${Classes["container"]}`}>
                        <div className="max-w-[700px] mb-11">
                            <div className=" text-[12px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Labs & Facilities
                            </div>
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">Hands-on Cybersecurity Labs</h2>
                        </div>
                        <div className="bg-white border border-[#DCE6F2] rounded-xl p-6.5 mb-4.5">
                            <div className="flex justify-between items-start gap-4 flex-wrap mb-3.5">
                                <h3 className="text-[19px] font-bold font-display text-[#14284E]">Cyber Security & Digital Forensics Lab</h3>
                                <span className="italic text-[#ffc107] text-[13.5px] font-semibold">"Secure, Investigate, Analyze"</span>
                            </div>
                            <p className="text-[14.5px] text-[#4B5A72] mb-3.5">
                                Hands-on lab with tools for penetration testing, malware analysis, and forensic investigation on real-world scenarios.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.25 py-1.75 rounded-full font-medium">Kali Linux</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.25 py-1.75 rounded-full font-medium">Wireshark</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.25 py-1.75 rounded-full font-medium">Metasploit</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.25 py-1.75 rounded-full font-medium">Autopsy</span>
                            </div>
                        </div>
                        <div className="bg-white border border-[#DCE6F2] rounded-xl p-6.5">
                            <div className="flex justify-between items-start gap-4 flex-wrap mb-3.5">
                                <h3 className="text-[19px] font-bold font-display text-[#14284E]">Network Security & Operations Lab</h3>
                                <span className="italic text-[#ffc107] text-[13.5px] font-semibold">"Monitor, Defend, Respond"</span>
                            </div>
                            <p className="text-[14.5px] text-[#4B5A72] mb-3.5">
                                Simulate enterprise network environments to practice security monitoring, threat detection, and incident response.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.25 py-1.75 rounded-full font-medium">Cisco Packet Tracer</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.25 py-1.75 rounded-full font-medium">Snort</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.25 py-1.75 rounded-full font-medium">Splunk</span>
                                <span className="bg-[#F6FAFE] border border-[#DCE6F2] text-[#1B355F] text-[13px] px-3.25 py-1.75 rounded-full font-medium">Wireshark</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4-Year Journey (Tabs) */}
                <section id="journey" className="py-[76px] px-6 bg-gradient-to-b from-[#F6FAFE] via-[#EAF2FB] to-[#F6FAFE]">
                    <div className={`${Classes["container"]} mx-auto`}>
                        <div className="max-w-[700px] mb-11">
                            <div className=" text-[12px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Your 4-Year Journey
                            </div>
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">From Foundations to Industry Expert</h2>
                        </div>
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

                        {Object.keys(yearData).map((key) => (
                            <div key={key} className={`${activeTab === key ? "block" : "hidden"} bg-white border border-[#DCE6F2] rounded-xl p-7.5`}>
                                <div className="italic text-[#ffc107] font-semibold mb-5 text-[15px]">{yearData[key].quote}</div>
                                <div className="grid md:grid-cols-2 gap-6.5">
                                    {yearData[key].cols.map((col, index) => (
                                        <div key={index}>
                                            <h4 className=" text-[11.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">{col.heading}</h4>
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

                {/* Career Pathways (Flips) */}
                <section className="py-[76px] px-6">
                    <div className={`${Classes["container"]} mx-auto`}>
                        <div className="max-w-[700px] mb-11">
                            <div className=" text-[12px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Career Pathways
                            </div>
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">Your Future in Cyber Security</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 perspective-[1200px]">
                            {/* Career Card 1 */}
                            <div className="relative h-[250px] group [perspective:1200px]">
                                <div className="relative w-full h-full text-left transition-transform duration-550 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl p-6 flex flex-col bg-white border border-[#DCE6F2] shadow-[0_4px_18px_rgba(15,31,61,0.05)]">
                                        <div className="w-[46px] h-[46px] rounded-xl bg-[#F6FAFE] border border-[#DCE6F2] flex items-center justify-center text-[22px] mb-3.5">🛡️</div>
                                        <h3 className="text-[16.5px] font-bold font-display text-[#14284E] mb-2 leading-[1.25]">Security Analyst</h3>
                                        <div className="text-[13px] text-[#4B5A72] italic">Monitor and defend network infrastructure.</div>
                                        <div className="mt-auto  text-[10.5px] text-[#7688A2] uppercase tracking-[0.04em] flex items-center gap-1.5">Hover to learn more →</div>
                                    </div>
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl p-6 flex flex-col bg-[#14284E] text-white [transform:rotateY(180deg)] overflow-hidden">
                                        <div className=" text-[10px] uppercase text-[#ffc107] tracking-[0.05em] mb-2 mt-2.5 first:mt-0">Key Skills</div>
                                        <div className="text-[12.5px] text-[#DCE6F2] leading-6">Network Security, SIEM, Vulnerability Management, Incident Response</div>
                                        <div className=" text-[10px] uppercase text-[#ffc107] tracking-[0.05em] mb-2 mt-2.5">Average Salary (INR)</div>
                                        <div className="text-[12.5px] text-[#DCE6F2] leading-6">6-12 LPA</div>
                                    </div>
                                </div>
                            </div>
                            {/* Career Card 2 */}
                            <div className="relative h-[250px] group [perspective:1200px]">
                                <div className="relative w-full h-full text-left transition-transform duration-550 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl p-6 flex flex-col bg-white border border-[#DCE6F2] shadow-[0_4px_18px_rgba(15,31,61,0.05)]">
                                        <div className="w-[46px] h-[46px] rounded-xl bg-[#F6FAFE] border border-[#DCE6F2] flex items-center justify-center text-[22px] mb-3.5">🔍</div>
                                        <h3 className="text-[16.5px] font-bold font-display text-[#14284E] mb-2 leading-[1.25]">Penetration Tester</h3>
                                        <div className="text-[13px] text-[#4B5A72] italic">Ethically hack systems to find vulnerabilities.</div>
                                        <div className="mt-auto  text-[10.5px] text-[#7688A2] uppercase tracking-[0.04em] flex items-center gap-1.5">Hover to learn more →</div>
                                    </div>
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl p-6 flex flex-col bg-[#14284E] text-white [transform:rotateY(180deg)] overflow-hidden">
                                        <div className=" text-[10px] uppercase text-[#ffc107] tracking-[0.05em] mb-2 mt-2.5 first:mt-0">Key Skills</div>
                                        <div className="text-[12.5px] text-[#DCE6F2] leading-6">Web App Security, Network Security, Ethical Hacking, Python, Kali Linux</div>
                                        <div className=" text-[10px] uppercase text-[#ffc107] tracking-[0.05em] mb-2 mt-2.5">Average Salary (INR)</div>
                                        <div className="text-[12.5px] text-[#DCE6F2] leading-6">8-15 LPA</div>
                                    </div>
                                </div>
                            </div>
                            {/* Career Card 3 */}
                            <div className="relative h-[250px] group [perspective:1200px]">
                                <div className="relative w-full h-full text-left transition-transform duration-550 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl p-6 flex flex-col bg-white border border-[#DCE6F2] shadow-[0_4px_18px_rgba(15,31,61,0.05)]">
                                        <div className="w-[46px] h-[46px] rounded-xl bg-[#F6FAFE] border border-[#DCE6F2] flex items-center justify-center text-[22px] mb-3.5">⚖️</div>
                                        <h3 className="text-[16.5px] font-bold font-display text-[#14284E] mb-2 leading-[1.25]">Security Architect</h3>
                                        <div className="text-[13px] text-[#4B5A72] italic">Design and build secure systems from the ground up.</div>
                                        <div className="mt-auto  text-[10.5px] text-[#7688A2] uppercase tracking-[0.04em] flex items-center gap-1.5">Hover to learn more →</div>
                                    </div>
                                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl p-6 flex flex-col bg-[#14284E] text-white [transform:rotateY(180deg)] overflow-hidden">
                                        <div className=" text-[10px] uppercase text-[#ffc107] tracking-[0.05em] mb-2 mt-2.5 first:mt-0">Key Skills</div>
                                        <div className="text-[12.5px] text-[#DCE6F2] leading-6">Security Design, Cloud Security, Cryptography, Network Architecture, Risk Management</div>
                                        <div className=" text-[10px] uppercase text-[#ffc107] tracking-[0.05em] mb-2 mt-2.5">Average Salary (INR)</div>
                                        <div className="text-[12.5px] text-[#DCE6F2] leading-6">15-25 LPA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Facts */}
                <section className="py-[76px] px-6 bg-gradient-to-b from-[#F6FAFE] via-[#EAF2FB] to-[#F6FAFE]">
                    <div className={`${Classes["container"]}`}>
                        <div className="max-w-[700px] mb-6">
                            <div className=" text-[12px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Quick Facts
                            </div>
                            <h2 className="text-[24px] leading-[1.2] font-bold font-display text-[#14284E]">Program at a glance</h2>
                        </div>
                        <table className="w-full border-collapse bg-white border border-[#DCE6F2] rounded-xl overflow-hidden">
                            <tbody>
                                <tr className="border-b border-[#DCE6F2]">
                                    <td className="px-5.5 py-3.75 text-[14.5px] font-semibold text-[#1B355F] w-[38%] bg-[#F6FAFE]">Program</td>
                                    <td className="px-5.5 py-3.75 text-[14.5px] text-[#4B5A72]">B.Tech CSE (Cyber Security)</td>
                                </tr>
                                <tr className="border-b border-[#DCE6F2]">
                                    <td className="px-5.5 py-3.75 text-[14.5px] font-semibold text-[#1B355F] w-[38%] bg-[#F6FAFE]">Duration</td>
                                    <td className="px-5.5 py-3.75 text-[14.5px] text-[#4B5A72]">4 Years</td>
                                </tr>
                                <tr className="border-b border-[#DCE6F2]">
                                    <td className="px-5.5 py-3.75 text-[14.5px] font-semibold text-[#1B355F] w-[38%] bg-[#F6FAFE]">Eligibility</td>
                                    <td className="px-5.5 py-3.75 text-[14.5px] text-[#4B5A72]">10+2 with Physics &amp; Mathematics</td>
                                </tr>
                                <tr className="border-b border-[#DCE6F2]">
                                    <td className="px-5.5 py-3.75 text-[14.5px] font-semibold text-[#1B355F] w-[38%] bg-[#F6FAFE]">Approved By</td>
                                    <td className="px-5.5 py-3.75 text-[14.5px] text-[#4B5A72]">UGC</td>
                                </tr>
                                <tr className="border-b border-[#DCE6F2]">
                                    <td className="px-5.5 py-3.75 text-[14.5px] font-semibold text-[#1B355F] w-[38%] bg-[#F6FAFE]">University Accreditation</td>
                                    <td className="px-5.5 py-3.75 text-[14.5px] text-[#4B5A72]">NAAC Accredited</td>
                                </tr>
                                <tr className="border-b border-[#DCE6F2]">
                                    <td className="px-5.5 py-3.75 text-[14.5px] font-semibold text-[#1B355F] w-[38%] bg-[#F6FAFE]">Industry Partner</td>
                                    <td className="px-5.5 py-3.75 text-[14.5px] text-[#4B5A72]">Larsen &amp; Toubro (L&amp;T)</td>
                                </tr>
                                <tr className="border-b border-[#DCE6F2]">
                                    <td className="px-5.5 py-3.75 text-[14.5px] font-semibold text-[#1B355F] w-[38%] bg-[#F6FAFE]">Learning Model</td>
                                    <td className="px-5.5 py-3.75 text-[14.5px] text-[#4B5A72]">Classroom + Labs + Projects + Industry Learning</td>
                                </tr>
                                <tr className="border-b border-[#DCE6F2]">
                                    <td className="px-5.5 py-3.75 text-[14.5px] font-semibold text-[#1B355F] w-[38%] bg-[#F6FAFE]">Internship</td>
                                    <td className="px-5.5 py-3.75 text-[14.5px] text-[#4B5A72]">Included</td>
                                </tr>
                                <tr className="border-b border-[#DCE6F2]">
                                    <td className="px-5.5 py-3.75 text-[14.5px] font-semibold text-[#1B355F] w-[38%] bg-[#F6FAFE]">Placement Assistance</td>
                                    <td className="px-5.5 py-3.75 text-[14.5px] text-[#4B5A72]">Available</td>
                                </tr>
                                <tr className="border-b border-[#DCE6F2]">
                                    <td className="px-5.5 py-3.75 text-[14.5px] font-semibold text-[#1B355F] w-[38%] bg-[#F6FAFE]">Research Opportunities</td>
                                    <td className="px-5.5 py-3.75 text-[14.5px] text-[#4B5A72]">Yes</td>
                                </tr>
                                <tr className="border-b border-[#DCE6F2]">
                                    <td className="px-5.5 py-3.75 text-[14.5px] font-semibold text-[#1B355F] w-[38%] bg-[#F6FAFE]">Capstone Project</td>
                                    <td className="px-5.5 py-3.75 text-[14.5px] text-[#4B5A72]">Yes</td>
                                </tr>
                                <tr className="border-b border-[#DCE6F2]">
                                    <td className="px-5.5 py-3.75 text-[14.5px] font-semibold text-[#1B355F] w-[38%] bg-[#F6FAFE]">Industry Certifications</td>
                                    <td className="px-5.5 py-3.75 text-[14.5px] text-[#4B5A72]">Supported</td>
                                </tr>
                                <tr>
                                    <td className="px-5.5 py-3.75 text-[14.5px] font-semibold text-[#1B355F] w-[38%] bg-[#F6FAFE]">Career Support</td>
                                    <td className="px-5.5 py-3.75 text-[14.5px] text-[#4B5A72]">Resume Building, Coding, Mock Interviews &amp; Placement Training</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Fee & Admission Section */}
                <section id="fee" className="py-[76px] px-6 bg-gradient-to-b from-[#F6FAFE] via-[#EAF2FB] to-[#F6FAFE]">
                    <div className={`${Classes["container"]} mx-auto`}>
                        <div className="max-w-[700px] mb-11">
                            <div className=" text-[12px] tracking-[0.08em] uppercase text-[#ffc107] flex items-center gap-2 mb-3.5">
                                <span className="w-[22px] h-[2px] bg-[#ffc107] inline-block"></span>
                                Admissions & Fee
                            </div>
                            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">Start Your Journey with SRMU</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 items-start">
                            <div>
                                <h3 className="text-[19px] font-bold font-display text-[#14284E] mb-4">Program Fee</h3>
                                <table className="w-full border-collapse bg-white border border-[#DCE6F2] rounded-xl overflow-hidden">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-3.5 text-left text-[12.5px] font-semibold uppercase tracking-[0.03em] bg-[#14284E] text-white">Particulars</th>
                                            <th className="px-4 py-3.5 text-left text-[12.5px] font-semibold uppercase tracking-[0.03em] bg-[#14284E] text-white">Amount (INR)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-[#DCE6F2]">
                                            <td className="px-4 py-3.5 text-[14px]">Tuition Fee (per year)</td>
                                            <td className="px-4 py-3.5 text-[14px] text-[#ffc107] font-bold">₹1,50,000</td>
                                        </tr>
                                        <tr className="border-b border-[#DCE6F2] odd:bg-[#F6FAFE]">
                                            <td className="px-4 py-3.5 text-[14px]">Academic Services Fee (per year)</td>
                                            <td className="px-4 py-3.5 text-[14px]">₹25,000</td>
                                        </tr>
                                        <tr className="border-b border-[#DCE6F2]">
                                            <td className="px-4 py-3.5 text-[14px]">Security Deposit (Refundable)</td>
                                            <td className="px-4 py-3.5 text-[14px]">₹10,000</td>
                                        </tr>
                                        <tr className="odd:bg-[#F6FAFE]">
                                            <td className="px-4 py-3.5 text-[14px] font-bold">Total (per year)</td>
                                            <td className="px-4 py-3.5 text-[14px] text-[#ffc107] font-bold">₹1,85,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-[13px] text-[#7688A2] mt-3">* Fees are subject to revision. Scholarships available for meritorious students.</div>
                            </div>
                            <div>
                                <h3 className="text-[19px] font-bold font-display text-[#14284E] mb-4">Admission Process</h3>
                                <div className="[counter-reset:step]">
                                    <div className="flex gap-5 items-start pb-7.5 relative">
                                        <div className="w-[40px] h-[40px] rounded-full bg-[#14284E] text-white flex items-center justify-center font-display font-bold flex-none [counter-increment:step] before:content-[counter(step)]"></div>
                                        <div>
                                            <h4 className="text-[16px] font-bold font-display text-[#14284E] mb-1">Fill Application</h4>
                                            <p className="text-[14px] text-[#4B5A72]">Complete the online application form on the SRMU website.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 items-start pb-7.5 relative">
                                        <div className="w-[40px] h-[40px] rounded-full bg-[#14284E] text-white flex items-center justify-center font-display font-bold flex-none [counter-increment:step] before:content-[counter(step)]"></div>
                                        <div>
                                            <h4 className="text-[16px] font-bold font-display text-[#14284E] mb-1">Entrance & Counselling</h4>
                                            <p className="text-[14px] text-[#4B5A72]">Appear for the university entrance exam or qualifying exam and attend the counselling process.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 items-start pb-7.5 relative">
                                        <div className="w-[40px] h-[40px] rounded-full bg-[#14284E] text-white flex items-center justify-center font-display font-bold flex-none [counter-increment:step] before:content-[counter(step)]"></div>
                                        <div>
                                            <h4 className="text-[16px] font-bold font-display text-[#14284E] mb-1">Document Verification</h4>
                                            <p className="text-[14px] text-[#4B5A72]">Verify your academic documents and eligibility.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 items-start">
                                        <div className="w-[40px] h-[40px] rounded-full bg-[#14284E] text-white flex items-center justify-center font-display font-bold flex-none [counter-increment:step] before:content-[counter(step)]"></div>
                                        <div>
                                            <h4 className="text-[16px] font-bold font-display text-[#14284E] mb-1">Fee Payment & Enrollment</h4>
                                            <p className="text-[14px] text-[#4B5A72]">Pay the admission fee to secure your seat and complete enrollment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <div className={`${Classes["container"]} px-6 my-10`}>
                    <div className="text-center bg-[#14284E] rounded-[20px] py-16 px-7.5">
                        <h2 className="text-[clamp(24px,3.2vw,34px)] font-bold font-display text-white mb-3">Ready to build a career in Cyber Security?</h2>
                        <p className="text-[#C7D3E6] max-w-[52ch] mx-auto mb-6.5">
                            Join SRMU's B.Tech CSE program with L&T and become an industry-ready expert. Apply now for the upcoming academic year.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <a href="#" className="bg-[#ffc107] text-white font-bold text-[14px] px-5.5 py-3.25 rounded-md hover:bg-[#8F5A16] transition-all hover:-translate-y-0.5">
                                Apply Now
                            </a>
                            <a
                                href="#"
                                className="bg-transparent text-white font-bold text-[14px] px-5.5 py-3.25 rounded-md border border-white/50 hover:border-white transition-all hover:-translate-y-0.5"
                            >
                                Download Brochure
                            </a>
                            <a
                                href="#"
                                className="bg-transparent text-white font-bold text-[14px] px-5.5 py-3.25 rounded-md border border-white/50 hover:border-white transition-all hover:-translate-y-0.5"
                            >
                                WhatsApp Now
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BTechCseCyberSecurityNew;