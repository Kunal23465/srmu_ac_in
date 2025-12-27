import React, { useState } from "react";
import Classes from "../../utils/styles/Global.module.css";

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
        <div className={`${Classes["container"]} py-20`}>
            <div className={`relative bg-[${data.backgroundColor}] w-full md:w-3/4 rounded-2xl  text-white min-h-[500px] overflow-visible`}>

                {/* 2. Content Area - Responsive padding and structure */}
                <div className="p-8 md:pl-12 lg:pl-16 md:pr-80 flex flex-col justify-center h-full py-16 relative z-10">

                    {/* Title */}
                    <div className="border border-white w-auto self-start rounded-full px-4 py-2 inline-block mb-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]">
                        {currentData.title}
                    </div>

                    {/* Description List - Responsive margins/text size */}
                    <ul className="list-disc ml-5 mt-5 space-y-3 
  text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] 
  leading-relaxed text-justify 
  marker:text-yellow-500">
                        {currentData.description.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>


                    {/* Buttons - **UPDATED for always-row layout and smaller size** */}
                    {/* Changes: Removed flex-col, space-y-4, sm: from layout classes. Reduced padding (px-4 py-2) */}
                    <div className="flex space-x-3 mt-10 md:mt-20">
                        <button
                            className={`flex uppercase items-center px-4 sm:px-6 py-1 sm:py-3 rounded-lg font-semibold transition cursor-pointer 
                                **text-xs sm:text-sm** w-auto self-start whitespace-nowrap
                                ${activeTab === "vision"
                                    ? data.vision.buttonBgColor + " text-blue-900"
                                    : "bg-white text-blue-900"}
                            `}
                            onClick={() => setActiveTab("vision")}
                        >
                            <span className="mr-1 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] fw500">←</span>
                            {data.vision.buttonText}
                        </button>

                        <button
                            className={`flex uppercase items-center px-4 sm:px-6 py-1 sm:py-3 rounded-lg font-semibold transition cursor-pointer 
                                **text-xs sm:text-sm** w-auto self-start whitespace-nowrap
                                ${activeTab === "mission"
                                    ? data.mission.buttonBgColor + " text-blue-900"
                                    : "bg-white text-blue-900"}
                            `}
                            onClick={() => setActiveTab("mission")}
                        >
                            {data.mission.buttonText}
                            <span className="ml-1 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] fw500">→</span>
                        </button>
                    </div>

                </div>

                {/* 3. Image Area - Hides on mobile (hidden md:block) */}
                <img
                    src={currentData.imageUrl}
                    alt={currentData.title}
                    // Hidden on screens smaller than 'md', displayed on 'md' and up
                    className="absolute rounded-xl top-1/2 -translate-y-1/2 right-0 translate-x-1/2 w-[330px] h-[250px] md:w-[400px] md:h-[60%] lg:w-[500px] lg:h-[70%] object-cover hidden md:block"
                />

            </div>
        </div>
    );
};

export default CustomInstitueVissionMissionCard;