import React from "react";
import Classes from "../../../utils/styles/Global.module.css";
import { iqacCardsData } from "../../../data/about/iqac-overview/iqac-data";
import { PdfSvgIcon } from "../recognition-approval/AssociateMembership";

const IqacCardsSection: React.FC = () => {
    return (
        <section className="relative bg-[#ffb703] ">
            <div className="w-full h-[320px] bg-white"></div>
      <div className={`${Classes["container"]}`}>

            {/* Overlapping cards container */}
            <div className="">
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
                            <div className="p-10 flex flex-col justify-between flex-grow">
                                <h2 className="mb-4 lg:text-[26px] md:text-[24.375px] text-[22.75px] sm:text-[22.75px] fw500 text-blue-900">
                                    {card.title}
                                </h2>
                                <p className="text-[#252629] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] mb-6">
                                    {card.description}
                                </p>

                                <a
                                    href={card.pdfLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] gap-2 border border-[#fbbf24] text-[#003366] fw500 px-4 py-2 rounded-lg transition-all hover:bg-[#fbbf24] max-w-[200px]"
                                >
                                    <span className="bg-[#fbbf24] p-1 rounded-md">
                                        <PdfSvgIcon />
                                    </span>
                                    DOWNLOAD PDF
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div></div>
        </section>
    );
};

export default IqacCardsSection;
