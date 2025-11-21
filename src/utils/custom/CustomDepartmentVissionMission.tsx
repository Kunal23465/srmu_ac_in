import { useState } from "react";

interface VisionMissionData {
    title: string;
    description: string[];
    buttonText: string;
    buttonBgColor: string;
    imageUrl: string;
}

interface VisionMissionProps {
    backgroundColor: string;   // NEW PROP
    data: {
        vision: VisionMissionData;
        mission: VisionMissionData;
    };
}
 

const CustomInstitueVissionMissionCard: React.FC<VisionMissionProps> = ({
    data,
    backgroundColor
}) => {
    const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

    const currentData =
        activeTab === "vision" ? data.vision : data.mission;

    return (
        <div className="relative py-20">
            <div
                className={`relative ${backgroundColor} rounded-xl w-[1020px] overflow-visible text-white min-h-[500px]`}
            >

                <div className="pl-12 pr-80 flex flex-col justify-center h-full py-16 relative z-10">

                    <div className="border border-white w-auto self-start rounded-full px-4 py-2 inline-block mb-6 text-md font-semibold">
                        {currentData.title}
                    </div>

                    <ul className="list-disc ml-5 mt-5 space-y-3 text-md leading-relaxed text-justify">
                        {currentData.description.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>

                    <div className="flex space-x-5 mt-20">
                        <button
                            className={`flex uppercase items-center px-6 py-4 rounded-lg font-semibold transition cursor-pointer
                                ${activeTab === "vision"
                                    ? data.vision.buttonBgColor + " text-blue-900"
                                    : "bg-white text-blue-900"}
                            `}
                            onClick={() => setActiveTab("vision")}
                        >
                            <span className="mr-2 text-lg text-bold">←</span>
                            {data.vision.buttonText}
                        </button>

                        <button
                            className={`flex uppercase items-center px-6 py-4 rounded-lg font-semibold transition cursor-pointer
                                ${activeTab === "mission"
                                    ? data.mission.buttonBgColor + " text-blue-900"
                                    : "bg-white text-blue-900"}
                            `}
                            onClick={() => setActiveTab("mission")}
                        >
                            {data.mission.buttonText}
                            <span className="ml-2">→</span>
                        </button>
                    </div>

                </div>

                <img
                    src={currentData.imageUrl}
                    alt={currentData.title}
                    className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 w-[480px] h-[400px]"
                />

            </div>
        </div>
    );
};

export default CustomInstitueVissionMissionCard;
