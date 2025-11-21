import React, { useState } from "react";
import { festData } from "../../../data/campus-life/events/events-data";
import { useNavigate } from "react-router-dom";

const tabs = [
    { key: "anubhuti", label: "ANUBHUTI" },
    { key: "harmony", label: "HARMONY" },
    { key: "ullas", label: "ULLAS" },
];

const AnnualFest: React.FC = () => {
    const [activeTab, setActiveTab] = useState("anubhuti");
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();


    const data = festData[activeTab];
    const cardsPerPage = 2;

    const nextSlide = () => {
        if (currentIndex + cardsPerPage < data.cards.length) {
            setCurrentIndex(currentIndex + cardsPerPage);
        }
    };

    const prevSlide = () => {
        if (currentIndex - cardsPerPage >= 0) {
            setCurrentIndex(currentIndex - cardsPerPage);
        }
    };

    const visibleCards = data.cards.slice(currentIndex, currentIndex + cardsPerPage);

    return (
        <section className="relative bg-cover bg-center text-white py-30 back cursor-pointer">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between">
                    <h2 className="font50 fw500 mb-2">Annual Fest</h2>
                    <span className="text-sm text-white max-w-3xl mb-8">
                        Shri Ramswaroop Memorial University has a variety of annual festivities each year.
                        These celebrations and festivals give the students a great environment for idea sharing,
                        technological demonstration, creative thinking, and social and cultural efforts.
                    </span>
                </div>

                {/* Tabs */}
                <div className="flex gap-6 border-b border-yellow-200 mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => {
                                setActiveTab(tab.key);
                                setCurrentIndex(0); // reset on tab switch
                            }}
                            className={`pb-2 font-semibold text-sm cursor-pointer tracking-wide relative ${activeTab === tab.key
                                ? "text-yellow-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-yellow-400"
                                : "text-white hover:text-yellow-300"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Main grid */}
                <div className="grid md:grid-cols-[40%_60%] gap-10 items-start">
                    {/* Left column */}
                    <div className="max-w-[480px]">
                        <h3 className="font40 fw500 font-bold mb-4">{data.title}</h3>
                        <span className="text-white leading-relaxed mb-6 block text-justify">
                            {data.description}
                        </span>

                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={prevSlide}
                                disabled={currentIndex === 0}
                                className={`w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                            >
                                &lt;
                            </button>
                            <button
                                onClick={nextSlide}
                                disabled={currentIndex + cardsPerPage >= data.cards.length}
                                className={`w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition ${currentIndex + cardsPerPage >= data.cards.length ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                            >
                                &gt;
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-8 justify-center transition-all duration-500">
                        {visibleCards.map((card, i) => (
                            <div
                                key={i}
                                className="bg-white text-gray-800 w-[400px] rounded-2xl overflow-hidden shadow-md hover:border-2 hover:border-yellow-500 transition-transform hover:-translate-y-1"
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h4 className="font-semibold color_light_blue mt-4 text-lg">{card.title}</h4>
                                    <span className="text-sm text-yellow-500 mb-2">{card.date}</span>
                                    <span className="text-sm text-gray-700 mt-2 line-clamp-2" dangerouslySetInnerHTML={{ __html: card.description }}>
                                    </span>
                                    <button onClick={() => navigate(card.routeKey)} 
                                    className="mt-3 text-sm font-medium cursor-pointer color_light_blue border-1 border-yellow-500 py-2 px-4 rounded-lg hover:bg-yellow-500 flex items-center gap-1">
                                        MORE INFO →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnnualFest;
