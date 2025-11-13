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
    };

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

        return () => {
            window.removeEventListener("resize", handleResize);
            sliderElement.removeEventListener("scroll", updatePagination);
        };
    }, [calculateCardWidth, updatePagination]);

    return (
        <div className="w-full max-w-7xl">
            <div className="text-center mb-5">
                <h2 className="font50 fw500">
                    Academic Wings
                </h2>

                <p>
                    Shri Ramswaroop Memorial University (SRMU) features well-defined academic wings, each dedicated to fostering excellence in specific disciplines. These wings, equipped with state-of-the-art classrooms, laboratories, and research facilities, provide a conducive environment for specialized learning and academic exploration. With distinct academic wings, SRMU ensures a focused and comprehensive approach to education, nurturing the intellectual growth of students across various fields.
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
                {CARD_CONTENT.map((data) => (
                    <div
                        key={data.id}
                        className="card group cursor-pointer bg-white min-w-[300px] md:min-w-[350px] lg:min-w-[410px] rounded-sm shadow-xl hover:bg-[#233E6F] hover:text-white hover:shadow-2xl transition duration-300 transform hover:scale-[1.01] p-2"
                    >
                        <img
                            src={data.image}
                            alt={data.title}
                            onError={(e) =>
                            ((e.target as HTMLImageElement).src =
                                "https://placehold.co/600x400/9CA3AF/FFFFFF?text=Image+Load+Error")
                            }
                            className=" w-full h-60 object-cover rounded-tl-sm rounded-tr-sm rounded-bl-sm rounded-br-3xl"
                        />
                        <div className="p-6 hover:text-white">
                            <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-white">
                                {data.title}
                            </h3>
                            <p className="text-sm text-gray-600 group-hover:text-white leading-relaxed">
                                {data.description}
                            </p>
                        </div>
                    </div>
                ))}
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
