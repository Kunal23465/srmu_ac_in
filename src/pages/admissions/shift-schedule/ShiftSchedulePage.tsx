import React from 'react'
import ShiftSchedule from '../../../components/admissions/shift-schedule/ShiftSchedule'
import { Helmet } from 'react-helmet-async'

const ShiftSchedulePage: React.FC = () => {
    return (
        <>
        <Helmet>
             <title>Shift Schedule | Shri Ramswaroop Memorial University</title>
  <meta name="description" content="The Shift Schedule outlines the class timings for all first-year programs at SRMU for Session 2025-26. Students are allotted First or Second Shift based on their respective courses. It is important to check your shift timing to ensure timely attendance from Day 1." />
        </Helmet>
            <ShiftSchedule />
        </>
       
    )
}

export default ShiftSchedulePage