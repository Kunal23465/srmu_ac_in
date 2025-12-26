import React from "react";
import { placementOverviewStayWithUsData } from "../../../data/placement/placementData";
import Classes from "../../../utils/styles/Global.module.css";

const PlacementStayWithUs: React.FC = () => {
  return (
    <div
      className="text-white  w-full 
      placement-bg relative flex items-center"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className={`${Classes["container"]} py-20`}>
      <div className="relative z-10 w-full px-5 sm:px-10 lg:px-0">
        <button className="px-4 py-2 border border-white rounded-full  mb-6">
          Stay With Us
        </button>

        <h1 className="lg:text-[50px] md:text-[46.875px] text-[22.4px] sm:text-[22.4px] leading-snug ">
          Over the years, our students have landed
          <br /> top-tier opportunities in leading companies
        </h1>

   <div className="mt-8 lg:mt-16 flex flex-wrap gap-10 lg:gap-20">
        {placementOverviewStayWithUsData.map((item, index) => (
          <div key={index} >
            
            <h2 className="text-[#ffb703] lg:text-[60px] md:text-[56.25px] text-[35px] sm:text-[35px] ">
              {item.number}
            </h2>

            <p className="mt-3 lg:mt-5 lg:text-[21px] md:text-[19.695px] sm:text-[18.382px] text-[18.382px]">{item.title}</p>

            <div className="group ">
              <div className="mt-3 lg:mt-5 h-px w-full bg-white/30 group-hover:bg-[#ffb703] transition-all duration-300"></div>

            <p className={`mt-3 lg:mt-5 lg:text-[17px] md:text-[15.945px] sm:text-[14.882px] text-[14.882px]  ${item.width}`}>
              {item.description}
            </p>

            <div className="mt-3 lg:mt-5 h-px w-full bg-white/30 group-hover:bg-[#ffb703] transition-all duration-300"></div>
            </div>

          </div>
        ))}
</div>

      </div></div>
    </div>
  );
};

export default PlacementStayWithUs;
