import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export interface OpportunityCard {
  id: number;
  img: string;
  course: string;
  path: string;
}

interface CustomProgramOppertunitySliderProps {
  data: OpportunityCard[];
}

function NextArrow({
  onClick,
  disabled = false,
}: {
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`custom-arrow right-arrow absolute top-1/2 -translate-y-1/2 z-10 ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
        }`}
      aria-label="Next"
    >
      <MdKeyboardArrowRight size={28} />
    </button>
  );
}

function PrevArrow({
  onClick,
  disabled = false,
}: {
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`custom-arrow left-arrow absolute top-1/2 -translate-y-1/2 z-10 ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
        }`}
      aria-label="Previous"
    >
      <MdKeyboardArrowLeft size={28} />
    </button>
  );
}

const CustomProgramOppertunitySlider: React.FC<
  CustomProgramOppertunitySliderProps
> = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

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

  useEffect(() => {
    if (!emblaApi || !hasMounted) return;

    const updateSliderState = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setScrollSnaps(emblaApi.scrollSnapList());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", updateSliderState);
    emblaApi.on("reInit", updateSliderState);
    updateSliderState();

    return () => {
      emblaApi.off("select", updateSliderState);
      emblaApi.off("reInit", updateSliderState);
    };
  }, [emblaApi, hasMounted]);

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
          <PrevArrow disabled />
          <NextArrow disabled />

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
        <PrevArrow onClick={goToPrev} disabled={!canScrollPrev} />
        <NextArrow onClick={goToNext} disabled={!canScrollNext} />

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

      <div className="embla__dots flex justify-center gap-2 mt-5">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`embla__dot w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === selectedIndex
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
