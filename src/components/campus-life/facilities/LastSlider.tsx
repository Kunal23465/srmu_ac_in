import React, { useState, useRef, useEffect, useCallback } from "react";
import { CARD_CONTENT } from "../../../data/campus-life/facilities/facilities-data";

const LastSlider: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const dragState = useRef({
        isDown: false,
        startX: 0,
        scrollLeft: 0,
        cardWidth: 0,
    });

    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedCard, setSelectedCard] = useState<number | null>(null); // ← highlight tapped card on mobile

    const calculateCardWidth = useCallback(() => {
        const sliderElement = sliderRef.current;
        if (!sliderElement) return 0;

        const firstCard = sliderElement.querySelector(".card") as HTMLElement;
        if (firstCard) {
            const cardRect = firstCard.getBoundingClientRect();
            const width = cardRect.width + 24;
            dragState.current.cardWidth = width;
            return width;
        }
        return 0;
    }, []);

    const updatePagination = useCallback(() => {
        const sliderElement = sliderRef.current;
        const width = dragState.current.cardWidth;

        if (!sliderElement || width === 0) return;

        const scrollPos = sliderElement.scrollLeft;
        const threshold = width / 2;
        let newActiveIndex = 0;

        for (let i = 0; i < CARD_CONTENT.length; i++) {
            const cardPosition = i * width;
            if (scrollPos + threshold >= cardPosition) {
                newActiveIndex = i;
            }
        }
        setActiveIndex(newActiveIndex);
    }, []);

    const handleMouseDownOrTouchStart = (e: React.MouseEvent | React.TouchEvent) => {
        const sliderElement = sliderRef.current;
        if (!sliderElement) return;

        const eventX = "touches" in e ? e.touches[0].pageX : e.pageX;

        dragState.current.isDown = true;
        sliderElement.style.scrollBehavior = "auto";
        sliderElement.classList.add("dragging");

        dragState.current.startX = eventX - sliderElement.offsetLeft;
        dragState.current.scrollLeft = sliderElement.scrollLeft;
    };

    const handleMouseUpOrTouchEnd = () => {
        dragState.current.isDown = false;
        const sliderElement = sliderRef.current;
        if (sliderElement) {
            sliderElement.style.scrollBehavior = "smooth";
            sliderElement.classList.remove("dragging");
        }
    };

    const handleMouseMoveOrTouchMove = (e: React.MouseEvent | React.TouchEvent) => {
        const sliderElement = sliderRef.current;
        if (!dragState.current.isDown || !sliderElement) return;
        e.preventDefault();

        const eventX = "touches" in e ? e.touches[0].pageX : e.pageX;
        const x = eventX - sliderElement.offsetLeft;
        const walk = x - dragState.current.startX;
        sliderElement.scrollLeft = dragState.current.scrollLeft - walk;
    };

    const handleDotClick = (index: number) => {
        const sliderElement = sliderRef.current;
        const width = dragState.current.cardWidth;
        if (!sliderElement || width === 0) return;

        const targetScrollLeft = index * width;
        sliderElement.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
        setActiveIndex(index);
        setSelectedCard(null); // reset selection when using dots
    };

    // Reset selected card when user scrolls
    const resetTapOnScroll = useCallback(() => {
        setSelectedCard(null);
    }, []);

    useEffect(() => {
        const sliderElement = sliderRef.current;
        if (!sliderElement) return;

        const initialWidth = calculateCardWidth();
        if (initialWidth > 0) updatePagination();

        const handleResize = () => {
            calculateCardWidth();
            updatePagination();
        };
        window.addEventListener("resize", handleResize);

        sliderElement.addEventListener("scroll", updatePagination);
        sliderElement.addEventListener("scroll", resetTapOnScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            sliderElement.removeEventListener("scroll", updatePagination);
            sliderElement.removeEventListener("scroll", resetTapOnScroll);
        };
    }, [calculateCardWidth, updatePagination, resetTapOnScroll]);

    return (
      <div className="w-full max-w-7xl">
        <div className="text-center mb-5">
          <h2 className="text-[28px] lg:text-[3.125rem] font-medium text-[#023047] fw600">Academic Wings</h2>

          <p className="w-[82%] pb-10  mx-auto text-[15px] lg:text-[16px] md:text-[15px] sm:text-[15px]">
            Shri Ramswaroop Memorial University (SRMU) features well-defined academic wings, each dedicated to fostering excellence in specific disciplines. These wings, equipped
            with state-of-the-art classrooms, laboratories, and research facilities, provide a conducive environment for specialized learning and academic exploration. With
            distinct academic wings, SRMU ensures a focused and comprehensive approach to education, nurturing the intellectual growth of students across various fields.
          </p>
        </div>

        <div
          ref={sliderRef}
          className="flex space-x-6 pb-4 overflow-x-scroll hide-scrollbar transition-all duration-300 ease-in-out"
          onMouseDown={handleMouseDownOrTouchStart}
          onMouseLeave={handleMouseUpOrTouchEnd}
          onMouseUp={handleMouseUpOrTouchEnd}
          onMouseMove={handleMouseMoveOrTouchMove}
          onTouchStart={handleMouseDownOrTouchStart}
          onTouchEnd={handleMouseUpOrTouchEnd}
          onTouchCancel={handleMouseUpOrTouchEnd}
          onTouchMove={handleMouseMoveOrTouchMove}
        >
          {CARD_CONTENT.map((data) => {
            //@ts-ignore
            const isActive = selectedCard === data.id;

            return (
              <div
                key={data.id}
                //@ts-ignore
                onClick={() => setSelectedCard(data.id)}
                className={`card group cursor-pointer min-w-[300px] md:min-w-[350px] lg:min-w-[410px]
                                rounded-sm shadow-xl transition duration-300 transform p-2
                                hover:scale-[1.01]
                                ${isActive ? "bg-[#233E6F] text-white shadow-2xl scale-[1.01]" : "bg-white hover:bg-[#233E6F] hover:text-white hover:shadow-2xl"}
                            `}
              >
                <img
                  src={data.image}
                  alt={data.title}
                  onError={(e) => ((e.target as HTMLImageElement).src = "https://placehold.co/600x400/9CA3AF/FFFFFF?text=Image+Load+Error")}
                  className="w-full h-60 object-cover rounded-tl-sm rounded-tr-sm rounded-bl-sm rounded-br-3xl"
                />

                <div className="p-6">
                  <h3
                    className={`font18 fw600  mb-3 group-hover:text-white 
                                        ${isActive ? "text-white" : "text-gray-800"}
                                    `}
                  >
                    {data.title}
                  </h3>

                  <p
                    className={` leading-relaxed group-hover:text-white text-[15px] lg:text-[16px] md:text-[15px] sm:text-[15px]
                                        ${isActive ? "" : ""}
                                    `}
                  >
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {CARD_CONTENT.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full border border-gray-500 cursor-pointer transition duration-300 
                            ${index === activeIndex ? "bg-white" : "bg-white/70"}`}
            ></div>
          ))}
        </div>
      </div>
    );
};

export default LastSlider;
