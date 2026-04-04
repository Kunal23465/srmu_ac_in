import React, { useState, useEffect } from "react";
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

  image,
  fullDescription = "",
  reversed,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Word limit based on device
  const wordLimit = isMobile ? 50 : 100;

  const words = fullDescription.split(" ");
  const limitedText =
    words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : fullDescription;

  return (
    <div
      className={`bg-white hover:bg-[#fff9eb] rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-start border border-gray-200 hover:border-[#ffb703]
      ${reversed ? "md:flex-row-reverse" : ""}`}
    >
      {/* Image */}
      <div className="w-full md:w-1/3">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-xl"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-2/3">
        <h2 className="text-[18px] sm:text-[24px]   fw500 text-gray-800 mb-2">
          {title}
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          {showMore ? fullDescription : limitedText}
        </p>

        {words.length > wordLimit && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-[#0f4a85] flex gap-1 items-center font-semibold mt-2 transition-colors cursor-pointer"
          >
            {showMore ? "READ LESS" : "READ MORE"}
            <LuArrowRight className="text-lg" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;