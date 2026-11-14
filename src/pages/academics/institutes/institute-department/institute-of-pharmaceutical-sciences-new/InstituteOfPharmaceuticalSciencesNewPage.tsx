import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import InstituteOfPharmaceuticalSciencesNew from "../../../../../components/academics/instituteOfPharmaceuticalSciencesNew/InstituteOfPharmaceuticalSciencesNew";

const InstituteOfPharmaceuticalSciencesNewPage: FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div>
            <SeoHead title="Institute of Pharmaceutical Sciences" pathname={pathname} />
            <InstituteOfPharmaceuticalSciencesNew />
        </div>
    );
};

export default InstituteOfPharmaceuticalSciencesNewPage;
