import React from "react";
import { Member } from "../../../data/about/leadership-and-governance/leadership-and-governance-data";

interface ProfileCardProps {
  member: Member;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ member }) => {
  return (
    <div className="  relative w-[250px] sm:w-[260px] md:w-[270px] lg:w-[280px] h-[300px]
        rounded-xl border border-gray-200 shadow-sm
        overflow-hidden
        transition-all duration-300 transform
        hover:-translate-y-2 hover:shadow-lg cursor-pointer">
      <img
        src={member.image}
        alt={member.name}
        className={`w-full h-full object-cover ${member.name === "Mr. Sachin Agarwal" ? "object-top" : "object-center"
          }`}
      />

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-sm font-medium opacity-90">{member.title}</p>
        <p className="text-xs opacity-80 mt-1">{member.position}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
