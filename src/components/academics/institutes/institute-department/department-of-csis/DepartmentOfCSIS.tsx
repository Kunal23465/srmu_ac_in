import React from 'react'
import Classes from "../../../../../utils/styles/Global.module.css";

import CustomOverviewSection from '../../../../../utils/custom/CustomOverviewSection';
import Counter from '../../../../../utils/custom/Counter';
import CustomDepartmentVissionMission from '../../../../../utils/custom/CustomDepartmentVissionMission';
import CustomInstituteProfileCard from '../../../../../utils/custom/CustomInstituteProfileCard';
import CustomTopFooter from '../../../../../utils/custom/CustomTopFooter';
import { CustomTopFooterData1 } from '../../../../../data/about/leadership-and-governance/leadership-and-governance-data';
import CustomTabs from '../../../../../utils/custom/CustomTabs';
import CustomDepartmentFeeDetailsTable from '../../../../../utils/custom/CustomDepartmentFeeDetailsTable';
import CustomPlacedStudentTable from '../../../../../utils/custom/CustomPlacedStudentTable';
import CustomDepartmentSlider from '../../../../../utils/custom/CustomDepartmentSlider';
// import { facultyData } from '../../../../../data/academics/faculty-of-civil-engineering/faculty-of-civil-engineering-data';
import CustomFacultyListCard from '../../../../../utils/custom/CustomFacultyListCard';
import facilitiesBg from "../../../../../assets/images/academics/departments/facilities-bg-lg.jpeg"
import { counterDataForFacultyCSIS, counterForFacultyCSIS,  csisDepartmentEventsData,  CSISDepartmentVMData, CsisfacultyData, csISFacultyOverviewData, csisIndustryIntegratedFeeTable, CsisplacedStudents, csispostgraduateFeeTable, csistableHeaders, csisugFeeTable, departmentHighlightsCsis, instituteProfilesCSIS } from '../../../../../data/academics/institute/institute-department/department-of-ceis-data';
import CustomDepartmentHighlightCard from '../../../../../utils/custom/CustomDepartmentHighlightCard';
import CustomEventCard from '../../../../../utils/custom/CustomEventListCard';
import CustomDepartmentEventSlider from '../../../../../utils/custom/CustomDepartmentEventSlider';


