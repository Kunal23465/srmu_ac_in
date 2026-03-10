import React, { useState, useRef, useEffect } from "react";
import Classes from "../../../utils/styles/Global.module.css";
import Slider from "react-slick";

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
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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
  }, [years]);

  /* ---------------- FILTER STUDENTS ---------------- */

  const students =
    data?.filter(
      (item: PlacementRecord) => Number(item.yearOfPlacement) === activeYear
    ) || [];

  /* ---------------- SLIDER SETTINGS ---------------- */

  const slidesToShow = 5;
  const totalSlides = Math.ceil(students.length / slidesToShow);

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= totalSlides - 1;

  /* ---------------- RESET SLIDER WHEN TAB CHANGE ---------------- */

  useEffect(() => {
    setCurrentSlide(0);
    sliderRef.current?.slickGoTo(0);
  }, [activeYear]);

  /* ---------------- LOADING ---------------- */

  if (loading) {
    return <p className="text-center my-5">Loading...</p>;
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
                className={`px-5 sm:px-10 xl:px-15 py-3 text-black font-medium transition ${activeYear === year
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
            onClick={() => sliderRef.current?.slickPrev()}
            disabled={isPrevDisabled}
            className={`p-2 border-2 border-white ${isPrevDisabled
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-[#ffb703]"
              }`}
          >
            <MdKeyboardArrowLeft size="26" />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            disabled={isNextDisabled}
            className={`p-2 border-2 border-white ${isNextDisabled
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-[#ffb703]"
              }`}
          >
            <MdKeyboardArrowRight size="26" />
          </button>
        </div>

        {/* SLIDER */}

        <Slider ref={sliderRef} {...settings}>
          {students.map((stu: PlacementRecord) => (
            <div key={stu.instituteStudentPlacedId} className="px-2">
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
                      className="w-full max-w-[100px] h-14 object-contain brightness-[100] sm:brightness-100"
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
        </Slider>

        {/* VIEW ALL */}

        <div className="flex justify-center mt-12">
          <a
            href={placementPdf}
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
};

export default PlacementRecords;