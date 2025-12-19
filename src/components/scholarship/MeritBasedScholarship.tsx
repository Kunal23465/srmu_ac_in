import React from "react";
import CustomScholarshipTable from "../../utils/custom/CustomScholarshiptable";
import {
  MeritBasedScholarshipBTech_Lateral_BArchTableData,
  MeritBasedScholarshipBTech_Lateral_BArchTableHeadData,
  MeritBasedScholarshipDiplomaDArchTableData,
  MeritBasedScholarshipDiplomaDArchTableHeadData,
  MeritBasedScholarshipPostGraduateTableData,
  MeritBasedScholarshipPostGraduateTableHeadData,
  MeritBasedScholarshipUnderGraduateIntegratedTableData,
  MeritBasedScholarshipUnderGraduateIntegratedTableHeadData,
} from "../../data/admissions/scholarship/merit-based-scholarship-data";

const MeritBasedScholarship: React.FC = () => {
  return (
    <div className="py-15 px-2 sm:px-10 lg:px-0">
      <h1 className="text-2xl lg:text-5xl pb-2 lg:pb-15 font-medium">Merit Based Scholarship</h1>
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:max-w-[310px]">
          <p className="text-xl lg:text-2xl font-bold pb-2 ">"Hard Work Pays Off"</p>
          <p className="pb-3 lg:pb-5">
            These scholarships have been designed to reward the outstanding efforts of meritorious students and make them believe that hard work never goes unrewarded.
          </p>
          <a href="\online-admission" className=" cursor-pointer text-white font-medium bg-[#0f4a85] border border-transparent transition-colors duration-500 hover:border-black hover:text-black hover:bg-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl">
            APPLY NOW
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:max-w-[860px] gap-5">
          <div className="py-8 px-4 border border-amber-400 rounded-3xl overflow-auto">
            <p className="text-lg sm:text-xl text-center pb-5 uppercase font-medium ">Under Graduate & Integrated</p>
            <CustomScholarshipTable head={MeritBasedScholarshipUnderGraduateIntegratedTableHeadData} data={MeritBasedScholarshipUnderGraduateIntegratedTableData} />
          </div>
          <div className="py-8 px-4 border border-amber-400 rounded-3xl overflow-auto">
            <p className="text-lg sm:text-xl text-center pb-5 uppercase font-medium">B.Tech (Lateral) & B.Arch.</p>
            <CustomScholarshipTable head={MeritBasedScholarshipBTech_Lateral_BArchTableHeadData} data={MeritBasedScholarshipBTech_Lateral_BArchTableData} />
          </div>
          <div className="py-8 px-4 border border-amber-400 rounded-3xl overflow-auto">
            <p className="text-lg sm:text-xl text-center pb-5 uppercase font-medium">Post Graduate</p>
            <CustomScholarshipTable head={MeritBasedScholarshipPostGraduateTableHeadData} data={MeritBasedScholarshipPostGraduateTableData} />
          </div>
          <div className="py-8 px-4 border border-amber-400 rounded-3xl overflow-auto">
            <p className="text-lg sm:text-xl text-center pb-5 uppercase font-medium">Diploma & D.Arch.</p>
            <CustomScholarshipTable head={MeritBasedScholarshipDiplomaDArchTableHeadData} data={MeritBasedScholarshipDiplomaDArchTableData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeritBasedScholarship;
