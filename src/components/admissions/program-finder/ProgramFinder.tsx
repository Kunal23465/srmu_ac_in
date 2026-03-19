import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchAllProgramFinder } from "../../../store/program-finder/programFinderThunk";
import { fetchProgramType } from "../../../store/program-finder/program-type/programTypeThunk";
import { fetchProgramDiscipline } from "../../../store/program-finder/discipline/disciplineThunk";
import ProgramFilter from "./ProgramFilter";
import ProgramFinderIntro from "./ProgramFinderIntro";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { feeStructureCustomTopFooter } from "../../../data/admissions/fee-structure/fee-structue-data";
import Classes from "../../../utils/styles/Global.module.css";
import { useLocation } from "react-router-dom";

const ProgramFinder: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const { programType:programTypeSlug, item } = useParams();
  const { data } = useSelector((state: RootState) => state.getProgramFinder);
  const { programType } = useSelector((state: RootState) => state.getProgramType);
  const { discipline } = useSelector((state: RootState) => state.getDiscipline);
  const [selectedProgramType, setSelectedProgramType] = useState<string>("");
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("");
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const disciplineIdFromState = pathParts[1];
  const programTypeIdFromState = pathParts[2];
  console.log(disciplineIdFromState, programTypeIdFromState, "location");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const selectedProgramTypeObj = programType?.find((pt) => pt.programTypeId == selectedProgramType);

  const selectedDisciplineObj = discipline?.find((d) => d.programDisciplineId == selectedDiscipline);

  const introDescription = selectedDisciplineObj?.description || selectedProgramTypeObj?.description || "";

  // const { programTypeId: programTypeIdFromState, disciplineId: disciplineIdFromState } = location.state || {};

  /* ===========================
           Debounce Search
     =========================== */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [searchTerm]);

  /* ===========================
      Fetch Program List
     =========================== */
  useEffect(() => {
    if (!selectedProgramType && !selectedDiscipline && !debouncedSearch && data.length > 0) {
      return;
    }

    dispatch(
      fetchAllProgramFinder({
        programTypeSlug: selectedProgramType || undefined,
        programDisciplineSlug: selectedDiscipline || undefined,
        name: debouncedSearch || undefined,
      }),
    );
  }, [dispatch, selectedProgramType, selectedDiscipline, debouncedSearch]);

  /* ===========================
      Initial Load
     =========================== */
  useEffect(() => {
    if (programType.length === 0) {
      dispatch(fetchProgramType());
    }

    if (discipline.length === 0) {
      dispatch(fetchProgramDiscipline());
    }
  }, [discipline.length, dispatch, programType.length]);

  /* ===========================
      Refetch discipline
     =========================== */
  useEffect(() => {
    if (selectedProgramType) {
      dispatch(fetchProgramDiscipline({ programTypeSlug: selectedProgramType }));
    }
  }, [dispatch, selectedProgramType]);

  /* ===========================
      From Route State
     =========================== */
  useEffect(() => {
    if (programTypeIdFromState || disciplineIdFromState) {
      if (programTypeIdFromState) setSelectedProgramType(programTypeIdFromState);
      if (disciplineIdFromState) setSelectedDiscipline(disciplineIdFromState);
    }
  }, [programTypeIdFromState, disciplineIdFromState]);
  return (
    <>
      <div className={`${Classes.container} mt-16`}>
        <div className="w-full flex items-center justify-center flex-col">
          <h1 className="text-[#023047] text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500">Program Finder</h1>
          <div className="w-[140px] h-[3px] bg-amber-400 mt-4 mb-4" />
        </div>
        <ProgramFilter
          data={data}
          programTypeOptions={programType}
          disciplineOptions={discipline}
          selectedProgramType={selectedProgramType}
          selectedDiscipline={selectedDiscipline}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onProgramTypeChange={setSelectedProgramType}
          onDisciplineChange={setSelectedDiscipline}
        />

        <ProgramFinderIntro description={introDescription} />
      </div>

      <CustomTopFooter data={feeStructureCustomTopFooter} />
    </>
  );
};

export default ProgramFinder;
