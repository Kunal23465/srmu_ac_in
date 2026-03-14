import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CollabrationSliderData } from "../../../data/about/recognition-approval/recognitionApprovalsData";
import Classes from "../../../utils/styles/Global.module.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const IndustrialCollabration: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!emblaApi || !hasMounted) return;
  }, [emblaApi, hasMounted]);

  const goToNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const goToPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Static grid for SSR
  if (!hasMounted) {
    return (
      <div className="pt-7 md:pt-10 lg:pt-14">
        <div className="bg-[#DFE4F2] py-7 md:py-10 lg:py-14 px-4 md:px-6 lg:px-8">
          {/* Heading and Arrows */}
          <div className={`${Classes["container"]}`}>
            <div className="flex justify-between items-center">
              <div className="max-w-[70%]">
                <h1 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] text-[#172F64] font-bold pb-2">Industrial Collaborations</h1>
                <p className="">SRMU's industry-aligned curriculum and course design is its speciality, and hence, it works in tandem with multiple industry bodies.</p>
              </div>
              <div className="flex justify-center space-x-4">
                <PrevArrow onClick={() => { }} disabled />
                <NextArrow onClick={() => { }} disabled />
              </div>
            </div>

            {/* Static Grid Section for SSR */}
            <div className="mt-8 md:mt-10 lg:mt-16">
              {CollabrationSliderData.slice(0, 1).map((data, index) => (
                <div key={index}>
                  <div className="flex flex-col gap-6">
                    {/* First Row (first 6 images) */}
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                      {data.slides.slice(0, 6).map((slide, i) => (
                        <li key={i} className="flex justify-center items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
                          <img src={slide.img} alt={`Recruiter ${i + 1}`} className="h-[60px] w-auto object-contain" />
                        </li>
                      ))}
                    </ul>

                    {/* Second Row (next 6 images) */}
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                      {data.slides.slice(6, 12).map((slide, i) => (
                        <li key={i} className="flex justify-center items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
                          <img src={slide.img} alt={`Recruiter ${i + 7}`} className="h-[60px] w-auto object-contain" />
                        </li>
                      ))}
                    </ul>
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
    <div className="pt-7 md:pt-10 lg:pt-14">
      <div className="bg-[#DFE4F2] py-7 md:py-10 lg:py-14 px-4 md:px-6 lg:px-8">
        {/* Heading and Arrows */}
        <div className={`${Classes["container"]}`}>
          <div className="flex justify-between items-center">
            <div className="max-w-[70%]">
              <h1 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] text-[#172F64] font-bold pb-2">Industrial Collaborations</h1>
              <p className="">SRMU's industry-aligned curriculum and course design is its speciality, and hence, it works in tandem with multiple industry bodies.</p>
            </div>
            <div className="flex justify-center space-x-4">
              <PrevArrow onClick={goToPrev} />
              <NextArrow onClick={goToNext} />
            </div>
          </div>

          {/* Embla Carousel Section */}
          <div className="mt-8 md:mt-10 lg:mt-16 overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {CollabrationSliderData.map((data, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex-grow-0 w-full"
                >
                  <div className="flex flex-col gap-6">
                    {/* First Row (first 6 images) */}
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                      {data.slides.slice(0, 6).map((slide, i) => (
                        <li key={i} className="flex justify-center items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
                          <img src={slide.img} alt={`Recruiter ${i + 1}`} className="h-[60px] w-auto object-contain" />
                        </li>
                      ))}
                    </ul>

                    {/* Second Row (next 6 images) */}
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                      {data.slides.slice(6, 12).map((slide, i) => (
                        <li key={i} className="flex justify-center items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
                          <img src={slide.img} alt={`Recruiter ${i + 7}`} className="h-[60px] w-auto object-contain" />
                        </li>
                      ))}
                    </ul>
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

const NextArrow = ({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) => (
  <button
    className={`border-2 border-[#172F64] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-md transition-all
      ${disabled
        ? "opacity-40 cursor-not-allowed"
        : "cursor-pointer text-[#172F64] hover:text-[#ffb703] hover:border-[#ffb703]"
      }`}
    onClick={onClick}
    disabled={disabled}
  >
    <MdKeyboardArrowRight size="26" />
  </button>
);

const PrevArrow = ({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) => (
  <button
    className={`border-2 border-[#172F64] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-md transition-all
      ${disabled
        ? "opacity-40 cursor-not-allowed"
        : "cursor-pointer text-[#172F64] hover:text-[#ffb703] hover:border-[#ffb703]"
      }`}
    onClick={onClick}
    disabled={disabled}
  >
    <MdKeyboardArrowLeft size="26" />
  </button>
);

export default IndustrialCollabration;