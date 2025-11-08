import { FC } from "react"
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import { EContentOverviewData } from "../../../data/academics/e-content-cell/e-content-cell-data";
import AimandObjectives from "./AimandObjectives";
import Initiatives from "./Initiatives";
import CommitteeMembers from "./CommitteeMembers";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../../data/about/leadership-and-governance/leadership-and-governance-data";


const EContentCell : FC = () => {
  return (
    <>
    
      <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={EContentOverviewData} />
    <AimandObjectives/>
    <Initiatives/>
    <CommitteeMembers/>
    </div>
          <CustomTopFooter data={CustomTopFooterData1} />

    </>
  )
}

export default EContentCell