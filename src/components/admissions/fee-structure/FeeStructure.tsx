import React from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import { feeStructureCustomTopFooter, feeStructureOverviewData, ProgramFeeData } from '../../../data/admissions/fee-structure/fee-structue-data';
import CustomTable from '../../../utils/custom/CustomTable';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';

const FeeStructure: React.FC = () => {
  return (
    <>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={feeStructureOverviewData} />
        <CustomTable
          columnOneHeader="Program Fee"
          columnTwoHeader="Downloads"
          data={ProgramFeeData}
        />

      </div>
      <CustomTopFooter data={feeStructureCustomTopFooter} />

    </>
  )
}

export default FeeStructure;