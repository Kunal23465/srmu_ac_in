import React from "react";
import Nirf from "../../../components/about/nirf/Nirf";
import { Helmet } from "react-helmet-async";

const NIRFPage: React.FC = () => {
  return <>
    <Helmet>
      <title>NIRF Reports | Shri Ramswaroop Memorial University, Lucknow</title>
      <meta name="description" content="The National Institutional Ranking Framework (NIRF) is an initiative by the Indian government to assess and rank higher education institutions in the country." />
    </Helmet>
    <Nirf />;

  </>
};

export default NIRFPage;
