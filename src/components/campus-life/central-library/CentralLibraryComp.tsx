import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSectionForCentralLibrary from '../../../utils/custom/CustomOverviewForCentralLibrary'
import { CentralLibraryOverviewData, counterDataForCentralLibraryPage } from "../../../data/campus-life/central-library/central-library-data";
import Counter from "../../../utils/custom/Counter";
import CentralLibrarySlider from "./CentralLibrarySlider";
import MissionCentralLibrary from "./MissionCentralLibrary";
import LibraryServices from "./LibraryServices";
import CentralEndingSlider from "./CentralEndingSlider";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { feeStructureCustomTopFooter } from "../../../data/admissions/fee-structure/fee-structue-data";

const CentralLibraryComp = () => {
    return (
        <div>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSectionForCentralLibrary data={CentralLibraryOverviewData} />
                {/* @ts-ignore */}
                <Counter counterData={counterDataForCentralLibraryPage} classes="counter" aboutusClass={"text-black mt-3"} />
                <CentralLibrarySlider />
                <MissionCentralLibrary />
                <LibraryServices />
                <CentralEndingSlider />
            </div>
            <CustomTopFooter data={feeStructureCustomTopFooter} />
        </div>
    )
}

export default CentralLibraryComp