import React, { useEffect, useState } from "react";
import Classes from "../../utils/styles/Global.module.css";
import { FaAngleRight } from "react-icons/fa";
import img1 from "../../assets/images/home/apply-srmu1.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchProgramByFlag } from "../../store/program-finder/program-flag/programFlagThunk";

const Apply: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [active, setActive] = useState<number>(0);
  // const { programType } = useSelector((state: RootState) => state.getProgramType);
  const { data } = useSelector((state: RootState) => state.getProgramByFlag);
  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-");
  const getShortText = (html: string, wordLimit = 20) => {
    if (!html) return "";

    // remove HTML tags
    const plainText = html.replace(/<[^>]*>/g, "");

    const words = plainText.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : plainText;
  };

  const dynamicAccordionData = data?.map((item: any, index: number) => ({
    id: index,
    title: item.name,
    imgSrc: item.imagePath || img1, // fallback image
    programTypeId: item.programTypeId,
    content: (
      <>
        <p className="text-[#333] font-normal">{getShortText(item.brief, 22)}</p>
        <Link to={`/programs/${slugify(item.name)}`} state={{ programTypeId: item.programTypeId }} className="text-[#ffb703] font-medium">
          Read More
        </Link>
      </>
    ),
  }));

  /* ===========================
          Initial Load
     =========================== */
  useEffect(() => {
    dispatch(fetchProgramByFlag());
  }, [dispatch]);

  console.log("===data===", data);
  return (
    <div className={`${Classes.container} pb-7 md:pb-10 lg:pb-14`}>
      <div className="flex flex-col-reverse sm:flex-row gap-x-10 gap-y-6">
        <div className="left-part w-full sm:max-w-[500px] ">
          <h2 className="text-[28px] lg:text-[3.125rem] text-[#023047]   fw600">Apply to SRMU</h2>
          <p className="">Whether you’re looking for an undergraduate degree or to develop industry-specific skills, SRMU has every pathway available for you.</p>

          <div className="mt-4 sm:mt-8">
            {dynamicAccordionData.map((item) => (
              <div key={item.id} className={`sm:w-[125%] relative px-6 py-4 ${item.id === active ? "bg-[#eefcff] border border-[#219ebc] rounded-lg" : ""}`}>
                <div /* @ts-ignore */
                  onClick={() => setActive((ele) => (ele !== item.id ? item.id : null))}
                  className={`cursor-pointer text-[18px] flex items-center gap-x-2 ${item.id === active ? "text-[#219ebc]" : ""}`}
                >
                  <span className={`transform ${item.id === active ? "rotate-90" : ""}`}>
                    <FaAngleRight color="#219ebc" />
                  </span>
                  {item.title}
                </div>

                <div className={`mt-2 overflow-hidden  ease-in-out ${item.id === active ? "max-h-[1500px]" : "max-h-0"}`}>
                  {item.content}

                  {item.id === active && <img src={item.imgSrc} alt="Program visual" className="mt-4 rounded-lg block lg:hidden w-full" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="right-part w-full sm:w-auto min-w-[400px] hidden lg:block">
          <img
            className="w-full h-auto rounded-lg max-w-[720px] max-h-[500px]"
            src={active !== null ? dynamicAccordionData?.[active]?.imgSrc : dynamicAccordionData?.[0]?.imgSrc}
            alt="Accordion Visual"
          />
        </div>
      </div>
    </div>
  );
};

export default Apply;
