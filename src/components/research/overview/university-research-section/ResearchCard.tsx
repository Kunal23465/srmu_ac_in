import React from "react";
import { ResearchMember } from "../../../../data/research/overview/research-overview-data";
import avtar from "../../../../assets/images/user.webp"
interface Props {
  member: ResearchMember;
}

const ResearchCard: React.FC<Props> = ({ member }) => {
  return (
    <div className="flex flex-col justify-between  gap-x-1 gap-y-2 sm:gap-3 border border-white/70 text-center rounded-lg sm:rounded-xl p-2 sm:p-5 shadow-md hover:text-black hover:bg-white hover:shadow-lg transition-all">
      <div>
        <img src={member.image || avtar} alt={member.name} className="w-16 sm:w-20 h-16 sm:h-20 mx-auto rounded-full mb-3 object-cover" />
        <h2 className=" lg:text-[16px] md:text-[15px] sm:text-[14px] text-[12px]">{member.name}</h2>
        <p className="lg:text-[13px]! md:text-[12.195px]! sm:text-[11.382px]! text-[11px]!">{member.designation}</p>
      </div>
      <div className=" border-t border-gray-500">
        <p className="text-[#ffb703] font-medium lg:text-[15px]! md:text-[14px]! sm:text-[13.132px]! text-[12px]! mt-2">Position</p>
        <p className=" font-medium lg:text-[15px]! md:text-[14px]! sm:text-[13.132px]! text-[10px]! sm:mt-2">{member.position}</p>
      </div>
    </div>
  );
};

export default ResearchCard;
