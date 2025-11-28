import React, { useState, useEffect } from "react";

interface CompanyItem {
  id: number;
  logo: string;
}

interface SectorData {
  label: string;
  companies: CompanyItem[];
}

export interface ScopeData {
  title: string;
  description: string[];
  rolesLeft: string[];
  rolesRight: string[];
  sectors: SectorData[];
}

interface CompaniesScopeProps {
  data: ScopeData;
}

export const CustomCompaniesScope: React.FC<CompaniesScopeProps> = ({ data }) => {
  const { title, description, rolesLeft, rolesRight, sectors } = data;

  const [activeTab, setActiveTab] = useState(0);
  const [index, setIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeCompanies = sectors[activeTab].companies;

  const itemsToShow =
    activeCompanies.length <= 8
      ? isSmallScreen
        ? 2
        : 5
      : 10;

  let visibleCompanies: CompanyItem[] = activeCompanies.slice(index, index + itemsToShow);
  if (visibleCompanies.length < itemsToShow) {
    visibleCompanies = [
      ...visibleCompanies,
      ...activeCompanies.slice(0, itemsToShow - visibleCompanies.length),
    ];
  }

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? activeCompanies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % activeCompanies.length);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pb-10">
          <div>
            <h2 className="font50 text-[#023047] fw500 leading-tight">
              {(() => {
                const words = title.split(" ");
                return (
                  <>
                    <span className="block">{words[0]}</span>
                    <span className="block">{words.slice(1).join(" ")}</span>
                  </>
                );
              })()}
            </h2>
          </div>

          <div>
            <div className="flex flex-col gap-4 mb-10">
              {description.map((p, i) => (
                <p key={i} className="text-black leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {[...rolesLeft, ...rolesRight].map((r, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <span className="text-[#ffb703] font-bold mt-0.5">✔</span>
                  <span className="flex-1 text-black font18">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-16 mb-8 gap-4 lg:gap-0">
          <p className="font19 fw600 text-black">
            You can easily be absorbed in above positions at Organizations like:
          </p>

          <div className="flex flex-wrap gap-4 lg:gap-6 font-semibold mt-2 lg:mt-0">
            {sectors.map((sector, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveTab(i);
                  setIndex(0);
                }}
                className={`pb-2 transition-colors border-b-3 whitespace-nowrap cursor-pointer
          ${activeTab === i ? "border-[#023047]" : "border-transparent text-gray-500"}`}
              >
                {sector.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`grid gap-4 mt-10
            grid-cols-2 sm:grid-cols-2 md:grid-cols-5
          `}
        >
          {visibleCompanies.map((c) => (
            <div
              key={c.id}
              className="w-full aspect-[6/4] bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center hover:shadow-md transition cursor-pointer p-2 sm:p-3"
            >
              <img
                src={c.logo}
                alt={`Logo ${c.id}`}
                className="w-full h-full max-w-[60%] sm:max-w-[80%] max-h-[60%] object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center relative">
          <div className="flex gap-2 z-10">
            <button
              onClick={handlePrev}
              className="w-13 h-13 bg-white rounded-full border-2 border-[#023047] cursor-pointer shadow-lg flex items-center justify-center text-2xl text-[#023047] "
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="w-13 h-13 bg-white rounded-full border-2 border-[#023047] cursor-pointer shadow-lg flex items-center justify-center text-2xl text-[#023047] "
            >
              &gt;
            </button>
          </div>

          <div className="flex-1 h-1 bg-gray-300 rounded-full ml-4 relative">
            <div
              className="h-1 bg-[#023047] rounded-full transition-all"
              style={{
                width: `${Math.min(index + itemsToShow, activeCompanies.length) / activeCompanies.length * 100}%`,
              }}
            ></div>
          </div>
        </div>

        <div className="h-16"></div>
      </div>
    </div>
  );
};
