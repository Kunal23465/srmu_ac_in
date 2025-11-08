import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { iqacCardsData } from "../../../data/about/iqac-overview/iqac-data";

const IqacCardsSection: React.FC = () => {
    return (
        <section className="relative bg-[#ffb703] ">
            <div className="w-full h-[320px] bg-white"></div>

            {/* Overlapping cards container */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="relative z-20 -translate-y-[180px] flex flex-wrap justify-center gap-4">
                    {iqacCardsData.map((card) => (
                        <div
                            key={card.id}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-[90%] md:w-[30%] flex flex-col overflow-hidden"
                        >
                            {/* Card Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-68 object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-[2rem] flex flex-col justify-between flex-grow">
                                <h3 className="mb-4 font-semibold text-[23px] text-blue-900">
                                    {card.title}
                                </h3>
                                <p className="text-[#252629] text-[12px] mb-6">
                                    {card.description}
                                </p>

                                <a
                                    href={card.pdfLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 border-1 border-[#fbbf24] text-[#003366] font-semibold px-4 py-2 rounded-lg transition-all hover:bg-[#fbbf24] hover:text-white  max-w-[200px]"
                                >
                                    <span className="bg-[#fbbf24] text-white p-1 rounded">
                                        <FaFilePdf size={16} />
                                    </span>
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
