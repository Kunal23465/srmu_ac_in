import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { placementData } from "../../../data/placement/placementData";

const PlacementDrives: React.FC = () => {
  const [activeYear, setActiveYear] = useState("2023");
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const students = placementData[activeYear] || [];
  const totalSlides = Math.ceil(students.length / 3);

  const settings = {
    dots: false,
    arrows: false, // we are using custom arrows
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bg-[#f1f1f1] w-full text-black py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER + TABS */}
        <div className="block md:flex justify-between items-center">
          <h2 className="text-4xl font-semibold mb-2">Placement Drives</h2>

          <div className="flex items-center w-fit mb-2 bg-white rounded">
            {["2025", "2024", "2023"].map((year) => (
              <button
                key={year}
                onClick={() => {
                  setActiveYear(year);
                  setCurrentSlide(0);
                  sliderRef.current?.slickGoTo(0);
                }}
                className={`px-10 py-3 text-sm font-semibold transition ${activeYear === year ? "bg-yellow-400 text-black" : "text-black hover:bg-yellow-400"}`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* SUBTEXT */}
        <p className="text-gray-700 mb-8 text-sm max-w-xl">Dynamic placement drives connect our students with leading employers, facilitating successful career launches.</p>

        <div className="h-0.5 bg-black mb-12"></div>

        {/* SLIDER */}
        <Slider ref={sliderRef} {...settings}>
          {students.map((drive) => (
            <div key={drive.id} className="px-3">
              <div className="bg-[#f1f1f1] rounded-lg h-[310px] p-5 border border-gray-200">
                <div className="flex justify-center mb-4">
                  <img src={drive.companyLogo} className="h-20 object-contain" alt="company logo" />
                </div>

                <p className="text-sm font-semibold mb-1">
                  <strong>Date of Visit:</strong> {drive.dateOfVisit}
                </p>

                <p className="text-sm text-gray-700">{drive.description}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-8">
          {/* Prev */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            disabled={currentSlide === 0}
            className={`p-2 border rounded-full transition ${currentSlide === 0 ? "border-gray-300 cursor-not-allowed opacity-40" : "border-[#224984]"}`}
          >
            <ChevronLeft color={currentSlide === 0 ? "#999" : "#224984"} size={24} />
          </button>

          {/* Next */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            disabled={currentSlide >= totalSlides - 1}
            className={`p-2 border rounded-full transition ${currentSlide >= totalSlides - 1 ? "border-gray-300 cursor-not-allowed opacity-40" : "border-[#224984]"}`}
          >
            <ChevronRight color={currentSlide >= totalSlides - 1 ? "#999" : "#224984"} size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacementDrives;
