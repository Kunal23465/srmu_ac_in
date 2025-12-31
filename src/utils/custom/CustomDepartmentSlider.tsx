import React, { useState, useEffect, useRef, TouchEvent } from "react";
import Classes from "../../utils/styles/Global.module.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";


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

    /** NEW PROPS */
    headingColor?: string;
    descriptionColor?: string;

    arrowColor?: string;          // icon
    arrowBorderColor?: string;    // border
    arrowBgColor?: string;        // background color

    breakpoints?: {
        desktop: number;
        tablet: number;
        mobile: number;
    };
}
function CustomDepartmentSlider<T>({
    data,
    renderCard,
    heading,
    description,

    bgColor = "#ffffff",
    bgImage,

    /** NEW DEFAULTS */
    headingColor = "#000000",
    descriptionColor = "#212529",

    arrowColor = "#000",
    arrowBorderColor = "#000",
    arrowBgColor = "transparent",

    breakpoints = { desktop: 3, tablet: 2, mobile: 1 },
}: SliderProps<T>) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(breakpoints.desktop);

    const trackRef = useRef<HTMLDivElement>(null);

    const handleResize = () => {
        if (window.innerWidth <= 600) setCardsPerView(breakpoints.mobile);
        else if (window.innerWidth <= 1024) setCardsPerView(breakpoints.tablet);
        else setCardsPerView(breakpoints.desktop);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNext = () => {
        if (currentIndex < data.length - cardsPerView) setCurrentIndex(p => p + 1);
    };

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(p => p - 1);
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

    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex >= data.length - cardsPerView;

    return (
      <div
        className=" py-22"
        style={{
          background: bgImage ? `url(${bgImage}) center/cover` : bgColor,
        }}
      >
        {/* ===== TOP SECTION ===== */}
        <div
          className={`w-full mb-8 ${Classes["container"]}
                flex flex-col items-start
                md:flex-row md:justify-between md:items-start`}
        >
          {/* LEFT SECTION */}
          <div className="px-3">
            <h1 className="text-[28px] lg:text-[3.125rem] fw500" style={{ color: headingColor }}>
              {heading}
            </h1>

            {description && (
              <p className="mt-2 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]" style={{ color: descriptionColor }}>
                {description}
              </p>
            )}
          </div>

          {/* RIGHT SECTION – ARROWS */}
          <div
            className="
        flex gap-3 px-3
        mt-4
        flex-row              /* always keep arrows in a row */
        md:mt-0 md:justify-end
    "
          >
            {/* LEFT ARROW */}
            <button
              onClick={handlePrev}
              disabled={isAtStart}
              className={`border-2 w-12 h-12 flex items-center justify-center text-lg transition font-semibold ${
                isAtStart ? "opacity-40 cursor-not-allowed" : "hover:cursor-pointer"
              }`}
              style={{
                borderColor: arrowBorderColor,
                color: arrowColor,
                background: arrowBgColor,
              }}
            >
              <MdKeyboardArrowLeft size="26" />
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={handleNext}
              disabled={isAtEnd}
              className={`border-2 w-12 h-12 flex items-center justify-center text-lg transition font-semibold ${
                isAtEnd ? "opacity-40 cursor-not-allowed" : "hover:cursor-pointer"
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

        {/* ===== SLIDER ===== */}
        <div className={`overflow-hidden w-full ${Classes["container"]}`} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          <div
            ref={trackRef}
            className="flex transition-transform duration-700"
            style={{
              width: `${(100 / cardsPerView) * data.length}%`,
              transform: `translateX(-${(100 / cardsPerView) * currentIndex}%)`,
            }}
          >
            {data.map((item, index) => (
              <div key={index} className="p-3" style={{ width: `${100 / cardsPerView}%` }}>
                {renderCard({ item, index })}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default CustomDepartmentSlider;



