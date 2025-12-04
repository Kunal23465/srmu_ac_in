import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { placementOverviewplacementData } from "../../../data/placement/placementData";
import placementPdf from "../../../assets/pdf/placement/placement-policies/2023-placement-record-100124102503-1-1--210625040129.pdf";

const PlacementRecords: React.FC = () => {
  const [activeYear, setActiveYear] = useState("2023");
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const students = placementOverviewplacementData[activeYear] || [];
  const totalSlides = Math.ceil(students.length / 5);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 5,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= totalSlides - 1;

  return (
    <div className="relative placement-record-bg w-full text-white py-24">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER + TABS */}
        <div className="block md:flex justify-between items-center">
          <h2 className="text-4xl font-bold mb-2">Placement Records</h2>

          <div className="flex items-center w-fit mb-2 bg-white rounded">
            {["2023", "2024", "2025"].map((year) => (
              <button
                key={year}
                onClick={() => {
                  setActiveYear(year);
                  setCurrentSlide(0);
                  sliderRef.current?.slickGoTo(0);
                }}
                className={`px-10 py-3 text-sm font-semibold text-black transition ${activeYear === year ? "bg-yellow-400" : "hover:bg-yellow-400"}`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* SUBTEXT */}
        <p className="text-gray-300 mb-5 text-sm max-w-xl">Outstanding placement records showcase our commitment to student success and industry relevance</p>

        {/* BUTTONS */}
        <div className="flex gap-5 mb-6">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            disabled={isPrevDisabled}
            className={`p-2 border border-white/40 rounded transition ${isPrevDisabled ? "opacity-40 cursor-not-allowed" : "hover:bg-white/20"}`}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            disabled={isNextDisabled}
            className={`p-2 border border-white/40 rounded transition ${isNextDisabled ? "opacity-40 cursor-not-allowed" : "hover:bg-white/20"}`}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* SLIDER */}
        <Slider ref={sliderRef} {...settings}>
          {students.map((stu) => (
            <div key={stu.id} className="px-2">
              <div className="min-w-[200px] rounded-xl border border-white py-6 px-4 min-h-[310px] text-center">
                <div className="min-h-[170px]">
                  <img src={stu.image} alt={stu.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover" />

                  <h4 className="text-lg font-semibold">{stu.name}</h4>
                  <p className="text-xs text-gray-300 mt-1">{stu.degree}</p>
                </div>

                <div className="mt-10 border border-gray-500"></div>

                <div className="mt-4 flex justify-center">
                  <img src={stu.companyLogo} alt="Company Logo" className="h-6 object-contain" />
                </div>

                <p className="mt-2 text-sm text-gray-200">
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
            className="px-8 py-3 hover:bg-[#f8b922] bg-transparent flex items-center gap-2 hover:text-black border border-[#f8b922] text-[#f8b922] font-medium rounded-xl shadow"
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
