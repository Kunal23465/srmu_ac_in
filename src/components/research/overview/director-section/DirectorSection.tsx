import React from "react";
import Classes from "../../../../utils/styles/Global.module.css";
import DirectorMessage from "./DirectorMessage";
import DirectorProfile from "./DirectorProfile";

import { DirectorSectionData } from "../../../../data/research/overview/research-overview-data";
import CustomTabs from "../../../../utils/custom/CustomTabs";

const DirectorSection: React.FC = () => {
  const items = [
    {
      key: "1",
      label: "Director Message",
      children: <DirectorMessage data={DirectorSectionData.tab1} />,
    },
    { key: "2", label: "Director Profile", children: <DirectorProfile data={DirectorSectionData.tab2} /> },
  ];
  return (
    <div className="bg-[#ffb703] py-20">
      <div className={`${Classes["container"]} `}>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <CustomTabs items={items} />
          <div className="">
            <img src={DirectorSectionData.imageUrl} alt="" className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorSection;
