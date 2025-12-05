import React from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import { careerFormOverviewData } from '../../../data/home/career-form-data';
import CareerFormInputs from './CareerFormInputs';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { NoticeTopFooterData } from '../../../data/notice/NoticeData';


const CareerForm:React.FC = () => {
  return (
    <>
      <div className={`${Classes["container"]}`}>
      <CustomOverviewSection data={careerFormOverviewData} />
      <div className='pt-20 pb-6'>

      <CareerFormInputs/>
      </div>

      
      </div>
      <CustomTopFooter data={NoticeTopFooterData} />

    </>
    
  )
}

export default CareerForm