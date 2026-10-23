import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { convocationData } from "../../../data/campus-life/convocation/convocation-data";

const containerClass = "mx-auto w-full min-w-0 max-w-[1280px]";
const eyebrowClass = "mb-3 text-[11px] font-bold tracking-[0.16em] text-[#0F4A85] uppercase";
const headingClass = "mb-5 text-[26px] leading-[1.15] font-bold text-[#14284E] sm:text-[36px] [&>span]:text-[#FFB703]";
const bodyClass = "text-[15px] leading-relaxed text-[#4B5A72] sm:text-base";
const buttonClass = "inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#FFB703] px-6 py-3 text-xs font-bold tracking-wide text-[#14284E] uppercase transition-colors hover:bg-[#ffca42] motion-reduce:transition-none";

const ceremony = convocationData.convocation.cards[0];
const highlights = [
  { value: "2,954", label: "Degrees conferred" },
  { value: "79", label: "Gold medallists" },
  { value: "54", label: "Silver medallists" },
  { value: "68", label: "Doctoral scholars" },
];

export default function ConvocationNew() {
  return (
    <main className="overflow-x-clip bg-white text-[#14284E] antialiased [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#0F4A85]">
      <section className="relative isolate flex min-h-[clamp(390px,74vw,520px)] items-center overflow-hidden bg-[#071329] px-4 pt-24 pb-12 sm:px-6 md:pt-28">
        <img src={ceremony.image} alt="Graduates and university dignitaries at the SRMU convocation ceremony" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#071329]/95 via-[#091a38]/75 to-[#071329]/20" aria-hidden="true" />
        <div className={`${containerClass} relative z-10`}>
          <p className="mb-3 text-sm font-bold tracking-[0.18em] text-[#FFCA42] uppercase">A milestone worth celebrating</p>
          <h1 className="max-w-[720px] text-[38px] leading-[1.08] font-bold text-white sm:text-[56px]">Honouring every <span className="text-[#FFB703]">achievement.</span></h1>
          <div className="my-5 h-[3px] w-20 rounded-full bg-[#FFB703]" aria-hidden="true" />
          <p className="max-w-[570px] text-[15px] leading-relaxed text-[#E0F1FF] sm:text-base">A celebration of dedication, discovery and the next chapter. Relive the moments from Shri Ramswaroop Memorial University’s first convocation.</p>
          <a href="#convocation-new-story" className={`${buttonClass} mt-7 rounded-lg!`}>Explore the ceremony <ArrowDown size={17} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="bg-[#E0F1FF] px-4 py-5 sm:px-6 sm:py-4" aria-label="Convocation highlights">
        <dl className="mx-auto grid w-full max-w-[1100px] grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
          {highlights.map(({ value, label }) => <div key={label} className="flex min-w-0 flex-col items-center gap-1 text-center">
            <dt className="text-[10px] leading-snug font-bold tracking-wide uppercase lg:text-[11px]">{label}</dt>
            <dd className="order-first m-0 text-[28px] leading-none font-extrabold text-[#D62C2B] sm:text-[32px]">{value}</dd>
          </div>)}
        </dl>
      </section>

      <section id="convocation-new-story" className="scroll-mt-24 px-4 py-10 sm:px-6 md:py-16">
        <div className={`${containerClass} grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.9fr)] lg:gap-14`}>
          <div>
            <p className={eyebrowClass}>A proud university tradition</p>
            <h2 className={headingClass}>A day that marked <span>new beginnings.</span></h2>
            <p className={bodyClass}>On 11 October 2021, Shri Ramswaroop Memorial University held its first convocation ceremony to celebrate the achievements of its graduating students. The ceremony brought together graduates, families, faculty and distinguished guests for a memorable day on campus.</p>
            <p className={`${bodyClass} mt-4`}>Gold and silver medallists were honoured, doctoral scholars received their degrees, and the academic procession marked the beginning of a new chapter for the university community.</p>
            <Link to="/convocation/convocation-2021" className={`${buttonClass} mt-6`}>Read the ceremony story <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <figure className="relative m-0 min-h-[280px] overflow-hidden rounded-2xl bg-[#E0F1FF] shadow-[0_12px_35px_#0F1F3D18] sm:min-h-[420px]">
            <img src={ceremony.image} alt="The first SRMU convocation ceremony" width={900} height={600} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 border-t-4 border-[#FFB703] bg-[#14284E]/95 px-5 py-4 text-sm font-semibold text-white sm:px-6">The first convocation · 11 October 2021</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-linear-to-br from-[#EAF4FB] via-[#DAEAF7] to-[#CFE2F2] px-4 py-10 sm:px-6 md:py-14" aria-labelledby="convocation-new-gallery-title">
        <div className={containerClass}>
          <p className={eyebrowClass}>Moments to remember</p>
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h2 id="convocation-new-gallery-title" className={`${headingClass} mb-0`}>The ceremony, <span>in photographs.</span></h2>
            {/* <p className="max-w-[380px] text-sm leading-relaxed text-[#4B5A72]">A look back at the people, traditions and celebrations that made this milestone special.</p> */}
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {ceremony.photos?.map((photo, index) => <figure key={photo} className={`group relative m-0 overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_#0F1F3D12] ${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}>
              <img src={photo} alt={`Convocation ceremony moment ${index + 1}`} loading="lazy" decoding="async" className={`aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${index === 0 ? "sm:aspect-auto sm:min-h-[350px]" : ""}`} />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#071329]/80 to-transparent px-3 pt-8 pb-3 text-xs font-semibold text-white sm:px-4">Convocation · Moment {String(index + 1).padStart(2, "0")}</figcaption>
            </figure>)}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 md:py-14">
        <div className={`${containerClass} relative isolate overflow-hidden rounded-2xl bg-[#14284E] px-6 py-8 text-white sm:px-10 sm:py-10`}>
          <div className="pointer-events-none absolute -right-10 -bottom-20 size-64 rounded-full border-[28px] border-[#FFB703]/10" aria-hidden="true" />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-[700px]"><p className="mb-2 text-[11px] font-bold tracking-[0.16em] text-[#FFCA42] uppercase">The next chapter starts here</p><h2 className="text-[25px] leading-tight font-bold sm:text-[34px]">“Your convocation is just the beginning.”</h2><p className="mt-3 text-sm leading-relaxed text-[#E0F1FF] sm:text-base">Celebrate how far you have come, and take pride in everything still ahead.</p></div>
            <Link to="/convocation/convocation-2021" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 rounded-lg bg-[#FFB703] px-5 py-3 text-xs font-bold tracking-wide text-[#14284E] uppercase hover:bg-[#ffca42]">View ceremony details <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
