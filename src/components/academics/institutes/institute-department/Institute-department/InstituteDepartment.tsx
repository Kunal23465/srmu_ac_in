import React, { useEffect } from "react";
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

  // 1️ Save data to sessionStorage whenever it exists
  useEffect(() => {
    if (data) {
      sessionStorage.setItem("institute_prev_data", JSON.stringify(data));
    }
  }, [data]);

  // 2️ If state is null, restore previous data
  const finalData = data || JSON.parse(sessionStorage.getItem("institute_prev_data") || "null");

  if (!finalData) {
    return (
      <div className={`${Classes["container"]} py-20`}>
        <h2 className="text-center text-2xl font-semibold">
          Data not available.
        </h2>
      </div>
    );
  }

  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={finalData.overviewData} />
        <CustomInstitueVissionMissionCard data={finalData.visionMissionData} />
      </div>

      {finalData.profileCardData && (
        <CustomInstituteProfileCard data={finalData.profileCardData} />
      )}

      <div className={`${Classes["container"]}`}>
        <div className="my-15 flex flex-col lg sm:flex-row">
          <div className="text-2xl mr-30 font-medium sm:text-5xl">
            Departments
          </div>
          <div>
            <CustomInstituteCoursesCard data={finalData.instituteCourseCardData} />
          </div>
        </div>
      </div>

      <CustomTopFooter data={finalData.footerData} />
    </div>
  );
};

export default InstituteDepartment;
