import Classes from "../../utils/styles/Global.module.css";
import { RTIOverviewData } from "../../data/rti/rti-data";
import CustomOverviewSection from "../scholarship/ScholarshipOverviewSection";
import rti from "../../assets/images/rti/download-(4)-151223025127.png"
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../data/about/leadership-and-governance/leadership-and-governance-data";


const RtiComponent = () => {
    return (
        <div>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={RTIOverviewData} />
                <img src={rti} alt="RTI information" />
            </div>
            <CustomTopFooter data={CustomTopFooterData1} />


        </div>
    )
}

export default RtiComponent
