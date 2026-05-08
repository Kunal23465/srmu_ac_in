import React from "react";
import Classes from "../../../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../../../utils/custom/CustomOverviewSection";
import CustomTopFooter from "../../../../../utils/custom/CustomTopFooter";
import {
  InstituteofPharmacydepartmentHighlights,
  InstituteofPharmacyCounterData1,
  InstituteofPharmacyCounterData2,
  InstituteofPharmacyData1,
  InstituteofPharmacyfacultyData,
  InstituteofPharmacyOverviewData,
  InstituteofPharmacyTopFooterData,
  InstituteofPharmacyVMData,
  InstituteofPharmacyinstituteProfiles,
  //   placedStudents,
  tableHeaders,
  InstituteofPharmacyDepartmentEventsData,
} from "../../../../../data/academics/institute/institute-department/institute-of-pharmacy-data";
import Counter from "../../../../../utils/custom/Counter";
import CustomDepartmentVissionMission from "../../../../../utils/custom/CustomDepartmentVissionMission";
import CustomDepartmentFeeDetailsTable from "../../../../../utils/custom/CustomDepartmentFeeDetailsTable";
import CustomTabs from "../../../../../utils/custom/CustomTabs";
import CustomInstituteProfileCard from "../../../../../utils/custom/CustomInstituteProfileCard";
import CustomDepartmentSlider from "../../../../../utils/custom/CustomDepartmentSlider";
import CustomFacultyListCard from "../../../../../utils/custom/CustomFacultyListCard";
import facilitiesBg from '../../../../../assets/images/academics/departments/facilities-bg-lg.webp'
import CustomDepartmentHighlightCard from "../../../../../utils/custom/CustomDepartmentHighlightCard";
import CustomPlacedStudentTable from "../../../../../utils/custom/CustomPlacedStudentTable";
import CustomDepartmentEventSlider from "../../../../../utils/custom/CustomDepartmentEventSlider";
import { InstituteofMediaStudiesDepartmentEventsData } from "../../../../../data/academics/institute/institute-department/institute-of-media-studies-data";
import CustomEventCard from "../../../../../utils/custom/CustomEventListCard";

const InstituteofPharmacy: React.FC = () => {
  const items = [
    {
      key: "1",
      label: "Undergraduate",
      content: <CustomDepartmentFeeDetailsTable data={InstituteofPharmacyData1} />,
    },
  ];

  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={InstituteofPharmacyOverviewData} />
        {/* <Counter
          counterData={InstituteofPharmacyCounterData1.counterData}
          classes={InstituteofPharmacyCounterData1.classes}
          aboutusClass={InstituteofPharmacyCounterData1.aboutusClass}
        /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  my-15">
          {InstituteofPharmacyVMData.map((item) => (

            <CustomDepartmentVissionMission key={item.id} data={item} />
          ))}
        </div>
      </div>
      <CustomInstituteProfileCard data={InstituteofPharmacyinstituteProfiles} />
      <div className={`${Classes["container"]} pt-5`}>
        <div className="py-15 text-center">
          <h2 className="text-5xl pb-5 font-medium">Programs and Fees</h2>
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
          data={InstituteofPharmacyfacultyData}
          renderCard={({ item }) => <CustomFacultyListCard item={item} />}
          bgImage={facilitiesBg}
          // arrowColor="#fff"

          headingColor="#ffffff"
          descriptionColor="#e5e5e5"

          // arrowBorderColor="#0f4a85"
          // arrowBgColor="#fff2"
          breakpoints={{ desktop: 4, tablet: 3, mobile: 1 }}
        />
      </div>
      <div className={`${Classes["container"]}`}>
      </div>
      <div className="pt-15 bg-[#ecf0f9]">
        <div className={`${Classes["container"]}`}>
          <h2 className="text-5xl pb-5 font-medium">Placed Students</h2>
          <p>
            With 2000+ Job Offers given by 250+ Top corporates, an average package of 4.5 LPA and 100%* placement record in different professional programs, SRMU provides the best
            return on investment. More than 30% students have multiple job offers.
          </p>
          <Counter
            counterData={InstituteofPharmacyCounterData2.counterData}
            classes={InstituteofPharmacyCounterData2.classes}
            aboutusClass={InstituteofPharmacyCounterData2.aboutusClass}
          />
          {/* <CustomPlacedStudentTable
            // students={placedStudents}
            headers={tableHeaders}
          /> */}
        </div>
      </div>
      <CustomDepartmentSlider
        heading="Key Highlights of Our Department"
        data={InstituteofPharmacydepartmentHighlights}
        renderCard={({ item }) => <CustomDepartmentHighlightCard item={item} />}
        bgColor="#E7A615"
        // arrowColor="#000"

        breakpoints={{ desktop: 3, tablet: 2, mobile: 1 }}
      />
          <CustomDepartmentEventSlider
              heading="Events of Department"
              description="SRMU is committed to leveraging its facilities and the system to world-class standards, with a goal to provide the best academic professional resources, to prepare its students for global opportunities. This makes SRMU a repository of academic and extra-curricular excellence."
              data={InstituteofPharmacyDepartmentEventsData}
              renderCard={({ item }) => <CustomEventCard item={item} />}
              bgColor="#ffffff"
              arrowColor="#96a9c4"
              arrowBorderColor="#0f4a85"
            />

      <CustomTopFooter data={InstituteofPharmacyTopFooterData} />
    </div>
  );
};

export default InstituteofPharmacy
