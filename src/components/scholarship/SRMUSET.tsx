import React from "react";
import CustomScholarshipTable from "../../utils/custom/CustomScholarshiptable";
import { secondTableData, secondTableHeadData, srmusetScholarshipEngineeringTableData, srmusetScholarshipEngineeringTableHeadData } from "../../data/admissions/scholarship/srmuset-data";

const SRMUSET: React.FC = () => {
  return (
    <div className="py-15 px-2 sm:px-10 lg:px-0">
      <h1 className="text-2xl lg:text-5xl pb-2 lg:pb-15 font-medium">SRMUSET</h1>
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:max-w-[310px]">
          <p className="pb-2 sm:pb-5 text-sm sm:text-[16px]">
            Applications opening from <strong>05th Nov 2025</strong> for SRMUSET (Scholarship cum Entrance Test){" "}
            <a
              className="font-bold underline"
              href="https://srmuset.srmu.ac.in/?_gl=1*109ctap*_gcl_au*NzM0NDM3NTE2LjE3NjMxMTgyMjg.*_ga*MTM1NTE3MDg2Ny4xNzYzMTE4MjI4*_ga_QZEQ59Q6ZL*czE3NjQ1NjE5MjIkbzc3JGcxJHQxNzY0NTY0MTI0JGo2MCRsMCRoNjA4MTA1OTI2"
            >
              Know More
            </a>
          </p>
          <p className="pb-2 sm:pb-5 ">
            <strong>100% fee waivers</strong> to top scorers.
          </p>
          <p className="pb-2 sm:pb-5 ">
            Scholarships worth <strong>Rs 10 Crores</strong> to be given out."
          </p>
          <a href="\online-admission" className="cursor-pointer text-white font-medium bg-[#0f4a85] border border-transparent transition-colors duration-500 hover:border-black hover:text-black hover:bg-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl">
            APPLY NOW
          </a>
        </div>
        <div>
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 lg:max-w-[860px] gap-5">
            <div className="py-8 px-4 border border-amber-400 rounded-3xl overflow-auto">
              <p className="text-lg sm:text-xl text-center pb-5 uppercase font-bold">Scholarship Slabs and Quantum  </p>
              <CustomScholarshipTable head={srmusetScholarshipEngineeringTableHeadData} data={srmusetScholarshipEngineeringTableData} showThirdColumn={true} />
            </div>
            <div className="py-8 px-4 border border-amber-400 rounded-3xl overflow-auto">
              <p className="text-lg sm:text-xl text-center pb-5 uppercase font-bold">PG Programmes (Except LLM – One Year)- Applicable to Bed LLB</p>
              <CustomScholarshipTable head={secondTableHeadData} data={secondTableData} showThirdColumn={false} />
            </div>
          </div>
          {/* <div className="w-full lg:max-w-[860px] mt-3">
            <div className="py-8 px-4 border border-amber-400 rounded-3xl overflow-auto">
              <p className="text-lg sm:text-xl text-center pb-5 uppercase font-bold">B.Tech Core(Civil/ Mechanical, EC and Electrical) Programmes (Annual Scholarship Amount) </p>
              <CustomScholarshipTable head={srmusetScholarshipEngineeringTableHeadData} data={srmusetScholarshipEngineeringTableData} showThirdColumn={false} />
            </div>
          </div> */}
        </div>
        {/* <div className="w-full lg:max-w-[860px]">
          <div className="py-8 px-4 border border-amber-400 rounded-3xl overflow-auto">
            <p className="text-lg sm:text-xl text-center pb-5 uppercase font-bold">Engineering11</p>
            <CustomScholarshipTable head={srmusetScholarshipEngineeringTableHeadData} data={srmusetScholarshipEngineeringTableData} showThirdColumn={false} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SRMUSET;
