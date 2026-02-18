import React, { useRef } from "react";

import Classes from "../../../utils/styles/Global.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomTabs from "../../../utils/custom/CustomTabs";
import { Hello } from "./Hello";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CompanyHello from "./CompanyHello";

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
      label: "COMPANIES VISITED FOR PLACEMENT",
      content: <CompanyHello sliderRef={sliderRef} />,
    },
  ];

  return (
    <div className={`  pt-7 md:pt-10 lg:pt-14`}>
      <div className="bg-[#DFE4F2] rounded-3xl  py-7 md:py-10 lg:py-14 px-4 md:px-6 lg:px-8">
        {/* Heading and Arrows */}
        <div className={`${Classes["container"]}`}>
          <div className="block md:flex justify-between items-center">
            <h1 className=" text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 text-[#172F64]  pb-2">Our Recruiters</h1>
            <p className="w-full md:w-[60%] text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] md:ml-auto">
              Our recruitment partners include a wide range of industry leaders, across disciplines, fields, and professional landscapes.
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
    className="text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer"
    onClick={onClick}
  >
    <MdKeyboardArrowRight size="26" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    className="text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer"
    onClick={onClick}
  >
    <MdKeyboardArrowLeft size="26" />
  </button>
);

export default OurRecruiters;
