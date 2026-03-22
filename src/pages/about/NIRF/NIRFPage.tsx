import React from "react";
import Nirf from "../../../components/about/nirf/Nirf";
import SeoHead from "../../../components/seo/SeoHead";

const NIRFPage: React.FC = () => {
  return <>
    <SeoHead
      title="NIRF Reports | Shri Ramswaroop Memorial University, Lucknow"
      description="The National Institutional Ranking Framework (NIRF) is an initiative by the Indian government to assess and rank higher education institutions in the country."
      pathname="/nirf"
    />
    <Nirf />;

  </>
};

export default NIRFPage;
