import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { placementOverviewplacementData } from "../../../data/placement/placementData";

const PlacementRecords: React.FC = () => {
  const [activeYear, setActiveYear] = useState("2023");
  const [index, setIndex] = useState(0);

  const students = placementOverviewplacementData[activeYear] || [];
  const itemsPerSlide = 5;

  const nextSlide = () => {
    if (students.length === 0) return;

    setIndex((prev) =>
      prev + itemsPerSlide >= students.length ? 0 : prev + itemsPerSlide
    );
  };

  const prevSlide = () => {
    if (students.length === 0) return;

    setIndex((prev) =>
      prev - itemsPerSlide < 0
        ? students.length - itemsPerSlide
        : prev - itemsPerSlide
    );
  };

  const visibleStudents = students.slice(index, index + itemsPerSlide);

  const finalStudents =
    visibleStudents.length < itemsPerSlide
      ? [
          ...visibleStudents,
          ...students.slice(0, itemsPerSlide - visibleStudents.length),
        ]
      : visibleStudents;

  return (
    <div className="relative placement-record-bg w-full text-white py-24">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold mb-2">Placement Records</h2>

          <div className="flex items-center  mb-2 bg-white  rounded">
            {["2023", "2024", "2025"].map((year) => (
              <button
                key={year}
                onClick={() => {
                  setActiveYear(year);
                  setIndex(0);
                }}
                className={`px-10 py-3 text-sm font-semibold text-black  transition ${
                  activeYear === year
                    ? "bg-yellow-400 "
                    : " hover:bg-yellow-400"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <p className="text-gray-300 mb-5 text-sm max-w-xl">
          Outstanding placement records showcase our commitment to student
          success and industry relevance
        </p>

        <div className="flex  gap-5 mb-6 ">
          <button
            onClick={prevSlide}
            className="p-2 border border-white/40 rounded hover:bg-white/20"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="p-2 border border-white/40 rounded hover:bg-white/20"
          >
            <ChevronRight size={20} />
          </button>
        </div>

     

        <div className="overflow-hidden">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 transition-all duration-500">
            {finalStudents.map((stu) => (
              <div
                key={stu.id}
                className="  rounded-xl border border-white py-6 px-4 min-h-[310px] text-center"
              >
              <div className="min-h-[170px]">  <img
                  src={stu.image}
                  alt={stu.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                />

                <h4 className="text-lg font-semibold">{stu.name}</h4>
                <p className="text-xs text-gray-300 mt-1">{stu.degree}</p></div>
                <div className="h-0.1 mt-12 border border-gray-500 my-2"></div>

                <div className="mt-4 flex justify-center">
                  <img
                    src={stu.companyLogo}
                    alt="Company Logo"
                    className="h-6 object-contain"
                  />
                </div>

                <p className="mt-2 text-sm text-gray-200">
                  Package: <span className="font-semibold">{stu.package}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center text-center mt-12">
          <button className="px-8 py-3 hover:bg-[#f8b922] bg-transparent flex items-center gap-2  hover:text-black border border-[#f8b922] text-[#f8b922] font-medium rounded-xl shadow">
            <span> VIEW ALL PLACED STUDENTS </span>
            <span>
              <FaLongArrowAltRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacementRecords;
