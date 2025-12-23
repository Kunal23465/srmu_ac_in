import { useRef } from "react";
import AlumniSlider from "./AlumniSlider";
import Classes from "../../utils/styles/Global.module.css";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

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
      <div className={`w-full ${Classes["container"]} p-4 text-white`}>
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-[28px] text-white lg:text-[3.125rem] fw600">Notable Alumni</h2>
            <p className="text-gray-300">Hear from our distinguished alumni, who have made waves in their respective fields.</p>
          </div>
          <div className="hidden sm:flex space-x-2">
            <button className="p-2  transition-colors" onClick={goToPrev}>
              <FaCircleChevronLeft size={36} />
            </button>
            <button className="p-2    transition-colors" onClick={goToNext}>
              <FaCircleChevronRight size={36} />
            </button>
          </div>
        </div>

        <AlumniSlider sliderRef={sliderRef} />

        <div className="flex justify-center mt-10">
          <Link
            to="/placements/notable-alumni"
            className="
              bg-[#ffb703] 
              hover:bg-[#0f4a85]
                hover:border-1
                hover:border-[#ffb703]
                hover:text-[#ffb703]
                text-[#023047]
              font-semibold 
              py-3 px-8 
              rounded-xl 
              shadow-lg 
              transition-colors
              flex items-center cursor-pointer

            "
          >
            VIEW ALL NOTABLE ALUMNI <LiaLongArrowAltRightSolid size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotableAlumniSection;
