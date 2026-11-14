import { FC } from "react";
import { useLocation } from "react-router-dom";
import SeoHead from "../../../../../components/seo/SeoHead";
import FacultyOfChemicalSciencesNew from "../../../../../components/academics/facultyOfChemicalSciencesNew/FacultyOfChemicalSciencesNew";

const FacultyOfChemicalSciencesNewPage: FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div>
            <SeoHead title="Faculty of Chemical Sciences" pathname={pathname} />
            <FacultyOfChemicalSciencesNew />
        </div>
    );
};

export default FacultyOfChemicalSciencesNewPage;
