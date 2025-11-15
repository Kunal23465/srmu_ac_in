import React from 'react'
import Banner from './Banner'
import MemorialCollege from './MemorialCollege'
import InnovationCulture from './InnovationCulture'
import Apply from './Apply'

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <MemorialCollege />
      <Apply />
      <InnovationCulture />
    </div>
  )
}

export default Home
