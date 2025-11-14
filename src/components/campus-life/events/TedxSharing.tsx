import { useState } from "react";
import tedxData from "../../../data/campus-life/events/events-data";

export default function TedxSharing() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideLeft = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const slideRight = () => {
        if (currentIndex < tedxData.length - 1) setCurrentIndex(currentIndex + 1);
    };

    return (
        <div className="w-full py-10 overflow-hidden">
            <div className="flex items-center justify-between">
                <h2 className="font50 fw600 color_light_blue">Tedx Sharing</h2>

                <div className="flex gap-3">
                    <button
                        onClick={slideLeft}
                        disabled={currentIndex === 0}
                        className={`
              w-12 h-12 border rounded-lg flex items-center justify-center 
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
              w-12 h-12 border rounded-lg flex items-center justify-center
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

            <span className=" mb-6 font18 w-full">
                SRMU has been a pioneer of TEDx events in the region, sparking meaningful conversations and connections based on the mission: "Ideas worth spreading."
            </span>

            <div className="relative w-full overflow-hidden px-3 mt-5 md:px-0">
                <div
                    className="flex gap-6 transition-transform duration-700"
                    style={{
                        transform: `translateX(-${currentIndex * (50 + 3)}%)`,
                    }}
                >
                    {tedxData.map((item) => {
                        const isHover = hoveredId === item.id;

                        return (
                            <div
                                key={item.id}
                                className="
                  max-w-[609px] md:w-1/2 shrink-0 relative rounded-2xl overflow-hidden 
                  cursor-pointer transition-all duration-500
                  hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/20
                "
                                onMouseEnter={() => setHoveredId(item.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-[470px] object-cover block"
                                />

                                <div
                                    className={`
                    absolute inset-0 pointer-events-none transition-all duration-500 z-10
                    ${isHover ? "bg-black/60" : "bg-black/40"}
                  `}
                                />

                                <p
                                    className={`
                    absolute top-6 left-1/2 -translate-x-1/2 z-20
                    font-semibold text-lg drop-shadow-md transition-colors duration-300
                    ${isHover ? "text-yellow-400" : "text-white"}
                  `}
                                >
                                    {item.date}
                                </p>

                                <h3
                                    className={`
                    absolute left-1/2 -translate-x-1/2 text-white text-3xl font-bold 
                    text-center drop-shadow-xl transition-all duration-500 z-20
                    ${isHover ? "top-16" : "bottom-6"}
                  `}
                                >
                                    {item.title}
                                </h3>

                                <div
                                    className={`
                    absolute left-1/2 -translate-x-1/2 w-full px-8 text-center
                    transition-all duration-700 z-20
                    ${isHover ? "opacity-100 bottom-14" : "opacity-0 bottom-0"}
                  `}
                                >
                                    <span className="text-white text-base leading-relaxed max-w-lg mx-auto mb-4">
                                        {item.description}
                                    </span>

                                    <button className="bg-yellow-400 block mx-auto text-black px-6 py-2 rounded-xl font-semibold shadow-md">
                                        VIEW ALL →
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
