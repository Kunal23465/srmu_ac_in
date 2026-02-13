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
                className="rounded-xl h-[350px] sm:h-[450px] cursor-pointer overflow-hidden p-6 border border-[#8b8f91] shadow-xl transition-transform duration-300 hover:-translate-y-2"
                style={{
                    backgroundColor: item.cardBgColor || "",
                }}
            >
                <div className="w-full flex justify-center">
                    <div className="w-30 h-30 sm:w-50 sm:h-50 rounded-full overflow-hidden mb-4 sm:mb-8 bg-white">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <h2 className="lg:text-[18px] text-[15.75px] md:text-[16.875px] sm:text-[15.75px] text-[#ffb703] mt-6 sm:mt-12 text-left">
                    {item.name}
                </h2>

                <div className="w-full pt-4">
                    <p className="lg:text-[14px] md:text-[13.132px] sm:text-[12.25px] text-[12.25px] tracking-widest text-[#ffb703] opacity-80 mb-1 uppercase">
                        DESIGNATION
                    </p>
                    <p className="lg:text-[15px] md:text-[14px] sm:text-[13.132px] text-[13.132px] text-white">
                        {item.designation}
                    </p>
                </div>
            </div>
        </div>


    );
};

export default CustomFacultyListCard;