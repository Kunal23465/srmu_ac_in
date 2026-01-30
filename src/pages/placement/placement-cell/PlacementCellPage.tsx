import React from "react";
import PlacementCell from "../../../components/placement/placement-cell/PlacementCell";
import { Helmet } from "react-helmet-async";

const PlacementCellPage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Placement Cell | Placement Team | Career Counselling and Guidance</title>
        <meta name="description" content="At SRMU, we are proud to have been home to 12000+ well-placed alumni worldwide—our contribution to fueling national growth by providing top-notch talent to various corporate houses." />
      </Helmet>
      <PlacementCell />
    </div>
  );
};

export default PlacementCellPage;