import React from "react";
import PlacementPolicies from "../../../components/placement/placement-policies/PlacementPolicies";
import SeoHead from "../../../components/seo/SeoHead";

const PlacementPoliciesPage: React.FC = () => {
  return (
    <div>
      <SeoHead
        title="Placement Policies | Shri Ramswaroop Memorial University, Lucknow"
        description="University placement policies consist of guidelines and strategies to aid students' successful transition from academics to the professional world."
        pathname="/placement-policies"
      />
      <PlacementPolicies />
    </div>
  );
};

export default PlacementPoliciesPage;
