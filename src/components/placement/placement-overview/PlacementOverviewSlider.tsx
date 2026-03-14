import React, { useRef, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { OurGoals, ourGoalsData } from "../../../data/about/silder/slider-data";
import Classes from "../../../utils/styles/Global.module.css";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  items: OurGoals[];
};

const Goals: React.FC<OurGoals & { highlight?: boolean }> = ({ title, subtitle, description }) => (
  <div
    className="
      h-full p-4 sm:p-8 rounded-2xl bg-white
      hover:bg-[#fffefa] border border-[#f7b822] sm:border-white hover:border-[#f7b822]
    "
  >
    <h3 className="lg:text-[28px] sm:text-[14.882px] text-[14.882px] md:text-[15.945px] font-bold mb-4 color_light_blue">{title}</h3>
    <p className="text-[#212529] font-bold lg:text-[17px] md:text-[15.945px] sm:text-[14.882px] text-[14.882px] mb-2">{subtitle}</p>
    <p className="text-[#212529] lg:text-[17px] md:text-[15.945px] sm:text-[14.882px] text-[14.882px]">{description}</p>
  </div>
);

const OurGoal: React.FC<Props> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

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

  useEffect(() => {
    if (!emblaApi || !hasMounted) return;

    const onSelect = () => {
      setIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, hasMounted]);

  /** Re-initialize embla when window width changes */
  useEffect(() => {
    if (emblaApi && hasMounted) {
      emblaApi.reInit();
    }
  }, [windowWidth, emblaApi, hasMounted]);

  // Dynamic slidesToShow based on screen size
  const getSlidesToShow = useCallback(() => {
    if (windowWidth < 640) return 1;
    return 2;
  }, [windowWidth]);

  const slidesToShow = getSlidesToShow();

  const disablePrev = index === 0;
  const disableNext = index >= items.length - slidesToShow;

  const next = () => {
    if (!disableNext) emblaApi?.scrollNext();
  };

  const prev = () => {
    if (!disablePrev) emblaApi?.scrollPrev();
  };

  const scrollTo = (slideIndex: number) => {
    emblaApi?.scrollTo(slideIndex);
  };

  // Get slide width based on slides to show
  const getSlideWidth = () => {
    return `${100 / slidesToShow}%`;
  };

  const totalDots = Math.max(0, items.length - slidesToShow);

  // Static grid for SSR
  if (!hasMounted) {
    return (
      <div className="w-full flex justify-center pt-10 md:pt-20">
        <div className={`${Classes["container"]} block md:flex flex-row items-start gap-5 p-4`}>
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-start w-full md:w-[30%] mt-6">
            <h2 className="leading-[1.2] text-[#1a1a1a] font-medium text-[22px] sm:text-[28px] lg:text-[3.125rem] mb-4">Our Goals</h2>

            <p className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] max-w-full md:max-w-[320px] text-gray-700 mb-8">
              Placements are essential for students to smoothly transition into the workforce and find steady careers.
              <br />
              <br />
              At SRMU, our placement cell sets six goals for students, recognizing that training and development are ongoing processes, with placement as their ultimate achievement.
            </p>

            <div className="flex gap-4 mb-8">
              <button
                disabled
                className="text-gray-700 bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 opacity-40 cursor-not-allowed"
              >
                <MdKeyboardArrowLeft size="26" />
              </button>

              <button
                disabled
                className="text-gray-700 bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 opacity-40 cursor-not-allowed"
              >
                <MdKeyboardArrowRight size="26" />
              </button>
            </div>
          </div>

          {/* STATIC GRID SECTION */}
          <div className="flex-1 w-full md:w-3/5 h-full xl:h-[320px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.slice(0, 2).map((item, i) => (
                <div key={i} className="px-0 sm:px-3 mx-1 w-auto h-full xl:h-[320px]">
                  <Goals {...item} />
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: totalDots + 1 }).map((_, i) => (
                <button
                  key={i}
                  className={`w-4 h-4 rounded-full transition-all ${i === 0 ? "bg-[#0f4a85] scale-110" : "border-2 border-[#0f4a85] bg-white"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center pt-10 md:pt-20">
      <div className={`${Classes["container"]} block md:flex flex-row items-start gap-5 p-4`}>
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start w-full md:w-[30%] mt-6">
          <h2 className="leading-[1.2] text-[#1a1a1a] font-medium text-[22px] sm:text-[28px] lg:text-[3.125rem] mb-4">Our Goals</h2>

          <p className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] max-w-full md:max-w-[320px] text-gray-700 mb-8">
            Placements are essential for students to smoothly transition into the workforce and find steady careers.
            <br />
            <br />
            At SRMU, our placement cell sets six goals for students, recognizing that training and development are ongoing processes, with placement as their ultimate achievement.
          </p>

          <div className="flex gap-4 mb-8">
            <button
              onClick={prev}
              disabled={disablePrev}
              className={`text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer
                ${disablePrev ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}
              `}
            >
              <MdKeyboardArrowLeft size="26" />
            </button>

            <button
              onClick={next}
              disabled={disableNext}
              className={`text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer
                ${disableNext ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}
              `}
            >
              <MdKeyboardArrowRight size="26" />
            </button>
          </div>
        </div>

        {/* EMBLA CAROUSEL SECTION */}
        <div className="flex-1 w-full md:w-3/5 h-full xl:h-[320px]">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex-grow-0 px-0 sm:px-3 mx-1"
                  style={{ flexBasis: getSlideWidth() }}
                >
                  <div className="h-full xl:h-[320px]">
                    <Goals {...item} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: totalDots + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`w-4 h-4 rounded-full transition-all cursor-pointer
                  ${i === index ? "bg-[#0f4a85] scale-110" : "border-2 border-[#0f4a85] bg-white hover:bg-[#0f4a85]/20"}
                `}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PlacementOverviewSlider() {
  return <OurGoal items={ourGoalsData} />;
}