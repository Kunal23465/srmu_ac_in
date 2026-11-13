import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import FacultyOfMathematicalAndStatisticalSciencesNew from "../../../../../components/academics/facultyOfMathematicalAndStatisticalSciencesNew/FacultyOfMathematicalAndStatisticalSciencesNew";

const FacultyOfMathematicalAndStatisticalSciencesNewPage: FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div>
            <SeoHead title="Faculty of Mathematical and Statistical Sciences" pathname={pathname} />
            <FacultyOfMathematicalAndStatisticalSciencesNew />
        </div>
    );
};

export default FacultyOfMathematicalAndStatisticalSciencesNewPage;
