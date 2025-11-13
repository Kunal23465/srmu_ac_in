import React from "react";
interface DirectorProfileProps {
  data: {
    name: string;
    content: string;
  };
}
const DirectorProfile: React.FC<DirectorProfileProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl mb-3">{data.name}</h1>
      <p className="text-sm!">{data.content}</p>
    </div>
  );
};

export default DirectorProfile;
