import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import InstituteOfEducationAndResearchNew from "../../../../../components/academics/instituteOfEducationAndResearchNew/InstituteOfEducationAndResearchNew";

const InstituteOfEducationAndResearchNewPage: FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div>
            <SeoHead title="Institute of Education and Research" pathname={pathname} />
            <InstituteOfEducationAndResearchNew />
        </div>
    );
};

export default InstituteOfEducationAndResearchNewPage;
