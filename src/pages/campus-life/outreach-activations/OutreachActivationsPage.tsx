import React from 'react'
import OutreachActivations from '../../../components/campus-life/outreach-activations/OutreachActivations'
import { Helmet } from 'react-helmet-async'

const OutreachActivationsPage:React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Outreach Activations | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="The University&#039;s CSR initiatives aim to connect the institution with the local community. Situated amidst the villages of Barabanki District, Uttar Pradesh, these activities have been an essential aspect of SRMU since its establishment." />
      </Helmet>
      <OutreachActivations />
    </div>
  )
}

export default OutreachActivationsPage
