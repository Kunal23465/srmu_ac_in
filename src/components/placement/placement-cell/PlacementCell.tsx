import React from "react";
import classNamees from "../../../utils/styles/Global.module.css";
import { PlacementCellOverviewData, PlacementCellTopFooterData } from "../../../data/placement/placementData";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import DirectorMessage from "./DirectorMessage";
import OurTeam from "./OurTeam";
import CareerCounselling from "./CareerCounselling";
const PlacementCell: React.FC = () => {
  return (
    <div>
      <div className={`${classNamees["container"]}`}>
        <CustomOverviewSection data={PlacementCellOverviewData} />
        <DirectorMessage />
        <OurTeam />
        <CareerCounselling />
      </div>

      <CustomTopFooter data={PlacementCellTopFooterData} />
    </div>
  );
};

export default PlacementCell;
