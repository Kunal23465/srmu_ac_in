import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection'
import { GreenInitiativeOverviewData } from '../../../data/campus-life/green-initiative/green-initiative-data'
import Cards from './Cards';

const GreenInitiativesComp = () => {
    return (
        <div>

            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={GreenInitiativeOverviewData} />
                <Cards /></div>

        </div>
    )
}

export default GreenInitiativesComp