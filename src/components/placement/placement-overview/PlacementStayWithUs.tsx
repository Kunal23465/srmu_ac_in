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
        <button className="px-6 py-2 border border-white rounded-full text-sm mb-6">Stay With Us</button>

        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-semibold leading-snug max-w-[900px]">
          Over the years, our students have landed
          <br /> top-tier opportunities in leading companies
        </h1>

        <div className="mt-5 sm:mt-12 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 ">
          {placementOverviewStayWithUsData.map((item, index) => (
            <div key={index}>
              <h2 className="text-yellow-400 text-3xl lg:text-4xl xl:text-5xl font-bold">{item.number}</h2>

              <p className="mt-1 text-xl">{item.title}</p>

              <div className="group ">
                <div className="mt-3 h-px w-full bg-white/30 group-hover:bg-yellow-400 transition-all duration-300"></div>

                <p className={`mt-3 text-sm ${item.width}`}>{item.description}</p>

                <div className="mt-3 h-px w-full bg-white/30 group-hover:bg-yellow-400 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementStayWithUs;
