import React from 'react';
import { CardData } from '../../data/admissions/overview/admission-overview-data';

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
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-5 left-5 bg-amber-400 p-6 w-40 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl text-gray-800">
                        <p className="text-3-4xl font-bold whitespace-normal leading-tight">{card.title}</p>
                        <p className="text-3-4xl font-bold whitespace-normal leading-tight">{card.subtitle.replace(/\*/g, '')}</p>

                        <span className="block text-4xl font-bold">→</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageCards;
