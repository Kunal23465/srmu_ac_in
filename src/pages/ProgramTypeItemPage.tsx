import React from "react";
import ProgramFinderPage from "./programs/ProgramFinderPage";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";

const validPrograms = [
    "after-class-10th",
    "after-class-12th",
    "industry-honors-programs",
    "after-polytechnic",
    "after-graduation",
    "after-post-graduation",
];

const ProgramTypeItemPage: React.FC = () => {
    const { type } = useParams();

    const isValid = type && validPrograms.includes(type);

    return (
        <div className="fixed inset-0 z-[9999] bg-white overflow-auto">
            {!isValid ? <PageNotFound /> : <ProgramFinderPage />}
        </div>
    );
};

export default ProgramTypeItemPage;