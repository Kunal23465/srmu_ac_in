import React from "react";
import RecognitionApproval from "../../../components/about/recognition-approval/RecognitionApprovals";
import { Helmet } from "react-helmet-async";

const RecognitionApprovalsPage: React.FC = () => {
  return <>
    <Helmet>
      <title>SRMU Recognition & Approvals - UGC, AIU, BCI, PCI & More</title>
      <meta name="description" content="Explore SRMU's recognitions, approvals and affiliations supporting academic credibility, quality education and career growth." />
    </Helmet>
    <RecognitionApproval />

  </>
};

export default RecognitionApprovalsPage;
