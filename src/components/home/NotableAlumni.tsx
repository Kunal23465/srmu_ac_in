import { useRef, useEffect } from "react";
import Classes from "../../utils/styles/Global.module.css";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { alumniData } from "../../data/placement/alumni-testimonials-data";
import AlumniCard from "./AlumniCard";

import { Link } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const NotableAlumniSection = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay.current]
  );

  const goToNext = () => emblaApi?.scrollNext();
  const goToPrev = () => emblaApi?.scrollPrev();

  return (
    <div className="w-full flex justify-center py-10 bg-[#0f4a85]">
      <div className={`w-full ${Classes["container"]} p-4 text-white`}>
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-[28px] text-white lg:text-[3.125rem] fw600">
              Notable Alumni
            </h2>
            <p className="text-gray-300">
              Hear from our distinguished alumni, who have made waves in their respective fields.
            </p>
          </div>

          <div className="hidden sm:flex space-x-2">
            <button
              className="text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 cursor-pointer"
              onClick={goToPrev}
            >
              <MdKeyboardArrowLeft size="26" />
            </button>
            <button
              className="text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 cursor-pointer"
              onClick={goToNext}
            >
              <MdKeyboardArrowRight size="26" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="w-full overflow-hidden">
          {/* viewport */}
          <div
            ref={emblaRef}
            className="overflow-hidden notable slider_placement_dots_law placement_dots_law_left pb-10"
          >
            {/* container */}
            <div className="flex">
              {alumniData.map((item) => (
                <div
                  key={item.id}
                  className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="px-2 sm:px-4">
                    <AlumniCard {...item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/placements/notable-alumni"
            className="
              bg-[#ffb703]
              hover:bg-[#0f4a85]
              hover:border
              hover:border-[#ffb703]
              hover:text-[#ffb703]
              text-[#023047]
              font-semibold
              py-3 px-8
              rounded-xl
              shadow-lg
              transition-colors
              flex items-center cursor-pointer
            "
          >
            VIEW ALL NOTABLE ALUMNI
            <LiaLongArrowAltRightSolid size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotableAlumniSection;