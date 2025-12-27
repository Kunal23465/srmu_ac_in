import React from "react";
import bgImage from "../../../assets/images/research/overview/facilities-bg-lg.jpeg";
import { awardAndRankingData } from "../../../data/about/award-overview/award-overview-data";
import Classes from "../../../utils/styles/Global.module.css";

const AwardAndTopRanking: React.FC = () => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden mx-0 md:mx-7 p-0 md:p-10 xl:p-0 my-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`${Classes["container"]}`}>

        <div className="relative z-10 max-w-7xl py-20 text-white">
          <div className="mt-10 grid grid-cols-1  lg:grid-cols-4 gap-8 items-start">
            {/* Left Section */}
            <div className="mr-0 lg:-mr-8 lg:p-1">
              <h2 className="fw500 mb-4 leading-tight">
                <span className="block lg:text-[50px] md:text-[46.875px] sm:text-[22.4px] text-[22.4px] whitespace-nowrap">
                  Awards & Top
                </span>
                <span className="block lg:text-[50px] md:text-[46.875px] sm:text-[22.4px] text-[22.4px]">
                  Rankings
                </span>
              </h2>

              <p className="text-white text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-relaxed">
                SRMU takes pride in its array of prestigious awards and recognitions, a testament to its commitment to academic excellence, innovative practices, and contributions to
                higher education.
              </p>
            </div>

            {/* Cards */}
            <div className="mx-auto xl:-ml-50 xl:w-[120%] lg:col-span-3 px-10 sm:px-15 lg:px-0 grid grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
              {awardAndRankingData.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative border-2 border-[#ffb703] rounded-t-[45px] rounded-b-[20px] 
    pt-10 pb-1 lg:pb-10 px-4 text-center transition-all duration-300
    ${index >= 4 ? "mt-16" : "mt-20"} ${index === 0 ? "hidden xl:block opacity-0" : ""} `}
                >
                  {/* IMAGE + YELLOW SHADOW */}
                  <div className="absolute -top-18 lg:-top-1/3 left-20 lg:left-1/2 -translate-x-1/2 flex flex-col items-center">
                    {/* Yellow Shadow Behind */}
                    <div className="relative">
                      <div className="absolute left-[-18px] w-25 h-25 lg:w-50 lg:h-50 rounded-full rounded-bl-lg bg-[#ffb703] translate-x-2 translate-y-2 group-hover:translate-x-6 transition-transform duration-300"></div>

                      {/* White Circle */}
                      <div className="relative w-25 h-25 lg:w-50 lg:h-50 bg-white rounded-full rounded-bl-lg flex items-center justify-center shadow-md overflow-hidden">
                        <img src={item.icon} alt={item.title} className="w-30 h-30 p-5 lg:w-50 lg:h-50 object-contain" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="leading-snug mt-3 lg:mt-26 text-gray-100 lg:text-[17px] md:text-[15.945px] sm:text-[14.882px] text-[14.882px] px-2">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div></div>
    </div>
  );
};

export default AwardAndTopRanking;
