import React, { useRef, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { campusSlides } from "../../../data/about/aboutusData";
import ourCampus from "../../../assets/images/about/aboutUs/knowyourcampusimg.jpg";
import Classes from "../../../utils/styles/Global.module.css";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const KnowOurCampus: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, // infinite: false
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const goToNext = () => emblaApi?.scrollNext();
  const goToPrev = () => emblaApi?.scrollPrev();

  const isFirst = currentSlide === 0;
  const isLast = currentSlide === campusSlides.length - 1;

  return (
    <section className="w-full">
      {/* Top Header */}
      <div className="bg-[#0f4a85] py-6">
        <div className={`${Classes["container"]}`}>
          <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw600 text-white">Know Our Campus</h2>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full">
        <img src={ourCampus} alt="Campus" className="w-full h-[100px] sm:h-[550px] object-cover" />

        {/* Card */}
        <div className="absolute top-[47%] sm:top-1/2 right-2 sm:right-[18%] transform -translate-y-1/2 bg-[#ecf0f9] shadow-lg p-5 sm:p-8 w-[370px] h-[250px] sm:h-[370px]">
          {/* Arrows */}
          <div className="flex -mt-[19px] sm:-mt-8 pb-8 justify-center">
            {/* Prev */}
            <button
              onClick={goToPrev}
              disabled={isFirst}
              className={`p-1 text-5xl ${isFirst
                ? "bg-gray-200 text-gray-400 font-normal cursor-not-allowed"
                : "cursor-pointer bg-[#023047] font-bold text-white"
                }`}
            >
              <MdKeyboardArrowLeft size="26" />
            </button>

            {/* Next */}
            <button
              onClick={goToNext}
              disabled={isLast}
              className={`p-1 text-5xl ${isLast
                ? "bg-gray-200 text-gray-400 font-normal cursor-not-allowed"
                : "cursor-pointer bg-[#023047] font-bold text-white"
                }`}
            >
              <MdKeyboardArrowRight size="26" />
            </button>
          </div>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {campusSlides.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex-grow-0 basis-full"
                >
                  <div className="flex flex-col p-2 items-center justify-center gap-y-2">
                    <h3 className="text-lg font-bold text-center uppercase mb-2">{item.title}</h3>
                    <p className="mb-4 text-center">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowOurCampus;