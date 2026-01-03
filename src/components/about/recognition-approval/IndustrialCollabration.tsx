import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* -------------------- Arrow Buttons -------------------- */

const NextArrow = ({ disabled, onClick }: { disabled: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703]
      bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full
      border border-gray-200 z-10
      ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
  >
    <MdKeyboardArrowRight size={26} />
  </button>
);

const PrevArrow = ({ disabled, onClick }: { disabled: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703]
      bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full
      border border-gray-200 z-10
      ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
  >
    <MdKeyboardArrowLeft size={26} />
  </button>
);

/* -------------------- Slider -------------------- */

type Breakpoints = {
  desktop: number;
  tablet: number;
  mobile: number;
};

type CustomDepartmentSliderProps<T> = {
  heading?: string;
  description?: string;
  data: T[];
  renderCard: ({ item, index }: { item: T; index: number }) => React.ReactNode;

  bgColor?: string;
  bgImage?: string;

  headingColor?: string;
  descriptionColor?: string;

  breakpoints: Breakpoints;
};

const CustomDepartmentSlider = <T,>({
  heading,
  description,
  data,
  renderCard,
  bgColor = "transparent",
  bgImage,
  headingColor = "#000",
  descriptionColor = "#666",
  breakpoints,
}: CustomDepartmentSliderProps<T>) => {
  const sliderRef = useRef<Slider | null>(null);
  const [isSliding, setIsSliding] = useState(false);

  const slidesToShow = breakpoints.desktop;
  const infinite = data.length > slidesToShow;

  const settings = {
    dots: false,
    arrows: false, // ❌ disable slick arrows
    infinite,
    speed: 600,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    beforeChange: () => setIsSliding(true),
    afterChange: () => setIsSliding(false),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: breakpoints.tablet,
          infinite: data.length > breakpoints.tablet,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: breakpoints.mobile,
          infinite: data.length > breakpoints.mobile,
        },
      },
    ],
  };

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  return (
    <section
      className="py-16"
      style={{
        backgroundColor: bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4">
        {/* 🔥 Heading + Custom Arrows */}
        <div className="flex items-center justify-between mb-6">
          {heading && (
            <h2 className="font-semibold" style={{ color: headingColor, fontSize: "2.5rem" }}>
              {heading}
            </h2>
          )}

          <div className="flex gap-4">
            <PrevArrow onClick={handlePrev} disabled={!infinite || isSliding} />
            <NextArrow onClick={handleNext} disabled={!infinite || isSliding} />
          </div>
        </div>

        {description && (
          <p className="mb-10 max-w-4xl" style={{ color: descriptionColor }}>
            {description}
          </p>
        )}

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {data.map((item, index) => (
            <div key={index} className="px-3">
              {renderCard({ item, index })}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomDepartmentSlider;
