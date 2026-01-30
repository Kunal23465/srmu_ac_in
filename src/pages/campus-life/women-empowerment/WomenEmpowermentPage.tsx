import { Helmet } from "react-helmet-async"
import WomenEmpowermentComp from "../../../components/campus-life/women-empowerment/WomenEmpowermentComp"

const WomenEmpowermentPage = () => {
  return (
    <div>
      <Helmet>
        <title>Women Empowerment | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="SRMU emphasizes distinctive initiatives for women&#039;s empowerment that involve, educate, and empower both students and faculty, fostering a commitment to gender equality within the institution." />
      </Helmet>
        <WomenEmpowermentComp/>
    </div>
  )
}

export default WomenEmpowermentPage