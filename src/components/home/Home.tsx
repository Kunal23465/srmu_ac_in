import React from 'react'
import Banner from './Banner'
import MemorialCollege from './MemorialCollege'
import InnovationCulture from './InnovationCulture'
import Apply from './Apply'
import ProgramsSection from './ProgramSection'
import Placements from './Placements'
import MobilePlacements from './MobilePlacements'
import Events from './Events'

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <MemorialCollege />
      <ProgramsSection />
      <Apply />
      <InnovationCulture />
      <Events />
      <div className="hidden sm:block">
        <Placements />
      </div>
      <div className="sm:hidden">
        <MobilePlacements />
      </div>

    </div>
  )
}

export default Home
