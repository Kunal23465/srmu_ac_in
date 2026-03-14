import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export interface OpportunityCard {
  id: number;
  img: string;
  course: string;
  path: string;
}

interface CustomProgramOppertunitySliderProps {
  data: OpportunityCard[];
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="custom-arrow -right-7! right-arrow absolute top-1/2 -translate-y-1/2 z-10 cursor-pointer"
      aria-label="Next"
    >
      ›
    </button>
  );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="custom-arrow -left-7! left-arrow absolute top-1/2 -translate-y-1/2 z-10 cursor-pointer"
      aria-label="Previous"
    >
      ‹
    </button>
  );
}

const CustomProgramOppertunitySlider: React.FC<
  CustomProgramOppertunitySliderProps
> = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  useEffect(() => {
    setHasMounted(true);

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlidesToShow = useCallback(() => {
    if (windowWidth >= 1200) return 4;
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 600) return 2;
    return 1;
  }, [windowWidth]);

  /** Re-initialize embla when window width changes */
  useEffect(() => {
    if (emblaApi && hasMounted) {
      emblaApi.reInit();
    }
  }, [windowWidth, emblaApi, hasMounted]);

  const goToNext = () => emblaApi?.scrollNext();
  const goToPrev = () => emblaApi?.scrollPrev();

  // Get slide width based on slides to show
  const getSlideWidth = () => {
    const slidesToShow = getSlidesToShow();
    return `${100 / slidesToShow}%`;
  };

  // Static grid for SSR
  if (!hasMounted) {
    return (
      <div className="slider-container p-10 relative">
        <p className="my-10 text-center text-[22px] sm:text-[28px] lg:text-[3.125rem] font-medium">
          Further Study Opportunities
        </p>

        <div className="relative">
          {/* Static arrows (disabled) */}
          <PrevArrow />
          <NextArrow />

          {/* Static grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.slice(0, 4).map((item) => (
              <div key={item.id} className="p-2 sm:p-6 text-center">
                <img
                  src={item.img}
                  alt={item.course}
                  className="m-auto border-4 border-amber-400 hover:border-black rounded-full object-cover w-full aspect-square max-w-58 sm:max-w-64"
                />

                <a
                  href={item.path}
                  className="text-lg block md:text-2xl font-medium text-[#0f4a85] mt-5"
                >
                  {item.course}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="slider-container p-10 relative">
      <p className="my-10 text-center text-[22px] sm:text-[28px] lg:text-[3.125rem] font-medium">
        Further Study Opportunities
      </p>

      <div className="relative">
        {/* Custom Arrows */}
        <PrevArrow onClick={goToPrev} />
        <NextArrow onClick={goToNext} />

        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 flex-grow-0 p-2 sm:p-6"
                style={{ flexBasis: getSlideWidth() }}
              >
                <div className="text-center">
                  <img
                    src={item.img}
                    alt={item.course}
                    className="m-auto border-4 border-amber-400 hover:border-black rounded-full object-cover w-full aspect-square max-w-58 sm:max-w-64 transition-colors duration-300"
                  />

                  <a
                    href={item.path}
                    className="text-lg block md:text-2xl font-medium text-[#0f4a85] mt-5 hover:underline"
                  >
                    {item.course}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Dots - to match slick's dots */}
      <style jsx>{`
        .slider-container :global(.embla__dots) {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }
        
        .slider-container :global(.embla__dot) {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #ccc;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .slider-container :global(.embla__dot.is-selected) {
          background-color: #0f4a85;
          width: 12px;
          height: 12px;
        }
      `}</style>

      <div className="embla__dots flex justify-center gap-2 mt-5">
        {data.map((_, index) => (
          <button
            key={index}
            className={`embla__dot w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === (emblaApi?.selectedScrollSnap() || 0)
              ? "bg-[#0f4a85] w-3 h-3"
              : "bg-gray-300"
              }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomProgramOppertunitySlider;