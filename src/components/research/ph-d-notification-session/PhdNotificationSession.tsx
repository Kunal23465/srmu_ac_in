import React from "react";
import CustomOverviewSection from "../../scholarship/ScholarshipOverviewSection";
import Classes from "../../../utils/styles/Global.module.css";
import { PhdNotificationOverviewData } from "../../../data/research/phd-Notification-sesstion/phd-notification-sesstion-data";
import notification from "../../../assets/pdf/Notification.pdf";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterAbout } from "../../../data/about/aboutusData";
// import { Link } from "react-router-dom";
// import CustomTable from "../../../utils/custom/CustomTable";
import { TableRowData } from "../../../types/table-data-types";
import { FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
const importantDates = [
  // {
  //   id: 0,
  //   left: "Online Release of Ph.D. Admission Notification:",
  //   right: "20 June 2026",
  // },
  // {
  //   id: 1,
  //   left: "Advertisement in Print Media:",
  //   right: "22 June 2026",
  // },
  // {
  //   id: 2,
  //   left: "Last Date for Submission of Online Applications:",
  //   right: "10 July 2026 (extendable up to 20 July 2026, if required)",
  // },
  // {
  //   id: 3,     
  //   left: "Research Aptitude Test (RAT) (Online Mode):",
  //   right: "07 August 2026",
  // },
  // {
  //   id: 4,
  //   left: "Submission of Question Papers to the Exam Cell approved by FRDC of concern institute:",
  //   right: "21–31 July 2026",
  // },
  // {
  //   id: 5,
  //   left: "Moderation of Question Papers:",
  //   right: "1–3 August 2026",
  // },
  // {
  //   id: 6,
  //   left: "Declaration of RAT Result:",
  //   right: "10 August 2026",
  // },
  // {
  //   id: 7,
  //   left: "Submission of Research Proposal:",
  //   right: "13 August 2026",
  // },
  // {
  //   id: 8,
  //   left: "Online Interview of Qualified Candidates:",
  //   right: "14–19 August 2026",
  // },
  {
    id: 9,
    left: "Declaration of Final Result:",
    right: "20–22 August 2026",
  },
  {
    id: 10,
    left: "Registration Process:",
    right: "23–29 August 2026",
  },
  {
    id: 11,
    left: "Orientation Programme for Newly Admitted Scholars:",
    right: "29 August 2026",
  },
  {
    id: 12,
    left: "Commencement of Pre-Ph.D. Course Work Classes:",
    right: "29 August 2026",
  },
];

export const thirdCycleData: TableRowData[] = [
  {
    id: 1,
    title: 'Academic session 2026-27 (Odd Sem.)',
    download: { type: 'pdf', url: notification },
  },
];
const PhdNotificationSession: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]} mb-8`}>
        <CustomOverviewSection data={PhdNotificationOverviewData} />
        {/* <SeatsAvailableSection /> */}
        <div className="mt-0">
          <h2 className="text-[32px] font-bold text-gray-900 mb-6">
            Mode of Application
          </h2>
          {/* <h2 className="lg:text-[32px] md:text-[27.255px] sm:text-[21.925px] text-[21.925px] fw500 text-black mb-2">Mode of Application</h2> */}
          <div className="flex flex-col md:flex-row items-center justify-start gap-5 md:gap-10">
            {/* <Link
              target="_blank"
              to="https://phdadmission.srmu.ac.in/"
              className=" bg-[#0f4a85] cursor-pointer text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] border-2 border-[#0f4a85] text-white font-medium uppercase py-1 md:py-3 px-2 md:px-5 rounded-lg hover:bg-white hover:text-[#0f4a85] transition-colors duration-500 w-fit"
            >
              Online Application
            </Link> */}
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
            {/* <Link
              to="/research/phd-offline-application"
              className=" bg-[#0f4a85] cursor-pointer text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] border-2 border-[#0f4a85]  text-white font-medium uppercase py-1 md:py-3 px-2 md:px-5 rounded-lg hover:bg-white hover:text-[#0f4a85] transition-colors duration-500 w-fit"
            > */}
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
              Offline Application
            </button>
            {/* </Link> */}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-[32px] font-bold text-gray-900 mb-6">
            Notification
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0F4C8A] text-white">
                  <th className="px-6 py-5 text-left text-[18px] font-semibold">
                    Notification
                  </th>
                  <th className="px-6 py-5 text-left text-[18px] font-semibold w-[30%]">
                    Downloads
                  </th>
                </tr>
              </thead>

              <tbody>
                {thirdCycleData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-6 py-5 text-[17px] text-gray-900">
                      {item.title}
                    </td>

                    <td className="px-6 py-5 text-left">
                      <a
                        href={item.download.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-12 h-12 rounded-lg border-2 border-[#F5A623] bg-[#0F4C8A] text-white hover:scale-105 transition-transform"
                      >
                        <FaFilePdf className="text-xl" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


        <div className="mt-10">
          <h2 className="text-[32px] font-bold text-gray-900 mb-6">
            Important Dates
          </h2>

          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0f4a85] text-white">
                  <th className="px-6 py-4 text-left text-[18px] ">
                    Event
                  </th>
                  <th className="px-6 py-4 text-left text-[18px]  w-[30%]">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {importantDates.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`hover:bg-gray-50 transition-colors ${index !== importantDates.length - 1
                      ? "border-b border-gray-100"
                      : ""
                      }`}
                  >
                    <td className="px-6 py-5  text-gray-900">
                      {item.left}
                    </td>

                    <td className="px-6 py-5 text-gray-700">
                      {item.right}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <CustomTopFooter data={CustomTopFooterAbout} />
    </div>
  );
};

export default PhdNotificationSession;
