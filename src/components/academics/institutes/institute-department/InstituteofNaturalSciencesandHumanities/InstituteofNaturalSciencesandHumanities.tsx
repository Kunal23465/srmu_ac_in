import React from "react";
import Classes from "../../../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../../../utils/custom/CustomOverviewSection";
import CustomInstituteCoursesCard from "../../../../../utils/custom/CustomInstituteCoursesCard";
import CustomTopFooter from "../../../../../utils/custom/CustomTopFooter";
import {
  InstituteofNaturalSciencesandHumanitiesinstituteCourseCardData,
  InstituteofNaturalSciencesandHumanitiesOverviewData,
  InstituteofNaturalSciencesandHumanitiesTopFooterData,
  InstituteofNaturalSciencesandHumanitiesvisionMissionData,
} from "../../../../../data/academics/institute/institute-department/institute-of-natural-sciences-and-humanities-data";
import CustomInstitueVissionMissionCard from "../../../../../utils/custom/CustomInstitueVissionMissionCard";

const InstituteofNaturalSciencesandHumanities: React.FC = () => {
  return (
    <div>
      {" "}
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={InstituteofNaturalSciencesandHumanitiesOverviewData} />
        <CustomInstitueVissionMissionCard data={InstituteofNaturalSciencesandHumanitiesvisionMissionData} />
        <div className="my-15 flex flex-col lg sm:flex-row">
          <div className="text-2xl mr-25 font-medium sm:text-5xl">Our Departments</div>
          <div>
            <CustomInstituteCoursesCard data={InstituteofNaturalSciencesandHumanitiesinstituteCourseCardData} />
          </div>
        </div>
      </div>
      <CustomTopFooter data={InstituteofNaturalSciencesandHumanitiesTopFooterData} />
    </div>
  );
};

export default InstituteofNaturalSciencesandHumanities;
