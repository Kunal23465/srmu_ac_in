import { CustomTopFooterData1 } from "../../../data/about/leadership-and-governance/leadership-and-governance-data";
import { SwayamNptelOverviewData } from "../../../data/academics/swayamnptel/swayam-nptel";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import Classes from "../../../utils/styles/Global.module.css";
import AboutNptel from "./AboutNptel";
import SrmuSwayam from "./SrmuSwayam";

const SwayamNptel = () => {
    return (
        <div>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={SwayamNptelOverviewData} />

                <AboutNptel />
                <SrmuSwayam />

            </div>
            <CustomTopFooter data={CustomTopFooterData1} />

        </div>
    )
}

export default SwayamNptel