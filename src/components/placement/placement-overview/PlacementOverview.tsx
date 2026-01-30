import React from "react";
import Classes from "../../../utils/styles/Global.module.css";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import {
  PlacementCellTopFooterData,
  PlacementOverviewData,
} from "../../../data/placement/placementData";
import CustomOverviewSection from "../../scholarship/ScholarshipOverviewSection";
import PlacementStayWithUs from "./PlacementStayWithUs";
import PlacementOverviewSlider from "./PlacementOverviewSlider";
import PlacementRecords from "./PlacementRecords";
import PlacementTestimonials from "./testimonials/PlacementTestimonials";
import PlacementDrives from "./PlacementDrives";
const PlacementOverview: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={PlacementOverviewData} />
      </div>
      <PlacementStayWithUs />
      <PlacementOverviewSlider />
      <PlacementRecords />
      <PlacementTestimonials />
      <PlacementDrives />
      <CustomTopFooter data={PlacementCellTopFooterData} />
    </div>
  );
};

export default PlacementOverview;
