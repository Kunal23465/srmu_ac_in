import { departmentHighlightscardType } from "../../data/academics/faculty-of-civil-engineering/faculty-of-civil-engineering-data";

interface propstype {
    item: departmentHighlightscardType;
}



const CustomDepartmentHighlightCard: React.FC<propstype> = ({ item }) => (
    <>
        <div className=" overflow-hidden mb-4">
            <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
        </div>
        <h3 className="text-[24px] font-semibold">{item.title}</h3>
        <p className="text-[#212529] text-[16px] mt-1">{item.description}</p>
    </>
);



export default CustomDepartmentHighlightCard;   