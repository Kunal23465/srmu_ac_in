import React from "react";
import CustomOverviewSection from "../../scholarship/ScholarshipOverviewSection";
import Classes from "../../../utils/styles/Global.module.css";
import { PhdNotificationOverviewData } from "../../../data/research/phd-Notification-sesstion/phd-notification-sesstion-data";
import SeatsAvailableSection from "./seat-available-section/SeatsAvailableSection";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterAbout } from "../../../data/about/aboutusData";
import { Link } from "react-router-dom";
const importantDates = [
  {
    id: 0,
    left: "Form Start Date:",
    right: "12th December, 2025",
  },
  {
    id: 1,
    left: "Form End Date:",
    right: "11th January, 2026",
  },
  {
    id: 2,
    left: "R.A.T. (Online):",
    right: "31st January, 2026",
  },
  {
    id: 3,
    left: "Result Declaration:",
    right: "02nd February, 2026",
  },
  {
    id: 4,
    left: "Submission of Research Proposal:",
    right: "05th February, 2026",
  },
  {
    id: 5,
    left: "Interview/ FRDC Date:",
    right: "06th - 10th February, 2026",
  },
  {
    id: 6,
    left: "Final Result:",
    right: "11th - 13th February, 2026",
  },
  {
    id: 7,
    left: "Registration of Selected Candidates:",
    right: "14th - 20th February, 2026",
  },
  {
    id: 8,
    left: "Orientation Date:",
    right: "21st February, 2026",
  },
];
const PhdNotificationSession: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]} mb-8`}>
        <CustomOverviewSection data={PhdNotificationOverviewData} />
        {/* <SeatsAvailableSection /> */}
        <div className="mt-0">
          <h2 className="lg:text-[32px] md:text-[27.255px] sm:text-[21.925px] text-[21.925px] fw500 text-black mb-2">Mode of Application</h2>
          <div className="flex flex-col md:flex-row items-center justify-start gap-5 md:gap-10">
            {/* <button disabled
             
              // to="https://phdadmission.srmu.ac.in/"
              className=" bg-[#0f4a85] cursor-pointer text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] border-2 border-[#0f4a85] text-white font-medium uppercase py-1 md:py-3 px-2 md:px-5 rounded-lg hover:bg-white hover:text-[#0f4a85] transition-colors duration-500 w-fit"
            >
              Online Application
            </button> */}
            <button
  disabled
  className="bg-[#0f4a85] text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] 
  border-2 border-[#0f4a85] text-white font-medium uppercase 
  py-1 md:py-3 px-2 md:px-5 rounded-lg w-fit
  transition-colors duration-500

  disabled:bg-gray-400 
  disabled:border-gray-400 
  disabled:text-white 
  disabled:cursor-not-allowed 
  disabled:opacity-70

  hover:bg-white hover:text-[#0f4a85]"
>
  Online Application
</button>
            <Link
              to="/research/phd-offline-application"
              className=" bg-[#0f4a85] cursor-pointer text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] border-2 border-[#0f4a85]  text-white font-medium uppercase py-1 md:py-3 px-2 md:px-5 rounded-lg hover:bg-white hover:text-[#0f4a85] transition-colors duration-500 w-fit"
            >
              Offline Application
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="lg:text-[32px] md:text-[27.255px] sm:text-[21.925px] text-[21.925px] font-bold text-black mb-2">Important Dates</h2>
          {importantDates.map((item) => (
            <div key={item.id} className="mb-4 text-[17px]">
              <b>{item.left}</b> {item.right}{" "}
            </div>
          ))}
        </div>
      </div>
      <CustomTopFooter data={CustomTopFooterAbout} />
    </div>
  );
};

export default PhdNotificationSession;
