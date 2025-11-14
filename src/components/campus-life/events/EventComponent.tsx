import { EventsOverviewData } from "../../../data/campus-life/events/events-data";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import Classes from "../../../utils/styles/Global.module.css";
import AnnualFest from "./AnnualFest";
import ConferencesSection from "./ConferencesSection";
import Festivals from "./Festivals";
import TedxSharing from "./TedxSharing";

const EventComponent = () => {
  return (
    <div>

      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={EventsOverviewData} />

      </div>
      <AnnualFest />
      <div className={`${Classes["container"]}`}>
        <ConferencesSection />

      </div>
      <Festivals />
      <div className={`${Classes["container"]}`}>
        <TedxSharing />
      </div>

    </div>
  )
}

export default EventComponent