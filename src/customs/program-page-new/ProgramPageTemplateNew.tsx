import React, { useState, useRef } from "react";
import Classes from "../../utils/styles/Global.module.css";
import {
  ArrowLeft, ArrowRight, Download, PhoneCall, Cpu, Lock, Code2, Shield,
  ChevronDown, ChevronUp, Settings, Wrench, PenTool, Zap, Factory, Car
} from "lucide-react";
import { Link } from "react-router-dom";
import ltLogo from "../../assets/new-home/l-t.webp";
import type { ProgramPageDataNew } from "../../types/programPageNew";
import DepartmentPlacements, { defaultRecruiterLogos } from "../../components/academics/departmentOfComputerScienceAndEngineeringNew/DepartmentPlacements";
import DepartmentScholarships from "../../components/academics/departmentOfComputerScienceAndEngineeringNew/DepartmentScholarships";

// ----------------------------------------------------------------
// Icon lookup helper
// ----------------------------------------------------------------
const CardIcon = ({ icon }: { icon?: string }) => {
  const cls = "w-7 h-7 text-[#38bdf8]";
  if (icon === "lock") return <Lock className="w-full h-full" strokeWidth={1} />;
  if (icon === "shield") return <Shield className={cls} />;
  if (icon === "code") return <Code2 className={cls} />;
  if (icon === "settings") return <Settings className={cls} />;
  if (icon === "wrench") return <Wrench className={cls} />;
  if (icon === "design") return <PenTool className={cls} />;
  if (icon === "energy") return <Zap className={cls} />;
  if (icon === "factory") return <Factory className={cls} />;
  if (icon === "car") return <Car className={cls} />;
  return <Cpu className={cls} />;
};

const CustomerSupportIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={className || "si-glyph si-glyph-customer-support"} fill="currentColor" stroke="currentColor">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <title>715</title>
      <defs></defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(1.000000, 0.000000)" fill="currentColor">
          <g transform="translate(0.000000, 2.000000)">
            <path d="M8.005,10.094 C6.563,10.094 5.098,9.238 4.243,8.105 C0.141,8.105 0.017,13.965 0.017,13.965 L15.992,13.965 C15.992,13.965 16.314,8.079 11.701,8.079 C10.847,9.226 9.447,10.094 8.005,10.094 Z" className="si-glyph-fill"></path>
            <path d="M11.441,3.069 C11.441,4.755 9.902,7.979 8.002,7.979 C6.105,7.979 4.565,4.754 4.565,3.069 C4.565,1.384 6.104,0.016 8.002,0.016 C9.902,0.017 11.441,1.385 11.441,3.069 L11.441,3.069 Z" className="si-glyph-fill"></path>
          </g>
          <path d="M12.975,3.614 C12.975,3.298 12.535,3.043 11.989,3.041 L11.989,2.39 C11.989,2.293 12.026,0.022 8.014,0.022 C4.004,0.022 4.041,2.293 4.041,2.39 L4.041,3.064 C4.031,3.064 4.023,3.061 4.014,3.061 C3.471,3.061 3.034,3.312 3.034,3.623 L3.034,6.377 C3.034,6.686 3.472,6.938 4.014,6.938 C4.556,6.938 4.996,6.686 4.996,6.377 L4.996,3.623 C4.996,3.58 4.969,3.541 4.953,3.501 L4.953,2.75 C4.953,2.681 4.665,0.967 8.014,0.967 C11.364,0.967 11.016,2.681 11.016,2.75 L11.016,3.541 C11.01,3.566 10.991,3.588 10.991,3.614 L10.991,6.431 C10.991,6.748 11.434,7.005 11.983,7.005 C11.995,7.005 12.004,7.001 12.016,7.001 L12.016,8.03 L11.032,8.03 L11.032,9 L12.985,9 L12.975,3.614 L12.975,3.614 Z" className="si-glyph-fill"></path>
        </g>
      </g>
    </g>
  </svg>
);

// ================================================================
// ProgramPageTemplateNew — main reusable template
// All sections rendered from the `data` prop.
// ================================================================
interface ProgramPageTemplateNewProps {
  data: ProgramPageDataNew;
}

