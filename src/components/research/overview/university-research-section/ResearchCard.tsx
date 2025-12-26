import React from "react";
import { ResearchMember } from "../../../../data/research/overview/research-overview-data";

interface Props {
  member: ResearchMember;
}

const ResearchCard: React.FC<Props> = ({ member }) => {
  return (
    <div className="flex flex-col justify-between gap-3 border border-white/70 text-center rounded-xl p-5 shadow-md hover:text-black hover:bg-white hover:shadow-lg transition-all">
      <div>
        <img src={member.image} alt={member.name} className="w-20 h-20 mx-auto rounded-full mb-3 object-cover" />
        <h3 className=" lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] text-base">{member.name}</h3>
        <p className="lg:text-[13px] md:text-[12.195px] sm:text-[11.382px] text-[11.382px] mt-1">{member.designation}</p>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-500">
        <p className="text-[#ffb703] font-medium lg:text-[15px] md:text-[14px] sm:text-[13.132px] text-[13.132px] mt-2">Position</p>
        <p className=" font-medium lg:text-[15px] md:text-[14px] sm:text-[13.132px] text-[13.132px] mt-2">{member.position}</p>
      </div>
    </div>
  );
};

export default ResearchCard;
