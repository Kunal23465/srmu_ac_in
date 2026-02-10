import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Classes from "../../utils/styles/Global.module.css";

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
  const [currentSlidesToShow, setCurrentSlidesToShow] = useState(breakpoints.desktop);

  /** 🔹 Detect screen size on load */
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setCurrentSlidesToShow(breakpoints.mobile);
      } else if (width < 1024) {
        setCurrentSlidesToShow(breakpoints.tablet);
      } else {
        setCurrentSlidesToShow(breakpoints.desktop);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, [breakpoints]);

  const infinite = data.length > currentSlidesToShow;

  const settings = {
    dots: false,
    arrows: false,
    infinite,
    speed: 600,
    slidesToShow: currentSlidesToShow,
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
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: breakpoints.mobile,
        },
      },
    ],
  };

  const prev = () => sliderRef.current?.slickPrev();
  const next = () => sliderRef.current?.slickNext();

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
      <div className={`${Classes["container"]} px-4`}>
        {/* 🔥 Heading + Arrows */}
        <div className="flex items-center justify-between mb-6">
          {heading && (
            <h2 className="font-semibold" style={{ color: headingColor, fontSize: "2.5rem" }}>
              {heading}
            </h2>
          )}

          <div className="flex gap-4">
            <button
              onClick={prev}
              disabled={!infinite || isSliding}
              className={`w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-800 bg-white rounded-full transition
                ${!infinite || isSliding ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}`}
            >
              <MdKeyboardArrowLeft size={26} />
            </button>

            <button
              onClick={next}
              disabled={!infinite || isSliding}
              className={`w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-800 bg-white rounded-full transition
                ${!infinite || isSliding ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}`}
            >
              <MdKeyboardArrowRight size={26} />
            </button>
          </div>
        </div>

        {/* Description */}
        {description && (
          <p className="mb-10 max-w-4xl " style={{ color: descriptionColor }}>
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
