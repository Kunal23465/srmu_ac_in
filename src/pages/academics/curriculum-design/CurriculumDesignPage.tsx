import { FC } from 'react'
import CurriculumDesign from '../../../components/academics/curriculum-design/CurriculumDesign'
import SeoHead from '../../../components/seo/SeoHead'

const CurriculumDesignPage: FC = () => {
  return (
    <div>
      <SeoHead
        title="Curriculum Design | Shri Ramswaroop Memorial University, Lucknow"
        description="Shri Ramswaroop Memorial University's curriculum is designed to meet local, national, and global needs, incorporating innovative teaching methods, pedagogy, and digital integration."
        pathname="/curriculum-design"
      />
      <CurriculumDesign/>
      
      </div>
  )
}

export default CurriculumDesignPage
