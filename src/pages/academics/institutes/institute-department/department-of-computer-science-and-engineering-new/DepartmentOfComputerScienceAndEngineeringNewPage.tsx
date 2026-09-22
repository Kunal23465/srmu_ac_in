import { FC } from "react"
import SeoHead from "../../../../../components/seo/SeoHead"
import { useLocation } from "react-router-dom"
import DepartmentOfComputerScienceAndEngineeringNew from "../../../../../components/academics/departmentOfComputerScienceAndEngineeringNew/DepartmentOfComputerScienceAndEngineeringNew"

const DepartmentOfComputerScienceAndEngineeringNewPage: FC = () => {
  const pathname = useLocation().pathname
  return (
    <div>
      <SeoHead
        title="Department of Computer Science & Information Systems"
        pathname={pathname}
      />
      <DepartmentOfComputerScienceAndEngineeringNew />
    </div>
  )
}

export default DepartmentOfComputerScienceAndEngineeringNewPage
