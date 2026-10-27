import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Building2, Bus, ChevronDown, Coffee, Dumbbell, FlaskConical, GraduationCap, Landmark, MapPin } from "lucide-react";
import { facilitiesNewBlocks as CARD_CONTENT, facilitiesNewCards as facilitiesData, facilitiesNewPageCopy, facilitiesNewSportsImages as sportsImages } from "../../data/campus-life/facilities/facilities-new-data";
import campus from "../../assets/images/breadcrumb/campus.webp";
import cafeteria1 from "../../assets/images/campus-life/facilities/cafeteria-1.jpg";
import cafeteria2 from "../../assets/images/campus-life/facilities/cafeteria-2.jpg";
import cafeteria3 from "../../assets/images/campus-life/facilities/cafeteria-3.jpg";
import cafeteria4 from "../../assets/images/campus-life/facilities/cafeteria-4.jpg";
import cafeteria5 from "../../assets/images/campus-life/facilities/cafeteria-5.jpg";
import transport from "../../assets/images/campus-life/facilities/1-1-18102301254317.png";
import FacilitiesNewDining from "./FacilitiesNewDining";
import FacilitiesNewLibrary from "./FacilitiesNewLibrary";
import FacilitiesNewExplorer from "./FacilitiesNewExplorer";
import FacilitiesNewLiving from "./FacilitiesNewLiving";
import featureStyles from "./FacilitiesNewHighlights.module.css";
import sportsStyles from "./FacilitiesNewSports.module.css";

// One fluid container keeps every section aligned without competing breakpoint units.
const containerClass = "mx-auto w-full min-w-0 max-w-[1280px]";
const sectionClass = "scroll-mt-36 px-4 py-9 outline-none sm:px-6 md:py-12";
const splitClass = "grid items-center gap-8 lg:grid-cols-2 lg:gap-12";
const bodyClass = "text-[15px] leading-relaxed text-[#4B5A72] sm:text-base";
const eyebrowClass = "mb-3 text-[11px] font-bold tracking-[0.16em] text-[#0F4A85] uppercase";
const buttonClass = "inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#FFB703] px-6 py-3 text-xs font-bold tracking-wide text-[#14284E] uppercase transition-colors hover:bg-[#ffca42] motion-reduce:transition-none";
const headingClass = "mb-5 text-[24px] leading-[1.2] font-bold sm:text-[36px] [&>span]:text-[#FFB703]";

const sections = [
  { id: "facilities-new-overview", label: "Overview", icon: GraduationCap },
  { id: "facilities-new-academics", label: "Learning Spaces", icon: BookOpen },
  { id: "facilities-new-dining", label: "Cafeteria", icon: Coffee },
  { id: "facilities-new-sports", label: "Sports & Fitness", icon: Dumbbell },
  { id: "facilities-new-transport", label: "Transportation", icon: Bus },
  { id: "facilities-new-essentials", label: "Campus Essentials", icon: Landmark },
  { id: "facilities-new-blocks", label: "Academic Blocks", icon: Building2 },
];
const diningImages = [cafeteria1, cafeteria2, cafeteria3, cafeteria4, cafeteria5].map((src, index) => ({ src, caption: `Cafeteria & Eating Joints · View ${index + 1}` }));

// Keep section links from triggering RootLayout's route-change scroll-to-top.
function scrollToSection(event: MouseEvent<HTMLAnchorElement>) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const target = document.getElementById(event.currentTarget.hash.slice(1));
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  target.focus({ preventScroll: true });
}

function SportsTicker({ items, label, reverse = false, copies }: { items: string[]; label: string; reverse?: boolean; copies: number }) {
  return (
    <div className={`${sportsStyles.row} ${reverse ? sportsStyles.reverse : ""}`} tabIndex={0} aria-label={label}>
      <div className={sportsStyles.track}>
        {Array.from({ length: copies }, (_, copy) => <ul key={`${label}-${copy}`} className={sportsStyles.group} aria-hidden={copy > 0}>
          {items.map((item) => <li key={item}>{item}</li>)}
        </ul>)}
      </div>
    </div>
  );
}

