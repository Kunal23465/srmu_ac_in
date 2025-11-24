import React, { useState } from "react";
import { LuArrowRight } from "react-icons/lu";

interface ProjectCardProps {
  title: string;
  description: string;
    image: string;
    fullDescription?: string;
  reversed?: boolean; // for switching image left/right
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, fullDescription, reversed }) => {
      const [showMore, setShowMore] = useState(false);
  return (
    <div
      className={`bg-white hover:bg-[#fff9eb] rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-start border border-gray-200 hover:border-[#ffb703]
      ${reversed ? "md:flex-row-reverse" : ""}`}
    >
      {/* Image */}
      <div className="w-full md:w-1/3">
        <img src={image} alt={title} className="w-full h-56 object-cover rounded-xl" />
      </div>

      {/* Text */}
      <div className="w-full md:w-2/3">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
        {/* Expanded Full Details */}
        {showMore && <p className="text-gray-600 text-sm leading-relaxed mb-4">{fullDescription}</p>}
        {/* <button className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline">
          Read More <LuArrowRight className="text-lg" />
        </button> */}
        {/* Read More / Read Less Toggle */}
        <button onClick={() => setShowMore(!showMore)} className="text-[#0f4a85] flex  gap-1 items-center font-semibold hover:underline  mb-10 transition-colors">
          {showMore ? "READ LESS" : "READ MORE"} <LuArrowRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
