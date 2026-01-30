import React from 'react'
import Clubs from '../../../components/campus-life/clubs/Clubs'
import { Helmet } from 'react-helmet-async'

const ClubsPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Clubs | Shri Ramswaroop Memorial University, Lucknow</title>
                <meta name="description" content="Getting involved in a student club at SRMU isn&#039;t merely about picking up a hobby; it&#039;s a life-changing journey. It links you to a lively community, fosters personal development, and, above all, brings in lots of fun!" />
            </Helmet>
            <Clubs />
        </>

    )
}

export default ClubsPage