import React from 'react'
import Scholarship from '../../../components/scholarship/Scholarship'
import { Helmet } from 'react-helmet-async'
const ScholarshipPage: React.FC = () => {
    return (
        <>

            <Helmet>
                <title>Scholarships | Scholarship Schemes 2025</title>
                <meta name="description" content="SRMU provides a range of merit-based and need-driven scholarships designed to support and recognize exceptional talent." />
            </Helmet>
            <Scholarship />
        </>

    )
}

export default ScholarshipPage