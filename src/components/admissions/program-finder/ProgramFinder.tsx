import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchAllProgramFinder } from "../../../store/program-finder/programFinderThunk";
import { fetchProgramType } from "../../../store/program-finder/program-type/programTypeThunk";
import { fetchProgramDiscipline, fetchProgramDisciplines } from "../../../store/program-finder/discipline/disciplineThunk";
import ProgramFilter from "./ProgramFilter";
import ProgramFinderIntro from "./ProgramFinderIntro";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { feeStructureCustomTopFooter } from "../../../data/admissions/fee-structure/fee-structue-data";
import Classes from "../../../utils/styles/Global.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchProgramTypeIntroByUrl } from "../../../store/program-type-intro/ProgramTypeIntroThunk";
import { Helmet } from "react-helmet-async";

const ProgramFinder: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: programByIntroData } = useSelector((state: RootState) => state.getProgramByIntro);
  const { data } = useSelector((state: RootState) => state.getProgramFinder);
  const { programType } = useSelector((state: RootState) => state.getProgramType);
  const { discipline } = useSelector((state: RootState) => state.getDiscipline);

  const location = useLocation();
  const navigate = useNavigate();

  const pathParts = location.pathname.split("/").filter(Boolean);
  const isDynamicProgramFinderRoute = pathParts.length === 2 && pathParts[0] !== "program-finder";
  const disciplineSlugFromRoute = isDynamicProgramFinderRoute ? pathParts[0] : "";
  const programTypeSlugFromRoute = isDynamicProgramFinderRoute ? pathParts[1] : "";

  const [selectedProgramType, setSelectedProgramType] = useState<string>(programTypeSlugFromRoute);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>(disciplineSlugFromRoute);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // ✅ Controls whether URL sync is allowed
  // False during programType change until discipline is resolved
  const [isDisciplineReady, setIsDisciplineReady] = useState(
    // On initial load with route slugs, discipline is already known — allow URL sync immediately
    !!disciplineSlugFromRoute
  );

  // Tracks if programType change was user-initiated (not initial route load)
  const isUserInitiatedRef = useRef(false);

  const selectedProgramTypeObj = programType?.find((pt) => pt.slug === selectedProgramType);
  const selectedDisciplineObj = discipline?.find((d) => d.slug === selectedDiscipline);
  const introDescription = selectedDisciplineObj?.description || selectedProgramTypeObj?.description || "";

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
      Fetch Program List
     =========================== */
  useEffect(() => {
    const trimmedSearch = debouncedSearch.trim();
    const params = {
      ...(selectedProgramType ? { programTypeSlug: selectedProgramType } : {}),
      ...(selectedDiscipline ? { programDisciplineSlug: selectedDiscipline } : {}),
      ...(trimmedSearch ? { name: trimmedSearch } : {}),
    };

    dispatch(fetchAllProgramFinder(Object.keys(params).length > 0 ? params : undefined));
  }, [debouncedSearch, dispatch, selectedDiscipline, selectedProgramType]);

  /* ===========================
      Initial Load - Program Types
     =========================== */
  useEffect(() => {
    if (programType.length === 0) {
      dispatch(fetchProgramType());
    }
  }, [dispatch, programType.length]);

  /* ===========================
      Fetch disciplines based on selectedProgramType

      Scenarios:
      1. Initial page load with URL slugs  → restore discipline from URL
      2. User changes programType          → auto-select first discipline
                                           → isDisciplineReady = false until resolved
     =========================== */
  useEffect(() => {
    if (selectedProgramType) {
      dispatch(fetchProgramDiscipline({ programTypeSlug: selectedProgramType }))
        .unwrap()
        .then((disciplines) => {
          if (disciplines && disciplines.length > 0) {
            if (isUserInitiatedRef.current) {
              // ✅ User changed programType → auto-select first discipline
              setSelectedDiscipline(disciplines[0].slug);
              isUserInitiatedRef.current = false;
            } else {
              // ✅ Initial route load → restore discipline from URL if valid
              const routeDisciplineExists = disciplines.some(
                (d) => d.slug === disciplineSlugFromRoute
              );
              setSelectedDiscipline(
                routeDisciplineExists ? disciplineSlugFromRoute : disciplines[0].slug
              );
            }
          } else {
            setSelectedDiscipline("");
          }

          // ✅ Discipline is now resolved — allow URL sync to proceed
          setIsDisciplineReady(true);
        })
        .catch((error) => {
          console.error("Error fetching disciplines:", error);
          setSelectedDiscipline("");
          setIsDisciplineReady(true); // Unblock even on error
        });
    } else {
      dispatch(fetchProgramDisciplines());
      setSelectedDiscipline("");
      setIsDisciplineReady(false);
    }
  }, [selectedProgramType, dispatch]);
  // ⚠️ disciplineSlugFromRoute intentionally excluded from deps

  /* ===========================
      Sync URL — only AFTER discipline is resolved
      Prevents 404 flash during async discipline fetch
     =========================== */
  useEffect(() => {
    if (!isDisciplineReady || !selectedProgramType) return;

    const path = selectedDiscipline
      ? `/${selectedDiscipline}/${selectedProgramType}`
      : `/program-finder/${selectedProgramType}`;

    navigate(path, { replace: true });
  }, [selectedDiscipline, selectedProgramType, isDisciplineReady, navigate]);

  /* ===========================
      Handle ProgramType Change (user action)
     =========================== */
  const handleProgramTypeChange = (newProgramType: string) => {
    // ✅ Block URL sync immediately — wait for discipline fetch to complete
    setIsDisciplineReady(false);
    isUserInitiatedRef.current = true;
    setSelectedProgramType(newProgramType);
  };

  /* ===========================
      Handle Discipline Change (user action)
     =========================== */
  const handleDisciplineChange = (newDiscipline: string) => {
    isUserInitiatedRef.current = false;
    setSelectedDiscipline(newDiscipline);
    // Discipline is explicitly selected — ready immediately
    setIsDisciplineReady(true);
  };

  /* ===========================
      Fetch Program Type Intro
     =========================== */
  useEffect(() => {
    if (!selectedProgramType || !selectedDiscipline) return;
    const finalUrl = `${selectedDiscipline}/${selectedProgramType}`;
    dispatch(fetchProgramTypeIntroByUrl(finalUrl));
  }, [selectedProgramType, selectedDiscipline, dispatch]);

  return (
    <>
      <Helmet>
        <title>{programByIntroData?.metaTitle || ""}</title>
        <meta name="description" content={programByIntroData?.metaDescription || ""} />
      </Helmet>
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
          onProgramTypeChange={handleProgramTypeChange}
          onDisciplineChange={handleDisciplineChange}
        />

        <ProgramFinderIntro description={programByIntroData?.description || ""} />
      </div>

      <CustomTopFooter data={feeStructureCustomTopFooter} />
    </>
  );
};

export default ProgramFinder;