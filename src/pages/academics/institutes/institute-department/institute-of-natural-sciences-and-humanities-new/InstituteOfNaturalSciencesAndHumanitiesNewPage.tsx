import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import InstituteOfNaturalSciencesAndHumanitiesNew from "../../../../../components/academics/instituteOfNaturalSciencesAndHumanitiesNew/InstituteOfNaturalSciencesAndHumanitiesNew";

const InstituteOfNaturalSciencesAndHumanitiesNewPage: FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div>
            <SeoHead title="Institute of Natural Sciences and Humanities" pathname={pathname} />
            <InstituteOfNaturalSciencesAndHumanitiesNew />
        </div>
    );
};

export default InstituteOfNaturalSciencesAndHumanitiesNewPage;
