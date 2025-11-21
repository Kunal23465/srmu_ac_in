import React, { useState } from "react";
import { advantageData } from "../../../data/admissions/overview/slider-data";

const AdvantageSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < advantageData.length - 2) setIndex(prev => prev + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(prev => prev - 1);
  };

  const SliderControls = () => (
    <div className="flex space-x-3">
      <button
        onClick={prev}
        className={`border border-white text-white cursor-pointer text-2xl w-15 h-15  flex items-center justify-center transition ${index === 0
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-white hover:text-[#14457B]"
          }`}
        disabled={index === 0}
      >
        ‹
      </button>

      <button
        onClick={next}
        className={`border border-white text-white cursor-pointer text-2xl w-15 h-15  flex items-center justify-center transition ${index >= advantageData.length - 2
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-white hover:text-[#14457B]"
          }`}
        disabled={index >= advantageData.length - 2}
      >
        ›
      </button>
    </div>
  );

  return (
    <div className="w-full color_background_blue text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold">SRMU Advantage</h1>
            <p className="mt-3 text-sm md:text-base opacity-100 font-light">
              SRMU builds the visionary leaders of tomorrow, promising holistic development,
              and the stepping stones to global success.
            </p>
          </div>

          <div className="flex space-x-2 mt-2">
            <SliderControls />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {advantageData.slice(index, index + 2).map((item) => (
            <div
              key={item.id}
              className="bg-white text-black p-8 shadow-2xl flex-none rounded-xl w-[700px]"
            >
              <div className="flex gap-2">
                <img src={item.icon} alt={item.title} className="h-12 mb-4" />
                <h3 className="text-2xl font-normal leading-snug">
                  {item.title} <br />
                  <span className="text-black text-2xl font-semibold">
                    {item.subtitle}
                  </span>
                </h3>
              </div>

              <div className="mt-4 text-sm leading-relaxed text-black">
                <div
                  className="opacity-80 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />

                <br />

                {item.extraText && (
                  <div
                    className="opacity-100 font-bold leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.extraText }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantageSlider;
