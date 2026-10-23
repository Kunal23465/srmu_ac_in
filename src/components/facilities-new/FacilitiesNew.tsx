import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BedDouble, BookOpen, Building2, Bus, ChevronDown, Coffee, Dumbbell, FlaskConical, GraduationCap, Landmark, MapPin, WashingMachine } from "lucide-react";
import { CARD_CONTENT, FacilitiesOverviewData, facilitiesData, outreachImages } from "../../data/campus-life/facilities/facilities-data";
import campus from "../../assets/images/breadcrumb/campus.webp";
import cafeteria1 from "../../assets/images/campus-life/facilities/cafeteria-1.jpg";
import cafeteria2 from "../../assets/images/campus-life/facilities/cafeteria-2.jpg";
import cafeteria3 from "../../assets/images/campus-life/facilities/cafeteria-3.jpg";
import cafeteria4 from "../../assets/images/campus-life/facilities/cafeteria-4.jpg";
import cafeteria5 from "../../assets/images/campus-life/facilities/cafeteria-5.jpg";
import transport from "../../assets/images/campus-life/facilities/1-1-18102301254317.png";
import FacilitiesNewDining from "./FacilitiesNewDining";

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
  { id: "facilities-new-academics", label: "Learning spaces", icon: BookOpen },
  { id: "facilities-new-dining", label: "Cafeteria", icon: Coffee },
  { id: "facilities-new-sports", label: "Sports & fitness", icon: Dumbbell },
  { id: "facilities-new-transport", label: "Transportation", icon: Bus },
  { id: "facilities-new-essentials", label: "Campus essentials", icon: Landmark },
  { id: "facilities-new-blocks", label: "Academic blocks", icon: Building2 },
];
const highlights = [
  { value: "1000+", label: "High-end computers" },
  { value: "60+", label: "Specialised laboratories" },
  { value: "100+", label: "Smart classrooms" },
  { value: "5", label: "Academic blocks" },
];
const categories = ["All facilities", "Labs & research", "Learning spaces", "Health & wellbeing"] as const;
type Category = (typeof categories)[number];
const facilityCategory = (id: number): Category => id === 10 ? "Health & wellbeing" : [4, 9, 11, 12, 13].includes(id) ? "Learning spaces" : "Labs & research";
const diningImages = [cafeteria1, cafeteria2, cafeteria3, cafeteria4, cafeteria5].map((src, index) => ({ src, caption: `Cafeteria & eating joints · View ${index + 1}` }));

// Keep section links from triggering RootLayout's route-change scroll-to-top.
function scrollToSection(event: MouseEvent<HTMLAnchorElement>) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const target = document.getElementById(event.currentTarget.hash.slice(1));
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  target.focus({ preventScroll: true });
}

function PhotoGallery({ images, label }: { images: { src: string; caption: string }[]; label: string }) {
  const [index, setIndex] = useState(0);
  const current = images[index];
  return (
    <div className="min-w-0 [&>figure]:m-0 [&>figure]:overflow-hidden [&>figure]:rounded-2xl [&>figure]:bg-[#071329] [&_figure>img]:aspect-[3/2] [&_figure>img]:w-full [&_figure>img]:object-cover [&_figcaption]:flex [&_figcaption]:min-h-14 [&_figcaption]:items-center [&_figcaption]:justify-between [&_figcaption]:gap-3 [&_figcaption]:px-4 [&_figcaption]:py-3 [&_figcaption]:text-xs [&_figcaption]:text-white sm:[&_figcaption]:text-sm [&_figcaption>span:last-child]:shrink-0 [&_figcaption>span:last-child]:text-[#FFB703]" role="region" aria-label={label} aria-roledescription="carousel">
      <figure>
        <img src={current.src} alt={current.caption} width={720} height={480} loading="lazy" decoding="async" />
        <figcaption aria-live="polite" aria-atomic="true"><span>{current.caption}</span><span>{index + 1} / {images.length}</span></figcaption>
      </figure>
      <div className="mt-3 flex items-center justify-between gap-1 [&>button]:grid [&>button]:size-11 [&>button]:shrink-0 [&>button]:place-items-center [&>button]:rounded-full [&>button]:border [&>button]:border-[#DCE6F2] [&>button]:bg-white [&>button]:text-[#14284E] [&>button:hover]:border-[#FFB703] [&>button:hover]:bg-[#FFB703]">
        <button type="button" onClick={() => setIndex((index + images.length - 1) % images.length)} aria-label={`Previous ${label} photo`}><ArrowLeft size={18} /></button>
        <div className="flex flex-wrap justify-center [&>button]:grid [&>button]:h-11 [&>button]:w-5 [&>button]:place-items-center [&>button]:border-0 [&>button]:bg-transparent sm:[&>button]:w-6 [&_span]:size-1.5 [&_span]:rounded-full [&_span]:bg-[#8A9CB5] [&>button[aria-pressed=true]>span]:w-4 [&>button[aria-pressed=true]>span]:bg-[#FFB703]">
          {images.map((item, i) => <button key={item.src} type="button" aria-label={`Show ${item.caption}`} aria-pressed={i === index} onClick={() => setIndex(i)}><span /></button>)}
        </div>
        <button type="button" onClick={() => setIndex((index + 1) % images.length)} aria-label={`Next ${label} photo`}><ArrowRight size={18} /></button>
      </div>
    </div>
  );
}

