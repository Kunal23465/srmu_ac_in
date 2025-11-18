import React from 'react'
import Banner from './Banner'
import MemorialCollege from './MemorialCollege'
import InnovationCulture from './InnovationCulture'
import Apply from './Apply'
import ProgramsSection from './ProgramSection'

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <MemorialCollege />
      <ProgramsSection />
      <Apply />
      <InnovationCulture />

    </div>
  )
}

export default Home
