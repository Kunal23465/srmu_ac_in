import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import InstituteOfPharmacyNew from "../../../../../components/academics/instituteOfPharmacyNew/InstituteOfPharmacyNew";

const InstituteOfPharmacyNewPage: FC = () => {
    const pathname = useLocation().pathname;
    return (
        <div>
            <SeoHead title="Institute of Pharmacy" pathname={pathname} />
            <InstituteOfPharmacyNew />
        </div>
    );
};

export default InstituteOfPharmacyNewPage;
