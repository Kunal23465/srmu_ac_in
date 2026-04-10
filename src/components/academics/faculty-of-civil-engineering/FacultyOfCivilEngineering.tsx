import React from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { CustomTopFooterData1 } from '../../../data/about/leadership-and-governance/leadership-and-governance-data';
import Counter from '../../../utils/custom/Counter';
import CustomDepartmentFeeDetailsTable from '../../../utils/custom/CustomDepartmentFeeDetailsTable';
import CustomTabs from '../../../utils/custom/CustomTabs';
import CustomDepartmentSlider from '../../../utils/custom/CustomDepartmentSlider';
import CustomDepartmentVissionMission from '../../../utils/custom/CustomDepartmentVissionMission';
import CustomDepartmentHighlightCard from '../../../utils/custom/CustomDepartmentHighlightCard';
import facilitiesBg from "../../../assets/images/academics/departments/facilities-bg-lg.webp"
import CustomFacultyListCard from '../../../utils/custom/CustomFacultyListCard';
import CustomInstituteProfileCard from '../../../utils/custom/CustomInstituteProfileCard';
import { civilcounterData2, civildepartmentHighlights, CivildepartmentVMData, civilfacultyData, civilFacultyOverviewData, civilIndustryHonoursFeeTable, civilIndustryIntegratedFeeTable, civilIndustryPostgraduateFeeTable, civilIndustryUndergraduateFeeTable, civilPlacedStudents, counterDataForFacultyCivil, instituteProfilesCivil } from '../../../data/academics/institute/faculty-of-civil-engineering/faculty-of-civil-engineering-data';
import PlacedStudents from '../institutes/institute-department/electricalAndElectronics/PlacedStudents';


const FacultyOfCivilEngineering: React.FC = () => {


  const items = [
    {
      key: "1",
      label: "Industry Honours",
      content: <CustomDepartmentFeeDetailsTable data={civilIndustryHonoursFeeTable} />,
    },
    {
      key: "2",
      label: "Integrated",
      content: <CustomDepartmentFeeDetailsTable data={civilIndustryIntegratedFeeTable} />,
    },
    {
      key: "3",
      label: "Postgraduate",
      content: <CustomDepartmentFeeDetailsTable data={civilIndustryPostgraduateFeeTable} />,
    }, {
      key: "4",
      label: "Undergraduate",
      content: <CustomDepartmentFeeDetailsTable data={civilIndustryUndergraduateFeeTable} />,
    },


  ];

  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={civilFacultyOverviewData} />
        <Counter counterData={counterDataForFacultyCivil} classes="counter" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mb-10 mt-10">
          {CivildepartmentVMData.map((item) => (
            <CustomDepartmentVissionMission key={item.id} data={item} />
          ))}
        </div>

        {/* program and fee section  */}
        <div className="my-[80px]">
          <div className="flex w-full justify-center flex-col items-center">
            <h2 className="leading-[1.2] text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 mb-3">Programs and Fees</h2>
            <p className="text-center text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] mb-[45px]">
              At SRMU we have always believed that a student SHOULD BE TRAINED FOR INDUSTRY, BY THE INDUSTRY. Keeping the culture of rich academia-industry interface, university
              is now offering specialized programs in different academic domains.
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
      </div>

      <div>
        <CustomInstituteProfileCard data={instituteProfilesCivil} />
      </div>
      <div>
        <CustomDepartmentSlider
          heading="Faculty List"
          description="The University takes pride in recruiting distinguished faculty from reputed central universities and best institutes like- IIT, IIM, MNNIT and IIT-BHU. They bring to the classroom, passion and enthusiasm for teaching, providing an intimate, interactive, personalized approach to learning."
          data={civilfacultyData}
          renderCard={({ item }) => <CustomFacultyListCard item={item} />}
          bgImage={facilitiesBg}

          headingColor="#ffffff"
          descriptionColor="#e5e5e5"
          // arrowBorderColor="#0f4a85"
          // arrowBgColor="#fff2"
          breakpoints={{ desktop: 4, tablet: 3, mobile: 1 }}
        />
      </div>

      <section className="bg-[#edf0f9] py-14">
        <div className={`${Classes["container"]} bg-[#edf0f9]`}>
          <PlacedStudents placedStudents={civilPlacedStudents} counterData={civilcounterData2} />
        </div>
      </section>
      <CustomDepartmentSlider
        heading="Key Highlights of Our Department"
        description=""
        data={civildepartmentHighlights}
        renderCard={({ item }) => <CustomDepartmentHighlightCard item={item} />}
        bgColor="#E7A615"

        breakpoints={{ desktop: 3, tablet: 2, mobile: 1 }}
      />

          
      <CustomTopFooter data={CustomTopFooterData1} />

    </div>
  );
}

export default FacultyOfCivilEngineering
