import React from "react";
import Classes from "../../utils/styles/Global.module.css";
import ScholarshipOverviewSection from "./ScholarshipOverviewSection";
import { scholarshipData, ScholarshipTopFooterData } from "../../data/admissions/scholarship/scholarship-data";
import BGImg from "../../assets/images/admissions/overview/placement-records-bg.jpg";
import CustomTabs from "../../utils/custom/CustomTabs";
import CommonUniversityEntranceTest from "./CommonUniversityEntranceTest";
import NationalScoreBasedScholarship from "./NationalScoreBasedScholarship";
import SRMUSET from "./SRMUSET";
import SpecialScholarship from "./SpecialScholarship";
import MeritBasedScholarship from "./MeritBasedScholarship";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
const Scholarship: React.FC = () => {
  const items = [
    {
      key: "1",
      label: "COMMON UNIVERSITY ENTRANCE TEST",
      content: <CommonUniversityEntranceTest />,
    },
    {
      key: "2",
      label: "NATIONAL SCORE BASED SCHOLARSHIP",
      content: <NationalScoreBasedScholarship />,
    },
    {
      key: "3",
      label: "SRMUSET",
      content: <SRMUSET />,
    },
    {
      key: "4",
      label: "SPECIAL SCHOLARSHIP",
      content: <SpecialScholarship />,
    },
    {
      key: "5",
      label: "MERIT BASED SCHOLARSHIP",
      content: <MeritBasedScholarship />,
    },
  ];
  return (
    <>
      <div className={`${Classes["container"]}`}>
        <ScholarshipOverviewSection data={scholarshipData} />
      </div>
      <div className="text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BGImg})` }}>
        <div className={`${Classes["container"]}`}>
          <h1 className="text-3xl sm:text-5xl font-medium pt-10 sm:pt-20 pb-3 text-center">Scholarship</h1>
          <p className="text-sm sm:text-[16px] text-center pb-38">
            SRMU provides a range of merit-based and need-driven scholarships designed to support and recognize exceptional talent.
          </p>
        </div>
      </div>
      <div className={`${Classes["container"]} -mt-[51px]`}>
        <CustomTabs
          items={items}
          variant="underline"
          fullWidthUnderlineColor="#00000000"
          activeUnderlineColor="#ffb703"
          activeTextColor="#fff"
          inactiveTextColor="#fff"
          hoverTextColor="#fff"
          activeBgColor="#00000000"
          inactiveBgColor="#00000000"
          alignTabs="start"
        />
      </div>
            <CustomTopFooter data={ScholarshipTopFooterData} />

    </>
  );
};

export default Scholarship;
