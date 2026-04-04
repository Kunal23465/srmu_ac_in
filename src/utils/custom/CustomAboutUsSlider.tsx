import React, { useState, useRef, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

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
      <h2 className={`text-2xl mb-4 font-semibold text-[#0f4a85]`}>{title}</h2>
      <p className="text-[15.945px]">{description}</p>
    </div>
  );
};

/* ---------------- SLIDER ---------------- */
const CustomAboutUsSlider: React.FC<Props> = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCurrent(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Function to determine slidesToShow based on window width
  const getSlidesToShow = useCallback(() => {
    if (windowWidth >= 1400) return 3;
    if (windowWidth >= 1024) return 2;
    return 1;
  }, [windowWidth]);

  const goToNext = () => emblaApi?.scrollNext();
  const goToPrev = () => emblaApi?.scrollPrev();

  // Get slide width based on window width
  const getSlideWidth = () => {
    const slidesToShow = getSlidesToShow();
    return `${100 / slidesToShow}%`;
  };

  // Force re-initialization when window width changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [windowWidth, emblaApi]);

  /* Highlight logic (same as your custom slider) */
  const highlightedIndex = windowWidth < 1024 ? selectedIndex : (selectedIndex + 1) % data.items.length;

  // Custom dots - scroll to specific slide
  const scrollTo = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  return (
    <div className="w-full flex justify-center py-16 sm:px-4 font-inter">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12">
        {/* LEFT SECTION */}
        <div className="flex flex-col w-[300px] lg:sticky lg:top-8">
          <h2 className="text-[28px] lg:text-[3.125rem] fw600 mb-4">
            {data.heading.split(" ").map((w, i) => (
              <span key={i} className="block">
                {w}
              </span>
            ))}
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-sm">{data.subheading}</p>

          <div className="flex gap-4">
            <button
              onClick={goToPrev}
              className="text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer"
            >
              <MdKeyboardArrowLeft size="26" />
            </button>

            <button
              onClick={goToNext}
              className="text-gray-700 hover:text-white hover:bg-[#ffb703] hover:border-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer"
            >
              <MdKeyboardArrowRight size="26" />
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:max-w-[calc(100%-300px)]">
          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {data.items.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex-grow-0 sm:px-3 py-4"
                  style={{ flexBasis: getSlideWidth() }}
                >
                  <WhyCard
                    {...item}
                    highlight={highlightedIndex === index}
                    hovered={hoveredIndex === index}
                    setHovered={(v) => setHoveredIndex(v ? index : null)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Custom Dots - exactly matching original design */}
          <div className="mt-14">
            <ul className="flex justify-center gap-0 list-none!">
              {data.items.map((_, index) => (
                <li
                  key={index}
                  className="mx-1"
                  onClick={() => scrollTo(index)}
                >
                  <div
                    className={`
                      w-5 h-5 rounded-full border border-[#023047] transition-all duration-300 cursor-pointer
                      ${index === selectedIndex ? "bg-[#023047] border-[#023047] w-5 h-5" : ""}
                    `}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAboutUsSlider;