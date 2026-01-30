import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { placementData } from "../../../data/placement/placementData";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const PlacementDrives: React.FC = () => {
  const [activeYear, setActiveYear] = useState("2023");
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const students = placementData[activeYear] || [];

  /* -------------------- RESIZE HANDLER -------------------- */
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* -------------------- SLIDES TO SHOW -------------------- */
  const getSlidesToShow = () => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 640) return 2;
    return 1;
  };

  const slidesToShow = getSlidesToShow();

  /* -------------------- SLIDER SETTINGS -------------------- */
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 600,
    slidesToShow,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  /* -------------------- BUTTON LOGIC (IMPORTANT) -------------------- */
  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled =
    currentSlide >= students.length - slidesToShow;

  /* -------------------- RENDER -------------------- */
  return (
    <div className="relative bg-[#f1f1f1] w-full text-black py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER + TABS */}
        <div className="block md:flex justify-between items-center">
          <h2 className="text-[28px] lg:text-[3.125rem] fw500 mb-2">
            Placement Drives
          </h2>

          <div className="flex items-center w-fit mb-2 bg-white rounded">
            {["2025", "2024", "2023"].map((year) => (
              <button
                key={year}
                onClick={() => {
                  setActiveYear(year);
                  setCurrentSlide(0);
                  sliderRef.current?.slickGoTo(0);
                }}
                className={`px-5 sm:px-10 py-3 font-semibold transition
                  ${activeYear === year
                    ? "bg-yellow-400 text-black"
                    : "text-black hover:bg-yellow-400"
                  }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* SUBTEXT */}
        <p className="text-gray-700 mb-8 max-w-xl">
          Dynamic placement drives connect our students with leading employers,
          facilitating successful career launches.
        </p>

        <div className="h-0.5 bg-black mb-12"></div>

        {/* SLIDER */}
        <Slider ref={sliderRef} {...settings}>
          {students.map((drive) => (
            <div key={drive.id} className="px-3">
              <div className="bg-[#f1f1f1] rounded-lg h-[310px] p-5 border border-gray-200">
                <div className="flex justify-center mb-4">
                  <div className="w-full h-40 flex items-center justify-center">
                    <img
                      src={drive.companyLogo}
                      alt={drive.companyName}
                      className="w-full max-h-36 object-contain"
                    />
                  </div>
                </div>

                <p className="mb-1">
                  <strong>Date of Visit:</strong> {drive.dateOfVisit}
                </p>

                <p className="text-gray-700">
                  {drive.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        {/* NAV BUTTONS */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            disabled={isPrevDisabled}
            className={`bg-white w-13 h-13 rounded-full border border-gray-200 cursor-pointer shadow-lg flex items-center justify-center
              ${isPrevDisabled
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-[#ffb703] hover:text-white"
              }`}
          >
            <MdKeyboardArrowLeft size={26} />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            disabled={isNextDisabled}
            className={`bg-white w-13 h-13 rounded-full border border-gray-200 cursor-pointer shadow-lg flex items-center justify-center
              ${isNextDisabled
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-[#ffb703] hover:text-white"
              }`}
          >
            <MdKeyboardArrowRight size={26} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacementDrives;
