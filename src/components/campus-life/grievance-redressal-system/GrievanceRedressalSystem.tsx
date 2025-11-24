import React from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import { greenRedressalOverviewData, grievanceData } from '../../../data/campus-life/grievance-redressal-system/grievance-redressal-system-data';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { feeStructureCustomTopFooter } from '../../../data/admissions/fee-structure/fee-structue-data';
import CustomTabs from '../../../utils/custom/CustomTabs';
import AboutGrievance from './AboutGrievance';
import TypesOfGrievance from './TypesOfGrievance';
import Procedures from './Procedures';
import GeneralGuidelines from './GeneralGuidelines';
import ProcessFlowCall from './ProcessFlowCall';
import ProcessFlowStudent from './ProcessFlowStudent';


const GrievanceRedressalSystem: React.FC = () => {
  const items = [
    {
      key: "1",
      label: "ABOUT GRIEVANCE REDRESSAL SYSTEM",
      content: <AboutGrievance data={grievanceData.about} />,
    },
    {
      key: "2",
      label: "TYPES OF GRIEVANCE",
      content: <TypesOfGrievance data={grievanceData.types} />,
    },
    {
      key: "3",
      label: "PROCEDURES",
      content: <Procedures data={grievanceData.procedures} />,
    },
    {
      key: "4",
      label: "GENERAL GUIDELINES",
      content: <GeneralGuidelines data={grievanceData.guidelines} />,
    },
  ];

  return (
    <>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={greenRedressalOverviewData} />
        <CustomTabs
          items={items}
          activeTextColor="#003049"
          inactiveTextColor="#555555"
          hoverTextColor="#003049"
          activeUnderlineColor="#ffb703"
          fullWidthUnderlineColor="#ffcc55"
        />

      </div>
      <ProcessFlowCall />
      <ProcessFlowStudent />
      <div className="bg-[#f1f1f1] py-20">
        <div className={`${Classes["container"]} flex flex-col md:flex-row items-center justify-center gap-6`}>

          {/* LEFT CARD */}
          <div
            className="
        block rounded-[10px] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.16)]
        px-8 py-16 w-[385px] h-[186px] text-center text-[20px] font-semibold leading-snug
        border-t-[5px] border-b-[5px] 
        border-t-[#0f4a85] 
        border-b-[#ffb703]
        transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl
      "
          >
            Grievance Redressal Mechanism for Students
          </div>

          {/* RIGHT CARD */}
          <a
            href="#"
            className="
        block rounded-[10px] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.16)]
        px-8 py-16 w-[385px] h-[186px] text-center text-[20px] font-semibold leading-snug
        border-t-[5px] border-b-[5px]
        border-t-[#0f4a85]
        border-b-[#ffb703]
        transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl
      "
          >
            Click Here To <br /> Login
          </a>

        </div>
      </div>




      <CustomTopFooter data={feeStructureCustomTopFooter} />
    </>)
}

export default GrievanceRedressalSystem