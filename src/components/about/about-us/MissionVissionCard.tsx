import React, { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";

interface MissionVisionCardProps {
    image: string;
    heading: string;
    points: string[];
}

const MissionVissionCard: React.FC<MissionVisionCardProps> = ({ image, heading, points }) => {
    const [showAll, setShowAll] = useState(false);

    // Only show first two points initially
    const visiblePoints = showAll ? points : points.slice(0, 2);

    return (
        <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[40%] xl:w-[30%] bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-all duration-300">
            {/* Image (only image zooms on hover) */}
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={heading}
                    className="w-full h-[250px] object-cover object-center transform transition-transform duration-500 hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#1B3A6F] mb-4">{heading}</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {visiblePoints.map((point, index) => (
                        <li
                            key={index}
                            className="leading-relaxed pl-1 marker:text-[#FFD700] text-justify"
                            style={{
                                textIndent: "-0.8em", // ensures 2nd line aligns properly with first line text
                                paddingLeft: "1.2em",
                            }}
                        >
                            {point}
                        </li>
                    ))}
                </ul>

                {/* Read More Button */}
                {!showAll && points.length > 2 && (
                    <div className="flex justify-end mt-4">
                        <button
                            onClick={() => setShowAll(true)}
                            className="bg-[#ffb703]  border-2 uppercase   border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] inline-flex gapx-x-1 items-center   font-semibold px-5 lg:px-8 py-2 rounded-md text-nowrap mt-5 sm:mt-0  group "

                        >
                            Read More
                            <span className="transition-all duration-200  group-hover:rotate-[360deg]">
                                <MdArrowRightAlt size={26} />
                            </span>{" "}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MissionVissionCard;
