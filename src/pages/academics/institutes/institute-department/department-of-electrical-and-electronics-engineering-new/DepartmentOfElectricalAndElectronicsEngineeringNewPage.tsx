import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import DepartmentOfElectricalAndElectronicsEngineeringNew from "../../../../../components/academics/departmentOfElectricalAndElectronicsEngineeringNew/DepartmentOfElectricalAndElectronicsEngineeringNew";

const DepartmentOfElectricalAndElectronicsEngineeringNewPage: FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div>
            <SeoHead title="Department of Electrical and Electronics Engineering" pathname={pathname} />
            <DepartmentOfElectricalAndElectronicsEngineeringNew />
        </div>
    );
};

export default DepartmentOfElectricalAndElectronicsEngineeringNewPage;
