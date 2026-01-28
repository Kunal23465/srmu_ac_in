import React from 'react'
import Iqac from '../../../components/about/iqac-overview/Iqac'
import { Helmet } from 'react-helmet-async'

const IqacPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>IQAC Overview, IQAC Annual Reports, | Shri Ramswaroop Memorial University, Lucknow</title>
                <meta name="description" content="The Internal Quality Assurance Cell (IQAC) assesses accreditation requirements, and is dedicated to enhancing overall institutional performance through conscious and catalytic improvements." />
            </Helmet>
            <Iqac />
        </>

    )
}

export default IqacPage