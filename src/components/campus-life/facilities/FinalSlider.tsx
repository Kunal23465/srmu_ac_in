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
    <div className="min-h-[500px] bg-[#ecf0f9] p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
              Academic Facilities
            </h2>
            <p className="text-gray-600 max-w-2xl">
              From innovative research spaces to interactive learning environments, SRMU offers a range of academic facilities.
            </p>
          </div>

          {scrollFunctions && (
            <div className="flex space-x-3">
              <button
                onClick={() => scrollFunctions.scrollTo('left')}
                disabled={!scrollFunctions.canScrollLeft}
                className={`w-15 h-15 rounded-full flex items-center justify-center border-2 transition-all duration-300 cursor-pointer
                  ${scrollFunctions.canScrollLeft
                    ? 'border-blue-500 text-blue-500   shadow-md'
                    : 'border-gray-300 text-gray-400 cursor-not-allowed'
                  }`}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollFunctions.scrollTo('right')}
                disabled={!scrollFunctions.canScrollRight}
                className={`w-15 h-15 rounded-full flex items-center justify-center border-2 transition-all duration-300 cursor-pointer
                  ${scrollFunctions.canScrollRight
                    ? 'border-blue-500 text-blue-500  shadow-md'
                    : 'border-gray-300 text-gray-400 cursor-not-allowed'
                  }`}
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
