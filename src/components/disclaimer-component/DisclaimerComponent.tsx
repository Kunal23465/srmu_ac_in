import { FC } from "react";
import Classes from "../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { DisclaimerOverviewData } from "../../data/disclaimer/disclaimer-data";
import DetailofDisclaimer from "./DetailofDisclaimer";


const DisclaimerComponent: FC = () => {
  return (
    <div>
        <div className={`${Classes["container"]}`}>
    <CustomOverviewSection data={DisclaimerOverviewData}/>
    <DetailofDisclaimer/>
        </div>
    </div>
  )
}

export default DisclaimerComponent