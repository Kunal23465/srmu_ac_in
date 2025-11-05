import React from "react";
import Classes from "../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import Program from "./Program";
import AlternateProfileSection from "./AlternateProfileSection";
import { profileData } from "../../data/message/messageData";
import { MessageOverviewData } from "../../data/message/customOverViewData";
import { CustomTopFooterData1 } from "../../data/message/customTopFooterData";

const Message: React.FC = () => {
  return (
    <>
      <div>
        {/* <LeaderVision /> */}
        <div className={`${Classes["container"]}`}>
          <CustomOverviewSection data={MessageOverviewData} />
        </div>
        <AlternateProfileSection people={profileData} />
        <Program />
        <CustomTopFooter data={CustomTopFooterData1} />
      </div>
    </>
  );
};

export default Message;
