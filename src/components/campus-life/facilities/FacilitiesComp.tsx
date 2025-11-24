import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import { FacilitiesOverviewData } from '../../../data/campus-life/facilities/facilities-data';
import FinalSlider from './FinalSlider';
import Cafeteria from "./Cafeteria";
import SportsAndGames from "./SportsAndGames";
import Transportation from "./Transportation";
import LastSlider from "./LastSlider";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { feeStructureCustomTopFooter } from "../../../data/admissions/fee-structure/fee-structue-data";


const FacilitiesComp = () => {
  return (
    <>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={FacilitiesOverviewData} />
      </div>
      <FinalSlider />
      <Cafeteria />
      <div className="bg-[#ecf0f9]">
        <SportsAndGames />
      </div>


      <div className={`${Classes["container"]}`}>
        <Transportation />
      </div>

      <div className="font-sans bg-[#ffb703] min-h-screen flex items-center justify-center p-8 overflow-hidden">
        <LastSlider />
      </div>

      <CustomTopFooter data={feeStructureCustomTopFooter} />


    </>
  )
}

export default FacilitiesComp