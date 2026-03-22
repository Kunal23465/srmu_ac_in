import React from "react";
import PlacementCell from "../../../components/placement/placement-cell/PlacementCell";
import SeoHead from "../../../components/seo/SeoHead";

const PlacementCellPage: React.FC = () => {
  return (
    <div>
      <SeoHead
        title="Placement Cell | Placement Team | Career Counselling and Guidance"
        description="At SRMU, we are proud to have been home to 12000+ well-placed alumni worldwide, contributing to national growth by providing top-notch talent to corporate houses."
        pathname="/placement-cell"
      />
      <PlacementCell />
    </div>
  );
};

export default PlacementCellPage;
