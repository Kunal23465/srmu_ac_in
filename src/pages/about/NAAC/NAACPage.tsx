import React from "react";
import Naac from "../../../components/about/naac/Naac";
import { Helmet } from "react-helmet-async";

const NAACPage: React.FC = () => {
  return<>
  <Helmet>
     <title>NAAC Reports | Shri Ramswaroop Memorial University, Lucknow</title>
  <meta name="description" content="NAAC accreditation is a prestigious recognition that evaluates and assesses the quality and performance of higher education institutions in India." />
  </Helmet>
    <Naac />;
  </>

};

export default NAACPage;
