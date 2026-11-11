import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import DepartmentOfMechanicalEngineeringNew from "../../../../../components/academics/departmentOfMechanicalEngineeringNew/DepartmentOfMechanicalEngineeringNew";

const DepartmentOfMechanicalEngineeringNewPage: FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div>
            <SeoHead title="Department of Mechanical Engineering" pathname={pathname} />
            <DepartmentOfMechanicalEngineeringNew />
        </div>
    );
};

export default DepartmentOfMechanicalEngineeringNewPage;
