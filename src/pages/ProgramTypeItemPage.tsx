import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store";
import PageNotFound from "./PageNotFound";
import ProgramFinderPage from "./programs/ProgramFinderPage";

const slugify = (value = "") =>
    value
        .toLowerCase()
        .trim()
        .replace(/[()]/g, "")
        .replace(/&/g, "and")
        .replace(/\./g, "-")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

const ProgramTypeItemPage: React.FC = () => {
    const { programType, item } = useParams();
    const { data } = useSelector((state: RootState) => state.programMenu);

    const isValidRoute = data.some((programFlag: any) => {
        if (slugify(programFlag?.programFlagName || "") !== (programType || "").toLowerCase()) {
            return false;
        }

        return (programFlag?.disciplines || []).some(
            (discipline: any) => slugify(discipline?.disciplineName || "") === (item || "").toLowerCase()
        );
    });

    return isValidRoute ? <ProgramFinderPage /> : <PageNotFound />;
};

export default ProgramTypeItemPage;
