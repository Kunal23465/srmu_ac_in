import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, Building2, HandHeart, Lightbulb, Megaphone, Scale, ShieldCheck, Sparkles, UserRound, UsersRound, X } from "lucide-react";
import { Link } from "react-router-dom";
import { initiativesData, items, stats, WomenEmpowerOverviewData } from "../../../data/campus-life/women-empowerment/women-empowerment-data";
import empowermentImage from "../../../assets/images/campus-life/women-empowerment/we-believe-in.jpg";
import campusImage from "../../../assets/images/about/aboutUs/knowyourcampusimg.webp";
import studentLeadersImage from "../../../assets/images/home/girls-image.webp";
import styles from "./WomenEmpowermentInitiatives.module.css";
import overviewStyles from "./WomenEmpowermentOverview.module.css";

const containerClass = "mx-auto w-full min-w-0 max-w-[1280px]";
const eyebrowClass = "mb-3 text-[11px] font-bold tracking-[0.16em] text-[#0F4A85] uppercase";
const headingClass = "mb-5 text-[26px] leading-[1.15] font-bold text-[#14284E] md:text-[36px] [&>span]:text-[#FFB703]";
const buttonClass = "inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#FFB703] px-6 py-3 text-xs font-bold tracking-wide text-[#14284E] uppercase transition-colors hover:bg-[#FFB703] motion-reduce:transition-none";
const overviewContent = WomenEmpowerOverviewData.content.trim();
const overviewBreak = overviewContent.match(/women['’]s day/i);
const overviewPreviewEnd = overviewBreak ? (overviewBreak.index ?? 0) + overviewBreak[0].length : overviewContent.length;
const overviewPreview = overviewContent.slice(0, overviewPreviewEnd);
const overviewRemainder = overviewContent.slice(overviewPreviewEnd);

const initiativeIcons = [ShieldCheck, UsersRound, HandHeart, UsersRound, Megaphone, ShieldCheck];
const initiativeLabels = [
  ["Discipline", "Service", "Nation"],
  ["Safety", "Support", "Empowerment"],
  ["Health", "Awareness", "Wellbeing"],
  ["Awareness", "Education", "Empowerment"],
  ["Guidance", "Counselling", "Support"],
  ["Safety", "Skills", "Self-defence"],
];
const principleIcons = [UsersRound, UsersRound, Scale, BriefcaseBusiness, UserRound, ShieldCheck, BookOpen, Lightbulb, UsersRound, Building2];
const principleStyles = [
  { edge: "border-l-[#FFB703]", icon: "bg-[#FFB703] text-[#173866]" },
  { edge: "border-l-[#48A9E6]", icon: "bg-[#B8D9F8] text-[#173866]" },
  { edge: "border-l-[#173866]", icon: "bg-[#173866] text-white" },
  { edge: "border-l-[#7ABEFF]", icon: "bg-[#D4E9FF] text-[#173866]" },
  { edge: "border-l-[#FFB703]", icon: "bg-[#FFB703] text-[#173866]" },
  { edge: "border-l-[#3197CE]", icon: "bg-[#3197CE] text-white" },
  { edge: "border-l-[#173866]", icon: "bg-[#173866] text-white" },
  { edge: "border-l-[#7ABEFF]", icon: "bg-[#D4E9FF] text-[#173866]" },
  { edge: "border-l-[#FFB703]", icon: "bg-[#FFB703] text-[#173866]" },
  { edge: "border-l-[#3197CE]", icon: "bg-[#3197CE] text-white" },
];
function useCardScroll<T extends HTMLElement>() {
  const listRef = useRef<T>(null);
  const [controls, setControls] = useState({ previous: false, next: false });

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const updateControls = () => {
      const previous = list.scrollLeft > 2;
      const next = list.scrollLeft + list.clientWidth < list.scrollWidth - 2;
      setControls((current) => current.previous === previous && current.next === next ? current : { previous, next });
    };
    updateControls();
    list.addEventListener("scroll", updateControls, { passive: true });
    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(list);
    return () => {
      list.removeEventListener("scroll", updateControls);
      resizeObserver.disconnect();
    };
  }, []);

  const scrollCards = (direction: -1 | 1) => {
    const list = listRef.current;
    const card = list?.firstElementChild;
    if (!list || !card) return;
    const gap = parseFloat(window.getComputedStyle(list).columnGap) || 0;
    list.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  return { listRef, controls, scrollCards };
}

export default function WomenEmpowermentNew() {
  const [activeInitiative, setActiveInitiative] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [overviewExpanded, setOverviewExpanded] = useState(false);
  const { listRef: principleListRef, controls: scrollControls, scrollCards: scrollPrinciples } = useCardScroll<HTMLUListElement>();
  const { listRef: initiativeListRef, controls: initiativeControls, scrollCards: scrollInitiatives } = useCardScroll<HTMLDivElement>();
  const INITIAL_COUNT = 6;

  useEffect(() => {
    if (activeInitiative === null) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveInitiative(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeInitiative]);

  return (
    <main className="overflow-x-clip bg-white text-[#14284E] antialiased md:![text-align:justify] [&_p]:md:![text-align:justify] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#0F4A85]">
      <section className="relative isolate flex min-h-[clamp(390px,74vw,520px)] items-center overflow-hidden bg-[#071329] px-4 pt-24 pb-12 sm:px-6 md:pt-28" aria-labelledby="women-empowerment-new-title">
        <img src={empowermentImage} alt="A student on campus with a laptop" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center]" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#071329]/95 via-[#091a38]/75 to-[#071329]/25" aria-hidden="true" />
        <div className={`${containerClass} relative z-10`}>
          {/* <p className="mb-3 text-sm font-bold tracking-[0.18em] text-[#FFB703] uppercase">Educate · Empower · Lead</p> */}
          <h1 id="women-empowerment-new-title" className="max-w-[720px] text-left text-[32px] leading-[1.1] font-bold text-white/85 drop-shadow-md md:text-[51px]">Empowering women, <span className="text-[#FFB703]">shaping futures.</span></h1>
          <div className="my-5 h-[3px] w-20 rounded-full bg-[#FFB703]" aria-hidden="true" />
          <p className="max-w-[590px] text-[15px] leading-relaxed text-[#E0F1FF] md:text-base">At SRMU, equality and opportunity are part of campus life. Through awareness, support and leadership, we help every student build confidence and realise their potential.</p>
          <a href="#women-empowerment-new-initiatives" className={`${buttonClass} mt-7 rounded-lg!`}>Explore our initiatives <ArrowDown size={17} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="hidden sm:block bg-[#E0F1FF] px-4 py-5 sm:px-6 sm:py-4" aria-label="Women empowerment on campus">
        <dl className="mx-auto grid w-full max-w-[1100px] grid-cols-3 gap-x-2 gap-y-5 sm:gap-x-4">
          {stats.map(({ value, label }) => <div key={label} className="flex min-w-0 flex-col items-center gap-1 text-center">
            <dt className="text-[10px] leading-snug font-bold tracking-wide uppercase lg:text-[11px]">{label}</dt>
            <dd className="order-first m-0 text-[28px] leading-none font-extrabold text-[#D62C2B] sm:text-[32px]">{value}</dd>
          </div>)}
        </dl>
      </section>

      <section className={overviewStyles.section} aria-labelledby="women-empowerment-overview-title">
        <div className={`${containerClass} ${overviewStyles.container}`}>
          <div>
            <p className={overviewStyles.eyebrow}>A culture of respect and opportunity</p>
            <h2 id="women-empowerment-overview-title" className={overviewStyles.heading}>Educate and <span>empower.</span></h2>
            <p className={overviewStyles.description}>
              {overviewPreview}
              {!overviewExpanded && overviewRemainder && <span className="sm:hidden">.</span>}
              <span id="women-empowerment-overview-remainder" className={overviewExpanded ? "inline" : "hidden sm:inline"}>{overviewRemainder}</span>
            </p>
            {overviewRemainder && <button type="button" onClick={() => setOverviewExpanded((expanded) => !expanded)} aria-expanded={overviewExpanded} aria-controls="women-empowerment-overview-remainder" className={`rm-btn ${overviewStyles.readMore} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4A85] sm:hidden`}>
              {overviewExpanded ? "Read Less" : "Read More"}
            </button>}
            <div className={overviewStyles.cards}>
              {[
                { icon: ShieldCheck, title: "Safe spaces", text: "Support, dignity and respect for everyone.", theme: overviewStyles.safeCard },
                { icon: Sparkles, title: "Room to lead", text: "Confidence to pursue ideas and opportunity.", theme: overviewStyles.leadCard },
              ].map(({ icon: Icon, title, text, theme }) => <div key={title} className={`${overviewStyles.card} ${theme}`}>
                <span className={overviewStyles.icon}><Icon size={29} strokeWidth={1.8} aria-hidden="true" /></span>
                <div className={overviewStyles.cardCopy}><h3>{title}</h3><p>{text}</p></div>
                <span className={overviewStyles.arrow} aria-hidden="true"><ArrowRight size={18} /></span>
              </div>)}
            </div>
          </div>
          <figure className={overviewStyles.figure}>
            <img src={empowermentImage} alt="A student learning independently on campus" width={1000} height={516} loading="lazy" decoding="async" className={overviewStyles.image} />
            <figcaption className={overviewStyles.caption}><span>Confidence, learning and opportunity for every student.</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-white px-4 py-10 sm:px-6 md:py-14" aria-labelledby="women-empowerment-new-principles-title">
        <div className="pointer-events-none absolute -top-[184px] -left-[184px] hidden size-[360px] rounded-full bg-[#173866] xl:block" aria-hidden="true" />
        <div className="pointer-events-none absolute -top-[224px] -left-[224px] hidden size-[440px] rounded-full border border-[#48A9E6]/75 xl:block" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-10 -bottom-16 hidden h-[360px] w-[390px] rounded-tl-[100%] border-t border-l border-[#48A9E6]/75 xl:block" aria-hidden="true" />
        <img src={campusImage} alt="" aria-hidden="true" loading="lazy" className="pointer-events-none absolute -right-2 -bottom-16 hidden h-[300px] w-[300px] rounded-tl-[100%] object-cover object-center opacity-95 xl:block" />
        <div className={`${containerClass} relative`}>
          <div className="mb-7 max-w-[1100px]">
            <p className={`${eyebrowClass} flex items-center gap-3`}><span>Our commitment</span><span className="h-[3px] w-10 rounded-full bg-[#FFB703]" aria-hidden="true" /></p>
            <h2 id="women-empowerment-new-principles-title" className={`${headingClass} mb-3 max-w-[1100px]`}>A campus where <span>everyone can thrive.</span></h2>
            <p className="leading-relaxed text-[#405675] text-[15px] md:text-base md:![text-align:justify]">We work to make equality visible in our learning spaces, our relationships and the opportunities we create.</p>
          </div>
          <div className="mb-3 flex justify-end gap-2 sm:hidden" role="group" aria-label="Commitment card navigation">
            <button type="button" onClick={() => scrollPrinciples(-1)} disabled={!scrollControls.previous} aria-label="Previous commitment card" aria-controls="women-empowerment-commitment-cards" className="grid size-11 place-items-center rounded-full border border-[#14284E] bg-white text-[#14284E] disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4A85]">
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => scrollPrinciples(1)} disabled={!scrollControls.next} aria-label="Next commitment card" aria-controls="women-empowerment-commitment-cards" className="grid size-11 place-items-center rounded-full bg-[#FFB703] text-[#14284E] disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4A85]">
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
          <ul ref={principleListRef} id="women-empowerment-commitment-cards" aria-label="Our commitment cards" tabIndex={0} className="relative z-10 m-0 grid grid-flow-col auto-cols-[90%] auto-rows-fr snap-x snap-mandatory list-none gap-3 overflow-x-auto overscroll-x-contain px-0 pt-0 pb-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4A85] sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 sm:snap-none sm:overflow-visible sm:pb-0 xl:max-w-[calc(100%-24px)] xl:grid-cols-3 xl:gap-x-5 xl:gap-y-5">
            {items.map((principle, index) => {
              const Icon = principleIcons[index];
              const style = principleStyles[index];
              return <li key={principle} className={`flex min-h-[136px] min-w-0 snap-start items-center gap-4 rounded-xl border border-[#C6E5F9] border-l-[6px] ${style.edge} bg-[#F8FCFF] px-4 py-4 shadow-[0_8px_22px_#0F4A850A] transition-transform sm:hover:-translate-y-0.5 sm:px-5 ${!showAll && index >= INITIAL_COUNT ? "sm:hidden" : ""}`}>
                <span className={`grid size-12 shrink-0 place-items-center rounded-full sm:size-16 ${style.icon}`}><Icon size={25} strokeWidth={1.8} aria-hidden="true" /></span>
                <span className="min-w-0 flex-1 text-sm leading-relaxed text-[#294363] sm:text-[15px] lg:text-[14px] lg:leading-[1.45] md:![text-align:justify]">{principle}</span>
                <ArrowRight size={19} className="shrink-0 text-[#FFB703]" aria-hidden="true" />
              </li>;
            })}
          </ul>
          {items.length > INITIAL_COUNT && (
            <div className="mt-6 hidden justify-start sm:flex xl:max-w-[calc(100%-24px)]">
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className={`${buttonClass} rounded-lg!`}
              >
                {showAll ? "Show Less" : `Read More (${items.length - INITIAL_COUNT} more)`}
                <ArrowRight size={15} className={`transition-transform ${showAll ? "rotate-90" : ""}`} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </section>

      <section id="women-empowerment-new-initiatives" className={styles.section} aria-labelledby="women-empowerment-new-initiatives-title">
        <svg className={styles.backdrop} viewBox="0 0 1700 750" preserveAspectRatio="none" aria-hidden="true">
          <path fill="#dcecfb" d="M1375 0H1700V750H1070C1220 650 1270 470 1296 292S1330 90 1375 0Z" />
          <path fill="#193b68" d="M1420 0H1700V750H1125C1250 650 1305 470 1327 290S1370 92 1420 0Z" />
          <path fill="#cbe6fc" d="M0 0H115C99 58 67 95 0 102Z" />
          <path fill="#254d84" d="M0 615C105 715 220 690 360 750H0Z" />
          <path fill="none" stroke="#FFB703" strokeWidth="4" d="M0 575C120 725 242 681 405 750" />
          <path fill="none" stroke="#FFB703" strokeWidth="1.5" d="M1350 0C1310 81 1285 147 1265 220" />
        </svg>
        <div className={styles.content}>
          <header className={styles.header}>
            <p className={styles.eyebrow}><span aria-hidden="true" />Support in action</p>
            <h2 id="women-empowerment-new-initiatives-title" className={styles.heading}>Initiatives that <span>make a difference.</span></h2>
            <p className={styles.intro}>Programs across campus support wellbeing, safety, confidence and community participation.</p>
          </header>
          <div className="mb-3 flex justify-end gap-2 sm:hidden" role="group" aria-label="Initiative card navigation">
            <button type="button" onClick={() => scrollInitiatives(-1)} disabled={!initiativeControls.previous} aria-label="Previous initiative card" aria-controls="women-empowerment-initiative-cards" className="grid size-11 place-items-center rounded-full border border-[#14284E] bg-white text-[#14284E] disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4A85]">
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => scrollInitiatives(1)} disabled={!initiativeControls.next} aria-label="Next initiative card" aria-controls="women-empowerment-initiative-cards" className="grid size-11 place-items-center rounded-full bg-[#FFB703] text-[#14284E] disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4A85]">
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
          <div ref={initiativeListRef} id="women-empowerment-initiative-cards" role="region" aria-label="Initiative cards" tabIndex={0} className={styles.columns}>
            {initiativesData.map((initiative, index) => {
                const Icon = initiativeIcons[index];
                return <article key={initiative.title} className={`${styles.card} ${styles[`card${index}`] ?? ""}`}>
                  <span className={styles.icon}><Icon size={35} strokeWidth={1.8} aria-hidden="true" /></span>
                  <div className={styles.cardCopy}>
                    <h3 className={styles.cardTitle}>
                      <button type="button" onClick={() => setActiveInitiative(index)} className={styles.cardButton}>
                        <span>{initiative.title}</span><span className={styles.arrow}><ArrowRight size={13} strokeWidth={2.5} aria-hidden="true" /></span>
                      </button>
                    </h3>
                    <p className={styles.description}>{initiative.shortDescription}</p>
                  </div>
                  <p className={styles.cardLabels}>{initiativeLabels[index].map((label) => <span key={label}>{label}</span>)}</p>
                </article>;
              })}
          </div>
        </div>
        <figure className={styles.artwork}>
          <div className={styles.campus} aria-hidden="true"><img src={campusImage} alt="" loading="lazy" /></div>
          <div className={styles.yellowHalo} aria-hidden="true" />
          <div className={styles.blueHalo} aria-hidden="true" />
          <div className={styles.dots} aria-hidden="true" />
          <svg className={styles.flourishes} viewBox="0 0 500 600" fill="none" aria-hidden="true">
            <path d="M58 107Q67 79 91 57L89 70M63 116L49 160" stroke="#244e83" strokeWidth="4" strokeLinecap="round" />
            <path d="M87 99L119 56M77 139Q100 102 121 83M48 354Q55 377 84 397M83 373L99 391" stroke="#FFB703" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <img src={studentLeadersImage} alt="SRMU students supporting and encouraging one another" loading="lazy" decoding="async" className={styles.students} />
          <figcaption className={styles.caption}><span className={styles.captionLead}>Safe Campus</span><br />Stronger Community<span className={styles.captionUnderline} aria-hidden="true" /></figcaption>
        </figure>
      </section>

      <section className="px-4 py-10 sm:px-6 md:py-14">
        <div className={`${containerClass} relative isolate overflow-hidden rounded-2xl bg-[#14284E] px-6 py-8 text-white sm:px-10 sm:py-10`}>
          <div className="pointer-events-none absolute -right-10 -bottom-20 size-64 rounded-full border-[28px] border-[#FFB703]/10" aria-hidden="true" />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-[700px]"><p className="mb-2 text-[11px] font-bold tracking-[0.16em] text-[#FFB703] uppercase">An inclusive campus is everyone’s work</p><h2 className="text-[26px] leading-tight font-bold md:text-[36px]">Respect creates room for every voice.</h2><p className="mt-3 text-[15px] leading-relaxed text-[#E0F1FF] md:text-base">Learn more about the people, programs and support that make our community stronger.</p></div>
            <Link to="/contact-us" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 rounded-lg bg-[#FFB703] px-5 py-3 text-xs font-bold tracking-wide text-[#14284E] uppercase hover:bg-[#FFB703]">Connect with SRMU <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {activeInitiative !== null && <div className="fixed inset-0 z-[1000] grid place-items-center overflow-y-auto p-4 sm:p-6" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveInitiative(null); }}>
        <div className="absolute inset-0 bg-[#071329]/65 backdrop-blur-sm" aria-hidden="true" />
        <section role="dialog" aria-modal="true" aria-label={initiativesData[activeInitiative].title} className="relative z-10 my-auto w-full max-w-[720px] overflow-hidden rounded-2xl border-t-4 border-[#FFB703] bg-white shadow-2xl">
          <div className="flex items-center justify-end border-b border-[#E5EAF0] px-5 py-3 sm:px-8">
            <button type="button" onClick={() => setActiveInitiative(null)} aria-label="Close initiative details" className="grid size-10 shrink-0 place-items-center rounded-full bg-[#EAF4FB] text-[#14284E] transition-colors hover:bg-[#FFB703] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4A85]"><X size={20} aria-hidden="true" /></button>
          </div>
          <div className="px-5 py-6 sm:px-8 sm:py-8 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#14284E] [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-[#4B5A72]" dangerouslySetInnerHTML={{ __html: initiativesData[activeInitiative].fullDescription }} />
        </section>
      </div>}
    </main>
  );
}
