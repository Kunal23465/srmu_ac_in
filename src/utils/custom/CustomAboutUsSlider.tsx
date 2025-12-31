import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";

/* ---------------- TYPES ---------------- */
type WhyItem = {
  title: string;
  description: string;
};

type WhySliderData = {
  heading: string;
  subheading: string;
  items: WhyItem[];
};

type Props = {
  data: WhySliderData;
};

/* ---------------- ICONS ---------------- */


/* ---------------- CARD ---------------- */
const WhyCard: React.FC<
  WhyItem & {
    highlight?: boolean;
    hovered: boolean;
    setHovered: (v: boolean) => void;
  }
> = ({ title, description, highlight, hovered, setHovered }) => {
  const active = highlight || hovered;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        h-full px-8 py-12 rounded-2xl shadow-xl transition-all duration-300 transform
        ${active ? "bg-yellow-500 text-gray-800" : "bg-white text-gray-700"}
      `}
    >
      <h3 className={`text-2xl mb-4 font-semibold text-[#0f4a85]`}>{title}</h3>
      <p className="text-[15.945px]">{description}</p>
    </div>
  );
};

/* ---------------- SLIDER ---------------- */
const CustomAboutUsSlider: React.FC<Props> = ({ data }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [current, setCurrent] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to determine slidesToShow based on window width
  const getSlidesToShow = () => {
    if (windowWidth >= 1400) return 3;
    if (windowWidth >= 1024) return 2;

    return 1;
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    centerMode: false,
    beforeChange: (_: number, next: number) => setCurrent(next),
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-14">
        <ul className="flex justify-center gap-0">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`
          w-4 h-4 rounded-full border border-[#023047] transition-all duration-300
          ${i === current ? "bg-[#023047] border-[#023047] w-5 h-5" : ""}
        `}
      />
    ),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  /* Highlight logic (same as your custom slider) */
  const highlightedIndex = window.innerWidth < 1024 ? current : (current + 1) % data.items.length;

  return (
    <div className="w-full flex justify-center py-16 px-4 font-inter">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12">
        {/* LEFT SECTION */}
        <div className="flex flex-col w-[300px] lg:sticky lg:top-8">
          <h2 className="text-[28px]  lg:text-[3.125rem] fw600 mb-4">
            {data.heading.split(" ").map((w, i) => (
              <span key={i} className="block">
                {w}
              </span>
            ))}
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-sm">{data.subheading}</p>

          <div className="flex gap-4">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer"
            >
              <MdKeyboardArrowLeft size="26" />
            </button>

            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer"
            >
              <MdKeyboardArrowRight size="26" />
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:max-w-[calc(100%-300px)]">
          <Slider ref={sliderRef} {...settings}>
            {data.items.map((item, index) => (
              <div key={index} className="px-3 py-4">
                <WhyCard {...item} highlight={highlightedIndex === index} hovered={hoveredIndex === index} setHovered={(v) => setHoveredIndex(v ? index : null)} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CustomAboutUsSlider;