export default function FacilitiesNew() {
  const location = useLocation();
  const [category, setCategory] = useState<Category>("All facilities");
  const [blockIndex, setBlockIndex] = useState(0);
  const [facilityIndex, setFacilityIndex] = useState(0);
  const [showAllFacilities, setShowAllFacilities] = useState(false);
  const facilityScroller = useRef<HTMLDivElement>(null);
  const visibleFacilities = facilitiesData.filter((facility) => category === "All facilities" || facilityCategory(facility.id) === category);
  const activeBlock = CARD_CONTENT[blockIndex];

  useEffect(() => {
    if (!location.hash) return;
    const targetId = decodeURIComponent(location.hash.slice(1));
    if (targetId.startsWith("facilities-new-facility-")) {
      setCategory("All facilities");
      setShowAllFacilities(true);
    }
    const timer = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        block: "start",
      });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [location.hash, location.pathname]);

  const facilityScrollStep = (scroller: HTMLDivElement) =>
    (scroller.firstElementChild?.getBoundingClientRect().width ?? 0) +
    (parseFloat(window.getComputedStyle(scroller).columnGap) || 0);

  const scrollFacilities = (direction: -1 | 1) => {
    const scroller = facilityScroller.current;
    if (!scroller) return;
    const step = facilityScrollStep(scroller);
    if (!step) return;
    const nextIndex = Math.max(0, Math.min(visibleFacilities.length - 1, Math.round(scroller.scrollLeft / step) + direction));
    scroller.scrollTo({
      left: nextIndex * step,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  return (
    <div className="bg-white text-[#14284E] antialiased [&_button]:cursor-pointer [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#0F4A85] [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-[#0F4A85]">
      <section className="relative isolate flex min-h-[clamp(380px,94vw,420px)] w-full items-center overflow-hidden bg-[#071329] px-4 pt-[clamp(92px,14vw,104px)] pb-6 sm:px-6 md:min-h-[504px] md:pt-28 md:pb-14" aria-labelledby="facilities-new-title">
        <img className="absolute inset-0 -z-20 h-full w-full object-cover object-center" src={campus} alt="Shri Ramswaroop Memorial University campus" fetchPriority="high" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#071329]/95 via-[#091a38]/75 to-[#071329]/25" aria-hidden="true" />
        <div className={`${containerClass} relative z-10`}>
          <p className="mb-2 text-[18px] leading-snug font-semibold text-[#38bdf8] sm:text-[24px]">Life at Shri Ramswaroop Memorial University</p>
          <h1 id="facilities-new-title" className="max-w-[650px] text-[36px] leading-[1.1] font-bold text-white/90 sm:text-[clamp(32px,4vw,52px)]">Campus <span className="text-[#FFB703]">Facilities</span></h1>
          <div className="my-5 h-[3px] w-20 rounded-full bg-[#FFB703]" aria-hidden="true" />
          <p className="max-w-[570px] text-[15px] leading-relaxed text-[#E0F1FF] sm:text-base">Spaces for learning, discovery and everyday university life. Explore our laboratories, libraries, sports facilities and student amenities.</p>
          <div className="mt-7 hidden flex-wrap items-center gap-3 md:flex">
            <a className={`${buttonClass} rounded-lg!`} href="#facilities-new-academics" onClick={scrollToSection}>Explore facilities <ArrowDown size={17} aria-hidden="true" /></a>
            <Link className="inline-flex min-h-11 items-center justify-center gap-3 rounded-lg border border-[#1B4F91] bg-[#E0F1FF] px-6 py-3 text-xs font-bold tracking-wide text-[#14284E] uppercase hover:bg-white" to="/admission-enquiry">Plan your next step <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="hidden bg-[#E0F1FF] px-4 py-5 sm:px-6 sm:py-4 md:block" aria-label="Campus highlights">
        <dl className="mx-auto grid w-full max-w-[1100px] grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">{highlights.map(({ value, label }) => <div key={label} className="flex min-w-0 flex-col items-center gap-1 text-center"><dt className="text-[10px] leading-snug font-bold tracking-wide uppercase lg:text-[11px]">{label}</dt><dd className="order-first m-0 text-[28px] leading-none font-extrabold text-[#D62C2B] sm:text-[32px]">{value}</dd></div>)}</dl>
      </section>
      <nav className="hidden bg-[#FFB703] px-4 sm:px-6 md:block" aria-label="Facilities sections">
        <div className={`${containerClass} grid grid-cols-3 gap-x-2 md:grid-cols-7`}>
          {sections.map(({ id, label }) => (
            <a
              className="flex min-h-11 min-w-0 items-center justify-center px-2 py-3 text-center text-[10px] leading-snug font-bold tracking-wide text-[#0F4A85] uppercase lg:text-xs"
              key={id}
              href={`#${id}`}
              onClick={scrollToSection}
            >
              <span className="lg:whitespace-nowrap">{label}</span>
            </a>
          ))}
        </div>
      </nav>

      <section id="facilities-new-overview" tabIndex={-1} className="relative isolate scroll-mt-36 overflow-x-clip px-4 pt-9 outline-none sm:px-6 md:pt-12" aria-labelledby="facilities-new-overview-title">
        <div className={`${containerClass} grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_460px]`}>
          <div>
            <p className={eyebrowClass}>Built around your university life</p>
            <h2 id="facilities-new-overview-title" className={headingClass}>About our <span>Campus Facilities</span></h2>
            <div className="space-y-4">
              {FacilitiesOverviewData.content.replace("journey.From", "journey.\nFrom").split("\n").map((paragraph) => (
                <p key={paragraph} className={bodyClass}>{paragraph.trim()}</p>
              ))}
            </div>
            <a className={`${buttonClass} mt-6`} href="#facilities-new-academics" onClick={scrollToSection}>Find your space <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
          <figure className="relative m-0 min-h-[300px] overflow-hidden rounded-2xl bg-[#E0F1FF] shadow-[0_2px_12px_#0F1F3D14]">
            <img src={facilitiesData[0].imageUrl} alt="Computer centre at SRMU" width={600} height={450} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 border-t-4 border-[#FFB703] bg-[#14284E]/95 px-6 py-4 text-sm font-semibold text-white">Learning spaces that bring ideas to life.</figcaption>
          </figure>
        </div>
        <div className="relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden bg-[#FCFCFA] py-8 sm:py-10">
          <div className="pointer-events-none absolute -bottom-20 -left-14 size-36 rounded-[45%_55%_0_0] bg-[#FFB703]/15 sm:-bottom-24 sm:-left-20 sm:size-64" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-8 -left-10 size-24 rounded-[50%_50%_0_0] bg-[#FFB703]/75 sm:-bottom-10 sm:-left-16 sm:size-48" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-10 top-1/2 size-28 -translate-y-1/2 rounded-full bg-[repeating-linear-gradient(135deg,#ffcf55_0px,#ffcf55_3px,transparent_3px,transparent_9px)] opacity-45 sm:size-36" aria-hidden="true" />
          <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 [&>div]:min-w-0 [&>div]:px-3 [&>div]:py-4 sm:[&>div]:px-8 sm:[&>div]:py-5 lg:[&>div]:px-7 lg:[&>div+div]:border-l lg:[&>div+div]:border-[#FFB703]/55">
            {[
              { icon: FlaskConical, title: "Learn by doing", text: "Specialised laboratories, studios and workshops that bring ideas to life." },
              { icon: BookOpen, title: "Space to focus", text: "Smart classrooms and library resources for deeper learning." },
              { icon: Dumbbell, title: "Life beyond lectures", text: "Sports, fitness and social spaces for a balanced university experience." },
              { icon: Bus, title: "Everyday essentials", text: "Dining, healthcare and transport to support your day on campus." },
            ].map(({ icon: Icon, title, text }, index) => <div key={title} className="relative text-center lg:!text-left">
              <span className={`relative mx-auto mb-3 grid size-14 place-items-center rounded-[42%_58%_63%_37%/45%_40%_60%_55%] lg:!mx-0 ${index % 2 === 0 ? "bg-[#FFF0C2]" : "bg-[#E5EEFF]"}`}>
                <Icon size={29} strokeWidth={1.9} className="text-[#173866]" aria-hidden="true" />
                <span className="absolute -top-1 right-0 size-2 rounded-full bg-[#FFB703]" aria-hidden="true" />
              </span>
              <h3 className="mb-1.5 text-[15px] font-bold text-[#14284E] sm:text-base lg:!text-left">{title}</h3>
              <p className="mx-auto max-w-[250px] text-[13px] leading-relaxed text-[#596B85] lg:!mx-0 lg:!text-left">{text}</p>
              <span className="mx-auto mt-3 block h-[3px] w-8 rounded-full bg-[#FFB703] lg:!mx-0" aria-hidden="true" />
            </div>)}
          </div>
        </div>
      </section>

      <section id="facilities-new-academics" tabIndex={-1} className={`${sectionClass} bg-linear-to-br from-[#EAF4FB] via-[#DAEAF7] to-[#CFE2F2]`} aria-labelledby="facilities-new-academics-title">
        <div className={containerClass}>
          <div className="mb-7 flex flex-col items-start justify-between gap-3 lg:flex-row lg:items-end lg:gap-8 [&_h2]:mb-0 [&>p]:max-w-[420px] [&>p]:text-sm [&>p]:leading-relaxed [&>p]:text-[#4B5A72]"><div><p className="mb-3 inline-flex rounded-full bg-[#D62C2B] px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase">Ideas into experience</p><h2 id="facilities-new-academics-title" className={headingClass}>Equipped for <span>what’s next.</span></h2></div>
            {/* <p>Explore the spaces and resources that support learning, research and wellbeing across SRMU.</p> */}
          </div>
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap [&>button]:min-h-11 [&>button]:rounded-full [&>button]:border [&>button]:border-[#DCE6F2] [&>button]:bg-white [&>button]:px-3 [&>button]:py-2.5 [&>button]:text-[11px] [&>button]:font-bold [&>button]:text-[#0F4A85] sm:[&>button]:px-5 sm:[&>button]:text-xs [&>button[aria-pressed=true]]:border-[#14284E] [&>button[aria-pressed=true]]:bg-[#14284E] [&>button[aria-pressed=true]]:text-white" role="group" aria-label="Filter campus facilities">
            {categories.map((item) => <button key={item} type="button" aria-pressed={item === category} aria-controls="facilities-new-results" onClick={() => { if (item !== category) { setCategory(item); setFacilityIndex(0); setShowAllFacilities(false); } }}>{item}</button>)}
          </div>
          <div className="my-4 flex items-center justify-between gap-3">
            <p className="text-xs text-[#4B5A72]" role="status">Showing <span className="lg:hidden">{visibleFacilities.length}</span><span className="hidden lg:inline">{showAllFacilities ? visibleFacilities.length : Math.min(6, visibleFacilities.length)}</span> of {facilitiesData.length} facilities</p>
            <div className="ml-auto flex shrink-0 items-center gap-2 md:hidden" role="group" aria-label="Facility card navigation">
              <button type="button" aria-label="Previous facility" aria-controls="facilities-new-results" disabled={facilityIndex === 0} onClick={() => scrollFacilities(-1)} className="grid size-11 place-items-center rounded-full border border-[#DCE6F2] bg-white text-[#14284E] disabled:cursor-default! disabled:opacity-40">
                <ArrowLeft size={20} aria-hidden="true" />
              </button>
              <button type="button" aria-label="Next facility" aria-controls="facilities-new-results" disabled={facilityIndex >= visibleFacilities.length - 1} onClick={() => scrollFacilities(1)} className="grid size-11 place-items-center rounded-full bg-[#FFB703] text-[#14284E] disabled:cursor-default! disabled:opacity-40">
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
          <div key={category} ref={facilityScroller} id="facilities-new-results" role="region" aria-label="Campus facility cards" tabIndex={0} onScroll={(event) => {
            const step = facilityScrollStep(event.currentTarget);
            if (step) setFacilityIndex(Math.max(0, Math.min(visibleFacilities.length - 1, Math.round(event.currentTarget.scrollLeft / step))));
          }} className="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overscroll-x-contain pb-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F4A85] md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 lg:grid-cols-3">
            {visibleFacilities.map((facility, index) => <article key={facility.id} id={`facilities-new-facility-${facility.id}`} className={`group scroll-mt-36 w-[88%] min-w-0 shrink-0 snap-start overflow-hidden rounded-2xl border border-[#DCE6F2] bg-white shadow-[0_4px_20px_#3479c908] md:w-auto ${index >= 6 && !showAllFacilities ? "lg:hidden" : ""}`}>
              <div className="relative overflow-hidden [&>img]:aspect-[3/2] [&>img]:w-full [&>img]:object-cover [&>img]:transition-transform [&>img]:duration-500 group-hover:[&>img]:scale-105 motion-reduce:[&>img]:transform-none motion-reduce:[&>img]:transition-none [&>span]:absolute [&>span]:bottom-3 [&>span]:left-4 [&>span]:rounded-full [&>span]:bg-[#E0F1FF] [&>span]:px-3 [&>span]:py-1.5 [&>span]:text-[10px] [&>span]:font-bold [&>span]:text-[#0F4A85]"><img src={facility.imageUrl} alt={facility.title} width={600} height={400} loading="lazy" decoding="async" /><span>{facilityCategory(facility.id)}</span></div>
              <div className="p-5 sm:p-6 [&>h3]:mb-3 [&>h3]:text-xl [&>h3]:leading-snug [&>h3]:font-bold [&>div]:text-sm"><h3>{facility.title}</h3><div className={bodyClass} dangerouslySetInnerHTML={{ __html: facility.description }} />{facility.id === 11 && <Link className="mt-3 inline-flex min-h-11 items-center gap-2 text-[13px] font-bold text-[#0F4A85]" to="/central-library">Explore the library <ArrowUpRight size={16} aria-hidden="true" /></Link>}</div>
            </article>)}
          </div>
          {visibleFacilities.length > 6 && (
            <div className="mt-7 hidden justify-left lg:flex">
              <button type="button" className={buttonClass} aria-expanded={showAllFacilities} aria-controls="facilities-new-results" onClick={() => setShowAllFacilities((expanded) => !expanded)}>
                {showAllFacilities ? "Read less" : "Read more"}
                <ChevronDown size={18} aria-hidden="true" className={showAllFacilities ? "rotate-180" : undefined} />
              </button>
            </div>
          )}
        </div>
      </section>

      <FacilitiesNewDining images={diningImages} />

      <section id="facilities-new-sports" tabIndex={-1} className={sectionClass} aria-labelledby="facilities-new-sports-title">
        <div className={`${containerClass} ${splitClass}`}>
          <PhotoGallery images={outreachImages} label="Sports" />
          <div><p className={eyebrowClass}>Make time for your game</p><h2 id="facilities-new-sports-title" className={headingClass}>Stay active.<br /><span>Play your way.</span></h2><p className={bodyClass}>From a quick game between classes to training with your team, SRMU offers indoor and outdoor sports spaces and a gymnasium to help you keep moving.</p><div className="mt-6 flex flex-wrap gap-2 [&>span]:rounded-full [&>span]:bg-[#E0F1FF] [&>span]:px-3 [&>span]:py-2 [&>span]:text-xs [&>span]:font-semibold [&>span]:text-[#0F4A85]">{outreachImages.map(({ caption }) => <span key={caption}>{caption === "BasketBall" ? "Basketball" : caption}</span>)}</div><p className="mt-4 text-[13px] text-[#4B5A72]">Indoor recreation also includes chess and carrom.</p></div>
        </div>
      </section>

      <section id="facilities-new-transport" tabIndex={-1} className="relative isolate scroll-mt-36 overflow-hidden bg-[#FFFEFA] px-4 py-10 outline-none sm:px-6 sm:py-14 lg:py-16" aria-labelledby="facilities-new-transport-title">
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
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-8 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className="relative flex min-h-[300px] items-center justify-center sm:min-h-[380px] lg:min-h-[460px]">
            <img src={transport} alt="SRMU buses and campus transportation" width={700} height={600} loading="lazy" decoding="async" className="h-[300px] w-full object-contain sm:h-[380px] lg:h-[460px]" />
          </div>
          <div className="relative max-w-[560px] py-2 lg:py-8">
            <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-[#24436A] uppercase sm:text-xs">Connected to campus</p>
            <h2 id="facilities-new-transport-title" className="mb-5 text-[32px] leading-[1.05] font-bold tracking-tight text-[#14284E] sm:text-[42px] lg:text-[52px]">Your journey,<br /><span className="text-[#FFB703]">made easier.</span></h2>
            <p className={bodyClass}>SRMU’s fleet of buses supports the daily commute of students and faculty. Multiple routes and organised schedules help the university community travel to and from campus.</p>
            <div className="mt-5 flex items-center gap-4 text-sm leading-relaxed text-[#4B5A72] sm:text-[15px]">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#FFB703]/75 text-[#14284E]"><Bus size={24} aria-hidden="true" /></span>
              <span className="h-10 w-px shrink-0 bg-[#FFB703]" aria-hidden="true" />
              <p>Find transport information and route details <span className="font-semibold text-[#14284E]">to plan your journey.</span></p>
            </div>
            <Link to="/transportation" className="mt-6 inline-flex min-h-12 items-center gap-4 rounded-full bg-[#FFB703] py-1.5 pr-2 pl-6 text-xs font-bold tracking-wide text-[#14284E] uppercase shadow-[0_8px_20px_#FFB70330] transition-transform hover:translate-y-[-1px] sm:text-sm">
              Explore transportation <span className="grid size-9 place-items-center rounded-full bg-white text-[#14284E]"><ArrowRight size={18} aria-hidden="true" /></span>
            </Link>
          </div>
        </div>
      </section>

      <section id="facilities-new-essentials" tabIndex={-1} className={`${sectionClass} bg-[#F7FAFE]`} aria-labelledby="facilities-new-essentials-title">
        <div className={containerClass}>
          <p className={eyebrowClass}>The little things that make campus life easier</p>
          <h2 id="facilities-new-essentials-title" className={headingClass}>Everyday <span>essentials.</span></h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { id: "healthcare", title: "Healthcare", text: "On-campus healthcare services support student wellbeing.", icon: Building2, to: "/facilities-new#facilities-new-facility-10" },
              { id: "banking", title: "Banking", text: "Banking and ATM facilities are available on campus for everyday needs.", icon: Landmark, to: "/hostel" },
              { id: "laundry", title: "Laundry Facilities", text: "Laundry support helps students manage everyday residential needs.", icon: WashingMachine, to: "/hostel" },
              { id: "hostel", title: "Hostel - AC class", text: "Explore hostel accommodation and residential amenities.", icon: BedDouble, to: "/hostel" },
              { id: "transport", title: "Transport, fee & route plan", text: "Find campus bus routes and transportation service details.", icon: Bus, to: "/transportation" },
            ].map(({ id, title, text, icon: Icon, to }) => <Link id={`facilities-new-essentials-${id}`} key={id} to={to} className="group scroll-mt-36 flex min-h-28 items-start gap-4 rounded-2xl border border-[#DCE6F2] bg-white p-5 text-[#14284E] transition-colors hover:border-[#FFB703] hover:shadow-[0_8px_24px_#14284E10]">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#EAF2FF] text-[#0F4A85] transition-colors group-hover:bg-[#FFF0C2]"><Icon size={22} aria-hidden="true" /></span>
              <span><strong className="block text-sm font-bold">{title}</strong><span className="mt-1 block text-[13px] leading-relaxed text-[#596B85]">{text}</span></span>
              <ArrowUpRight size={17} className="ml-auto shrink-0 text-[#7E8DA3]" aria-hidden="true" />
            </Link>)}
          </div>
        </div>
      </section>

      <section id="facilities-new-blocks" tabIndex={-1} className="relative isolate scroll-mt-36 overflow-hidden bg-[#F7FAFE] px-4 py-10 outline-none sm:px-6 sm:py-14 lg:py-16" aria-labelledby="facilities-new-blocks-title">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-32 size-[420px] rounded-full bg-[#EAF2FF]/70" />
          <Building2 className="absolute top-8 right-[5%] hidden size-52 text-[#EAF2FF] lg:block" strokeWidth={1} />
          <div className="absolute top-12 right-[3%] hidden grid-cols-5 gap-3 lg:grid">{Array.from({ length: 15 }, (_, dot) => <span key={dot} className="size-1 rounded-full bg-[#FFB703]/80" />)}</div>
        </div>
        <div className={containerClass}>
          <div className="mb-6">
            <p className="mb-3 flex items-center gap-3 text-[11px] font-bold tracking-[0.16em] text-[#0F4A85] uppercase sm:text-xs"><span className="h-0.5 w-9 shrink-0 bg-[#FFB703]" aria-hidden="true" />Discover your surroundings</p>
            <h2 id="facilities-new-blocks-title" className="mb-3 text-[28px] leading-[1.05] font-bold text-[#14284E] sm:text-[36px]">Five blocks.<br /><span className="text-[#FFB703]">Endless possibilities.</span></h2>
            <p className="max-w-3xl text-[14px] leading-relaxed text-[#4B5A72] sm:text-[15px]">Get to know the academic spaces that bring our disciplines, departments and university community together.</p>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5 [&>button]:flex [&>button]:min-h-11 [&>button]:items-center [&>button]:justify-center [&>button]:gap-2 [&>button]:rounded-xl [&>button]:border [&>button]:border-transparent [&>button]:bg-[#F0F6FB]/90 [&>button]:px-2 [&>button]:py-2.5 [&>button]:text-[11px] [&>button]:font-bold [&>button]:text-[#0F4A85] [&>button]:transition-colors sm:[&>button]:text-xs [&>button[aria-pressed=true]]:border-[#14284E] [&>button[aria-pressed=true]]:bg-[#203E91] [&>button[aria-pressed=true]]:text-white [&>button[aria-pressed=true]]:shadow-[inset_0_-3px_#FFB703] [&_svg]:size-4 [&_svg]:shrink-0" role="group" aria-label="Choose an academic block">{CARD_CONTENT.map((block, index) => <button key={block.id} type="button" aria-pressed={index === blockIndex} aria-controls="facilities-new-block-detail" onClick={() => setBlockIndex(index)}><Building2 size={18} aria-hidden="true" /><span className="whitespace-nowrap">{block.id} Academic Block</span></button>)}</div>
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

      <section className={`${sectionClass} bg-linear-to-br from-[#EAF4FB] via-[#DAEAF7] to-[#CFE2F2]`} aria-labelledby="facilities-new-more-title">
        <div className={containerClass}>
          <h2 id="facilities-new-more-title" className={headingClass}>More to <span>explore.</span></h2>
          <div className="grid gap-4 lg:grid-cols-3 [&>a]:flex [&>a]:items-start [&>a]:gap-4 [&>a]:rounded-2xl [&>a]:border [&>a]:border-[#DCE6F2] [&>a]:bg-white [&>a]:p-6 [&>a]:text-[#14284E] [&>a:hover]:border-[#0F4A85] [&_svg]:shrink-0 [&_svg]:text-[#0F4A85] [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-bold [&_p]:text-[13px] [&_p]:leading-relaxed [&_p]:text-[#4B5A72]">{[
            { to: "/hostel", title: "Your home on campus", text: "Explore hostel facilities and student accommodation.", icon: Building2 },
            { to: "/green-initiative-new", title: "A greener campus", text: "Discover sustainability in everyday university life.", icon: GraduationCap },
            { to: "/admission-enquiry", title: "Start your SRMU journey", text: "Connect with our team for admission enquiries.", icon: BookOpen },
          ].map(({ to, title, text, icon: Icon }) => <Link key={to} to={to}><Icon size={26} aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={20} aria-hidden="true" /></Link>)}</div>
          <details className="group mt-6 rounded-2xl bg-white px-6 [&>summary]:flex [&>summary]:min-h-16 [&>summary]:cursor-pointer [&>summary]:list-none [&>summary]:items-center [&>summary]:justify-between [&>summary]:gap-4 [&>summary]:py-4 [&>summary]:text-sm [&>summary]:font-semibold [&>summary::-webkit-details-marker]:hidden [&[open]>summary>svg]:rotate-180 [&>p]:pb-6"><summary>What facilities can I find at SRMU?<ChevronDown size={18} aria-hidden="true" /></summary><p className={bodyClass}>SRMU offers computer centres, specialised laboratories, modern classrooms, a central library, workshops, seminar halls, healthcare facilities, sports spaces, a gymnasium, cafeterias, hostels and transportation. Explore the sections above for more details.</p></details>
        </div>
      </section>
    </div>
  );
}
