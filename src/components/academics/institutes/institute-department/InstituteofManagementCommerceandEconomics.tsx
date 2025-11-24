import React from 'react'
import Classes from "../../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../../utils/custom/CustomOverviewSection'
import CustomInstituteCoursesCard from '../../../../utils/custom/CustomInstituteCoursesCard'
import { instituteCourseCardData, InstituteofManagementCommerceandEconomicsOverviewData, InstituteofManagementCommerceandEconomicsTopFooterData, InstituteofManagementCommerceandEconomicsvisionMissionData } from '../../../../data/academics/institute/institute-department/institute-of-management-commerce-and-economics-data';
import CustomTopFooter from '../../../../utils/custom/CustomTopFooter';
import CustomInstitueVissionMissionCard from '../../../../utils/custom/CustomInstitueVissionMissionCard';

const InstituteofManagementCommerceandEconomics: React.FC = () => {
  return (
    <div><div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={InstituteofManagementCommerceandEconomicsOverviewData} />
        <CustomInstitueVissionMissionCard data={InstituteofManagementCommerceandEconomicsvisionMissionData} />
        <div className="my-15 flex flex-col lg sm:flex-row">
          <div className="text-2xl mr-30 font-medium sm:text-5xl">Departments</div>
          <div>
            <CustomInstituteCoursesCard data={instituteCourseCardData} />
          </div>
        </div>
      </div>
                  <CustomTopFooter data={InstituteofManagementCommerceandEconomicsTopFooterData} />
</div>
  )
}

export default InstituteofManagementCommerceandEconomics