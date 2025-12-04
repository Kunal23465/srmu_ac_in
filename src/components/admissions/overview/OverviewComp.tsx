import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import { AdmissionsOverviewData } from '../../../data/admissions/overview/admission-overview-data';
import OnlyCampus from './OnlyCampus';
import CardList from "./CardList";
import AdvantageSlider from "./AdvantageSlider";
import LastMenu from "./LastMenu";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../../data/about/leadership-and-governance/leadership-and-governance-data";


const OverviewComp = () => {
  return (
    <>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={AdmissionsOverviewData} />
      </div>
      <OnlyCampus />
      <div className={`${Classes["container"]}`}>
        <CardList />
      </div>
      <AdvantageSlider />
        <LastMenu />

            <CustomTopFooter data={CustomTopFooterData1} />

    </>
  )
}

export default OverviewComp;