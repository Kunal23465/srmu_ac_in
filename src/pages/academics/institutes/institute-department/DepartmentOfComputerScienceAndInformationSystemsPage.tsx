import { FC } from "react"
import DepartmentOfComputerScienceAndInformationSystems from "../../../../components/academics/departmentOfComputerScienceAndInformationSystems/DepartmentOfComputerScienceAndInformationSystems"
import SeoHead from "../../../../components/seo/SeoHead"
import { useLocation } from "react-router-dom"

const DepartmentOfComputerScienceAndInformationSystemsPage: FC = () => {
  const pathname = useLocation().pathname
  return (
    <div>
      <SeoHead
        title="Department of Computer Science & Information Systems"
        // description="Shri Ramswaroop Memorial University (SRMU), Lucknow-Dewa Road, Uttar Pradesh (U.P.), is one of India’s best private university that offers various undergraduate and postgraduate courses like B.Tech, BCA, BBA, B.Com, Law, MBA, M.Tech, Pharmacy, Biotechnology, Polytechnic, Agriculture and MCA."
        pathname={pathname}
      />
      <DepartmentOfComputerScienceAndInformationSystems />
    </div>
  )
}

export default DepartmentOfComputerScienceAndInformationSystemsPage