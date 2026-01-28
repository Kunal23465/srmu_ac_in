import { FC } from 'react'
import CurriculumDesign from '../../../components/academics/curriculum-design/CurriculumDesign'
import { Helmet } from 'react-helmet-async'

const CurriculumDesignPage: FC = () => {
  return (
    <div>
      <Helmet>
        <title>Curriculum Design | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="Shri Ramswaroop Memorial University&#039;s curriculum is designed to meet local, national, and global needs. It has set high standards in Education and Research, incorporating innovative teaching methods, pedagogy, and digital integration." />
      </Helmet>
      <CurriculumDesign/>
      
      </div>
  )
}

export default CurriculumDesignPage