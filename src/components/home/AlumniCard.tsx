
import React from "react";

type CustomCardProps = {
    image?: string; 
    name: string;
    title: string;
    desc: string; 
    fullDesc: string;
};

const AlumniCard: React.FC<CustomCardProps> = ({
    image,
    name,
    title,
    desc,
    fullDesc,
}) => {
 

    if (!image) {
        return (
            <div className="
                relative w-full h-[27.5rem] 
                rounded-xl shadow-md cursor-pointer 
                bg-white text-black p-8
                flex flex-col justify-center
                border border-white/50
            ">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-sm font-medium mb-4">{title}</p>
                <p className="text-md leading-relaxed line-clamp-[10] opacity-90">{desc} ...</p>
            </div>
        );
    }

    return (
        <>
            <div className="relative w-full h-[27.5rem] rounded-xl overflow-hidden shadow-md group cursor-pointer bg-white">

                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-top object-cover transition-all duration-300 group-hover:scale-105"
                />

                <div
                    className="
                        absolute bottom-2 left-0 
                        w-[90%] px-2 py-1
                        bg-black/60 text-white 
                        transition-all duration-300
                        
                        /* NOTE: The 'clip-slanted' class is not standard Tailwind. 
                           I'm omitting it but styling the box. You'd need a custom utility 
                           or inline style to achieve the exact slanted look. */
                    "
                    style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}
                >
                    <p className="text-md font-semibold">{name}</p>

                    <p
                        className=" text-xs
                            opacity-90 
                            line-clamp-2 
                            min-h-[2.6rem]
                        "
                    >
                        {title}
                    </p>
                </div>

                
                <div className="absolute inset-0 overflow-hidden flex justify-center items-center pointer-events-none">

                    <div
                        className="
                            absolute inset-[12px]
                            bg-white 
                            rounded-xl
                            scale-0
                            transition-transform duration-700 ease-out
                            group-hover:scale-100
                        "
                    ></div>

                    <div
                        className="
                            relative z-10
                            opacity-0 
                            scale-95
                            transition-all 
                            duration-500
                            delay-[50ms] 
                            group-hover:opacity-100 
                            group-hover:scale-100
                            text-center p-6
                            mx-6
                            text-black // Text color for the hover state
                            pointer-events-auto
                        "
                    >
                        <h2 className="text-xl font-bold mb-2">{name}</h2>
                        <p className="text-sm mb-4">{title}</p>

                        <p className="text-xs leading-relaxed line-clamp-[15]">{fullDesc}</p>
                    </div>
                </div> 
                
                
            </div>
        </>
    );
};

export default AlumniCard;