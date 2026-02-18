import { useState } from "react";
import tedxData from "../../../data/campus-life/events/events-data";
import { useNavigate } from "react-router-dom";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function TedxSharing() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const slideLeft = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const slideRight = () => {
    if (currentIndex < tedxData.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="w-full py-10 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw600 color_light_blue">Tedx Sharing</h2>

        <div className="flex gap-3">
          <button
            onClick={slideLeft}
            disabled={currentIndex === 0}
            className={`w-12 h-12 border-2 border-black flex items-center justify-center 
                            hover:bg-[#0f4a85] text-[#0f4a85] hover:text-[#ffb703] transition 
                            ${currentIndex === 0 ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
                        `}
          >
            <MdKeyboardArrowLeft size="26" />
          </button>

          <button
            onClick={slideRight}
            disabled={currentIndex === tedxData.length - 1}
            className={`w-12 h-12 border-2 border-black flex items-center justify-center 
                            hover:bg-[#0f4a85] text-[#0f4a85] hover:text-[#ffb703] transition 
                            ${currentIndex === tedxData.length - 1 ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
                        `}
          >
            <MdKeyboardArrowRight size="26" />
          </button>
        </div>
      </div>

      {/* Subtitle */}
      <span className="mb-6 lg:text-[15px] md:text-[14px] sm:text-[13.132px] text-[13.132px] w-full block mt-2">
        SRMU has been a pioneer of TEDx events in the region, sparking meaningful conversations based on the mission: "Ideas worth spreading."
      </span>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden px-3 mt-5 md:px-0">
        <div
          className="flex gap-6 transition-transform duration-700"
          style={{
            transform: `translateX(-${currentIndex * (50 + 3)}%)`,
          }}
        >
          {tedxData.map((item) => {
            const isHover = hoveredId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                                    w-[85%] sm:w-[70%] md:w-1/2 max-w-[609px] shrink-0 
                                    relative rounded-2xl overflow-hidden cursor-pointer
                                    transition-all duration-500
                                    hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/20
                                `}
              >
                {/* Image */}
                <img src={item.image} alt={item.title} className="w-full h-64 sm:h-80 md:h-[470px] object-cover" />

                {/* Dark overlay */}
                <div
                  className={`
                                        absolute inset-0 transition-all duration-500 z-10
                                        ${isHover ? "bg-black/60" : "bg-black/40"}
                                    `}
                />

                <p
                  className={`
                                        absolute top-3 md:top-6 left-1/2 -translate-x-1/2 z-20
                                        font-semibold text-sm md:text-lg drop-shadow-md transition-colors
                                        ${isHover ? "text-[#ffb703]" : "text-white"}
                                    `}
                >
                  {item.date}
                </p>

                <h3
                  className={`
                                        absolute left-1/2 -translate-x-1/2 text-white 
                                        text-base sm:text-[22px] font-medium drop-shadow-xl text-center
                                        transition-all duration-500 z-20
                                        ${isHover ? "-translate-y-50 sm:-translate-y-70 md:-translate-y-100" : "-translate-y-20"}
                                    `}
                >
                  {item.title}
                </h3>

                <div
                  className={`
                                        absolute left-1/2 -translate-x-1/2 w-full text-sm px-2 sm:px-4 md:px-8 text-center
                                        transition-all duration-700 z-20
                                        ${isHover ? "opacity-100 top-30 md:top-35" : "opacity-0 top-60"}
                                    `}
                >
                  <span className="text-xs sm:text-sm md:text-base  max-w-sm mx-auto mb-3 text-white">{item.description}</span>
                </div>

                <button
                  onClick={() => navigate(item.routeKey)}
                  className={`
                                        absolute left-1/2 -translate-x-1/2 px-4 md:px-8 text-center
                                        transition-all duration-700 z-20
                                        ${isHover ? "opacity-100 top-45 sm:top-60 md:top-90" : "opacity-0 top-120"}
                                        bg-[#ffb703] block mx-auto text-[#023047]
                                        px-4 py-2 md:px-6 md:py-2 mt-6 transition-all duration-500
                                        rounded-lg shadow-md text-sm font-medium hover:text-[#ffb703] hover:bg-transparent hover:border hover:border-[#ffb703]
                                    `}
                >
                  VIEW ALL →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
