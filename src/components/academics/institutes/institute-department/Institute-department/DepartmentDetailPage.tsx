import React from "react";
import Classes from "../../../../../utils/styles/Global.module.css";
import CustomDepartmentFeeDetailsTable from "../../../../../utils/custom/CustomDepartmentFeeDetailsTable";
import CustomOverviewSection from "../../../../../utils/custom/CustomOverviewSection";
import Counter from "../../../../../utils/custom/Counter";
import CustomDepartmentVissionMission from "../../../../../utils/custom/CustomDepartmentVissionMission";
import CustomTabs from "../../../../../utils/custom/CustomTabs";
import CustomInstituteProfileCard from "../../../../../utils/custom/CustomInstituteProfileCard";
import CustomTopFooter from "../../../../../utils/custom/CustomTopFooter";
import { useLocation } from "react-router-dom";
import { CustomTopFooterAbout } from "../../../../../data/about/aboutusData";
import CustomDepartmentSlider from "../../../../../utils/custom/CustomDepartmentSlider";
import CustomFacultyListCard from "../../../../../utils/custom/CustomFacultyListCard";
import facilitiesBg from "../../../../../assets/images/academics/departments/facilities-bg-lg.webp";
import CustomDepartmentHighlightCard from "../../../../../utils/custom/CustomDepartmentHighlightCard";
import CustomPlacedStudentTable from "../../../../../utils/custom/CustomPlacedStudentTable";
import { tableHeaders } from "../../../../../data/academics/institute/institute-department/institute-of-management-commerce-and-economics-data/institute-of-management-commerce-and-economics-data";
import CustomDepartmentEventSlider from "../../../../../utils/custom/CustomDepartmentEventSlider";
import CustomEventCard from "../../../../../utils/custom/CustomEventListCard";
const DepartmentDetailPage: React.FC = () => {
  const location = useLocation();
  const data = location.state;
  const feeTableData = data.feeTableData ?? {};
  const items = Object.keys(feeTableData).map((key, index) => {
    const tab = data.feeTableData[key];

    return {
      key: (index + 1).toString(),
      label: tab.label,
      content: <CustomDepartmentFeeDetailsTable data={tab.data} />,
    };
  });
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        {!data.overviewData && <p>Not exist records</p>}
        {data.overviewData && <CustomOverviewSection data={data.overviewData} />}
        {data?.counterData && <Counter counterData={data?.counterData} classes="counter" />}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mb-10 mt-10">
          {data?.mvData?.map((item: any) => (
            <CustomDepartmentVissionMission key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div>
        <CustomInstituteProfileCard data={data.departmentHeadData} />{" "}
      </div>
      {/* program and fee section  */}
      <div className={`${Classes["container"]} my-20`}>
        <div className="flex w-full justify-center flex-col items-center">
          <h1 className="leading-[1.2] font-medium text-[22px] sm:text-[28px] lg:text-[3.125rem] mb-3">Programs and Fees</h1>
          <p className="text-center text-sm md:text-[15px] mb-[45px]">
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
        {!data.facultyData && <p>Not exist data for slider</p>}
        {data.facultyData && <CustomDepartmentSlider
          heading="Faculty List"
          description="The University takes pride in recruiting distinguished faculty from reputed central universities and best institutes like- IIT, IIM, MNNIT and IIT-BHU. They bring to the classroom, passion and enthusiasm for teaching, providing an intimate, interactive, personalized approach to learning."
          data={data.facultyData}
          renderCard={({ item }: any) => <CustomFacultyListCard item={item} />}
          bgImage={facilitiesBg}

          headingColor="#ffffff"
          descriptionColor="#e5e5e5"
          // arrowBorderColor="#0f4a85"
          // arrowBgColor="#fff2"
          breakpoints={{ desktop: 4, tablet: 3, mobile: 1 }}
        />}
      </div>
      <div className="pt-15 bg-[#ecf0f9]">
        <div className={`${Classes["container"]}`}>
          <h1 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] pb-5 font-medium">Placed Students</h1>
          <p>
            With 2000+ Job Offers given by 250+ Top corporates, an average package of 4.5 LPA and 100%* placement record in different professional programs, SRMU provides the best
            return on investment. More than 30% students have multiple job offers.
          </p>
          {data.counterData2 && <Counter counterData={data.counterData2.counterData} classes="counter" />}
          {data.placedStudentsData && <CustomPlacedStudentTable students={data.placedStudentsData} headers={tableHeaders} />}
        </div>
      </div>
      {data.departmentHighlightsData && (
        <CustomDepartmentSlider
          heading="Key Highlights of Our Department"
          description="Explore key achievements"
          data={data.departmentHighlightsData}
          renderCard={({ item }: any) => <CustomDepartmentHighlightCard item={item} />}
          bgColor="#E7A615"

          breakpoints={{ desktop: 3, tablet: 2, mobile: 1 }}
        />
      )}
      {data.eventsData && (
        <CustomDepartmentEventSlider
          heading="Events of Department"
          description="SRMU is committed to leveraging its facilities and the system to world-class standards, with a goal to provide the best academic professional resources, to prepare its students for global opportunities. This makes SRMU a repository of academic and extra-curricular excellence."
          data={data.eventsData}
          renderCard={({ item }: any) => <CustomEventCard item={item} />}
          bgColor="#ffffff"
          arrowColor="#96a9c4"
          arrowBorderColor="#0f4a85"
        />
      )}
      <CustomTopFooter data={CustomTopFooterAbout} />
    </div>
  );
};

export default DepartmentDetailPage;
