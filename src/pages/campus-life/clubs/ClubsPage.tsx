import React from 'react'
import Clubs from '../../../components/campus-life/clubs/Clubs'
import SeoHead from '../../../components/seo/SeoHead'

const ClubsPage: React.FC = () => {
    return (
        <>
            <SeoHead
                title="Clubs | Shri Ramswaroop Memorial University, Lucknow"
                description="Getting involved in a student club at SRMU isn't merely about picking up a hobby; it's a life-changing journey that links you to a lively community, fosters personal development, and brings in lots of fun."
                pathname="/clubs"
            />
            <Clubs />
        </>

    )
}

export default ClubsPage
