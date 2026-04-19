import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchAllProgramFinder } from "../../../store/program-finder/programFinderThunk";
import { fetchProgramType } from "../../../store/program-finder/program-type/programTypeThunk";
import {
  fetchProgramDiscipline,
  fetchProgramDisciplines,
} from "../../../store/program-finder/discipline/disciplineThunk";
import ProgramFilter from "./ProgramFilter";
import ProgramFinderIntro from "./ProgramFinderIntro";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { feeStructureCustomTopFooter } from "../../../data/admissions/fee-structure/fee-structue-data";
import Classes from "../../../utils/styles/Global.module.css";
import { useLocation } from "react-router-dom";
import { fetchProgramTypeIntroByUrl } from "../../../store/program-type-intro/ProgramTypeIntroThunk";
import SeoHead from "../../seo/SeoHead";
import { getProgramFinderSeo, shouldUseProgramFinderMetaDescription, shouldUseProgramFinderMetaTitle } from "../../../utils/seo";

const ProgramFinder: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: programByIntroData, error } = useSelector(
    (state: RootState) => state.getProgramByIntro,
  );
  const { data } = useSelector((state: RootState) => state.getProgramFinder);
  const { programType } = useSelector(
    (state: RootState) => state.getProgramType,
  );
  const { discipline } = useSelector((state: RootState) => state.getDiscipline);
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const isDynamicProgramFinderRoute =
    pathParts.length === 2 && pathParts[0] !== "program-finder";
  const disciplineSlugFromRoute = isDynamicProgramFinderRoute
    ? pathParts[0]
    : "";
  const programTypeSlugFromRoute = isDynamicProgramFinderRoute
    ? pathParts[1]
    : "";

  const [selectedProgramType, setSelectedProgramType] = useState<string>(
    programTypeSlugFromRoute,
  );
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>(
    disciplineSlugFromRoute,
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isUserInitiated, setIsUserInitiated] = useState(false);
  const seoPath = location.pathname || "/program-finder";
  const fallbackSeo = getProgramFinderSeo(seoPath);
  const seoTitle = shouldUseProgramFinderMetaTitle(seoPath, programByIntroData?.metaTitle)
    ? programByIntroData?.metaTitle!.trim()
    : fallbackSeo.title;
  const seoDescription = shouldUseProgramFinderMetaDescription(seoPath, programByIntroData?.metaDescription)
    ? programByIntroData?.metaDescription!.trim()
    : fallbackSeo.description;

  useEffect(() => {
    if (isDynamicProgramFinderRoute) {
      setSelectedDiscipline(disciplineSlugFromRoute);
      setSelectedProgramType(programTypeSlugFromRoute);
      setIsUserInitiated(false);
      return;
    }

    if (location.pathname === "/program-finder") {
      setSelectedDiscipline("");
      setSelectedProgramType("");
      setIsUserInitiated(false);
    }
  }, [
    disciplineSlugFromRoute,
    isDynamicProgramFinderRoute,
    location.pathname,
    programTypeSlugFromRoute,
  ]);
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
      ...(selectedDiscipline
        ? { programDisciplineSlug: selectedDiscipline }
        : {}),
      ...(trimmedSearch ? { name: trimmedSearch } : {}),
    };

    dispatch(
      fetchAllProgramFinder(
        Object.keys(params).length > 0 ? params : undefined,
      ),
    );
  }, [debouncedSearch, dispatch, selectedDiscipline, selectedProgramType]);

  /* ===========================
      Initial Load - Program Types & Disciplines
     =========================== */
  useEffect(() => {
    if (programType.length === 0) {
      dispatch(fetchProgramType());
    }

    // Only fetch all disciplines if NO programType selected
    if (discipline.length === 0 && !selectedProgramType) {
      dispatch(fetchProgramDisciplines());
    }
  }, [dispatch, programType.length, selectedProgramType, discipline.length]);

  /* ===========================
      Fetch filtered disciplines based on programType
      IMPORTANT: This runs AFTER selectedProgramType is set from route
     =========================== */
  useEffect(() => {
    // Only fetch if selectedProgramType exists
    if (selectedProgramType) {
      dispatch(fetchProgramDiscipline({ programTypeSlug: selectedProgramType }))
        .unwrap()
        .then((disciplines) => {
          // Auto-select first discipline only if user changed programType
          if (disciplines && disciplines.length > 0) {
            if (isUserInitiated) {
              setSelectedDiscipline(disciplines[0].slug);
            }
            // Otherwise keep route discipline or user's manual selection
          } else {
            setSelectedDiscipline("");
          }
        })
        .catch((error) => {
          console.error("Error fetching disciplines:", error);
          setSelectedDiscipline("");
        });
    } else {
      // If no programType, fetch all disciplines
      dispatch(fetchProgramDisciplines());
      setSelectedDiscipline("");
    }
  }, [selectedProgramType, isUserInitiated, dispatch]);

  /* ===========================
      Handle ProgramType Change
      Set flag when user changes programType
     =========================== */
  const handleProgramTypeChange = (newProgramType: string) => {
    setSelectedProgramType(newProgramType);
    setIsUserInitiated(true); // ✅ Mark as user-initiated
  };

  /* ===========================
      Handle Discipline Change
      Clear the flag when user manually selects discipline
     =========================== */
  const handleDisciplineChange = (newDiscipline: string) => {
    setSelectedDiscipline(newDiscipline);
    setIsUserInitiated(false); // Clear flag
  };

  /* ===========================
      Fetch Program Type Intro
     =========================== */
  useEffect(() => {
    if (!selectedProgramType || !selectedDiscipline) return;
    const finalUrl = `${selectedDiscipline}/${selectedProgramType}`;
    dispatch(fetchProgramTypeIntroByUrl(finalUrl));
  }, [selectedProgramType, selectedDiscipline, dispatch]);

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <SeoHead
        title={seoTitle}
        description={seoDescription}
        pathname={seoPath}
      />
      <div className={`${Classes.container} mt-16`}>
        <div className="w-full flex items-center justify-center flex-col">
          <h1 className="text-[#023047] text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500">
            Program Finder
          </h1>
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

        <ProgramFinderIntro
          description={programByIntroData?.description || ""}
        />
      </div>

      <CustomTopFooter data={feeStructureCustomTopFooter} />
    </>
  );
};

export default ProgramFinder;
