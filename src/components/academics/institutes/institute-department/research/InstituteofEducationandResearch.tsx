import React from "react";
import Classes from "../../../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../../../utils/custom/CustomOverviewSection";
import CustomTopFooter from "../../../../../utils/custom/CustomTopFooter";
import {
  InstituteofEducationandResearchdepartmentHighlights,
//   InstituteofEducationandResearchCounterData1,
  InstituteofEducationandResearchCounterData2,
  InstituteofEducationandResearchData1,
  InstituteofEducationandResearchData2,
  InstituteofEducationandResearchfacultyData,
  InstituteofEducationandResearchOverviewData,
  InstituteofEducationandResearchTopFooterData,
  InstituteofEducationandResearchVMData,
  InstituteofEducationandResearchinstituteProfiles,
//   placedStudents,
//   tableHeaders,
  } from "../../../../../data/academics/institute/institute-department/institute-of-education-and-research-data";
import Counter from "../../../../../utils/custom/Counter";
import CustomDepartmentVissionMission from "../../../../../utils/custom/CustomDepartmentVissionMission";
import CustomDepartmentFeeDetailsTable from "../../../../../utils/custom/CustomDepartmentFeeDetailsTable";
import CustomTabs from "../../../../../utils/custom/CustomTabs";
import CustomInstituteProfileCard from "../../../../../utils/custom/CustomInstituteProfileCard";
import CustomDepartmentSlider from "../../../../../utils/custom/CustomDepartmentSlider";
import CustomFacultyListCard from "../../../../../utils/custom/CustomFacultyListCard";
import facilitiesBg from '../../../../../assets/images/academics/departments/facilities-bg-lg.webp'
import CustomDepartmentHighlightCard from "../../../../../utils/custom/CustomDepartmentHighlightCard";
// import CustomPlacedStudentTable from "../../../../../utils/custom/CustomPlacedStudentTable";


const InstituteofEducationandResearch: React.FC = () => {
  const items = [
    {
      key: "1",
      label: "Postgraduate",
      content: <CustomDepartmentFeeDetailsTable data={InstituteofEducationandResearchData1} />,
    },
    {
      key: "2",
      label: "Undergraduate",
      content: <CustomDepartmentFeeDetailsTable data={InstituteofEducationandResearchData2} />,
    },
  ];

  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={InstituteofEducationandResearchOverviewData} />
        {/* <Counter
          counterData={InstituteofEducationandResearchCounterData1.counterData}
          classes={InstituteofEducationandResearchCounterData1.classes}
          aboutusClass={InstituteofEducationandResearchCounterData1.aboutusClass}
        /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  my-15">
          {InstituteofEducationandResearchVMData.map((item) => (
 
            <CustomDepartmentVissionMission key={item.id} data={item} />
          ))}
        </div>
      </div>
      <CustomInstituteProfileCard data={InstituteofEducationandResearchinstituteProfiles} />
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
                    data={InstituteofEducationandResearchfacultyData}
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
          <h1 className="text-5xl pb-5 font-medium">Placed Students</h1>
          <p>
            With 2000+ Job Offers given by 250+ Top corporates, an average package of 4.5 LPA and 100%* placement record in different professional programs, SRMU provides the best
            return on investment. More than 30% students have multiple job offers.
          </p>
          <Counter
            counterData={InstituteofEducationandResearchCounterData2.counterData}
            classes={InstituteofEducationandResearchCounterData2.classes}
            aboutusClass={InstituteofEducationandResearchCounterData2.aboutusClass}
          />
{/* <CustomPlacedStudentTable
            students={placedStudents}
            headers={tableHeaders}
          /> */}
        </div>
      </div>
 <CustomDepartmentSlider
                heading="Key Highlights of Our Department"
                data={InstituteofEducationandResearchdepartmentHighlights}
                renderCard={({ item }) => <CustomDepartmentHighlightCard item={item} />}
                bgColor="#E7A615"
                // arrowColor="#000"

                breakpoints={{ desktop: 3, tablet: 2, mobile: 1 }}
            />

      <CustomTopFooter data={InstituteofEducationandResearchTopFooterData} />
    </div>
  );
};

export default InstituteofEducationandResearch