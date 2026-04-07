import React from "react";
import Leadership from "../../../components/about/leadership-and-governance/Leadership-and-Governance";
import SeoHead from "../../../components/seo/SeoHead";

const LeadershipAndGovernancePage: React.FC = () => {
  return<>
  <SeoHead
      title="Leadership and Governance | Shri Ramswaroop Memorial University, Lucknow"
      description="At SRMU we strive to provide students with a platform to attain their dreams. Our vision is to make learning a harmonious experience, enabling students to shine in every aspect of life."
      pathname="/leadership-and-governance"
  />
    <Leadership />
  </> 
};

export default LeadershipAndGovernancePage;
