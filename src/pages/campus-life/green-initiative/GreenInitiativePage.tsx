import React from 'react'
import GreenInitiative from '../../../components/campus-life/green-initiative/GreenInitiative'
import { Helmet } from 'react-helmet-async'

const GreenInitiativePage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Green initiative | Shri Ramswaroop Memorial University, Lucknow</title>
                <meta name="description" content="SRMU&#039;s dedication to sustainability is evident in our Green Initiatives, fostering an eco-conscious campus culture from classrooms to community spaces." />
            </Helmet>
            <GreenInitiative />
        </>

    )
}

export default GreenInitiativePage