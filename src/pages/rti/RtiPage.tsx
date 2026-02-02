import { Helmet } from 'react-helmet-async'
import RtiComponent from '../../components/rti/RtiComponent'

const RtiPage = () => {
  return (
    <div>
      <Helmet>
        <title>RTI | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="RMU Lucknow RTI" />
      </Helmet>
        <RtiComponent/>
    </div>
  )
}

export default RtiPage