import { useState } from "react";
import { initiativesData } from "../../../data/campus-life/women-empowerment/women-empowerment-data";
import { CustomModal } from "./CustomModal";

export default function CardModalSection() {
    const [isExpanded, setIsExpanded] = useState<number | null>(null);

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-semibold text-center mb-12 text-[#0f4a85]">
                    Initiatives
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {initiativesData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#fff6dd]  shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 border border-yellow-300"
                            style={{ backgroundColor: item.bgColor }}
                        >
                            <h3 className="text-xl font-semibold font26 mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-700 line-clamp-3">
                                {item.shortDescription}
                            </p>

                            <button
                                onClick={() => setIsExpanded(index)}
                                className="cursor-pointer fw600 underline transition-all text-left"
                            >
                                Read more
                            </button>

                            <CustomModal
                                id={index}
                                isExpanded={isExpanded}
                                setIsExpanded={setIsExpanded}
                                content={item.fullDescription}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
