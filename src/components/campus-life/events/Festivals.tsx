import React, { useState } from "react";
import { festivalsData } from "../../../data/campus-life/events/events-data";
import { useNavigate } from "react-router-dom";

const Festivals: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [startCard, setStartCard] = useState(0);
    const navigate = useNavigate();


    const activeFestival = festivalsData[activeIndex];
    const visibleCards = 3;
    const totalCards = activeFestival.cards.length;

    const next = () => {
        setStartCard((prev) =>
            prev + visibleCards >= totalCards ? 0 : prev + visibleCards
        );
    };

    const prev = () => {
        setStartCard((prev) =>
            prev === 0 ? totalCards - visibleCards : prev - visibleCards
        );
    };

    return (
        <section className="bg-white text-gray-800">
            <div className="relative text-white py-20 flex flex-col items-center justify-between text-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center back"></div>

                <div className="absolute inset-0 bg-opacity-60"></div>

                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
                        Festivals
                    </h2>

                    <p className="max-w-3xl mx-auto text-base md:text-lg">
                        The SRMU community celebrates various Indian festivals, shaping an
                        atmosphere of harmony and unity. Each festival becomes a lively
                        tapestry of cultural expressions, bringing students, faculty, and
                        staff together to share these rich traditions.
                    </p>
                </div>

                <div className="absolute bottom-0 leading-relaxed cursor-pointer left-1/2 transform -translate-x-1/2 flex justify-center gap-8 z-10">
                    {festivalsData.map((festival, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setActiveIndex(idx);
                                setStartCard(0);
                            }}
                            className={`relative font-semibold text-lg pb-2 transition-all duration-300 ${activeIndex === idx
                                ? "text-yellow-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-yellow-400"
                                : "text-white hover:text-yellow-400"
                                }`}
                        >
                            {festival.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-12">
                <div className="flex justify-between">
                    <h3 className="text-2xl font-bold mb-2 text-[#002D62]">
                        {activeFestival.name}
                    </h3>

                    <div className="flex justify-end gap-3 mb-6">
                        <button
                            onClick={prev}
                            className="w-10 h-10 border border-[#002D62] text-[#002D62] flex items-center justify-center rounded hover:bg-[#002D62] hover:text-white transition"
                        >
                            &lt;
                        </button>
                        <button
                            onClick={next}
                            className="w-10 h-10 border border-[#002D62] text-[#002D62] flex items-center justify-center rounded hover:bg-[#002D62] hover:text-white transition"
                        >
                            &gt;
                        </button>
                    </div>
                </div>
                <span className=" leading-relaxed  whitespace-pre-line text-justify">
                    {activeFestival.description}
                </span>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 transition-all duration-500">
                    {activeFestival.cards
                        .slice(startCard, startCard + visibleCards)
                        .map((card, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl hover:border-1 cursor-pointer hover:border-yellow-500 shadow-md h-[500px] overflow-hidden hover:shadow-xl transition border border-gray-100 flex flex-col"
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-64 object-cover"
                                />

                                <div className="flex flex-col justify-between flex-1 p-5">
                                    <div>
                                        <h4 className="font18 fw600 text-lg color_light_blue">
                                            {card.title}
                                        </h4>
                                        <span className="font14 mb-4 text-yellow-500">
                                            {card.date}
                                        </span>
                                        <span className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                                            {card.description}
                                        </span>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            onClick={() => navigate(card.routeKey)} 
                                            className="text-sm font-semibold border border-yellow-500 color_light_blue py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-white transition flex items-center gap-2 w-fit"
                                        >
                                            MORE INFO →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

            </div>
        </section>
    );
};

export default Festivals;
