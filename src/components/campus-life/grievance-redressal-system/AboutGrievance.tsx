interface AboutGrievanceProps {
    data: {
        title: string;
        purposeTitle: string;
        purposeText: string;
        objectivesTitle: string;
        objectivesIntro: string;
        objectivesList: string[];
    };
}

const AboutGrievance: React.FC<AboutGrievanceProps> = ({ data }) => {
    return (
        <div>
            <h2 className="text-[#0f4a85] font-semibold text-[19px] mb-4">{data.title}</h2>

            <h3 className="text-[#ffb703] font-semibold text-lg mb-2">{data.purposeTitle}</h3>
            <p className="mb-6">{data.purposeText}</p>

            <h3 className="text-[#ffb703] font-semibold text-lg mb-2">{data.objectivesTitle}</h3>
            <p className="font-semibold mb-4">{data.objectivesIntro}</p>

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

export default AboutGrievance;
