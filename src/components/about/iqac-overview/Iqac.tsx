import React from "react";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import {
  iqacActionTakenReportData,
  iqacAnalysisReportData,
  iqacAnnualReportData,
  iqacCards,
  iqacFeedbackData,
  iqacMinutesOfMeetingData,
  iqacOverviewData,
  iqacUndertakingData,
  UniversityannualReportData,
} from "../../../data/about/iqac-overview/iqac-data";
import CustomIqacCard from "../../../utils/custom/CustomIqacCard";
import CustomTable from "../../../utils/custom/CustomTable";
import IqacCardsSection from "./IqacCard";

const Iqac: React.FC = () => {
  return (
    <>
      <div className={`${Classes["container"]}`}>
        {/* Overview Section */}
        <CustomOverviewSection data={iqacOverviewData} />

        {/* IQAC Info Cards */}
        <div className="grid-iqac-card manage main mb-5">
          {iqacCards?.map((card, index) => {
            const length = iqacCards.length;
            return (
              <CustomIqacCard
                key={index}
                length={length}
                index={index}
                title={card?.title}
                icon={card?.icon}
                description={card?.description}
                content={card?.content}
                colorCode={"bg-[#0f4a85]"}
              />
            );
          })}
        </div>
      </div>

      {/* Overlapping Cards Section */}
      <IqacCardsSection />

      <div className={`${Classes["container"]}`}>
        {/* Reports Section */}
        <h1 className="text-3xl lg:text-4xl mt-10 font-semibold">Report</h1>
        <CustomTable
          columnOneHeader="University Annual Report"
          columnTwoHeader="Downloads"
          data={UniversityannualReportData}
        />
        <CustomTable
          columnOneHeader="IQAC Annual Report"
          columnTwoHeader="Downloads"
          data={iqacAnnualReportData}
        />
        <CustomTable
          columnOneHeader="IQAC Action Taken Report"
          columnTwoHeader="Downloads"
          data={iqacActionTakenReportData}
        />
        <CustomTable
          columnOneHeader="Minutes of Meeting"
          columnTwoHeader="Downloads"
          data={iqacMinutesOfMeetingData}
        />
        <CustomTable
          columnOneHeader="Undertaking"
          columnTwoHeader="Downloads"
          data={iqacUndertakingData}
        />

        {/* Feedback Section */}
        <h1 className="text-3xl lg:text-4xl mt-10 font-semibold">Feedback</h1>
        <CustomTable
          columnOneHeader="Feedback Procedure"
          columnTwoHeader="Downloads"
          data={iqacFeedbackData}
        />
        <CustomTable
          columnOneHeader="Analysis Report"
          columnTwoHeader="Downloads"
          data={iqacAnalysisReportData}
        />
      </div>
    </>
  );
};

export default Iqac;
