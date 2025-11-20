import React from 'react'
import Banner from './Banner'
import MemorialCollege from './MemorialCollege'
import InnovationCulture from './InnovationCulture'
import Apply from './Apply'
import ProgramsSection from './ProgramSection'
import AlumniSlider from './NotableAlumni'
import FlickeringSection from './FlickeringSection'
import TestimonialSlider from './TestimonialSlider'
import DepartmentalVideoComponent from './DepartmentalVideoComponent'

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <MemorialCollege />
      <ProgramsSection />
      <Apply />
      <InnovationCulture />
      <FlickeringSection />
     <div className='bg-[#ecf0f9]'>
       <TestimonialSlider/>
     </div>
      <AlumniSlider />
    <DepartmentalVideoComponent />
    </div>
  )
}

export default Home
