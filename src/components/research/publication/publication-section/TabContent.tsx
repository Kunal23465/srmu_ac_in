import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Classes from "../../../../utils/styles/Global.module.css";
import { PdfSvgIcon } from "../../../about/recognition-approval/AssociateMembership";

type TabContentProps = {
  data: {
    title: string;
    description: string;
    cardData: {
      title: string;
      imageUrl: string;
      pdfUrl: string;
    }[];
  };
};

export const CustomArrow = ({
  onClick,
  disabled,
  direction,
}: {
  onClick?: () => void;
  disabled?: boolean;
  direction: "prev" | "next";
}) => (
  <button
    onClick={!disabled ? onClick : undefined}
    className={`
      w-12 h-12 flex items-center justify-center
      rounded-full border-2 border-white text-white
      transition-all duration-300
      ${disabled ? "opacity-30 cursor-not-allowed" : "hover:bg-white hover:text-[#0f4a85] cursor-pointer"}
    `}
    aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
  >
    {direction === "prev" ? (
      <span className="text-2xl font-bold">‹</span>
    ) : (
      <span className="text-2xl font-bold">›</span>
    )}
  </button>
);

const TabContent: React.FC<TabContentProps> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  // ✔ Determine slidesToShow dynamically based on screen size
  const getSlidesToShow = useCallback(() => {
    if (windowWidth < 768) return 1;
    return 2;
  }, [windowWidth]);

  const slidesToShow = getSlidesToShow();

  const goToPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const goToNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Get slide width based on slides to show
  const getSlideWidth = () => {
    return `${100 / slidesToShow}%`;
  };

  // Static grid for SSR
  if (!hasMounted) {
    return (
      <div>
        <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
          <div className="flex flex-col md:flex-row justify-between gap-8">

            {/* LEFT PANEL – Title + Description + Arrows */}
            <div className="w-full md:w-1/3 px-2 sm:px-5 md:px-0 text-white">
              <h2 className="lg:text-[40px] md:text-[37.5px] sm:text-[22.4px] text-[22.4px] fw500">{data.title}</h2>
              <p className="mt-4 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px]">{data.description}</p>

              {/* CUSTOM ARROWS (disabled) */}
              <div className="flex gap-4 mt-8">
                <CustomArrow direction="prev" disabled={true} />
                <CustomArrow direction="next" disabled={true} />
              </div>
            </div>

            {/* RIGHT PANEL – Static Grid */}
            <div className="w-full md:w-2/3 px-2 sm:px-5 md:px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.cardData.slice(0, 2).map((item, index) => (
                  <div key={index}>
                    <div className="bg-white mx-2 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">

                      {/* Image */}
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-[200px] object-cover"
                      />
                      <div className="p-4">
                        {/* Title */}
                        <h2 className="text-[#0f4a85] lg:text-[22px] md:text-[20.625px] text-[19.25px] sm:text-[19.25px] font-semibold pb-1">
                          {item.title}
                        </h2>

                        {/* PDF Button */}
                        <a
                          href={item.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex gap-3 items-center w-fit border-2 border-[#ffb703] text-[#0f4a85] py-2 px-4 rounded-lg uppercase hover:bg-[#ffb703] transition-all"
                        >
                          <span className="p-1 rounded bg-[#ffb703]">
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
      </div>
    );
  }

  return (
    <div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* LEFT PANEL – Title + Description + Arrows */}
          <div className="w-full md:w-1/3 px-2 sm:px-5 md:px-0 text-white">
            <h2 className="lg:text-[40px] md:text-[37.5px] sm:text-[22.4px] text-[22.4px] fw500">{data.title}</h2>
            <p className="mt-4 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px]">{data.description}</p>

            {/* CUSTOM ARROWS */}
            <div className="flex gap-4 mt-8">
              <CustomArrow
                direction="prev"
                onClick={goToPrev}
                disabled={currentSlide === 0}
              />
              <CustomArrow
                direction="next"
                onClick={goToNext}
                disabled={currentSlide >= data.cardData.length - slidesToShow}
              />
            </div>
          </div>

          {/* RIGHT PANEL – Embla Carousel */}
          <div className="w-full md:w-2/3 px-2 sm:px-5 md:px-0 overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {data.cardData.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex-grow-0"
                  style={{ flexBasis: getSlideWidth() }}
                >
                  <div className="bg-white mx-2 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">

                    {/* Image */}
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-[200px] object-cover"
                    />
                    <div className="p-4">
                      {/* Title */}
                      <h2 className="text-[#0f4a85] lg:text-[22px] md:text-[20.625px] text-[19.25px] sm:text-[19.25px] font-semibold pb-1">
                        {item.title}
                      </h2>

                      {/* PDF Button */}
                      <a
                        href={item.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-3 items-center w-fit border-2 border-[#ffb703] text-[#0f4a85] py-2 px-4 rounded-lg uppercase hover:bg-[#ffb703] transition-all"
                      >
                        <span className="p-1 rounded bg-[#ffb703]">
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
    </div>
  );
};

export default TabContent;