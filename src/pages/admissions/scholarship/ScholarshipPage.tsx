import React from 'react'
import Scholarship from '../../../components/scholarship/Scholarship'
import SeoHead from '../../../components/seo/SeoHead'
const ScholarshipPage: React.FC = () => {
    return (
        <>

            <SeoHead
                title="Scholarship Schemes 2026: Merit-Based Awards at SRMU"
                description=" Explore SRMU’s scholarship schemes for 2026. Get merit-based fee waivers designed to support and recognize exceptional talent."
                pathname="/scholarship-scheme"
            />
            <Scholarship />
        </>

    )
}

export default ScholarshipPage
