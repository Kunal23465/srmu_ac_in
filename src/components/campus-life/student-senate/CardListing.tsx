import { students } from "../../../data/campus-life/student-senate/student-senate-data";
import { CardSectionSenate } from "./CardSectionSenate";

export const CardListing: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {students.map(item => (
                <CardSectionSenate key={item.id} student={item} />
            ))}
        </div>
    );
};


export default CardListing;