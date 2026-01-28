import { Helmet } from "react-helmet-async"
import AcademicBank from "../../../components/academics/academic-bank/AcademicBank"

const AcademicBankOfCreditPage = () => {
  return (
    <div>
      <Helmet>
        <title>Academic Depository NAD and ABC | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="Academic Bank of Credits&quot; (ABC) system for fulfilling their thirst for knowledge by providing academic flexibility to pick and modify their educational paths,link diverse disciplines, and assist them in acquiring the proper foundations and building blocks for their ambitions." />
      </Helmet>
      <AcademicBank />

    </div>
  )
}

export default AcademicBankOfCreditPage