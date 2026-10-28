import { useState } from "react";
import { ArrowLeft, ArrowRight, Coffee, UsersRound } from "lucide-react";

type DiningImage = { src: string; caption: string };

export default function FacilitiesNewDining({ images, description }: { images: DiningImage[]; description: string }) {
  const [index, setIndex] = useState(0);
  const current = images[index];

  return (
    <section
      id="facilities-new-dining"
      tabIndex={-1}
      aria-labelledby="facilities-new-dining-title"
      className="relative isolate scroll-mt-36 overflow-hidden bg-linear-to-br from-[#081B40] via-[#0B214B] to-[#081A3D] px-4 py-5 text-white outline-none sm:px-6 sm:py-6"
    >
      <div className="mx-auto grid w-full max-w-[1280px] items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-12">
        <div className="min-w-0">
          {/* <p className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[0.12em] text-[#FFB703] uppercase sm:text-sm">
<span className="h-0.5 w-10 shrink-0 bg-[#FFB703]" aria-hidden="true" />
Good food. Great company.
</p> */}
          <h2 id="facilities-new-dining-title" className="mb-7 text-[24px] leading-[1.2] font-bold tracking-tight text-white sm:text-[36px]">
            Cafeteria and <span className="text-[#FFB703]">Eating Joints</span>
          </h2>

          <div className="space-y-5 text-[15px] leading-relaxed text-[#E0E9FA] sm:text-base lg:text-justify">
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
          id="facilities-new-dining-gallery"
          role="region"
          aria-label="Cafeteria photo gallery"
          aria-roledescription="carousel"
          tabIndex={-1}
          className="relative mx-auto w-[92%] max-w-[560px] scroll-mt-36 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#FFB703] lg:mx-0 lg:h-full lg:w-full lg:justify-self-end"
        >
          <figure className="relative m-0 aspect-[4/3] overflow-hidden rounded-[20px] border border-[#7994CB]/40 bg-[#10244E] shadow-[0_18px_50px_#020D2630] sm:aspect-[17/10] lg:h-full lg:aspect-auto">
            <img src={current.src} alt={current.caption} width={900} height={530} loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
            <button type="button" aria-label="Previous cafeteria photo" onClick={() => setIndex((index + images.length - 1) % images.length)} className="absolute top-1/2 left-3 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white text-[#10244E] shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB703] sm:left-4 sm:size-12">
              <ArrowLeft size={22} aria-hidden="true" />
            </button>
            <button type="button" aria-label="Next cafeteria photo" onClick={() => setIndex((index + 1) % images.length)} className="absolute top-1/2 right-3 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white text-[#10244E] shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB703] sm:right-4 sm:size-12">
              <ArrowRight size={22} aria-hidden="true" />
            </button>
          </figure>
        </div>
      </div>
    </section>
  );
}
