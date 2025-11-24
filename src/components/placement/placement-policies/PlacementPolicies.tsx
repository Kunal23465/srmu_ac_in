import React from "react";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import Classes from "../../../utils/styles/Global.module.css";
import { PlacementPoliciesOverviewData, PlacementPoliciesTopFooterData, policiesPdfData } from "../../../data/placement/placementData";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomTable from "../../../utils/custom/CustomTable";
const PlacementPolicies: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={PlacementPoliciesOverviewData} />

        <CustomTable columnOneHeader="Policies" columnTwoHeader="Downloads" data={policiesPdfData} />
      </div>
      <CustomTopFooter data={PlacementPoliciesTopFooterData} />
    </div>
  );
};

export default PlacementPolicies;