const DepartmentOfCSIS: React.FC = () => {


  const items = [
    {
      key: "1",
      label: "Industry Honours",
      content: <CustomDepartmentFeeDetailsTable data={csisIndustryIntegratedFeeTable} />,
    },
    {
      key: "2",
      label: "Postgraduate",
      content: <CustomDepartmentFeeDetailsTable data={csispostgraduateFeeTable} />,
    }, {
      key: "3",
      label: "Undergraduate",
      content: <CustomDepartmentFeeDetailsTable data={csisugFeeTable} />,
    },


  ];

  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={csISFacultyOverviewData} />
        <Counter counterData={counterDataForFacultyCSIS} classes="counter" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mb-10 mt-10">
          {CSISDepartmentVMData.map((item) => (
            <CustomDepartmentVissionMission key={item.id} data={item} />
          ))}
        </div>

      </div>
      <div>
        <CustomInstituteProfileCard data={instituteProfilesCSIS} />
      </div>

      <div className={`${Classes["container"]}`}>

        {/* program and fee section  */}
        <div className='my-[80px]'>

          <div className='flex w-full justify-center flex-col items-center'>
            <h1 className="leading-[1.2] font-medium text-[3.125rem] mb-3">
              Programs and Fees
            </h1>
            <p className='text-center text-[15px] mb-[45px]'>At SRMU we have always believed that a student SHOULD BE TRAINED FOR INDUSTRY, BY THE INDUSTRY. Keeping the culture of rich academia-industry interface, university is now offering specialized programs in different academic domains.</p>

          </div>
          <CustomTabs
            items={items}
            variant="pill"
            activeTextColor="#000000"
            inactiveTextColor="#ffffff"
            activeBgColor="#ffb703"
            inactiveBgColor="#0f4a85"
            pillContainerBgColor="#0f4a85"
            alignTabs='center'
          />

        </div>



      </div>

      <CustomDepartmentSlider
        heading="Faculty List"
        description="The University takes pride in recruiting distinguished faculty from reputed central universities and best institutes like- IIT, IIM, MNNIT and IIT-BHU. They bring to the classroom, passion and enthusiasm for teaching, providing an intimate, interactive, personalized approach to learning."
        data={CsisfacultyData}
        renderCard={({ item }) => <CustomFacultyListCard item={item} />}
        bgImage={facilitiesBg}
        arrowColor="#fff"

        headingColor="#ffffff"
        descriptionColor="#e5e5e5"

        arrowBorderColor="#0f4a85"
        // arrowBgColor="#fff2"
        breakpoints={{ desktop: 4, tablet: 3, mobile: 1 }}
      />
      <section className="bg-[#edf0f9] py-14">
        <div className={`${Classes["container"]} bg-[#edf0f9]`}>
          <h1 className="text-3xl font-semibold mb-3">Placed Students</h1>
          <p className="text-sm ">
            With 2000+ Job Offers given by 250+ Top corporates, an average package of 4.5 LPA and 100%* placement record in different professional programs, SRMU provides the best return on investment. More than 30% students have multiple job offers.
          </p>
          <Counter
            counterData={counterForFacultyCSIS}
            classes="counter"
          />
          <CustomPlacedStudentTable
            students={CsisplacedStudents}
            headers={csistableHeaders}
          />
        </div>
      </section>

      <CustomDepartmentSlider
        heading="Key Highlights of Our Department"
        description="Explore key achievements"
        data={departmentHighlightsCsis}
        renderCard={({ item }) => <CustomDepartmentHighlightCard item={item} />}
        bgColor="#E7A615"
        arrowColor="#000"

        breakpoints={{ desktop: 3, tablet: 2, mobile: 1 }}
      />

      <CustomDepartmentEventSlider
        heading="Events of Department"
        description="SRMU is committed to leveraging its facilities and the system to world-class standards, with a goal to provide the best academic professional resources, to prepare its students for global opportunities. This makes SRMU a repository of academic and extra-curricular excellence."
        data={csisDepartmentEventsData}
        renderCard={({ item }) => <CustomEventCard item={item} />}
        bgColor="#ffffff"
        arrowColor="#96a9c4"
        arrowBorderColor="#0f4a85"
      />


      {/* <div>

                <CustomDepartmentSlider
                    heading="Faculty List"
                    description="The University takes pride in recruiting distinguished faculty from reputed central universities and best institutes like- IIT, IIM, MNNIT and IIT-BHU. They bring to the classroom, passion and enthusiasm for teaching, providing an intimate, interactive, personalized approach to learning."
                    data={facultyData}
                    renderCard={({ item }) => <CustomFacultyListCard item={item} />}
                    bgImage={facilitiesBg}
                    arrowColor="#fff"

                    headingColor="#ffffff"
                    descriptionColor="#e5e5e5"

                    arrowBorderColor="#0f4a85"
                    // arrowBgColor="#fff2"
                    breakpoints={{ desktop: 4, tablet: 3, mobile: 1 }}
                />
            </div> */}



      {/* <CustomDepartmentSlider
                heading="Key Highlights of Our Department"
                description="Explore key achievements"
                data={departmentHighlights}
                renderCard={({ item }) => <CustomDepartmentHighlightCard item={item} />}
                bgColor="#E7A615"
                arrowColor="#000"

                breakpoints={{ desktop: 3, tablet: 2, mobile: 1 }}
            /> */}

      <CustomTopFooter data={CustomTopFooterData1} />
    </div>
  )
}

export default DepartmentOfCSIS