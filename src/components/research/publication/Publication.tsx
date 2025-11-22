import React from "react";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import CustomOverviewSection from "../../scholarship/ScholarshipOverviewSection";
import { CustomTopFooterAbout } from "../../../data/about/aboutusData";
import { PublicationOverviewData } from "../../../data/research/publication/publication-data";
import Classes from "../../../utils/styles/Global.module.css";
import PublicationSection from "./publication-section/PublicationSection";
import Conference from "./conference/Conference";
import PatentSection from "./patent-section/PatentSection";
import CopyrightSection from "./copyright-section/CopyrightSection";
const Publication: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={PublicationOverviewData} />
      </div>
      <PublicationSection />
      <Conference />
      <PatentSection />
      <CopyrightSection />
      <CustomTopFooter data={CustomTopFooterAbout} />
    </div>
  );
};

export default Publication;
