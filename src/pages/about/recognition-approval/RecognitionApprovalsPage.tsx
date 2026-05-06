import React from "react";
import RecognitionApproval from "../../../components/about/recognition-approval/RecognitionApprovals";
import { Helmet } from "react-helmet-async";

const RecognitionApprovalsPage: React.FC = () => {
  return <>
    <Helmet>
      <title>Recognition &amp; Approvals | Shri Ramswaroop Memorial University, Lucknow</title>
      <meta name="description" content="SRMU has been recognised and certified by leading academic and industry authorities. SRMU also has a wide pool of collaborators, supporters and network memberships." />
    </Helmet>
    <RecognitionApproval />

  </>
};

export default RecognitionApprovalsPage;
