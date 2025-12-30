import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { placementData } from "../../../data/placement/placementData";

const PlacementDrives: React.FC = () => {
  const [activeYear, setActiveYear] = useState("2023");
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  const students = placementData[activeYear] || [];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to determine slidesToShow based on window width
  const getSlidesToShow = () => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 640) return 2;
    return 1;
  };

  const slidesToShow = getSlidesToShow();
  const totalSlides = Math.ceil(students.length / slidesToShow);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    centerMode: false,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= totalSlides - 1;

  return (
    <div className="relative bg-[#f1f1f1] w-full text-black py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER + TABS */}
        <div className="block md:flex justify-between items-center">
          <h2 className="text-[28px] lg:text-[3.125rem] fw500 mb-2">Placement Drives</h2>

          <div className="flex  items-center w-fit mb-2 bg-white rounded">
            {["2025", "2024", "2023"].map((year) => (
              <button
                key={year}
                onClick={() => {
                  setActiveYear(year);
                  setCurrentSlide(0);
                  sliderRef.current?.slickGoTo(0);
                }}
                className={`px-5 lg:text-[19px] md:text-[17.82px] sm:text-[16.632px] text-[16.632px] sm:px-10 md:px-15 py-3 font-semibold transition ${
                  activeYear === year ? "bg-yellow-400 text-black" : "text-black hover:bg-yellow-400"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* SUBTEXT */}
        <p className="text-gray-700 mb-8 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] max-w-xl">
          Dynamic placement drives connect our students with leading employers, facilitating successful career launches.
        </p>

        <div className="h-0.5 bg-black mb-12"></div>

        {/* SLIDER */}
        <Slider ref={sliderRef} {...settings}>
          {students.map((drive) => (
            <div key={drive.id} className="px-3">
              <div className="bg-[#f1f1f1] rounded-lg h-[310px] p-5 border border-gray-200">
                <div className="flex justify-center mb-4">
                  <img src={drive.companyLogo} className="h-20 object-contain" alt="company logo" />
                </div>

                <p className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] mb-1">
                  <strong>Date of Visit:</strong> {drive.dateOfVisit}
                </p>

                <p className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-gray-700">{drive.description}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-8">
          {/* Prev */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            disabled={isPrevDisabled}
            className={`p-2 border rounded-full transition ${isPrevDisabled ? "border-gray-300 cursor-not-allowed opacity-40" : "border-[#224984]"}`}
          >
            <ChevronLeft color={isPrevDisabled ? "#999" : "#224984"} size={24} />
          </button>

          {/* Next */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            disabled={isNextDisabled}
            className={`p-2 border rounded-full transition ${isNextDisabled ? "border-gray-300 cursor-not-allowed opacity-40" : "border-[#224984]"}`}
          >
            <ChevronRight color={isNextDisabled ? "#999" : "#224984"} size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacementDrives;