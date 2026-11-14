import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import SRMUPolytechnicNew from "../../../../../components/academics/srmuPolytechnicNew/SRMUPolytechnicNew";

const SRMUPolytechnicNewPage: FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div>
            <SeoHead title="SRMU Polytechnic" pathname={pathname} />
            <SRMUPolytechnicNew />
        </div>
    );
};

export default SRMUPolytechnicNewPage;
