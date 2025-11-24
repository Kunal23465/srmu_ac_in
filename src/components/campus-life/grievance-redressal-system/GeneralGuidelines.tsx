import { TypesOfGrievanceProps } from "./TypesOfGrievance";



const GeneralGuidelines: React.FC<TypesOfGrievanceProps> = ({ data }) => {
    return (
        <div>
            <h2 className="text-[#0f4a85] font-semibold text-[19px] mb-4">{data.title}</h2>

            <p className="mb-6">{data.purposeText}</p>

            <h3 className="text-[#ffb703] font-semibold text-lg mb-2">{data.objectivesTitle}</h3>

            <ul className="space-y-3 list-none pl-0 !list-none !pl-0">
                {data.objectivesList.map((obj, idx) => (
                    <li key={idx} className="ml-6">
                        <span className="text-[#ffb703] mr-2">✔</span> {obj}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default GeneralGuidelines;
