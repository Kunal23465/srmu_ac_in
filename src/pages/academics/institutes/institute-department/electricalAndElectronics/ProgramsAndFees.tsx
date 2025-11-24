import { FC } from "react";
import RegistringGrievance from "../../../../../components/campus-life/grievance-redressal-system/RegistringGrievance";
import TakingFeedback from "../../../../../components/campus-life/grievance-redressal-system/TakingFeedback";
import { processFlowStudent } from "../../../../../data/campus-life/grievance-redressal-system/grievance-redressal-system-data";
import CustomTabs from "../../../../../utils/custom/CustomTabs";
import IndustryHonors from "./IndustryHonors";

const ProgramsAndFees:FC = () => {
  const items = [
    {
      key: "1",
      label: "Industry Honors",
      content: (
        <IndustryHonors />
      ),
    },
    {
      key: "2",
      label: "Integrated",
      content: <TakingFeedback data={processFlowStudent.takingFeedback} />,
    },
    {
      key: "3",
      label: "Postgraduate",
      content: (
        <RegistringGrievance data={processFlowStudent.registeringGrievance} />
      ),
    },
    {
      key: "4",
      label: "Undergraduate",
      content: <TakingFeedback data={processFlowStudent.takingFeedback} />,
    },
  ];
  return (
    <div className="flex  mx-50 flex-col items-center justify-center gap-3">
      <h1 className="text-4xl font-bold mb-4 mt-7 ">Programs and Fees</h1>
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
      />
    </div>
  );
};

export default ProgramsAndFees;
