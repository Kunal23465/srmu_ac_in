import React from "react";
import Classes from "../../../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../../utils/custom/CustomOverviewSection";
import CustomTopFooter from "../../../../utils/custom/CustomTopFooter";
import {
  InstituteofMediaStudiesCounterData1,
  InstituteofMediaStudiesCounterData2,
  InstituteofMediaStudiesData1,
  InstituteofMediaStudiesData2,
  InstituteofMediaStudiesOverviewData,
  InstituteofMediaStudiesTopFooterData,
  InstituteofMediaStudiesVMData,
  // @ts-ignore
  SampleInstituteProfileData,
} from "../../../../data/academics/institute/institute-department/institute-of-media-studies-data";
import Counter from "../../../../utils/custom/Counter";
import CustomDepartmentVissionMission from "../../../../utils/custom/CustomDepartmentVissionMission";
import CustomDepartmentFeeDetailsTable from "../../../../utils/custom/CustomDepartmentFeeDetailsTable";
import CustomTabs from "../../../../utils/custom/CustomTabs";
import CustomInstituteProfileCard from "../../../../utils/custom/CustomInstituteProfileCard";

const InstituteofMediaStudies: React.FC = () => {
  const items = [
    {
      key: "1",
      label: "Postgraduate",
      content: <CustomDepartmentFeeDetailsTable data={InstituteofMediaStudiesData1} />,
    },
    {
      key: "2",
      label: "Undergraduate",
      content: <CustomDepartmentFeeDetailsTable data={InstituteofMediaStudiesData2} />,
    },
  ];

  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={InstituteofMediaStudiesOverviewData} />
        <Counter
        // @ts-ignore
          counterData={InstituteofMediaStudiesCounterData1.counterData}
          // @ts-ignore
          classes={InstituteofMediaStudiesCounterData1.classes}
          // @ts-ignore
          aboutusClass={InstituteofMediaStudiesCounterData1.aboutusClass}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mb-10">
          {InstituteofMediaStudiesVMData.map((item) => (
            // @ts-ignore
            <CustomDepartmentVissionMission key={item.id} data={item} />
          ))}
        </div>
      </div>
      {/* @ts-ignore */}
      <CustomInstituteProfileCard />
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
        />

        <div>
          {/*  
                <CustomDepartmentSlider
                    heading="Faculty List"
                    description="The University takes pride in recruiting distinguished faculty from reputed central universities and best institutes like- IIT, IIM, MNNIT and IIT-BHU. They bring to the classroom, passion and enthusiasm for teaching, providing an intimate, interactive, personalized approach to learning."
                    data={InstituteofMediaStudiesfacultyData}
                    renderCard={({ item }) => <CustomFacultyListCard item={item} />}
                    bgImage={facilitiesBg}
                    arrowColor="#fff"
 
                    // headingColor="#ffffff"
                    descriptionColor="#e5e5e5"
 
                    arrowBorderColor="#0f4a85"
                    // arrowBgColor="#fff2"
                    breakpoints={{ desktop: 4, tablet: 3, mobile: 1 }}
                /> */}
        </div>      </div>
      <div className="pt-15 bg-[#ecf0f9]">
        <div className={`${Classes["container"]}`}>
          <h1 className="text-5xl pb-5 font-medium">Placed Students</h1>
          <p>
            With 2000+ Job Offers given by 250+ Top corporates, an average package of 4.5 LPA and 100%* placement record in different professional programs, SRMU provides the best
            return on investment. More than 30% students have multiple job offers.
          </p>
          <Counter
            counterData={InstituteofMediaStudiesCounterData2.counterData}
            classes={InstituteofMediaStudiesCounterData2.classes}
            aboutusClass={InstituteofMediaStudiesCounterData2.aboutusClass}
          />

        </div>
      </div>

      <CustomTopFooter data={InstituteofMediaStudiesTopFooterData} />
    </div>
  );
};

export default InstituteofMediaStudies;

