import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Drive = {
  id: number;
  companyName: string;
  companyLogo: string;
  dateOfVisit: string;
  description: string;
};

const placementData: Record<string, Drive[]> = {
  "2023": [
    {
      id: 1,
      companyName: "TATA AIG Insurance",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",
      dateOfVisit: "03 September, 2023",
      description:
        "Tata AIG General Insurance Company Limited is a joint venture company…",
    },
    {
      id: 2,
      companyName: "YES BANK",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "21 March, 2023",
      description:
        "At YES BANK, we are driven by a deep purpose and relentless commitment…",
    },
    {
      id: 3,
      companyName: "Zenus Group",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "15 November, 2022",
      description: "Zenus Group is a Telecom Company established in 2012…",
    },
    {
      id: 4,
      companyName: "Zenus Group",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "15 November, 2022",
      description: "Zenus Group is a Telecom Company established in 2012…",
    },
    {
      id: 5,
      companyName: "Zenus Group",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "15 November, 2022",
      description: "Zenus Group is a Telecom Company established in 2012…",
    },
  ],

  "2024": [
    {
      id: 6,
      companyName: "Accenture",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "01 April, 2024",
      description: "Accenture is a global professional services company…",
    },
    {
      id: 7,
      companyName: "Capgemini",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "15 June, 2024",
      description: "Capgemini is a French multinational IT services company…",
    },
    {
      id: 8,
      companyName: "Wipro",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "12 May, 2024",
      description: "Wipro is a leading global IT, consulting and BPO company…",
    },
  ],

  "2025": [
    {
      id: 9,
      companyName: "Cognizant",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "10 February, 2025",
      description:
        "Cognizant is an American multinational IT services company…",
    },
    {
      id: 10,
      companyName: "Puma",
      companyLogo:
        "/src/assets/images/placements/placement-overview/aditya-birla.png",

      dateOfVisit: "28 February, 2025",
      description: "PUMA is a world-leading sportswear company…",
    },
  ],
};

const PlacementDrives: React.FC = () => {
  const [activeYear, setActiveYear] = useState("2023");
  const [index, setIndex] = useState(0);

  const students = placementData[activeYear] || [];
  const itemsPerSlide = 3;

  const nextSlide = () => {
    setIndex((prev) =>
      prev + itemsPerSlide >= students.length ? 0 : prev + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev - itemsPerSlide < 0
        ? students.length - itemsPerSlide
        : prev - itemsPerSlide
    );
  };

  const displayed = students.slice(index, index + itemsPerSlide);

  return (
    <div className="relative bg-[#f1f1f1] w-full text-black py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER + TABS */}
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-semibold  mb-2">Placement Drives</h2>

          <div className="flex items-center  mb-2 bg-white  rounded">
            {["2025", "2024", "2023"].map((year) => (
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

        {/* SUBTEXT */}
        <p className="text-gray-700 mb-8 text-sm max-w-xl">
          Dynamic placement drives connect our students with leading employers,
          facilitating successful career launches.
        </p>

        <div className="h-0.5 bg-black mb-12"></div>

        {/* CARDS */}
        <div className="grid grid-cols-1 h-[310px]  md:grid-cols-3 gap-6">
          {displayed.map((drive) => (
            <div
              key={drive.id}
              className="bg-[#f1f1f1] rounded-lg max-h-[410px]  p-5 border border-gray-200"
            >
              {/* Logo */}
              <div className="flex justify-center mb-4">
                <img
                  src={drive.companyLogo}
                  className="h-20 object-contain"
                  alt="company logo"
                />
              </div>

              {/* Info */}
              <p className="text-sm font-semibold mb-1">
                <strong>Date of Visit:</strong> {drive.dateOfVisit}
              </p>

              <p className="text-sm text-gray-700">{drive.description}</p>
            </div>
          ))}
        </div>

        {/* SLIDER BUTTONS */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={prevSlide}
            className="p-2 border border-[#224984] rounded-full "
          >
            <ChevronLeft color="#224984" size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="p-2 border border-[#224984] rounded-full "
          >
            <ChevronRight color="#224984" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacementDrives;
