import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import InstituteOfMediaStudiesNew from "../../../../../components/academics/instituteOfMediaStudiesNew/InstituteOfMediaStudiesNew";

const InstituteOfMediaStudiesNewPage: FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div>
            <SeoHead title="Institute of Media Studies" pathname={pathname} />
            <InstituteOfMediaStudiesNew />
        </div>
    );
};

export default InstituteOfMediaStudiesNewPage;
