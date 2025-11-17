import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection'
import { GreenInitiativeOverviewData } from '../../../data/campus-life/green-initiative/green-initiative-data'
import Cards from './Cards';
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { feeStructureCustomTopFooter } from "../../../data/admissions/fee-structure/fee-structue-data";

const GreenInitiativesComp = () => {
    return (
        <div>

            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={GreenInitiativeOverviewData} />
                <Cards /></div>
                 <CustomTopFooter data={feeStructureCustomTopFooter} />

        </div>
    )
}

export default GreenInitiativesComp