import React from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import CustomTable from '../../../utils/custom/CustomTable';
import { admissionBrochureData, admissionPoliciesOverviewData, PoliciesAndDownloadsData } from '../../../data/admissions/admission-policy/admission-policy-data';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { feeStructureCustomTopFooter } from '../../../data/admissions/fee-structure/fee-structue-data';


const AdmissionPolicy:React.FC = () => {
  return (
      <>
          <div className={`${Classes["container"]}`}>
              <CustomOverviewSection data={admissionPoliciesOverviewData} />
              <CustomTable
                  columnOneHeader="Admission Brochure"
                  columnTwoHeader="Downloads"
                  data={admissionBrochureData}
              /> 
              <CustomTable
                  columnOneHeader="Policies"
                  columnTwoHeader="Downloads"
                  data={PoliciesAndDownloadsData}
              />

          </div>
          <CustomTopFooter data={feeStructureCustomTopFooter} />

      </>
  )
}

export default AdmissionPolicy