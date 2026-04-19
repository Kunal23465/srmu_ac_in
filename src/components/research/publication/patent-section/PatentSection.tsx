import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Classes from "../../../../utils/styles/Global.module.css";
import { FaRegFilePdf } from "react-icons/fa";
import { patentData } from "../../../../data/research/publication/publication-data";
import { PdfSvgIcon } from "../../../about/recognition-approval/ApprovalSlider";
import "../PublicationCarousel.css";

const PatentSection: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
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
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  }, [windowWidth]);

  // Get slide width based on slides to show
  const getSlideWidth = () => {
    const slidesToShow = getSlidesToShow();
    return `${100 / slidesToShow}%`;
  };

  const CustomArrow = ({
    onClick,
    direction,
  }: {
    onClick: () => void;
    direction: "prev" | "next";
  }) => (
    <button
      onClick={onClick}
      className="
        w-12 h-12 flex items-center justify-center
        rounded-full bg-[#f4b400]
        text-[#0f4a85] text-2xl font-bold cursor-pointer
        transition-all duration-300 hover:bg-[#0f4a85] hover:text-[#f4b400]
      "
    >
      {direction === "prev" ? "‹" : "›"}
    </button>
  );

  const goToPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const goToNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Static grid for SSR
  if (!hasMounted) {
    return (
      <div className="relative w-full mt-16 mb-10">
        {/* Blue background block */}
        <div className="bg-[#e8effc] pt-20 mb-50">
          <div className={Classes.container}>
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <h2 className="lg:text-[40px] md:text-[37.5px] sm:text-[22.4px] text-[22.4px] fw500 text-[#0f3b57] md:col-span-4">
                Our Patents
              </h2>

              <p className="text-gray-700 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] md:col-span-8">
                Patents at SRMU signify our commitment to innovation and research excellence, protecting and recognizing the intellectual property arising from groundbreaking
                studies, and contributing to a culture of creativity and impact.
              </p>
            </div>
          </div>
          <div className="relative top-[100px]">
            <div className={`${Classes["container"]} relative`}>
              {/* Static grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {patentData.slice(0, 3).map((item) => (
                  <div key={item.id} className="px-2">
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                      <img src={item.image} alt={item.title} className="w-full h-70 object-cover" />

                      <div className="p-6">
                        <h2 className="lg:text-[26px] md:text-[24.375px] sm:text-[22.75px] text-[22.75px] font-bold text-[#0f4a85] mb-4">
                          {item.title}
                        </h2>

                        <a
                          href={item.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] gap-2 bg-[#0f4a85] border-2 border-amber-400 text-white hover:text-[#0f4a85] text-sm font-semibold py-2 px-4 rounded-lg group hover:bg-white transition-all duration-500"
                        >
                          <span className="bg-white p-1 rounded-lg transition-all duration-500 group-hover:bg-[#ffb703]">
                            <PdfSvgIcon />
                          </span>
                          Download PDF
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute -top-16 z-300 right-10 lg:right-0 ml-auto">
                <div className="flex gap-3">
                  <CustomArrow direction="prev" onClick={() => { }} />
                  <CustomArrow direction="next" onClick={() => { }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full mt-16 mb-10">
      {/* Blue background block */}
      <div className="bg-[#e8effc] pt-20 mb-50">
        <div className={Classes.container}>
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <h2 className="lg:text-[40px] md:text-[37.5px] sm:text-[22.4px] text-[22.4px] fw500 text-[#0f3b57] md:col-span-4">
              Our Patents
            </h2>

            <p className="text-gray-700 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] md:col-span-8">
              Patents at SRMU signify our commitment to innovation and research excellence, protecting and recognizing the intellectual property arising from groundbreaking
              studies, and contributing to a culture of creativity and impact.
            </p>
          </div>
        </div>
        <div className="relative top-[100px]">
          <div className={`${Classes["container"]} relative`}>
            {/* Embla Carousel */}
            <div className="overflow-hidden manage-academis" ref={emblaRef}>
              <div className="flex">
                {patentData.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 flex-grow-0 px-2"
                    style={{ flexBasis: getSlideWidth() }}
                  >
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                      <img src={item.image} alt={item.title} className="w-full h-70 object-cover" />

                      <div className="p-6">
                        <h2 className="lg:text-[26px] md:text-[24.375px] sm:text-[22.75px] text-[22.75px] font-bold text-[#0f4a85] mb-4">
                          {item.title}
                        </h2>

                        <a
                          href={item.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] gap-2 bg-[#0f4a85] border-2 border-amber-400 text-white hover:text-[#0f4a85] text-sm font-semibold py-2 px-4 rounded-lg group hover:bg-white transition-all duration-500"
                        >
                          <span className="bg-white p-1 rounded-lg transition-all duration-500 group-hover:bg-[#ffb703]">
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

            <div className="absolute -top-16 z-300 right-10 lg:right-0 ml-auto">
              <div className="flex gap-3">
                <CustomArrow direction="prev" onClick={goToPrev} />
                <CustomArrow direction="next" onClick={goToNext} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatentSection;
