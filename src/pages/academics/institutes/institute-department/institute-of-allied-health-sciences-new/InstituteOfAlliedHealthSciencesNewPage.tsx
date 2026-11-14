import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import InstituteOfAlliedHealthSciencesNew from "../../../../../components/academics/instituteOfAlliedHealthSciencesNew/InstituteOfAlliedHealthSciencesNew";

const InstituteOfAlliedHealthSciencesNewPage: FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div>
            <SeoHead title="Institute of Allied Health Sciences" pathname={pathname} />
            <InstituteOfAlliedHealthSciencesNew />
        </div>
    );
};

export default InstituteOfAlliedHealthSciencesNewPage;
