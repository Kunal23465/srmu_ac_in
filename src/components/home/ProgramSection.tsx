import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchProgramType } from "../../store/program-finder/program-type/programTypeThunk";
import { fetchProgramDiscipline } from "../../store/program-finder/discipline/disciplineThunk";
import placeholderImg from "../../assets/images/placeholder-1.png";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
// const PROGRAM_TYPE_LABEL_MAP: Record<string, string> = {
//   "After Class 10th": "Polytechnic (Diploma)",
//   "After Class 12th": "Undergraduate",
//   "Industry Honors Programs": "Industry Honors",
//   "After Graduation": "Postgraduate",
//   "After Postgraduation": "Integrated",
// };
const ProgramsSection: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [selectedProgramType, setSelectedProgramType] = useState<number | null>(null);
  // @ts-ignore
  const [isMobile, setIsMobile] = useState(false);
  const { programType } = useSelector((state: RootState) => state.getProgramType);
  const { discipline } = useSelector((state: RootState) => state.getDiscipline);
  const slugify = (str: string) => str.toLowerCase().trim().replace(/\s+/g, "-");
  /* ===========================
     Detect Mobile
     =========================== */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ===========================
     Initial Load
     =========================== */
  useEffect(() => {
    dispatch(fetchProgramType());
  }, [dispatch]);

  /* ===========================
     Set Default Active Tab
     =========================== */
  useEffect(() => {
    if (programType?.length && !selectedProgramType) {
      setActiveTab(programType[0].programTypeId);
      setSelectedProgramType(programType[0].programTypeId);
    }
  }, [programType, selectedProgramType]);

  /* ===========================
     Fetch Discipline on Tab Change
     =========================== */
  useEffect(() => {
    if (selectedProgramType) {
      dispatch(fetchProgramDiscipline({ programTypeId: selectedProgramType }));
    }
  }, [dispatch, selectedProgramType]);

  console.log("discipline", discipline);

  return (
    <section
      className="bg-cover bg-center bg-fixed py-20 mb-20"
      style={{
        backgroundImage: "url('https://srmu.ac.in/storage/common-section/1657x580-new-09022401172650.png')",
      }}
    >
      <div className="container mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="text-white mb-10">
          <h2 className="text-[28px] sm:text-[28px] lg:text-[50px] fw600">Our Programs</h2>
          <span className="text-lg mt-2 max-w-2xl opacity-90">
            At University’s beautiful campus, you’ll find a diverse and welcoming community that will teach you life skills along with having fun.
          </span>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-y-10 md:gap-10">
          {/* =======================
              LEFT TABS (Program Types)
             ======================= */}
          <div className="w-full md:max-w-[350px] programs-tabs">
            <ul className="flex flex-row md:flex-col overflow-x-auto">
              {programType?.map((tab: any) => (
                <li key={tab.programTypeId}>
                  {tab.showOnHome && (
                    <>
                      <button
                        onClick={() => {
                          setActiveTab(tab.programTypeId);
                          setSelectedProgramType(tab.programTypeId);
                        }}
                        className={`block w-full text-left uppercase text-nowrap text-white rounded-md py-5 md:pl-6 md:pr-16 mb-1 px-5 text-base md:text-[1.25rem] cursor-pointer transition-all
                    ${activeTab === tab.programTypeId ? "programsection shadow-lg text-[#0d6efd]" : "bg-transparent text-white"}`}
                      >
                        {/* {PROGRAM_TYPE_LABEL_MAP[tab.name] ?? tab.name} */}
                        {tab.name}
                      </button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* =======================
              RIGHT CONTENT
             ======================= */}
          <div className="w-full md:ml-6">
            <ul className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(170px,170px))] list-none">
              {discipline?.map((item: any) => (
                <>
                  {item.showOnHome && (
                    <li key={item.programDisciplineId} className="list-none">
                      <Link
                        to={`/programs/${slugify(item.name)}`}
                        state={{
                          programTypeId: selectedProgramType,
                          disciplineId: item.programDisciplineId,
                        }}
                        className="block overflow-hidden bg-transparent transition-all hover:-translate-y-2 duration-300"
                      >
                        <img src={item.imagePath || placeholderImg} alt={item.name} className="w-full h-40 object-cover border-white border-2 rounded-xl" />
                        <div className="text-left text-white mt-4 text-base">{item.name}</div>
                      </Link>
                    </li>
                  )}
                </>
              ))}
            </ul>

            {/* Enroll Button */}
            <div className="text-center mt-10">
              <Link
                to="/online-admission"
                className="uppercase inline-flex items-center bg-[#ffb703] text-[#023047] font-medium py-4 px-8 rounded-xl hover:bg-transparent hover:border-1 hover:text-[#ffb703] hover:border-[#ffb703] transition shadow-md"
              >
                Enroll Now
                <LiaLongArrowAltRightSolid size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
