import React, { useState, useRef, useEffect } from "react";
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
const ChevronLeft = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

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
        h-full p-6 rounded-2xl shadow-xl transition-all duration-300 transform
        ${active ? "bg-yellow-500 text-gray-800" : "bg-white text-gray-700"}
        ${active ? "scale-[1.03] shadow-2xl ring-4 ring-yellow-400/50" : ""}
      `}
    >
      <h3 className={`text-2xl mb-4 font-semibold ${active ? "text-gray-900" : "text-blue-600"}`}>{title}</h3>
      <p className="text-base">{description}</p>
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
        <ul className="flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`
          w-3 h-3 rounded-full border border-gray-800 transition-all duration-300
          ${i === current ? "bg-yellow-500 border-yellow-500 w-4 h-4" : ""}
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
              className="w-12 h-12 flex items-center justify-center border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-12 h-12 flex items-center justify-center border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition"
            >
              <ChevronRight size={24} />
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
