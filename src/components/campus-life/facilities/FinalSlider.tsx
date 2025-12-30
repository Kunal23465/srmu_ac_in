import React, { useState } from 'react';
import SliderLogic from './SliderLogic';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FinalSlider: React.FC = () => {
  const [scrollFunctions, setScrollFunctions] = useState<{
    scrollTo: (dir: 'left' | 'right') => void;
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
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 cursor-pointer
                  ${scrollFunctions.canScrollLeft ? "border-[#023047] text-[#023047] shadow-md" : "border-gray-300 text-gray-400 cursor-not-allowed"}`}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollFunctions.scrollTo("right")}
                disabled={!scrollFunctions.canScrollRight}
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 cursor-pointer
                  ${scrollFunctions.canScrollRight ? "border-[#023047] text-[#023047] shadow-md" : "border-gray-300 text-gray-400 cursor-not-allowed"}`}
              >
                <ChevronRight size={20} />
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