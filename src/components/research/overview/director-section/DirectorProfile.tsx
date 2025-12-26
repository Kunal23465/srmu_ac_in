import React from "react";
interface DirectorProfileProps {
  data: {
    name: string;
    content: string;
    contentSibling1: string;
    contentSibling2: string;
  };
}
const DirectorProfile: React.FC<DirectorProfileProps> = ({ data }) => {
  return (
    <div>
      <h1 className="lg:text-[24px] md:text-[21.585px] sm:text-[18.975px] text-[18.975px] font-medium mb-3">{data.name}</h1>
      <p className="lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] ">{data.content}<br/><br/>{data.contentSibling1}<br/><br/>{data.contentSibling2}</p>
    </div>
  );
};

export default DirectorProfile;
