import React from "react";
import bgImage from "../../../assets/images/research/overview/facilities-bg-lg.jpeg";
import { awardAndRankingData } from "../../../data/about/award-overview/award-overview-data";

const AwardAndTopRanking: React.FC = () => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden mx-4 my-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto py-20 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Left Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-4">Awards & Top Rankings</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              SRMU takes pride in its array of prestigious awards and recognitions, a testament to its commitment to academic excellence, innovative practices, and contributions to
              higher education.
            </p>
          </div>

          {/* Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {awardAndRankingData.map((item, index) => (
              <div
                key={item.id}
                className={`group relative border-2 border-yellow-400 rounded-t-[45px] rounded-b-[20px] 
    pt-10 pb-10 px-4 text-center transition-all duration-300
    ${index >= 4 ? "mt-16" : ""}`}
              >
                {/* IMAGE + YELLOW SHADOW */}
                <div className="absolute -top-18 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  {/* Yellow Shadow Behind */}
                  <div className="relative">
                    <div className="absolute left-[-18px] w-40 h-40 rounded-full rounded-bl-lg bg-yellow-400 translate-x-2 translate-y-2 group-hover:translate-x-6 transition-transform duration-300"></div>

                    {/* White Circle */}
                    <div className="relative w-40 h-40 bg-white rounded-full rounded-bl-lg flex items-center justify-center shadow-md overflow-hidden">
                      <img src={item.icon} alt={item.title} className="w-32 h-32 object-contain" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <p className="text-sm leading-snug mt-24 text-gray-100 font-medium px-2">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardAndTopRanking;
