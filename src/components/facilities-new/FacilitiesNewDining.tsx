import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type DiningImage = { src: string; caption: string; objectPosition?: string };

export default function FacilitiesNewDining({ images, description }: { images: DiningImage[]; description: string }) {
  const [index, setIndex] = useState(0);
  const current = images[index];

  return (
    <section id="facilities-new-dining" tabIndex={-1} aria-labelledby="facilities-new-dining-title" className="scroll-mt-24 grid min-h-[520px] bg-[#14284E] lg:min-h-[600px] lg:grid-cols-[55%_45%]">
      <div id="facilities-new-dining-gallery" role="region" aria-label="Cafeteria photo gallery" aria-roledescription="carousel" className="relative min-h-[300px] overflow-hidden bg-[#FFB70F] sm:min-h-[420px] lg:min-h-0 lg:[clip-path:polygon(0_0,100%_0,calc(100%_-_34px)_100%,0_100%)]">
        <img src={current.src} alt={current.caption} width={900} height={530} loading="lazy" decoding="async" style={{ objectPosition: current.objectPosition ?? "center" }} className="absolute inset-0 size-full object-cover lg:[clip-path:polygon(0_0,100%_0,calc(100%_-_62px)_100%,0_100%)]" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-[#14284E]/90 to-transparent px-5 pb-5 pt-16 text-white sm:px-8 sm:pb-8">
          {/* <p className="text-sm font-medium sm:text-base">{current.caption}</p> */}
          <div className="flex shrink-0 gap-2">
            <button type="button" aria-label="Previous cafeteria photo" onClick={() => setIndex((index + images.length - 1) % images.length)} className="grid size-12 place-items-center rounded-full border border-white/60 bg-[#14284E]/70 text-white transition-colors hover:bg-[#FFB70F] hover:text-[#14284E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB70F]">
              <ArrowLeft size={19} aria-hidden="true" />
            </button>
            <button type="button" aria-label="Next cafeteria photo" onClick={() => setIndex((index + 1) % images.length)} className="grid size-12 place-items-center rounded-full border border-white/60 bg-[#14284E]/70 text-white transition-colors hover:bg-[#FFB70F] hover:text-[#14284E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB70F]">
              <ArrowRight size={19} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-4 py-6 sm:px-10 sm:py-8 lg:py-10 lg:pr-[max(40px,calc((100vw_-_1200px)/2))] lg:pl-10">
        <h2 id="facilities-new-dining-title" className="font-display text-[clamp(30px,3.8vw,48px)] leading-[1.12] font-semibold tracking-tight text-white">Cafeteria and <span className="text-[#FFB70F]">Eating Joints</span></h2>
        <div className="my-5 h-[5px] w-16 bg-[#FFB70F] sm:my-6" aria-hidden="true" />
        <p className="max-w-[58ch] text-[15px] leading-[1.75] text-white sm:text-base">{description}</p>
        <p className="mt-3 max-w-[58ch] text-[15px] leading-[1.75] text-white sm:text-base">More than a stop for food, these shared spaces are where conversations start and the campus community comes together.</p>
      </div>
    </section>
  );
}
