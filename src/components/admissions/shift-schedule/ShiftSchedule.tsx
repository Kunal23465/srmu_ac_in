import React from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import CustomTable from '../../../utils/custom/CustomTable';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { ShiftCustomTopFooter, ShiftDetailsData, shiftScheduleOverviewData } from '../../../data/admissions/shift-schedule/shift-schedule-data';

const ShiftSchedule: React.FC = () => {
    return (
        <>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={shiftScheduleOverviewData} />
                <CustomTable
                    columnOneHeader="Shift Details"
                    columnTwoHeader="Downloads"
                    data={ShiftDetailsData}
                />
                <div className='mb-10 sm:mb-20' />

            </div>
            <CustomTopFooter data={ShiftCustomTopFooter} />

        </>
    )
}

export default ShiftSchedule;