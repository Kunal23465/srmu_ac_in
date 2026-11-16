import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import InstituteOfTechnologyNew from "../../../../../components/academics/instituteOfTechnologyNew/InstituteOfTechnologyNew";

const InstituteOfTechnologyNewPage: FC = () => {
    const pathname = useLocation().pathname;

    return (
        <>
            <SeoHead
                title="Institute of Technology at SRMU | Engineering Education"
                description="Explore engineering departments, practical learning, industry exposure, and research at the Institute of Technology at SRMU, Lucknow."
                pathname={pathname}
            />
            <InstituteOfTechnologyNew />
        </>
    );
};

export default InstituteOfTechnologyNewPage;
