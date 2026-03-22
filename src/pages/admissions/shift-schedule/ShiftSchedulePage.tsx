import React from 'react'
import ShiftSchedule from '../../../components/admissions/shift-schedule/ShiftSchedule'
import SeoHead from '../../../components/seo/SeoHead'

const ShiftSchedulePage: React.FC = () => {
    return (
        <>
        <SeoHead
             title="Shift Schedule | Shri Ramswaroop Memorial University"
             description="The shift schedule outlines the class timings for all first-year programs at SRMU for Session 2025-26. Students are allotted First or Second Shift based on their respective courses."
             pathname="/shift-schedule"
        />
            <ShiftSchedule />
        </>
       
    )
}

export default ShiftSchedulePage
