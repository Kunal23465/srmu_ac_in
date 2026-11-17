import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import FacultyOfBiotechnologyNew from "../../../../../components/academics/facultyOfBiotechnologyNew/FacultyOfBiotechnologyNew";

const FacultyOfBiotechnologyNewPage: FC = () => {
    const pathname = useLocation().pathname;
    return (
        <div>
            <SeoHead title="Faculty of Biotechnology" pathname={pathname} />
            <FacultyOfBiotechnologyNew />
        </div>
    );
};

export default FacultyOfBiotechnologyNewPage;
