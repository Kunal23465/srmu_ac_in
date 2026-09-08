import React from 'react'
import SrmuInsidersPage from '../components/insider/SrmuInsidersPage'
import SeoHead from '../components/seo/SeoHead'

const InsiderPage: React.FC = () => {
    return (
        <>
            <SeoHead
                title={`SRMU Insider | Campus Life, Student Stories & University Updates `}
                description="Explore SRMU Insider for campus life, student stories, university events and the latest happenings at SRMU near Lucknow."
                pathname="/insider"

            />
            <SrmuInsidersPage />
        </>

    )
}

export default InsiderPage