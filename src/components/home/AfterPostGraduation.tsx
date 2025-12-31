import React from "react";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../data/about/leadership-and-governance/leadership-and-governance-data";
import Classes from "../../utils/styles/Global.module.css";
import ProgramFinder from "./ProgramFinder";
import { afterClass10thProgramData, afterPostGraduationProgramDescription } from "../../data/home/courseData";
import ProgramDescription from "./ProgramDescription";
const AfterPostGraduation: React.FC = () => {
  return (
    <>
      <div className={`${Classes["container"]}`}>
        {/* @ts-ignore */}
        <ProgramFinder data={afterClass10thProgramData} />
        <ProgramDescription data={afterPostGraduationProgramDescription} />
      </div>
      <CustomTopFooter data={CustomTopFooterData1} />
    </>
  );
};

export default AfterPostGraduation;
