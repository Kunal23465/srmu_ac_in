import React from "react";
import coreValuesImg from "../../../assets/images/about/aboutUs/core-values-img.jpg"; 
import { coreValuesData } from "../../../data/about/aboutusData";

const CoreValues: React.FC = () => {
    return (
        <div className="flex items-center  py-20 px-6 relative">
            <div className="relative border-4 border-[#ffb703] rounded-2xl shadow-gray-400 shadow-2xl w-full lg:w-[75%] p-7 md:p-12">

                {/* Left Side — Card Content */}
                <div className="w-full lg:w-[75%] space-y-5 z-10">
                    <h2 className="text-2xl sm:text-5xl font-semibold mb-1 sm:mb-6">
                        Our Core Values
                    </h2>

                    {coreValuesData.map((item) => (
                        <div key={item.id} className="text-gray-800 leading-relaxed">
                            <p>
                                <span className="font-bold">{item.title}:</span>{" "}
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right Side — Overlapping Image */}
<div className="hidden lg:block absolute lg:top-[-18%] lg:right-[-38%] w-[300px] sm:w-[340px] lg:w-[450px] xl:w-[480px]">
    <img
        src={coreValuesImg}
        alt="Core Values"
        className="w-full h-auto object-cover rounded-xl"
    />
</div>

            </div>
        </div>
    );
};

export default CoreValues;
