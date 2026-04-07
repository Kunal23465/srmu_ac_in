import React from "react";
import Classes from "../../../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../../../utils/custom/CustomOverviewSection";
import CustomInstituteCoursesCard from "../../../../../utils/custom/CustomInstituteCoursesCard";
import CustomTopFooter from "../../../../../utils/custom/CustomTopFooter";
import CustomInstitueVissionMissionCard from "../../../../../utils/custom/CustomInstitueVissionMissionCard";
import CustomInstituteProfileCard from "../../../../../utils/custom/CustomInstituteProfileCard";

interface InstituteDepartmentProps {
  data?: any;
}

const InstituteDepartment: React.FC<InstituteDepartmentProps> = ({ data }) => {
  if (!data) {
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
        <CustomOverviewSection data={data.overviewData} />
        <CustomInstitueVissionMissionCard data={data.visionMissionData} />
      </div>

      {data.profileCardData && (
        <CustomInstituteProfileCard data={data.profileCardData} />
      )}

      <div className={`${Classes["container"]}`}>
        <div className="my-15 flex flex-col lg sm:flex-row">
          <div className="text-2xl w-full md:w-[30%] mr-0 md:mr-30 font-medium sm:text-5xl">
            Our Departments
          </div>
          <div className="w-full md:w-[70%]">
            <CustomInstituteCoursesCard data={data.instituteCourseCardData} />
          </div>
        </div>
      </div>

      <CustomTopFooter data={data.footerData} />
    </div>
  );
};

export default InstituteDepartment;
