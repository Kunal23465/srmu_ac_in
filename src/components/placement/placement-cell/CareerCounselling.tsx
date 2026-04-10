import React, { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CareerCounsellingCardData } from "../../../data/placement/placement-cell/PlacementTeamData";

const CareerCounselling: React.FC = () => {
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

  /** Re-initialize embla when window width changes */
  useEffect(() => {
    if (emblaApi && hasMounted) {
      emblaApi.reInit();
    }
  }, [windowWidth, emblaApi, hasMounted]);

  // Function to determine slidesToShow based on window width
  const getSlidesToShow = useCallback(() => {
    if (windowWidth >= 1024) return Math.min(3, CareerCounsellingCardData.length);
    if (windowWidth >= 640) return Math.min(2, CareerCounsellingCardData.length);
    return 1;
  }, [windowWidth]);

  const goToNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const goToPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Get slide width based on slides to show
  const getSlideWidth = () => {
    const slidesToShow = getSlidesToShow();
    return `${100 / slidesToShow}%`;
  };

  const SliderControls = () => (
    <div className="flex space-x-3">
      <button
        onClick={goToPrev}
        className="border-2 border-slate-400 cursor-pointer text-4xl text-slate-400 
          w-13 h-13 flex items-center justify-center transition 
          hover:bg-slate-400 hover:text-amber-100 disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        onClick={goToNext}
        className="border-2 border-slate-400 cursor-pointer text-4xl text-slate-400 
          w-13 h-13 flex items-center justify-center transition 
          hover:bg-slate-400 hover:text-amber-100 disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );

  // Static grid for SSR
  if (!hasMounted) {
    return (
      <div className="w-full py-16 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER + BUTTONS */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="max-w-5xl">
              <h2 className="text-[#023047] text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500">
                Career Counselling and Guidance
              </h2>

              <p className="mt-3 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] opacity-100 font-light">
                Career Counselling at Shri Ramswaroop Memorial University offers counselling to students, guiding the young minds by helping them to understand their strength and
                also to sail through the cut throat competition at all levels in the job market. Career counseling is implemented in several innovative ways to create awareness and
                provide students with an ability to decide on what is right for them. Counseling sessions organized in the University focuses on helping the students for guidance,
                moral support, and exploring solutions for the problems being faced by students while choosing the right career path. Various lectures, seminars, counseling sessions
                are organized by the experts in this regard.
              </p>
            </div>

            <div className="flex space-x-2 mt-10 sm:mt-2">
              <SliderControls />
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            {/* Static grid for SSR */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CareerCounsellingCardData.slice(0, 3).map((item) => (
                <div key={item.id} className="px-3">
                  <div className="rounded-xl w-full overflow-hidden">
                    <div className="relative w-full h-105 group overflow-hidden rounded-xl">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />

                      <h2 className="absolute bottom-5 polygon_bg w-full text-xl text-white bg-black/60 p-4 font-medium">
                        {item.name}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-16 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER + BUTTONS */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="max-w-5xl">
            <h2 className="text-[#023047] text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500">
              Career Counselling and Guidance
            </h2>

            <p className="mt-3 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] opacity-100 font-light">
              Career Counselling at Shri Ramswaroop Memorial University offers counselling to students, guiding the young minds by helping them to understand their strength and
              also to sail through the cut throat competition at all levels in the job market. Career counseling is implemented in several innovative ways to create awareness and
              provide students with an ability to decide on what is right for them. Counseling sessions organized in the University focuses on helping the students for guidance,
              moral support, and exploring solutions for the problems being faced by students while choosing the right career path. Various lectures, seminars, counseling sessions
              are organized by the experts in this regard.
            </p>
          </div>

          <div className="flex space-x-2 mt-10 sm:mt-2">
            <SliderControls />
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {CareerCounsellingCardData.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 flex-grow-0 px-3"
                  style={{ flexBasis: getSlideWidth() }}
                >
                  <div className="rounded-xl w-full overflow-hidden">
                    <div className="relative w-full h-105 group overflow-hidden rounded-xl">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover 
                        transition-transform duration-500 group-hover:scale-105"
                      />

                      <h2
                        className="absolute bottom-5 polygon_bg w-full 
                        text-xl text-white bg-black/60 p-4 font-medium 
                        transition-opacity duration-300 group-hover:opacity-0"
                      >
                        {item.name}
                      </h2>

                      <div
                        className="absolute inset-0 m-2 p-5 flex justify-center 
                        bg-white text-black 
                        scale-0 group-hover:scale-100 
                        opacity-0 group-hover:opacity-100 
                        transition-all duration-700 rounded-xl"
                      >
                        <h2 className="text-xl font-bold text-center">{item.name}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCounselling;
