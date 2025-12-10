import React, { useState, useRef, useEffect } from "react";
import { LuArrowRight } from "react-icons/lu";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  fullDescription?: string;
  reversed?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  fullDescription,
  reversed,
}) => {
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (showMore && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight + "px");
    } else {
      setMaxHeight("0px");
    }
  }, [showMore]);

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

        {/* ---- Shutter Wrapper ---- */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight }}
        >
          <div ref={contentRef}>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {fullDescription}
            </p>
          </div>
        </div>

        {/* Read More / Read Less Toggle */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-[#0f4a85] flex gap-1 items-center font-semibold mt-2 transition-colors"
        >
          {showMore ? "READ LESS" : "READ MORE"} <LuArrowRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
