import React from "react";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomCommitteeCardSection from "../../../utils/custom/CustomCommitteeCardSection";

import {
  CommitteeOverviewData,
  committeeCards,
} from "../../../data/about/committee-and-cells/committee-and-cells-data";
import { CustomTopFooterData1 } from "../../../data/about/leadership-and-governance/leadership-and-governance-data";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";

const Committees: React.FC = () => {
  return (
    <>


      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={CommitteeOverviewData} />
        <CustomCommitteeCardSection data={committeeCards} />
      </div>



      <CustomTopFooter data={CustomTopFooterData1} />

    </>


  );
};

export default Committees;
