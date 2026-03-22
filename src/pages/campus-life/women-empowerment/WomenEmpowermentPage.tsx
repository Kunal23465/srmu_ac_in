import WomenEmpowermentComp from "../../../components/campus-life/women-empowerment/WomenEmpowermentComp"
import SeoHead from "../../../components/seo/SeoHead"

const WomenEmpowermentPage = () => {
  return (
    <div>
      <SeoHead
        title="Women Empowerment | Shri Ramswaroop Memorial University, Lucknow"
        description="SRMU emphasizes distinctive initiatives for women's empowerment that involve, educate, and empower both students and faculty, fostering a commitment to gender equality within the institution."
        pathname="/women-empowerment"
      />
        <WomenEmpowermentComp/>
    </div>
  )
}

export default WomenEmpowermentPage
