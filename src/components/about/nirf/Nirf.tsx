import { FC } from "react";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import { fifthCycleData, fourthCycleData, NIRFOverviewData, thirdCycleData } from "../../../data/about/nirf/nirf-data";
import CustomTable from "../../../utils/custom/CustomTable";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../../data/about/leadership-and-governance/leadership-and-governance-data";

const Nirf: FC = () => {
  return (
    <>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={NIRFOverviewData} />
        <h1 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 mt-14 mb-5 text-[#023047] lg:mt-20 font-semibold">NIRF Reports</h1>
        <CustomTable columnOneHeader="Overall" columnTwoHeader="Downloads" data={thirdCycleData} />

        <CustomTable columnOneHeader="Law" columnTwoHeader="Downloads" data={fourthCycleData} />

        <CustomTable columnOneHeader="Engineering" columnTwoHeader="Downloads" data={fifthCycleData} />
      </div>
      <CustomTopFooter data={CustomTopFooterData1} />
    </>
  );
};

export default Nirf;
