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
} from "../../../../../data/academics/institute/institute-department/institute-of-pharmaceutical-sciences-data";
import Counter from "../../../../../utils/custom/Counter";
import CustomDepartmentVissionMission from "../../../../../utils/custom/CustomDepartmentVissionMission";
import CustomDepartmentFeeDetailsTable from "../../../../../utils/custom/CustomDepartmentFeeDetailsTable";
import CustomTabs from "../../../../../utils/custom/CustomTabs";
import CustomInstituteProfileCard from "../../../../../utils/custom/CustomInstituteProfileCard";
import CustomDepartmentSlider from "../../../../../utils/custom/CustomDepartmentSlider";
import CustomFacultyListCard from "../../../../../utils/custom/CustomFacultyListCard";
import facilitiesBg from "../../../../../assets/images/academics/departments/facilities-bg-lg.webp";
import PlacedStudents from "../electricalAndElectronics/PlacedStudents";
import { DepartmentOfElectricalAndElectronicsPlacedStudents } from "../../../../../data/academics/institute/department-of-electrical-and-electronics-engineering-data";

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
        {/* <Counter
        //@ts-ignore
          counterData={InstituteofPharmaceuticalSciencesCounterData1.counterData}
          //@ts-ignore

          classes={InstituteofPharmaceuticalSciencesCounterData1.classes}
          //@ts-ignore
          aboutusClass={InstituteofPharmaceuticalSciencesCounterData1.aboutusClass}
        /> */}

        <Counter
          counterData={InstituteofPharmaceuticalSciencesCounterData1}
          classes="counter"
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

          headingColor="#ffffff"
          descriptionColor="#e5e5e5"


          breakpoints={{ desktop: 4, tablet: 3, mobile: 1 }}
        />
      </div>
      {/* <div className={`${Classes["container"]}`}></div>
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
      </div> */}

      {/* <section className="bg-[#edf0f9] py-14">
        <div className={`${Classes["container"]} bg-[#edf0f9]`}>
          <h1 className="text-3xl font-semibold mb-3">Placed Students</h1>
          <p className="text-sm ">
            With 2000+ Job Offers given by 250+ Top corporates, an average
            package of 4.5 LPA and 100%* placement record in different
            professional programs, SRMU provides the best return on investment.
            More than 30% students have multiple job offers.
          </p>
         
        </div>
      </section> */}

       <section className="bg-[#edf0f9] py-14">
            <div className={`${Classes["container"]} bg-[#edf0f9]`}>
              <PlacedStudents placedStudents={DepartmentOfElectricalAndElectronicsPlacedStudents} counterData={InstituteofPharmaceuticalSciencesCounterData2} />
            </div>
          </section>




      <CustomTopFooter data={InstituteofPharmaceuticalSciencesTopFooterData} />
    </div>
  );
};

export default InstituteofPharmaceuticalSciences;