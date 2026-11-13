import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import InstituteOfAgriculturalSciencesAndTechnologyNew from "../../../../../components/academics/instituteOfAgriculturalSciencesAndTechnologyNew/InstituteOfAgriculturalSciencesAndTechnologyNew";

const InstituteOfAgriculturalSciencesAndTechnologyNewPage: FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div>
            <SeoHead title="Institute of Agricultural Sciences and Technology" pathname={pathname} />
            <InstituteOfAgriculturalSciencesAndTechnologyNew />
        </div>
    );
};

export default InstituteOfAgriculturalSciencesAndTechnologyNewPage;
