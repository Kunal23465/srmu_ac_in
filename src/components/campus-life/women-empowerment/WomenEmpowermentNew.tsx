import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, Building2, HandHeart, Lightbulb, Scale, ShieldCheck, Sparkles, UserRound, UsersRound, X } from "lucide-react";
import { Link } from "react-router-dom";
import { initiativesData, items, stats, WomenEmpowerOverviewData } from "../../../data/campus-life/women-empowerment/women-empowerment-data";
import empowermentImage from "../../../assets/images/campus-life/women-empowerment/we-believe-in.jpg";
import campusImage from "../../../assets/images/breadcrumb/campus.webp";
import studentLeadersImage from "../../../assets/images/home/girls-image.webp";

const containerClass = "mx-auto w-full min-w-0 max-w-[1280px]";
const eyebrowClass = "mb-3 text-[11px] font-bold tracking-[0.16em] text-[#0F4A85] uppercase";
const headingClass = "mb-5 text-[26px] leading-[1.15] font-bold text-[#14284E] sm:text-[36px] [&>span]:text-[#FFB703]";
const bodyClass = "text-[15px] leading-relaxed text-[#4B5A72] sm:text-base";
const buttonClass = "inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#FFB703] px-6 py-3 text-xs font-bold tracking-wide text-[#14284E] uppercase transition-colors hover:bg-[#ffca42] motion-reduce:transition-none";

