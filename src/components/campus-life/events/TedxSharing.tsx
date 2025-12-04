import { useState, useEffect } from "react";
import tedxData from "../../../data/campus-life/events/events-data";
import { useNavigate } from "react-router-dom";

export default function TedxSharing() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [openedId, setOpenedId] = useState<string | null>(null); 
    const [isMobile, setIsMobile] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    // Detect mobile screen
    useEffect(() => {
        const updateSize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        updateSize();
        window.addEventListener("resize", updateSize);

        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const slideLeft = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const slideRight = () => {
        if (currentIndex < tedxData.length - 1)
            setCurrentIndex(currentIndex + 1);
    };

    // Mobile card expand toggle
    const handleCardToggle = (id: string) => {
        if (!isMobile) return;
        setOpenedId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="w-full py-10 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-[28px] sm:text-[28px] lg:text-[3.125rem] fw600 color_light_blue">
                    Tedx Sharing
                </h2>

                <div className="flex gap-3">
                    <button
                        onClick={slideLeft}
                        disabled={currentIndex === 0}
                        className={`
                            w-10 h-10 md:w-12 md:h-12 border rounded-lg flex items-center justify-center 
                            transition-all
                            ${currentIndex === 0 
                                ? "opacity-40 cursor-not-allowed"
                                : "hover:bg-gray-200 cursor-pointer"}
                        `}
                    >
                        ←
                    </button>

                    <button
                        onClick={slideRight}
                        disabled={currentIndex === tedxData.length - 1}
                        className={`
                            w-10 h-10 md:w-12 md:h-12 border rounded-lg flex items-center justify-center
                            transition-all
                            ${currentIndex === tedxData.length - 1
                                ? "opacity-40 cursor-not-allowed"
                                : "hover:bg-gray-200 cursor-pointer"}
                        `}
                    >
                        → 
                    </button>
                </div>
            </div>

            {/* Subtitle */}
            <span className="mb-6 lg:text-[15px] text-[14px] sm:text-[14px] w-full block mt-2">
                SRMU has been a pioneer of TEDx events in the region, sparking
                meaningful conversations based on the mission:
                "Ideas worth spreading."
            </span>

            {/* Carousel */}
            <div className="relative w-full overflow-hidden px-3 mt-5 md:px-0">
                <div
                    className="flex gap-6 transition-transform duration-700"
                    style={{
                        transform: `translateX(-${currentIndex * (50 + 3)}%)`,
                    }}
                >
                    {tedxData.map((item) => {
                        // desktop/tablet = hover
                        const isHover = hoveredId === item.id;
                        // mobile = click toggle
                        const isOpenMobile = openedId === item.id;
                        const showDetails = isMobile ? isOpenMobile : isHover;

                        return (
                            <div
                                key={item.id}
                                onMouseEnter={() => !isMobile && setHoveredId(item.id)}
                                onMouseLeave={() => !isMobile && setHoveredId(null)}
                                onClick={() => handleCardToggle(item.id)}
                                className={`
                                    w-[85%] sm:w-[70%] md:w-1/2 max-w-[609px] shrink-0 
                                    relative rounded-2xl overflow-hidden cursor-pointer
                                    transition-all duration-500
                                    hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/20
                                    ${isMobile ? "flex flex-col justify-end" : ""}
                                `}
                            >
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`w-full h-64 sm:h-80 md:h-[470px] object-cover 
                                        ${isMobile ? "absolute inset-0" : ""}
                                    `}
                                />

                                {/* Dark overlay */}
                                <div
                                    className={`
                                        absolute inset-0 transition-all duration-500 z-10
                                        ${showDetails ? "bg-black/60" : "bg-black/40"}
                                    `}
                                />

                                {/* MOBILE VERSION */}
                                {isMobile ? (
                                    <div className="relative z-20 p-4 md:p-6 mt-auto">
                                        <p
                                            className={`
                                                font-semibold text-sm md:text-lg drop-shadow-md mb-2
                                                ${showDetails ? "text-yellow-400" : "text-white"}
                                            `}
                                        >
                                            {item.date}
                                        </p>

                                        <h3 className="text-white lg:text-xl sm:text-sm md:text-md font-bold drop-shadow-xl mb-2 text-center">
                                            {item.title}
                                        </h3>

                                        <div
                                            className={`
                                                overflow-hidden transition-all duration-500 text-center
                                                ${showDetails ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                                            `}
                                        >
                                            <p className="text-xs sm:text-xs text-white mb-4">
                                                {item.description}
                                            </p>

                                            <button
                                                onClick={() => navigate(item.routeKey)}
                                                className="
                                                    bg-yellow-400 block mx-auto text-black 
                                                    lg:px-4 lg:py-2 md:px-6 md:py-2
                                                    rounded-xl font-semibold shadow-md 
                                                    text-sm md:text-base sm:px-2 sm:py-1
                                                "
                                            >
                                                VIEW ALL →
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    /* DESKTOP/TABLET VERSION */
                                    <>
                                        <p
                                            className={`
                                                absolute top-3 md:top-6 left-1/2 -translate-x-1/2 z-20
                                                font-semibold text-sm md:text-lg drop-shadow-md transition-colors
                                                ${showDetails ? "text-yellow-400" : "text-white"}
                                            `}
                                        >
                                            {item.date}
                                        </p>

                                        <h3
                                            className={`
                                                absolute left-1/2 -translate-x-1/2 text-white 
                                                text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-xl text-center
                                                transition-all duration-500 z-20
                                                ${showDetails ? "top-10" : "bottom-4 md:bottom-6"}
                                            `}
                                        >
                                            {item.title}
                                        </h3>

                                        <div
                                            className={`
                                                absolute left-1/2 -translate-x-1/2 w-full px-4 md:px-8 text-center
                                                transition-all duration-700 z-20
                                                ${showDetails ? "opacity-100 bottom-10 md:bottom-14" : "opacity-0 bottom-0"}
                                            `}
                                        >
                                            <span className="text-xs sm:text-sm md:text-base leading-relaxed max-w-sm mx-auto mb-3 text-white">
                                                {item.description}
                                            </span>

                                            <button
                                                onClick={() => navigate(item.routeKey)}
                                                className="
                                                    bg-yellow-400 block mx-auto text-black 
                                                    px-4 py-2 md:px-6 md:py-2 
                                                    rounded-xl font-semibold shadow-md text-sm md:text-base
                                                "
                                            >
                                                VIEW ALL →
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
