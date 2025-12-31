import { FC } from "react"
import Classes from "../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { PrivacyPolicyOverviewData } from "../../data/privacy/privacy-data";
import DetailsofPrivacy from "./DetailsofPrivacy";


const PrivacyPolicyComp: FC = () => {
  return (
    <div>
        <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={PrivacyPolicyOverviewData} />
        <DetailsofPrivacy/>
        </div>

    </div>
  )
}

export default PrivacyPolicyComp