import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

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
  list?: string;
}

export const CustomCompaniesScope: React.FC<CompaniesScopeProps> = ({
  data,
  list,
}) => {
  const { sectors } = data;

  const [activeTab, setActiveTab] = useState(0);
  const [index, setIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Responsive detection - SSR safe
  useEffect(() => {
    setHasMounted(true);

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsSmallScreen(window.innerWidth < 640);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeCompanies = sectors.reverse()?.[activeTab]?.companies || [];

  const itemsToShow = isSmallScreen ? 2 : 5;

  // Reset index when tab or screen changes
  useEffect(() => {
    setIndex(0);
  }, [activeTab, isSmallScreen]);

  // No duplicate, no wrap logic
  const visibleCompanies = activeCompanies.slice(
    index,
    index + itemsToShow
  );

  // Next slide
  const handleNext = () => {
    if (index + itemsToShow < activeCompanies.length) {
      setIndex((prev) => prev + 1);
    }
  };

  // Previous slide
  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const showControls = activeCompanies.length > itemsToShow;

  // Default itemsToShow for SSR (matches desktop)
  const ssrItemsToShow = 5;

  console.log("sectors",sectors)
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pb-10">
          <div>
            <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] text-[#023047] fw500 leading-tight">
              <span className="block">Scope</span>
              <span className="block">in Companies</span>
            </h2>
          </div>

          <div>
            

            <div
              className="scope_list"
              dangerouslySetInnerHTML={{ __html: list || "" }}
            />
          </div>
        </div>

        {/* Tabs */}
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
                  if (hasMounted) setIndex(0);
                }}
                className={`pb-2 transition-colors border-b-3 whitespace-nowrap cursor-pointer
                ${activeTab === i
                    ? "border-[#023047]"
                    : "border-transparent text-gray-500"
                  }`}
              >
                {sector.label}
              </button>
            ))}
          </div>
        </div>

        {/* Logo Grid (Design Same) */}
        <div
          className="grid gap-4 mt-10
            grid-cols-2 sm:grid-cols-2 md:grid-cols-5"
        >
          {(hasMounted ? visibleCompanies : activeCompanies.slice(0, ssrItemsToShow)).map((c) => (
            <div
              key={c.id}
              className="w-full aspect-[6/3] md:aspect-[6/4] bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center hover:shadow-md transition cursor-pointer p-5 sm:p-4"
            >
              <img
                src={c.logo}
                alt={`Logo ${c.id}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Arrows & Progress (Only if Needed) */}
        {showControls && hasMounted && (
          <div className="mt-12 flex items-center relative">
            <div className="flex gap-2 z-10">
              <button
                onClick={handlePrev}
                disabled={index === 0}
                className="w-13 h-13 bg-white rounded-full border-2 border-[#023047] cursor-pointer shadow-lg flex items-center justify-center text-2xl text-[#023047] disabled:opacity-40"
              >
                <FaAngleLeft />
              </button>

              <button
                onClick={handleNext}
                disabled={
                  index + itemsToShow >=
                  activeCompanies.length
                }
                className="w-13 h-13 bg-white rounded-full border-2 border-[#023047] cursor-pointer shadow-lg flex items-center justify-center text-2xl text-[#023047] disabled:opacity-40"
              >
                <FaAngleRight />
              </button>
            </div>

            <div className="flex-1 h-1 bg-gray-300 rounded-full ml-4 relative">
              <div
                className="h-1 bg-[#023047] rounded-full transition-all"
                style={{
                  width: `${((index + itemsToShow) /
                    activeCompanies.length) *
                    100
                    }%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Static spacer for SSR to maintain layout */}
        {!hasMounted && showControls && (
          <div className="mt-12 h-13" />
        )}

        <div className="h-16"></div>
      </div>
    </div>
  );
};
