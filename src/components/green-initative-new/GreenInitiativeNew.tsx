import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { ArrowDown, ArrowUpRight, ChevronDown, Droplets, Leaf, Recycle, Sun, Trees } from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  ecoData,
  greenInitiativeOverviewData,
} from "../../data/campus-life/green-initiative/green-initiative-data";

const categories = ["All initiatives", "Clean energy", "Water conservation", "Biodiversity", "Waste management"] as const;
type Category = (typeof categories)[number];

const mobileCategoryLabels: Record<Category, string> = {
  "All initiatives": "All",
  "Clean energy": "Energy",
  "Water conservation": "Water",
  "Biodiversity": "Nature",
  "Waste management": "Waste",
};

const initiativeDetails: Record<string, { category: Category; summary: string }> = {
  "Bio-gas Plant": { category: "Clean energy", summary: "Turning kitchen waste into cooking fuel and nourishment for our gardens." },
  "Solar Panels": { category: "Clean energy", summary: "Putting academic rooftops to work with a 237 KVA solar power system." },
  "Rain Water Harvesting": { category: "Water conservation", summary: "Collecting rainwater across campus to recharge groundwater reserves." },
  "Energy Parks": { category: "Clean energy", summary: "Exploring sustainable technology through solar equipment and electric mobility." },
  "Green Belts": { category: "Biodiversity", summary: "Creating harmony between nature and campus life through gardens and green spaces." },
  "Green Composting": { category: "Waste management", summary: "Giving crop residue, weeds and fallen leaves a new purpose as natural manure." },
  "Herbal Nursery": { category: "Biodiversity", summary: "A living space for learning about medicinal and aromatic plants." },
  "Green House": { category: "Biodiversity", summary: "Supporting protective cultivation in a controlled growing environment." },
  "Sensor Based Street Lights": { category: "Clean energy", summary: "Using automatic lighting to reduce energy consumption across campus." },
  "Plastic Free Campus": { category: "Waste management", summary: "Encouraging biodegradable materials, recycled paper and responsible everyday choices." },
  "Sewage Treatment Plant (STP)": { category: "Water conservation", summary: "Building infrastructure to treat liquid waste for future reuse in landscaping and flushing." },
};

const highlights = [
  { value: "237 KVA", label: "Solar power system" },
  { value: "500 kg", label: "Biogas plant capacity" },
  { value: "11", label: "Green initiatives" },
  { value: "₹1 Cr+", label: "Rainwater harvesting investment" },
];

const pillars = [
  { icon: Sun, title: "Clean energy", description: "Solar power, biogas and smarter lighting." },
  { icon: Droplets, title: "Water conservation", description: "Rainwater harvesting and resource recovery." },
  { icon: Trees, title: "Biodiversity", description: "Green belts, medicinal plants and cultivation." },
  { icon: Recycle, title: "Responsible consumption", description: "Composting, recycling and less plastic." },
];

const container = "mx-auto w-full max-w-[1320px]";
const heading = "text-[28px] leading-[1.2] font-bold sm:text-[36px]";
const initiativeSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function GreenInitiativeNew() {
  const [category, setCategory] = useState<Category>("All initiatives");
  const location = useLocation();
  const initiatives = ecoData.filter((item) => category === "All initiatives" || initiativeDetails[item.title].category === category);

  useEffect(() => {
    if (location.hash.startsWith("#green-initiative-")) setCategory("All initiatives");
  }, [location.hash]);

  useEffect(() => {
    if (!location.hash.startsWith("#green-initiative-")) return;
    let frame = 0;
    let attempts = 0;
    const openInitiative = () => {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      const details = target?.querySelector("details");
      if (details) {
        details.open = true;
        return;
      }
      if (attempts++ < 20) frame = window.requestAnimationFrame(openInitiative);
    };
    frame = window.requestAnimationFrame(openInitiative);
    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, category]);

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const target = document.getElementById(event.currentTarget.hash.slice(1));
    if (!target) return;

    // Avoid a hash navigation triggering RootLayout's scroll-to-top effect.
    event.preventDefault();
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-white text-[#14284E] antialiased">
      {/* Reserved for the final banner artwork: reference hero dimensions. */}
      <div
        role="img"
        aria-label="Space reserved for the Green Initiative banner"
        className="flex h-[620px] w-full items-center justify-center bg-[#071329] px-6 sm:h-[504px]"
      >
        <div className="mt-20 text-center text-[#E0F1FF]/70">
          <span className="mx-auto mb-5 block h-[3px] w-16 rounded-full bg-[#FFB703]" />
          <p className="text-sm font-medium uppercase tracking-[0.2em]">Green Initiative Banner</p>
          <p className="mt-3 text-xs tracking-wide sm:hidden">Full width · 620px height</p>
          <p className="mt-3 hidden text-xs tracking-wide sm:block">Full width · 504px height</p>
        </div>
      </div>

      <section aria-label="Green initiative highlights" className="hidden bg-[#E0F1FF] px-4 py-4 sm:px-6 md:block">
        <dl className="mx-auto grid max-w-[1100px] grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
          {highlights.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 text-center">
              <dt className="text-[10px] font-bold uppercase tracking-[0.04em] sm:text-[11px]">{label}</dt>
              <dd className="order-first m-0 text-[28px] leading-none font-extrabold text-[#D62C2B] sm:text-[32px]">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <nav aria-label="Green initiative sections" className="hidden bg-[#FFB703] px-4 sm:px-6 md:block">
        <div className={`${container} grid grid-cols-3`}>
          {[
            { id: "green-overview", label: "Overview" },
            { id: "green-initiatives", label: "Our initiatives" },
            { id: "green-campus", label: "Campus culture" },
          ].map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={scrollToSection} className="flex min-h-12 items-center justify-center px-2 py-3 text-center text-[10px] font-bold tracking-wide text-[#0F4A85] uppercase hover:text-[#14284E] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#14284E] sm:text-xs">
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section id="green-overview" aria-labelledby="green-heading" className="scroll-mt-36 px-4 py-9 sm:px-6 md:py-12">
        <div className={`${container} grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12`}>
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.16em] text-[#0F4A85] uppercase">Sustainability at SRMU</p>
            <h1 id="green-heading" className={`${heading} mb-5`}>Green <span className="text-[#FFB703]">Initiative</span></h1>
            <div className="space-y-4 text-[15px] leading-relaxed text-[#4B5A72] sm:text-base">
              {greenInitiativeOverviewData.content.trim().split(/\n+/).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <a href="#green-initiatives" onClick={scrollToSection} className="mt-6 inline-flex min-h-11 items-center gap-4 rounded-full bg-[#FFB703] px-6 py-3 text-xs font-bold uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F4A85]">
              Explore our initiatives <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
          <figure className="relative m-0 overflow-hidden rounded-2xl bg-[#E0F1FF]">
            <img src={ecoData[4].image} alt="Gardens and green belts on the SRMU campus" width={640} height={460} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-[#14284E]/95 px-5 py-4 text-white">
              <Leaf className="shrink-0 text-[#FFB703]" size={24} aria-hidden="true" />
              <div><p className="text-sm font-bold">A greener place to learn and grow</p><p className="mt-1 text-xs text-[#E0F1FF]">Responsibility begins on our campus.</p></div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-label="Our sustainability focus" className="bg-[#14284E] px-4 py-8 sm:px-6">
        <div className={`${container} grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
          {pillars.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/5 text-[#FFB703]"><Icon size={24} aria-hidden="true" /></span>
              <div><h2 className="mb-2 text-base font-bold text-white">{title}</h2><p className="text-sm leading-relaxed text-[#E0F1FF]">{description}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="green-initiatives" aria-labelledby="initiatives-heading" className="scroll-mt-36 bg-linear-to-br from-[#eaf4fb] via-[#daeaf7] to-[#cfe2f2] px-4 py-10 sm:px-6 md:py-14">
        <div className={container}>
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="mb-3 inline-flex rounded-full bg-[#D62C2B] px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase">Our commitment in action</span>
              <h2 id="initiatives-heading" className={heading}>Small steps. <span className="text-[#FFB703]">Lasting impact.</span></h2>
              <div className="mt-4 flex gap-2" aria-hidden="true"><span className="h-[3px] w-11 bg-[#FFB703]" /><span className="h-[3px] w-5 bg-[#0F4A85]" /></div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#4B5A72]">Discover how SRMU conserves resources and brings environmentally conscious practices into everyday campus life.</p>
          </div>

          <div role="group" aria-label="Filter initiatives" className="mb-4 grid grid-cols-5 gap-1 sm:flex sm:flex-wrap sm:gap-2">
            {categories.map((item) => (
              <button key={item} type="button" aria-label={item} aria-pressed={category === item} aria-controls="initiative-results" onClick={() => setCategory(item)} className={`min-h-11 min-w-0 cursor-pointer rounded-full border px-1 py-2 text-[11px] font-bold whitespace-nowrap shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4A85] motion-reduce:transition-none sm:px-5 sm:text-xs ${category === item ? "border-[#14284E] bg-[#14284E] text-white" : "border-[#DCE6F2] bg-white text-[#0F4A85] hover:border-[#0F4A85]"}`}>
                <span className="sm:hidden">{mobileCategoryLabels[item]}</span>
                <span className="hidden sm:inline">{item}</span>
              </button>
            ))}
          </div>
          <p role="status" className="mb-5 text-xs text-[#4B5A72]">Showing {initiatives.length} of {ecoData.length} initiatives</p>
          <div id="initiative-results" className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((item) => (
              <article id={`green-initiative-${initiativeSlug(item.title)}`} key={item.title} className="group scroll-mt-36 overflow-hidden rounded-2xl border border-[#DCE6F2] bg-white shadow-[0_4px_20px_#3479c906]">
                <div className="relative overflow-hidden">
                  <img src={item.image} alt={item.title} width={600} height={400} loading="lazy" decoding="async" className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
                  <span className="absolute bottom-3 left-4 rounded-full bg-[#E0F1FF] px-3 py-1.5 text-[10px] font-bold text-[#0F4A85]">{initiativeDetails[item.title].category}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="mb-3 text-xl leading-snug font-bold">{item.title}</h3>
                  <p className="min-h-[66px] text-sm leading-relaxed text-[#4B5A72]">{initiativeDetails[item.title].summary}</p>
                  <details className="group/detail mt-4 border-t border-[#DCE6F2] pt-4">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-full bg-[#FFB703] px-5 py-2.5 text-xs font-bold uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F4A85] [&::-webkit-details-marker]:hidden">
                      <span>About this initiative<span className="sr-only">: {item.title}</span></span>
                      <ChevronDown size={16} aria-hidden="true" className="shrink-0 transition-transform group-open/detail:rotate-180 motion-reduce:transition-none" />
                    </summary>
                    <p className="pt-4 text-sm leading-relaxed text-[#4B5A72]">{item.description}</p>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="green-campus" aria-labelledby="campus-heading" className="scroll-mt-36 bg-[#F0F6FB] px-4 py-10 sm:px-6 md:py-14">
        <div className={`${container} grid overflow-hidden rounded-2xl border border-[#DCE6F2] bg-white lg:grid-cols-2`}>
          <img src={ecoData[6].image} alt="Herbal nursery at Shri Ramswaroop Memorial University" width={660} height={440} loading="lazy" decoding="async" className="aspect-[3/2] h-full w-full object-cover" />
          <div className="border-t-4 border-[#FFB703] bg-[#14284E] p-6 text-white sm:p-10">
            <p className="mb-4 flex items-center gap-2 text-xs font-bold tracking-widest text-[#FFB703] uppercase"><span className="h-0.5 w-6 bg-[#FFB703]" /> A shared responsibility</p>
            <h2 id="campus-heading" className={`${heading} mb-5`}>Growing a culture of <span className="text-[#FFB703]">sustainability.</span></h2>
            <p className="text-[15px] leading-relaxed text-[#E0F1FF]">From classrooms to community spaces, our staff, faculty and students work together to use resources responsibly. Our campus is a place to learn, practise and carry environmentally conscious habits into everyday life.</p>
            <div className="mt-6 space-y-3">
              {["Choose reusable and biodegradable materials", "Conserve energy and water", "Care for the green spaces around us"].map((action) => (
                <p key={action} className="flex items-start gap-3 text-sm"><Leaf size={18} className="shrink-0 text-[#FFB703]" aria-hidden="true" />{action}</p>
              ))}
            </div>
            <a href="#green-initiatives" onClick={scrollToSection} className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-full bg-[#FFB703] px-6 py-3 text-xs font-bold text-[#14284E] uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Discover our green campus <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </div>
  );
}