import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import FacultyOfManagementNew from "../../../../../components/academics/facultyOfManagementNew/FacultyOfManagementNew";

const FacultyOfManagementNewPage: FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div>
            <SeoHead title="Faculty of Management" pathname={pathname} />
            <FacultyOfManagementNew />
        </div>
    );
};

export default FacultyOfManagementNewPage;
