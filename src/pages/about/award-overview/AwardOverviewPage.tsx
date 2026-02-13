import React from "react";
import AwardOverview from "../../../components/about/award-overview/AwardOverview";
import { Helmet } from "react-helmet-async";

const AwardOverviewPage: React.FC = () => {
  return <>
    <Helmet>
      <title>Award Overview | Shri Ramswaroop Memorial University, Lucknow</title>
      <meta name="description" content="SRMU is proud of its numerous prestigious awards and recognitions, showcasing its dedication to academic excellence, innovative methods, and contributions to higher education." />
    </Helmet>
    <AwardOverview />
  </>

};

export default AwardOverviewPage;
