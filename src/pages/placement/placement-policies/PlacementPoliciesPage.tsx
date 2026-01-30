import React from "react";
import PlacementPolicies from "../../../components/placement/placement-policies/PlacementPolicies";
import { Helmet } from "react-helmet-async";

const PlacementPoliciesPage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Placement Policies | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="University placement policies consist of guidelines and strategies to aid students&#039; successful transition from academics to the professional world." />
      </Helmet>
      <PlacementPolicies />
    </div>
  );
};

export default PlacementPoliciesPage;
