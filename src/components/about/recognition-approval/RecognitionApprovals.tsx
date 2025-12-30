import React from "react";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import { approvalOverviewData } from "../../../data/about/recognition-approval/recognitionApprovalsData";
import IndustrialCollabration from "./IndustrialCollabration";
import AssociationsMemberships from "./AssociateMembership";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterAbout } from "../../../data/about/aboutusData";
import ApprovalsSlider from "./ApprovalSlider";

const RecognitionApproval: React.FC = () => {
  return (
    <>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={approvalOverviewData} />
      </div>
      <ApprovalsSlider />
      <AssociationsMemberships />
      <IndustrialCollabration />
      <CustomTopFooter data={CustomTopFooterAbout} />
    </>
  );
};

export default RecognitionApproval;
