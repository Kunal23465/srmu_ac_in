import React from "react";
import CustomScholarshipTable from "../../utils/custom/CustomScholarshiptable";
import {
  ScholarshipEngineeringTableData,
  ScholarshipEngineeringTableHeadData,
  ScholarshipLawTableData,
  ScholarshipLawTableHeadData,
  ScholarshipManagement1TableData,
  ScholarshipManagement1TableHeadData,
  ScholarshipManagement2TableData,
  ScholarshipManagement2TableHeadData,
} from "../../data/admissions/scholarship/national-score-based-scholarship-data";

const NationalScoreBasedScholarship: React.FC = () => {
  return (
    <div className="py-15 px-2 sm:px-10 lg:px-0">
      <h1 className="text-2xl lg:text-5xl pb-2 lg:pb-15 font-medium">National Score Based Scholarship</h1>
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:max-w-[310px]">
          <p className="text-xl lg:text-2xl font-bold pb-2 ">"It’s hard to beat a person who never gives up"</p>
          <p className="pb-3 lg:pb-5">
            These scholarships will act as a bridge between the most challenging educational environment and the best inquisitive young mind of the country to join up and create
            everlasting marks on our society.
          </p>
          <a href="\online-admission" className="cursor-pointer text-white font-medium bg-[#0f4a85] border border-transparent transition-colors duration-500 hover:border-black hover:text-black hover:bg-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl">
            APPLY NOW
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:max-w-[860px] gap-5">
          <div className="py-8 px-4 border border-amber-400 rounded-3xl overflow-auto">
            <p className="text-[15px] sm:text-[17.82px]  text-center pb-5 uppercase font-bold text-[#212529]">Engineering</p>
            <CustomScholarshipTable head={ScholarshipEngineeringTableHeadData} data={ScholarshipEngineeringTableData} />
          </div>
          <div className="py-8 px-4 border border-amber-400 rounded-3xl overflow-auto">
            <p className="text-[15px] sm:text-[17.82px]  text-center pb-5 uppercase font-bold text-[#212529]">Management</p>
            <CustomScholarshipTable head={ScholarshipManagement1TableHeadData} data={ScholarshipManagement1TableData} />
          </div>
          <div className="py-8 px-4 border border-amber-400 rounded-3xl overflow-auto">
            <p className="text-[15px] sm:text-[17.82px]  text-center pb-5 uppercase font-bold text-[#212529]">Management</p>
            <CustomScholarshipTable head={ScholarshipManagement2TableHeadData} data={ScholarshipManagement2TableData} />
          </div>
          <div className="py-8 px-4 border border-amber-400 rounded-3xl overflow-auto">
            <p className="text-[15px] sm:text-[17.82px]  text-center pb-5 uppercase font-bold text-[#212529]">Law</p>
            <CustomScholarshipTable head={ScholarshipLawTableHeadData} data={ScholarshipLawTableData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalScoreBasedScholarship;
