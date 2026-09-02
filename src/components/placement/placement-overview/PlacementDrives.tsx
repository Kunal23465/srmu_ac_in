import React, { useState, useEffect, useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { placementData } from "../../../data/placement/placementData";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchPlacementDriveTabData } from "../../../store/placement/placement-drive/placementDriveTabDataThunk";

const PlacementDrives: React.FC = () => {
  const [activeYear, setActiveYear] = useState<string>("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const { data, loading } = useSelector(
    (state: RootState) => state.getPlacementDriveTabData
  );

  /* -------------------- FETCH API -------------------- */
  useEffect(() => {
    dispatch(fetchPlacementDriveTabData());
  }, [dispatch]);

  /* -------------------- YEARS -------------------- */
  const years = useMemo(() => {
    if (Array.isArray(data) && data.length > 0) {
      return [...new Set(data.map((item) => item.year))]
        .filter(Boolean)
        .sort((a, b) => Number(b) - Number(a));
    }
    return [];
  }, [data]);

  /* -------------------- DEFAULT YEAR -------------------- */
  useEffect(() => {
    if (years.length > 0) {
      setActiveYear((prev) => prev || years[0]);
    }
  }, [years]);

  /* -------------------- FILTER DATA -------------------- */
  const students = useMemo(() => {
    if (Array.isArray(data) && data.length > 0 && activeYear) {
      return data
        .filter((item) => String(item.year) === String(activeYear))
        .sort(
          (a, b) =>
            new Date(b.dateOfVisit).getTime() -
            new Date(a.dateOfVisit).getTime()
        );
    }
    return placementData[activeYear] || [];
  }, [data, activeYear]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  /* -------------------- RESIZE -------------------- */
  useEffect(() => {
    setHasMounted(true);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* -------------------- SLIDE CHANGE -------------------- */
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

  /* -------------------- REINIT -------------------- */
  useEffect(() => {
    if (emblaApi && hasMounted) {
      emblaApi.reInit();
      setCurrentSlide(0);
    }
  }, [windowWidth, activeYear, emblaApi, hasMounted]);

  /* -------------------- SLIDES -------------------- */
  const getSlidesToShow = useCallback(() => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 640) return 2;
    return 1;
  }, [windowWidth]);

  const slidesToShow = getSlidesToShow();

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= students.length - slidesToShow;

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  const goToYear = (year: string) => {
    setActiveYear(year);
    setCurrentSlide(0);
    emblaApi?.scrollTo(0);
  };

  const getSlideWidth = () => `${100 / slidesToShow}%`;

  /* -------------------- SSR FALLBACK -------------------- */
  if (!hasMounted) {
    return (
      <div className="relative bg-[#f1f1f1] w-full text-black py-20">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  /* -------------------- LOADING -------------------- */
  if (loading && students.length === 0) {
    return <p className="text-center my-5">Loading...</p>;
  }

  /* -------------------- RENDER -------------------- */
  return (
    <div className="relative bg-[#f1f1f1] w-full text-black py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER + TABS */}
        <div className="block md:flex justify-between items-center">
          <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 mb-2">
            Placement Drives
          </h2>

          {/* ✅ ALWAYS SHOW TABS */}
          <div className="flex items-center w-fit mb-2 bg-white rounded">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => goToYear(year)}
                className={`px-5 sm:px-10 py-3 font-semibold transition cursor-pointer
                  ${
                    activeYear === year
                      ? "bg-yellow-400 text-black"
                      : "text-black hover:bg-yellow-400"
                  }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* SUBTEXT */}
        <p className="text-gray-700 mb-8 max-w-xl">
          Dynamic placement drives connect our students with leading employers,
          facilitating successful career launches.
        </p>

        <div className="h-0.5 bg-black mb-12"></div>

        {/* CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {students.map((drive: any) => (
              <div
                key={drive.placementDriveId}
                className="flex-shrink-0 flex-grow-0 px-3"
                style={{ flexBasis: getSlideWidth() }}
              >
                <div className="bg-[#f1f1f1] rounded-lg h-[310px] p-5 border border-gray-200">

                  <div className="flex justify-center mb-4">
                    <div className="w-full h-40 flex items-center justify-center">
                      <img
                        src={drive.recruiterImage || "/placeholder.png"}
                        alt={drive.recruiterName || "Recruiter logo"}
                        width={200}
                        height={144}
                        loading="lazy"
                        decoding="async"
                        className="w-full max-h-36 object-contain"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            "/placeholder.png";
                        }}
                      />
                    </div>
                  </div>

                  <p className="mb-1">
                    <strong>Date of Visit:</strong> {drive.dateOfVisit}
                  </p>

                  <p
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: drive.description,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NAV BUTTONS */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={goToPrev}
            disabled={isPrevDisabled}
            className={`bg-white w-13 h-13 rounded-full border border-gray-200 cursor-pointer shadow-lg flex items-center justify-center transition
              ${
                isPrevDisabled
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-[#ffb703] hover:text-white"
              }`}
          >
            <MdKeyboardArrowLeft size={26} />
          </button>

          <button
            onClick={goToNext}
            disabled={isNextDisabled}
            className={`bg-white w-13 h-13 rounded-full border border-gray-200 cursor-pointer shadow-lg flex items-center justify-center transition
              ${
                isNextDisabled
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-[#ffb703] hover:text-white"
              }`}
          >
            <MdKeyboardArrowRight size={26} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacementDrives;