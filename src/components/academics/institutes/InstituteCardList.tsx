import { institutes } from "../../../data/academics/institute/institute-form-data";
import { CustomInstituteCards } from "../../../utils/custom/CustomInstituteCards";

export const InstituteCardList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {institutes.map(item => (
                <CustomInstituteCards key={item.id} institute={item} />
            ))}
        </div>
    );
};


export default InstituteCardList;