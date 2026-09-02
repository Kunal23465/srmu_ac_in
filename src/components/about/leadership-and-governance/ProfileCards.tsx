import React from "react";
import { Member } from "../../../data/about/leadership-and-governance/leadership-and-governance-data";

interface ProfileCardProps {
  member: Member;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ member }) => {
  return (
    <div
      className="relative w-full sm:h-[300px]
      rounded-xl border border-gray-200 shadow-sm overflow-hidden
      transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg cursor-pointer bg-[#92969c] sm:bg-gray-100"
    >
      <div className="w-full relative aspect-[4/5] overflow-hidden rounded-2xl sm:bg-gray-100 shadow-sm">
        <img
          src={member.image}
          alt={member.name}
          width={240}
          height={300}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
        />
        <span className="block sm:hidden bg-black/40 w-full h-full absolute top-0 left-0"></span>
      </div>


      <div className="absolute bottom-0 left-0 right-0 p-4 sm:bg-gradient-to-t sm:from-black/70 sm:via-black/40 sm:to-transparent text-white">
        <h2 className="text-xs sm:text-lg font-semibold">{member.name}</h2>
        <p className="text-[10px]! sm:text-xs! font-medium opacity-90">{member.title}</p>
        <p className="text-[9px]! sm:text-xs! opacity-80 mt-1">{member.position}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
