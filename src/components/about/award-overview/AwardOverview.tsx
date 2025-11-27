import React from "react";
import { AwardOverviewData } from "../../../data/about/award-overview/award-overview-data";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterAbout } from "../../../data/about/aboutusData";
import AwardAndTopRanking from "./AwardAndTopRanking";
const AwardOverview: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={AwardOverviewData} />
          </div>
          <AwardAndTopRanking/>
      <CustomTopFooter data={CustomTopFooterAbout} />
    </div>
  );
};

export default AwardOverview;
