import React, { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Classes from "../../../utils/styles/Global.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomTabs from "../../../utils/custom/CustomTabs";
import { Hello } from "./Hello";

const OurRecruiters: React.FC = () => {
  const sliderRef = useRef<any>(null);

  const items = [
    {
      key: "1",
      label: "TOP RECRUITERS",
      content: <Hello sliderRef={sliderRef} />,
    },
    {
      key: "2",
      label: "COMPANIES VISITED FOR PLACEMENT -2025",
      content: <Hello sliderRef={sliderRef} />,
    },
  ];

  return (
    <div className={`  pt-7 md:pt-10 lg:pt-14`}>
      <div className="bg-[#DFE4F2] rounded-3xl  py-7 md:py-10 lg:py-14 px-4 md:px-6 lg:px-8">
        {/* Heading and Arrows */}
        <div className={`${Classes["container"]}`}>
          <div className="block md:flex justify-between items-center">
          
              <h1 className=" lg:text-[50px] md:text-[46.875] text-[22.4px] sm:text-[22.4px] fw500 text-[#172F64]  pb-2">
                Our Recruiters
              </h1>
              <p className="w-full md:w-[60%] text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] md:ml-auto">
                Our recruitment partners include a wide range of industry
                leaders, across disciplines, fields, and professional
                landscapes.
              </p>
           
          </div>
          <div className="mt-9 flex flex-col   ">
            <div className="flex items-end justify-end space-x-4">
              <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
              <NextArrow onClick={() => sliderRef.current?.slickNext()} />
            </div>
            <CustomTabs
              items={items}
              activeTextColor="#003049"
              inactiveTextColor="#555555"
              hoverTextColor="#003049"
              activeUnderlineColor="#000000"
              fullWidthUnderlineColor="#DFE4F2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    className="border-2 border-[#172F64] text-[#172F64] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-md "
    onClick={onClick}
  >
    <IoIosArrowBack className="w-9 h-9 transform rotate-180" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    className="border-2 border-[#172F64] text-[#172F64] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-md "
    onClick={onClick}
  >
    <IoIosArrowBack className="w-9 h-9" />
  </button>
);

export default OurRecruiters;
