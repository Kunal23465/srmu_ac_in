import React, { useState } from "react";
import "./FlipCards.css"; // Custom CSS file

interface CardItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Props {
  data: CardItem[];
}

const FlipCards: React.FC<Props> = ({ data }) => {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const handleFlip = (id: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-full perspective"
          onClick={() => handleFlip(item.id)}
        >
          <div className={`flip-card ${flippedCards[item.id] ? "flipped" : ""}`}>
            {/* Front */}
            <div className="flip-card-front">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl" />
              <div className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-md">
                {item.title}
              </div>
            </div>

            {/* Back */}
            <div className="flip-card-back">
              <h2 className="text-2xl font-semibold mb-3 text-center">
                {item.title}
              </h2>
              <p className="text-center text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCards;
