import React from "react";

export interface FacultyItem {
    id: number;
    name: string;
    designation: string;
    image: string;
    cardBgColor?: string;
}

interface CardListProps {
    data: FacultyItem[];
}

const CustomFacultyListCard: React.FC<CardListProps> = ({ data }) => {
    return (
        <div className="flex gap-6 flex-wrap justify-center">
            {data.map((faculty) => (
                <div
                    key={faculty.id}
                    className="w-75 rounded-xl cursor-pointer overflow-hidden p-6 border-1/2 border-[#ffb703] shadow-xl transition-transform duration-300 hover:-translate-y-2"
                    style={{
                        backgroundColor: faculty.cardBgColor || "black",
                    }}
                >
                    <div className="w-full flex justify-center">
                        <div className="w-50 h-50 rounded-full overflow-hidden mb-8 bg-white">
                            <img
                                src={faculty.image}
                                alt={faculty.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <h2 className="font18 text-[#ffb703] mt-12 text-left">
                        {faculty.name}
                    </h2>

                    <div className="w-full pt-4 ">
                        <p className="font14 tracking-widest text-[#ffb703] opacity-80 mb-1 uppercase">
                            DESIGNATION
                        </p>
                        <p className="font15 text-white">
                            {faculty.designation}
                        </p>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default CustomFacultyListCard;
