import React, { useState } from "react";
import { conferenceData } from "../../../data/campus-life/events/events-data";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    image: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, image }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 max-w-2xl w-[90%] text-gray-800 relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
                >
                    &times;
                </button>
                <img src={image} alt={title} className="w-full h-64 object-cover rounded-xl mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

const ConferencesSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"conference" | "seminar">("conference");
    const [startIndex, setStartIndex] = useState(0);
    const [selectedCard, setSelectedCard] = useState<any>(null);

    const data =
        activeTab === "conference" ? conferenceData.conferences : conferenceData.seminars;

    const nextSlide = () => {
        if (startIndex + 3 < data.length) setStartIndex(startIndex + 1);
    };

    const prevSlide = () => {
        if (startIndex > 0) setStartIndex(startIndex - 1);
    };

    const visibleCards = data.slice(startIndex, startIndex + 3);

    return (
        <section className="py-16 bg-white text-center">
            <h2 className="text-4xl font-bold text-[#003366] mb-4">Conferences</h2>
            <p className="text-gray-600 w-full mx-auto mb-8">
                SRMU both hosts and participates in a diverse set of academic conferences,
                leveraging these platforms to exchange ideas and delve into emerging research
                concerns across various disciplines. These conferences are key to building a
                spirit of academic engagement and innovation within the vibrant SRMU community.
            </p>

            <div className="flex justify-center gap-4 mb-10">
                <button
                    onClick={() => {
                        setActiveTab("conference");
                        setStartIndex(0);
                    }}
                    className={`px-6 py-2 rounded-lg font-semibold border ${activeTab === "conference"
                            ? "bg-[#003366] text-white"
                            : "border-[#003366] text-[#003366] hover:bg-[#003366]/10"
                        }`}
                >
                    CONFERENCE
                </button>
                <button
                    onClick={() => {
                        setActiveTab("seminar");
                        setStartIndex(0);
                    }}
                    className={`px-6 py-2 rounded-lg font-semibold border ${activeTab === "seminar"
                            ? "bg-[#003366] text-white"
                            : "border-[#003366] text-[#003366] hover:bg-[#003366]/10"
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
                        className={`w-10 h-10 rounded border border-gray-300 flex items-center justify-center hover:bg-[#003366] hover:text-white transition ${startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        &lt;
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={startIndex + 3 >= data.length}
                        className={`w-10 h-10 rounded border border-gray-300 flex items-center justify-center hover:bg-[#003366] hover:text-white transition ${startIndex + 3 >= data.length ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        &gt;
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
                    {visibleCards.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg border border-gray-200 transition"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-5 text-left">
                                <h3 className="text-lg font-semibold text-[#003366] mb-1">{card.title}</h3>
                                <p className="text-sm text-yellow-600 mb-2">{card.date}</p>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                    {card.description}
                                </p>
                                <button
                                    onClick={() => setSelectedCard(card)}
                                    className="text-sm font-semibold border border-yellow-500 text-[#003366] py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-white transition flex items-center gap-2"
                                >
                                    MORE INFO →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCard && (
                <Modal
                    isOpen={!!selectedCard}
                    onClose={() => setSelectedCard(null)}
                    title={selectedCard.title}
                    description={selectedCard.description}
                    image={selectedCard.image}
                />
            )}
        </section>
    );
};

export default ConferencesSection;
