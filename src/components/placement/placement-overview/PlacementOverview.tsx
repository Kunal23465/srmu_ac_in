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
import "./PlacementOverview.css";
const PlacementOverview: React.FC = () => {
  return (
    <>
      <Helmet> <title>Placements | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="Discover SRMU placement opportunities, recruiters, career support, job offers and industry connections for students." />
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
