import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";

import { fetchAllProgramFinder } from "../../store/program-finder/programFinderThunk";
import { fetchProgramDiscipline } from "../../store/program-finder/discipline/disciplineThunk";
import { fetchProgramByFlag } from "../../store/program-finder/program-flag/programFlagThunk";

import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { feeStructureCustomTopFooter } from "../../data/admissions/fee-structure/fee-structue-data";
import Classes from "../../utils/styles/Global.module.css";

import ProgramFinderIntro from "../admissions/program-finder/ProgramFinderIntro";
import ProgramFilter from "../admissions/program-finder/ProgramFilter";

const ProgramFinderHome: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  const { data } = useSelector((state: RootState) => state.getProgramFinder);
  const { discipline } = useSelector((state: RootState) => state.getDiscipline);
  const { data: programFlag } = useSelector(
    (state: RootState) => state.getProgramByFlag
  );

  const [selectedProgramFlag, setSelectedProgramFlag] = useState<number | string>("");
  const [selectedDiscipline, setSelectedDiscipline] = useState<number | string>("");

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
 

  const isInitialized = useRef(false);

  const { programTypeId, disciplineId } = location.state || {};

  /* ===========================
        Initial Static APIs
     =========================== */
  useEffect(() => {
    dispatch(fetchProgramByFlag());
    dispatch(fetchProgramDiscipline());
  }, [dispatch]);

  /* ===========================
        Apply Route State
     =========================== */
  useEffect(() => {
    if (programTypeId || disciplineId) {
      setSelectedProgramFlag(programTypeId || "");
      setSelectedDiscipline(disciplineId || "");
    }
    isInitialized.current = true;
  }, [programTypeId, disciplineId]);

  /* ===========================
        Debounce Search
     =========================== */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  /* ===========================
        Fetch Discipline by Flag
     =========================== */
  useEffect(() => {
    if (selectedProgramFlag) {
      dispatch(fetchProgramDiscipline({ programFlagId: selectedProgramFlag }));
    }
  }, [dispatch, selectedProgramFlag]);

  /* ===========================
        Fetch Program List
     =========================== */
  useEffect(() => {
    if (!isInitialized.current) return;

    if (
      !selectedProgramFlag &&
      !selectedDiscipline &&
      !debouncedSearch
    ) {
      return;
    }

    dispatch(
      fetchAllProgramFinder({
        programFlagId: selectedProgramFlag || undefined,
        programDisciplineId: selectedDiscipline || undefined,
        name: debouncedSearch || undefined,
      })
    );
  }, [dispatch, selectedProgramFlag, selectedDiscipline, debouncedSearch]);

  /* ===========================
        Intro Description
     =========================== */
  const selectedProgramFlagObj = programFlag?.find(
    (pt) => pt.programTypeId == selectedProgramFlag
  );

  const selectedDisciplineObj = discipline?.find(
    (d) => d.programDisciplineId == selectedDiscipline
  );

  const introDescription =
    selectedDisciplineObj?.description ||
    selectedProgramFlagObj?.description ||
    "";


  return (
    <>
      <div className={`${Classes.container} mt-16`}>
        <div className="w-full flex items-center justify-center flex-col">
          <h1 className="text-[#023047] text-[28px] lg:text-[3.125rem] fw500">
            Program Finder
          </h1>
          <div className="w-[140px] h-[3px] bg-amber-400 mt-4 mb-4" />
        </div>

        <ProgramFilter
          data={data}
          programTypeOptions={programFlag}
          disciplineOptions={discipline}
          selectedProgramType={selectedProgramFlag}
          selectedDiscipline={selectedDiscipline}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onProgramTypeChange={setSelectedProgramFlag}
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
