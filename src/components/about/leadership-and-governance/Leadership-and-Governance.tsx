import React from "react";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import AlternateProfileSection from "./AlternateProfileSection";
import {
  CustomTopFooterData1,
  LeadershiOverviewData,
  profileData,
  governingBodyData,
  executiveCouncilData,
  academicCouncilData
} from "../../../data/about/leadership-and-governance/leadership-and-governance-data";
import CustomMembersSection from "../../../utils/custom/CustomMembersSection";

const Leadership: React.FC = () => {
  return (
    <>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection
          data={LeadershiOverviewData}
        />

      </div>
      <AlternateProfileSection people={profileData} />
      <div className={`${Classes["container"]}`}>

      <CustomMembersSection
        title="Governing Body"
        description="Our dedicated governing body steers administrative operations and takes key decisions to ensure a thriving academic environment."
        data={governingBodyData}
      />

      <CustomMembersSection
        title="Executive Council"
        description="Our executive body oversees strategies, policies, and day-to-day operations to achieve academic and institutional goals."
        data={executiveCouncilData}
      />

      <CustomMembersSection
        title="Academic Council"
        description="Academic Council has been constituted to evaluate, monitor and recommend in respect of various matters related to - review, design and evaluation of course curriculum etc."
        data={academicCouncilData}
      />
</div>
      <CustomTopFooter data={CustomTopFooterData1} />

    </>

  );
};

export default Leadership;
