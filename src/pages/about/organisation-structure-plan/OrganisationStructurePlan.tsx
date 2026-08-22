import React from "react";
import OrganisationStructure from "../../../components/about/organisation-structure-plan/OrganisationStructure";
import { Helmet } from "react-helmet-async";

const OragnisationStructurePage: React.FC = () => {
  return <>
    <Helmet>
      <title>SRMU Organization Structure & Strategic Institutional Plan</title>
      <meta name="description" content="SRMUs organizational structure is designed to promote synergy, efficiency, and excellence across academic, administrative, and support functions." />
    </Helmet>
    <OrganisationStructure />
  </>


};

export default OragnisationStructurePage;
