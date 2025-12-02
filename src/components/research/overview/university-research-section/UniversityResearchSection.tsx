import React, { useState } from "react";

import { MdArrowRightAlt } from "react-icons/md";
import { researchMembers } from "../../../../data/research/overview/research-overview-data";
import ResearchCard from "./ResearchCard";
import bgImg from "../../../../assets/images/research/overview/facilities-bg-lg.jpeg"
const UniversityResearchSection: React.FC = () => {
  // initially show 10 members
  const [visibleCount, setVisibleCount] = useState(10);

  // function to show all members
  const handleViewAll = () => {
    setVisibleCount(researchMembers.length);
  };

  // slice the data according to visible count
  const visibleMembers = researchMembers.slice(0, visibleCount);
  return (
    <section className="text-white  py-16 relative overflow-hidden" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="container mx-auto px-5">
        <div className=" mb-10 border-b-3 border-white/50 pb-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-3">University Research Advisory Board / Council</h2>
          <p className="text-gray-200 max-w-3xl text-sm">
            The University Research Advisory Board at SRMU provides strategic guidance and oversight, ensuring the promotion of high-quality and impactful research projects across
            the institution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {visibleMembers.map((member) => (
            <ResearchCard key={member.id} member={member} />
          ))}
        </div>

        <div className="text-center mt-10">
          {visibleCount < researchMembers.length && (
            <div className="text-center mt-10">
              <button
                onClick={handleViewAll}
                className="bg-[#ffb703] text-[#0f4a85] hover:bg-transparent hover:text-[#ffb703] border border-[#ffb703] font-semibold px-6 py-3 rounded-md inline-flex items-center gap-2 transition-all group"
              >
                VIEW ALL
                <MdArrowRightAlt size={24} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UniversityResearchSection;
