import { TypesOfGrievanceProps } from "./TypesOfGrievance";



const Procedures: React.FC<TypesOfGrievanceProps> = ({ data }) => {
    return (
        <div>
            <h2 className="text-[#0f4a85] font-semibold text-[19px] mb-4">{data.title}</h2>



            <h2 className="text-[#ffb703] font-medium text-lg mb-2">{data.objectivesTitle}</h2>

            <ul className="space-y-3 list-none pl-0 !list-none !pl-0">
                {data.objectivesList.map((obj, idx) => (
                    <li key={idx}>
                        <span className="text-[#ffb703] mr-2">✔</span> {obj}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Procedures;
