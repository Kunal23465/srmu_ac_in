import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Classes from "../../../../utils/styles/Global.module.css";
import { CustomFacilitiesTypes } from "../../../../types/overview-data-type";
import { PdfSvgIcon } from "../../../about/recognition-approval/ApprovalSlider";
import { IoIosArrowBack } from "react-icons/io";

const KeyHighlightsSection: React.FC<CustomFacilitiesTypes> = ({ facilities, layoutData }) => {
  const sliderRef = React.useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current: number) => setCurrentSlide(current),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  useEffect(() => {
    if (facilities) {
      setTotalSlides(facilities.length);
    }
  }, [facilities]);

  // Dynamically calculate visible slides based on screen size
  const getVisibleSlides = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide >= totalSlides - getVisibleSlides();

  return (
    <div className="bg-[#ffb703]">
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <div className="sm:p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-[28px] lg:text-[3.125rem] fw500 text-black">{layoutData?.title}</h2>

            {/* Custom Prev / Next Buttons with < > */}
            <div className="flex gap-4">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                disabled={isFirstSlide}
                className={`w-12 h-12 border-2  flex items-center justify-center text-2xl font-light transition-all
                  ${isFirstSlide ? "bg-transparent border-gray-500 text-gray-500 cursor-not-allowed" : "bg-transparent border-black hover:bg-[#0f4a85] hover:text-white"}`}
                aria-label="Previous"
              >
                <IoIosArrowBack />
              </button>

              <button
                onClick={() => sliderRef.current?.slickNext()}
                disabled={isLastSlide}
                className={`w-12 h-12 border-2 flex items-center justify-center text-2xl font-light transition-all
                  ${isLastSlide ? "bg-transparent border-gray-500 text-gray-500 cursor-not-allowed" : "bg-transparent border-black hover:bg-[#0f4a85] hover:text-white"}`}
                aria-label="Next"
              >
                <IoIosArrowBack className="rotate-180" />
              </button>
            </div>
          </div>

          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {facilities.map((facility, index) => (
              <div key={index} className="px-3 h-full sm:h-[600px] md:h-[650px] lg:h-[600px]">
                <div className="bg-white rounded-2xl hover:border-2 hover:border-[#0f4a85] overflow-hidden h-full flex flex-col">
                  <img src={facility.imageUrl} alt={facility.title} className="w-full aspect-2/1.5 object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="lg:text-[26px] md:text-[24.375px] sm:text-[22.75px] text-[22.75px] font-semibold text-[#0f4a85] mb-3">{facility.title}</h3>
                    <div
                      className="text-gray-700 text-justify lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] flex-grow mb-6"
                      dangerouslySetInnerHTML={{ __html: facility.description }}
                    />
                    <a
                      href={facility.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px]  gap-3 bg-[#0f4a85] text-white hover:text-[#0f4a85] font-medium uppercase py-3 px-6 rounded-lg hover:bg-white hover:border-2 hover:border-[#ffb703] transition-all duration-500 w-fit group"
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
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default KeyHighlightsSection;