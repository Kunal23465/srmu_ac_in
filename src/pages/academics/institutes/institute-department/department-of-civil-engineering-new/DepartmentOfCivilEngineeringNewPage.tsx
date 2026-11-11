import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import DepartmentOfCivilEngineeringNew from "../../../../../components/academics/departmentOfCivilEngineeringNew/DepartmentOfCivilEngineeringNew";

const DepartmentOfCivilEngineeringNewPage: FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div>
            <SeoHead title="Department of Civil Engineering" pathname={pathname} />
            <DepartmentOfCivilEngineeringNew />
        </div>
    );
};

export default DepartmentOfCivilEngineeringNewPage;
