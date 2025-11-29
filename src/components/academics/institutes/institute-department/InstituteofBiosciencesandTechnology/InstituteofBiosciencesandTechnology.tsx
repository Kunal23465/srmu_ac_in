import React from "react";
import Classes from "../../../../../utils/styles/Global.module.css";
import {
  instituteCourseCardData,
  InstituteofBiosciencesandTechnologyOverviewData,
  InstituteofBiosciencesandTechnologyTopFooterData,
  visionMissionData,
} from "../../../../../data/academics/institute/institute-department/institute-of-biosciences-and-technology-data";
import CustomOverviewSection from "../../../../../utils/custom/CustomOverviewSection";
import CustomInstituteCoursesCard from "../../../../../utils/custom/CustomInstituteCoursesCard";
import CustomTopFooter from "../../../../../utils/custom/CustomTopFooter";
import CustomInstitueVissionMissionCard from "../../../../../utils/custom/CustomInstitueVissionMissionCard";
import CustomInstituteProfileCard from "../../../../../utils/custom/CustomInstituteProfileCard";
import { InstituteofBiosciencesandTechnologyinstituteProfiles } from "../../../../../data/academics/institute/institute-department/institute-of-biosciences-and-technology-data";

const InstituteofBiosciencesandTechnology: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={InstituteofBiosciencesandTechnologyOverviewData} />
        <CustomInstitueVissionMissionCard data={visionMissionData} />
      </div>
      <CustomInstituteProfileCard data={InstituteofBiosciencesandTechnologyinstituteProfiles} />
      <div className={`${Classes["container"]}`}>
        <div className="my-15 flex flex-col lg sm:flex-row">
          <div className="text-2xl mr-25 font-medium sm:text-5xl">Our Departments</div>
          <div>
            <CustomInstituteCoursesCard data={instituteCourseCardData} />
          </div>
        </div>
      </div>
      <CustomTopFooter data={InstituteofBiosciencesandTechnologyTopFooterData} />
    </div>
  );
};

export default InstituteofBiosciencesandTechnology;
