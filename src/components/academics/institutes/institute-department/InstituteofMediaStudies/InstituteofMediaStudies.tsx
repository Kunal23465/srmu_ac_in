import React from "react";
import Classes from "../../../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../../../utils/custom/CustomOverviewSection";
import CustomTopFooter from "../../../../../utils/custom/CustomTopFooter";
import {
  InstituteofMediaStudiesCounterData,
  InstituteofMediaStudiesOverviewData,
  InstituteofMediaStudiesTopFooterData,
  InstituteofMediaStudiesVMData,
  SampleInstituteProfileData,
} from "../../../../../data/academics/institute/institute-department/institute-of-media-studies-data";
import Counter from "../../../../../utils/custom/Counter";
import CustomDepartmentVissionMission from "../../../../../utils/custom/CustomDepartmentVissionMission";
import CustomDepartmentFeeDetailsTable from "../../../../../utils/custom/CustomDepartmentFeeDetailsTable";
import { civilFeeData } from "../../../../../data/academics/faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import CustomTabs from "../../../../../utils/custom/CustomTabs";
import CustomInstituteProfileCard from "../../../../../utils/custom/CustomInstituteProfileCard";

const InstituteofMediaStudies: React.FC = () => {
  const items = [
    {
      key: "1",
      label: "Postgraduate",
      content: <CustomDepartmentFeeDetailsTable data={civilFeeData} />,
    },
    {
      key: "2",
      label: "Undergraduate",
      content: <CustomDepartmentFeeDetailsTable data={civilFeeData} />,
    },
  ];

  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={InstituteofMediaStudiesOverviewData} />
        <Counter
          counterData={InstituteofMediaStudiesCounterData.counterData}
          classes={InstituteofMediaStudiesCounterData.classes}
          aboutusClass={InstituteofMediaStudiesCounterData.aboutusClass}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mb-10">
          {InstituteofMediaStudiesVMData.map((item) => (
            <CustomDepartmentVissionMission key={item.id} data={item} />
          ))}
        </div>

        <CustomInstituteProfileCard data={SampleInstituteProfileData} />

        <CustomTabs
          items={items}
          variant="pill"
          activeTextColor="#000000"
          inactiveTextColor="#ffffff"
          activeBgColor="#ffb703"
          inactiveBgColor="#0f4a85"
          pillContainerBgColor="#0f4a85"
        />
      </div>
      <CustomTopFooter data={InstituteofMediaStudiesTopFooterData} />
    </div>
  );
};

export default InstituteofMediaStudies;
