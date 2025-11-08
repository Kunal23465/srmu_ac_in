import React from "react";
import coreValuesImg from "../../../assets/images/about/aboutUs/core-values-img.jpg"; 
import { coreValuesData } from "../../../data/about/aboutusData";

const CoreValues: React.FC = () => {
    return (
        <div className="w-[94%] flex justify-center items-center  py-20 px-6 relative">
            <div className="relative bg-white rounded-2xl shadow-lg w-full md:w-[70%] flex flex-col md:flex-row p-8 md:p-12">

                {/* Left Side — Card Content */}
                <div className="w-full md:w-[70%] space-y-5 z-10">
                    <h2 className="text-4xl font-semibold text-[#1B3A6F] mb-6">
                        Our Core Values
                    </h2>

                    {coreValuesData.map((item) => (
                        <div key={item.id} className="text-gray-800 leading-relaxed">
                            <p>
                                <span className="font-bold text-[#1B3A6F]">{item.title}:</span>{" "}
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right Side — Overlapping Image */}
                <div className="w-full  flex justify-center items-start md:items-start mt-10 md:mt-0 md:absolute md:top-[-50px] md:right-[-500px]">
                    <img
                        src={coreValuesImg}
                        alt="Core Values"
                        className="w-[480px] h-[450px] object-cover rounded-xl shadow-md border-4 border-white"
                    />
                </div>
            </div>
        </div>
    );
};

export default CoreValues;
