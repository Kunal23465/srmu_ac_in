import React from 'react'
import ContactUs from '../../components/contact-us/ContactUs'
import SeoHead from '../../components/seo/SeoHead'

const ContactUsPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Contact Us | Shri Ramswaroop Memorial University, Lucknow"
        description="Prospective students, current enrollees, and other stakeholders can leverage this platform to connect directly with the university's knowledgeable and responsive staff, fostering effective communication and support."
        pathname="/contact-us"
      />
      <ContactUs />
    </>
  )
}

export default ContactUsPage
