import React from 'react'
import GreenInitiative from '../../../components/campus-life/green-initiative/GreenInitiative'
import SeoHead from '../../../components/seo/SeoHead'

const GreenInitiativePage: React.FC = () => {
    return (
        <>
            <SeoHead
                title="Green Initiative | Shri Ramswaroop Memorial University, Lucknow"
                description="SRMU's dedication to sustainability is evident in its green initiatives, fostering an eco-conscious campus culture from classrooms to community spaces."
                pathname="/green-initiative"
            />
            <GreenInitiative />
        </>

    )
}

export default GreenInitiativePage
