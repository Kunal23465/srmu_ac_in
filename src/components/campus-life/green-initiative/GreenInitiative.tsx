import React from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { feeStructureCustomTopFooter } from '../../../data/admissions/fee-structure/fee-structue-data';
import { ecoData, greenInitiativeOverviewData } from '../../../data/campus-life/green-initiative/green-initiative-data';
import EcoCards from './EchoCards';

const GreenInitiative: React.FC = () => {
  return (
    <>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={greenInitiativeOverviewData} />
        <div >
          <EcoCards data={ecoData} />
        </div>

      </div>
      <CustomTopFooter data={feeStructureCustomTopFooter} />
    </>
  )
}

export default GreenInitiative;