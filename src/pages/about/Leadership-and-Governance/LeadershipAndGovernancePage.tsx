import React from "react";
import Leadership from "../../../components/about/leadership-and-governance/Leadership-and-Governance";
import { Helmet } from "react-helmet-async";

const LeadershipAndGovernancePage: React.FC = () => {
  return<>
  <Helmet>
      <title>Leadership and Governance | Shri Ramswaroop Memorial University, Lucknow</title>
      <meta name="description" content="At SRMU we strive to provide students with a platform to attain their dreams. Our vision at SRMU is to make learning a harmonious experience, enabling our students to shine in each and every aspect of life." />
  </Helmet>
    <Leadership />
  </> ;
};

export default LeadershipAndGovernancePage;
