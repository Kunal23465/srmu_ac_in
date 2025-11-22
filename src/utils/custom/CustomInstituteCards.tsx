import { Link } from "react-router-dom";
import { Institute } from "../../data/academics/institute/institute-form-data";
import { FaArrowRight } from "react-icons/fa";

interface CardProps {
    institute: Institute;
}

export const CustomInstituteCards: React.FC<CardProps> = ({ institute }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-lg flex flex-col h-full 
                        border-2 border-transparent hover:border-yellow-400 transition">

            <img
                src={institute.image}
                alt={institute.title}
                className="rounded-xl w-full h-48 object-cover"
            />

            <h2 className="mt-4 text-lg font-semibold color_light_blue">{institute.title}</h2>

            <p className="mt-2 text-md text-gray-600 leading-relaxed flex-grow">
                {institute.description}
            </p>

            <div className="mt-auto pt-4 flex items-center justify-between">
                <span className="font18 fw500 color_light_blue">
                    {institute.departments} Departments
                </span>

                <button className="px-12 py-4 rounded-xl border border-yellow-400 text-sm font-medium 
                                   cursor-pointer transition active:scale-95
                                   group-hover:bg-yellow-400 hover:bg-yellow-400 hover:border-yellow-400">
                    <Link className="flex items-center gap-2" to={institute.path}>
                        <span>MORE INFO</span>
                        <FaArrowRight />
                    </Link>
                </button>
            </div>
        </div>
    );
};

