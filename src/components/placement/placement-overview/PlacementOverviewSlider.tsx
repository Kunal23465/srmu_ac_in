import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { OurGoals, ourGoalsData } from "../../../data/about/silder/slider-data";

type Props = {
  items: OurGoals[];
};

const CARD_WIDTH = 350 + 12; // 350 card width + 12px gap

const Goals: React.FC<OurGoals & { highlight?: boolean }> = ({ title, subtitle, description }) => (
  <div
    className="
      min-w-[350px] h-full p-8 rounded-2xl bg-white
      hover:bg-[#fffefa] border border-white hover:border-[#f7b822]
    "
  >
    <h3 className="text-2xl font-bold mb-4 color_light_blue">{title}</h3>
    <p className="text-[#212529] font-bold mb-2">{subtitle}</p>
    <p className="text-[#212529]">{description}</p>
  </div>
);

const OurGoal: React.FC<Props> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const disablePrev = index === 0;
  const disableNext = index >= items.length - 2;

  const next = () => {
    if (disableNext || isSliding) return;

    setIsSliding(true);
    setIndex((prev) => prev + 1);

    setTimeout(() => {
      setIsSliding(false);
    }, 500);
  };

  const prev = () => {
    if (disablePrev || isSliding) return;

    setIsSliding(true);
    setIndex((prev) => prev - 1);

    setTimeout(() => {
      setIsSliding(false);
    }, 500);
  };

  const translateValue = -(index * CARD_WIDTH);

  const totalDots = items.length - 1;

  return (
    <div className="w-full flex justify-center pt-20">
      <div className="w-full max-w-6xl block md:flex flex-row items-start gap-20 p-4">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start min-w-[300px] mt-6">
          <h2 className="leading-[1.2] text-[#1a1a1a] font-medium text-[3.125rem] mb-4">Our Goals</h2>

          <p className="text-[16px] max-w-[320px] text-gray-700 mb-8">
            Placements are essential for students to smoothly transition into the workforce and find steady careers.
            <br />
            <br />
            At SRMU, our placement cell sets six goals for students, recognizing that training and development are ongoing processes, with placement as their ultimate achievement.
          </p>

          <div className="flex gap-4">
            <button
              onClick={prev}
              disabled={disablePrev || isSliding}
              className={`w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-800 bg-white rounded-full transition
              ${disablePrev || isSliding ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}
            `}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={next}
              disabled={disableNext || isSliding}
              className={`w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-800 bg-white rounded-full transition
              ${disableNext || isSliding ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}
            `}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* SLIDER SECTION */}
        <div className="flex-1 overflow-hidden h-[450px]">
          <div
            className="flex gap-3 items-stretch transition-transform duration-500 ease-in-out"
            style={{
              padding: "20px",
              transform: `translateX(${translateValue}px)`,
            }}
          >
            {items.map((item, i) => (
              <Goals key={i} {...item} highlight={i === index + 1} />
            ))}
          </div>

          {/* BULLETS */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-4 h-4 rounded-full transition-all
                  ${i === index ? "bg-[#0f4a85] scale-110" : "border-2 border-[#0f4a85] bg-white"}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PlacementOverviewSlider() {
  return <OurGoal items={ourGoalsData} />;
}