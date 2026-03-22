import React from 'react'
import OutreachActivations from '../../../components/campus-life/outreach-activations/OutreachActivations'
import SeoHead from '../../../components/seo/SeoHead'

const OutreachActivationsPage:React.FC = () => {
  return (
    <div>
      <SeoHead
        title="Outreach Activations | Shri Ramswaroop Memorial University, Lucknow"
        description="The University's CSR initiatives aim to connect the institution with the local community. These activities have been an essential aspect of SRMU since its establishment."
        pathname="/outreach-activations"
      />
      <OutreachActivations />
    </div>
  )
}

export default OutreachActivationsPage
