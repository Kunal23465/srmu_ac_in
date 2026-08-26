import React from "react";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import { greenRedressalOverviewData, grievanceData } from "../../../data/campus-life/grievance-redressal-system/grievance-redressal-system-data";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { feeStructureCustomTopFooter } from "../../../data/admissions/fee-structure/fee-structue-data";
import CustomTabs from "../../../utils/custom/CustomTabs";
import AboutGrievance from "./AboutGrievance";
import TypesOfGrievance from "./TypesOfGrievance";
import Procedures from "./Procedures";
import GeneralGuidelines from "./GeneralGuidelines";
import ProcessFlowCall from "./ProcessFlowCall";
import ProcessFlowStudent from "./ProcessFlowStudent";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

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
        <div className="flex justify-left mb-8">
          <Link
            to="https://eyojan.unif.co.in/" target="_blank" rel="noopener noreferrer"
            className="bg-[#ffb703] text-sm  border-2 uppercase   border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] inline-flex gapx-x-1 items-center   font-semibold px-4 lg:px-5 py-2 rounded-md text-nowrap mt-5 sm:mt-0  group "
          >
            Click here to login to Grievance Redressal Portal
            <span className="transition-all duration-200 group-hover:rotate-[90deg] ml-3">

              <LuSquareArrowOutUpRight size={20} />
            </span>
          </Link>
        </div>
        <CustomTabs
          items={items}
          variant="underline"
          activeTextColor="#003049"
          inactiveTextColor="#555555"
          hoverTextColor="#003049"
          activeUnderlineColor="#ffb703"
          fullWidthUnderlineColor="#ffcc55"
          alignTabs="start"
        />
      </div>
      <ProcessFlowCall />
      <ProcessFlowStudent />
      <div className="bg-[#f1f1f1] py-20">
        <div className={`${Classes["container"]} `}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* LEFT CARD */}
            {/* <div>
                   <button
              type="button"
              aria-label="Grievance Redressal Mechanism for Students"
              className="
        block rounded-[10px] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.16)]
        px-8 py-16 w-[300px] sm:w-[340px] xl:w-[385px] h-[186px] text-center text-[20px] font-semibold leading-snug
        border-t-[5px] border-b-[5px] 
        border-t-[#0f4a85] 
        border-b-[#ffb703]
        transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl cursor-pointer
      "
            >
              Grievance Redressal Mechanism for Students
            </button>
          </div> */}

            {/* RIGHT CARD */}
            <div>
              <Link to="https://eyojan.unif.co.in/" target="_blank" rel="noopener noreferrer"
                className="
        block rounded-[10px] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.16)]
        px-8 py-16 w-[300px] sm:w-[340px] xl:w-[385px] h-[186px] text-center text-[20px] font-semibold leading-snug
        border-t-[5px] border-b-[5px]
        border-t-[#0f4a85]
        border-b-[#ffb703]
        transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl cursor-pointer
      "
              >
                Click here to Login to Grievance Redressal Portal
              </Link>
            </div></div>
        </div>
      </div>

      <CustomTopFooter data={feeStructureCustomTopFooter} />
    </>
  );
};

export default GrievanceRedressalSystem;
