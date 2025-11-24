import React from "react";
import { ResearchMember } from "../../../../data/research/overview/research-overview-data";

interface Props {
  member: ResearchMember;
}

const ResearchCard: React.FC<Props> = ({ member }) => {
  return (
    <div className="flex flex-col justify-between gap-3 border border-white/70 text-center rounded-xl p-5 shadow-md hover:shadow-lg transition-all">
      <div>
        <img src={member.image} alt={member.name} className="w-20 h-20 mx-auto rounded-full mb-3 object-cover" />
        <h3 className="text-white font-semibold text-base">{member.name}</h3>
        <p className="text-white text-sm! mt-1">{member.designation}</p>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-500">
        <p className="text-[#ffb703] font-medium text-sm! mt-2">Position</p>
        <p className="text-white font-medium text-sm! mt-2">{member.position}</p>
      </div>
    </div>
  );
};

export default ResearchCard;
