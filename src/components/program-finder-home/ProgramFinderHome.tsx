import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";

import { fetchAllProgramFinder } from "../../store/program-finder/programFinderThunk";
import { fetchProgramDiscipline, fetchProgramDisciplines } from "../../store/program-finder/discipline/disciplineThunk";
import { fetchProgramFlags } from "../../store/program-finder/program-flag/programFlagThunk";

import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { feeStructureCustomTopFooter } from "../../data/admissions/fee-structure/fee-structue-data";
import Classes from "../../utils/styles/Global.module.css";

import ProgramFinderIntro from "../admissions/program-finder/ProgramFinderIntro";
import ProgramFilter from "../admissions/program-finder/ProgramFilter";
import { buildProgramCategoryPath, resolveTopLevelProgramRoute } from "../../utils/programCategoryRoute";
import { fetchProgramTypeIntroByUrl } from "../../store/program-type-intro/ProgramTypeIntroThunk";
import { humanizeSlug } from "../../utils/seo";

const ProgramFinderHome: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { programType, item } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = useMemo(() => location.pathname.split("/").filter(Boolean), [location.pathname]);
  const isCategoryRouteFromPath = pathSegments.length === 2 && pathSegments[0] !== "program-finder";

  const { data: programByIntroData } = useSelector((state: RootState) => state.getProgramByIntro);
  const { data } = useSelector((state: RootState) => state.getProgramFinder);
  const { discipline } = useSelector((state: RootState) => state.getDiscipline);
  const { data: programFlag } = useSelector((state: RootState) => state.getProgramByFlag);

  const [selectedProgramFlag, setSelectedProgramFlag] = useState<string>("");
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("");

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [pendingProgramFlagChange, setPendingProgramFlagChange] = useState<string | null>(null);

  const isInitialized = useRef(false);
  const pendingProgramFlagChangeRef = useRef<string | null>(null);
  const changeSourceRef = useRef<"url" | "user" | null>(null);
  const lastAppliedParamsRef = useRef<{ programType?: string; item?: string }>({});

  const isWaitingForAutoDiscipline =
    Boolean(selectedProgramFlag) &&
    pendingProgramFlagChange === selectedProgramFlag &&
    !selectedDiscipline;

  const updatePendingProgramFlagChange = (value: string | null) => {
    pendingProgramFlagChangeRef.current = value;
    setPendingProgramFlagChange(value);
  };

  /* ===========================
        Initial Static APIs
     =========================== */
  useEffect(() => {
    dispatch(fetchProgramFlags());

    if (!item && !isCategoryRouteFromPath) {
      const topLevelRoute = resolveTopLevelProgramRoute(programType || "");

      if (topLevelRoute?.kind !== "programFlag") {
        dispatch(fetchProgramDisciplines());
      }
    }
  }, [dispatch, isCategoryRouteFromPath, item, programType]);

  /* ===========================
        Apply Route Params (Slug)
     =========================== */
  useEffect(() => {
    const routeProgramType = programType || pathSegments[0] || "";
    const routeItem = item || pathSegments[1] || "";

    if (
      lastAppliedParamsRef.current.programType === routeProgramType &&
      lastAppliedParamsRef.current.item === routeItem
    ) {
      return;
    }
    lastAppliedParamsRef.current = { programType: routeProgramType, item: routeItem };

    if (routeProgramType || routeItem) {
      if (routeItem) {
        changeSourceRef.current = "url";
        updatePendingProgramFlagChange(null);
        setSelectedProgramFlag(routeProgramType || "");
        setSelectedDiscipline(routeItem || "");
      } else {
        const topLevelRoute = resolveTopLevelProgramRoute(routeProgramType || "");
        if (topLevelRoute?.kind === "programFlag") {
          if (changeSourceRef.current !== "user") {
            changeSourceRef.current = "url";
          }
          updatePendingProgramFlagChange(topLevelRoute.slug);
          setSelectedProgramFlag(topLevelRoute.slug);
          setSelectedDiscipline("");
        } else if (topLevelRoute?.kind === "discipline") {
          updatePendingProgramFlagChange(null);
          setSelectedProgramFlag("");
          setSelectedDiscipline(topLevelRoute.slug);
        } else {
          updatePendingProgramFlagChange(null);
          setSelectedProgramFlag(routeProgramType || "");
          setSelectedDiscipline("");
        }
      }
    }
    isInitialized.current = true;
  }, [item, pathSegments, programType]);

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
    // Wait until route params are applied to local selection state.
    // This prevents an initial "all disciplines" fetch from overriding
    // the filtered discipline list on hard refresh.
    if (!isInitialized.current) {
      return;
    }

    if (!selectedProgramFlag) {
      if (!pendingProgramFlagChangeRef.current && !isCategoryRouteFromPath) {
        dispatch(fetchProgramDisciplines());
      }
      return;
    }

    const currentProgramFlag = selectedProgramFlag;
    const source = changeSourceRef.current;

    // URL with discipline already set — just populate dropdown
    if (source === "url" && selectedDiscipline) {
      changeSourceRef.current = null;
      dispatch(
        fetchProgramDiscipline({
          programFlagSlug: currentProgramFlag,
        }),
      );
      return;
    }

    // URL with only programType (no discipline) — populate dropdown but DON'T auto-select
    if (source === "url" && !selectedDiscipline) {
      changeSourceRef.current = null;
      dispatch(
        fetchProgramDiscipline({
          programFlagSlug: currentProgramFlag,
        }),
      );
      updatePendingProgramFlagChange(null);
      return;
    }

    // User dropdown change — fetch and auto-select first discipline
    changeSourceRef.current = null;

    void dispatch(
      fetchProgramDiscipline({
        programFlagSlug: currentProgramFlag,
      }),
    )
      .unwrap()
      .then((disciplines) => {
        if (pendingProgramFlagChangeRef.current !== currentProgramFlag) {
          return;
        }

        const firstDisciplineSlug = disciplines?.[0]?.slug || "";
        setSelectedDiscipline(firstDisciplineSlug);
        updatePendingProgramFlagChange(null);
      })
      .catch(() => {
        if (pendingProgramFlagChangeRef.current === currentProgramFlag) {
          updatePendingProgramFlagChange(null);
        }
      });
  }, [dispatch, isCategoryRouteFromPath, selectedDiscipline, selectedProgramFlag]);

  /* ===========================
        Fetch Program List (Slug based)
     =========================== */
  useEffect(() => {
    if (!isInitialized.current) return;
    if (isWaitingForAutoDiscipline) return;

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
  }, [debouncedSearch, dispatch, isWaitingForAutoDiscipline, selectedDiscipline, selectedProgramFlag]);

  /* ===========================
        Sync Route after Auto Selection
     =========================== */
  useEffect(() => {
    if (!isInitialized.current) return;
    if (isWaitingForAutoDiscipline) return;
    if (!selectedProgramFlag || !selectedDiscipline) return;

    const nextPath = buildProgramCategoryPath(selectedProgramFlag, selectedDiscipline);

    if (location.pathname !== nextPath) {
      lastAppliedParamsRef.current = {
        programType: selectedProgramFlag,
        item: selectedDiscipline,
      };

      navigate(nextPath, { replace: true });
    }
  }, [isWaitingForAutoDiscipline, location.pathname, navigate, selectedDiscipline, selectedProgramFlag]);

  /* ===========================
        Fetch Intro by URL
     =========================== */
  useEffect(() => {
    if (!selectedProgramFlag || !selectedDiscipline) return;

    const finalUrl = `${selectedProgramFlag}/${selectedDiscipline}`;
    dispatch(fetchProgramTypeIntroByUrl(finalUrl));
  }, [selectedProgramFlag, selectedDiscipline, dispatch]);

  /* ===========================
        Intro Description (Slug match)
     =========================== */
  const selectedProgramFlagObj = programFlag?.find((pt) => pt.slug === selectedProgramFlag);
  const selectedDisciplineObj = discipline?.find((d) => d.slug === selectedDiscipline);
  const introDescription = selectedDisciplineObj?.description || selectedProgramFlagObj?.description || "";

  const flagName = useMemo(() => {
    if (!selectedProgramFlag) return "";
    const matched = programFlag.find(f => f.slug === selectedProgramFlag);
    if (matched?.name) return matched.name;
    const map: Record<string, string> = {
      "after-class-10th": "Diploma",
      "after-class-12th": "Undergraduate",
      "after-graduation": "Postgraduate",
      "after-post-graduation": "Doctoral",
      "after-polytechnic": "Lateral Entry",
      "industry-honors": "Industry Honors",
    };
    return map[selectedProgramFlag] || humanizeSlug(selectedProgramFlag);
  }, [selectedProgramFlag, programFlag]);

  const disciplineName = useMemo(() => {
    if (!selectedDiscipline) return "";
    const matched = discipline.find(d => d.slug === selectedDiscipline);
    return matched?.name || humanizeSlug(selectedDiscipline);
  }, [selectedDiscipline, discipline]);

  const pageTitle = useMemo(() => {
    if (disciplineName && flagName) {
      return `${disciplineName} (${flagName}) Programs`;
    }
    if (flagName) {
      return `${flagName} Programs`;
    }
    if (disciplineName) {
      return `${disciplineName} Programs`;
    }
    return "";
  }, [disciplineName, flagName]);

  const handleProgramFlagChange = (value: string) => {
    changeSourceRef.current = "user";
    updatePendingProgramFlagChange(value || null);
    setSelectedProgramFlag(value);
    setSelectedDiscipline("");
    lastAppliedParamsRef.current = {};
  };

  return (
    <>
      <div className={`${Classes.container} mt-16`}>
        <div className="w-full flex items-center justify-center flex-col">
          <h2 className="text-[#023047] text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500">Program Finder</h2>
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
          onProgramTypeChange={handleProgramFlagChange}
          onDisciplineChange={setSelectedDiscipline}
          isTypeFlag={true}
        />

        <ProgramFinderIntro description={programByIntroData?.description || ""} title={pageTitle} />
      </div>

      <CustomTopFooter data={feeStructureCustomTopFooter} />
    </>
  );
};

export default ProgramFinderHome;
