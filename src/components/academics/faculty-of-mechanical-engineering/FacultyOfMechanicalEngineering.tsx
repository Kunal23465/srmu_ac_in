import Classes from "../../../utils/styles/Global.module.css";
import { counterDataFoFacultyOfMechanicalEngineering, facultyOfMechanicalEngineeringVMData, facultyofMEOverviewData } from "../../../data/academics/faculty-of-mechanical-engineering/faculty-of-mechanical-engineering";
import Counter from "../../../utils/custom/Counter";
import CustomDepartmentVissionMission from "../../../utils/custom/CustomDepartmentVissionMission";
import CustomOverviewSection from "../../scholarship/ScholarshipOverviewSection";

const FacultyOfMechanicalEngineering = () => {
  return (
    <div>
      {" "}
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={facultyofMEOverviewData} />
        <Counter
          counterData={
            counterDataFoFacultyOfMechanicalEngineering
          }
          classes="counter"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mb-10">
          {facultyOfMechanicalEngineeringVMData.map((item) => (
            <CustomDepartmentVissionMission key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyOfMechanicalEngineering;
