import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { associationsData } from "../../../data/about/recognition-approval/recognitionApprovalsData";

const AssociationsMemberships:React.FC = () => {
    return (
        <section className="pb-16 pt-10 bg-white text-center">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    ASSOCIATIONS & MEMBERSHIPS
                </h2>
                <p className="text-gray-600 mb-10">
                    SRMU is a part of a diverse set of networks and associations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {associationsData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-between hover:shadow-lg transition-all"
                        >
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="h-20 object-contain mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">
                                {item.name}
                            </h3>
                            <a
                                href={item.pdfLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-yellow-400 text-yellow-500 hover:bg-yellow-500 hover:text-white font-semibold px-4 py-2 rounded-md transition-all"
                            >
                                <FaFilePdf size={18} />
                                DOWNLOAD PDF
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AssociationsMemberships;
