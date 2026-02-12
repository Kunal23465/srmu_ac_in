import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { CARD_CONTENT } from "../../../data/campus-life/facilities/facilities-data";
import Classes from "../../../utils/styles/Global.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LastSliderSlick: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to determine slidesToShow based on window width
  const getSlidesToShow = () => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 600) return 2;

    return 1;
  };



  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    swipeToSlide: true,
    afterChange: (current: number) => {
      setActiveIndex(current);
      setSelectedCard(null);
    },
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-8">
        <ul className="flex justify-center sm:gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className={`w-4 h-4 rounded-full border-2 border-white transition duration-300 ${i === activeIndex ? "bg-white scale-125" : "bg-transparent"}`} />
    ),
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <div className={Classes["container"]}>
      {/* 🔹 INTERNAL CSS FOR EQUAL HEIGHT */}
      <style>
        {`
          .slick-track {
            display: flex !important;
          }

          .slick-slide {
            height: inherit !important;
            display: flex !important;
          }

          .slick-slide > div {
            height: 100%;
            display: flex;
          }
        `}
      </style>

      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] font-medium text-[#023047] fw600">Academic Wings</h2>

        <p className="w-full sm:w-[82%] pb-5 ms:pb-10 mx-auto text-sm lg:text-[16px]">
          Shri Ramswaroop Memorial University (SRMU) features well-defined academic wings, each dedicated to fostering excellence in specific disciplines. These wings, equipped with state-of-the-art classrooms, laboratories, and research facilities, provide a conducive environment for specialized learning and academic exploration. With distinct academic wings, SRMU ensures a focused and comprehensive approach to education, nurturing the intellectual growth of students across various fields.
        </p>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {CARD_CONTENT.map((data, i) => {
          const isActive = selectedCard === i;

          return (
            <div key={data.id} className="sm:px-3 h-full">
              {/* CARD */}
              <div
                onClick={() => setSelectedCard(i)}
                className={`group cursor-pointer rounded-sm shadow-xl transition duration-300 transform p-2
                  flex ${i % 2 === 0 ? "flex-col  " : "flex-col-reverse"}  h-full
                  hover:scale-[1.01]
                  ${isActive ? "bg-[#233E6F] text-white shadow-2xl scale-[1.01]" : "bg-white hover:bg-[#233E6F] hover:text-white hover:shadow-2xl"}
                `}
              >
                {/* IMAGE */}
                <img
                  src={data.image}
                  alt={data.title}
                  onError={(e) => ((e.target as HTMLImageElement).src = "https://placehold.co/600x400/9CA3AF/FFFFFF?text=Image+Error")}
                  className="w-full h-60 object-cover rounded-tl-sm rounded-tr-sm rounded-bl-sm rounded-br-3xl"
                />

                {/* CONTENT */}
                <div className="px-1 py-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className={`text-[15px] sm:text-lg font-semibold mb-1 sm:mb-3 group-hover:text-white ${isActive ? "text-white" : "text-gray-900"}`}>{data.title}</h3>

                  <p className="leading-relaxed text-black text-sm lg:text-[16px] group-hover:text-white flex-grow">{data.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default LastSliderSlick;
