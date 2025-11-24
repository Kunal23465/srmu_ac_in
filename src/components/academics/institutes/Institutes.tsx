import React, { useState } from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import { AcademicsOverviewData } from '../../../data/academics/institute/institute-form-data';
import OurInstitutes from './OurInstitutes';
import InstituteCardList from './InstituteCardList';
import EnquiryForm from './EnquiryForm';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { CustomTopFooterData1 } from '../../../data/about/leadership-and-governance/leadership-and-governance-data';
// import CustomPlacedStudentTable from '../../../utils/custom/CustomPlacedStudentTable';
// import { headers, studentData, visionMissionData } from '../../../data/academics/institute/data';
// import CustomInstitueVissionMissionCard from '../../../utils/custom/CustomInstitueVissionMissionCard';



const Institutes: React.FC = () => {

  return (
    <>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={AcademicsOverviewData} />
        <OurInstitutes />
        <InstituteCardList />
        {/* <CustomInstitueVissionMissionCard data={visionMissionData} /> */}
      </div>

      {/* <div className='bg-[#ecf0f9]'> */}
{/* <div className={`${Classes["container"]}`}>
   <CustomPlacedStudentTable
        students={studentData}
        headers={headers}
      />
</div> */}
      {/* </div> */}

     
      <EnquiryForm />
      <CustomTopFooter data={CustomTopFooterData1} />



      

    </>
  )
}

export default Institutes