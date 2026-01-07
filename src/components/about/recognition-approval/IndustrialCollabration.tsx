import React, { useRef } from "react";
import Slider from "react-slick";
import { CollabrationSliderData } from "../../../data/about/recognition-approval/recognitionApprovalsData";
import Classes from "../../../utils/styles/Global.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const IndustrialCollabration: React.FC = () => {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1, // each "group" of images is one slide
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className={` pt-7 md:pt-10 lg:pt-14`}>
      <div className="bg-[#DFE4F2]  py-7 md:py-10 lg:py-14 px-4 md:px-6 lg:px-8">
        {/* Heading and Arrows */}
        <div className={`${Classes["container"]}`}>
          <div className="flex justify-between items-center">
            <div className="max-w-[70%]">
              <h1 className=" text-[28px] lg:text-[3.125rem] text-[#172F64] font-bold pb-2">Industrial Collaborations</h1>
              <p className="">SRMU’s industry-aligned curriculum and course design is its speciality, and hence, it works in tandem with multiple industry bodies.</p>
            </div>
            <div className="flex justify-center space-x-4">
              <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
              <NextArrow onClick={() => sliderRef.current?.slickNext()} />
            </div>
          </div>

          {/* Slider Section */}
          <div className="mt-8 md:mt-10 lg:mt-16">
            <Slider ref={sliderRef} {...settings}>
              {CollabrationSliderData.map((data, index) => (
                <div key={index}>
                  <div className="flex flex-col gap-6">
                    {/* First Row (first 6 images) */}
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                      {data.slides.slice(0, 6).map((slide, i) => (
                        <li key={i} className="flex justify-center items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
                          <img src={slide.img} alt={`Recruiter ${i + 1}`} className="h-[60px] w-auto object-contain" />
                        </li>
                      ))}
                    </ul>

                    {/* Second Row (next 6 images) */}
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                      {data.slides.slice(6, 12).map((slide, i) => (
                        <li key={i} className="flex justify-center items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
                          <img src={slide.img} alt={`Recruiter ${i + 7}`} className="h-[60px] w-auto object-contain" />
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

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    className="border-2 border-[#172F64] cursor-pointer text-[#172F64] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-md hover:text-[#ffb703] hover:border-[#ffb703]"
    onClick={onClick}
  >
    <MdKeyboardArrowRight size="26" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    className="border-2 border-[#172F64] cursor-pointer text-[#172F64] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-md hover:text-[#ffb703] hover:border-[#ffb703]"
    onClick={onClick}
  >
    <MdKeyboardArrowLeft size="26" />
  </button>
);

export default IndustrialCollabration;
