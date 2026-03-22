import React from "react";
import Naac from "../../../components/about/naac/Naac";
import SeoHead from "../../../components/seo/SeoHead";

const NAACPage: React.FC = () => {
  return<>
  <SeoHead
     title="NAAC Reports | Shri Ramswaroop Memorial University, Lucknow"
     description="NAAC accreditation is a prestigious recognition that evaluates and assesses the quality and performance of higher education institutions in India."
     pathname="/naac"
  />
    <Naac />;
  </>

};

export default NAACPage;
