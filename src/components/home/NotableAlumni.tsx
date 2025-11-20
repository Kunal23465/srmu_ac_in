
import React, { useRef } from "react";
import AlumniSlider from "./AlumniSlider";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";
import Slider from "react-slick";



type SliderRef = Slider | null;

const NotableAlumniSection = () => {
  const sliderRef = useRef<SliderRef>(null);

  const goToNext = () => {

    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };



  return (
    <div className="w-full flex justify-center py-10 bg-[#0f4a85]">
      <div className="w-full max-w-[1200px] p-4 text-white">

        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="font36 fw600 mb-2">Notable Alumni</h1>
            <p className="text-gray-300">
              Hear from our distinguished alumni, who have made waves in their respective fields.
            </p>
          </div>
          <div className="hidden sm:flex space-x-2">
            <button
              className="p-2  transition-colors"
              onClick={goToPrev}
            >
              <FaCircleChevronLeft size={36} />
            </button>
            <button
              className="p-2    transition-colors"
              onClick={goToNext}
            >
              <FaCircleChevronRight size={36} />
            </button>
          </div>
        </div>

        <AlumniSlider sliderRef={sliderRef} />

        <div className="flex justify-center mt-10">
          <button
            className="
              bg-[#ffb703] 
              hover:bg-[#0f4a85]
                hover:border-1
                hover:border-[#ffb703]
                hover:text-[#ffb703]
                text-[#0f4a85]
              font-semibold 
              py-3 px-8 
              rounded-xl 
              shadow-lg 
              transition-colors
              flex items-center cursor-pointer
            "
          >
            <span>
              VIEW ALL NOTABLE ALUMNI →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotableAlumniSection;