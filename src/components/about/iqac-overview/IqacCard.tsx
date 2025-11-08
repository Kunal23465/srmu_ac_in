import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { iqacCardsData } from "../../../data/about/iqac-overview/iqac-data";


const IqacCardsSection:React.FC = () => {
    return (
        <section className="relative bg-[#ffb703] pb-24">
            <div className=" w-full h-[320px] bg-white"></div>

            {/* Container for overlapping cards */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="relative z-20 -translate-y-20 flex flex-wrap justify-center gap-6">
                    {iqacCardsData.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-[90%] md:w-[30%] flex flex-col overflow-hidden"
                        >
                            {/* Card Image */}
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-48 object-cover"
                            />
                            {/* Card Content */}
                            <div className="p-6 flex flex-col justify-between flex-grow">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-6">{card.description}</p>

                                <a
                                    href={card.pdfLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto flex items-center justify-center gap-2 border border-yellow-400 text-blue-900 bg-yellow-100 hover:bg-yellow-500 hover:text-white font-semibold px-4 py-2 rounded-md transition-all"
                                >
                                    <FaFilePdf size={18} />
                                    DOWNLOAD PDF
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IqacCardsSection;
