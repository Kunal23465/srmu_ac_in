import React, { useState, useRef, useEffect } from "react";
import Classes from "../../../utils/styles/Global.module.css";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { placementOverviewplacementData } from "../../../data/placement/placementData";
import placementPdf from "../../../assets/pdf/placement/placement-policies/2023-placement-record-100124102503-1-1--210625040129.pdf";

const PlacementRecords: React.FC = () => {
  const [activeYear, setActiveYear] = useState("2023");
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);


  const students = placementOverviewplacementData[activeYear] || [];
  const totalSlides = Math.ceil(students.length / 5);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to determine slidesToShow based on window width
  // @ts-ignore
  const getSlidesToShow = () => {
    if (windowWidth >= 1536) return 5;
    if (windowWidth >= 1200) return 5; // Changed from 4 to 5
    if (windowWidth >= 1024) return 4; // Changed from 3 to 4
    if (windowWidth >= 768) return 3;
    if (windowWidth >= 640) return 2;
    return 1; // xs
  };

  // @ts-ignore
  // Function to determine if centerMode should be enabled
  // @ts-ignore
  const shouldCenterMode = () => {
    return windowWidth >= 768; // Enable center mode only on medium screens and above
  };

  // Function to determine if arrows should be shown
  // @ts-ignore
  const shouldShowArrows = () => {
    return windowWidth >= 375; // Show arrows only on medium screens and above
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
  centerMode: false, // Changed from shouldCenterMode() to false
    centerPadding: "0px",
    arrows: shouldShowArrows(),
    beforeChange: (_: number, next: number) => setCurrentSlide(next),

    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
         centerMode: false, // Turn off centerMode
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        },
      },

    ],
  };

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= totalSlides - 1;

  return (
    <div className="relative placement-record-bg w-full text-white py-24">
      <div className={`${Classes["container"]}`}>
        {/* HEADER + TABS */}
        <div className="block md:flex justify-between items-center">
          <h2 className="lg:text-[50px] md:text-[46.875px] text-[22.4px] sm:text-[22.4px] font-medium mb-2">Placement Records</h2>

          <div className="flex items-center lg:text-[19px] md:text-[17.82px] sm:text-[16.632px] text-[16.632px] w-fit mb-2 bg-white">
            {["2023", "2024", "2025"].map((year) => (
              <button
                key={year}
                onClick={() => {
                  setActiveYear(year);
                  setCurrentSlide(0);
                  sliderRef.current?.slickGoTo(0);
                }}
                className={`px-5 sm:px-10 xl:px-15 py-3 text-sm md:text-[18px] font-medium text-black transition ${activeYear === year ? "bg-[#ffb703]" : "hover:bg-[#ffb703]"}`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* SUBTEXT */}
        <p className="text-white mb-5 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] max-w-xl">Outstanding placement records showcase our commitment to student success and industry relevance</p>

        {/* BUTTONS */}
        <div className="flex gap-5 mb-6">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            disabled={isPrevDisabled}
            className={`p-2 border-2 border-white transition ${isPrevDisabled ? "opacity-40 cursor-not-allowed" : "hover:bg-[#ffb703]"}`}
          >
            <ChevronLeft size={25} />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            disabled={isNextDisabled}
            className={`p-2 border-2 border-white  transition ${isNextDisabled ? "opacity-40 cursor-not-allowed" : "hover:bg-[#ffb703]"}`}
          >
            <ChevronRight size={25} />
          </button>
        </div>

        {/* SLIDER */}
        <Slider ref={sliderRef} {...settings}>
          {students.map((stu) => (
            <div key={stu.id} className="px-2">
              <div className="w-full rounded-xl border border-white group hover:bg-white transition-all duration-500 py-6 px-4 h-[425px] sm:h-[340px] md:h-[380px] lg:h-[340px] text-center">
                <div className="min-h-[170px]">
                  <img src={stu.image} alt={stu.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover" />

                  <h4 className=" lg:text-[19px] md:text-[17.82px] sm:text-[16.632px] text-[16.632px] text-white group-hover:text-black font-semibold">{stu.name}</h4>
                  <p className="lg:text-[15px] md:text-[14px] sm:text-[13.132px] text-[13.132px]  text-white group-hover:text-black mt-1">{stu.degree}</p>
                </div>

                <div className="mt-10 border border-gray-500"></div>

                <div className="mt-4 flex justify-center">
                  <img src={stu.companyLogo} alt="Company Logo" className="h-6 object-contain" />
                </div>

                <p className="mt-2 text-[14px] md:text-[13.125px] sm:text-[12.25px] text-white group-hover:text-black">
                  Package: <span className="font-semibold">{stu.package}</span>
                </p>
              </div>
            </div>
          ))}
        </Slider>

        {/* VIEW ALL  */}
        <div className="flex items-center justify-center text-center mt-12">
          <a
            href={placementPdf}
            target="_blank"
            className="px-8 py-3 hover:bg-[#f8b922] transition-all text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] duration-500 bg-transparent flex items-center gap-2 hover:text-black border border-[#f8b922] text-[#f8b922] font-medium rounded-xl shadow"
            rel="noreferrer"
          >
            <span> VIEW ALL PLACED STUDENTS </span>
            <FaLongArrowAltRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlacementRecords;