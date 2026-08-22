import { FC } from "react"
import DepartmentOfComputerScienceAndEngineering from "../../../../components/academics/departmentOfComputerScienceAndEngineering/DepartmentOfComputerScienceAndEngineering"
import { useLocation } from "react-router-dom"
import SeoHead from "../../../../components/seo/SeoHead"

const DepartmentOfComputerScienceAndEngineeringPage: FC = () => {
  const pathname = useLocation().pathname
  return (
    <div>
      <SeoHead
        title="Department of Computer Science & Engineering"
        // description="Shri Ramswaroop Memorial University (SRMU), Lucknow-Dewa Road, Uttar Pradesh (U.P.), is one of India’s best private university that offers various undergraduate and postgraduate courses like B.Tech, BCA, BBA, B.Com, Law, MBA, M.Tech, Pharmacy, Biotechnology, Polytechnic, Agriculture and MCA."
        pathname={pathname}
      />
      <DepartmentOfComputerScienceAndEngineering />
    </div>
  )
}

export default DepartmentOfComputerScienceAndEngineeringPage