import React from "react";
import AwardOverview from "../../../components/about/award-overview/AwardOverview";
import SeoHead from "../../../components/seo/SeoHead";

const AwardOverviewPage: React.FC = () => {
  return <>
    <SeoHead
      title="Award Overview | Shri Ramswaroop Memorial University, Lucknow"
      description="SRMU is proud of its numerous prestigious awards and recognitions, showcasing its dedication to academic excellence, innovative methods, and contributions to higher education."
      pathname="/award-overview"
    />
    <AwardOverview />
  </>

};

export default AwardOverviewPage;
