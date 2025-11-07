import React from "react";
import ramswaroop from "../../../assets/images/about/aboutUs/ramswaroop-agrawal.jpg";
import { effortData } from "../../../data/about/aboutusData";

const Effort: React.FC = () => {
    return (
        <div className="flex  justify-between w-full gap-10 py-8">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={ramswaroop}
                    alt="img"
                    className="w-full  object-cover shadow-md"
                />
            </div>

            {/* Right side - Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h1 className="text-3xl font-semibold mb-4">{effortData.heading}</h1>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p>{effortData.desc.p1}</p>
                    <p>{effortData.desc.p2}</p>
                </div>
            </div>
        </div>
    );
};

export default Effort;
