import React from 'react'
import AlumniTestimonials from '../../components/placement/alumni-testimonials/AlumniTestimonials'
import SeoHead from '../../components/seo/SeoHead'

const AlumniTestimonialsPage: React.FC = () => {
    return (
        <div>
            <SeoHead
                title="Notable Alumni | Shri Ramswaroop Memorial University, Lucknow"
                description="Explore the impressive journey of SRMU's notable alumni, showcasing their achievements and contributions across diverse industries worldwide."
                pathname="/notable-alumni"
            />
            <AlumniTestimonials />
        </div>
    )
}

export default AlumniTestimonialsPage
