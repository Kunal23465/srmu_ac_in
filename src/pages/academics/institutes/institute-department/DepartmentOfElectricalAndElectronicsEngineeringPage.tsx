import { FC } from "react";
import CustomOverviewSection from "../../../../utils/custom/CustomOverviewSection";
import { counterDataForDepartmentOfElectricalAndElectronicsEngineering, departmentHeadProfileData, DepartmentOfElectricalAndElectronicsEngineeringVMData, electricalDepartmentHighlightsData, facultyDetails, instituteFooterData, instituteOverviewData } from "../../../../data/academics/institute/department-of-electrical-and-electronics-engineering-data";
import Counter from "../../../../utils/custom/Counter";
import CustomDepartmentVissionMission from "../../../../utils/custom/CustomDepartmentVissionMission";
import CustomInstituteProfileCard from "../../../../utils/custom/CustomInstituteProfileCard";
import ProgramsAndFees from "../../../../components/academics/institutes/institute-department/electricalAndElectronics/ProgramsAndFees";
import CustomDepartmentSlider from "../../../../utils/custom/CustomDepartmentSlider";
import Classes from "../../../../utils/styles/Global.module.css";
import facultybg from "../../../../assets/images/placements/placement-overview/placementrecords.jpeg";
import CustomFacultyListCard from "../../../../utils/custom/CustomFacultyListCard";
import PlacedStudents from "../../../../components/academics/institutes/institute-department/electricalAndElectronics/PlacedStudents";
import CustomTopFooter from "../../../../utils/custom/CustomTopFooter";
import CustomDepartmentHighlightCard from "../../../../utils/custom/CustomDepartmentHighlightCard";


const DepartmentOfElectricalAndElectronicsEngineeringPage: FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={instituteOverviewData} />
        <Counter
          counterData={
            counterDataForDepartmentOfElectricalAndElectronicsEngineering
          }
          classes="counter"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mb-10">
          {DepartmentOfElectricalAndElectronicsEngineeringVMData.map((item) => (
            <CustomDepartmentVissionMission key={item.id} data={item} />
          ))}
        </div>
      </div>
      <CustomInstituteProfileCard data={departmentHeadProfileData} />
      <div className={`${Classes["container"]}`}>
        <ProgramsAndFees />
      </div>
      <CustomDepartmentSlider
        heading="Faculty List"
        description="The University takes pride in recruiting distinguished faculty from reputed central universities and best institutes like- IIT, IIM, MNNIT and IIT-BHU. They bring to the classroom, passion and enthusiasm for teaching, providing an intimate, interactive, personalized approach to learning."
        data={facultyDetails}
        renderCard={({ item }) => <CustomFacultyListCard item={item} />}
        bgImage={facultybg}
        arrowColor="#ffffff"
        headingColor="#ffffff"
        descriptionColor="#ffffff"
        breakpoints={{ desktop: 4, tablet: 2, mobile: 1 }}
      />

      <section className="bg-[#edf0f9] py-14">
        <div className={`${Classes["container"]} bg-[#edf0f9]`}>
          <PlacedStudents />
        </div>
      </section>
      <CustomDepartmentSlider
        heading="Key Highlights of Our Department"
        description=""
        data={electricalDepartmentHighlightsData}
        renderCard={({ item }) => <CustomDepartmentHighlightCard item={item} />}
        bgColor="#f8b922"
        arrowColor="#000"
        breakpoints={{ desktop: 3, tablet: 2, mobile: 1 }}
      />
      <CustomDepartmentSlider
        heading="Events of Department"
        description="SRMU is committed to leveraging its facilities and the system to world-class standards, with a goal to provide the best academic professional resources, to prepare its students for global opportunities. This makes SRMU a repository of academic and extra-curricular excellence."
        data={electricalDepartmentHighlightsData}
        renderCard={({ item }) => <CustomDepartmentHighlightCard item={item} />}
        bgColor="#ffffff"
        arrowColor="#96a9c4"
        breakpoints={{ desktop: 3, tablet: 2, mobile: 1 }}
      />
      <CustomTopFooter data={instituteFooterData} />
    </div>
  );
};

export default DepartmentOfElectricalAndElectronicsEngineeringPage;
