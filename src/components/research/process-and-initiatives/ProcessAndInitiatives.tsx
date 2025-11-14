import React from "react";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import { ProcessInitiativeOverviewData } from "../../../data/research/process-and-initiatives/process-and-initiatives-data";
import Classes from "../../../utils/styles/Global.module.css";
import PhdProgramSection from "./PhdProgram/PhdProgramSection";
import AdmissionProcessSection from "./admission-process/AdmissionProcessSection";
import PhdFeeStructureSection from "./PhdProgram/PhdFeeStructureSection";
import MultiPhdCardSection from "./PhdProgram/MultiPhdCardSection";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterAbout } from "../../../data/about/aboutusData";
import InstitutionCouncilSection from "./institution-council/InstitutionCouncilSection";

import ResearchCentersSection from "./research-centers/ResearchCentersSection";

const ProcessAndInitiatives: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={ProcessInitiativeOverviewData} />
      </div>
      <PhdProgramSection />
      <AdmissionProcessSection />
      <PhdFeeStructureSection />
      <MultiPhdCardSection />
      <ResearchCentersSection />
      <InstitutionCouncilSection />
      <CustomTopFooter data={CustomTopFooterAbout} />
    </div>
  );
};

export default ProcessAndInitiatives;
