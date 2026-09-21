import { FC } from "react"
import DepartmentOfComputerScienceAndInformationSystemsNew from "../../../../../components/academics/departmentOfComputerScienceAndInformationSystemsNew/DepartmentOfComputerScienceAndInformationSystemsNew"
import SeoHead from "../../../../../components/seo/SeoHead"
import { useLocation } from "react-router-dom"

const DepartmentOfComputerScienceAndInformationSystemsNewPage: FC = () => {
  const pathname = useLocation().pathname
  return (
    <div>
      <SeoHead
        title="Department of Computer Science & Information Systems"
        pathname={pathname}
      />
      <DepartmentOfComputerScienceAndInformationSystemsNew />
    </div>
  )
}

export default DepartmentOfComputerScienceAndInformationSystemsNewPage
