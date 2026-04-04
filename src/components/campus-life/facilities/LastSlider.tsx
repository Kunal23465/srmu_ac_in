import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CARD_CONTENT } from "../../../data/campus-life/facilities/facilities-data";
import Classes from "../../../utils/styles/Global.module.css";

const LastSliderSlick: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
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
      setActiveIndex(emblaApi.selectedScrollSnap());
      setSelectedCard(null);
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

  // Function to determine slidesToShow based on window width
  const getSlidesToShow = useCallback(() => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 640) return 2;
    return 1;
  }, [windowWidth]);

  // Get slide width based on slides to show
  const getSlideWidth = () => {
    const slidesToShow = getSlidesToShow();
    return `${100 / slidesToShow}%`;
  };

  // Scroll to specific slide for dots
  const scrollTo = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  return (
    <div className={Classes["container"]}>
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] font-medium text-[#023047] fw600">
          Academic Wings
        </h2>

        <p className="w-full sm:w-[82%] pb-5 ms:pb-10 mx-auto text-sm lg:text-[16px]">
          Shri Ramswaroop Memorial University (SRMU) features well-defined academic wings, each dedicated to fostering excellence in specific disciplines. These wings, equipped with state-of-the-art classrooms, laboratories, and research facilities, provide a conducive environment for specialized learning and academic exploration. With distinct academic wings, SRMU ensures a focused and comprehensive approach to education, nurturing the intellectual growth of students across various fields.
        </p>
      </div>

      {/* Static grid for SSR */}
      {!hasMounted && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {CARD_CONTENT.slice(0, 3).map((data, i) => (
            <div key={data.id} className="sm:px-3 h-full">
              {/* CARD */}
              <div
                className={`group cursor-pointer rounded-sm shadow-xl transition duration-300 transform p-2
                  flex ${i % 2 === 0 ? "flex-col" : "flex-col-reverse"} h-full
                `}
              >
                {/* IMAGE */}
                <img
                  src={data.image}
                  alt={data.title}
                  onError={(e) => ((e.target as HTMLImageElement).src = "https://placehold.co/600x400/9CA3AF/FFFFFF?text=Image+Error")}
                  className="w-full h-60 object-cover rounded-tl-sm rounded-tr-sm rounded-bl-sm rounded-br-3xl"
                />

                {/* CONTENT */}
                <div className="px-1 py-4 sm:p-6 flex flex-col flex-grow">
                  <h2 className="text-[15px] sm:text-lg font-semibold mb-1 sm:mb-3 text-gray-900">
                    {data.title}
                  </h2>

                  <p className="leading-relaxed text-black text-sm lg:text-[16px] flex-grow">
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Embla Carousel */}
      {hasMounted && (
        <>
          <div className="overflow-hidden mt-8" ref={emblaRef}>
            <div className="flex">
              {CARD_CONTENT.map((data, i) => {
                const isActive = selectedCard === i;

                return (
                  <div
                    key={data.id}
                    className="flex-shrink-0 flex-grow-0 sm:px-3 h-full"
                    style={{ flexBasis: getSlideWidth() }}
                  >
                    {/* CARD */}
                    <div
                      onClick={() => setSelectedCard(i)}
                      className={`group cursor-pointer rounded-sm shadow-xl transition duration-300 transform p-2
                        flex ${i % 2 === 0 ? "flex-col" : "flex-col-reverse"} h-full
                        hover:scale-[1.01]
                        ${isActive ? "bg-[#233E6F] text-white shadow-2xl scale-[1.01]" : "bg-white hover:bg-[#233E6F] hover:text-white hover:shadow-2xl"}
                      `}
                    >
                      {/* IMAGE */}
                      <img
                        src={data.image}
                        alt={data.title}
                        onError={(e) => ((e.target as HTMLImageElement).src = "https://placehold.co/600x400/9CA3AF/FFFFFF?text=Image+Error")}
                        className="w-full h-60 object-cover rounded-tl-sm rounded-tr-sm rounded-bl-sm rounded-br-3xl"
                      />

                      {/* CONTENT */}
                      <div className="px-1 py-4 sm:p-6 flex flex-col flex-grow">
                        <h2 className={`text-[15px] sm:text-lg font-semibold mb-1 sm:mb-3 group-hover:text-white ${isActive ? "text-white" : "text-gray-900"
                          }`}>
                          {data.title}
                        </h2>

                        <p className="leading-relaxed text-black text-sm lg:text-[16px] group-hover:text-white flex-grow">
                          {data.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Custom Dots */}
          <div className="mt-8">
            <ul className="flex justify-center sm:gap-2">
              {CARD_CONTENT.map((_, index) => (
                <li key={index} className="mx-1">
                  <button
                    onClick={() => scrollTo(index)}
                    className={`w-4 h-4 rounded-full border-2 border-white transition duration-300 ${index === activeIndex ? "bg-white scale-125" : "bg-transparent"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default LastSliderSlick;