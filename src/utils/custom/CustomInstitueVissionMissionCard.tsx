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
        // 1. Center the component with mx-auto
        <div className="relative py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`relative ${data.backgroundColor} rounded-xl w-full text-white min-h-[500px] overflow-visible`}>

                {/* 2. Content Area - Responsive padding and structure */}
                <div className="p-8 md:pl-12 lg:pl-16 md:pr-80 flex flex-col justify-center h-full py-16 relative z-10">

                    {/* Title */}
                    <div className="border border-white w-auto self-start rounded-full px-4 py-2 inline-block mb-6 text-sm md:text-md font-semibold">
                        {currentData.title}
                    </div>

                    {/* Description List - Responsive margins/text size */}
                    <ul className="list-disc ml-5 mt-5 space-y-3 text-sm md:text-md leading-relaxed text-justify">
                        {currentData.description.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>

                    {/* Buttons - **UPDATED for always-row layout and smaller size** */}
                    {/* Changes: Removed flex-col, space-y-4, sm: from layout classes. Reduced padding (px-4 py-2) */}
                    <div className="flex space-x-3 mt-10 md:mt-20">
                        <button
                            className={`flex uppercase items-center **px-4 py-2** rounded-lg font-semibold transition cursor-pointer 
                                **text-xs sm:text-sm** w-auto self-start whitespace-nowrap
                                ${activeTab === "vision"
                                    ? data.vision.buttonBgColor + " text-blue-900"
                                    : "bg-white text-blue-900"}
                            `}
                            onClick={() => setActiveTab("vision")}
                        >
                            <span className="mr-1 text-lg font-bold">←</span>
                            {data.vision.buttonText}
                        </button>

                        <button
                            className={`flex uppercase items-center **px-4 py-2** rounded-lg font-semibold transition cursor-pointer 
                                **text-xs sm:text-sm** w-auto self-start whitespace-nowrap
                                ${activeTab === "mission"
                                    ? data.mission.buttonBgColor + " text-blue-900"
                                    : "bg-white text-blue-900"}
                            `}
                            onClick={() => setActiveTab("mission")}
                        >
                            {data.mission.buttonText}
                            <span className="ml-1">→</span>
                        </button>
                    </div>

                </div>

                {/* 3. Image Area - Hides on mobile (hidden md:block) */}
                <img
                    src={currentData.imageUrl}
                    alt={currentData.title}
                    // Hidden on screens smaller than 'md', displayed on 'md' and up
                    className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 w-[300px] h-[250px] md:w-[480px] md:h-[400px] object-cover hidden md:block"
                />

            </div>
        </div>
    );
};

export default CustomInstitueVissionMissionCard;