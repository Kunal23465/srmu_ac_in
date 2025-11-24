import React from "react";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import Classes from "../../../utils/styles/Global.module.css";
import { otherfacilitiesCardData, otherFacilitiesCardLayoutData, ResearchOverviewData } from "../../../data/research/overview/research-overview-data";
import { CustomTopFooterAbout } from "../../../data/about/aboutusData";
import DirectorSection from "./director-section/DirectorSection";
import UniversityResearchSection from "./university-research-section/UniversityResearchSection";
import ResearchOfficeSection from "./research-office-section/ResearchOfficeSection";
import KeyHighlightsSection from "./key-highlights-section/KeyHighlightsSection";
import PhdOrdinanceSection from "./phdOrdinances-section/PhdOrdinanceSection";

const Overview: React.FC = () => {
  return (
    <>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={ResearchOverviewData} />
      </div>

      <DirectorSection />
      <UniversityResearchSection />
      <ResearchOfficeSection />
      <KeyHighlightsSection layoutData={otherFacilitiesCardLayoutData} facilities={otherfacilitiesCardData} />
      <PhdOrdinanceSection />

      <CustomTopFooter data={CustomTopFooterAbout} />
    </>
  );
};

export default Overview;
