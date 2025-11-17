import React from 'react'
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { CustomTopFooterAbout } from '../../../data/about/aboutusData';
import CustomOverviewSection from '../../scholarship/ScholarshipOverviewSection';
import { ConsultancyOverviewData } from '../../../data/research/consultancy/consultancy-data';
import Classes from "../../../utils/styles/Global.module.css";
import ConsultancyTable from './table/ConsultancyTable';
const Consultancy:React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={ConsultancyOverviewData} />
        <ConsultancyTable />
      </div>

      <CustomTopFooter data={CustomTopFooterAbout} />
    </div>
  );
}

export default Consultancy
