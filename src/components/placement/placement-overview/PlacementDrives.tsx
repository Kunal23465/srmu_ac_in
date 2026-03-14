import React, { useState, useRef, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { placementData } from "../../../data/placement/placementData";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const PlacementDrives: React.FC = () => {
  const [activeYear, setActiveYear] = useState("2023");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  const students = placementData[activeYear] || [];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  /* -------------------- RESIZE HANDLER -------------------- */
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

  /* -------------------- SLIDE CHANGE HANDLER -------------------- */
  useEffect(() => {
    if (!emblaApi || !hasMounted) return;

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, hasMounted]);

  /* -------------------- RE-INIT WHEN YEAR OR WIDTH CHANGES -------------------- */
  useEffect(() => {
    if (emblaApi && hasMounted) {
      emblaApi.reInit();
      setCurrentSlide(0); // Reset to first slide when year changes
    }
  }, [windowWidth, activeYear, emblaApi, hasMounted]);

  /* -------------------- SLIDES TO SHOW -------------------- */
  const getSlidesToShow = useCallback(() => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 640) return 2;
    return 1;
  }, [windowWidth]);

  const slidesToShow = getSlidesToShow();

  /* -------------------- BUTTON LOGIC (IMPORTANT) -------------------- */
  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= students.length - slidesToShow;

  /* -------------------- NAVIGATION -------------------- */
  const goToPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const goToNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const goToYear = (year: string) => {
    setActiveYear(year);
    setCurrentSlide(0);
    if (emblaApi) {
      emblaApi.scrollTo(0);
    }
  };

  // Get slide width based on slides to show
  const getSlideWidth = () => {
    return `${100 / slidesToShow}%`;
  };

  /* -------------------- STATIC GRID FOR SSR -------------------- */
  if (!hasMounted) {
    return (
      <div className="relative bg-[#f1f1f1] w-full text-black py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* HEADER + TABS */}
          <div className="block md:flex justify-between items-center">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 mb-2">
              Placement Drives
            </h2>

            <div className="flex items-center w-fit mb-2 bg-white rounded">
              {["2025", "2024", "2023"].map((year) => (
                <button
                  key={year}
                  onClick={() => goToYear(year)}
                  className={`px-5 sm:px-10 py-3 font-semibold transition
                    ${activeYear === year
                      ? "bg-yellow-400 text-black"
                      : "text-black hover:bg-yellow-400"
                    }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* SUBTEXT */}
          <p className="text-gray-700 mb-8 max-w-xl">
            Dynamic placement drives connect our students with leading employers,
            facilitating successful career launches.
          </p>

          <div className="h-0.5 bg-black mb-12"></div>

          {/* STATIC GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {students.slice(0, 3).map((drive) => (
              <div key={drive.id} className="px-3">
                <div className="bg-[#f1f1f1] rounded-lg h-[310px] p-5 border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="w-full h-40 flex items-center justify-center">
                      <img
                        src={drive.companyLogo}
                        alt={drive.companyName}
                        className="w-full max-h-36 object-contain"
                      />
                    </div>
                  </div>

                  <p className="mb-1">
                    <strong>Date of Visit:</strong> {drive.dateOfVisit}
                  </p>

                  <p className="text-gray-700">
                    {drive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* NAV BUTTONS (disabled) */}
          <div className="flex gap-3 mt-8">
            <button
              disabled
              className="bg-white w-13 h-13 rounded-full border border-gray-200 shadow-lg flex items-center justify-center opacity-40 cursor-not-allowed"
            >
              <MdKeyboardArrowLeft size={26} />
            </button>

            <button
              disabled
              className="bg-white w-13 h-13 rounded-full border border-gray-200 shadow-lg flex items-center justify-center opacity-40 cursor-not-allowed"
            >
              <MdKeyboardArrowRight size={26} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* -------------------- RENDER -------------------- */
  return (
    <div className="relative bg-[#f1f1f1] w-full text-black py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER + TABS */}
        <div className="block md:flex justify-between items-center">
          <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 mb-2">
            Placement Drives
          </h2>

          <div className="flex items-center w-fit mb-2 bg-white rounded">
            {["2025", "2024", "2023"].map((year) => (
              <button
                key={year}
                onClick={() => goToYear(year)}
                className={`px-5 sm:px-10 py-3 font-semibold transition cursor-pointer
                  ${activeYear === year
                    ? "bg-yellow-400 text-black"
                    : "text-black hover:bg-yellow-400"
                  }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* SUBTEXT */}
        <p className="text-gray-700 mb-8 max-w-xl">
          Dynamic placement drives connect our students with leading employers,
          facilitating successful career launches.
        </p>

        <div className="h-0.5 bg-black mb-12"></div>

        {/* EMBLA CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {students.map((drive) => (
              <div
                key={drive.id}
                className="flex-shrink-0 flex-grow-0 px-3"
                style={{ flexBasis: getSlideWidth() }}
              >
                <div className="bg-[#f1f1f1] rounded-lg h-[310px] p-5 border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="w-full h-40 flex items-center justify-center">
                      <img
                        src={drive.companyLogo}
                        alt={drive.companyName}
                        className="w-full max-h-36 object-contain"
                      />
                    </div>
                  </div>

                  <p className="mb-1">
                    <strong>Date of Visit:</strong> {drive.dateOfVisit}
                  </p>

                  <p className="text-gray-700">
                    {drive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NAV BUTTONS */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={goToPrev}
            disabled={isPrevDisabled}
            className={`bg-white w-13 h-13 rounded-full border border-gray-200 cursor-pointer shadow-lg flex items-center justify-center transition
              ${isPrevDisabled
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-[#ffb703] hover:text-white"
              }`}
          >
            <MdKeyboardArrowLeft size={26} />
          </button>

          <button
            onClick={goToNext}
            disabled={isNextDisabled}
            className={`bg-white w-13 h-13 rounded-full border border-gray-200 cursor-pointer shadow-lg flex items-center justify-center transition
              ${isNextDisabled
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-[#ffb703] hover:text-white"
              }`}
          >
            <MdKeyboardArrowRight size={26} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacementDrives;