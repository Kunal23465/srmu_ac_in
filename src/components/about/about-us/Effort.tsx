import React from "react";
import ramswaroop from "../../../assets/images/about/aboutUs/ramswaroop-agrawal.webp";
import { effortData } from "../../../data/about/aboutusData";

const Effort: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between w-full gap-x-16 py-10">
      {/* Left side - Image */}
      <div className="w-full pb-10 md:w-1/2 ">
        <img
          src={ramswaroop}
          alt="Late Shri Ram Swaroop Agarwal"
          width={516}
          height={400}
          loading="lazy"
          decoding="async"
          className="w-full max-w-[516px] object-cover shadow-md"
        />
      </div>

      {/* Right side - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-[2rem] leading-[1.2] mb-4 text-[#023047]">{effortData.heading}</h2>
        <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <p>{effortData.desc.p1}</p>
          <p>{effortData.desc.p2}</p>
        </div>
      </div>
    </div>
  );
};

export default Effort;
