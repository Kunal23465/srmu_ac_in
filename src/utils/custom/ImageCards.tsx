import React from 'react';
import { CardData } from '../../data/admissions/overview/admission-overview-data';
import { Link } from 'react-router-dom';

interface CardProps {
    card: CardData;
}

const ImageCards: React.FC<CardProps> = ({ card }) => {
    return (
        <>
            <div

                className="block w-full h-full rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
                <div className="relative w-full h-full">
                    <img
                        src={card.imageUrl}
                        alt={card.imageAlt}
                        className="w-full md:w-full h-[430px] md:h-full  object-cover"
                    />

                    <Link
                        to={card.linkTo}
                        className=" absolute bottom-5  left-5 cursor-pointer bg-amber-400
                        w-[180px] sm:w-[200px] md:w-45
                    p-4 md:p-6
                    rounded-tr-2xl rounded-tl-2xl rounded-br-2xl text-gray-800">
                        <div className="flex flex-row  md:flex-col gap-1 md:gap-0 items-end  md:items-start">

                        <p className="lg:text-[22px] mt-[10px] text-[19.25px] md:text-[20.625px]   fw500  leading-tight">
                            {card.title}
                        </p>

                        <p className="lg:text-[22px] text-[19.25px] md:text-[20.625px] fw500  leading-tight">
                            {card.subtitle.replace(/\*/g, '')}
                        </p>

                    </div>

                    <span className="block text-4xl font-bold -mb-[8px]  md:mt-2">→</span>
                </Link>

            </div>
        </div >
        </>
    );
};

export default ImageCards;
