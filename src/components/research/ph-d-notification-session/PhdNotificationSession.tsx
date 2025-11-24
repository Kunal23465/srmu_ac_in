import React from "react";
import CustomOverviewSection from "../../scholarship/ScholarshipOverviewSection";
import Classes from "../../../utils/styles/Global.module.css";
import { PhdNotificationOverviewData } from "../../../data/research/phd-Notification-sesstion/phd-notification-sesstion-data";
import SeatsAvailableSection from "./seat-available-section/SeatsAvailableSection";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterAbout } from "../../../data/about/aboutusData";
const PhdNotificationSession: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]} mb-8`}>
        <CustomOverviewSection data={PhdNotificationOverviewData} />
        <SeatsAvailableSection />
        <div className="mt-10">
          <h1 className="text-3xl font-extrabold text-black mb-2">Mode of Application</h1>
          <div className="flex items-center justify-start gap-10">
            <button className=" bg-[#0f4a85] border-3 border-[#0f4a85]  text-white font-semibold uppercase py-3 px-5 rounded-lg hover:bg-white hover:text-[#0f4a85] transition-colors duration-200 w-fit">
              Online Application
            </button>
            <button className=" bg-[#0f4a85] border-3 border-[#0f4a85]  text-white font-semibold uppercase py-3 px-5 rounded-lg hover:bg-white hover:text-[#0f4a85] transition-colors duration-200 w-fit">
              Offline Application
            </button>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-extrabold text-black mb-2">Important Dates</h1>
          <p className="font-bold mb-3">Application are closed for this session.</p>
          <p>
            <b>Note:</b> The Examination Cell will send a notification email regarding the RAT examination. If you do not receive this notification by July 31, 2025, you are
            advised to immediately contact the Research and Consultancy Cell at dd.research@srmu.ac.in, research@srmu.ac.in, or by phone at +91-7007796309 or +91-7784940188. Please
            ensure that you check your inbox as well as your spam/junk folders regularly. SRMU will not be responsible for any missed communication beyond this date. You are also
            advised to regularly visit the official website for further updates.{" "}
          </p>
        </div>
      </div>
      <CustomTopFooter data={CustomTopFooterAbout} />
    </div>
  );
};

export default PhdNotificationSession;
