import React, { useState } from "react";
import { festData } from "../../../data/campus-life/events/events-data";

const tabs = [
    { key: "anubhuti", label: "ANUBHUTI" },
    { key: "harmony", label: "HARMONY" },
    { key: "ullas", label: "ULLAS" },
];

const AnnualFest: React.FC = () => {
    const [activeTab, setActiveTab] = useState("anubhuti");
    const data = festData[activeTab];

    return (
        <section
            className="relative bg-cover bg-center text-white py-16 back  cursor-pointer"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between">
                    <h2 className="text-4xl font-bold mb-2">Annual Fest</h2>
                    <span className="text-sm text-gray-200 max-w-3xl mb-8">
                        Shri Ramswaroop Memorial University has a variety of annual festivities each year.
                        These celebrations and festivals give the students a great environment for idea sharing,
                        technological demonstration, creative thinking, and social and cultural efforts.
                    </span>
                </div>


                <div className="flex gap-6 border-b border-yellow-200 mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`pb-2 font-semibold text-sm tracking-wide relative ${activeTab === tab.key
                                    ? "text-yellow-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-yellow-400"
                                    : "text-gray-300 hover:text-yellow-300"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div>
                        <h3 className="text-3xl font-bold mb-4">{data.title}</h3>
                        <span className="text-gray-300 leading-relaxed mb-6">
                            {data.description}
                        </span>
                        <div className="flex gap-3 mt-6">
                            <button className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-yellow-400 hover:text-black">
                                &lt;
                            </button>
                            <button className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-yellow-400 hover:text-black">
                                &gt;
                            </button>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 ">
                        {data.cards.map((card, i) => (
                            <div
                                key={i}
                                className="bg-white text-gray-800 hover:border-3 hover:border-yellow-500 rounded-2xl overflow-hidden shadow-md"
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h4 className="font-semibold text-lg">{card.title}</h4>
                                    <p className="text-sm text-gray-500 mb-2">{card.date}</p>
                                    <p className="text-sm text-gray-700 line-clamp-2">
                                        {card.description}
                                    </p>
                                    <button className="mt-3 text-sm font-medium cursor-pointer color_light_blue border-1 border-yellow-500 py-2 px-4 rounded-lg hover:bg-yellow-500 flex items-center gap-1">
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
