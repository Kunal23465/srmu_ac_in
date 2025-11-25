import React, { useState, useEffect } from "react";
import { conferenceData } from "../../../data/campus-life/events/events-data";
import { useNavigate } from "react-router-dom";

const ConferencesSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"conference" | "seminar">("conference");
    const [startIndex, setStartIndex] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(3);
    const navigate = useNavigate();

    // Detect screen size
    useEffect(() => {
        const updateCardsPerPage = () => {
            if (window.innerWidth < 640) {
                setCardsPerPage(1); // on mobile, show only 1 card
            } else {
                setCardsPerPage(3); // on large screens, show 3
            }
        };

        updateCardsPerPage();
        window.addEventListener("resize", updateCardsPerPage);

        return () => window.removeEventListener("resize", updateCardsPerPage);
    }, []);

    const data =
        activeTab === "conference"
            ? conferenceData.conferences
            : conferenceData.seminars;

    const nextSlide = () => {
        if (startIndex + cardsPerPage < data.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const visibleCards = data.slice(startIndex, startIndex + cardsPerPage);

    return (
        <section className="py-16 bg-white text-center">
            <h2 className="font50 fw500 color_light_blue mb-4">Conferences</h2>
            <p className="text-gray-600 w-full mx-auto mb-8">
                SRMU both hosts and participates in a diverse set of academic conferences,
                leveraging these platforms to exchange ideas and delve into emerging
                research concerns across various disciplines.
            </p>

            <div className="flex justify-center gap-4 mb-10">
                <button
                    onClick={() => {
                        setActiveTab("conference");
                        setStartIndex(0);
                    }}
                    className={`px-6 py-3 rounded-lg font-semibold border cursor-pointer ${
                        activeTab === "conference"
                            ? "color_background_blue text-white"
                            : "color_border_blue color_light_blue"
                    }`}
                >
                    CONFERENCE
                </button>
                <button
                    onClick={() => {
                        setActiveTab("seminar");
                        setStartIndex(0);
                    }}
                    className={`px-6 py-3 rounded-lg font-semibold border cursor-pointer ${
                        activeTab === "seminar"
                            ? "color_background_blue text-white"
                            : "color_border_blue color_light_blue"
                    }`}
                >
                    SEMINAR
                </button>
            </div>

            <div className="relative max-w-6xl mx-auto">
                <div className="flex justify-end gap-2 mb-6 pr-2">
                    <button
                        onClick={prevSlide}
                        disabled={startIndex === 0}
                        className={`w-15 h-15 rounded border border-gray-300 flex items-center justify-center hover:bg-[#003366] hover:text-white transition ${
                            startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        &lt;
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={startIndex + cardsPerPage >= data.length}
                        className={`w-15 h-15 rounded border border-gray-300 flex items-center justify-center hover:bg-[#003366] hover:text-white transition ${
                            startIndex + cardsPerPage >= data.length
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                        }`}
                    >
                        &gt;
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
                    {visibleCards.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-white cursor-pointer rounded-2xl hover:border-yellow-500 shadow-md overflow-hidden hover:shadow-lg border border-gray-200 transition"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-5 text-left">
                                <h3 className="text-lg font-semibold color_light_blue mb-1 mt-4">
                                    {card.title}
                                </h3>
                                <span className="text-sm text-yellow-500">
                                    {card.date}
                                </span>
                                <span className="text-gray-600 text-sm line-clamp-3 mt-2 mb-4">
                                    {card.description}
                                </span>
                                <button
                                    onClick={() => navigate(card.routeKey)}
                                    className="text-sm font-semibold border border-yellow-500 color_light_blue py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-white transition flex items-center gap-2"
                                >
                                    MORE INFO →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConferencesSection;
