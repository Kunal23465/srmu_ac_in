import { Link } from "react-router-dom";
import { Institute } from "../../data/academics/institute/institute-form-data";
import { FaArrowRight } from "react-icons/fa";

interface CardProps {
  institute: Institute;
}

export const CustomInstituteCards: React.FC<CardProps> = ({ institute }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col h-full 
                border-2 border-transparent hover:border-yellow-400 transition shrink-0 mx-auto"
    >
      <img src={institute.image} alt={institute.title} className="rounded-xl w-full h-40 md:h-48 object-cover" />

      <h2 className="mt-4 lg:text-[18px] text-[15.75px] md:text-[16.875px] sm:text-[15.75px] fw500 color_light_blue">{institute.title}</h2>

      <p className="mt-2 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-gray-600 leading-relaxed grow">{institute.description}</p>

      {/*
                *** CRITICAL CHANGE HERE ***
                - Changed "flex flex-col sm:flex-row" to just "flex flex-row" (or kept sm:flex-row and removed flex-col).
                - By removing 'flex-col', the default behavior is applied, and then 'flex-row' is forced on all sizes, but since the smallest breakpoint has no prefix, we must explicitly use 'flex-row' or ensure 'flex-col' is removed.
                - We use 'flex flex-row' for all screen sizes.
            */}
      <div className="mt-auto pt-4 flex flex-row items-center justify-between py-3">
        {/* *** ADJUSTED TEXT CLASS *** - Reduced size slightly on the smallest screens to prevent overflow.
         */}
        <span className="lg:text-[18px] text-[15.75px] md:text-[16.875px] sm:text-[15.75px] fw500 color_light_blue whitespace-nowrap overflow-hidden text-ellipsis mr-2">{institute.departments} Departments</span>

        {/* *** ADJUSTED BUTTON CLASS *** - Used 'flex-shrink-0' to ensure the button doesn't shrink and force the text to wrap.
         */}

        {/* @ts-ignore */}
        {institute.departments === 1 ? (
          <Link
            className="px-5 py-2.5 sm:px-8  sm:py-3 rounded-xl border border-yellow-400 text-xs sm:text-sm font-medium
                                   cursor-pointer transition active:scale-95 whitespace-nowrap shrink-0
                                   group-hover:bg-yellow-400 hover:bg-yellow-400 hover:border-yellow-400 flex items-center gap-1 sm:gap-2 justify-center"
            to={`/academics/department/${institute.path}`}
            state={institute.departmentsData}
          >
            <span className="lg:text-[13px] md:text-[12.195px] sm:text-[11.382px] text-[11.382px]">MORE INFO</span>
            <FaArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        ) : (
          <Link
            className=" px-5 py-2.5 sm:px-8  sm:py-3 rounded-xl border border-yellow-400 text-xs sm:text-sm font-medium
                                   cursor-pointer transition active:scale-95 whitespace-nowrap shrink-0
                                   group-hover:bg-yellow-400 hover:bg-yellow-400 hover:border-yellow-400 flex items-center gap-1 sm:gap-2 justify-center"
            to={`/academics/${institute.path}`}
            state={institute.departmentsData}
          >
            <span>MORE INFO</span>
            <FaArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        )}

      </div>
    </div>
  );
};
