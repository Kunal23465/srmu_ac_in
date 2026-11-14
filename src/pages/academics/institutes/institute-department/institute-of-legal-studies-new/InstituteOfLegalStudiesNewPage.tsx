import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import InstituteOfLegalStudiesNew from "../../../../../components/academics/instituteOfLegalStudiesNew/InstituteOfLegalStudiesNew";

const InstituteOfLegalStudiesNewPage: FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div>
            <SeoHead title="Institute of Legal Studies" pathname={pathname} />
            <InstituteOfLegalStudiesNew />
        </div>
    );
};

export default InstituteOfLegalStudiesNewPage;
