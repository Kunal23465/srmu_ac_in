import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import { fetchAllProgramFinder } from "../../store/program-finder/programFinderThunk";
// import { fetchProgramType } from "../../store/program-finder/program-type/programTypeThunk";
import { fetchProgramDiscipline } from "../../store/program-finder/discipline/disciplineThunk";

import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { feeStructureCustomTopFooter } from "../../data/admissions/fee-structure/fee-structue-data";
import Classes from "../../utils/styles/Global.module.css";
import ProgramFinderIntro from "../admissions/program-finder/ProgramFinderIntro";
import ProgramFilter from "../admissions/program-finder/ProgramFilter";
import { fetchProgramByFlag } from "../../store/program-finder/program-flag/programFlagThunk";

const ProgramFinderHome: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const { data } = useSelector((state: RootState) => state.getProgramFinder);
  const { programType } = useSelector((state: RootState) => state.getProgramType);
  const { discipline } = useSelector((state: RootState) => state.getDiscipline);
  const { data: programFlag } = useSelector((state: RootState) => state.getProgramByFlag);
  const [selectedProgramType, setSelectedProgramType] = useState<number | string>("");
  const [selectedDiscipline, setSelectedDiscipline] = useState<number | string>("");
  // Search states
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const selectedProgramTypeObj = programType?.find((pt) => pt.programTypeId == selectedProgramType);

  const selectedDisciplineObj = discipline?.find((d) => d.programDisciplineId == selectedDiscipline);

  const introDescription = selectedDisciplineObj?.description || selectedProgramTypeObj?.description || "";

  const { programTypeId: programTypeIdFromState, disciplineId: disciplineIdFromState } = location.state || {};

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
    dispatch(
      fetchAllProgramFinder({
        programTypeId: selectedProgramType || undefined,
        programDisciplineId: selectedDiscipline || undefined,
        name: debouncedSearch || undefined,
      })
    );
  }, [dispatch, selectedProgramType, selectedDiscipline, debouncedSearch]);

  /* ===========================
      Initial Load
     =========================== */
  useEffect(() => {
    dispatch(fetchProgramByFlag());
    dispatch(fetchProgramDiscipline());
  }, [dispatch]);

  /* ===========================
      Refetch discipline
     =========================== */
  useEffect(() => {
    if (selectedProgramType) {
      dispatch(fetchProgramDiscipline({ programTypeId: selectedProgramType }));
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

  console.log("programFlag", programFlag);
  return (
    <>
      <div className={`${Classes.container} mt-16`}>
        <div className="w-full flex items-center justify-center flex-col">
          <h1 className="text-[#023047] text-[28px] lg:text-[3.125rem] fw500">Program Finder</h1>
          <div className="w-[140px] h-[3px] bg-amber-400 mt-4 mb-4" />
        </div>

        <ProgramFilter
          data={data}
          programTypeOptions={programFlag}
          disciplineOptions={discipline}
          selectedProgramType={selectedProgramType}
          selectedDiscipline={selectedDiscipline}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onProgramTypeChange={setSelectedProgramType}
          onDisciplineChange={setSelectedDiscipline}
          isTypeFlag={true}
        />

        <ProgramFinderIntro description={introDescription} />
      </div>

      <CustomTopFooter data={feeStructureCustomTopFooter} />
    </>
  );
};

export default ProgramFinderHome;
