import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store";
import { hasValidProgramCategoryRoute } from "../utils/programCategoryRoute";
import PageNotFound from "./PageNotFound";
import ProgramFinderPage from "./programs/ProgramFinderPage";

const ProgramTypeItemPage: React.FC = () => {
    const { programType, item } = useParams();
    const { data } = useSelector((state: RootState) => state.programMenu);

    const isValidRoute = hasValidProgramCategoryRoute(data, programType, item);

    return isValidRoute ? <ProgramFinderPage /> : <PageNotFound />;
};

export default ProgramTypeItemPage;
