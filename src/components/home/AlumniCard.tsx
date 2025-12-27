import React, { useState } from "react";

type CustomCardProps = {
  image?: string;
  name: string;
  title: string;
  desc: string;
  fullDesc: string;
};

const AlumniCard: React.FC<CustomCardProps> = ({ image, name, title, desc, fullDesc }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    // Only enable tap toggle for mobile/tablet
    if (window.innerWidth < 1024) {
      setShowDetails((prev) => !prev);
    }
  };

  // CARD WITHOUT IMAGE
  if (!image) {
    return (
      <div
        onClick={() => setShowDetails(!showDetails)}
        className="
                    relative w-full h-[27.5rem]
                    rounded-xl shadow-md cursor-pointer
                    bg-white text-black p-8
                    flex flex-col justify-center
                    border border-white/50
                "
      >
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-sm font-medium mb-4">{title}</p>
        <p className="text-md leading-relaxed line-clamp-[10] opacity-90">{desc} ...</p>
      </div>
    );
  }

  // CARD WITH IMAGE
  return (
    <div
      onClick={toggleDetails}
      className="
                relative w-full h-[27.5rem]
                rounded-xl overflow-hidden shadow-md
                group cursor-pointer bg-white
            "
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={name}
        className="
                    w-full h-full object-top object-cover
                    transition-all duration-300
                   
                "
      />

      {/* NAME + TITLE BOTTOM LABEL */}
      <div
        className="
                    absolute bottom-2 left-0
                    w-[90%] px-2 py-1
                    bg-black/60 text-white
                    transition-all duration-300
                "
        style={{
          clipPath: "polygon(0 0, 94% 0, 100% 100%, 0% 100%)",
        }}
      >
        <p className="text-md font-semibold">{name}</p>
        <p
          className="
                        text-xs opacity-90
                        line-clamp-2 min-h-[2.6rem]
                    "
        >
          {title}
        </p>
      </div>

      {/* CONTENT WRAPPER (hover + mobile tap) */}
      <div className="absolute inset-0 overflow-hidden flex justify-center items-center">
        {/* WHITE BACKDROP */}
        <div
          className={`
                        absolute top-0 left-0 inset-[12px]
                        bg-white w-full h-[27.5rem]  rounded-xl
                        transition-transform duration-700 ease-out
                        group-hover:scale-100
                        ${showDetails ? "scale-100" : "scale-0"}
                    `}
        ></div>

        {/* DETAILS */}
        <div
          className={`
                        relative z-10 p-6 text-black text-center
                        transition-all duration-500 delay-[50ms]
                        group-hover:opacity-100 group-hover:scale-100
                        ${showDetails ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                    `}
        >
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-sm mb-4">{title}</p>

          <p className="text-xs leading-relaxed line-clamp-[15]">{fullDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
