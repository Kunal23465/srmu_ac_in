import React from 'react'
import FeeStructure from '../../../components/admissions/fee-structure/FeeStructure'
import SeoHead from '../../../components/seo/SeoHead'

const FeeStructurePage:React.FC = () => {
  return (
    <>
    <SeoHead
      title="Fee Structure UG, PG, Integrated & Diploma Programs | Shri Ramswaroop Memorial University, Lucknow"
      description="The university's fee structure has been designed to ensure that all students have equal chances, including meeting the unique educational requirements of those with limitations."
      pathname="/fee-structure"
    />
      <FeeStructure />
    </>

  )
}

export default FeeStructurePage
