import React from 'react'
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection'
import Classes from "../../../utils/styles/Global.module.css";
import { studentCornerFirstCycle, StudentCornerOverviewData, studentCornerSecondCycle } from '../../../data/campus-life/student-corner/student-corner-data';
import CustomTable from '../../../utils/custom/CustomTable';


const StudentCornerComp:React.FC = () => {
    return (
        <div>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={StudentCornerOverviewData} />
                <CustomTable
                    columnOneHeader="Policies"
                    columnTwoHeader="Downloads"
                    data={studentCornerSecondCycle}
                />

                <CustomTable
                    columnOneHeader="Tutorials"
                    columnTwoHeader="Downloads"
                    data={studentCornerFirstCycle}
                /><div className='pb-10 md:pb-20' />
            </div>
        </div>
    )
}

export default StudentCornerComp