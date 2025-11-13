import React from "react";
import { missionvisionData1 } from "../../../data/campus-life/central-library/central-library-data";
import { MissionVisionType } from "../../../data/about/aboutusData";
import CentralVisionCard from "./CentralVisionCard";

const MissionCentralLibrary: React.FC = () => {
    return (
        <>
            <div className="relative ">
                <div className="flex flex-col items-center text-center gap-y-1 bg-[#0f4a85] min-h-[400px] px-4">
                    <h1 className="leading-[1.2] text-white font-medium text-[3.125rem] mt-[100px]">
                        Vision & Mission
                    </h1>
                    <p className="text-white  mb-[100px] ">
                        The Central Library is dedicated to creating a transformative learning environment for all. Explore our vision and mission to know more
                    </p>
                </div>

                <div
                    className="flex flex-wrap justify-center gap-12 px-4 pb-20 absolute left-1/2 -translate-x-1/2 w-full top-[28%]"
                >
                    {missionvisionData1.map((item: MissionVisionType) => (
                        <CentralVisionCard
                            key={item.id}
                            image={item.image}
                            heading={item.heading}
                            points={item.points}
                        />
                    ))}
                </div>

                <div className="h-[700px]"></div>
            </div>
        </>
    );
};

export default MissionCentralLibrary;
