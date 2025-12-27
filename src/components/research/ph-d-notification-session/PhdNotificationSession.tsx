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
          <h1 className="lg:text-[32px] md:text-[27.255px] sm:text-[21.925px] text-[21.925px] fw500 text-black mb-2">Mode of Application</h1>
          <div className="flex flex-col md:flex-row items-center justify-start gap-5 md:gap-10">
            <button className=" bg-[#0f4a85] cursor-pointer text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] border-2 border-[#0f4a85] text-white font-medium uppercase py-1 md:py-3 px-2 md:px-5 rounded-lg hover:bg-white hover:text-[#0f4a85] transition-colors duration-500 w-fit">
              Online Application
            </button>
            <button className=" bg-[#0f4a85] cursor-pointer text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] border-2 border-[#0f4a85]  text-white font-medium uppercase py-1 md:py-3 px-2 md:px-5 rounded-lg hover:bg-white hover:text-[#0f4a85] transition-colors duration-500 w-fit">
              Offline Application
            </button>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="lg:text-[32px] md:text-[27.255px] sm:text-[21.925px] text-[21.925px] font-bold text-black mb-2">Important Dates</h1>
          <p className="font-bold lg:text-[18px] md:text-[16.875px] sm:text-[15.75px] text-[15.75px] mb-3">Application are closed for this session.</p>
          <p className="lg:text-[18px] md:text-[16.875px] sm:text-[15.75px] text-[15.75px]">
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
