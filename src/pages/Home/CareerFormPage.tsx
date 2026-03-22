import React from 'react'
import CareerForm from '../../components/home/career-form/CareerForm'
import SeoHead from '../../components/seo/SeoHead'

const CareerFormPage: React.FC = () => {
  return (
    <>
    <SeoHead
        title="Career Form | Shri Ramswaroop Memorial University, Lucknow"
        description="Employment opportunities at Shri Ramswaroop Memorial University (SRMU) encompass a diverse range of roles spanning academic, administrative, and support functions."
        pathname="/career-form"
    />
      <CareerForm />
    </>
  )
}

export default CareerFormPage
