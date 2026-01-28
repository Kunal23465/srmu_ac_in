import { FC } from 'react'
import EContentCell from '../../../components/academics/e-content-cell/EContentCell'
import { Helmet } from 'react-helmet-async'

const EContentCellPage: FC = () => {
  return (
    <div>
      <Helmet>
        <title>Shri Ramswaroop Memorial University | SRMU</title>
        <meta name="description" content="Shri Ramswaroop Memorial University is located in Lucknow-Deva Road, Barabanki, Uttar Pradesh, India. SRMU takes pride in its excellent faculty hailing from leading central universities and premier institutes like IIT(s) and NIT(s) etc." />
      </Helmet>
      <EContentCell />
    </div>
  )
}

export default EContentCellPage