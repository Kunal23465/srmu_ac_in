import React from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import { civilFacultyOverviewData, civilFeeData, counterDataForFacultyCivil, departmentHighlights, } from '../../../data/academics/faculty-of-civil-engineering/faculty-of-civil-engineering-data';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { CustomTopFooterData1 } from '../../../data/about/leadership-and-governance/leadership-and-governance-data';
import Counter from '../../../utils/custom/Counter';
import CustomDepartmentFeeDetailsTable from '../../../utils/custom/CustomDepartmentFeeDetailsTable';
import CustomTabs from '../../../utils/custom/CustomTabs';
import { grievanceData } from '../../../data/campus-life/grievance-redressal-system/grievance-redressal-system-data';
import TypesOfGrievance from '../../campus-life/grievance-redressal-system/TypesOfGrievance';
import CustomDepartmentSlider from '../../../utils/custom/CustomDepartmentSlider';
import CustomDepartmentHighlightCard from './CustomDepartmentHighlightCard';


const FacultyOfCivilEngineering: React.FC = () => {


    const items = [
        {
            key: "1",
            label: "ABOUT GRIEVANCE REDRESSAL SYSTEM",
            content: <CustomDepartmentFeeDetailsTable data={civilFeeData} />,
        },
        {
            key: "2",
            label: "TYPES OF GRIEVANCE",
            content: <TypesOfGrievance data={grievanceData.types} />,
        },


    ];

    return (
        <div>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={civilFacultyOverviewData} />
                <Counter counterData={counterDataForFacultyCivil} classes="counter" />
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mb-10">
                    {CivildepartmentVMData.map((item) => (
                        <CustomDepartmentVissionMission key={item.id} data={item} />
                    ))}
                </div> */}

                <CustomTabs
                    items={items}
                    variant="pill"
                    activeTextColor="#000000"
                    inactiveTextColor="#ffffff"
                    activeBgColor="#ffb703"
                    inactiveBgColor="#0f4a85"
                    pillContainerBgColor="#0f4a85"
                />




                <div className="">

                </div>


            </div>
            <CustomTopFooter data={CustomTopFooterData1} />

            <CustomDepartmentSlider
                heading="Key Highlights of Our Department"
                description="Explore key achievements"
                data={departmentHighlights}
                renderCard={({ item }) => <CustomDepartmentHighlightCard item={item} />}
                bgColor="#E7A615"
                arrowColor="#000"

                breakpoints={{ desktop: 3, tablet: 2, mobile: 1 }}
            />

        </div>
    )
}

export default FacultyOfCivilEngineering