const ProgramPageTemplateNew: React.FC<ProgramPageTemplateNewProps> = ({ data }) => {
  const { heroBanner, whyStudy, ltBenefits, industryExposure, placement, labs, yearJourney, fee, poPsoPlo, careerOpportunities, programComparison } = data;
  const isCyberSecurityPage = heroBanner.specialization.toLowerCase().includes("cyber security");
  const buttonClasses = (classes: string) => isCyberSecurityPage
    ? classes.split(/\s+/).filter((name) => !name.startsWith("hover:") && !name.startsWith("group-hover:")).join(" ")
    : classes;

  // ---- Refs ----
  const industriesScrollRef = useRef<HTMLDivElement>(null);
  const scrollIndustries = (direction: "left" | "right") => {
    if (industriesScrollRef.current) industriesScrollRef.current.scrollBy({ left: direction === "left" ? -220 : 220, behavior: "smooth" });
  };

  // ---- State ----
  const [activeTab, setActiveTab] = useState("year1");
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [rm, setRm] = useState<Record<string, boolean>>({});
  const toggleRm = (k: string) => setRm((p) => ({ ...p, [k]: !p[k] }));
  const toggleSection = (section: string) => setOpenSection((cur) => (cur === section ? null : section));

  const yearKeys = ["year1", "year2", "year3", "year4"] as const;
  const yearDataMap = { year1: yearJourney.year1, year2: yearJourney.year2, year3: yearJourney.year3, year4: yearJourney.year4 };

  return (
    <div className="program-page-new text-[#14284E] bg-white antialiased">
      <main>

        {/* ===== HERO BANNER ===== */}
        <section className="relative w-full overflow-hidden flex items-center sm:pt-[78px] sm:pb-8 md:min-h-[720px] md:pt-36 md:pb-20 bg-[#071329]">
          <img src={heroBanner.mobileBannerUrl} alt={`${heroBanner.specialization} Banner`} className={`w-full block sm:hidden relative z-0 ${heroBanner.specialization.includes('Data Science') ? 'h-[135vw] object-fill' : 'h-auto'}`} />
          <img src={heroBanner.desktopBannerUrl} alt={`${heroBanner.specialization} Banner`} className="absolute inset-0 w-full h-full object-cover z-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071329]/15 via-[#091a38]/5 to-transparent z-0"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf820_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-50 z-0"></div>
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#1b4f91]/25 rounded-full blur-[130px] pointer-events-none z-0"></div>
          <div className="absolute top-1/2 right-4 w-80 h-80 bg-[#ffb703]/15 rounded-full blur-[120px] pointer-events-none z-0"></div>
          <div className="absolute inset-0 flex flex-col justify-between pt-[78px] pb-5 z-10 w-full sm:relative sm:inset-auto sm:pt-0 sm:pb-0 sm:block">
            <div className={`${Classes["container"]} flex flex-col justify-between h-full sm:h-auto w-full`}>
              <div className="w-full max-w-[650px] text-white text-left mt-2 sm:mt-0">
                <h2 className="text-[clamp(24px,3vw,36px)] font-semibold mb-1 leading-[1.2] drop-shadow-md">{heroBanner.degreeTitle}</h2>
                <h1 className="text-[clamp(40px,5vw,64px)] leading-[1.1] font-bold text-[#38bdf8] drop-shadow-md">
                  {heroBanner.specialization === "Data Science & Artificial Intelligence" ? (
                    <>
                      Data Science & <span className="sm:whitespace-nowrap">Artificial Intelligence</span>
                    </>
                  ) : (
                    heroBanner.specialization
                  )}
                </h1>
                <div className="h-[3px] bg-[#38bdf8] w-[140px] sm:w-[200px] mt-1 mb-2 sm:mb-4 rounded-full"></div>
                {heroBanner.subtitle && (
                  <p className="hidden sm:block text-[clamp(16px,2vw,22px)] font-light mt-2 sm:mt-4 drop-shadow-md text-justify">
                    In collaboration with <span className="font-bold">L&T</span>
                  </p>
                )}
              </div>
              <div className="flex flex-row items-center gap-3 mt-auto sm:mt-8 w-full max-w-[650px]">
                <a href={heroBanner.applyNowUrl} target="_blank" rel="noopener noreferrer" className={buttonClasses("flex-1 sm:flex-none text-center bg-[#ffb703] hover:bg-[#ffa000] text-[#14284E] font-bold text-[13px] sm:text-[15px] px-3 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-colors shadow-lg border border-[#ffb703] uppercase")}>
                  Apply Now
                </a>
                <a href={heroBanner.brochureUrl} target="_blank" rel="noopener noreferrer" className={buttonClasses("flex-1 sm:flex-none text-center flex items-center justify-center gap-1.5 sm:gap-2 bg-[#14284E] hover:bg-[#1B4F91] text-white font-bold text-[13px] sm:text-[15px] px-3 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-colors shadow-lg border border-[#1B4F91]")}>
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline font-bold">DOWNLOAD DEPARTMENT</span> <span className="font-bold">BROCHURE</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MOBILE APPLY FORM ===== */}
        <section className="sm:hidden bg-[#0f1b33] py-8 px-4 w-full">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10 max-w-[650px] mx-auto">
            <div className="bg-[#14284E] px-4 py-3 text-center">
              <h3 className="text-white font-bold text-[15px]">Shri Ramswaroop Memorial University</h3>
              <div className="w-8 h-0.5 bg-[#ffb703] mx-auto mt-2 rounded-full"></div>
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
                  <option value="">Level</option><option>UG</option><option>PG</option>
                </select>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-500 outline-none focus:border-[#14284E] bg-white">
                  <option value="">Programme</option>
                  <option>B.Tech CSE {heroBanner.specialization}</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-500 outline-none focus:border-[#14284E] bg-white">
                  <option value="">State</option><option>Uttar Pradesh</option><option>Delhi</option><option>Other</option>
                </select>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-500 outline-none focus:border-[#14284E] bg-white">
                  <option value="">City</option><option>Lucknow</option><option>Other</option>
                </select>
              </div>
              <p className="text-[10px] text-gray-500 flex items-start gap-1.5 text-justify">
                <input type="checkbox" defaultChecked className="mt-0.5 shrink-0" />
                I authorise SRMU and its representatives to Call, SMS, Email or WhatsApp me regarding admissions and programmes.
              </p>
              <button className={buttonClasses("w-full bg-[#ffb703] hover:bg-[#ffa000] text-[#14284E] font-bold text-[14px] py-3 rounded-xl transition-colors flex items-center justify-center gap-2")}>APPLY NOW →</button>
            </div>
          </div>
        </section>

        {/* ===== WHY STUDY ===== */}
        <section id="why" className="pt-8 md:pt-10 pb-4 sm:pb-6 px-4 sm:px-6 bg-[#F0F6FB]">
          <div className={`${Classes["container"]}`}>
            <div className="w-full mb-5 sm:mb-11">
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">
                Why Study B.Tech CSE {heroBanner.specialization}<span className="text-[#ffb703]"> in {whyStudy.year} ?</span>
              </h2>
            </div>
            <div className="relative bg-[#FFFBEB] sm:bg-white border border-[#ffb703] sm:border-l-4 sm:border-l-[#ffb703] sm:border-t-[#ffb703] sm:border-b-[#ffb703] sm:border-r-[#ffb703] rounded-2xl p-7 sm:p-8 text-[14px] leading-5 sm:text-[17px] sm:leading-normal text-[#14284E] font-semibold italic mb-4 sm:mb-8">
              <span className="absolute top-4 left-7 sm:hidden text-[#ffb703] text-[30px] not-italic font-black leading-none">"</span>
              <div className={`${!rm["quote"] ? "line-clamp-2 sm:line-clamp-none" : ""}`}>
                <span className="hidden sm:inline">"</span>{whyStudy.quote.replace(/^[""]/, "").replace(/[""]$/, "")}
              </div>
              <button className="rm-btn sm:hidden mt-1.5 !mb-0" onClick={() => toggleRm("quote")}>{rm["quote"] ? "Read Less" : "Read More"}</button>
            </div>
            <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center my-8">
              <div className="space-y-4">
                {whyStudy.paragraphs.map((p, i) => (
                  <div key={i}>
                    <p className={`text-[#4B5A72] text-[15.5px] leading-relaxed text-justify ${!rm[`why${i}`] ? "rm-clamp" : ""}`}>{p}</p>
                    <button className="rm-btn" onClick={() => toggleRm(`why${i}`)}>{rm[`why${i}`] ? "Read Less" : "Read More"}</button>
                  </div>
                ))}
              </div>
              <div className="flex rounded-2xl overflow-hidden border border-[#DCE6F2] shadow-[0_4px_16px_rgba(15,31,61,0.05)] bg-[#f0f4fa] h-[200px] sm:h-[220px] items-center justify-center">
                <img src={whyStudy.imageUrl} alt={whyStudy.imageAlt} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-10">
              {whyStudy.benefitCards.map((card, i) => (
                <div key={i} className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/40 rounded-2xl p-3 sm:p-7 shadow-[0_4px_18px_rgba(15,31,61,0.04)] hover:shadow-[0_12px_30px_rgba(15,31,61,0.08)] hover:-translate-y-1.5 transition-all duration-300 group">
                  <span className="block sm:hidden w-2 h-2 rounded-full bg-[#ffb703] mb-2"></span>
                  <h3 className="text-[13px] sm:text-[16.5px] font-bold font-display text-[#14284E] group-hover:text-[#1B4F91] transition-colors mb-2.5">{card.title}</h3>
                  <p className="text-[12.5px] sm:text-[14px] text-[#4B5A72] leading-5 sm:leading-relaxed text-justify">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== L&T BENEFITS ===== */}
        <section className={`relative isolate overflow-hidden pt-8 sm:pt-10 pb-8 md:pb-10 px-4 sm:px-6 ${isCyberSecurityPage ? "bg-[#FFF0B5]" : "bg-white"}`}>
          {isCyberSecurityPage && (
            <>
              <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-36 h-72 w-72 rounded-full bg-[#FFB703]/25 sm:h-96 sm:w-96" />
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-36 -left-24 h-72 w-72 rounded-full bg-[#FFB703]/20 sm:h-[26rem] sm:w-[26rem]" />
              <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-28 w-44 rounded-tr-[100%] bg-[#FFB703]/15 sm:h-40 sm:w-72" />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-10 hidden h-24 w-28 opacity-60 sm:block"
                style={{ backgroundImage: "radial-gradient(circle, #FFB703 2px, transparent 2.5px)", backgroundSize: "22px 22px" }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-3 bottom-24 hidden h-24 w-32 opacity-60 sm:block"
                style={{ backgroundImage: "radial-gradient(circle, #FFB703 2px, transparent 2.5px)", backgroundSize: "22px 22px" }}
              />
              <svg aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full sm:h-28 md:h-36" viewBox="0 0 1440 180" preserveAspectRatio="none">
                <path d="M0 92 C210 142 360 137 565 94 C790 47 1014 36 1218 73 C1310 90 1388 110 1440 122 L1440 180 L0 180Z" fill="#FFD34F" fillOpacity=".34" />
                <path d="M0 124 C210 164 388 158 604 123 C850 84 1040 79 1228 108 C1320 122 1392 139 1440 146 L1440 180 L0 180Z" fill="#FFB703" fillOpacity=".16" />
              </svg>
            </>
          )}
          <div className={`${Classes["container"]} relative z-10`}>
            {isCyberSecurityPage && (
              <svg aria-hidden="true" className="pointer-events-none absolute right-0 top-28 hidden h-[260px] w-[220px] xl:block 2xl:h-[300px] 2xl:w-[255px]" viewBox="0 0 300 340" fill="none">
                <defs>
                  <linearGradient id="cyberShieldFill" x1="88" y1="46" x2="213" y2="223" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#477FD6" />
                    <stop offset="1" stopColor="#173F91" />
                  </linearGradient>
                  <linearGradient id="cyberStandFill" x1="48" y1="264" x2="252" y2="318" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFE37A" />
                    <stop offset="1" stopColor="#FFB703" />
                  </linearGradient>
                  <filter id="cyberShieldShadow" x="45" y="25" width="210" height="245" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feDropShadow dx="0" dy="10" stdDeviation="9" floodColor="#173F91" floodOpacity=".2" />
                  </filter>
                </defs>
                <ellipse cx="150" cy="300" rx="112" ry="25" fill="#FFB703" fillOpacity=".18" />
                <path d="M54 274c0-11 43-20 96-20s96 9 96 20v16c0 12-43 22-96 22s-96-10-96-22v-16Z" fill="url(#cyberStandFill)" />
                <ellipse cx="150" cy="274" rx="96" ry="21" fill="#FFE98F" />
                <ellipse cx="150" cy="292" rx="96" ry="21" stroke="#F4AE00" strokeOpacity=".48" strokeWidth="2" />
                <g filter="url(#cyberShieldShadow)">
                  <path d="M150 35 226 65v59c0 56-31 92-76 116-45-24-76-60-76-116V65l76-30Z" fill="url(#cyberShieldFill)" />
                  <path d="M150 48 214 73v50c0 46-24 77-64 100-40-23-64-54-64-100V73l64-25Z" stroke="#9FC4FF" strokeOpacity=".6" strokeWidth="2" />
                  <path d="M130 119v-9a20 20 0 0 1 40 0v9" stroke="white" strokeWidth="8" strokeLinecap="round" />
                  <rect x="119" y="116" width="62" height="57" rx="11" fill="white" />
                  <circle cx="150" cy="139" r="6" fill="#2856A5" />
                  <path d="m147 143-3 13h12l-3-13" fill="#2856A5" />
                </g>
                <ellipse cx="150" cy="132" rx="139" ry="48" transform="rotate(-17 150 132)" stroke="#FFB703" strokeWidth="3" strokeOpacity=".8" />
                <circle cx="30" cy="169" r="8" fill="#FFB703" />
                <circle cx="274" cy="96" r="9" fill="#FFB703" />
              </svg>
            )}
            <div className="w-full mb-8">
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">
                How Does <img src={ltLogo} alt="L&T EduTech" className="h-[28px] sm:h-[36px] inline-block align-middle mx-1 sm:mx-2 -mt-1" /> Benefit B.Tech CSE {heroBanner.specialization} <span className="text-[#ffb703]">SRMU Students?</span>
              </h2>
            </div>
            <div className={`w-full ${isCyberSecurityPage ? "xl:pr-[250px]" : ""}`}>
              <div className="mb-5">
                <p className="text-[15.5px] text-[#4B5A72] leading-relaxed text-justify">{ltBenefits.introText}</p>
                <div className={rm["ovw1"] ? "block mt-4" : "hidden sm:block mt-4"}>
                  <div className="flex flex-col gap-3 mb-6">
                    {ltBenefits.domainRows.map((row, ri) => (
                      <div key={ri} className="flex flex-wrap items-center gap-y-3 gap-x-2 sm:gap-x-3">
                        {row.tags.map((tag, ti, arr) => (
                          <div key={ti} className="flex items-center gap-2 sm:gap-3">
                            <span className="bg-[#E6F0FA] text-[#1B4F91] text-[13px] sm:text-[14px] font-medium px-4 py-2 rounded-full whitespace-nowrap">{tag}</span>
                            {ti < arr.length - 1 && <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#1B4F91]/30"></span>}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <p className="text-[15.5px] text-[#4B5A72] leading-relaxed mb-5 text-justify">{ltBenefits.followUpText}</p>
                  <p className="text-[15.5px] text-[#14284E] font-semibold mb-3">{ltBenefits.projectsHeading}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    <ul className="list-disc pl-5 space-y-2 text-[15.5px] text-[#4B5A72] marker:text-[#ffb703]">
                      {ltBenefits.projectsCol1.map((p, i) => <li key={i}>{p.text}</li>)}
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-[15.5px] text-[#4B5A72] marker:text-[#ffb703]">
                      {ltBenefits.projectsCol2.map((p, i) => <li key={i}>{p.text}</li>)}
                    </ul>
                  </div>
                </div>
                <button className="rm-btn mt-2" onClick={() => toggleRm("ovw1")}>{rm["ovw1"] ? "Read Less" : "Read More"}</button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROGRAMME OVERVIEW TABLE ===== */}
        <section id="overview" className="relative py-8 md:py-10 px-4 sm:px-6 bg-cover bg-center bg-no-repeat scroll-mt-24" style={{ backgroundImage: `url('${ltBenefits.tableBackgroundImageUrl || '/back2.png'}')` }}>
          <div className={`relative z-10 ${Classes["container"]}`}>
            <div className="w-full mb-8 text-center max-w-4xl mx-auto">
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">
                Industry-Integrated Learning <span className="text-[#ffb703]">with L&amp;T</span>
              </h2>
              <div>
                <p className={`text-[16px] text-[#4B5A72] leading-relaxed text-justify ${!rm["lt1"] ? "rm-clamp" : ""}`}>
                  The program incorporates industry exposure through L&amp;T, helping students understand how concepts are applied in professional and technology-driven environments.
                </p>
                <button className="rm-btn mx-auto mt-2" onClick={() => toggleRm("lt1")}>{rm["lt1"] ? "Read Less" : "Read More"}</button>
              </div>
            </div>
            <div className="bg-white border border-[#DCE6F2] rounded-xl sm:rounded-3xl overflow-hidden shadow-[0_6px_25px_rgba(15,31,61,0.05)] max-w-4xl mx-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {ltBenefits.tableRows.slice(0, rm["table_more"] ? undefined : 6).map((row, idx) => (
                    <tr key={idx} className={`border-b border-[#DCE6F2] ${idx % 2 === 0 ? "bg-[#F6FAFE]" : "bg-white"} hover:bg-[#F6FAFE]/70 transition-colors`}>
                      <td className="px-3.5 py-3 sm:px-6 sm:py-4 text-[13px] sm:text-[14.5px] font-normal sm:font-semibold text-[#5B667A] sm:text-[#1B355F] w-[40%] sm:w-[38%]">{row.label}</td>
                      <td className="px-3.5 py-3 sm:px-6 sm:py-4 text-[13px] sm:text-[14.5px] text-right text-[#20283A] sm:text-[#4B5A72] font-semibold sm:font-medium">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="bg-[#F6FAFE] py-3 flex justify-center">
                <button type="button" onClick={() => toggleRm("table_more")} className={buttonClasses("flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors")}>
                  {rm["table_more"] ? "Show Less" : "See Full Content"}
                  <ChevronDown className={`w-4 h-4 transition-transform ${rm["table_more"] ? "rotate-180" : ""}`} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== INDUSTRY EXPOSURE ===== */}
        <section className="py-8 md:py-10 px-4 sm:px-6 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url('${industryExposure.sectionBackgroundImageUrl || '/new-banner-1.jpg'}')` }}>
          <div className={`${Classes["container"]} relative z-10`}>
            <div className="w-full">
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">
                {industryExposure.sectionTitle} <span className="text-[#ffb703]">{industryExposure.sectionTitleHighlight}</span>
              </h2>
              <p className={`text-[16px] text-[#4B5A72] leading-relaxed text-justify ${!rm["indExp3"] ? "rm-clamp" : ""}`}>{industryExposure.introParagraph}</p>
              <button className="rm-btn" onClick={() => toggleRm("indExp3")}>{rm["indExp3"] ? "Read Less" : "Read More"}</button>
              <h3 className="text-[19px] font-bold font-display text-[#14284E] my-3">{industryExposure.expertSessionsHeading}</h3>
              <p className={`text-[15.5px] text-[#4B5A72] leading-relaxed text-justify ${!rm["indExp4"] ? "rm-clamp" : ""}`}>{industryExposure.expertSessionsParagraph}</p>
              <button className="rm-btn" onClick={() => toggleRm("indExp4")}>{rm["indExp4"] ? "Read Less" : "Read More"}</button>
            </div>

            <div className="flex flex-col gap-5 mt-6">
              {/* Featured card */}
              <div className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/35 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(15,31,61,0.04)] transition-all flex flex-col md:flex-row">
                <div className="w-full md:w-5/12">
                  <img src={industryExposure.featuredCard.imageUrl} alt={industryExposure.featuredCard.title} className="w-full h-full object-cover min-h-[250px]" loading="lazy" />
                </div>
                <div className="w-full md:w-7/12 p-5 sm:p-7 flex flex-col">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#14284E] bg-[#ffb703] px-2.5 py-1 rounded">{industryExposure.featuredCard.badge}</span>
                      {industryExposure.featuredCard.secondaryBadge && (
                        <span className="text-[11px] font-bold tracking-wider text-[#4B5A72] bg-[#f1f5f9] px-2.5 py-1 rounded hidden sm:inline-block">{industryExposure.featuredCard.secondaryBadge}</span>
                      )}
                    </div>
                  </div>
                  <h4 className="text-[17px] sm:text-[20px] font-bold font-display text-[#14284E] mb-2 leading-snug">{industryExposure.featuredCard.title}</h4>
                  {industryExposure.featuredCard.presenter && (
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[14px] text-[#1B4F91] font-semibold bg-[#F6FAFE] border border-[#DCE6F2] px-3.5 py-1.5 rounded-full inline-block">{industryExposure.featuredCard.presenter}</span>
                    </div>
                  )}
                  <div className={!rm["featCard"] ? "rm-clamp" : ""}>
                    {industryExposure.featuredCard.paragraphs.map((p, i) => <p key={i} className="text-[14.5px] text-[#4B5A72] leading-relaxed mb-3.5 text-justify">{p}</p>)}
                  </div>
                  <button className="rm-btn !mt-2 self-start" onClick={() => toggleRm("featCard")}>{rm["featCard"] ? "Read Less" : "Read More"}</button>
                </div>
              </div>

              {/* Secondary cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {industryExposure.secondaryCards.map((card, ci) => (
                  <div key={ci} className="bg-white border border-[#DCE6F2] hover:border-[#1B4F91]/35 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(15,31,61,0.04)] transition-all flex flex-col sm:flex-row">
                    <div className="w-full sm:w-[140px] bg-[#071329] p-6 relative overflow-hidden flex flex-col items-center justify-center shrink-0">
                      <div className="absolute inset-0 bg-[#38bdf8] opacity-20 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.4)_0%,transparent_70%)]"></div>
                      <div className="relative z-10 w-14 h-14 text-[#38bdf8] mb-2">
                        <CardIcon icon={card.icon} />
                      </div>
                      <div className="text-white font-bold tracking-widest text-[11px] text-center relative z-10">{card.icon?.toUpperCase() || "AI"}</div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#14284E] bg-[#ffb703] px-2 py-1 rounded">{card.badge}</span>
                      </div>
                      <h4 className="text-[15px] sm:text-[17px] font-bold font-display text-[#14284E] mb-2 leading-snug">{card.title}</h4>
                      <div className="text-[13px] text-[#4B5A72] font-medium mb-3 border-b border-[#f1f5f9] pb-3">
                        <span className="text-[#14284E] font-bold">{card.presenter.split("·")[0]?.trim()}</span>{card.presenter.includes("·") ? ` · ${card.presenter.split("·").slice(1).join("·").trim()}` : ""}
                      </div>
                      <div className={!rm[`sec${ci}`] ? "rm-clamp text-[13.5px]" : "text-[13.5px]"}>
                        {card.paragraphs.map((p, i) => <p key={i} className="text-[#4B5A72] leading-relaxed mb-2 text-justify">{p}</p>)}
                      </div>
                      <button className="rm-btn !mt-2 self-start" onClick={() => toggleRm(`sec${ci}`)}>{rm[`sec${ci}`] ? "Read Less" : "Read More"}</button>
                    </div>
                  </div>
                ))}
                {/* Desktop button in empty slot for odd card count (Data Science) */}
                {industryExposure.secondaryCards.length % 2 !== 0 && (
                  <div className="hidden md:flex items-center justify-center h-full">
                    <Link to={industryExposure.departmentUrl} target="_blank" className={buttonClasses("inline-flex items-center bg-[#ffb703] hover:bg-[#ffa000] text-[#14284E] font-semibold text-[14.5px] px-6 py-3 rounded-md transition-colors shadow-sm hover:-translate-y-0.5 uppercase")}>
                      Know Your Department →
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile/Default button (hidden on desktop if odd card count) */}
            <div className={`flex justify-center w-full mt-8 sm:mt-12 ${industryExposure.secondaryCards.length % 2 !== 0 ? 'md:hidden' : ''}`}>
              <Link to={industryExposure.departmentUrl} target="_blank" className={buttonClasses("inline-flex items-center bg-[#ffb703] hover:bg-[#ffa000] text-[#14284E] font-semibold text-[14.5px] px-6 py-3 rounded-md transition-colors shadow-sm hover:-translate-y-0.5 uppercase")}>
                Know Your Department →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== PLACEMENT ===== */}
        <DepartmentPlacements
          recruiters={defaultRecruiterLogos}
          stats={placement.stats}
          imageUrl={placement.imageUrl}
          imageAlt={placement.imageAlt}
          placementDetailUrl={placement.placementDetailUrl}
        />

        {/* ===== LABS & CURRICULUM ===== */}
        <section className="py-8 md:py-10 px-4 sm:px-6 bg-[#F0F6FB]">
          <div className={`${Classes["container"]} mx-auto`}>
            <div className="w-full mb-5 sm:mb-10">
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.15] font-bold font-display text-[#14284E]">
                {labs.sectionTitle}<span className="text-[#ffb703]"> {labs.sectionTitleHighlight}</span>
              </h2>
              <p className="mt-4 text-[15px] leading-6 text-[#4B5A72] text-justify">{labs.introParagraph}</p>
            </div>

            {/* Curriculum image */}
            <div className="flex flex-col gap-6 sm:gap-8 mb-7">
              <div className="w-full overflow-x-auto pb-2">
                <div className="relative">
                  <img src={labs.curriculumImageDesktop} alt="Industry Integrated Curriculum" className="hidden sm:block w-full h-auto object-contain rounded-xl" loading="lazy" />
                  <img src={labs.curriculumImageMobile} alt="Industry Integrated Curriculum" className="sm:hidden w-full h-auto object-contain rounded-xl" loading="lazy" />
                  <div className="grid absolute top-[68%] left-[0.5%] sm:left-[3%] right-[0.5%] sm:right-[3%] grid-cols-8 gap-0.5 sm:gap-1 items-start px-0.5 sm:px-2">
                    {labs.curriculumOverlayItems.map((item, i) => (
                      <div key={i} className="text-center text-[5.5px] min-[375px]:text-[6.5px] sm:text-[clamp(9px,1.05vw,13px)] font-medium text-[#14284E] leading-[1.05] sm:leading-[1.15] break-words break-all sm:break-normal">{item.text.split("\n").map((t, j) => <React.Fragment key={j}>{t}{j < item.text.split("\n").length - 1 && <br />}</React.Fragment>)}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {labs.reelVideoUrl && (
              <div className="relative isolate overflow-hidden rounded-[26px] border border-[#C7DDED] bg-gradient-to-br from-[#F4FAFE] via-[#E5F2FB] to-[#DCECF8] p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10 shadow-[0_18px_50px_rgba(31,78,121,0.13)]">
                <style>{`
                  @keyframes reelCircuitFlow { to { stroke-dashoffset: -180; } }
                  @keyframes reelNodeFloat { 0%,100% { transform: translateY(0); opacity: .45; } 50% { transform: translateY(-9px); opacity: .9; } }
                  .reel-circuit-flow { animation: reelCircuitFlow 18s linear infinite; }
                  .reel-node-float { animation: reelNodeFloat 5s ease-in-out infinite; }
                  @media (prefers-reduced-motion: reduce) {
                    .reel-circuit-flow, .reel-node-float { animation: none; }
                  }
                `}</style>
                <svg aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 h-full w-full" viewBox="0 0 1200 430" preserveAspectRatio="none" fill="none">
                  <defs>
                    <linearGradient id="reelCircuitGradient" x1="0" y1="0" x2="1200" y2="430" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#1B4F91" stopOpacity=".03" />
                      <stop offset=".52" stopColor="#168AC0" stopOpacity=".3" />
                      <stop offset="1" stopColor="#1B4F91" stopOpacity=".08" />
                    </linearGradient>
                  </defs>
                  <path className="reel-circuit-flow" d="M-40 82H185L238 135H435L482 88H695L752 145H930L978 97H1240M-30 350H165L222 293H410L456 339H660L716 283H900L950 333H1235M585-20V68L635 118V213L588 260V450M1070-20V75L1020 125V215L1065 260V450" stroke="url(#reelCircuitGradient)" strokeWidth="2" strokeDasharray="7 12" />
                  <path d="M0 214H195L234 175H342M1200 214H1010L971 175H860" stroke="#1B4F91" strokeOpacity=".1" strokeWidth="1.5" />
                  <g className="reel-node-float" fill="#168AC0" fillOpacity=".45">
                    <circle cx="238" cy="135" r="4" /><circle cx="482" cy="88" r="4" /><circle cx="752" cy="145" r="4" /><circle cx="978" cy="97" r="4" />
                  </g>
                  <g fill="#1B4F91" fillOpacity=".22"><circle cx="222" cy="293" r="3" /><circle cx="456" cy="339" r="3" /><circle cx="716" cy="283" r="3" /><circle cx="950" cy="333" r="3" /></g>
                </svg>
                <div className="relative grid grid-cols-1 sm:grid-cols-[minmax(170px,0.7fr)_minmax(0,1.3fr)] lg:grid-cols-[250px_minmax(0,1fr)] items-center gap-5 sm:gap-7 lg:gap-10">
                  <div className="mx-auto w-full max-w-[230px] overflow-hidden rounded-2xl ring-1 ring-white/20 bg-black shadow-[0_16px_36px_rgba(0,0,0,0.38)] sm:max-w-none">
                    <video
                      src={labs.reelVideoUrl}
                      poster={labs.reelPosterUrl}
                      width="720"
                      height="1280"
                      autoPlay
                      loop
                      muted
                      controls
                      playsInline
                      preload="metadata"
                      aria-label="Cyber security labs video reel"
                      className="block w-full aspect-[9/16] max-h-[390px] object-cover"
                    />
                  </div>
                  <div className="py-1 text-center sm:py-4 lg:py-8">
                    <div className="text-center">
                      {/* <span className="inline-flex items-center rounded-full border border-[#168AC0]/30 bg-white/70 px-3 py-1 text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#12658F] shadow-sm">Industry integrated curriculum</span> */}
                      <h3 className="mt-3 text-[20px] sm:text-[26px] lg:text-[34px] leading-tight font-bold font-display text-[#14284E] inline-flex flex-wrap items-center justify-center gap-x-2">
                        {labs.curriculumSectionTitle.replace(/\\s+with L&T$/i, "")} <span className="text-[#ffb703]">with</span>
                        <img
                          src={ltLogo}
                          alt="L&T"
                          className="inline-block h-[28px] sm:h-[36px] w-auto object-contain align-middle"
                        />
                      </h3>
                    </div>
                    <p className="mx-auto mt-2 max-w-2xl text-center text-[13px] leading-relaxed text-[#405570] sm:mt-4 sm:text-[15px]">{labs.curriculumDescription}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-5 sm:mb-7 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1B4F91]">Explore the spaces</p>
                <h3 className="mt-1 text-[22px] sm:text-[30px] leading-tight font-bold font-display text-[#14284E]">Hands-on Cyber Security Labs</h3>
              </div>
              <p className="max-w-xl text-[13px] sm:text-[14px] leading-relaxed text-[#64748B]">Build practical skills across the tools and environments used by modern security teams.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
              {labs.labs.map((lab, index) => {
                const labImageUrl = lab.imageUrl ?? (index === 0 ? labs.cardBackgroundImageUrl : undefined);
                return (
                  <article key={lab.label} className="group overflow-hidden rounded-2xl border border-[#DCE6F2] bg-white shadow-[0_4px_18px_rgba(15,31,61,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,31,61,0.12)]">
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#0B1D3A] via-[#123B69] to-[#1475A5]">
                      {labImageUrl ? (
                        <img src={labImageUrl} alt={lab.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      ) : (
                        <div className="flex h-full items-center justify-center"><Shield className="h-14 w-14 text-white/60" strokeWidth={1.2} /></div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06142C]/75 via-transparent to-[#06142C]/10" />
                      <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-[#081A34]/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">{lab.label}</span>
                      {/* <span className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85">Practical learning environment</span> */}
                    </div>
                    <div className="p-4 sm:p-5">
                      <h4 className="text-[18px] font-bold font-display leading-snug text-[#14284E] group-hover:text-[#1B4F91] transition-colors">{lab.title}</h4>
                      <p className="mt-2 border-l-[3px] border-[#ffb703] pl-3 text-[13px] font-semibold leading-relaxed text-[#B86B00]">{lab.tagline}</p>
                      <p className="mt-3 text-[13px] leading-[1.65] text-[#526179]">{lab.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {lab.items.map((item) => (
                          <span key={item} className="rounded-lg bg-[#F1F6FB] px-2.5 py-1.5 text-[11px] font-medium leading-tight text-[#34506F]">{item}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
              <div className="flex items-center justify-center">
                <a href="tel:18001026004" className={buttonClasses("relative group overflow-hidden bg-gradient-to-r from-[#ffb703] via-[#ffc72c] to-[#ffa000] text-[#14284E] font-extrabold text-[14px] sm:text-[15px] px-8 py-3.5 rounded-lg shadow-[0_8px_20px_-8px_rgba(217,139,43,0.6)] hover:shadow-[0_12px_30px_rgba(255,183,3,0.65)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-center uppercase")}>
                  <PhoneCall className={buttonClasses("w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110")} />
                  <span>Have a Query? Talk to Expert</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4-YEAR JOURNEY ===== */}
        <section id="journey" className="py-8 md:py-10 px-4 sm:px-6 bg-[#E0F1FF]">
          <div className={`${Classes["container"]} mx-auto`}>
            <div className="w-full mb-11">
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                Your Journey from Student to <span className="text-[#ffb703]">{heroBanner.specialization} Professional</span>
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#4B5A72] text-justify">{yearJourney.introParagraph}</p>
            </div>

            {/* Desktop tab buttons */}
            <div className="hidden md:flex justify-center flex-wrap gap-2.5 mb-6.5">
              {yearKeys.map((key, idx) => (
                <button key={key} onClick={() => setActiveTab(key)} className={`font-display font-semibold text-[14.5px] px-5 py-2.75 rounded-lg border-[1.5px] ${activeTab === key ? "bg-[#14284E] border-[#14284E] text-white" : "bg-white border-[#DCE6F2] text-[#4B5A72]"}`}>
                  Year {idx + 1}
                </button>
              ))}
            </div>

            {/* Mobile accordions */}
            <div className="md:hidden space-y-3 mb-8">
              {yearKeys.map((key, idx) => {
                const yd = yearDataMap[key];
                return (
                  <div key={key}>
                    <button type="button" onClick={() => setActiveTab(activeTab === key ? "" : key)} className="w-full flex items-center justify-between rounded-xl border border-[#DCE6F2] bg-[#F6FAFE] px-3.5 py-3.5 text-left text-[13px] font-bold text-[#20283A]" aria-expanded={activeTab === key}>
                      <span className="font-normal text-[#5B667A]">Year</span>
                      <span className="font-bold text-[#20283A]">{yd.title}</span>
                    </button>
                    {activeTab === key && (
                      <div className="pt-4 pb-4 space-y-4 text-[13px] text-[#5B667A]">
                        <div>
                          <h4 className="font-bold text-[#20283A] mb-3">Subjects</h4>
                          <ul className="list-disc pl-5 space-y-2">{yd.subjects.map((s, i) => <li key={i}>{s}</li>)}</ul>
                        </div>
                        {!rm[`${key}_more`] && (
                <button type="button" onClick={() => toggleRm(`${key}_more`)} className={buttonClasses("w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5")}>
                            See Full Curriculum <ChevronDown className="w-4 h-4" />
                          </button>
                        )}
                        <div className={`space-y-4 ${rm[`${key}_more`] ? "block" : "hidden"}`}>
                          <div><h4 className="font-bold text-[#20283A] mb-3">Practical Learning</h4><ul className="list-disc pl-5 space-y-2">{yd.practicalLearning.map((s, i) => <li key={i}>{s}</li>)}</ul></div>
                          <div><h4 className="font-bold text-[#20283A] mb-3">Projects</h4><ul className="list-disc pl-5 space-y-2">{yd.projects.map((s, i) => <li key={i}>{s}</li>)}</ul></div>
                          <div><h4 className="font-bold text-[#20283A] mb-3">Software / Tools</h4><ul className="list-disc pl-5 space-y-2">{yd.tools.map((s, i) => <li key={i}>{s}</li>)}</ul></div>
                          {yd.outcome && <div className="pt-2"><strong className="text-[#20283A]">Outcome:</strong> {yd.outcome}</div>}
                          {rm[`${key}_more`] && (
                            <button type="button" onClick={() => toggleRm(`${key}_more`)} className={buttonClasses("w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 mt-2")}>
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

            {/* Desktop tab content */}
            {yearKeys.map((key) => {
              const yd = yearDataMap[key];
              return activeTab === key ? (
                <div key={key} className="hidden md:block bg-white border border-[#DCE6F2] rounded-xl p-7.5 max-w-4xl mx-auto">
                  <div className="italic text-[#ffb703] font-semibold mb-5 text-[15px]">{yd.quote}</div>
                  <div className="flex flex-col gap-6.5">
                    <div>
                      <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">Subjects</h4>
                      <ul>{yd.subjects.map((s, i) => <li key={i} className={`text-[14.5px] py-1.5 text-[#14284E] ${i < yd.subjects.length - 1 ? "border-b border-dashed border-[#DCE6F2]" : ""}`}>{s}</li>)}</ul>
                    </div>
                    {rm[`${key}_more`] && (
                      <>
                        <div>
                          <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">Practical Learning</h4>
                          <ul>{yd.practicalLearning.map((s, i) => <li key={i} className={`text-[14.5px] py-1.5 text-[#14284E] ${i < yd.practicalLearning.length - 1 ? "border-b border-dashed border-[#DCE6F2]" : ""}`}>{s}</li>)}</ul>
                        </div>
                        <div>
                          <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">Projects</h4>
                          <ul>{yd.projects.map((s, i) => <li key={i} className={`text-[14.5px] py-1.5 text-[#14284E] ${i < yd.projects.length - 1 ? "border-b border-dashed border-[#DCE6F2]" : ""}`}>{s}</li>)}</ul>
                        </div>
                        <div>
                          <h4 className="text-[14.5px] uppercase tracking-[0.04em] text-[#1B4F91] mb-2.5">Software / Tools</h4>
                          <ul>{yd.tools.map((s, i) => <li key={i} className={`text-[14.5px] py-1.5 text-[#14284E] ${i < yd.tools.length - 1 ? "border-b border-dashed border-[#DCE6F2]" : ""}`}>{s}</li>)}</ul>
                        </div>
                        {yd.outcome && <div className="md:col-span-2 mt-2 pt-4.5 border-t border-[#DCE6F2] text-[14.5px] text-[#4B5A72]"><b className="text-[#14284E]">Outcome:</b> {yd.outcome}</div>}
                      </>
                    )}
                  </div>
                  {!rm[`${key}_more`] && (
                    <div className="mt-5 flex justify-center">
                      <button type="button" onClick={() => toggleRm(`${key}_more`)} className={buttonClasses("w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 border border-[#DCE6F2] rounded-lg bg-[#F6FAFE] hover:bg-[#EAF2FB]")}>
                        See Full Curriculum <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  {rm[`${key}_more`] && (
                    <div className="mt-5 flex justify-center">
                      <button type="button" onClick={() => toggleRm(`${key}_more`)} className={buttonClasses("w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 px-6 border border-[#DCE6F2] rounded-lg bg-[#F6FAFE] hover:bg-[#EAF2FB]")}>
                        Show Less <ChevronUp className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              ) : null;
            })}
          </div>
        </section>

        {/* ===== FEE STRUCTURE ===== */}
        <section className="py-8 md:py-10 px-4 sm:px-6 bg-[#F0F6FB]">
          <div className={`${Classes["container"]} mx-auto`}>
            <div className="w-full mb-10">
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                Transparent <span className="text-[#ffb703]">Fee Structure</span>
              </h2>
              <div className="mt-4">
                <p className={`text-[15px] leading-7 text-[#4B5A72] text-justify ${!rm["fee1"] ? "rm-clamp" : ""}`}>
                  A quality engineering education is an investment in your future — with industry-oriented learning, advanced laboratories, and placement support.
                </p>
                <button className="rm-btn" onClick={() => toggleRm("fee1")}>{rm["fee1"] ? "Read Less" : "Read More"}</button>
              </div>
            </div>

            {/* Mobile fee cards */}
            <div className="sm:hidden space-y-4">
              <div className="rounded-2xl border border-[#DCE6F2] bg-white overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3.5 border-b border-[#DCE6F2]">
                  <span className="font-bold text-[14px] text-[#14284E]">Course Fee</span>
                  <span className="text-[11px] font-bold text-white bg-[#14284E] px-3 py-1 rounded-full">Per Year</span>
                </div>
                <div className="divide-y divide-dashed divide-[#DCE6F2]">
                  {fee.feeRows.slice(0, 5).map((row, i) => (
                    <div key={i} className="flex items-center justify-between px-4 py-3">
                      <span className="text-[13px] text-[#4B5A72]">{row.label}</span>
                      <span className="text-[13px] font-semibold text-[#14284E]">{row.yr1}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-[#DCE6F2] bg-white overflow-hidden">
                <div className="px-4 py-3.5 border-b border-[#DCE6F2]"><span className="font-bold text-[14px] text-[#14284E]">Optional Add-ons</span></div>
                <div className="divide-y divide-dashed divide-[#DCE6F2]">
                  {fee.feeRows.slice(4).map((row, i) => (
                    <div key={i} className="flex items-center justify-between px-4 py-3">
                      <span className="text-[13px] text-[#4B5A72]">{row.label}</span>
                      <span className="text-[13px] font-semibold text-[#14284E]">{row.yr1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop fee table */}
            <div className="hidden sm:block overflow-x-auto rounded-xl border border-[#DCE6F2] bg-white">
              <table className="w-full min-w-[800px] text-left">
                <thead>
                  <tr className="bg-[#14284E] text-white">
                    <th className="px-5 py-4 text-[14.5px] uppercase font-semibold">Fee Component</th>
                    <th className="px-5 py-4 text-[14.5px] uppercase font-semibold">1st Year</th>
                    <th className="px-5 py-4 text-[14.5px] uppercase font-semibold">2nd Year</th>
                    <th className="px-5 py-4 text-[14.5px] uppercase font-semibold">3rd Year</th>
                    <th className="px-5 py-4 text-[14.5px] uppercase font-semibold">4th Year</th>
                  </tr>
                </thead>
                <tbody className="text-[#1B355F] text-[14px]">
                  {fee.feeRows.map((row, i) => (
                    <tr key={i} className={`border-b border-[#DCE6F2] ${i % 2 !== 0 ? "bg-[#F6FAFE]" : ""}`}>
                      <td className="px-5 py-4">{row.label}</td>
                      <td className="px-5 py-4">{row.yr1}</td>
                      <td className="px-5 py-4">{row.yr2}</td>
                      <td className="px-5 py-4">{row.yr3}</td>
                      <td className="px-5 py-4">{row.yr4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <p className={`text-[14.5px] leading-5 text-[#718096] text-justify ${!rm["feeNote"] ? "rm-clamp" : ""}`}>{fee.feeNote}</p>
              <button className="rm-btn" onClick={() => toggleRm("feeNote")}>{rm["feeNote"] ? "Read Less" : "Read More"}</button>
            </div>
          </div>
        </section>

        {/* ===== SCHOLARSHIPS ===== */}
        <DepartmentScholarships eligibilityHref="#overview" />

        {/* ===== PO / PSO / PLO ===== */}
        <section className="py-8 md:py-10 px-6 bg-[#F0F6FB]">
          <div className={`${Classes["container"]} mx-auto`}>
            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
              PO, PLO & <span className="text-[#ffb703]">PSO</span>
            </h2>
            {[
              { key: "objectives", label: "Program Objectives", items: poPsoPlo.objectives.map((o) => o.text) },
              { key: "outcomes", label: "Program Learning Outcomes", items: poPsoPlo.learningOutcomes.map((o) => o.text) },
              { key: "specific", label: "Program Specific Outcomes", items: poPsoPlo.specificOutcomes.map((o) => o.text) },
            ].map(({ key, label, items }) => (
              <div key={key} className={`border-t ${key === "specific" ? "border-b" : ""} border-[#CBD5DF]`}>
                <button type="button" onClick={() => toggleSection(key)} className="w-full flex items-stretch text-left cursor-pointer">
                  <div className="flex-1 py-8 md:py-5 pr-6">
                    <h3 className="text-[17px] sm:text-[18px] md:text-[22px] font-bold text-[#102D43]">{label}</h3>
                    {openSection === key && (
                      <ul className="mt-8 pl-5 space-y-2 text-[15.5px] leading-6 text-[#14284E] list-disc">
                        {items.map((text, i) => <li key={i}>{text}</li>)}
                      </ul>
                    )}
                  </div>
                  <div className="flex w-[60px] sm:w-[90px] shrink-0 border-l border-[#CBD5DF] items-start justify-center pt-7 md:pt-5">
                    <span className="text-[34px] leading-none font-light text-[#202B32]">{openSection === key ? "↓" : "→"}</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CAREER OPPORTUNITIES ===== */}
        <section className="py-8 md:py-10 px-4 sm:px-6 bg-[#EEF5FC]">
          <div className={`${Classes["container"]} mx-auto`}>
            <div className="w-full mb-10">
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.15] font-bold font-display text-[#14284E]">
                Career Opportunities <span className="text-[#ffb703]">{careerOpportunities.headingHighlight}</span>
              </h2>
            </div>

            {/* Mobile layout */}
            <div className="md:hidden flex flex-col gap-5 mb-6">
              <div className="w-full">
                <p className={`text-[14.5px] leading-5 text-[#4B5A72] text-justify ${!rm["digSys"] ? "rm-clamp" : ""}`}>{careerOpportunities.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <button className="rm-btn !mt-0" onClick={() => toggleRm("digSys")}>{rm["digSys"] ? "Read Less" : "Read More"}</button>
                </div>
              </div>
            </div>

            {/* Mobile industry scroll */}
            <div className="md:hidden mt-4 relative">
              <div className="flex gap-2 justify-end mb-3 shrink-0">
                <button type="button" onClick={() => scrollIndustries("left")} className={buttonClasses("w-8 h-8 rounded-md border border-[#DCE6F2] bg-white text-[#14284E] flex items-center justify-center transition-colors hover:border-[#1B4F91] hover:text-[#1B4F91]")}><ArrowLeft className="w-4 h-4" /></button>
                <button type="button" onClick={() => scrollIndustries("right")} className={buttonClasses("w-8 h-8 rounded-md border border-[#DCE6F2] bg-white text-[#14284E] flex items-center justify-center transition-colors hover:border-[#1B4F91] hover:text-[#1B4F91]")}><ArrowRight className="w-4 h-4" /></button>
              </div>
              <div ref={industriesScrollRef} className="flex flex-nowrap gap-3 overflow-x-auto pb-2 scrollbar-hide scroll-smooth">
                {careerOpportunities.industries.map((item, i) => (
                  <div key={i} className="shrink-0 w-[calc(50%-6px)] bg-white border border-[#DCE6F2] rounded-xl p-4 whitespace-normal">
                    <h3 className="text-[13px] font-bold font-display text-[#14284E] mb-2 leading-snug">{item.title}</h3>
                    <div className="text-[10px] uppercase tracking-[0.08em] text-[#0F4A85] font-semibold mb-1.5">{item.descriptionLabel ?? "Protects"}</div>
                    <p className="text-[11.5px] leading-[1.5] text-[#4B5A72] text-justify">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex justify-center w-full">
                <a href="tel:9838904666" className={buttonClasses("inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#ffb703] hover:bg-[#ffa000] text-[#14284E] text-[14px] font-semibold rounded-lg shadow-sm transition-colors uppercase")}>
                  <CustomerSupportIcon className="w-4 h-4" /> Talk to Counsellor
                </a>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:grid md:grid-cols-[1.3fr_1fr] lg:grid-cols-[1.5fr_1fr] gap-6 mt-6 items-start">
              <div className="flex flex-col gap-5">
                <div className="w-full"><img src={careerOpportunities.imageUrl} alt={careerOpportunities.imageAlt} className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover rounded-xl border border-[#DCE6F2]" loading="lazy" /></div>
                <div className="pr-4">
                  <p className="text-[15px] leading-relaxed text-[#4B5A72] text-justify">{careerOpportunities.description}</p>
                  <a href="tel:9838904666" className={buttonClasses("inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-[#ffb703] text-[#14284E] text-[14px] font-semibold rounded-lg hover:bg-[#ffa000] hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg uppercase")}>
                    <CustomerSupportIcon className="w-4 h-4" /> Talk to Counsellor
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {careerOpportunities.industries.map((item, i) => (
                  <div key={i} className="bg-white border border-[#DCE6F2] rounded-xl overflow-hidden px-4 py-3">
                    <h3 className="text-[13.5px] font-bold font-display text-[#14284E] mb-1">{item.title}</h3>
                    <div className="text-[11px] uppercase tracking-[0.06em] text-[#718096] font-medium mb-1">{item.descriptionLabel ?? "Protects"}</div>
                    <p className="text-[12px] leading-5 text-[#4B5A72] truncate" title={item.description}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Role Cards */}
            {careerOpportunities.careerRoles && careerOpportunities.careerRoles.length > 0 && (
              <div className="mt-8">
                <h3 className="text-[24px] sm:text-[28px] font-bold font-display text-[#14284E] mb-5">Career <span className="text-[#ffb703]">Roles</span></h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {careerOpportunities.careerRoles.map((role, i) => (
                    <div key={i} className="bg-white border border-[#DCE6F2] rounded-xl p-4 hover:border-[#1B4F91]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                      <h4 className="text-[13.5px] font-bold font-display text-[#14284E] mb-2">{role.title}</h4>
                      <p className="text-[12.5px] leading-5 text-[#4B5A72] text-justify">{role.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ===== PROGRAM COMPARISON ===== */}
        <section className="pt-2 md:pt-4 pb-8 md:pb-10 px-4 sm:px-6 bg-[#E0F1FF]">
          <div className={`${Classes["container"]} mx-auto`}>
            <div className="w-full mb-9">
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.15] font-bold font-display text-[#14284E]">
                {programComparison.headers.find((h) => h.highlight)?.label} vs.
                <span className="text-[#ffb703]"> {programComparison.headers.filter((h) => !h.highlight && h.label !== "Feature").map((h) => h.label).join(", ")}</span>
              </h2>
            </div>

            {/* Mobile comparison table */}
            <div className="sm:hidden mb-10 rounded-xl border border-[#DCE6F2] bg-white flex flex-col">
              <div className="overflow-x-auto scrollbar-hide">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-[#14284E] text-white">
                      {programComparison.headers.map((h, i) => (
                        <th key={i} className="px-2 py-2 text-[11px] font-semibold whitespace-nowrap">{h.label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-[#1B355F]">
                    {programComparison.rows.slice(0, rm["table1"] ? undefined : 3).map((row, i) => (
                      <tr key={i} className="border-b border-[#DCE6F2] last:border-0">
                        <td className="px-2 py-2.5 text-[11px] font-medium whitespace-nowrap">{row.feature}</td>
                        {row.values.map((v, vi) => <td key={vi} className="px-2 py-2.5 text-[11px]">{v}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="w-full py-2.5 flex items-center justify-center text-[#14284E] font-semibold text-[13px] border-t border-[#DCE6F2]" onClick={() => toggleRm("table1")}>
                {rm["table1"] ? (<>View Less <ChevronUp className="w-4 h-4 ml-1" /></>) : (<>View More <ChevronDown className="w-4 h-4 ml-1" /></>)}
              </button>
            </div>

            {/* Desktop comparison table */}
            <div className="hidden sm:block mb-10 overflow-x-auto scrollbar-hide bg-white border border-[#DCE6F2] rounded-xl shadow-[0_4px_20px_rgba(15,31,61,0.03)]">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr className="bg-[#F4F7FB] border-b border-[#DCE6F2] text-[#14284E]">
                    {programComparison.headers.map((h, i) => (
                      <th key={i} className="px-4 lg:px-6 py-4 text-[14px] font-bold w-[20%]">{h.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-[#4B5A72]">
                  {programComparison.rows.map((row, i) => (
                    <tr key={i} className="border-b border-[#F0F4F8] last:border-0 hover:bg-[#F6FAFE]/50 transition-colors">
                      <td className="px-4 lg:px-6 py-4 text-[13.5px] font-medium text-[#14284E]">{row.feature}</td>
                      {row.values.map((v, vi) => <td key={vi} className="px-4 lg:px-6 py-4 text-[13.5px]">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Choose If Cards */}
            {programComparison.chooseIfCards && programComparison.chooseIfCards.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4">
                {programComparison.chooseIfCards.map((card, ci) => (
                  <div key={ci} className={`${card.bgClass ?? "bg-white"} sm:bg-white border border-[#DCE6F2] rounded-xl p-5`}>
                    <h3 className="text-[14.5px] font-bold font-display text-[#14284E] mb-3">{card.heading}</h3>
                    <ul className="space-y-2 list-none! ml-0 sm:ml-4 text-[14.5px] leading-5 text-[#4B5A72]">
                      {card.items.map((item, ii) => (
                        <li key={ii}><span className="text-[#ffb703] sm:text-[#4B5A72]">✓</span> {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>

      </main>
    </div>
  );
};

export default ProgramPageTemplateNew;
