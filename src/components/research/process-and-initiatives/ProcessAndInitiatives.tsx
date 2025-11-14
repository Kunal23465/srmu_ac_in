import React from 'react'
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import { ProcessInitiativeOverviewData } from '../../../data/research/process-and-initiatives/process-and-initiatives-data';
import Classes from "../../../utils/styles/Global.module.css";
const ProcessAndInitiatives:React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={ProcessInitiativeOverviewData} />
      </div>
    </div>
  );
}

export default ProcessAndInitiatives
