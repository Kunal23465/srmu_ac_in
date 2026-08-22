import { FC } from 'react'
import EContentCell from '../../../components/academics/e-content-cell/EContentCell'
import { Helmet } from 'react-helmet-async'

const EContentCellPage: FC = () => {
  return (
    <div>
      <Helmet>
        <title>Shri Ramswaroop Memorial University | SRMU</title>
        <meta name="description" content="Explore SRMU's E-Content Development Cell and initiatives for digital learning resources, teaching and academic support." />
      </Helmet>
      <EContentCell />
    </div>
  )
}

export default EContentCellPage