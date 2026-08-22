import { Helmet } from "react-helmet-async"
import AcademicBank from "../../../components/academics/academic-bank/AcademicBank"

const AcademicBankOfCreditPage = () => {
  return (
    <div>
      <Helmet>
        <title>Academic Depository, NAD & ABC - Digital Records at SRMU</title>
        <meta name="description" content="Learn about NAD and ABC at SRMU for secure academic records, digital credentials and convenient document access." />
      </Helmet>
      <AcademicBank />

    </div>
  )
}

export default AcademicBankOfCreditPage