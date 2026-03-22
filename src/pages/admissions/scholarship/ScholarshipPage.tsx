import React from 'react'
import Scholarship from '../../../components/scholarship/Scholarship'
import SeoHead from '../../../components/seo/SeoHead'
const ScholarshipPage: React.FC = () => {
    return (
        <>

            <SeoHead
                title="Scholarships | Scholarship Schemes 2025"
                description="SRMU provides a range of merit-based and need-driven scholarships designed to support and recognize exceptional talent."
                pathname="/scholarship-scheme"
            />
            <Scholarship />
        </>

    )
}

export default ScholarshipPage
