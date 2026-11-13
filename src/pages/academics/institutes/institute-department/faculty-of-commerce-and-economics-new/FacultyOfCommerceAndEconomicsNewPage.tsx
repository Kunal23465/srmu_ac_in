import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import FacultyOfCommerceAndEconomicsNew from "../../../../../components/academics/facultyOfCommerceAndEconomicsNew/FacultyOfCommerceAndEconomicsNew";

const FacultyOfCommerceAndEconomicsNewPage: FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div>
            <SeoHead title="Faculty of Commerce and Economics" pathname={pathname} />
            <FacultyOfCommerceAndEconomicsNew />
        </div>
    );
};

export default FacultyOfCommerceAndEconomicsNewPage;
