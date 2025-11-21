import React from "react";

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="group w-full h-[480px] [perspective:1000px]"
        >
          <div
            className="
              flip-card
              relative w-full h-full cursor-pointer rounded-2xl shadow-lg
              group-hover:[transform:rotateY(180deg)]
            "
          >
            {/* Front */}
            <div className="flip-card-face absolute inset-0 rounded-2xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-md">
                {item.title}
              
              </div>
            </div>

            {/* Back */}
            <div
              className="
                flip-card-face absolute inset-0 flex flex-col justify-center
                items-center bg-white p-6 rounded-2xl shadow-lg
              "
              style={{ transform: "rotateY(180deg)" }}
            >
              <h2 className="font26 fw500 mb-3  text-center">
                {item.title}
              </h2>
              <p className=" text-center font17 leading-relaxed">
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
