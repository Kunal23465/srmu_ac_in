import React from 'react'
import CareerForm from '../../components/home/career-form/CareerForm'
import { Helmet } from 'react-helmet-async'

const CareerFormPage: React.FC = () => {
  return (
    <>
    <Helmet>
        <title>Career Form | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="Employment opportunities at Shri Ramswaroop Memorial University (SRMU) encompass a diverse range of roles spanning academic, administrative, and support functions." />
    </Helmet>
      <CareerForm />
    </>
  )
}

export default CareerFormPage