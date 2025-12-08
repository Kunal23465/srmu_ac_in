import React from "react";
import { echocardType } from "../../../data/campus-life/green-initiative/green-initiative-data";

interface propstype {
    data: echocardType[]
}

const EcoCards: React.FC<propstype> = ({ data }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 py-12 mb-6">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="group border-2 border-[#f6b800] rounded-[28px] p-6 bg-white transition-all duration-300 hover:bg-[#0f4a85]"
                >
                    {/* Image */}
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[220px] object-cover rounded-[28px] mb-4"
                    />

                    {/* Title */}
                    <h3 className="text-[#01334d] font-bold text-[22px] mb-3 transition-all duration-300 group-hover:text-[#ffb703]">
                        {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#01334d] leading-relaxed text-[15px] transition-all duration-300 group-hover:text-white">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default EcoCards;
