import RtiComponent from '../../components/rti/RtiComponent'
import SeoHead from '../../components/seo/SeoHead'

const RtiPage = () => {
  return (
    <div>
      <SeoHead
        title="RTI | Shri Ramswaroop Memorial University, Lucknow"
        description="Access Right to Information (RTI) details, university disclosures, and related contact information for Shri Ramswaroop Memorial University, Lucknow."
        pathname="/rti"
      />
        <RtiComponent/>
    </div>
  )
}

export default RtiPage
