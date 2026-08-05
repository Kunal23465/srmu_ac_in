import React, { useRef, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
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
  const [hasMounted, setHasMounted] = useState(false);
  const [currentSlidesToShow, setCurrentSlidesToShow] = useState(breakpoints.desktop);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: data.length > currentSlidesToShow,
      align: "start",
      skipSnaps: false,
      dragFree: false,
    },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ]
  );

  /** 🔹 Detect screen size on load - SSR safe */
  useEffect(() => {
    setHasMounted(true);

    const updateSlides = () => {
      if (typeof window === "undefined") return;

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

  /** 🔹 Re-initialize embla when slidesToShow changes */
  useEffect(() => {
    if (emblaApi && hasMounted) {
      emblaApi.reInit({
        loop: data.length > currentSlidesToShow,
      });
    }
  }, [currentSlidesToShow, emblaApi, data.length, hasMounted]);

  /** 🔹 Handle slide change events */
  useEffect(() => {
    if (!emblaApi || !hasMounted) return;

    const onSelect = () => {
      // You can add any slide change logic here if needed
    };

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, hasMounted]);

  const infinite = data.length > currentSlidesToShow;

  const prev = () => {
    if (!infinite || !emblaApi) return;
    if (!emblaApi.canScrollPrev()) return;
    emblaApi.scrollPrev();
  };

  const next = () => {
    if (!infinite || !emblaApi) return;
    if (!emblaApi.canScrollNext()) return;
    emblaApi.scrollNext();
  };

  // Get slide width based on current slides to show
  const getSlideWidth = () => {
    return `${100 / currentSlidesToShow}%`;
  };

  // Don't render slider until after mount to prevent SSR mismatch
  if (!hasMounted) {
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
          {/* 🔥 Heading + Arrows (static) */}
          <div className="flex items-center justify-between mb-6">
            {heading && (
              <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] font-semibold" style={{ color: headingColor }}>
                {heading}
              </h2>
            )}

            <div className="flex gap-4">
              <button
                disabled
                className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-800 bg-white rounded-full opacity-40 cursor-not-allowed"
              >
                <MdKeyboardArrowLeft size={26} />
              </button>

              <button
                disabled
                className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-800 bg-white rounded-full opacity-40 cursor-not-allowed"
              >
                <MdKeyboardArrowRight size={26} />
              </button>
            </div>
          </div>

          {/* Description */}
          {description && (
            <p className="mb-10 max-w-4xl" style={{ color: descriptionColor }}>
              {description}
            </p>
          )}

          {/* Static Grid for SSR */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.slice(0, currentSlidesToShow).map((item, index) => (
              <div key={index} className="px-3">
                {renderCard({ item, index })}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
            <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] font-semibold" style={{ color: headingColor }}>
              {heading}
            </h2>
          )}

          <div className="flex gap-4">
            <button
              onClick={prev}
              disabled={!infinite || !emblaApi?.canScrollPrev()}
              className={`w-12 h-12 cursor-pointer flex items-center justify-center border-2 border-gray-300 text-gray-800 bg-white rounded-full transition
                ${!infinite || !emblaApi?.canScrollPrev() ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}`}
            >
              <MdKeyboardArrowLeft size={26} />
            </button>

            <button
              onClick={next}
              disabled={!infinite || !emblaApi?.canScrollNext()}
              className={`w-12 h-12 cursor-pointer flex items-center justify-center border-2 border-gray-300 text-gray-800 bg-white rounded-full transition
                ${!infinite || !emblaApi?.canScrollNext() ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}`}
            >
              <MdKeyboardArrowRight size={26} />
            </button>
          </div>
        </div>

        {/* Description */}
        {description && (
          <p className="mb-10 max-w-4xl" style={{ color: descriptionColor }}>
            {description}
          </p>
        )}

        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex-grow-0 px-3"
                style={{ flexBasis: getSlideWidth() }}
              >
                {renderCard({ item, index })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDepartmentSlider;