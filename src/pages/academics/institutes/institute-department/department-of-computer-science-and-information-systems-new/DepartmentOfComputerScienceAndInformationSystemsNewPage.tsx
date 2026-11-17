import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import DepartmentOfComputerScienceAndInformationSystemsNew from "../../../../../components/academics/departmentOfComputerScienceAndInformationSystemsNew/DepartmentOfComputerScienceAndInformationSystemsNew";

const DepartmentOfComputerScienceAndInformationSystemsNewPage: FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div>
            <SeoHead title="Department of Computer Science and Information Systems" pathname={pathname} />
            <DepartmentOfComputerScienceAndInformationSystemsNew />
        </div>
    );
};

export default DepartmentOfComputerScienceAndInformationSystemsNewPage;
