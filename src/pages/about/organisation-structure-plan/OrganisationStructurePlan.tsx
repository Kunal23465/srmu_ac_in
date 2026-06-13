import React from "react";
import OrganisationStructure from "../../../components/about/organisation-structure-plan/OrganisationStructure";
import { Helmet } from "react-helmet-async";

const OragnisationStructurePage: React.FC = () => {
  return <>
    <Helmet>
      <title>Organization Structure and Plan | Shri Ramswaroop Memorial University, Lucknow</title>
      <meta name="description" content="SRMUs organizational structure is designed to promote synergy, efficiency, and excellence across academic, administrative, and support functions." />
    </Helmet>
    <OrganisationStructure />
  </>


};

export default OragnisationStructurePage;
