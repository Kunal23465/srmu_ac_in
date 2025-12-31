import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { CollabrationSliderData } from "../../../data/about/recognition-approval/recognitionApprovalsData";
import Classes from "../../../utils/styles/Global.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const IndustrialCollabration: React.FC = () => {
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = CollabrationSliderData.length;

  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide === totalSlides - 1;

  return (
    <div className={` pt-7 md:pt-10 lg:pt-14`}>
      <div className="bg-[#ecf0f9] py-7 md:py-10 lg:py-14 px-4 md:px-6 lg:px-8">
        <div className={`${Classes["container"]}`}>
          {/* Heading + Arrows */}
          <div className="flex justify-between items-center">
            <div className="max-w-[70%]">
              <h1 className=" text-[28px] lg:text-[3.125rem] text-[#172F64] font-medium pb-2">Industrial Collaborations</h1>
              <p className="">SRMU’s industry-aligned curriculum and course design is its speciality, and hence, it works in tandem with multiple industry bodies.</p>
            </div>

            <div className="flex justify-center space-x-4">
              <PrevArrow disabled={isAtStart} onClick={() => sliderRef.current?.slickPrev()} />
              <NextArrow disabled={isAtEnd} onClick={() => sliderRef.current?.slickNext()} />
            </div>
          </div>

          {/* Slider */}
          <div className="mt-8 md:mt-10 lg:mt-16">
            <Slider ref={sliderRef} {...settings}>
              {CollabrationSliderData.map((data, index) => (
                <div key={index}>
                  <div className="flex flex-col gap-6">
                    {/* First Row */}
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                      {data.slides.slice(0, 6).map((slide, i) => (
                        <li key={i} className="flex justify-center items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
                          <img src={slide.img} className="h-[60px] w-auto object-contain" />
                        </li>
                      ))}
                    </ul>

                    {/* Second Row */}
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                      {data.slides.slice(6, 12).map((slide, i) => (
                        <li key={i} className="flex justify-center items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
                          <img src={slide.img} className="h-[60px] w-auto object-contain" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

const NextArrow = ({ disabled, onClick }: { disabled: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer
            ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
  >
    <MdKeyboardArrowRight size="26" />
  </button>
);

const PrevArrow = ({ disabled, onClick }: { disabled: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer
            ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
  >
    <MdKeyboardArrowLeft size="26" />
  </button>
);

export default IndustrialCollabration;
