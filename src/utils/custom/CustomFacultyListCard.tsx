import React from "react";
 
export interface FacultyItem {
    id: number;
    name: string;
    designation: string;
    image: string;
    cardBgColor?: string;
}
 
interface CardListProps {
    item: FacultyItem;
}
 
const CustomFacultyListCard: React.FC<CardListProps> = ({ item }) => {
    return (
        <div className="">
            <div
                key={item.id}
                className="rounded-xl h-[450px] cursor-pointer overflow-hidden p-6 border border-[#8b8f91] shadow-xl transition-transform duration-300 hover:-translate-y-2"
                style={{
                    backgroundColor: item.cardBgColor || "",
                }}
            >
                <div className="w-full flex justify-center">
                    <div className="w-50 h-50 rounded-full overflow-hidden mb-8 bg-white">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
 
                <h2 className="font18 text-[#ffb703] mt-12 text-left">
                    {item.name}
                </h2>
 
                <div className="w-full pt-4">
                    <p className="font14 tracking-widest text-[#ffb703] opacity-80 mb-1 uppercase">
                        DESIGNATION
                    </p>
                    <p className="font15 text-white">
                        {item.designation}
                    </p>
                </div>
            </div>
        </div>
 
 
    );
};
 
export default CustomFacultyListCard;