const initiativeIcons = [ShieldCheck, UsersRound, HandHeart, UsersRound, Sparkles, ShieldCheck];
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
export default function WomenEmpowermentNew() {
  const [activeInitiative, setActiveInitiative] = useState<number | null>(null);

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
    <main className="overflow-x-clip bg-white text-[#14284E] antialiased [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#0F4A85]">
      <section className="relative isolate flex min-h-[clamp(390px,74vw,520px)] items-center overflow-hidden bg-[#071329] px-4 pt-24 pb-12 sm:px-6 md:pt-28" aria-labelledby="women-empowerment-new-title">
        <img src={empowermentImage} alt="A student on campus with a laptop" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center]" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#071329]/95 via-[#091a38]/75 to-[#071329]/25" aria-hidden="true" />
        <div className={`${containerClass} relative z-10`}>
          <p className="mb-3 text-sm font-bold tracking-[0.18em] text-[#FFCA42] uppercase">Educate · Empower · Lead</p>
          <h1 id="women-empowerment-new-title" className="max-w-[720px] text-[30px] leading-[1.08] font-bold text-white sm:text-[36px]">Empowering women, <span className="text-[#FFB703]">shaping futures.</span></h1>
          <div className="my-5 h-[3px] w-20 rounded-full bg-[#FFB703]" aria-hidden="true" />
          <p className="max-w-[590px] text-[15px] leading-relaxed text-[#E0F1FF] sm:text-base">At SRMU, equality and opportunity are part of campus life. Through awareness, support and leadership, we help every student build confidence and realise their potential.</p>
          <a href="#women-empowerment-new-initiatives" className={`${buttonClass} mt-7 rounded-lg!`}>Explore our initiatives <ArrowDown size={17} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="bg-[#E0F1FF] px-4 py-5 sm:px-6 sm:py-4" aria-label="Women empowerment on campus">
        <dl className="mx-auto grid w-full max-w-[1100px] grid-cols-3 gap-x-2 gap-y-5 sm:gap-x-4">
          {stats.map(({ value, label }) => <div key={label} className="flex min-w-0 flex-col items-center gap-1 text-center">
            <dt className="text-[10px] leading-snug font-bold tracking-wide uppercase lg:text-[11px]">{label}</dt>
            <dd className="order-first m-0 text-[28px] leading-none font-extrabold text-[#D62C2B] sm:text-[32px]">{value}</dd>
          </div>)}
        </dl>
      </section>

      <section className="px-4 py-10 sm:px-6 md:py-16">
        <div className={`${containerClass} grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.9fr)] lg:gap-14`}>
          <div>
            <p className={eyebrowClass}>A culture of respect and opportunity</p>
            <h2 className={headingClass}>Educate and <span>empower.</span></h2>
            <p className={bodyClass}>{WomenEmpowerOverviewData.content.trim()}</p>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: ShieldCheck, title: "Safe spaces", text: "Support, dignity and respect for everyone." },
                { icon: Sparkles, title: "Room to lead", text: "Confidence to pursue ideas and opportunity." },
              ].map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-3 rounded-xl border border-[#DCE6F2] bg-[#F7FAFD] p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#FFF0C2] text-[#173866]"><Icon size={20} aria-hidden="true" /></span>
                <div><h3 className="text-sm font-bold">{title}</h3><p className="mt-1 text-xs leading-relaxed text-[#596B85]">{text}</p></div>
              </div>)}
            </div>
          </div>
          <figure className="relative m-0 min-h-[280px] overflow-hidden rounded-2xl bg-[#E0F1FF] shadow-[0_12px_35px_#0F1F3D18] sm:min-h-[420px]">
            <img src={empowermentImage} alt="A student learning independently on campus" width={1000} height={516} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 border-t-4 border-[#FFB703] bg-[#14284E]/95 px-5 py-4 text-sm font-semibold text-white sm:px-6">Confidence, learning and opportunity for every student.</figcaption>
          </figure>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-linear-to-br from-[#F5FAFE] via-[#EAF4FB] to-[#DDEEFF] px-4 py-10 sm:px-6 md:py-14" aria-labelledby="women-empowerment-new-principles-title">
        <div className="pointer-events-none absolute -top-28 -left-24 size-64 rounded-full bg-[#FFB703]/80 sm:size-80" aria-hidden="true" />
        <div className="pointer-events-none absolute -top-36 -left-32 size-80 rounded-full border border-[#FFB703]/60 sm:size-[26rem]" aria-hidden="true" />
        <img src={campusImage} alt="" aria-hidden="true" loading="lazy" className="pointer-events-none absolute right-0 bottom-0 hidden h-[66%] w-[250px] rounded-tl-[100%] object-cover object-left opacity-80 xl:block" />
        <div className="pointer-events-none absolute right-0 bottom-0 hidden h-[66%] w-[290px] bg-linear-to-r from-[#EAF4FB]/0 via-[#EAF4FB]/15 to-transparent xl:block" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-6 left-2 hidden grid-cols-5 gap-2 sm:grid" aria-hidden="true">{Array.from({ length: 15 }, (_, dot) => <span key={dot} className="size-1 rounded-full bg-[#FFB703]/75" />)}</div>
        <div className={`${containerClass} relative`}>
          <div className="mb-7 max-w-[980px]">
            <p className={`${eyebrowClass} flex items-center gap-3`}><span>Our commitment</span><span className="h-[3px] w-10 rounded-full bg-[#FFB703]" aria-hidden="true" /></p>
            <h2 id="women-empowerment-new-principles-title" className={`${headingClass} mb-3 max-w-[900px] text-[26px] sm:text-[36px] lg:text-[36px]`}>A campus where <span>everyone can thrive.</span></h2>
            <p className="max-w-[620px] text-sm leading-relaxed text-[#405675] sm:text-base md:max-w-none md:whitespace-nowrap">We work to make equality visible in our learning spaces, our relationships and the opportunities we create.</p>
          </div>
          <ul className="relative z-10 m-0 grid auto-rows-fr list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 xl:max-w-[calc(100%-150px)] xl:grid-cols-3">
            {items.map((principle, index) => {
              const Icon = principleIcons[index];
              const style = principleStyles[index];
              return <li key={principle} className={`flex min-h-[100px] items-center gap-4 rounded-2xl border-l-[5px] ${style.edge} bg-white/95 px-4 py-4 shadow-[0_6px_22px_#0F1F3D0D] transition-transform hover:-translate-y-0.5 sm:px-5`}>
                <span className={`grid size-12 shrink-0 place-items-center rounded-full sm:size-14 ${style.icon}`}><Icon size={25} strokeWidth={1.8} aria-hidden="true" /></span>
                <span className="min-w-0 flex-1 text-sm leading-relaxed text-[#294363] sm:text-[15px]">{principle}</span>
                <ArrowRight size={19} className="shrink-0 text-[#FFB703]" aria-hidden="true" />
              </li>;
            })}
          </ul>
        </div>
      </section>

      <section id="women-empowerment-new-initiatives" className="relative scroll-mt-24 overflow-hidden bg-white px-4 py-10 sm:px-6 md:py-14" aria-labelledby="women-empowerment-new-initiatives-title">
        <div className={containerClass}>
          <div className="mb-7">
            <div>
              <p className={`${eyebrowClass} flex items-center gap-3`}><span className="h-[3px] w-7 rounded-full bg-[#FFB703]" aria-hidden="true" /><span>Support in action</span></p>
              <h2 id="women-empowerment-new-initiatives-title" className={`${headingClass} mb-0 text-[28px] sm:text-[36px] lg:text-[36px]`}>Initiatives that <span>make a difference.</span></h2>
              <p className="mt-3 max-w-[620px] text-sm leading-relaxed text-[#4B5A72] sm:text-base lg:max-w-none lg:whitespace-nowrap">Programs across campus support wellbeing, safety, confidence and community participation.</p>
            </div>
          </div>
          <div className="grid items-center gap-5 xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {initiativesData.map((initiative, index) => {
                const Icon = initiativeIcons[index % initiativeIcons.length];
                const columnDivider = index % 3 !== 2 ? "xl:border-r xl:border-[#E5EAF0]" : "";
                const rowDivider = index < 3 ? "xl:border-b xl:border-[#E5EAF0]" : "";
                return <article key={initiative.title} className={`flex min-h-[205px] flex-col px-4 py-5 sm:px-5 lg:px-6 ${index < initiativesData.length - 1 ? "border-b border-[#E5EAF0] sm:border-b-0" : ""} ${index < 4 ? "sm:border-b sm:border-[#E5EAF0] xl:border-b-0" : ""} ${columnDivider} ${rowDivider}`}>
                  <span className="mb-3 grid size-14 place-items-center rounded-full bg-[#FFF0C2] text-[#173866]"><Icon size={27} strokeWidth={1.8} aria-hidden="true" /></span>
                  <h3 className="mb-2 text-base leading-snug font-bold text-[#14284E] sm:text-lg">
                    <button type="button" onClick={() => setActiveInitiative(index)} className="inline-flex items-center gap-2 text-left hover:text-[#0F4A85] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4A85]">
                      {initiative.title}<ArrowRight size={18} className="shrink-0 text-[#FFB703]" aria-hidden="true" />
                    </button>
                  </h3>
                  <p className="mb-0 text-sm leading-relaxed text-[#596B85]">{initiative.shortDescription}</p>
                </article>;
              })}
            </div>
            <figure className="relative m-0 hidden min-h-[440px] items-end justify-center xl:flex">
              <div className="absolute right-5 bottom-8 h-[300px] w-[310px] rotate-[-8deg] rounded-[48%_52%_38%_62%/48%_44%_56%_52%] bg-[#FFCA42]" aria-hidden="true" />
              <img src={studentLeadersImage} alt="SRMU students supporting and encouraging one another" loading="lazy" decoding="async" className="relative z-10 max-h-[460px] w-full object-contain object-bottom" />
              <div className="absolute top-14 right-2 z-20 flex rotate-[20deg] gap-3" aria-hidden="true"><span className="h-8 w-1.5 rounded-full bg-[#FFCA42]" /><span className="mt-4 h-9 w-1.5 rounded-full bg-[#FFCA42]" /><span className="mt-8 h-7 w-1.5 rounded-full bg-[#FFCA42]" /></div>
            </figure>
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 md:pb-14">
        <div className={`${containerClass} relative isolate overflow-hidden rounded-2xl bg-[#14284E] px-6 py-8 text-white sm:px-10 sm:py-10`}>
          <div className="pointer-events-none absolute -right-10 -bottom-20 size-64 rounded-full border-[28px] border-[#FFB703]/10" aria-hidden="true" />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-[700px]"><p className="mb-2 text-[11px] font-bold tracking-[0.16em] text-[#FFCA42] uppercase">An inclusive campus is everyone’s work</p><h2 className="text-[25px] leading-tight font-bold sm:text-[36px]">Respect creates room for every voice.</h2><p className="mt-3 text-sm leading-relaxed text-[#E0F1FF] sm:text-base">Learn more about the people, programs and support that make our community stronger.</p></div>
            <Link to="/contact-us" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 rounded-lg bg-[#FFB703] px-5 py-3 text-xs font-bold tracking-wide text-[#14284E] uppercase hover:bg-[#ffca42]">Connect with SRMU <ArrowUpRight size={17} aria-hidden="true" /></Link>
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
