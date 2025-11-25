import React from "react";
import Classes from "../../../../../utils/styles/Global.module.css";
import {
  instituteCourseCardData,
  InstituteofTechnologyOverviewData,
  InstituteofTechnologyTopFooterData,
  visionMissionData,
} from "../../../../../data/academics/institute/institute-department/institute-of-technology-data";
import CustomOverviewSection from "../../../../../utils/custom/CustomOverviewSection";
import CustomInstituteCoursesCard from "../../../../../utils/custom/CustomInstituteCoursesCard";
import CustomTopFooter from "../../../../../utils/custom/CustomTopFooter";
import CustomInstitueVissionMissionCard from "../../../../../utils/custom/CustomInstitueVissionMissionCard";

const InstituteofTechnology: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={InstituteofTechnologyOverviewData} />
        <CustomInstitueVissionMissionCard data={visionMissionData} />
        <div className="my-15 flex flex-col lg sm:flex-row">
          <div className="text-2xl mr-20 font-medium sm:text-5xl">Our Departments</div>
          <div>
            <CustomInstituteCoursesCard data={instituteCourseCardData} />
          </div>
        </div>
      </div>
      <CustomTopFooter data={InstituteofTechnologyTopFooterData} />
    </div>
  );
};

export default InstituteofTechnology;
