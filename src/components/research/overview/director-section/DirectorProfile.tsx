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
      <h3 className="lg:text-[24px] md:text-[21.585px] sm:text-[18.975px] text-[18.975px] font-medium mb-3">{data.name}</h3>
      {/* <p className="lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] ">{data.content}</p> */}
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  );
};

export default DirectorProfile;
