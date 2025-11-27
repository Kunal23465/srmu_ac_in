import { FC } from "react";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../scholarship/ScholarshipOverviewSection";
import Counter from "../../../utils/custom/Counter";
import CustomDepartmentVissionMission from "../../../utils/custom/CustomDepartmentVissionMission";
import {
  alliedHealthScienceDepartmentEventsData,
  alliedHealthScienceHighlightsData,
  counterDataFoFacultyOfAlliedHealthSciences,
  counterDataForPlacedStudentsOFAlliedHealthSciences,
  facultyDetailsOfAhsDepartment,
  facultyofAHSOverviewData,
  facultyOfAhsProfileData,
  facultyOfAlliedHealthSciencesVMData,
  underGraduateFeeDataOfAHS,
} from "../../../data/academics/faculty-of-allied-health-sciences/faculty-of-allied-health-sciences-data";
import CustomInstituteProfileCard from "../../../utils/custom/CustomInstituteProfileCard";
import CustomTabs from "../../../utils/custom/CustomTabs";
import CustomDepartmentSlider from "../../../utils/custom/CustomDepartmentSlider";
import CustomFacultyListCard from "../../../utils/custom/CustomFacultyListCard";
import facultybg from "../../../assets/images/placements/placement-overview/placementrecords.jpeg";
import CustomDepartmentFeeDetailsTable from "../../../utils/custom/CustomDepartmentFeeDetailsTable";
import CustomDepartmentHighlightCard from "../../../utils/custom/CustomDepartmentHighlightCard";
import CustomDepartmentEventSlider from "../../../utils/custom/CustomDepartmentEventSlider";
import CustomEventCard from "../../../utils/custom/CustomEventListCard";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { instituteFooterData } from "../../../data/academics/institute/department-of-electrical-and-electronics-engineering-data";

const FacultyOfAlliedHealthSciences: FC = () => {
  const items = [
    {
      key: "1",
      label: "Undergraduate",
      content: (
        <CustomDepartmentFeeDetailsTable data={underGraduateFeeDataOfAHS} />
      ),
    },
  ];
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={facultyofAHSOverviewData} />
        <Counter
          counterData={counterDataFoFacultyOfAlliedHealthSciences}
          classes="counter"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mb-10">
          {facultyOfAlliedHealthSciencesVMData.map((item) => (
            <CustomDepartmentVissionMission key={item.id} data={item} />
          ))}
        </div>
      </div>
      <CustomInstituteProfileCard data={facultyOfAhsProfileData} />

      <div className={`${Classes["container"]}`}>
        <div className="my-20">
          <div className="flex w-full justify-center flex-col items-center">
            <h1 className="leading-[1.2] font-medium text-[3.125rem] mb-3">
              Programs and Fees
            </h1>
            <p className="text-center text-[15px] mb-[45px]">
              At SRMU we have always believed that a student SHOULD BE TRAINED
              FOR INDUSTRY, BY THE INDUSTRY. Keeping the culture of rich
              academia-industry interface, university is now offering
              specialized programs in different academic domains.
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

      <CustomDepartmentSlider
        heading="Faculty List"
        description="The University takes pride in recruiting distinguished faculty from reputed central universities and best institutes like- IIT, IIM, MNNIT and IIT-BHU. They bring to the classroom, passion and enthusiasm for teaching, providing an intimate, interactive, personalized approach to learning."
        data={facultyDetailsOfAhsDepartment}
        renderCard={({ item }) => <CustomFacultyListCard item={item} />}
        bgImage={facultybg}
        arrowColor="#ffffff"
        arrowBorderColor="#0f4a85"
        headingColor="#ffffff"
        descriptionColor="#ffffff"
        breakpoints={{ desktop: 4, tablet: 2, mobile: 1 }}
      />
      <section className="bg-[#edf0f9] py-14">
        <div className={`${Classes["container"]} bg-[#edf0f9]`}>
          <h1 className="text-3xl font-semibold mb-3">Placed Students</h1>
          <p className="text-sm ">
            With 2000+ Job Offers given by 250+ Top corporates, an average
            package of 4.5 LPA and 100%* placement record in different
            professional programs, SRMU provides the best return on investment.
            More than 30% students have multiple job offers.
          </p>
          <Counter
            counterData={counterDataForPlacedStudentsOFAlliedHealthSciences}
            classes="counter"
          />
        </div>
      </section>
      <CustomDepartmentSlider
        heading="Key Highlights of Our Department"
        description=""
        data={alliedHealthScienceHighlightsData}
        renderCard={({ item }) => <CustomDepartmentHighlightCard item={item} />}
        bgColor="#f8b922"
        arrowColor="#000"
        breakpoints={{ desktop: 3, tablet: 2, mobile: 1 }}
      />
      <CustomDepartmentEventSlider
        heading="Events of Department"
        description="SRMU is committed to leveraging its facilities and the system to world-class standards, with a goal to provide the best academic professional resources, to prepare its students for global opportunities. This makes SRMU a repository of academic and extra-curricular excellence."
        data={alliedHealthScienceDepartmentEventsData}
        renderCard={({ item }) => <CustomEventCard item={item} />}
        bgColor="#ffffff"
        arrowColor="#96a9c4"
        arrowBorderColor="#0f4a85"
      />
      <CustomTopFooter data={instituteFooterData} />
    </div>
  );
};

export default FacultyOfAlliedHealthSciences;
