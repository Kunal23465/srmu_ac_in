import React from "react";
import Classes from "../../../utils/styles/Global.module.css";
import CustomDepartmentFeeDetailsTable from "../../../utils/custom/CustomDepartmentFeeDetailsTable";
import CustomOverviewSection from "../../scholarship/ScholarshipOverviewSection";
import Counter from "../../../utils/custom/Counter";
import CustomDepartmentVissionMission from "../../../utils/custom/CustomDepartmentVissionMission";
import { FacultyOfMathematicalAndStatisticalSciencesCounterData1, FacultyOfMathematicalAndStatisticalSciencesCounterData2, FacultyOfMathematicalAndStatisticalSciencesData1, FacultyOfMathematicalAndStatisticalSciencesData2, FacultyOfMathematicalAndStatisticalSciencesDepartmentEventsData, FacultyOfMathematicalAndStatisticalSciencesdepartmentHighlights, FacultyOfMathematicalAndStatisticalSciencesfacultyData, FacultyOfMathematicalAndStatisticalSciencesinstituteProfiles, FacultyOfMathematicalAndStatisticalSciencesOverviewData, FacultyOfMathematicalAndStatisticalSciencesTopFooterData, FacultyOfMathematicalAndStatisticalSciencesVMData, MathematicalAndStatisticalSciencesplacedStudents } from "../../../data/academics/institute/institute-department/faculty-of-mathematical-and-statistical-sciences-data";
import CustomInstituteProfileCard from "../../../utils/custom/CustomInstituteProfileCard";
import CustomTabs from "../../../utils/custom/CustomTabs";
import CustomDepartmentSlider from "../../../utils/custom/CustomDepartmentSlider";
import CustomFacultyListCard from "../../../utils/custom/CustomFacultyListCard";
import CustomDepartmentHighlightCard from "../../../utils/custom/CustomDepartmentHighlightCard";
import CustomDepartmentEventSlider from "../../../utils/custom/CustomDepartmentEventSlider";
import CustomEventCard from "../../../utils/custom/CustomEventListCard";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import PlacedStudents from "../institutes/institute-department/electricalAndElectronics/PlacedStudents";
import facilitiesBg from "../../../assets/images/academics/departments/maths/facilities-bg-lg.webp"



const FacultyOfMathematicalAndStatisticalSciences: React.FC = () => {
    const items = [
        {
            key: "1",
            label: "Postgraduate",
            content: <CustomDepartmentFeeDetailsTable data={FacultyOfMathematicalAndStatisticalSciencesData1} />,
        },
        {
            key: "2",
            label: "Undergraduate",
            content: <CustomDepartmentFeeDetailsTable data={FacultyOfMathematicalAndStatisticalSciencesData2} />,
        },
    ];

    return (
        <div>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={FacultyOfMathematicalAndStatisticalSciencesOverviewData} />
                 <Counter
                    counterData={FacultyOfMathematicalAndStatisticalSciencesCounterData1}
                    classes="counter"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12  my-15">
                    {FacultyOfMathematicalAndStatisticalSciencesVMData.map((item) => (

                        <CustomDepartmentVissionMission key={item.id} data={item} />
                    ))}
                </div>
            </div>
            <CustomInstituteProfileCard data={FacultyOfMathematicalAndStatisticalSciencesinstituteProfiles} />
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
                    data={FacultyOfMathematicalAndStatisticalSciencesfacultyData}
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
                    {/* <Counter
            counterData={FacultyOfMathematicalAndStatisticalSciencesCounterData2.counterData}
            classes={FacultyOfMathematicalAndStatisticalSciencesCounterData2.classes}
            aboutusClass={FacultyOfMathematicalAndStatisticalSciencesCounterData2.aboutusClass}
          />
<CustomPlacedStudentTable
            students={placedStudents}
            headers={tableHeaders}
          /> */}

                    <section className="bg-[#edf0f9] py-14">
                        <div className={`${Classes["container"]} bg-[#edf0f9]`}>
                            <PlacedStudents placedStudents={MathematicalAndStatisticalSciencesplacedStudents} counterData={FacultyOfMathematicalAndStatisticalSciencesCounterData2} />
                        </div>
                    </section>
                </div>
            </div>
            <CustomDepartmentSlider
                heading="Key Highlights of Our Department"
                data={FacultyOfMathematicalAndStatisticalSciencesdepartmentHighlights}
                renderCard={({ item }) => <CustomDepartmentHighlightCard item={item} />}
                bgColor="#E7A615"
                // arrowColor="#000"

                breakpoints={{ desktop: 3, tablet: 2, mobile: 1 }}
            />

            <CustomDepartmentEventSlider
                heading="Events of Department"
                description="SRMU is committed to leveraging its facilities and the system to world-class standards, with a goal to provide the best academic professional resources, to prepare its students for global opportunities. This makes SRMU a repository of academic and extra-curricular excellence."
                data={FacultyOfMathematicalAndStatisticalSciencesDepartmentEventsData}
                renderCard={({ item }) => <CustomEventCard item={item} />}
                bgColor="#ffffff"
                arrowColor="#96a9c4"
                arrowBorderColor="#0f4a85"
            />


            <CustomTopFooter data={FacultyOfMathematicalAndStatisticalSciencesTopFooterData} />
        </div>
    );
};


export default FacultyOfMathematicalAndStatisticalSciences
