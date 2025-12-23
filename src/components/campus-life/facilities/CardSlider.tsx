import React from 'react';
import { FacilityCard } from '../../../data/campus-life/facilities/facilities-data';

interface CardSliderProps extends FacilityCard {
    className?: string;
}

const CardSlider: React.FC<CardSliderProps> = ({ imageUrl, title, description, className }) => (
    <div className={`flex-shrink-0 w-[85vw] sm:w-[50vw] md:w-[45%] lg:w-[32%] p-1 ${className || ''}`}>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-2 hover:border-[#ffb703] cursor-pointer h-full overflow-hidden">
            <div className="relative h-60 w-full">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover rounded-t-xl"
                    onError={(e) => {
                        e.currentTarget.src =
                            'https://placehold.co/400x250/cccccc/000000?text=Image+Missing';
                    }}
                    loading="lazy"
                />
            </div>
            <div className="p-6">
                <h3 className="lg:text-[22px] sm:text-[19.5px] text-[19.5px] md:text-[20.625px]  fw500 text-[#0f4a85] mb-3">{title}</h3>
                <span className=" leading-relaxed font-thin text-[15px] lg:text-[16px] md:text-[15px] sm:text-[15px] text-black" dangerouslySetInnerHTML={{ __html: description }}></span>
            </div>
        </div>
    </div>
);

export default CardSlider;
