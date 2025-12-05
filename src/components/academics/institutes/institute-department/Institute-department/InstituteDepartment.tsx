import React from "react";
import Classes from "../../../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../../../utils/custom/CustomOverviewSection";
import CustomInstituteCoursesCard from "../../../../../utils/custom/CustomInstituteCoursesCard";
import CustomTopFooter from "../../../../../utils/custom/CustomTopFooter";
import CustomInstitueVissionMissionCard from "../../../../../utils/custom/CustomInstitueVissionMissionCard";
import CustomInstituteProfileCard from "../../../../../utils/custom/CustomInstituteProfileCard";
import { useLocation } from "react-router-dom";
const InstituteDepartment: React.FC = () => {
      const location = useLocation();
    const data = location.state;
    console.log("the institute dynamic page")
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={data.overviewData} />
        <CustomInstitueVissionMissionCard data={data.visionMissionData} />
      </div>
          {data.profileCardData &&
              <CustomInstituteProfileCard data={data.profileCardData} />}
      <div className={`${Classes["container"]}`}>
        <div className="my-15 flex flex-col lg sm:flex-row">
          <div className="text-2xl mr-30 font-medium sm:text-5xl">Departments</div>
          <div>
            <CustomInstituteCoursesCard data={data.instituteCourseCardData} />
          </div>
        </div>
      </div>
      <CustomTopFooter data={data.footerData} />
    </div>
  );
}

export default InstituteDepartment
