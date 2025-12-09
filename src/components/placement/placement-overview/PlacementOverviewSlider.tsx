import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ourGoalsData } from "../../../data/about/silder/slider-data";
import Classes from "../../../utils/styles/Global.module.css";

type Props = {
  items: {
    title: string;
    subtitle: string;
    description: string;
  }[];
};

const Goals: React.FC<any> = ({ title, subtitle, description, cardWidth }) => (
  <div
    className="
      h-full p-8 rounded-2xl bg-white
      hover:bg-[#fffefa] border border-white hover:border-[#f7b822]
    "
    style={{ minWidth: cardWidth }}
  >
    <h3 className="text-2xl font-bold mb-4 color_light_blue">{title}</h3>
    <p className="text-[#212529] font-bold mb-2">{subtitle}</p>
    <p className="text-[#212529]">{description}</p>
  </div>
);

const OurGoal: React.FC<Props> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(380);
  const [visibleCards, setVisibleCards] = useState(1);

  // ⭐ Responsive: 1 slide < 1024px, 2 slides ≥ 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setVisibleCards(1);
        setCardWidth(window.innerWidth - 80); // full-width look on tablet/mobile
      } else {
        setVisibleCards(2);
        setCardWidth(420); // desktop card width
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, items.length - visibleCards);

  const disablePrev = index === 0;
  const disableNext = index >= maxIndex;

  const next = () => !disableNext && setIndex((p) => p + 1);
  const prev = () => !disablePrev && setIndex((p) => p - 1);

  const translateValue = -(index * (cardWidth + 16)); // gap of 16px

  return (
    <div className="w-full flex justify-center pt-10 lg:pt-20">
      <div className={`${Classes["container"]}`}>
        <div className="w-full flex flex-col lg:flex-row items-start gap-20 p-4">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-start min-w-[300px] mt-6">
            <h2 className="leading-[1.2] text-[#1a1a1a] font-medium text-[3.125rem] mb-4">
              Our Goals
            </h2>

            <p className="text-[16px] max-w-[320px] text-gray-700 mb-8">
              Placements are essential for students to smoothly transition into
              the workforce and find steady careers.
              <br />
              <br />
              At SRMU, our placement cell sets six goals for students, recognizing
              that training and development are ongoing processes.
            </p>

            <div className="flex gap-4">
              <button
                onClick={prev}
                disabled={disablePrev}
                className={`w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-800 bg-white rounded-full transition
                ${disablePrev ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}`}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={next}
                disabled={disableNext}
                className={`w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-800 bg-white rounded-full transition
                ${disableNext ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}`}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* SLIDER SECTION */}
          <div className="flex-1 overflow-hidden h-[450px]">
            <div
              className="flex gap-4 items-stretch transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${translateValue}px)`,
                padding: "20px 0",
              }}
            >
              {items.map((item, i) => (
                <Goals key={i} {...item} cardWidth={cardWidth} />
              ))}
            </div>

            {/* BULLETS */}
            <div className="flex justify-center gap-2 mt-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-4 h-4 rounded-full transition-all
                    ${i === index
                      ? "bg-[#0f4a85] scale-110"
                      : "border-2 border-[#0f4a85] bg-white"}
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PlacementOverviewSlider() {
  return <OurGoal items={ourGoalsData} />;
}
