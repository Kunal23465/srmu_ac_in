import React from 'react'
import Iqac from '../../../components/about/iqac-overview/Iqac'
import { Helmet } from 'react-helmet-async'

const IqacPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>IQAC Overview- Internal Quality Assurance Cell at SRMU</title>
                {/* <meta name="robots" content="index,follow" /> */}
                <meta name="description" content="Learn about SRMU's IQAC, quality assurance initiatives, academic standards, continuous improvement and excellence." />
            </Helmet>
            <Iqac />
        </>

    )
}

export default IqacPage