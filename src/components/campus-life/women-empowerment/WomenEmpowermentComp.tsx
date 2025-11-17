import { feeStructureCustomTopFooter } from "../../../data/admissions/fee-structure/fee-structue-data";
import { WomenEmpowerOverviewData } from "../../../data/campus-life/women-empowerment/women-empowerment-data";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import Classes from "../../../utils/styles/Global.module.css";
import CardModalSection from "./CardModalSection";
import ImageSection from "./ImageSection";


const WomenEmpowermentComp = () => {
    return (
        <div>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={WomenEmpowerOverviewData} />
                
            </div>

            <ImageSection/>

            <div className={`${Classes["container"]}`}>
                <CardModalSection/>
            </div>
             <CustomTopFooter data={feeStructureCustomTopFooter} />
        </div>
    )
}

export default WomenEmpowermentComp