function SportsCarousel() {
  const [index, setIndex] = useState(0);
  const current = sportsImages[index];
  const showImage = (nextIndex: number) => setIndex((nextIndex + sportsImages.length) % sportsImages.length);

  return (
    <div className={sportsStyles.carousel} role="region" aria-label="Sports and recreation photos" aria-roledescription="carousel">
      <figure className={sportsStyles.slide}>
        <img key={current.src} src={current.src} alt={`${current.caption} at SRMU`} width={720} height={450} loading="lazy" decoding="async" />
        <figcaption aria-live="polite" aria-atomic="true"><span>{current.caption}</span><span>{index + 1} / {sportsImages.length}</span></figcaption>
      </figure>
      <div className={sportsStyles.controls}>
        <button type="button" onClick={() => showImage(index - 1)} aria-label="Previous sports photo"><ArrowLeft size={18} aria-hidden="true" /></button>
        <div className={sportsStyles.dots} role="group" aria-label="Choose sports photo">
          {sportsImages.map((image, imageIndex) => <button key={image.src} type="button" aria-label={`Show ${image.caption} photo`} aria-pressed={imageIndex === index} onClick={() => showImage(imageIndex)}><span /></button>)}
        </div>
        <button type="button" onClick={() => showImage(index + 1)} aria-label="Next sports photo"><ArrowRight size={18} aria-hidden="true" /></button>
      </div>
    </div>
  );
}

