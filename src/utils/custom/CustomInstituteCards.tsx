import { Institute } from "../../data/academics/institute/institute-form-data";
import { FaArrowRight } from "react-icons/fa";

interface CardProps {
    institute: Institute;
}

export const CustomInstituteCards: React.FC<CardProps> = ({ institute }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-sm flex flex-col h-full 
                        border-2 border-transparent hover:border-yellow-400 transition">

            <img
                src={institute.image}
                alt={institute.title}
                className="rounded-xl w-full h-48 object-cover"
            />

            <h2 className="mt-4 text-lg font-semibold">{institute.title}</h2>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed grow">
                {institute.description}
            </p>

            <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold text-sm text-blue-600">
                    {institute.departments} Departments
                </span>

                <button className="px-15 py-4 rounded-xl border border-yellow-400 text-sm font-medium 
                                   cursor-pointer transition active:scale-95
                                   group-hover:bg-yellow-400 hover:bg-yellow-400 hover:border-yellow-400">
                    <div className="flex items-center gap-2">
                        <span>
                            MORE INFO
                        </span>
                        <span><FaArrowRight /></span>

                    </div>
                </button>
            </div>
        </div>
    );
};
