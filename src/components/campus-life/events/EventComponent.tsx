import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { feeStructureCustomTopFooter } from "../../../data/admissions/fee-structure/fee-structue-data";
import { EventsOverviewData } from "../../../data/campus-life/events/events-data";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import Classes from "../../../utils/styles/Global.module.css";
import AnnualFest from "./AnnualFest";
import ConferencesSection from "./ConferencesSection";
import Festivals from "./Festivals";
import TedxSharing from "./TedxSharing";

const EventComponent = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#conferences") {
      setTimeout(() => {
        const element = document.getElementById("conferences");

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 200);
    }
  }, [location]);

  return (
    <div>
      <div className={Classes.container}>
        <CustomOverviewSection data={EventsOverviewData} />
      </div>

      <AnnualFest />

      <div
        id="conferences"
        className={Classes.container}
        style={{ scrollMarginTop: "100px" }} // navbar height ke according change kar lena
      >
        <ConferencesSection />
      </div>

      <Festivals />

      <div className={Classes.container}>
        <TedxSharing />
      </div>

      <CustomTopFooter data={feeStructureCustomTopFooter} />
    </div>
  );
};

export default EventComponent;