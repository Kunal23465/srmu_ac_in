import React from 'react'
import ContactUs from '../../components/contact-us/ContactUs'
import { Helmet } from 'react-helmet-async'

const ContactUsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="Prospective students, current enrollees, and other stakeholders can leverage this platform to connect directly with the university&#039;s knowledgeable and responsive staff, fostering effective communication and support." />
      </Helmet>
      <ContactUs />
    </>
  )
}

export default ContactUsPage
