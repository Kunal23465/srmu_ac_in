import { EventsOverviewData } from "../../../data/campus-life/events/events-data";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import Classes from "../../../utils/styles/Global.module.css";
import AnnualFest from "./AnnualFest";
import ConferencesSection from "./ConferencesSection";

const EventComponent = () => {
  return (
    <div>
        
        <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={EventsOverviewData} />

        </div>
        <AnnualFest/>
        <ConferencesSection/>
    </div>
  )
}

export default EventComponent