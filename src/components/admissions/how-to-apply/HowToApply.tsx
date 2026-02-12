import React, { useRef, useState } from "react";
import Classes from "../../../utils/styles/Global.module.css";
import { HowToApplyTopFooterData, SRMUoffersData } from "../../../data/admissions/how-to-apply/how-to-apply-data";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import img from "../../../assets/images/admissions/how-to-apply/howtoapply-08022410430874.jpg";
import OnlineAdmissionProcess from "./OnlineAdmissionProcess";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const HowToApply: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = SRMUoffersData.length;

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  // 🔍 Determine when to disable arrows
  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= totalSlides - (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);

  return (
    <div>
      <div className={` pt-7 md:pt-10 lg:pt-14`}>
        <div className={`${Classes["container"]}`}>
          <div className={`flex flex-col md:flex-row  gap-4 items-stretch  justify-between `}>
            <div className="w-auto border-l-4 pl-2 md:pl-0 md:border-l-0  md:border-r-5 border-[#ffb703] flex flex-col justify-center">
              <h2 className="text-[#023047] text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 whitespace-pre-line leading-15 pr-4 sm:min-w-[350px]">How To Apply</h2>
            </div>
            <div className="md:pl-8 md:py-4">
              <div className="text-justify text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]">
                <p className="pb-4">
                  To begin your journey at Shri Ramswaroop Memorial University (SRMU), visit the official website and head to the “
                  <a
                    className="font-medium italic underline"
                    href="https://studentportal.srmu.ac.in/?_gl=1*16w4y3g*_gcl_au*NzM0NDM3NTE2LjE3NjMxMTgyMjg.*_ga*MTM1NTE3MDg2Ny4xNzYzMTE4MjI4*_ga_QZEQ59Q6ZL*czE3NjQ5MjYxMTckbzk4JGcxJHQxNzY0OTI3OTMxJGo2MCRsMCRoMzQ0NzE0NDMw"
                  >
                    Apply Now
                  </a>
                  ” section.
                </p>
                <p className="pb-4">
                  Choose your desired undergraduate or postgraduate program, review the eligibility criteria and admission guidelines, and fill out the online application form with
                  accurate personal and academic details.
                </p>
                <p>Make sure to upload the required documents and follow the instructions provided to complete the process smoothly.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <OnlineAdmissionProcess />
        </div>
        <div className={`${Classes["container"]}`}>
          <div className="">
            <div className="flex">
              <div>
                <h1 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] font-bold">SRMU Offers</h1>
              </div>
              <div className="ml-auto flex gap-5">
                <button
                  onClick={() => sliderRef.current?.slickPrev()}
                  disabled={isAtStart}
                  className={`w-12 h-12 border-2 border-black flex hover:bg-[#0f4a85] text-[#0f4a85] hover:text-[#ffb703]  items-center justify-center transition ${isAtStart ? "opacity-40 cursor-not-allowed" : " cursor-pointer"
                    }`}
                >
                  <MdKeyboardArrowLeft size="26" />
                </button>

                <button
                  onClick={() => sliderRef.current?.slickNext()}
                  disabled={isAtEnd}
                  className={`w-12 h-12 border-2 border-black flex hover:bg-[#0f4a85] text-[#0f4a85] hover:text-[#ffb703] items-center justify-center transition ${isAtEnd ? "opacity-40 cursor-not-allowed" : " cursor-pointer"
                    }`}
                >
                  <MdKeyboardArrowRight size="26" />
                </button>
              </div>
            </div>
            <div className="py-10 sm:py-20">
              <Slider ref={sliderRef} {...settings}>
                {SRMUoffersData.map((item) => (
                  <div key={item.id} className="px-3">
                    <div className="p-7 pb-5 h-100 lg:h-120 xl:h-100 w-full  hover:text-white transition-all duration-300 hover:bg-[#0f4a85] border border-gray-200 rounded-xl">
                      <img src={item.img} alt={item.title} className="rounded-xl object-cover h-[85%] w-full mb-4" />

                      <h3 className="text-2xl font-medium mb-1">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f5f5]">
          <div className={`${Classes["container"]} py-10 lg:py-20`}>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-25 px-0 lg:px-0">
              <div className="pt-6 lg:pt-0 w-full">
                <img
                  src={img}
                  alt=""
                  className="w-full h-auto block"
                />
              </div>

              <div className="py-2 sm:py-0 w-full">
                <h1 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] leading-tight text-[#023047]  font-medium mr-0 sm:mr-0 lg:mr-35">Get Advantage of studying in a NAAC Accredited University</h1>
                <ul className="list-disc marker:text-amber-400 marker:text-3xl mr-0 sm:mr-0 lg:mr-35">
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-2 lg:leading-6">26+ Years of Academic Excellence</li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-2 lg:leading-6">Global & Industry Collaborations</li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-2 lg:leading-6">Advanced Labs & World-Class Infrastructure</li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-2 lg:leading-6">Strong Placement Record with MNCs & Fortune 500</li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-4 lg:leading-6">
                    Industry-Aligned, Skill-Based Programs (AI, Data Science, etc.)
                  </li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-2 lg:leading-6">Support for Research, Innovation & Startups</li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-2 lg:leading-6">Experienced Faculty with Industry Exposure</li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]  leading-2 lg:leading-6">Well-Connected, Student-Friendly Green Campus</li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-2 lg:leading-6">Flexible Academics as per NEP 2020</li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-2 lg:leading-6">Attractive Scholarships & Affordable Fee Structure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <CustomTopFooter data={HowToApplyTopFooterData} />
      </div>
    </div>
  );
};

export default HowToApply;
