import { CustomTopFooterData1 } from "../../../data/about/leadership-and-governance/leadership-and-governance-data";
import { AcademicBankCreditOverviewData } from "../../../data/academics/academic-credit/academic-credit-data";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import Classes from "../../../utils/styles/Global.module.css";
import { ABC } from "./ABC";
import DigiLocker from "./DigiLocker";
import Videos from "./Videos";

const AcademicBank = () => {
  return (
    <>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={AcademicBankCreditOverviewData} />
        <DigiLocker />
        <ABC />
        <Videos/>
      </div>
      <CustomTopFooter data={CustomTopFooterData1} />



    </>
  )
}

export default AcademicBank