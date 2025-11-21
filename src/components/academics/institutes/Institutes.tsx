import React from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import { AcademicsOverviewData } from '../../../data/academics/institute/institute-form-data';
import OurInstitutes from './OurInstitutes';
import InstituteCardList from './InstituteCardList';
import EnquiryForm from './EnquiryForm';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { CustomTopFooterData1 } from '../../../data/about/leadership-and-governance/leadership-and-governance-data';


const Institutes:React.FC = () => {
  return (
    <>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={AcademicsOverviewData} />
        <OurInstitutes />
        <InstituteCardList />

      </div>
      <EnquiryForm />
      <CustomTopFooter data={CustomTopFooterData1} />
    </>
  )
}

export default Institutes