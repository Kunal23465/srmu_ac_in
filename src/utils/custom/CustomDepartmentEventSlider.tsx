import React, { useState, useRef, TouchEvent } from "react";
import Classes from "../../utils/styles/Global.module.css";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

export interface SliderRenderProps<T> {
  item: T;
  index: number;
}

export interface SliderProps<T> {
  data: T[];
  renderCard: (props: SliderRenderProps<T>) => React.ReactNode;

  heading: string;
  description?: string;

  bgColor?: string;
  bgImage?: string;

  headingColor?: string;
  descriptionColor?: string;

  arrowColor?: string;
  arrowBorderColor?: string;
  arrowBgColor?: string;
}

const ITEMS_PER_PAGE = 4;

function CustomDepartmentEventSlider<T>({
  data,
  renderCard,
  heading,
  description,

  bgColor = "#ffffff",
  bgImage,

  headingColor = "#000000",
  descriptionColor = "#212529",

  arrowColor = "#000",
  arrowBorderColor = "#000",
  arrowBgColor = "transparent",
}: SliderProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const currentPage = currentIndex / ITEMS_PER_PAGE;

  const trackRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentIndex((p) => p + ITEMS_PER_PAGE);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentIndex((p) => p - ITEMS_PER_PAGE);
    }
  };

  const startX = useRef(0);
  const endX = useRef(0);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) =>
    (startX.current = e.touches[0].clientX);

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) =>
    (endX.current = e.touches[0].clientX);

  const onTouchEnd = () => {
    const distance = startX.current - endX.current;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
  };

  const isAtStart = currentPage === 0;
  const isAtEnd = currentPage >= totalPages - 1;

  const pageWidthPercent = 100 / totalPages;
  const trackWidth = `${totalPages * 100}%`;
  const transformValue = `translateX(-${currentPage * pageWidthPercent}%)`;


  const pages = Array.from({ length: totalPages }, (_, pageIndex) =>
    data.slice(pageIndex * ITEMS_PER_PAGE, (pageIndex + 1) * ITEMS_PER_PAGE)
  );


  return (
    <div
      className="sm:px-4 md:px-14 py-8 md:py-16 lg:py-22 w-full"
      style={{
        background: bgImage ? `url(${bgImage}) center/cover` : bgColor,
      }}
    >
      <div className={`flex flex-col md:flex-row justify-between items-start w-full mb-8 ${Classes["container"]}`}>
        <div className="sm:px-3 w-full md:w-auto mb-4 md:mb-0">
          <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] font-semibold" style={{ color: headingColor }}>
            {heading}
          </h2>

          {description && (
            <p className="mt-2 text-base lg:text-[16px] max-w-4xl" style={{ color: descriptionColor }}>
              {description}
            </p>
          )}
        </div>

        <div className="flex justify-end gap-3 px-3">
          <button
            onClick={handlePrev}
            disabled={isAtStart}
            className={`border-2 w-10 cursor-pointer h-10 md:w-12 md:h-12 flex items-center justify-center text-lg transition font-semibold ${isAtStart ? "opacity-40 cursor-not-allowed" : "hover:opacity-70"
              }`}
            style={{
              borderColor: arrowBorderColor,
              color: arrowColor,
              background: arrowBgColor,
            }}
          >
            <MdKeyboardArrowLeft size="26" />
          </button>

          <button
            onClick={handleNext}
            disabled={isAtEnd}
            className={`border-2 w-10 cursor-pointer h-10 md:w-12 md:h-12 flex items-center justify-center text-lg transition font-semibold ${isAtEnd ? "opacity-40 cursor-not-allowed" : "hover:opacity-70"
              }`}
            style={{
              borderColor: arrowBorderColor,
              color: arrowColor,
              background: arrowBgColor,
            }}
          >
            <MdKeyboardArrowRight size="26" />
          </button>
        </div>
      </div>

      <div className={`overflow-hidden w-full ${Classes["container"]}`} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div
          ref={trackRef}
          className="flex transition-transform duration-700 "
          style={{
            width: trackWidth,
            transform: transformValue,
          }}
        >
          {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="py-5 sm:p-5 shrink-0" style={{ width: `${100 / totalPages}%` }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {page.map((item, index) => (
                  <div key={index} className="col-span-1">
                    {renderCard({ item, index: pageIndex * ITEMS_PER_PAGE + index })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomDepartmentEventSlider;

