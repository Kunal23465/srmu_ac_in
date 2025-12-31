import { termsConditonOverviewData } from "../../data/terms-condition/terms-contion-data";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import Classes from "../../utils/styles/Global.module.css";
import DeatilsofTerms from "./DeatilsofTerms";


const TermsAndConditionComp = () => {
  return (
    <div>
          <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={termsConditonOverviewData} />
<DeatilsofTerms/>
          </div>
    </div>
  )
}

export default TermsAndConditionComp