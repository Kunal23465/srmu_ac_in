import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";

import { fetchAllProgramFinder } from "../../store/program-finder/programFinderThunk";
import { fetchProgramDiscipline, fetchProgramDisciplines } from "../../store/program-finder/discipline/disciplineThunk";
import { fetchProgramFlags } from "../../store/program-finder/program-flag/programFlagThunk";

import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { feeStructureCustomTopFooter } from "../../data/admissions/fee-structure/fee-structue-data";
import Classes from "../../utils/styles/Global.module.css";

import ProgramFinderIntro from "../admissions/program-finder/ProgramFinderIntro";
import ProgramFilter from "../admissions/program-finder/ProgramFilter";
import { resolveTopLevelProgramRoute } from "../../utils/programCategoryRoute";

const ProgramFinderHome: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { programType, item } = useParams();

  const { data } = useSelector((state: RootState) => state.getProgramFinder);
  const { discipline } = useSelector((state: RootState) => state.getDiscipline);
  const { data: programFlag } = useSelector((state: RootState) => state.getProgramByFlag);

  const [selectedProgramFlag, setSelectedProgramFlag] = useState<string>("");
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("");

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const isInitialized = useRef(false);

  /* ===========================
        Initial Static APIs
     =========================== */
  useEffect(() => {
    dispatch(fetchProgramFlags());

    if (!item) {
      const topLevelRoute = resolveTopLevelProgramRoute(programType || "");

      if (topLevelRoute?.kind !== "programFlag") {
        dispatch(fetchProgramDisciplines());
      }
    }
  }, [dispatch, item, programType]);

  /* ===========================
        Apply Route Params (Slug)
     =========================== */
  useEffect(() => {
    if (programType || item) {
      if (item) {
        setSelectedProgramFlag(programType || "");
        setSelectedDiscipline(item || "");
      } else {
        const topLevelRoute = resolveTopLevelProgramRoute(programType || "");
        if (topLevelRoute?.kind === "programFlag") {
          setSelectedProgramFlag(topLevelRoute.slug);
          setSelectedDiscipline("");
        } else if (topLevelRoute?.kind === "discipline") {
          setSelectedProgramFlag("");
          setSelectedDiscipline(topLevelRoute.slug);
        } else {
          setSelectedProgramFlag(programType || "");
          setSelectedDiscipline("");
        }
      }
    }
    isInitialized.current = true;
  }, [programType, item]);

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
        Fetch Discipline by Flag (Slug)
     =========================== */
  useEffect(() => {
    if (selectedProgramFlag) {
      dispatch(
        fetchProgramDiscipline({
          programFlagSlug: selectedProgramFlag,
        }),
      );
    }
  }, [dispatch, selectedProgramFlag]);

  /* ===========================
        Fetch Program List (Slug based)
     =========================== */
  useEffect(() => {
    if (!isInitialized.current) return;

    if (!selectedProgramFlag && !selectedDiscipline && !debouncedSearch) {
      return;
    }

    dispatch(
      fetchAllProgramFinder({
        programFlagSlug: selectedProgramFlag || undefined,
        programDisciplineSlug: selectedDiscipline || undefined,
        name: debouncedSearch || undefined,
      }),
    );
  }, [dispatch, selectedProgramFlag, selectedDiscipline, debouncedSearch]);

  /* ===========================
        Intro Description (Slug match)
     =========================== */
  const selectedProgramFlagObj = programFlag?.find((pt) => pt.slug === selectedProgramFlag);

  const selectedDisciplineObj = discipline?.find((d) => d.slug === selectedDiscipline);

  const introDescription = selectedDisciplineObj?.description || selectedProgramFlagObj?.description || "";


  return (
    <>
      <div className={`${Classes.container} mt-16`}>
        <div className="w-full flex items-center justify-center flex-col">
          <h1 className="text-[#023047] text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500">Program Finder</h1>
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
