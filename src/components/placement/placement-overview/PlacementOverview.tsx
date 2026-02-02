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
import { Helmet } from "react-helmet-async";
const PlacementOverview: React.FC = () => {
  return (
    <>
      <Helmet> <title>Placement Overview | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="Over the years, our students have landed top-tier opportunities in leading companies. Our recruitment partners include a wide range of industry leaders, across disciplines, fields, and professional landscapes." />
      </Helmet>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={PlacementOverviewData} />
      </div>
      <PlacementStayWithUs />
      <PlacementOverviewSlider />
      <PlacementRecords />
      <PlacementTestimonials />
      <PlacementDrives />
      <CustomTopFooter data={PlacementCellTopFooterData} />
    </>
  );
};

export default PlacementOverview;
