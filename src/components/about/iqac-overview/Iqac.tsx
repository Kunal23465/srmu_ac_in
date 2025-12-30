import React from "react";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import {
  iqacActionTakenReportData,
  iqacAnalysisReportData,
  iqacAnnualReportData,
  iqacCards,
  iqacCustomTopFooter,
  iqacFeedbackData,
  iqacMinutesOfMeetingData,
  iqacOverviewData,
  iqacUndertakingData,
  UniversityannualReportData,
} from "../../../data/about/iqac-overview/iqac-data";
import CustomIqacCard from "../../../utils/custom/CustomIqacCard";
import CustomTable from "../../../utils/custom/CustomTable";
import IqacCardsSection from "./IqacCard";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";


const Iqac: React.FC = () => {
  return (
    <>
      <div className={`${Classes["container"]}`}>
        {/* Overview Section */}
        <CustomOverviewSection data={iqacOverviewData} />

        {/* IQAC Info Cards */}
        <div className="grid-iqac-card  gap-3 manage lg:gap-2 xl:gap-1 main mx-10 sm:mx-5 lg:mx-0 mb-5 mt-12">
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
        <h1 className="text-[28px] lg:text-[3.125rem] fw500 mt-14 mb-5 text-[#023047] lg:mt-20">Report</h1>
        <CustomTable columnOneHeader="University Annual Report" columnTwoHeader="Downloads" data={UniversityannualReportData} />
        <CustomTable columnOneHeader="IQAC Annual Report" columnTwoHeader="Downloads" data={iqacAnnualReportData} />
        <CustomTable columnOneHeader="IQAC Action Taken Report" columnTwoHeader="Downloads" data={iqacActionTakenReportData} />
        <CustomTable columnOneHeader="Minutes of Meeting" columnTwoHeader="Downloads" data={iqacMinutesOfMeetingData} />
        <CustomTable columnOneHeader="Undertaking" columnTwoHeader="Downloads" data={iqacUndertakingData} />

        {/* Feedback Section */}
        <h1 className="text-[28px] lg:text-[3.125rem] fw500 mt-14 mb-5 text-[#023047] md:mt-20">Feedback</h1>
        <CustomTable columnOneHeader="Feedback Procedure" columnTwoHeader="Downloads" data={iqacFeedbackData} />
        <CustomTable columnOneHeader="Analysis Report" columnTwoHeader="Downloads" data={iqacAnalysisReportData} />
      </div>
      <CustomTopFooter data={iqacCustomTopFooter} />
    </>
  );
};

export default Iqac;
