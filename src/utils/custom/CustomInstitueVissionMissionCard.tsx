import React, { useState } from "react";

// Interfaces remain the same
interface VisionMissionData {
    title: string;
    description: string[];
    buttonText: string;
    buttonBgColor: string;
    imageUrl: string;
}

export interface VisionMissionProps {
    data: {
        backgroundColor: string;
        vision: VisionMissionData;
        mission: VisionMissionData;
    };
}

const CustomInstitueVissionMissionCard: React.FC<VisionMissionProps> = ({
    data
}) => {
    const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

    const currentData =
        activeTab === "vision" ? data.vision : data.mission;

    return (
        <div className="relative py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
                className={`relative ${data.backgroundColor} rounded-2xl 
                w-full 
                text-white 
                lg:min-h-[550px] sm:min-h-[300px]
                overflow-visible`}
            >
                {/* Content Section */}
                <div className="p-8 md:pl-12 lg:pl-16 md:pr-80 flex flex-col justify-center h-full py-16 relative z-10">

                    {/* Title */}
                    <div className="border border-white w-auto self-start rounded-full px-4 py-2 inline-block mb-6 text-sm md:text-base font-semibold">
                        {currentData.title}
                    </div>

                    {/* Description */}
                    <ul className="list-disc ml-5 mt-5 space-y-3 text-xs sm:text-sm md:text-base leading-relaxed text-justify">
                        {currentData.description.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>

                    {/* Buttons */}
                    <div className="flex flex-row flex-nowrap 
                        justify-center md:justify-start
                        space-x-3 
                        mt-10 md:mt-20"
                    >

                        {/* Vision Button */}
                        <button
                            className={`min-w-30 sm:min-w-36 flex uppercase items-center justify-center 
                                px-2 py-3 sm:py-5 sm:px-6 
                                rounded-lg font-semibold transition cursor-pointer 
                                text-xs sm:text-sm md:text-base
                                ${
                                    activeTab === "vision"
                                        ? data.vision.buttonBgColor + " text-blue-900"
                                        : "bg-white text-blue-900"
                                }`}
                            onClick={() => setActiveTab("vision")}
                        >
                            <span className="mr-1 sm:mr-2 text-base sm:text-lg font-bold">←</span>
                            {data.vision.buttonText}
                        </button>

                        {/* Mission Button */}
                        <button
                            className={`min-w-30 sm:min-w-36 flex uppercase items-center justify-center 
                                px-2 py-3 sm:py-5 sm:px-6  
                                rounded-lg font-semibold transition cursor-pointer 
                                text-xs sm:text-sm md:text-base
                                ${
                                    activeTab === "mission"
                                        ? data.mission.buttonBgColor + " text-blue-900"
                                        : "bg-white text-blue-900"
                                }`}
                            onClick={() => setActiveTab("mission")}
                        >
                            {data.mission.buttonText}
                            <span className="ml-1 sm:ml-2 text-base sm:text-lg">→</span>
                        </button>

                    </div>
                </div>

                {/* Image Right Side (hidden on mobile) */}
                <img
                    src={currentData.imageUrl}
                    alt={currentData.title}
                    className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 
                               w-[300px] h-[250px] md:w-[480px] md:h-[400px] 
                               object-cover hidden md:block"
                />
            </div>
        </div>
    );
};

export default CustomInstitueVissionMissionCard;
