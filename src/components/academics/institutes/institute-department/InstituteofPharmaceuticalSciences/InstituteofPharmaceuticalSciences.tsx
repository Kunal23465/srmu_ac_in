import React from "react";
import Classes from "../../../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../../../utils/custom/CustomOverviewSection";
import CustomTopFooter from "../../../../../utils/custom/CustomTopFooter";
import {
  InstituteofPharmaceuticalSciencesCounterData1,
  InstituteofPharmaceuticalSciencesCounterData2,
  InstituteofPharmaceuticalSciencesData1,
  InstituteofPharmaceuticalSciencesfacultyData,
  InstituteofPharmaceuticalSciencesOverviewData,
  InstituteofPharmaceuticalSciencesTopFooterData,
  InstituteofPharmaceuticalSciencesVMData,
  InstituteofPharmaceuticalSciencesinstituteProfiles,
  InstituteofPharmaceuticalSciencesDepartmentEventsData,
} from "../../../../../data/academics/institute/institute-department/institute-of-pharmaceutical-sciences-data";
import Counter from "../../../../../utils/custom/Counter";
import CustomDepartmentVissionMission from "../../../../../utils/custom/CustomDepartmentVissionMission";
import CustomDepartmentFeeDetailsTable from "../../../../../utils/custom/CustomDepartmentFeeDetailsTable";
import CustomTabs from "../../../../../utils/custom/CustomTabs";
import CustomInstituteProfileCard from "../../../../../utils/custom/CustomInstituteProfileCard";
import CustomDepartmentSlider from "../../../../../utils/custom/CustomDepartmentSlider";
import CustomFacultyListCard from "../../../../../utils/custom/CustomFacultyListCard";
import facilitiesBg from "../../../../../assets/images/academics/departments/facilities-bg-lg.jpeg";
import CustomDepartmentEventSlider from "../../../../../utils/custom/CustomDepartmentEventSlider";
import CustomEventCard from "../../../../../utils/custom/CustomEventListCard";

const InstituteofPharmaceuticalSciences: React.FC = () => {
  const items = [
    {
      key: "1",
      label: "Undergraduate",
      content: <CustomDepartmentFeeDetailsTable data={InstituteofPharmaceuticalSciencesData1} />,
    },
  ];

  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={InstituteofPharmaceuticalSciencesOverviewData} />
        <Counter
          counterData={InstituteofPharmaceuticalSciencesCounterData1.counterData}
          classes={InstituteofPharmaceuticalSciencesCounterData1.classes}
          aboutusClass={InstituteofPharmaceuticalSciencesCounterData1.aboutusClass}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  my-15">
          {InstituteofPharmaceuticalSciencesVMData.map((item) => (
            <CustomDepartmentVissionMission key={item.id} data={item} />
          ))}
        </div>
      </div>
      <CustomInstituteProfileCard data={InstituteofPharmaceuticalSciencesinstituteProfiles} />
      <div className={`${Classes["container"]} pt-5`}>
        <div className="py-15 text-center">
          <h1 className="text-5xl pb-5 font-medium">Programs and Fees</h1>
          <p>
            At SRMU we have always believed that a student SHOULD BE TRAINED FOR INDUSTRY, BY THE INDUSTRY. Keeping the culture of rich academia-industry interface, university is
            now offering specialized programs in different academic domains.
          </p>
        </div>
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
      <div>
        <CustomDepartmentSlider
          heading="Faculty List"
          description="The University takes pride in recruiting distinguished faculty from reputed central universities and best institutes like- IIT, IIM, MNNIT and IIT-BHU. They bring to the classroom, passion and enthusiasm for teaching, providing an intimate, interactive, personalized approach to learning."
          data={InstituteofPharmaceuticalSciencesfacultyData}
          renderCard={({ item }) => <CustomFacultyListCard item={item} />}
          bgImage={facilitiesBg}
          arrowColor="#fff"
          headingColor="#ffffff"
          descriptionColor="#e5e5e5"
          arrowBorderColor="#0f4a85"
          arrowBgColor="#fff2"
          breakpoints={{ desktop: 4, tablet: 3, mobile: 1 }}
        />
      </div>
      <div className={`${Classes["container"]}`}></div>
      <div className="pt-15 bg-[#ecf0f9]">
        <div className={`${Classes["container"]}`}>
          <h1 className="text-5xl pb-5 font-medium">Placed Students</h1>
          <p>
            With 2000+ Job Offers given by 250+ Top corporates, an average package of 4.5 LPA and 100%* placement record in different professional programs, SRMU provides the best
            return on investment. More than 30% students have multiple job offers.
          </p>
          <Counter
            counterData={InstituteofPharmaceuticalSciencesCounterData2.counterData}
            classes={InstituteofPharmaceuticalSciencesCounterData2.classes}
            aboutusClass={InstituteofPharmaceuticalSciencesCounterData2.aboutusClass}
          />
        </div>
      </div>
   <CustomDepartmentEventSlider
        heading="Events of Department"
        description="SRMU is committed to leveraging its facilities and the system to world-class standards, with a goal to provide the best academic professional resources, to prepare its students for global opportunities. This makes SRMU a repository of academic and extra-curricular excellence."
        data={InstituteofPharmaceuticalSciencesDepartmentEventsData}
        renderCard={({ item }) => <CustomEventCard item={item} />}
        bgColor="#ffffff"
        arrowColor="#96a9c4"
        arrowBorderColor="#0f4a85"
      />
      <CustomTopFooter data={InstituteofPharmaceuticalSciencesTopFooterData} />
    </div>
  );
};

export default InstituteofPharmaceuticalSciences;
