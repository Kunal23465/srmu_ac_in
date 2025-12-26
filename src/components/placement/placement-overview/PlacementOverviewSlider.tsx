import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { OurGoals, ourGoalsData } from "../../../data/about/silder/slider-data";
import Classes from "../../../utils/styles/Global.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  items: OurGoals[];
};

const Goals: React.FC<OurGoals & { highlight?: boolean }> = ({ title, subtitle, description }) => (
  <div
    className="
      h-full p-8 rounded-2xl bg-white
      hover:bg-[#fffefa] border border-white hover:border-[#f7b822]
    "
  >
    <h3 className="lg:text-[28px] sm:text-[14.882px] text-[14.882px] md:text-[15.945px] font-bold mb-4 color_light_blue">{title}</h3>
    <p className="text-[#212529] font-bold lg:text-[17px] md:text-[15.945px] sm:text-[14.882px] text-[14.882px] mb-2">{subtitle}</p>
    <p className="text-[#212529] lg:text-[17px] md:text-[15.945px] sm:text-[14.882px] text-[14.882px]">{description}</p>
  </div>
);

const OurGoal: React.FC<Props> = ({ items }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [index, setIndex] = useState(0);

  // Dynamic slidesToShow based on screen size – fixes mobile refresh issue
  const getSlidesToShow = () => {
    if (typeof window === "undefined") return 2;
    return window.innerWidth < 640 ? 1 : 2;
  };

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 640 ? 1 : 2);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow, // Now dynamic!
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setIndex(next),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const disablePrev = index === 0;
  const disableNext = index >= items.length - slidesToShow;

  const next = () => {
    if (!disableNext) sliderRef.current?.slickNext();
  };

  const prev = () => {
    if (!disablePrev) sliderRef.current?.slickPrev();
  };

  const totalDots = Math.max(0, items.length - slidesToShow);

  return (
    <div className="w-full flex justify-center pt-10 md:pt-20">
      <div className={`${Classes["container"]} block md:flex flex-row items-start gap-5 p-4`}>
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start w-full md:w-[30%] mt-6">
          <h2 className="leading-[1.2] text-[#1a1a1a] font-medium lg:text-[50px] md:text-[46.875px] text-[22.4px] sm:text-[22.4px] mb-4">
            Our Goals
          </h2>

          <p className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] max-w-full md:max-w-[320px] text-gray-700 mb-8">
            Placements are essential for students to smoothly transition into the workforce and find steady careers.
            <br />
            <br />
            At SRMU, our placement cell sets six goals for students, recognizing that training and development are ongoing processes, with placement as their ultimate achievement.
          </p>

          <div className="flex gap-4 mb-8">
            <button
              onClick={prev}
              disabled={disablePrev}
              className={`w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-800 bg-white rounded-full transition
                ${disablePrev ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}
              `}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={next}
              disabled={disableNext}
              className={`w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-800 bg-white rounded-full transition
                ${disableNext ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}
              `}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* SLIDER SECTION */}
        <div className="flex-1 w-full md:w-3/5 h-full xl:h-[320px]">
          <Slider ref={sliderRef} {...settings}>
            {items.map((item, i) => (
              <div key={i} className="px-3 mx-1 w-auto h-full xl:h-[320px]">
                <Goals {...item} />
              </div>
            ))}
          </Slider>

          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => sliderRef.current?.slickGoTo(i)}
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