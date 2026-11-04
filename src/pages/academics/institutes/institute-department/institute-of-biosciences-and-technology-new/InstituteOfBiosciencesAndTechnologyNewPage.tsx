import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import InstituteOfBiosciencesAndTechnologyNew from "../../../../../components/academics/instituteOfBiosciencesAndTechnologyNew/InstituteOfBiosciencesAndTechnologyNew";

const InstituteOfBiosciencesAndTechnologyNewPage: FC = () => {
    const pathname = useLocation().pathname;
    return (
        <div>
            <SeoHead title="Institute of Biosciences and Technology" pathname={pathname} />
            <InstituteOfBiosciencesAndTechnologyNew />
        </div>
    );
};

export default InstituteOfBiosciencesAndTechnologyNewPage;
