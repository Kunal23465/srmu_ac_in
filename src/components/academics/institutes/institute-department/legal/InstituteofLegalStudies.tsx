import React from "react";
import Classes from "../../../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../../../utils/custom/CustomOverviewSection";
import CustomTopFooter from "../../../../../utils/custom/CustomTopFooter";
import {
  InstituteofLegalStudiesdepartmentHighlights,
  InstituteofLegalStudiesCounterData1,
  InstituteofLegalStudiesCounterData2,
  InstituteofLegalStudiesData1,
  InstituteofLegalStudiesData2,
  InstituteofLegalStudiesfacultyData,
  InstituteofLegalStudiesOverviewData,
  InstituteofLegalStudiesTopFooterData,
  InstituteofLegalStudiesVMData,
  
  tableHeaders,
  InstituteofLegalStudiesData3,
} from "../../../../../data/academics/institute/institute-department/institute-of-legal-studies-data";
import Counter from "../../../../../utils/custom/Counter";
import CustomDepartmentVissionMission from "../../../../../utils/custom/CustomDepartmentVissionMission";
import CustomDepartmentFeeDetailsTable from "../../../../../utils/custom/CustomDepartmentFeeDetailsTable";
import CustomTabs from "../../../../../utils/custom/CustomTabs";
import CustomDepartmentSlider from "../../../../../utils/custom/CustomDepartmentSlider";
import CustomFacultyListCard from "../../../../../utils/custom/CustomFacultyListCard";
import facilitiesBg from "../../../../../assets/images/academics/departments/facilities-bg-lg.webp";
import CustomDepartmentHighlightCard from "../../../../../utils/custom/CustomDepartmentHighlightCard";
import CustomPlacedStudentTable from "../../../../../utils/custom/CustomPlacedStudentTable";

const InstituteofLegalStudies: React.FC = () => {
  const items = [
    {
      key: "1",
      label: "Integrated",
      content: <CustomDepartmentFeeDetailsTable data={InstituteofLegalStudiesData1} />,
    },
    {
      key: "2",
      label: "Postgraduate",
      content: <CustomDepartmentFeeDetailsTable data={InstituteofLegalStudiesData2} />,
    },
    {
      key: "3",
      label: "Undergraduate",
      content: <CustomDepartmentFeeDetailsTable data={InstituteofLegalStudiesData3} />,
    },
  ];

  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={InstituteofLegalStudiesOverviewData} />
        {/* <Counter
          counterData={InstituteofLegalStudiesCounterData1.counterData}
          classes={InstituteofLegalStudiesCounterData1.classes}
          aboutusClass={InstituteofLegalStudiesCounterData1.aboutusClass}
        /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  my-15">
          {InstituteofLegalStudiesVMData.map((item) => (
            <CustomDepartmentVissionMission key={item.id} data={item} />
          ))}
        </div>
      </div>
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
          data={InstituteofLegalStudiesfacultyData}
          renderCard={({ item }) => <CustomFacultyListCard item={item} />}
          bgImage={facilitiesBg}
     
          headingColor="#ffffff"
          descriptionColor="#e5e5e5"
         
          
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
            counterData={InstituteofLegalStudiesCounterData2.counterData}
            classes={InstituteofLegalStudiesCounterData2.classes}
            aboutusClass={InstituteofLegalStudiesCounterData2.aboutusClass}
          />
          {/* <CustomPlacedStudentTable students={placedStudents} headers={tableHeaders} /> */}
        </div>
      </div>
      <CustomDepartmentSlider
        heading="Key Highlights of Our Department"
        data={InstituteofLegalStudiesdepartmentHighlights}
        renderCard={({ item }) => <CustomDepartmentHighlightCard item={item} />}
        bgColor="#E7A615"
    
        breakpoints={{ desktop: 3, tablet: 2, mobile: 1 }}
      />

      <CustomTopFooter data={InstituteofLegalStudiesTopFooterData} />
    </div>
  );
};
export default InstituteofLegalStudies;