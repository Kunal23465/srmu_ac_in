import React from 'react'
import AlumniTestimonials from '../../components/placement/alumni-testimonials/AlumniTestimonials'
import { Helmet } from 'react-helmet-async'

const AlumniTestimonialsPage: React.FC = () => {
    return (
        <div>
            <Helmet>
                <title>Notable Alumni | Shri Ramswaroop Memorial University, Lucknow</title>
                <meta name="description" content="Explore the impressive journey of SRMU&#039;s notable alumni, showcasing their achievements and contributions across diverse industries worldwide." />
            </Helmet>
            <AlumniTestimonials />
        </div>
    )
}

export default AlumniTestimonialsPage
