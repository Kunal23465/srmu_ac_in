import React, { useState } from "react";
import { MdClose } from "react-icons/md";

type CustomCardProps = {
    image: string;
    name: string;
    title: string;
    desc: string;
    fullDesc: string;
};

const CustomAlumniCard: React.FC<CustomCardProps> = ({
    image,
    name,
    title,
    desc,
    fullDesc,
}) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            {/* CARD */}
            <div className="relative w-[400px] h-[450px] rounded-xl overflow-hidden shadow-md group cursor-pointer bg-white">

                {/* Base image */}
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-top  transition-all duration-300"
                />

                {/* Bottom overlay initial */}
                <div
                    className="
                        absolute bottom-8 left-0 
                        w-[80%] p-4 
                        bg-black/60 text-white 
                        transition-all duration-300
                        clip-slanted
                    "
                >
                    <h3 className="text-xl font-semibold">{name}</h3>

                    <p
                        className="
                            opacity-90 
                            line-clamp-2 
                            mr-3
                            min-h-[2.6rem]
                        "
                    >
                        {title}
                    </p>
                </div>

                {/* Hover bubbling layer */}
                {/* Hover bubbling layer */}
                <div className="absolute inset-0 overflow-hidden flex justify-center items-center pointer-events-none">

                    {/* WHITE BUBBLE BACKGROUND */}
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

                    {/* TEXT: fades in DURING bubble growing */}
                    <div
                        className="
            relative z-10
            opacity-0 
            scale-95
            transition-all 
            duration-500
            delay-[50ms]          /* Start appearing DURING animation */
            group-hover:opacity-100 
            group-hover:scale-100
            text-center p-6
            text-center
            mx-6
            pointer-events-auto
        "
                    >
                        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                        <p className="text-gray-700 text-[14px] mt-1">{title}</p>

                        <p className="text-gray-700 mt-4 text-[15px]">
                            {desc}{" "}
                            <span
                                className="underline font-semibold cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenModal(true);
                                }}
                            >
                                Read More
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            {openModal && (
        
                <>
                    <div className="backdrop-blur-sm bg-white/15 w-full h-screen fixed top-0 left-0 z-[999]"></div>
                    <div className="w-[90%]  max-w-[700px] xl:max-w-[1000px]  fixed top-[50%] left-[50%] border-t-4 border-b-4 border-t-[#ffb703] border-b-[#0f4a85] bg-white translate-x-[-50%] translate-y-[-50%] z-[9999]">
                        <div className="max-h-[650px] faculty-card-scrollbar overflow-y-auto px-5 py-10">
                            <span
                                onClick={() => setOpenModal(false)}
                                className="flex justify-center items-center min-w-[25px] min-h-[25px] bg-[#0f4a85] text-white shadow-md rounded-full absolute -top-[10px] -right-[10px] cursor-pointer"
                            >
                                <MdClose size={18} />
                            </span>

                            <h2 className="text-xl font-semibold mb-1">{name}</h2>
                            <p className=" text-gray-700 my-4 text-yellow-500">{title}</p>

                            <p className="text-gray-700 leading-relaxed">{fullDesc}</p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default CustomAlumniCard;
