import React from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import { StudentSenateOverviewData } from '../../../data/campus-life/student-senate/student-senate-data';
import DirectorSectionforSenate from './DirectorSectionforSenate';
import CardListing from './CardListing';
import MeetingFrequency from './MeetingFrequency';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { feeStructureCustomTopFooter } from '../../../data/admissions/fee-structure/fee-structue-data';


const StudentSenateComp = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={StudentSenateOverviewData} /></div>

      <div className='bg-[#ecf0f9]'>
        <DirectorSectionforSenate />
      </div>

      <div className={`${Classes["container"]}`}>
        <CardListing />
      </div>
      <MeetingFrequency />

      <CustomTopFooter data={feeStructureCustomTopFooter} />

    </div>


  )
}

export default StudentSenateComp