export default function FacilitiesNew() {
  const location = useLocation();
  const [blockIndex, setBlockIndex] = useState(0);
  const [overviewExpanded, setOverviewExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const activeBlock = CARD_CONTENT[blockIndex];

  useEffect(() => {
    if (!location.hash) return;
    const targetId = decodeURIComponent(location.hash.slice(1));
    const timer = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        block: "start",
      });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [location.hash, location.pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    let frame: number | null = null;
    const updateActiveSection = () => {
      frame = null;
      if (!desktop.matches) return;
      let current = sections[0].id;
      for (const section of sections) {
        const target = document.getElementById(section.id);
        if (target && target.getBoundingClientRect().top <= 128) current = section.id;
      }
      setActiveSection(current);
    };
    const scheduleUpdate = () => {
      if (desktop.matches && frame === null) frame = window.requestAnimationFrame(updateActiveSection);
    };
    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="w-full max-w-full overflow-x-clip bg-white text-[#14284E] antialiased lg:[&_p]:text-justify [&_button]:cursor-pointer [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#0F4A85] [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-[#0F4A85]">
      <section className="relative isolate flex min-h-[clamp(380px,94vw,420px)] w-full items-center overflow-hidden bg-[#071329] px-4 pt-[clamp(92px,14vw,104px)] pb-6 sm:px-6 md:min-h-[504px] md:pt-28 md:pb-14" aria-labelledby="facilities-new-title">
        <img className="absolute inset-0 -z-20 h-full w-full object-cover object-center" src={campus} alt="Shri Ramswaroop Memorial University campus" fetchPriority="high" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#071329]/95 via-[#091a38]/75 to-[#071329]/25" aria-hidden="true" />
        <div className={`${containerClass} relative z-10`}>
          {/* <p className="mb-2 text-[18px] leading-snug font-semibold text-[#38bdf8] sm:text-[24px]">Life at Shri Ramswaroop Memorial University</p> */}
          <h1 id="facilities-new-title" className="max-w-[650px] text-[36px] leading-[1.1] font-bold text-white/90 sm:text-[clamp(32px,4vw,52px)]">Campus <span className="text-[#FFB703]">Facilities</span></h1>
          <div className="my-5 h-[3px] w-20 rounded-full bg-[#FFB703]" aria-hidden="true" />
          {/* <p className="max-w-[570px] text-[15px] leading-relaxed text-[#E0F1FF] sm:text-base">{facilitiesNewPageCopy.hero}</p> */}
          <div className="mt-7 hidden flex-wrap items-center gap-3 md:flex">
            {/* <a className={`${buttonClass} rounded-lg!`} href="#facilities-new-academics" onClick={scrollToSection}>Explore facilities <ArrowDown size={17} aria-hidden="true" /></a> */}
            <Link className="inline-flex min-h-11 items-center justify-center gap-3 rounded-lg border border-[#1B4F91] bg-[#E0F1FF] px-6 py-3 text-xs font-bold tracking-wide text-[#14284E] uppercase hover:bg-white" to="/admission-enquiry">Plan your next step <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-7 hidden px-4 md:block" aria-label="Campus highlights">
        <div className="mx-auto w-full max-w-[1180px] overflow-hidden rounded-[20px] border-t-[6px] border-[#FFB703] bg-white pt-1.5 shadow-[0_16px_38px_rgba(20,40,78,0.15)]">
          <dl className="m-0 grid grid-cols-4">
            {facilitiesNewPageCopy.highlights.map(({ value, label }) => (
              <div key={label} className="flex min-w-0 flex-col gap-px px-4 py-3 text-[#14284E] [&+div]:border-l [&+div]:border-[#D6E2F0]">
                <dt className="order-1 text-[13px] leading-[1.4] text-[#405575]">{label}</dt>
                <dd className="order-0 m-0 text-[clamp(24px,2vw,32px)] leading-[1.1] font-extrabold text-[#D62C2B]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <nav className="hidden border-b border-[#D6E2F0] bg-white px-4 py-3 sm:px-6 md:block" aria-label="Facilities sections">
        <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center gap-2">
          {sections.map(({ id, label }) => (
            <a
              className="flex min-h-[38px] min-w-0 items-center justify-center rounded-full bg-[#E0F1FF] px-4 py-2 text-center text-[13px] leading-snug font-medium text-[#14284E] transition-colors hover:bg-[#D1E9FC] aria-[current=location]:bg-[#FFB703]"
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              onClick={scrollToSection}
            >
              <span>{label}</span>
            </a>
          ))}
        </div>
      </nav>

      <section id="facilities-new-overview" tabIndex={-1} className="relative isolate scroll-mt-36 overflow-x-clip px-4 pt-6 outline-none sm:px-6 md:pt-8" aria-labelledby="facilities-new-overview-title">
        <div className={`${containerClass} grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_460px]`}>
          <div>
            {/* <p className={eyebrowClass}>Built around your university life</p> */}
            <h2 id="facilities-new-overview-title" className={headingClass}>About Our <span>Campus Facilities</span></h2>
            <p className={bodyClass}>{facilitiesNewPageCopy.overview[0]}</p>
            {!overviewExpanded && <div>
              <button type="button" aria-expanded={false} onClick={() => setOverviewExpanded(true)} className="rm-btn items-center gap-2 text-sm font-bold text-[#0F4A85] sm:!inline-flex md:!hidden">
                READ MORE<ChevronDown size={17} aria-hidden="true" />
              </button>
            </div>}
            <div className={`mt-4 [&>p+p]:mt-4 ${overviewExpanded ? "" : "hidden md:block"}`}>
              {facilitiesNewPageCopy.overview.slice(1).map((paragraph) => <p key={paragraph} className={bodyClass}>{paragraph}</p>)}
            </div>
            {overviewExpanded && <div className="mt-1">
              <button type="button" aria-expanded={true} onClick={() => setOverviewExpanded(false)} className="rm-btn items-center gap-2 text-sm font-bold text-[#0F4A85] sm:!inline-flex md:!hidden">
                READ LESS<ChevronDown size={17} className="rotate-180" aria-hidden="true" />
              </button>
            </div>}
            <a className={`${buttonClass} mt-2`} href="#facilities-new-academics" onClick={scrollToSection}>Find your space <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
          <figure className="relative m-0 min-h-[300px] overflow-hidden rounded-2xl bg-[#E0F1FF] shadow-[0_2px_12px_#0F1F3D14]">
            <img src={facilitiesData[0].imageUrl} alt="Computer centre at SRMU" width={600} height={450} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 border-t-4 border-[#FFB703] bg-[#14284E]/95 px-6 py-4 text-sm font-semibold text-white">Learning spaces that bring ideas to life.</figcaption>
          </figure>
        </div>
        <div className="relative mt-4 -mx-4 w-auto overflow-hidden bg-[#FCFCFA] py-4 sm:left-1/2 sm:mx-0 sm:w-screen sm:-translate-x-1/2 sm:py-5">
          <div className="pointer-events-none absolute -bottom-20 -left-14 size-36 rounded-[45%_55%_0_0] bg-[#FFB703]/15 sm:-bottom-24 sm:-left-20 sm:size-64" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-8 -left-10 size-24 rounded-[50%_50%_0_0] bg-[#FFB703]/75 sm:-bottom-10 sm:-left-16 sm:size-48" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-10 top-1/2 size-28 -translate-y-1/2 rounded-full bg-[repeating-linear-gradient(135deg,#ffcf55_0px,#ffcf55_3px,transparent_3px,transparent_9px)] opacity-45 sm:size-36" aria-hidden="true" />
          <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 [&>div]:min-w-0 [&>div]:px-3 [&>div]:py-4 sm:[&>div]:px-8 sm:[&>div]:py-5 lg:[&>div]:px-7 lg:[&>div+div]:border-l lg:[&>div+div]:border-[#FFB703]/55">
            {[
              { icon: FlaskConical, title: "Learn by Doing", text: "Specialised laboratories, studios and workshops that bring ideas to life." },
              { icon: BookOpen, title: "Space to Focus", text: "Smart classrooms and library resources for deeper learning." },
              { icon: Dumbbell, title: "Life Beyond Lectures", text: "Sports, fitness and social spaces for a balanced university experience." },
              { icon: Bus, title: "Everyday Essentials", text: "Dining, healthcare and transport to support your day on campus." },
            ].map(({ icon: Icon, title, text }, index) => <div key={title} className="relative text-center lg:!text-left">
              <span className={`relative mx-auto mb-3 grid size-14 place-items-center rounded-[42%_58%_63%_37%/45%_40%_60%_55%] lg:!mx-0 ${index % 2 === 0 ? "bg-[#FFF0C2]" : "bg-[#E5EEFF]"}`}>
                <Icon size={29} strokeWidth={1.9} className={`${featureStyles.iconMotion} text-[#173866]`} style={{ animationDelay: `${index * 0.28}s` }} aria-hidden="true" />
                <span className="absolute -top-1 right-0 size-2 rounded-full bg-[#FFB703]" aria-hidden="true" />
              </span>
              <h3 className="mb-1.5 text-[15px] font-bold text-[#14284E] sm:text-base lg:!text-left">{title}</h3>
              <p className="mx-auto max-w-[250px] text-[13px] leading-relaxed text-[#596B85] lg:!mx-0 lg:!text-left">{text}</p>
              <span className="mx-auto mt-3 block h-[3px] w-8 rounded-full bg-[#FFB703] lg:!mx-0" aria-hidden="true" />
            </div>)}
          </div>
        </div>
      </section>

      <FacilitiesNewExplorer />

      {/* Temporarily hidden section: Seminar Halls & Auditoriums.
      <section id="facilities-new-seminars" tabIndex={-1} className={`${sectionClass} bg-white`} aria-labelledby="facilities-new-seminars-title">
        <div className={`${containerClass} ${splitClass}`}>
          <figure className="relative m-0 min-h-[280px] overflow-hidden rounded-2xl bg-[#E0F1FF]">
            <img src={facilitiesData.find((facility) => facility.id === 12)?.imageUrl} alt="Seminar hall at SRMU" width={720} height={480} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-[#14284E]/95 px-5 py-4 text-sm font-semibold text-white">Spaces for discussion, presentations and university events.</figcaption>
          </figure>
          <div>
            <h2 id="facilities-new-seminars-title" className={headingClass}>Seminar Halls <span>&amp; Auditoriums.</span></h2>
            <p className={bodyClass}>{facilitiesNewPageCopy.seminarHallsAndAuditoriums}</p>
          </div>
        </div>
      </section>
      */}

      <FacilitiesNewLibrary />

      <FacilitiesNewDining images={diningImages} description={facilitiesNewPageCopy.dining} />

      <section id="facilities-new-sports" tabIndex={-1} className={sportsStyles.section} aria-labelledby="facilities-new-sports-title">
        <div className={`${containerClass} ${sportsStyles.container} px-4 sm:px-6`}>
          <h2 id="facilities-new-sports-title" className={headingClass}>Stay Active. <span>Play Your Way.</span></h2>
          <p className={sportsStyles.intro}>{facilitiesNewPageCopy.sportsAndFitnessFacilities.introduction}</p>
          <div className={sportsStyles.layout}>
            <div className={sportsStyles.activities}>
              <h3 className={sportsStyles.caption}>Outdoor Sports</h3>
              <SportsTicker items={facilitiesNewPageCopy.sportsAndFitnessFacilities.outdoorSports} label="Outdoor sports" copies={2} />
              <h3 className={sportsStyles.caption}>Indoor Games and Fitness</h3>
              <SportsTicker items={facilitiesNewPageCopy.sportsAndFitnessFacilities.indoorAndFitness} label="Indoor games and fitness" reverse copies={4} />
            </div>
            <SportsCarousel />
          </div>
          <div className={sportsStyles.more}>
            <p>{facilitiesNewPageCopy.sportsAndFitnessFacilities.benefits}</p>
            <p>{facilitiesNewPageCopy.sportsAndFitnessFacilities.availability}</p>
          </div>
        </div>
      </section>

      <section id="facilities-new-transport" tabIndex={-1} className="relative isolate scroll-mt-36 overflow-hidden bg-[#FFFEFA] px-4 py-8 outline-none sm:px-6 sm:py-10 lg:py-10" aria-labelledby="facilities-new-transport-title">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-28 -left-28 size-64 rounded-[0_0_100%_0] bg-[#FFB703]/25 sm:size-80" />
          <div className="absolute -top-24 -left-32 size-64 rounded-[0_0_100%_0] border-b border-r border-[#FFB703]/55 sm:size-80" />
          <div className="absolute -right-24 -bottom-36 size-80 rounded-[100%_0_0_0] bg-[#FFB703]/20" />
          <svg viewBox="0 0 520 180" className="absolute top-[18%] right-0 hidden w-[34%] text-[#FFB703]/45 lg:block">
            <path d="M0 42C95 42 102 94 207 76S335 22 391 75s47 76 129 83" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="7 9" />
          </svg>
          <MapPin className="absolute top-[14%] right-[11%] hidden size-10 fill-[#FFB703]/85 text-[#FFB703]/85 lg:block" aria-hidden="true" />
          <Building2 className="absolute right-[3%] bottom-[15%] hidden size-44 text-[#F5E9CC]/65 lg:block" strokeWidth={1} />
          <Bus className="absolute right-[9%] bottom-[15%] hidden size-14 text-[#F4D98F]/55 lg:block" strokeWidth={1.5} />
          <div className="absolute bottom-12 left-1 hidden grid-cols-5 gap-2 sm:grid">{Array.from({ length: 15 }, (_, dot) => <span key={dot} className="size-1 rounded-full bg-[#FFB703]/70" />)}</div>
        </div>
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-10">
          <div className="relative flex min-h-[240px] items-center justify-center sm:min-h-[300px] lg:min-h-[340px]">
            <img src={transport} alt="SRMU buses and campus transportation" width={700} height={600} loading="lazy" decoding="async" className="h-[240px] w-full object-contain sm:h-[300px] lg:h-[340px]" />
          </div>
          <div className="relative max-w-[720px]">
            {/* <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-[#24436A] uppercase sm:text-xs">Connected to campus</p> */}
            <h2 id="facilities-new-transport-title" className="mb-5 text-[24px] leading-[1.2] font-bold text-[#14284E] sm:text-[36px]">Your Journey, <span className="text-[#FFB703]">Made Easier.</span></h2>
            <p className={bodyClass}>{facilitiesNewPageCopy.busRoutesAndTimings.description} {facilitiesNewPageCopy.busRoutesAndTimings.fees}</p>
            <div className="mt-5 flex items-center gap-4 text-sm leading-relaxed text-[#4B5A72] sm:text-[15px]">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#FFB703]/75 text-[#14284E]"><Bus size={24} aria-hidden="true" /></span>
              <span className="h-10 w-px shrink-0 bg-[#FFB703]" aria-hidden="true" />
              <p>Review current routes and timings <span className="font-semibold text-[#14284E]">before planning your commute.</span></p>
            </div>
            <a href={facilitiesNewPageCopy.busRoutesAndTimings.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-12 items-center gap-4 rounded-full bg-[#FFB703] py-1.5 pr-2 pl-6 text-xs font-bold tracking-wide text-[#14284E] uppercase shadow-[0_8px_20px_#FFB70330] transition-transform hover:translate-y-[-1px] sm:text-sm">
              {facilitiesNewPageCopy.busRoutesAndTimings.linkLabel} <span className="grid size-9 place-items-center rounded-full bg-white text-[#14284E]"><ArrowRight size={18} aria-hidden="true" /></span>
            </a>
          </div>
        </div>
      </section>

      <FacilitiesNewLiving onSectionNavigate={scrollToSection} />

      <section id="facilities-new-blocks" tabIndex={-1} className="relative isolate scroll-mt-36 overflow-hidden bg-[#F7FAFE] px-4 py-6 outline-none sm:px-6 sm:py-7 lg:py-8" aria-labelledby="facilities-new-blocks-title">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-32 size-[420px] rounded-full bg-[#EAF2FF]/70" />
          <Building2 className="absolute top-8 right-[5%] hidden size-52 text-[#EAF2FF] lg:block" strokeWidth={1} />
          <div className="absolute top-12 right-[3%] hidden grid-cols-5 gap-3 lg:grid">{Array.from({ length: 15 }, (_, dot) => <span key={dot} className="size-1 rounded-full bg-[#FFB703]/80" />)}</div>
        </div>
        <div className={containerClass}>
          <div className="mb-6">
            {/* <p className="mb-3 flex items-center gap-3 text-[11px] font-bold tracking-[0.16em] text-[#0F4A85] uppercase sm:text-xs"><span className="h-0.5 w-9 shrink-0 bg-[#FFB703]" aria-hidden="true" />Discover your surroundings</p> */}
            <h2 id="facilities-new-blocks-title" className="mb-3 text-[28px] leading-[1.05] font-bold text-[#14284E] sm:text-[36px]">Explore the Academic <span className="text-[#FFB703]">Blocks at SRMU.</span></h2>
            <p className="max-w-3xl text-[14px] leading-relaxed text-[#4B5A72] sm:text-[15px]">Get to know the academic spaces that bring our disciplines, departments and university community together.</p>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3 [&>button]:flex [&>button]:min-h-11 [&>button]:items-center [&>button]:justify-center [&>button]:gap-2 [&>button]:rounded-xl [&>button]:border [&>button]:border-transparent [&>button]:bg-[#F0F6FB]/90 [&>button]:px-2 [&>button]:py-2.5 [&>button]:text-[11px] [&>button]:font-bold [&>button]:text-[#0F4A85] [&>button]:transition-colors sm:[&>button]:text-xs [&>button[aria-pressed=true]]:border-[#14284E] [&>button[aria-pressed=true]]:bg-[#203E91] [&>button[aria-pressed=true]]:text-white [&>button[aria-pressed=true]]:shadow-[inset_0_-3px_#FFB703] [&_svg]:size-4 [&_svg]:shrink-0" role="group" aria-label="Choose an academic block">{CARD_CONTENT.map((block, index) => <button key={block.id} type="button" aria-pressed={index === blockIndex} aria-controls="facilities-new-block-detail" onClick={() => setBlockIndex(index)}><Building2 size={18} aria-hidden="true" /><span className="whitespace-nowrap">{block.id} Academic Block</span></button>)}</div>
          <div id="facilities-new-block-detail" className="grid overflow-hidden rounded-2xl bg-linear-to-br from-white via-[#F8FBFF] to-[#EAF2FF] shadow-[0_8px_28px_#14284E10] lg:min-h-[340px] lg:grid-cols-[1fr_1fr] [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#203E78] sm:[&_h3]:text-2xl [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-[#536782] sm:[&_p]:text-[15px]">
            <div className="relative min-h-[220px] bg-[#FFB703] sm:min-h-[280px] lg:min-h-[340px] lg:[clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]">
              <img src={activeBlock.image} alt={activeBlock.title} width={900} height={600} loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover lg:[clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]" />
              <div className="pointer-events-none absolute top-5 left-5 hidden grid-cols-5 gap-2 sm:grid">{Array.from({ length: 15 }, (_, dot) => <span key={dot} className="size-1 rounded-full bg-[#FFB703] shadow-sm" />)}</div>
            </div>
            <div className="relative flex flex-col justify-center px-5 py-6 sm:px-8 sm:py-8 lg:px-9 lg:py-9">
              <span className="mb-3 w-fit rounded-r-xl bg-[#FFB703] px-3 py-1 text-3xl leading-none font-extrabold text-[#203E78] sm:text-4xl" aria-hidden="true">{activeBlock.id}</span>
              <h3>{activeBlock.title}</h3>
              <span className="mb-2 h-0.5 w-8 bg-[#FFB703]" aria-hidden="true" />
              <p>{activeBlock.description}</p>
              <p className="mt-4 self-end text-right font-serif text-sm italic text-[#5791E8] sm:text-base">Knowledge · Growth · Community</p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#E0F1FF] px-4 py-8 sm:px-6 sm:py-10 lg:py-12" aria-labelledby="facilities-new-more-title">
        <div className={`${containerClass} grid items-center gap-10 lg:grid-cols-2 lg:gap-[72px]`}>
          <div>
            {/* <p className="text-sm font-medium text-[#0F4A85]">Life across campus</p> */}
            <h2 id="facilities-new-more-title" className={`${headingClass} mt-1 mb-0`}>More to <span>Explore.</span></h2>
            <p className={`${bodyClass} mt-6 max-w-[56ch] border-l-[5px] border-[#FFB703] pl-5`}>{facilitiesNewPageCopy.closing}</p>
            <a className={`${buttonClass} mt-7`} href="#facilities-new-overview" onClick={scrollToSection}>Explore campus <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>

          <nav className="relative mx-auto grid w-full max-w-[540px] gap-3.5 py-6 pb-10" aria-label="More to explore">
            <span className="pointer-events-none absolute top-0 bottom-3 left-1/2 -z-0 w-4 -translate-x-1/2 rounded-t-lg bg-[#14284E]" aria-hidden="true" />
            <span className="pointer-events-none absolute bottom-0 left-1/2 -z-0 h-[18px] w-[120px] -translate-x-1/2 rounded-[50%] bg-[#14284E]/20" aria-hidden="true" />
            {[
              { to: "/hostel", title: "Your Home on Campus", text: "Explore hostel facilities and student accommodation.", color: "bg-[#FFB703] text-[#14284E]", side: "right", focusColor: "focus-visible:outline-[#14284E]" },
              { to: "/green-initiative-new", title: "A Greener Campus", text: "Discover sustainability in everyday university life.", color: "bg-[#21A5DB] text-[#14284E]", side: "left", focusColor: "focus-visible:outline-[#14284E]" },
              { to: "/admission-enquiry", title: "Start Your SRMU Journey", text: "Connect with our team for admission enquiries.", color: "bg-[#0F4A85] text-white", side: "right", focusColor: "focus-visible:outline-[#E0F1FF]" },
            ].map(({ to, title, text, color, side, focusColor }) => <Link key={to} to={to} className={`relative z-10 block min-h-24 px-7 py-5 no-underline transition-transform duration-200 motion-reduce:transition-none ${color} ${side === "right" ? "[clip-path:polygon(0_0,calc(100%_-_44px)_0,100%_50%,calc(100%_-_44px)_100%,0_100%)] pr-16 hover:rotate-[-1.6deg]" : "[clip-path:polygon(44px_0,100%_0,100%_100%,44px_100%,0_50%)] pl-16 hover:rotate-[1.6deg]"} focus-visible:outline-2 focus-visible:outline-offset-[-4px] ${focusColor} motion-reduce:hover:rotate-0`}>
              <b className="block text-lg leading-tight font-bold">{title}</b>
              <span className="mt-1 block text-[15px] leading-relaxed">{text}</span>
            </Link>)}
          </nav>
        </div>
      </section>
    </div>
  );
}
