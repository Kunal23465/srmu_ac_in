import React from "react";
import MissionVissionCard from "./MissionVissionCard";
import Classes from "../../../utils/styles/Global.module.css";

import { missionvisionData, MissionVisionType } from "../../../data/about/aboutusData";

const MissionAndVission: React.FC = () => {
    return (
        <>
            {/* Wrapper with background layering */}
            <div className="relative ">
                {/* Blue Section */}
                <div className="flex flex-col items-center text-center gap-y-1 bg-[#0f4a85] min-h-[400px] px-4">
                    <h1 className="leading-[1.2] text-white font-medium text-[3.125rem] mt-[100px]">
                        Vision & Mission
                    </h1>
                    <p className="text-white  mb-[100px] ">
                        SRMU is committed to building a transformative learning experience for all.Explore our mission and vision statements:
                        
                    </p>
                </div>

                {/* Cards Section */}
                            <div className={`${Classes["container"]}`}>

                <div
                    className="flex flex-col w-full sm:flex-row gap-6 sm:gap-12 pb-10 lg:pb-35 -mt-[120px]"
                >
                    {missionvisionData.map((item: MissionVisionType) => (
                        <MissionVissionCard
                            key={item.id}
                            image={item.image}
                            heading={item.heading}
                            points={item.points}
                        />
                    ))}
                </div>
</div>
            </div>
        </>
    );
};

export default MissionAndVission;
