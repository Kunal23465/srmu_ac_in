import { FC } from "react";
import Counter from "../../../utils/custom/Counter";
import CustomTabs from "../../../utils/custom/CustomTabs";
import Classes from "../../../utils/styles/Global.module.css";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import CustomEventCard from "../../../utils/custom/CustomEventListCard";
import CustomDepartmentEventSlider from "../../../utils/custom/CustomDepartmentEventSlider";
import CustomDepartmentHighlightCard from "../../../utils/custom/CustomDepartmentHighlightCard";
import facultybg from "../../../assets/images/placements/placement-overview/placementrecords.jpeg";
import CustomOverviewSection from "../../scholarship/ScholarshipOverviewSection";
import CustomInstituteProfileCard from "../../../utils/custom/CustomInstituteProfileCard";
import CustomDepartmentVissionMission from "../../../utils/custom/CustomDepartmentVissionMission";
import CustomDepartmentFeeDetailsTable from "../../../utils/custom/CustomDepartmentFeeDetailsTable";
import {
    counterDataFoFacultyOfPhysicalScience,
    counterDataForPlacedStudentsOFPhysicalScience,
    facultyDetailsOfPhysicalScienceDepartment,
    facultyofPhysicalScienceOverviewData,
    facultyOfPhysicalScienceProfileData,
    facultyOfPhysicalScienceVMData,
    physicalScienceEventsData,
    physicalScienceHighlightsData,
    physicalSciencePostgraduateFeeTable,
    physicalScienceUndergraduateFeeTable,
} from "../../../data/academics/faculty-of-physical-sciences/faculty-of-physical-sciences-data";
import CustomDepartmentSlider from "../../../utils/custom/CustomDepartmentSlider";
import CustomFacultyListCard from "../../../utils/custom/CustomFacultyListCard";
//@ts-ignore
import CustomPlacedStudentTable, {
    Headers,
    Student,
} from "../../../utils/custom/CustomPlacedStudentTable";

import { instituteFooterData } from "../../../data/academics/institute/department-of-electrical-and-electronics-engineering-data";
import PlacedStudents from "../institutes/institute-department/electricalAndElectronics/PlacedStudents";

const FacultyOfPhysicalSciences: FC = () => {
    const items = [
        {
            key: "1",
            label: "Postgraduate",
            content: (
                <CustomDepartmentFeeDetailsTable
                    data={physicalSciencePostgraduateFeeTable}
                />
            ),
        },
        {
            key: "2",
            label: "Undergraduate",
            content: (
                <CustomDepartmentFeeDetailsTable
                    data={physicalScienceUndergraduateFeeTable}
                />
            ),
        },
    ];

    //@ts-ignore
    const tableHeaders: Headers = {
        name: "NAME OF STUDENT",
        program: "PROGRAM",
        company: "COMPANY",
    };

    const placedStudents: Student[] = [
        {
            name: "Tauheed Kidwai",
            program: "B.Sc.(Hons.) in Physics",
            company: "British Telecom",
        },
        {
            name: "Deepaniu Mishra",
            program: "B.Sc.(Hons.) in Physics",
            company: "British Telecom",
        },
        {
            name: "Akriti Trivedi",
            program: "B.Sc.(Hons.) in Physics",
            company: "British Telecom",
        },
    ];
    return (
        <div>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={facultyofPhysicalScienceOverviewData} />

                <Counter
                    counterData={counterDataFoFacultyOfPhysicalScience}
                    classes="counter"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mb-10">
                    {facultyOfPhysicalScienceVMData.map((item) => (
                        <CustomDepartmentVissionMission key={item.id} data={item} />
                    ))}
                </div>
            </div>

            <CustomInstituteProfileCard data={facultyOfPhysicalScienceProfileData} />

            <div className={`${Classes["container"]}`}>
                <div className="my-20">
                    <div className="flex w-full justify-center flex-col items-center">
                        <h2 className="leading-[1.2] font-medium text-[3.125rem] mb-3">
                            Programs and Fees
                        </h2>
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
                data={facultyDetailsOfPhysicalScienceDepartment}
                renderCard={({ item }) => <CustomFacultyListCard item={item} />}
                bgImage={facultybg}
                // arrowColor="#ffffff"
                // arrowBorderColor="#0f4a85"
                headingColor="#ffffff"
                descriptionColor="#ffffff"
                breakpoints={{ desktop: 4, tablet: 2, mobile: 1 }}
            />

            {/* <section className="bg-[#edf0f9] py-14">
        <div className={`${Classes["container"]} bg-[#edf0f9]`}>
          <h2 className="text-3xl font-semibold mb-3">Placed Students</h2>
          <p className="text-sm ">
            With 2000+ Job Offers given by 250+ Top corporates, an average
            package of 4.5 LPA and 100%* placement record in different
            professional programs, SRMU provides the best return on investment.
            More than 30% students have multiple job offers.
          </p>
          <Counter
            counterData={counterDataForPlacedStudentsOFPhysicalScience}
            classes="counter"
          />
          <CustomPlacedStudentTable
            students={placedStudents}
            headers={tableHeaders}
          />
        </div>
      </section> */}

         <section className="bg-[#edf0f9] py-14">
                <div className={`${Classes["container"]} bg-[#edf0f9]`}>
                    <PlacedStudents placedStudents={placedStudents} counterData={counterDataForPlacedStudentsOFPhysicalScience} />
                </div>
            </section>

            <CustomDepartmentSlider
                heading="Key Highlights of Our Department"
                description=""
                data={physicalScienceHighlightsData}
                renderCard={({ item }) => <CustomDepartmentHighlightCard item={item} />}
                bgColor="#f8b922"
                // arrowColor="#000"
                breakpoints={{ desktop: 3, tablet: 2, mobile: 1 }}
            />

         

            <CustomDepartmentEventSlider
                heading="Events of Department"
                description="SRMU is committed to leveraging its facilities and the system to world-class standards, with a goal to provide the best academic professional resources, to prepare its students for global opportunities. This makes SRMU a repository of academic and extra-curricular excellence."
                data={physicalScienceEventsData}
                renderCard={({ item }) => <CustomEventCard item={item} />}
                bgColor="#ffffff"
                arrowColor="#96a9c4"
                arrowBorderColor="#0f4a85"
            />

            <CustomTopFooter data={instituteFooterData} />
        </div>
    );
};

export default FacultyOfPhysicalSciences;
