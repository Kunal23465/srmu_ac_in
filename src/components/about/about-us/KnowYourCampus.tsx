import React, { useRef, useState } from "react";
import Slider from "react-slick";

import { campusSlides } from "../../../data/about/aboutusData";
import ourCampus from "../../../assets/images/about/aboutUs/knowyourcampusimg.jpg";
import Classes from "../../../utils/styles/Global.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const KnowOurCampus: React.FC = () => {
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false, // IMPORTANT: disable logic works only when false
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    cssEase: "ease",
    beforeChange: (_old: number, next: number) => setCurrentSlide(next),
  };

  const isFirst = currentSlide === 0;
  const isLast = currentSlide === campusSlides.length - 1;

  return (
    <section className="w-full">
      {/* Top Header */}
      <div className="bg-[#0f4a85] py-6">
        <div className={`${Classes["container"]}`}>
          <h2 className="text-[28px] lg:text-[3.125rem] fw600 text-white">Know Our Campus</h2>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full">
        <img src={ourCampus} alt="Campus" className="w-full h-[550px] object-cover" />

        {/* Card */}
        <div className="absolute top-1/2 right-[1%] sm:right-[18%] transform -translate-y-1/2 bg-[#ecf0f9] shadow-lg p-8 w-[370px] h-[370px]">
          {/* Arrows */}
          <div className="flex -mt-8 pb-8 justify-center">
            {/* Prev */}
            <button
              onClick={() => !isFirst && sliderRef.current?.slickPrev()}
              disabled={isFirst}
              className={`p-1 text-5xl  
                                ${isFirst ? "bg-gray-200 text-gray-400 font-normal cursor-not-allowed" : "cursor-pointer bg-[#023047] font-bold  text-white"}`}
            >
              <MdKeyboardArrowLeft size="26" />
            </button>

            {/* Next */}
            <button
              onClick={() => !isLast && sliderRef.current?.slickNext()}
              disabled={isLast}
              className={`p-1 text-5xl
                                ${isLast ? "bg-gray-200 text-gray-400 font-normal cursor-not-allowed" : "cursor-pointer bg-[#023047] font-bold text-white"}`}
            >
              <MdKeyboardArrowRight size="26" />
            </button>
          </div>
          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {campusSlides.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col p-2 items-center justify-center gap-y-2">
                  <h3 className="text-lg font-bold text-center uppercase mb-2">{item.title}</h3>
                  <p className="mb-4 text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default KnowOurCampus;
