import React, { useState } from "react";
import SliderLogic from "./SliderLogic";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const FinalSlider: React.FC = () => {
  const [scrollFunctions, setScrollFunctions] = useState<{
    scrollTo: (dir: "left" | "right") => void;
    canScrollLeft: boolean;
    canScrollRight: boolean;
  } | null>(null);

  return (
    <div className=" p-4 sm:p-8 font-sans">
      <div className="">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 w-full">
          <div className="w-full sm:w-auto">
            <h2 className="text-[28px] lg:text-[3.125rem]  text-[#023047] fw600">Academic Facilities</h2>
            <p className="text-[15px] lg:text-[16px] md:text-[15px] sm:text-[15px]">
              From innovative research spaces to interactive learning environments, SRMU offers a range of academic facilities.
            </p>
          </div>

          {scrollFunctions && (
            <div className="flex space-x-3 mt-4 sm:mt-0 self-start sm:self-auto">
              <button
                onClick={() => scrollFunctions.scrollTo("left")}
                disabled={!scrollFunctions.canScrollLeft}
                className={`text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer
                  ${scrollFunctions.canScrollLeft ? "cursor-pointer" : "opacity-40 cursor-not-allowed"}`}
              >
                <MdKeyboardArrowLeft size="26" />
              </button>
              <button
                onClick={() => scrollFunctions.scrollTo("right")}
                disabled={!scrollFunctions.canScrollRight}
                className={`text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer 
                  ${scrollFunctions.canScrollRight ? "cursor-pointer" : "opacity-40 cursor-not-allowed"}`}
              >
                <MdKeyboardArrowRight size="26" />
              </button>
            </div>
          )}
        </div>

        <SliderLogic setScrollToFunctions={setScrollFunctions} />
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default FinalSlider;
