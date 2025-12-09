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
      <h1 className="text-2xl font-medium mb-3">{data.name}</h1>
      <p className="">{data.content}<br/><br/>{data.contentSibling1}<br/><br/>{data.contentSibling2}</p>
    </div>
  );
};

export default DirectorProfile;
