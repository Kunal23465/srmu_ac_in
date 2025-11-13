import { EventsOverviewData } from "../../../data/campus-life/events/events-data";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import Classes from "../../../utils/styles/Global.module.css";
import AnnualFest from "./AnnualFest";

const EventComponent = () => {
  return (
    <div>
        
        <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={EventsOverviewData} />

        </div>
        <AnnualFest/>
    </div>
  )
}

export default EventComponent