import React, { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";

interface MissionVisionCardProps {
  image: string;
  heading: string;
  points: string[];
}

const MissionVissionCard: React.FC<MissionVisionCardProps> = ({ image, heading, points }) => {
  const [showAll, setShowAll] = useState(false);

  const visiblePoints = showAll ? points : points.slice(0, 2);

  return (
    <div className="w-full border border-transparent hover:border-[#ffb703]  bg-white shadow-lg rounded-2xl overflow-hidden  transition-all duration-300">
      <div className="overflow-hidden">
        <img src={image} alt={heading} className="w-full h-[280px] object-cover object-center transform transition-transform duration-500 hover:scale-110" />
      </div>

      <div className="p-5 sm:p-15">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1B3A6F] mb-4">{heading}</h2>
        <ul className="list-disc pl-4 sm:pl-6 text-gray-700 space-y-2">
          {visiblePoints.map((point, index) => (
            <li key={index} className="text-sm sm:text-[16px] leading-relaxed marker:text-[#ffb703] marker:text-2xl text-justify">
              {point}
            </li>
          ))}
        </ul>

        {!showAll && points.length > 2 && (
          <div className="flex mt-4">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#ffb703] cursor-pointer border uppercase transition-all duration-500 border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] inline-flex gapx-x-1 items-center px-3 lg:px-5 py-2 rounded-sm text-sm font-medium text-nowrap mt-5 sm:mt-0  group "
            >
              Read More
              <span className="">
                <MdArrowRightAlt size={26} />
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MissionVissionCard;
