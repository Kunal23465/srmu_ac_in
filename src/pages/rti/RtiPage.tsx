import RtiComponent from '../../components/rti/RtiComponent'
import SeoHead from '../../components/seo/SeoHead'

const RtiPage = () => {
  return (
    <div>
      <SeoHead
        title="RTI at SRMU | Right to Information, Rules & Guidelines"
        description="Access Right to Information (RTI) details, university disclosures, and related contact information for Shri Ramswaroop Memorial University, Lucknow."
        pathname="/rti"
      />
      <RtiComponent />
    </div>
  )
}

export default RtiPage
