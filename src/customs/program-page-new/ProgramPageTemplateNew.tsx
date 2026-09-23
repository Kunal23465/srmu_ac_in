import React, { useEffect, useState, useRef } from "react";
import Classes from "../../utils/styles/Global.module.css";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowLeft, ArrowRight, Download, PhoneCall, Cpu, Lock, Code2, Shield,
  ChevronDown, ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import ltLogo from "../../assets/new-home/l-t.webp";
import type { ProgramPageDataNew } from "../../types/programPageNew";

// ----------------------------------------------------------------
// Shared recruiter logos (same across all program pages)
// ----------------------------------------------------------------
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

// ----------------------------------------------------------------
// Icon lookup helper
// ----------------------------------------------------------------
const CardIcon = ({ icon }: { icon?: string }) => {
  const cls = "w-7 h-7 text-[#38bdf8]";
  if (icon === "lock") return <Lock className="w-full h-full" strokeWidth={1} />;
  if (icon === "shield") return <Shield className={cls} />;
  if (icon === "code") return <Code2 className={cls} />;
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

  // ---- Refs ----
  const labsScrollRef = useRef<HTMLDivElement>(null);
  const industriesScrollRef = useRef<HTMLDivElement>(null);

  const scrollLabs = (direction: "left" | "right") => {
    if (labsScrollRef.current) labsScrollRef.current.scrollBy({ left: direction === "left" ? -250 : 250, behavior: "smooth" });
  };
  const scrollIndustries = (direction: "left" | "right") => {
    if (industriesScrollRef.current) industriesScrollRef.current.scrollBy({ left: direction === "left" ? -220 : 220, behavior: "smooth" });
  };

  // ---- State ----
  const [activeTab, setActiveTab] = useState("year1");
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [rm, setRm] = useState<Record<string, boolean>>({});
  const toggleRm = (k: string) => setRm((p) => ({ ...p, [k]: !p[k] }));
  const toggleSection = (section: string) => setOpenSection((cur) => (cur === section ? null : section));

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => { setCanScrollPrev(emblaApi.canScrollPrev()); setCanScrollNext(emblaApi.canScrollNext()); };
    update();
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
    const auto = window.setInterval(() => emblaApi.scrollNext(), 3500);
    return () => { window.clearInterval(auto); emblaApi.off("select", update); emblaApi.off("reInit", update); };
  }, [emblaApi]);

  const yearKeys = ["year1", "year2", "year3", "year4"] as const;
  const yearDataMap = { year1: yearJourney.year1, year2: yearJourney.year2, year3: yearJourney.year3, year4: yearJourney.year4 };

  return (
    <div className="text-[#14284E] bg-white antialiased">
      <main>

        {/* ===== HERO BANNER ===== */}
        <section className="relative w-full overflow-hidden flex items-center sm:pt-[78px] sm:pb-8 md:min-h-[720px] md:pt-36 md:pb-20 bg-[#071329]">
          <img src={heroBanner.mobileBannerUrl} alt={`${heroBanner.specialization} Banner`} className={`w-full block sm:hidden relative z-0 ${heroBanner.specialization.includes('Data Science') ? 'h-[135vw] object-fill' : 'h-auto'}`} />
          <img src={heroBanner.desktopBannerUrl} alt={`${heroBanner.specialization} Banner`} className="absolute inset-0 w-full h-full object-cover z-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071329]/15 via-[#091a38]/5 to-transparent z-0"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf820_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-50 z-0"></div>
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#1b4f91]/25 rounded-full blur-[130px] pointer-events-none z-0"></div>
          <div className="absolute top-1/2 right-4 w-80 h-80 bg-[#ffc107]/15 rounded-full blur-[120px] pointer-events-none z-0"></div>
          <div className="absolute inset-0 flex flex-col justify-between pt-[78px] pb-5 z-10 w-full sm:relative sm:inset-auto sm:pt-0 sm:pb-0 sm:block">
            <div className={`${Classes["container"]} flex flex-col justify-between h-full sm:h-auto w-full`}>
              <div className="w-full max-w-[650px] text-white text-left mt-2 sm:mt-0">
                <h2 className="text-[clamp(24px,3vw,36px)] font-semibold mb-1 leading-[1.2] drop-shadow-md">{heroBanner.degreeTitle}</h2>
                <h1 className="text-[clamp(40px,5vw,64px)] leading-[1.1] font-bold text-[#38bdf8] drop-shadow-md">{heroBanner.specialization}</h1>
                <div className="h-[3px] bg-[#38bdf8] w-[140px] sm:w-[200px] mt-1 mb-2 sm:mb-4 rounded-full"></div>
                {heroBanner.subtitle && (
                  <p className="hidden sm:block text-[clamp(16px,2vw,22px)] font-light mt-2 sm:mt-4 drop-shadow-md text-justify">
                    In collaboration with <span className="font-bold">L&T</span>
                  </p>
                )}
              </div>
              <div className="flex flex-row items-center gap-3 mt-auto sm:mt-8 w-full max-w-[650px]">
                <a href={heroBanner.applyNowUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none text-center bg-[#ffc107] text-[#14284E] font-bold text-[13px] sm:text-[15px] px-3 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-colors shadow-lg border border-[#ffc107]">
                  Apply Now
                </a>
                <a href={heroBanner.brochureUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none text-center flex items-center justify-center gap-1.5 sm:gap-2 bg-[#14284E] text-white font-bold text-[13px] sm:text-[15px] px-3 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-colors shadow-lg border border-[#1B4F91]">
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download Department</span> Brochure
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
              <button className="w-full bg-[#ffc107] hover:bg-[#e0a800] text-[#14284E] font-bold text-[14px] py-3 rounded-xl transition-colors flex items-center justify-center gap-2">APPLY NOW →</button>
            </div>
          </div>
        </section>

        {/* ===== WHY STUDY ===== */}
        <section id="why" className="pt-8 md:pt-10 pb-4 sm:pb-6 px-4 sm:px-6 bg-[#F0F6FB]">
          <div className={`${Classes["container"]}`}>
            <div className="w-full mb-5 sm:mb-11">
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">
                Why Study B.Tech CSE {heroBanner.specialization}<span className="text-[#ffc107]"> in {whyStudy.year} ?</span>
              </h2>
            </div>
            <div className="relative bg-[#FFFBEB] sm:bg-white border border-[#ffc107] sm:border-l-4 sm:border-l-[#ffc107] sm:border-t-[#ffc107] sm:border-b-[#ffc107] sm:border-r-[#ffc107] rounded-2xl p-7 sm:p-8 text-[14px] leading-5 sm:text-[17px] sm:leading-normal text-[#14284E] font-semibold italic mb-4 sm:mb-8">
              <span className="absolute top-4 left-7 sm:hidden text-[#D78610] text-[30px] not-italic font-black leading-none">"</span>
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
                  <span className="block sm:hidden w-2 h-2 rounded-full bg-[#28B7A8] mb-2"></span>
                  <h3 className="text-[13px] sm:text-[16.5px] font-bold font-display text-[#14284E] group-hover:text-[#1B4F91] transition-colors mb-2.5">{card.title}</h3>
                  <p className="text-[12.5px] sm:text-[14px] text-[#4B5A72] leading-5 sm:leading-relaxed text-justify">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== L&T BENEFITS ===== */}
        <section className="pt-8 sm:pt-10 pb-8 md:pb-10 px-4 sm:px-6 bg-white">
          <div className={`${Classes["container"]}`}>
            <div className="w-full mb-8">
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">
                How Does <img src={ltLogo} alt="L&T EduTech" className="h-[28px] sm:h-[36px] inline-block align-middle mx-1 sm:mx-2 -mt-1" /> Benefit B.Tech CSE {heroBanner.specialization} <span className="text-[#ffc107]">SRMU Students?</span>
              </h2>
            </div>
            <div className="w-full">
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
                    <ul className="list-disc pl-5 space-y-2 text-[15.5px] text-[#4B5A72] marker:text-[#ffc107]">
                      {ltBenefits.projectsCol1.map((p, i) => <li key={i}>{p.text}</li>)}
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-[15.5px] text-[#4B5A72] marker:text-[#ffc107]">
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
        <section className="relative py-8 md:py-10 px-4 sm:px-6 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${ltBenefits.tableBackgroundImageUrl || '/back2.png'}')` }}>
          <div className={`relative z-10 ${Classes["container"]}`}>
            <div className="w-full mb-8 text-center max-w-4xl mx-auto">
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3.5">
                Industry-Integrated Learning <span className="text-[#ffc107]">with L&amp;T</span>
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
                <button type="button" onClick={() => toggleRm("table_more")} className="flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors">
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
                {industryExposure.sectionTitle} <span className="text-[#ffc107]">{industryExposure.sectionTitleHighlight}</span>
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
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#D78610] bg-[#fff8eb] px-2.5 py-1 rounded">{industryExposure.featuredCard.badge}</span>
                      {industryExposure.featuredCard.secondaryBadge && (
                        <span className="text-[11px] font-bold tracking-wider text-[#4B5A72] bg-[#f1f5f9] px-2.5 py-1 rounded hidden sm:inline-block">{industryExposure.featuredCard.secondaryBadge}</span>
                      )}
                    </div>
                  </div>
                  <h4 className="text-[17px] sm:text-[20px] font-bold font-display text-[#14284E] mb-2 leading-snug">{industryExposure.featuredCard.title}</h4>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[14px] text-[#1B4F91] font-semibold bg-[#F6FAFE] border border-[#DCE6F2] px-3.5 py-1.5 rounded-full inline-block">{industryExposure.featuredCard.presenter}</span>
                  </div>
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
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#D78610] bg-[#fff8eb] px-2 py-1 rounded">{card.badge}</span>
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
                    <Link to={industryExposure.departmentUrl} target="_blank" className="inline-flex items-center bg-[#ffc107] hover:bg-[#D78610] text-[#14284E] font-semibold text-[14.5px] px-6 py-3 rounded-md transition-colors shadow-sm hover:-translate-y-0.5">
                      Know Your Department →
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile/Default button (hidden on desktop if odd card count) */}
            <div className={`flex justify-center w-full mt-8 sm:mt-12 ${industryExposure.secondaryCards.length % 2 !== 0 ? 'md:hidden' : ''}`}>
              <Link to={industryExposure.departmentUrl} target="_blank" className="inline-flex items-center bg-[#ffc107] hover:bg-[#D78610] text-[#14284E] font-semibold text-[14.5px] px-6 py-3 rounded-md transition-colors shadow-sm hover:-translate-y-0.5">
                Know Your Department →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== PLACEMENT ===== */}
        <section className="pt-8 md:pt-10 pb-4 px-4 sm:px-6 bg-gradient-to-b from-white to-[#E0F1FF]">
          <div className={`${Classes["container"]} mx-auto`}>
            <div className="grid lg:grid-cols-2 gap-5 items-start">
              <div className="w-full">
                <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                  Where Our Students <span className="text-[#ffc107]">Get Placed</span>
                </h2>
                <div className="mt-4">
                  <p className={`text-[15px] leading-6 text-[#4B5A72] text-justify ${!rm["placement1"] ? "rm-clamp" : ""}`}>
                    Dedicated placement training — resume building, coding practice, mock interviews and group discussions — starts from the final year.
                  </p>
                  <button className="rm-btn" onClick={() => toggleRm("placement1")}>{rm["placement1"] ? "Read Less" : "Read More"}</button>
                </div>
                {/* Mobile stats */}
                <div className="sm:hidden mt-6 bg-[#14284E] rounded-2xl p-5 grid grid-cols-2 gap-x-6 gap-y-5">
                  {placement.stats.map((s, i) => (
                    <div key={i}>
                      <div className="text-[15px] font-bold text-[#ffc107] mb-1">{s.val}</div>
                      <div className="text-[12.5px] text-white/80 leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>
                {/* Desktop stats */}
                <div className="hidden sm:grid grid-cols-2 gap-4 mt-6">
                  {placement.stats.map((s, i) => (
                    <div key={i} className="bg-white border border-[#DCE6F2] rounded-xl p-5 min-h-[90px] shadow-sm">
                      <div className="text-[14.5px] font-semibold text-[#ffc107] mb-3">{s.val}</div>
                      <h3 className="text-[14px] font-bold font-display text-[#14284E]">{s.label}</h3>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full mt-6 lg:mt-0">
                <img src={placement.imageUrl} alt={placement.imageAlt} className="w-full aspect-[14/8] object-cover rounded-xl border border-[#DCE6F2]" loading="lazy" />
              </div>
            </div>

            {/* Recruiter logos */}
            <div className="mt-7">
              <div className="flex items-center justify-between gap-4 mb-3.5">
                <h3 className="text-[17px] font-bold font-display text-[#14284E]">Top Recruiters</h3>
                <div className="hidden sm:flex gap-2">
                  <button type="button" onClick={() => emblaApi?.scrollPrev()} disabled={!canScrollPrev} title="Previous recruiters" aria-label="Previous recruiters" className="w-9 h-9 rounded-md border border-[#DCE6F2] bg-white text-[#14284E] flex items-center justify-center transition-colors hover:border-[#1B4F91] hover:text-[#1B4F91] disabled:opacity-40 disabled:cursor-not-allowed"><ArrowLeft className="w-4 h-4" /></button>
                  <button type="button" onClick={() => emblaApi?.scrollNext()} disabled={!canScrollNext} title="Next recruiters" aria-label="Next recruiters" className="w-9 h-9 rounded-md border border-[#DCE6F2] bg-white text-[#14284E] flex items-center justify-center transition-colors hover:border-[#1B4F91] hover:text-[#1B4F91] disabled:opacity-40 disabled:cursor-not-allowed"><ArrowRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="sm:hidden overflow-hidden relative">
                <div className="flex gap-3 w-max animate-marquee hover:[animation-play-state:paused]">
                  {[...recruiterLogos, ...recruiterLogos].map(([src, name], index) => (
                    <div key={`${name}-${index}`} className="h-[64px] w-[110px] shrink-0 bg-white border border-[#DCE6F2] rounded-md px-3 py-2 flex items-center justify-center">
                      <img src={src} alt={name} className="max-h-6 w-auto object-contain" />
                    </div>
                  ))}
                </div>
              </div>
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
            <div className="flex justify-center w-full mt-10">
              <Link to={placement.placementDetailUrl} target="_blank" className="inline-flex items-center bg-[#ffc107] hover:bg-[#D78610] text-[#14284E] font-semibold text-[14.5px] px-6 py-3 rounded-md transition-colors shadow-sm hover:-translate-y-0.5">
                View Placement Details →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== LABS & CURRICULUM ===== */}
        <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-b from-white to-[#E6E6E7]">
          <div className={`${Classes["container"]} mx-auto`}>
            <div className="w-full mb-5 sm:mb-10">
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.15] font-bold font-display text-[#14284E]">
                {labs.sectionTitle}<span className="text-[#ffc107]"> {labs.sectionTitleHighlight}</span>
              </h2>
              <p className="mt-4 text-[15px] leading-6 text-[#4B5A72] text-justify">{labs.introParagraph}</p>
            </div>

            {/* Curriculum image */}
            <div className="flex flex-col gap-6 sm:gap-8 mb-7">
              <div className="w-full overflow-x-auto pb-2">
                <div className="relative">
                  <img src={labs.curriculumImageDesktop} alt="Industry Integrated Curriculum" className="hidden sm:block w-full h-auto object-contain rounded-xl" loading="lazy" />
                  <img src={labs.curriculumImageMobile} alt="Industry Integrated Curriculum" className="sm:hidden w-full h-auto object-contain rounded-xl" loading="lazy" />
                  <div className="hidden sm:grid absolute top-[68%] left-[3%] right-[3%] grid-cols-8 gap-1 items-start px-2">
                    {labs.curriculumOverlayItems.map((item, i) => (
                      <div key={i} className="text-center text-[clamp(9px,1.05vw,13px)] font-medium text-[#14284E] leading-[1.15]">{item.text.split("\n").map((t, j) => <React.Fragment key={j}>{t}{j < item.text.split("\n").length - 1 && <br />}</React.Fragment>)}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E] mb-3">
                  {labs.curriculumSectionTitle} <span className="text-[#ffc107]">with L&T</span>
                </h3>
                <div>
                  <p className={`text-[14.5px] leading-5 text-[#4B5A72] text-justify ${!rm["curr1"] ? "rm-clamp" : ""}`}>{labs.curriculumDescription}</p>
                  <button className="rm-btn" onClick={() => toggleRm("curr1")}>{rm["curr1"] ? "Read Less" : "Read More"}</button>
                </div>
              </div>
            </div>

            {/* Mobile lab scroll header */}
            <div className="sm:hidden mb-5 flex items-end justify-between gap-4">
              <div><h2 className="mt-2 text-[22px] leading-tight font-bold font-display text-[#14284E]">Where Theory Becomes Practice</h2></div>
              <div className="flex gap-2 shrink-0">
                <button type="button" onClick={() => scrollLabs("left")} className="w-8 h-8 rounded-md border border-[#DCE6F2] bg-white text-[#14284E] flex items-center justify-center transition-colors hover:border-[#1B4F91] hover:text-[#1B4F91]"><ArrowLeft className="w-4 h-4" /></button>
                <button type="button" onClick={() => scrollLabs("right")} className="w-8 h-8 rounded-md border border-[#DCE6F2] bg-white text-[#14284E] flex items-center justify-center transition-colors hover:border-[#1B4F91] hover:text-[#1B4F91]"><ArrowRight className="w-4 h-4" /></button>
              </div>
            </div>

            {/* Lab cards */}
            <div ref={labsScrollRef} className="flex flex-nowrap gap-3 overflow-x-auto pb-2 scrollbar-hide sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0 sm:overflow-visible sm:pb-0 scroll-smooth">
              {/* First lab — with video reel between card 1 and 2 */}
              {labs.labs.map((lab, li) => (
                <React.Fragment key={li}>
                  <div 
                    style={li === 0 && labs.cardBackgroundImageUrl ? { backgroundImage: `url('${labs.cardBackgroundImageUrl}')` } : {}}
                    className={`relative ${li === 0 && labs.cardBackgroundImageUrl ? "bg-cover bg-right bg-no-repeat" : ""} shrink-0 w-[235px] bg-white border border-[#DCE6F2] rounded-2xl overflow-hidden sm:w-auto sm:shrink shadow-[0_2px_12px_rgba(15,31,61,0.05)] hover:shadow-[0_8px_28px_rgba(15,31,61,0.1)] hover:-translate-y-1 transition-all duration-300 group`}
                  >
                    {/* Gradient to blend the image seamlessly into the white background */}
                    {li === 0 && labs.cardBackgroundImageUrl && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent sm:from-white sm:via-white/70 sm:to-transparent pointer-events-none z-0"></div>
                    )}

                    <div className="relative z-10">
                      {/* Mobile header */}
                      <button type="button" onClick={() => toggleSection(lab.label)} className="relative md:hidden w-full flex items-center justify-between px-4 pt-8 pb-3 text-left" aria-expanded={openSection === lab.label}>
                        <span className="absolute top-3 left-4 text-[10px] font-mono font-semibold uppercase tracking-[0.12em] text-[#168C82]">{lab.label}</span>
                        <h3 className="text-[17px] font-bold font-display text-[#14284E]">{lab.title}</h3>
                      </button>
                      {/* Desktop content */}
                      <div className="hidden md:block">
                      <div className="h-1 w-full bg-gradient-to-r from-[#1B4F91] to-[#38bdf8]"></div>
                      <div className="p-5 pt-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EBF5FF] text-[#1B4F91] text-[10px] font-bold uppercase tracking-widest mb-3">{lab.label}</span>
                        <h3 className="text-[17px] font-bold font-display text-[#14284E] mb-2 group-hover:text-[#1B4F91] transition-colors">{lab.title}</h3>
                        <p className="text-[14.5px] font-semibold italic text-[#ffc107] mb-1">{lab.tagline}</p>
                        <p className="text-[14.5px] leading-5 text-[#4B5A72] mb-4 text-justify">{lab.description}</p>
                        <ul className="list-disc pl-5 mt-2 text-[#4B5A72] text-[13px] sm:text-[14.5px] columns-1 sm:columns-2 gap-x-4 sm:gap-x-6 [&>li]:mb-1.5 [&>li]:break-inside-avoid">
                          {lab.items.map((item, ii) => <li key={ii}>{item}</li>)}
                        </ul>
                      </div>
                    </div>
                    {/* Mobile content */}
                    <div className="md:hidden px-3 pb-3">
                      <p className="text-[14.5px] font-semibold italic text-[#ffc107] mb-1">{lab.tagline}</p>
                      <p className="text-[14.5px] leading-5 text-[#4B5A72] mb-4 text-justify">{lab.description}</p>
                      <ul className="list-disc pl-5 mt-2 text-[#4B5A72] text-[13px] columns-1 [&>li]:mb-1.5">
                        {lab.items.map((item, ii) => <li key={ii}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Insert video reel after first lab */}
                  {li === 0 && (
                    <div className="order-first sm:order-none shrink-0 w-[235px] sm:w-[280px] lg:w-[320px] sm:justify-self-center flex flex-col">
                      <div className="relative p-[2px] rounded-2xl bg-gradient-to-b from-[#1B4F91] via-[#38bdf8] to-[#ffc107] shadow-[0_8px_32px_rgba(27,79,145,0.25)]">
                        <div className="rounded-[14px] overflow-hidden bg-black flex items-center justify-center">
                          <video src={labs.reelVideoUrl} width="720" height="1280" controls autoPlay loop muted playsInline className="w-full h-auto aspect-[9/16] object-cover"></video>
                        </div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-8 flex justify-center w-full">
              <a href="tel:18001026004" className="relative group overflow-hidden bg-gradient-to-r from-[#ffc107] via-[#ffcd38] to-[#e0a800] text-[#071329] font-extrabold text-[14px] sm:text-[15px] px-8 py-3.5 rounded-lg shadow-[0_8px_20px_-8px_rgba(217,139,43,0.6)] hover:shadow-[0_12px_30px_rgba(255,193,7,0.65)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-center">
                <PhoneCall className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span>Have Query? Talk to Expert</span>
              </a>
            </div>
          </div>
        </section>

        {/* ===== 4-YEAR JOURNEY ===== */}
        <section id="journey" className="py-8 md:py-10 px-4 sm:px-6 bg-[#E0F1FF]">
          <div className={`${Classes["container"]} mx-auto`}>
            <div className="w-full mb-11">
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                Your Journey from Student to <span className="text-[#ffc107]">{heroBanner.specialization} Professional</span>
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
                          <button type="button" onClick={() => toggleRm(`${key}_more`)} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5">
                            See Full Curriculum <ChevronDown className="w-4 h-4" />
                          </button>
                        )}
                        <div className={`space-y-4 ${rm[`${key}_more`] ? "block" : "hidden"}`}>
                          <div><h4 className="font-bold text-[#20283A] mb-3">Practical Learning</h4><ul className="list-disc pl-5 space-y-2">{yd.practicalLearning.map((s, i) => <li key={i}>{s}</li>)}</ul></div>
                          <div><h4 className="font-bold text-[#20283A] mb-3">Projects</h4><ul className="list-disc pl-5 space-y-2">{yd.projects.map((s, i) => <li key={i}>{s}</li>)}</ul></div>
                          <div><h4 className="font-bold text-[#20283A] mb-3">Software / Tools</h4><ul className="list-disc pl-5 space-y-2">{yd.tools.map((s, i) => <li key={i}>{s}</li>)}</ul></div>
                          {yd.outcome && <div className="pt-2"><strong className="text-[#20283A]">Outcome:</strong> {yd.outcome}</div>}
                          {rm[`${key}_more`] && (
                            <button type="button" onClick={() => toggleRm(`${key}_more`)} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 mt-2">
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
                  <div className="italic text-[#ffc107] font-semibold mb-5 text-[15px]">{yd.quote}</div>
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
                      <button type="button" onClick={() => toggleRm(`${key}_more`)} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 border border-[#DCE6F2] rounded-lg bg-[#F6FAFE] hover:bg-[#EAF2FB]">
                        See Full Curriculum <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  {rm[`${key}_more`] && (
                    <div className="mt-5 flex justify-center">
                      <button type="button" onClick={() => toggleRm(`${key}_more`)} className="w-full flex justify-center items-center gap-1 text-[13px] font-bold text-[#1B4F91] hover:text-[#14284E] transition-colors py-1.5 px-6 border border-[#DCE6F2] rounded-lg bg-[#F6FAFE] hover:bg-[#EAF2FB]">
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
        <section className="py-8 md:py-10 px-4 sm:px-6 bg-gray-200">
          <div className={`${Classes["container"]} mx-auto`}>
            <div className="w-full mb-10">
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
                Transparent <span className="text-[#ffc107]">Fee Structure</span>
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
                  <tr className="bg-[#142E5C] text-white">
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

            {/* Scholarship section */}
            <h3 className="text-[20px] lg:text-[24px] font-bold font-display text-[#14284E] mt-10 mb-4">Scholarship <span className="text-[#ffc107]">Schemes</span></h3>
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

        {/* ===== PO / PSO / PLO ===== */}
        <section className="py-8 md:py-10 px-6 bg-[#F0F6FB]">
          <div className={`${Classes["container"]} mx-auto`}>
            <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-bold font-display text-[#14284E]">
              PO, PLO & <span className="text-[#ffc107]">PSO</span>
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
        <section className="py-8 md:py-10 px-4 sm:px-6 bg-[#E6E6E7]">
          <div className={`${Classes["container"]} mx-auto`}>
            <div className="w-full mb-10">
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.15] font-bold font-display text-[#14284E]">
                Career Opportunities <span className="text-[#ffc107]">{careerOpportunities.headingHighlight}</span>
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
                <button type="button" onClick={() => scrollIndustries("left")} className="w-8 h-8 rounded-md border border-[#DCE6F2] bg-white text-[#14284E] flex items-center justify-center transition-colors hover:border-[#1B4F91] hover:text-[#1B4F91]"><ArrowLeft className="w-4 h-4" /></button>
                <button type="button" onClick={() => scrollIndustries("right")} className="w-8 h-8 rounded-md border border-[#DCE6F2] bg-white text-[#14284E] flex items-center justify-center transition-colors hover:border-[#1B4F91] hover:text-[#1B4F91]"><ArrowRight className="w-4 h-4" /></button>
              </div>
              <div ref={industriesScrollRef} className="flex flex-nowrap gap-3 overflow-x-auto pb-2 scrollbar-hide scroll-smooth">
                {careerOpportunities.industries.map((item, i) => (
                  <div key={i} className="shrink-0 w-[calc(50%-6px)] bg-white border border-[#DCE6F2] rounded-xl p-4 whitespace-normal">
                    <h3 className="text-[13px] font-bold font-display text-[#14284E] mb-2 leading-snug">{item.title}</h3>
                    <div className="text-[10px] uppercase tracking-[0.08em] text-[#38B2AC] font-semibold mb-1.5">{item.descriptionLabel ?? "Protects"}</div>
                    <p className="text-[11.5px] leading-[1.5] text-[#4B5A72] text-justify">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex justify-center w-full">
                <a href="tel:9838904666" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#14284E] hover:bg-[#1B4F91] text-white text-[14px] font-semibold rounded-lg shadow-sm transition-colors">
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
                  <a href="tel:9838904666" className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-[#14284E] text-white text-[14px] font-semibold rounded-lg hover:bg-[#1B4F91] hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg">
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
                <h3 className="text-[19px] font-bold font-display text-[#14284E] mb-5">Career <span className="text-[#ffc107]">Roles</span></h3>
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
                <span className="text-[#ffc107]"> {programComparison.headers.filter((h) => !h.highlight && h.label !== "Feature").map((h) => h.label).join(", ")}</span>
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
                        <li key={ii}><span className="text-[#2BB5A0] sm:text-[#4B5A72]">✓</span> {item}</li>
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
