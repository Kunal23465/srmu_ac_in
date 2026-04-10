import { FC } from "react";
import CustomTabs from "../../../../../utils/custom/CustomTabs";
import CustomDepartmentFeeDetailsTable from "../../../../../utils/custom/CustomDepartmentFeeDetailsTable";
import { industryHonorsFeeData, integratedFeeData, postGraduateFeeData, underGraduateFeeData } from "../../../../../data/academics/institute/department-of-electrical-and-electronics-engineering-data";

const ProgramsAndFees: FC = () => {

   const items = [
      {
        key: "1",
        label: "Industry Honors",
        content: <CustomDepartmentFeeDetailsTable data={industryHonorsFeeData} />,
      },
      {
        key: "2",
        label: "Integrated",
        content: <CustomDepartmentFeeDetailsTable data={integratedFeeData} />,
      },
      {
        key: "3",
        label: "Postgraduate",
        content: <CustomDepartmentFeeDetailsTable data={postGraduateFeeData} />,
      },
      {
        key: "4",
        label: "Undergraduate",
        content: <CustomDepartmentFeeDetailsTable data={underGraduateFeeData} />,
      },
    ];

  return (
    <div className="flex   flex-col items-center justify-center gap-3">
      <h2 className="text-4xl font-bold mb-4 mt-7 ">Programs and Fees</h2>
      <p className="text-sm mb-2">
        At SRMU we have always believed that a student SHOULD BE TRAINED FOR
        INDUSTRY, BY THE INDUSTRY. Keeping the culture of rich academia-industry
        interface, university is now offering specialized programs in different
        academic domains.
      </p>
      <CustomTabs
        items={items}
        variant="pill"
        activeTextColor="#000000"
        inactiveTextColor="#ffffff"
        activeBgColor="#ffb703"
        inactiveBgColor="#0f4a85"
        pillContainerBgColor="#0f4a85"
        alignTabs="center"
      />
    </div>
  );
};

export default ProgramsAndFees;
