import React from 'react'
import Classes from "../../utils/styles/Global.module.css";
import ScholarshipOverviewSection from './ScholarshipOverviewSection';
import { scholarshipData } from '../../data/admissions/scholarship/scholarship-data';

const Scholarship:React.FC = () => {
  return (
      <>
          <div className={`${Classes["container"]}`}>
              <ScholarshipOverviewSection data={scholarshipData} />
       

          </div>
    </>
  )
}

export default Scholarship