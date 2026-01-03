import React, { useState } from "react";

import data, { WhyItem } from "../../../data/about/silder/slider-data";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  items: WhyItem[];
};

const WhyCard: React.FC<WhyItem & { highlight?: boolean }> = ({ title, description, highlight }) => (
  <div
    className={`
            flex-1 min-w-[280px] h-full p-8 rounded-2xl shadow-lg
            ${highlight ? "bg-yellow-500 color_light_blue" : "bg-white"}
        `}
  >
    <h3 className="text-2xl font-bold mb-4 color_light_blue">{title}</h3>
    <p className={highlight ? "text-gray-800" : "text-gray-700"}>{description}</p>
  </div>
);

const WhySRMU: React.FC<Props> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const disablePrev = index === 0;
  const disableNext = index >= items.length - 3;

  const next = () => {
    if (!disableNext && !isSliding) {
      setIsSliding(true);
      setIndex(index + 1);

      setTimeout(() => {
        setDisplayIndex((prev) => prev + 1);
        setIsSliding(false);
      }, 0);
    }
  };

  const prev = () => {
    if (!disablePrev && !isSliding) {
      setIsSliding(true);
      setIndex(index - 1);

      setTimeout(() => {
        setDisplayIndex((prev) => prev - 1);
        setIsSliding(false);
      }, 0);
    }
  };

  const visibleItems = items.slice(displayIndex, displayIndex + 3);

  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-full max-w-7xl flex flex-row items-start gap-10 p-4">
        <div className="flex flex-col items-start min-w-[300px] mt-6">
          <h2 className="leading-[1.2] text-[#1a1a1a] font-medium text-[3.125rem] mb-[1rem]">Why SRMU? </h2>
          <p className="text-[20px] text-gray-700 mb-8">At SRMU, you will</p>

          <div className="flex gap-4">
            <button
              onClick={prev}
              disabled={disablePrev || isSliding}
              className={`w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-800 bg-white rounded-full transition
                                ${disablePrev || isSliding ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}
                            `}
            >
              <MdKeyboardArrowLeft size="26" />
            </button>

            <button
              onClick={next}
              disabled={disableNext || isSliding}
              className={`w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-800 bg-white rounded-full transition
                                ${disableNext || isSliding ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}
                            `}
            >
              <MdKeyboardArrowRight size="26" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden h-[450px]">
          <div
            className="
                            flex gap-6 items-stretch
                            transition-transform duration-500 ease-in-out
                        "
            style={{
              transform: `translateX(${index * -30}px)`,
            }}
          >
            {visibleItems.map((item, i) => (
              <WhyCard
                key={i}
                {...item}
                highlight={i === 1} // ALWAYS middle card
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Slider() {
  // @ts-ignore
  return <WhySRMU items={data} />;
}
