import React from "react";
import { placementOverviewStayWithUsData } from "../../../data/placement/placementData";

const PlacementStayWithUs: React.FC = () => {
  return (
    <div
      className="text-white  min-h-[700px] sm:min-h-[682px] w-full 
      placement-bg relative flex items-center"
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-10">
        <div className="sm:mt-10 lg:mt-0 md:mt-0">

        <button className="px-6 py-2 border border-white rounded-full text-sm mb-6 ">Stay With Us</button>
          </div>

        <h1 className="lg:text-[3.125rem] text-[28px] sm:text-[28px] leading-snug max-w-[900px]">
          Over the years, our students have landed
          <br /> top-tier opportunities in leading companies
        </h1>

        <div className="mt-5 sm:mt-12 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5  ">
          {placementOverviewStayWithUsData.map((item, index) => (
            <div key={index}>
              <h2 className="text-[#ffb703] lg:text-[56.25px] text-[28px] sm:text-[28px]">{item.number}</h2>

              <p className="mt-1 lg:text-[1.313rem] text-[18px] sm:text-[18px]">{item.title}</p>

              <div className="group ">
                <div className="mt-3 h-px w-full bg-white/30 group-hover:bg-[#ffb703] transition-all duration-300"></div>

                <p className={`mt-3 lg:text-[1.063rem] sm:text-[14.882px] text-[14.882px] ${item.width}`}>{item.description}</p>

                <div className="mt-3 h-px w-full bg-white/30 group-hover:bg-[#ffb703] transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementStayWithUs;
