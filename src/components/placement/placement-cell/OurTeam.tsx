import React, { useState, useRef, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PlacementTeamCardData,
  TrainingTeamCardData,
} from "../../../data/placement/placement-cell/PlacementTeamData";

const OurTeam: React.FC = () => {
  const [team, setTeam] = useState("Placement");
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

  /** Re-initialize embla when window width or team changes */
  useEffect(() => {
    if (emblaApi && hasMounted) {
      emblaApi.reInit();
    }
  }, [windowWidth, team, emblaApi, hasMounted]);

  // Function to determine slidesToShow based on window width
  const getSlidesToShow = useCallback(() => {
    if (windowWidth >= 1024) return 3;
    return 2; // Always show 2 slides for mobile and tablet (matches original: return 2 for <600 and >=600)
  }, [windowWidth]);

  // Select data
  const activeData =
    team === "Placement" ? PlacementTeamCardData : TrainingTeamCardData;

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

  // Custom navigation buttons
  const SliderControls = () => (
    <div className="flex mt-3 md:mt-0 space-x-3">
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
      <div>
        <center>
          <p className="text-yellow-400 text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 mb-5 lg:mb-20">
            Our Team
          </p>

          {/* TAB SWITCH */}
          <span
            className={`text-lg md:text-2xl pb-2 md:pb-5 border-b-4 cursor-pointer transition-all duration-300
              ${team === "Placement" ? "border-amber-400" : "border-transparent hover:border-amber-400"}`}
            onClick={() => setTeam("Placement")}
          >
            PLACEMENT TEAM
          </span>

          <span
            className={`text-lg md:text-2xl pb-2 md:pb-5 ml-2 md:ml-5 border-b-4 cursor-pointer transition-all duration-300
              ${team === "Training" ? "border-amber-400" : "border-transparent hover:border-amber-400"}`}
            onClick={() => setTeam("Training")}
          >
            TRAINING TEAM
          </span>
        </center>

        {/* SECTION CONTENT */}
        <div className="w-full py-8 sm:py-16 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* HEADER + ARROWS */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-12">
              <div className="max-w-5xl">
                <h1 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] font-bold">
                  {team === "Placement" ? "Meet Our Placement Team" : "Meet Our Training Team"}
                </h1>

                <p className="mt-3 text-sm md:text-base opacity-100 font-light">
                  {team === "Placement"
                    ? "SRMU's placement team is dedicated to facilitating successful career transitions..."
                    : "The training team at SRMU enhances student skills through comprehensive programs..."}
                </p>
              </div>

              <SliderControls />
            </div>

            {/* Static grid for SSR */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {activeData.slice(0, 3).map((item) => (
                <div key={item.id} className="px-3">
                  <div className="text-black flex-none rounded-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative w-full h-85 rounded-xl overflow-hidden">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-xl" />
                      <h3 className="absolute bottom-5 left-5 text-xl sm:text-2xl text-white font-medium">
                        {item.name}
                        <br />
                        <span className="text-amber-400 text-sm sm:text-[16px]">{item.position}</span>
                      </h3>
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
    <div>
      <center>
        <p className="text-yellow-400 text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 mb-5 lg:mb-20">
          Our Team
        </p>

        {/* TAB SWITCH */}
        <span
          className={`text-lg md:text-2xl pb-2 md:pb-5 border-b-4 cursor-pointer transition-all duration-300
            ${team === "Placement" ? "border-amber-400" : "border-transparent hover:border-amber-400"}`}
          onClick={() => setTeam("Placement")}
        >
          PLACEMENT TEAM
        </span>

        <span
          className={`text-lg md:text-2xl pb-2 md:pb-5 ml-2 md:ml-5 border-b-4 cursor-pointer transition-all duration-300
            ${team === "Training" ? "border-amber-400" : "border-transparent hover:border-amber-400"}`}
          onClick={() => setTeam("Training")}
        >
          TRAINING TEAM
        </span>
      </center>

      {/* SECTION CONTENT */}
      <div className="w-full py-8 sm:py-16 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER + ARROWS */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="max-w-5xl">
              <h1 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] font-bold">
                {team === "Placement" ? "Meet Our Placement Team" : "Meet Our Training Team"}
              </h1>

              <p className="mt-3 text-sm md:text-base opacity-100 font-light">
                {team === "Placement"
                  ? "SRMU's placement team is dedicated to facilitating successful career transitions..."
                  : "The training team at SRMU enhances student skills through comprehensive programs..."}
              </p>
            </div>

            <SliderControls />
          </div>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {activeData.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 flex-grow-0 px-3"
                  style={{ flexBasis: getSlideWidth() }}
                >
                  <div className="text-black flex-none rounded-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative w-full h-85 rounded-xl overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                      />
                      <h3 className="absolute bottom-5 left-5 text-xl sm:text-2xl text-white font-medium">
                        {item.name}
                        <br />
                        <span className="text-amber-400 text-sm sm:text-[16px]">{item.position}</span>
                      </h3>
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

export default OurTeam;