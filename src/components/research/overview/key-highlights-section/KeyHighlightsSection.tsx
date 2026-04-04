import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Classes from "../../../../utils/styles/Global.module.css";
import { CustomFacilitiesTypes } from "../../../../types/overview-data-type";
import { PdfSvgIcon } from "../../../about/recognition-approval/ApprovalSlider";
import { IoIosArrowBack } from "react-icons/io";

const KeyHighlightsSection: React.FC<CustomFacilitiesTypes> = ({ facilities, layoutData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
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
    if (facilities) {
      setTotalSlides(facilities.length);
    }
  }, [facilities]);

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

  /** Re-initialize embla when window width changes */
  useEffect(() => {
    if (emblaApi && hasMounted) {
      emblaApi.reInit();
    }
  }, [windowWidth, emblaApi, hasMounted]);

  // Dynamically calculate visible slides based on screen size
  const getVisibleSlides = useCallback(() => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  }, [windowWidth]);

  const visibleSlides = getVisibleSlides();

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide >= totalSlides - visibleSlides;

  const goToPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const goToNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Get slide width based on visible slides
  const getSlideWidth = () => {
    return `${100 / visibleSlides}%`;
  };

  // Static grid for SSR
  if (!hasMounted) {
    return (
      <div className="bg-[#ffb703]">
        <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
          <div className="sm:p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 text-black">
                {layoutData?.title}
              </h2>

              {/* Custom Prev / Next Buttons (disabled) */}
              <div className="flex gap-4">
                <button
                  disabled
                  className="w-12 h-12 border-2 border-gray-500 text-gray-500 bg-transparent flex items-center justify-center text-2xl font-light cursor-not-allowed opacity-40"
                  aria-label="Previous"
                >
                  <IoIosArrowBack />
                </button>

                <button
                  disabled
                  className="w-12 h-12 border-2 border-gray-500 text-gray-500 bg-transparent flex items-center justify-center text-2xl font-light cursor-not-allowed opacity-40"
                  aria-label="Next"
                >
                  <IoIosArrowBack className="rotate-180" />
                </button>
              </div>
            </div>

            {/* Static Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {facilities.slice(0, 3).map((facility, index) => (
                <div key={index} className="px-3 h-full sm:h-[600px] md:h-[650px] lg:h-[600px]">
                  <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col">
                    <img src={facility.imageUrl} alt={facility.title} className="w-full aspect-2/1.5 object-cover" />
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="lg:text-[26px] md:text-[24.375px] sm:text-[22.75px] text-[22.75px] font-semibold text-[#0f4a85] mb-3">
                        {facility.title}
                      </h2>
                      <div
                        className="text-gray-700 text-justify lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] flex-grow mb-6"
                        dangerouslySetInnerHTML={{ __html: facility.description }}
                      />
                      <a
                        href={facility.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] gap-3 bg-[#0f4a85] text-white hover:text-[#0f4a85] font-medium uppercase py-3 px-6 rounded-lg hover:bg-white hover:border-2 hover:border-[#ffb703] transition-all duration-500 w-fit group"
                      >
                        <span className="bg-white p-2 rounded group-hover:bg-[#ffb703] transition-all duration-500">
                          <PdfSvgIcon />
                        </span>
                        Download PDF
                      </a>
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
    <div className="bg-[#ffb703]">
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <div className="sm:p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 text-black">{layoutData?.title}</h2>

            {/* Custom Prev / Next Buttons with < > */}
            <div className="flex gap-4">
              <button
                onClick={goToPrev}
                disabled={isFirstSlide}
                className={`w-12 h-12 border-2 flex items-center justify-center text-2xl font-light transition-all cursor-pointer
                  ${isFirstSlide
                    ? "bg-transparent border-gray-500 text-gray-500 cursor-not-allowed opacity-40"
                    : "bg-transparent border-black hover:bg-[#0f4a85] hover:text-white"
                  }`}
                aria-label="Previous"
              >
                <IoIosArrowBack />
              </button>

              <button
                onClick={goToNext}
                disabled={isLastSlide}
                className={`w-12 h-12 border-2 flex items-center justify-center text-2xl font-light transition-all cursor-pointer
                  ${isLastSlide
                    ? "bg-transparent border-gray-500 text-gray-500 cursor-not-allowed opacity-40"
                    : "bg-transparent border-black hover:bg-[#0f4a85] hover:text-white"
                  }`}
                aria-label="Next"
              >
                <IoIosArrowBack className="rotate-180" />
              </button>
            </div>
          </div>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex-grow-0 px-3"
                  style={{ flexBasis: getSlideWidth() }}
                >
                  <div className="h-full sm:h-[600px] md:h-[650px] lg:h-[600px]">
                    <div className="bg-white rounded-2xl hover:border-2 hover:border-[#0f4a85] overflow-hidden h-full flex flex-col">
                      <img
                        src={facility.imageUrl}
                        alt={facility.title}
                        className="w-full aspect-2/1.5 object-cover"
                      />
                      <div className="p-6 flex flex-col flex-grow">
                        <h2 className="lg:text-[26px] md:text-[24.375px] sm:text-[22.75px] text-[22.75px] font-semibold text-[#0f4a85] mb-3">
                          {facility.title}
                        </h2>
                        <div
                          className="text-gray-700 text-justify lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] flex-grow mb-6"
                          dangerouslySetInnerHTML={{ __html: facility.description }}
                        />
                        <a
                          href={facility.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] gap-3 bg-[#0f4a85] text-white hover:text-[#0f4a85] font-medium uppercase py-3 px-6 rounded-lg hover:bg-white hover:border-2 hover:border-[#ffb703] transition-all duration-500 w-fit group"
                        >
                          <span className="bg-white p-2 rounded group-hover:bg-[#ffb703] transition-all duration-500">
                            <PdfSvgIcon />
                          </span>
                          Download PDF
                        </a>
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

export default KeyHighlightsSection;