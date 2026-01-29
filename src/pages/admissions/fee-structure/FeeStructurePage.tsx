import React from 'react'
import FeeStructure from '../../../components/admissions/fee-structure/FeeStructure'
import { Helmet } from 'react-helmet-async'

const FeeStructurePage:React.FC = () => {
  return (
    <>
    <Helmet>
       <title>Fee Structure UG, PG, Integrated &amp; Diploma Programs | Shri Ramswaroop Memorial University, Lucknow</title>
  <meta name="description" content="The university&#039;s fee structure has been designed to ensure that all students have equal chances, including meeting the unique educational requirements of those with limitations." />
    </Helmet>
      <FeeStructure />
    </>

  )
}

export default FeeStructurePage