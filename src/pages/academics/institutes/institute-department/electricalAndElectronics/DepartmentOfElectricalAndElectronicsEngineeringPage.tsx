import { FC } from "react";
import classNamees from "../../../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../../../utils/custom/CustomOverviewSection";
import CustomTopFooter from "../../../../../utils/custom/CustomTopFooter";
import {
  counterDataForDepartmentOfElectricalAndElectronicsEngineering,
  departmentHeadProfileData,
  instituteFooterData,
  instituteOverviewData,
  missionandvisionofelectricalandelectronicsengineering,
} from "../../../../../data/academics/institute/department-of-electrical-and-electronics-engineering-data";
import Counter from "../../../../../utils/custom/Counter";
import CustomInstituteProfileCard from "../../../../../utils/custom/CustomInstituteProfileCard";
import CustomInstitueVissionMissionCard from "../../../../../utils/custom/CustomDepartmentVissionMission";
import ProgramsAndFees from "./ProgramsAndFees";

const DepartmentOfElectricalAndElectronicsEngineeringPage: FC = () => {
  return (
    <div>
      <div className={`${classNamees["container"]}`}>
        <CustomOverviewSection data={instituteOverviewData} />
        <Counter
          counterData={
            counterDataForDepartmentOfElectricalAndElectronicsEngineering
          }
          classes="counter"
        />
      <CustomInstitueVissionMissionCard data={missionandvisionofelectricalandelectronicsengineering}/>
      </div>
      <CustomInstituteProfileCard data={departmentHeadProfileData}/>
      <ProgramsAndFees/>

      <CustomTopFooter data={instituteFooterData} />
    </div>
  );
};

export default DepartmentOfElectricalAndElectronicsEngineeringPage;
    