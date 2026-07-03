import React, { useState, useRef, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Classes from "../../../utils/styles/Global.module.css";

import { FaLongArrowAltRight } from "react-icons/fa";
import placementPdf from "../../../assets/pdf/placement/placement-policies/2023-placement-record-100124102503-1-1--210625040129.pdf";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { fetchPlacementRecordTabData } from "../../../store/placement/placement-record/placementRecordTabDataThunk";
import { AppDispatch, RootState } from "../../../store";

interface PlacementRecord {
  instituteStudentPlacedId: number;
  instituteId: number;
  recruiterId: number | null;
  recruiterName: string | null;
  departmentId: number;
  departmentName: string;
  programId: number;
  programName: string;
  studentName: string;
  studentPackage: string;
  yearOfPlacement: string;
  imagePath: string | null;
  recruiterImage: string | null;
  status: boolean;
}

const PlacementRecords: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data, loading } = useSelector(
    (state: RootState) => state.getPlacementRecordTabData
  );

  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  /* ---------------- SSR MOUNT ---------------- */
  useEffect(() => {
    setHasMounted(true);

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {

    dispatch(fetchPlacementRecordTabData());

  }, [dispatch]);

  /* ---------------- GET YEARS ---------------- */
  const getPlacementYears = (data: PlacementRecord[]): number[] => {
    return [...new Set(data.map((d) => Number(d.yearOfPlacement)))].sort(
      (a, b) => b - a
    );
  };

  const years = getPlacementYears(data || []);

  /* ---------------- DEFAULT YEAR ---------------- */
  useEffect(() => {
    if (years.length && !activeYear) {
      setActiveYear(years[0]);
    }
  }, [years, activeYear]);

  /* ---------------- FILTER STUDENTS ---------------- */
  const students =
    data?.filter(
      (item: PlacementRecord) => Number(item.yearOfPlacement) === activeYear
    ) || [];

  /* ---------------- SLIDE CHANGE HANDLER ---------------- */
  useEffect(() => {
    if (!emblaApi || !hasMounted) return;

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, hasMounted]);

  /* ---------------- RE-INIT WHEN YEAR OR WIDTH CHANGES ---------------- */
  useEffect(() => {
    if (emblaApi && hasMounted) {
      emblaApi.reInit();
      setCurrentSlide(0); // Reset to first slide when year changes
    }
  }, [windowWidth, activeYear, emblaApi, hasMounted]);

  /* ---------------- SLIDER SETTINGS ---------------- */
  const getSlidesToShow = useCallback(() => {
    if (windowWidth >= 1280) return 5;
    if (windowWidth >= 1024) return 4;
    if (windowWidth >= 768) return 3;
    if (windowWidth >= 480) return 2;
    return 1;
  }, [windowWidth]);

  const slidesToShow = getSlidesToShow();
  const totalSlides = Math.ceil(students.length / slidesToShow);

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= totalSlides - 1;

  /* ---------------- NAVIGATION ---------------- */
  const goToPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const goToNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Get slide width based on slides to show
  const getSlideWidth = () => {
    return `${100 / slidesToShow}%`;
  };

  const getPlacementCardKey = (stu: PlacementRecord, index: number) => {
    return `${stu.instituteStudentPlacedId}-${stu.programId}-${stu.studentName}-${index}`;
  };

  /* ---------------- LOADING ---------------- */
  if (loading) {
    return <p className="text-center my-5">Loading...</p>;
  }

  // Static grid for SSR
  if (!hasMounted) {
    return (
      <div className="relative placement-record-bg w-full text-white py-8 sm:py-24">
        <div className={`${Classes["container"]}`}>
          {/* HEADER + TABS */}
          <div className="block md:flex justify-between items-center">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] font-medium mb-2">
              Placement Records
            </h2>

            <div className="flex items-center bg-white">
              {years.map((year) => (
                <button
                  key={year}
                  className={`px-5 sm:px-10 xl:px-15 py-3 text-black font-medium transition ${activeYear === year ? "bg-[#ffb703]" : "hover:bg-[#ffb703]"
                    }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* TEXT */}
          <p className="text-white mb-5 text-[14px] max-w-xl">
            Outstanding placement records showcase our commitment to student
            success and industry relevance
          </p>

          {/* ARROWS (disabled) */}
          <div className="flex gap-5 mb-6">
            <button
              disabled
              className="p-2 border-2 border-white opacity-40 cursor-not-allowed"
            >
              <MdKeyboardArrowLeft size="26" />
            </button>

            <button
              disabled
              className="p-2 border-2 border-white opacity-40 cursor-not-allowed"
            >
              <MdKeyboardArrowRight size="26" />
            </button>
          </div>

          {/* STATIC GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {students.slice(0, 5).map((stu: PlacementRecord, index: number) => (
              <div key={getPlacementCardKey(stu, index)} className="px-2">
                <div className="w-full rounded-xl border border-white py-3 px-2 text-center">
                  <div className="min-h-[200px]">
                    <img
                      src={stu.imagePath ?? "https://placehold.co/600x400"}
                      alt={stu.studentName}
                      className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                    />
                    <h4 className="text-white font-semibold">
                      {stu.studentName}
                    </h4>
                    <p className="text-white mt-1">{stu.programName}</p>
                  </div>
                  <div className="border-t-2 border-gray-500 pt-4">
                    <div className="mt-4 flex justify-center">
                      <img
                        src={stu.recruiterImage ?? "https://placehold.co/600x400"}
                        alt="logo"
                        className="w-full max-w-[100px] h-14 object-contain brightness-[100] sm:brightness-100"
                      />
                    </div>
                    <p className="text-white mt-2">
                      Package:
                      <span className="font-semibold ml-1">
                        {stu.studentPackage}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* VIEW ALL */}
          <div className="flex justify-center mt-12">
            <a
              href={placementPdf}
              // href="#"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 border border-[#f8b922] text-[#f8b922] rounded-xl flex items-center gap-2 hover:bg-[#f8b922] hover:text-black transition"
            >
              VIEW ALL PLACED STUDENTS
              <FaLongArrowAltRight />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative placement-record-bg w-full text-white py-8 sm:py-24">
      <div className={`${Classes["container"]}`}>

        {/* HEADER + TABS */}
        <div className="block md:flex justify-between items-center">
          <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] font-medium mb-2">
            Placement Records
          </h2>

          <div className="flex items-center bg-white">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-5 sm:px-10 xl:px-15 py-3 text-black font-medium transition cursor-pointer ${activeYear === year
                  ? "bg-[#ffb703]"
                  : "hover:bg-[#ffb703]"
                  }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* TEXT */}
        <p className="text-white mb-5 text-[14px] max-w-xl">
          Outstanding placement records showcase our commitment to student
          success and industry relevance
        </p>

        {/* ARROWS */}
        <div className="flex gap-5 mb-6">
          <button
            onClick={goToPrev}
            disabled={isPrevDisabled}
            className={`p-2 border-2 border-white transition cursor-pointer ${isPrevDisabled
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-[#ffb703]"
              }`}
          >
            <MdKeyboardArrowLeft size="26" />
          </button>

          <button
            onClick={goToNext}
            disabled={isNextDisabled}
            className={`p-2 border-2 border-white transition cursor-pointer ${isNextDisabled
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-[#ffb703]"
              }`}
          >
            <MdKeyboardArrowRight size="26" />
          </button>
        </div>

        {/* EMBLA CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {students.map((stu: PlacementRecord, index: number) => (
              <div
                key={getPlacementCardKey(stu, index)}
                className="flex-shrink-0 flex-grow-0 px-2"
                style={{ flexBasis: getSlideWidth() }}
              >
                <div className="w-full rounded-xl border border-white group hover:bg-white transition-all duration-500 py-3 px-2 text-center">
                  <div className="min-h-[200px]">
                    <img
                      src={stu.imagePath ?? "https://placehold.co/600x400"}
                      alt={stu.studentName}
                      className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                    />
                    <h4 className="text-white group-hover:text-black font-semibold">
                      {stu.studentName}
                    </h4>
                    <p className="text-white group-hover:text-black mt-1">
                      {stu.programName}
                    </p>
                  </div>

                  <div className="border-t-2 border-gray-500 pt-4">
                    <div className="mt-4 flex justify-center">
                      <img
                        src={stu.recruiterImage ?? "https://placehold.co/600x400"}
                        alt="logo"
                        className="w-full max-w-[100px] h-14 object-contain brightness-[100] sm:brightness-100 group-hover:brightness-100"
                      />
                    </div>
                    <p className="text-white group-hover:text-black mt-2">
                      Package:
                      <span className="font-semibold ml-1">
                        {stu.studentPackage}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VIEW ALL */}
        <div className="flex justify-center mt-12">
          <a
            // href={placementPdf}
            // target="_blank"
            href="#"
            rel="noreferrer"
            className="px-8 py-3 border border-[#f8b922] text-[#f8b922] rounded-xl flex items-center gap-2 hover:bg-[#f8b922] hover:text-black transition"
          >
            VIEW ALL PLACED STUDENTS
            <FaLongArrowAltRight />
          </a>
        </div>

      </div>
    </div>
  );
};

export default PlacementRecords;
