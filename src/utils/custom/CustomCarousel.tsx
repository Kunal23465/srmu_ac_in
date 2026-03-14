import React, { useRef, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Classes from "../../utils/styles/Global.module.css";
import { IoIosArrowBack } from "react-icons/io";

interface CustomCarouselProps {
  images: { src: string; alt: string }[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  useEffect(() => {
    setHasMounted(true);

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!emblaApi || !hasMounted) return;

    const onSelect = () => {
      setActiveSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, hasMounted]);

  /** Re-initialize embla when window width changes */
  useEffect(() => {
    if (emblaApi && hasMounted) {
      emblaApi.reInit();
    }
  }, [windowWidth, emblaApi, hasMounted]);

  const getSlidesToShow = useCallback(() => {
    if (windowWidth >= 992) return 3;
    if (windowWidth >= 598) return 2;
    return 1;
  }, [windowWidth]);

  const goToNext = () => emblaApi?.scrollNext();
  const goToPrev = () => emblaApi?.scrollPrev();

  // Get slide width based on slides to show
  const getSlideWidth = () => {
    const slidesToShow = getSlidesToShow();
    return `${100 / slidesToShow}%`;
  };

  // Static grid for SSR
  if (!hasMounted) {
    return (
      <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14 relative campus-crousel`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.slice(0, 3).map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover rounded-lg w-full h-[250px]"
              />
            </div>
          ))}
        </div>

        {/* Custom Arrow Buttons */}
        <div className="flex justify-center items-center space-x-2 mt-5">
          <ArrowButton onClick={() => { }} direction="prev" colorCode="[#ffb703]" disabled />
          <ArrowButton onClick={() => { }} direction="next" colorCode="[#ffb703]" disabled />
        </div>
      </div>
    );
  }

  return (
    <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14 relative campus-crousel`}>
      {/* Embla Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => {
            const isSecondImage = (activeSlide + 1) % images.length === index;
            return (
              <div
                key={index}
                className="flex-shrink-0 flex-grow-0 px-2"
                style={{ flexBasis: getSlideWidth() }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`object-cover rounded-lg transition-all duration-500 h-[250px] ${isSecondImage ? "w-full lg:h-[350px]" : "w-full"
                    }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Arrow Buttons */}
      <div className="flex justify-center items-center space-x-2 mt-5">
        <ArrowButton onClick={goToPrev} direction="prev" colorCode="[#ffb703]" />
        <ArrowButton onClick={goToNext} direction="next" colorCode="[#ffb703]" />
      </div>
    </div>
  );
};

export default CustomCarousel;

export const ArrowButton = ({
  onClick,
  direction,
  colorCode,
  disabled = false
}: {
  onClick: () => void;
  direction: "prev" | "next";
  colorCode: string;
  disabled?: boolean;
}) => (
  <>
    {colorCode === "[#ffb703]" ? (
      <>
        <button
          onClick={onClick}
          disabled={disabled}
          className={`border-2 border-[#ffb703] w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center hover:border-[#233E6F] transition-colors ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
        >
          <IoIosArrowBack
            className={`text-[#ffb703] w-9 h-9 ${direction === "next" ? "transform rotate-180" : ""
              } hover:text-[#ffffff] transition-colors`}
          />
        </button>
      </>
    ) : (
      <>
        <button
          onClick={onClick}
          disabled={disabled}
          className={`border-2 border-${colorCode} w-12 h-12 flex items-center justify-center hover:bg-[#233E6F] transition-colors ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
        >
          <IoIosArrowBack
            className={`text-${colorCode} w-9 h-9 ${direction === "next" ? "transform rotate-180" : ""
              } hover:text-[#ffffff] transition-colors`}
          />
        </button>
      </>
    )}
  </>
);