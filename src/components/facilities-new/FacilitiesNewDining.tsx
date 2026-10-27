import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Coffee, ImageIcon, UsersRound } from "lucide-react";

type DiningImage = { src: string; caption: string };

export default function FacilitiesNewDining({ images, description }: { images: DiningImage[]; description: string }) {
  const [index, setIndex] = useState(0);
  const gallery = useRef<HTMLDivElement>(null);
  const current = images[index];

  return (
    <section
      id="facilities-new-dining"
      tabIndex={-1}
      aria-labelledby="facilities-new-dining-title"
      className="relative isolate scroll-mt-36 overflow-hidden bg-linear-to-br from-[#081B40] via-[#0B214B] to-[#081A3D] px-4 py-8 text-white outline-none sm:px-6 sm:py-10 lg:py-10"
    >
      {/* Decorative shapes stay behind the content and never intercept controls. */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-36 -left-32 size-72 rounded-full bg-[#233D91]/55" />
        <div className="absolute -top-24 -left-44 size-80 rounded-full bg-[#243F96]/35" />
        <div className="absolute -right-28 -bottom-44 size-80 rounded-full bg-[#233D91]/60" />
        <svg viewBox="0 0 260 240" className="absolute -bottom-3 -left-4 hidden w-56 sm:block" fill="none">
          <path d="M0 70C45 34 83 67 91 111C100 159 152 142 176 184C185 199 188 223 189 240H0Z" fill="#FFB703" />
          <path d="M0 18C80 2 111 63 113 111C117 168 205 161 227 240M0 5C56 25 51 120 107 159C149 190 229 172 250 240" stroke="#FFB703" strokeOpacity=".65" />
        </svg>
        <div className="absolute top-6 right-[6%] hidden grid grid-cols-5 gap-4 lg:grid">
          {Array.from({ length: 15 }, (_, dot) => <span key={dot} className="size-[3px] rounded-full bg-[#FFB703]/85" />)}
        </div>
        <div className="absolute bottom-6 left-[11%] hidden grid grid-cols-5 gap-4 lg:grid">
          {Array.from({ length: 15 }, (_, dot) => <span key={dot} className="size-[3px] rounded-full bg-[#5272C6]/65" />)}
        </div>
        <Coffee className="absolute bottom-14 left-[33%] hidden size-28 -rotate-12 text-[#3754B1]/40 lg:block" strokeWidth={1} />
        <svg viewBox="0 0 320 130" className="absolute bottom-4 left-[29%] hidden w-72 text-[#3754B1]/35 lg:block" fill="none">
          <path d="M2 98C56 17 110 137 57 118C16 103 100 43 161 80C234 124 210 24 273 29C322 31 273 73 294 2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 7" />
        </svg>
      </div>

      <div className="mx-auto grid w-full max-w-[1280px] items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-12">
        <div className="min-w-0">
          {/* <p className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[0.12em] text-[#FFB703] uppercase sm:text-sm">
            <span className="h-0.5 w-10 shrink-0 bg-[#FFB703]" aria-hidden="true" />
            Good food. Great company.
          </p> */}
          <h2 id="facilities-new-dining-title" className="mb-7 text-[24px] leading-[1.2] font-bold tracking-tight text-white sm:text-[36px]">
            A Place to Pause <span className="text-[#FFB703]">&amp; <span className="font-bold">Connect.</span></span>
          </h2>

          <div className="space-y-5 text-[15px] leading-relaxed text-[#E0E9FA] sm:text-base">
            <div className="flex items-start gap-4 sm:gap-5">
              <Coffee size={36} strokeWidth={1.5} className="mt-1 shrink-0 text-[#FFB703]" aria-hidden="true" />
              <p>{description}</p>
            </div>
            <div className="flex items-start gap-4 sm:gap-5">
              <UsersRound size={36} strokeWidth={1.5} className="mt-1 shrink-0 text-[#FFB703]" aria-hidden="true" />
              <p>More than a stop for food, these shared spaces are where conversations start and the campus community comes together.</p>
            </div>
          </div>

          {/* Temporarily hidden cafeteria gallery CTA.
          <div className="mt-6 w-fit border-t border-[#7895D0]/30 pt-5">
            <button
              type="button"
              aria-controls="facilities-new-dining-gallery"
              aria-label="Explore cafeteria and eating joints photos"
              className="inline-flex min-h-14 items-center gap-3 rounded-full bg-[#1A3270] py-2.5 pr-6 pl-4 text-[13px] font-semibold text-white focus-visible:outline-[#FFB703]! sm:gap-4 sm:text-sm"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#FFB703] text-[#10244E]"><Utensils size={23} aria-hidden="true" /></span>
              Cafeteria &amp; Eating Joints
              <ArrowRight size={20} className="ml-1 shrink-0" aria-hidden="true" />
            </button>
          </div>
          */}
        </div>

        <div
          ref={gallery}
          id="facilities-new-dining-gallery"
          role="region"
          aria-label="Cafeteria photo gallery"
          aria-roledescription="carousel"
          tabIndex={-1}
          className="relative min-w-0 scroll-mt-36 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#FFB703]"
        >
          <div className="pointer-events-none absolute -top-3 -left-3 -z-10 h-24 w-24 -rotate-6 rounded-[32px] bg-[#FFB703] sm:-top-4 sm:-left-6 sm:h-36 sm:w-32 sm:rounded-[40px]" aria-hidden="true" />
          <div className="pointer-events-none absolute top-[40%] -right-6 hidden h-40 w-0.5 bg-[#FFB703] xl:block" aria-hidden="true" />
          <figure className="relative m-0 overflow-hidden rounded-[20px] border border-[#7994CB]/40 bg-[#10244E] shadow-[0_18px_50px_#020D2630]">
            <img src={current.src} alt={current.caption} width={900} height={530} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover sm:aspect-[17/10]" />
            <figcaption className="absolute inset-x-0 bottom-0 flex min-h-18 items-center gap-3 rounded-t-2xl border-t border-[#7994CB]/25 bg-[#091C40]/90 px-4 py-3 backdrop-blur-sm sm:gap-5 sm:px-6 sm:py-4" aria-live="polite" aria-atomic="true">
              <ImageIcon size={30} strokeWidth={1.6} className="shrink-0 text-[#FFB703]" aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-semibold text-white sm:text-base">Cafeteria &amp; Eating Joints</p>
                <p className="mt-1 text-xs text-[#B8C8E6] sm:text-sm">View {index + 1} of {images.length}</p>
              </div>
              <span className="shrink-0 rounded-full border border-[#607CB7]/45 px-3 py-1 text-xs font-semibold text-[#FFB703] sm:px-5 sm:text-sm">{index + 1} / {images.length}</span>
            </figcaption>
          </figure>

          <div className="mt-3 flex items-center justify-between gap-3 px-1">
            <button type="button" aria-label="Previous cafeteria photo" onClick={() => setIndex((index + images.length - 1) % images.length)} className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-[#10244E] focus-visible:outline-[#FFB703]! sm:size-13">
              <ArrowLeft size={24} aria-hidden="true" />
            </button>
            <div className="flex items-center justify-center gap-1">
              {images.map((item, photoIndex) => (
                <button key={item.src} type="button" aria-label={`Show cafeteria photo ${photoIndex + 1}`} aria-pressed={photoIndex === index} onClick={() => setIndex(photoIndex)} className="grid h-11 w-7 place-items-center rounded-full focus-visible:outline-[#FFB703]!">
                  <span className={`h-2 rounded-full ${photoIndex === index ? "w-6 bg-[#FFB703]" : "w-2 bg-[#6C86B8]"}`} />
                </button>
              ))}
            </div>
            <button type="button" aria-label="Next cafeteria photo" onClick={() => setIndex((index + 1) % images.length)} className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-[#10244E] focus-visible:outline-[#FFB703]! sm:size-13">
              <ArrowRight size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
