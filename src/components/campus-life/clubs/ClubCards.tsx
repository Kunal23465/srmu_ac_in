import React, { useState } from 'react'
import { cardclubCardsData } from '../../../data/campus-life/clubs/clubs-data';

import { MdArrowRightAlt, MdClose } from 'react-icons/md';



// @ts-ignore
const CustomModal = ({ selected, setSelected }) => {
    if (!selected) return null;

    return (
        <>
            {/* BACKDROP */}
            <div className="backdrop-blur-sm bg-black/40 w-full h-screen fixed top-0 left-0 z-[900]"></div>

            {/* MODAL BOX */}
            <div className="w-[95%] max-w-[1000px] fixed top-1/2 left-1/2 bg-white shadow-xl rounded-xl translate-x-[-50%] translate-y-[-50%] z-[9999] border-t-4 border-b-4 border-t-[#ffb703] border-b-[#0f4a85] p-6 md:p-10">
                {/* CLOSE */}
                <span
                    onClick={() => setSelected(null)}
                    className="flex justify-center items-center w-[30px] h-[30px] bg-[#0f4a85] text-white rounded-full absolute -top-3 -right-3 cursor-pointer shadow-md"
                >
                    <MdClose size={18} />
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* IMAGE */}
                    <img
                        src={selected.img}
                        className="rounded-lg shadow-md w-full h-64 object-cover"
                    />

                    {/* CONTENT */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#063970] mb-3">{selected.title}</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">{selected.desc}</p>

                        <button className="bg-[#ffb703]  border-2 uppercase   border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] inline-flex gapx-x-1 items-center    px-3 py-1 rounded-lg text-nowrap mt-5 sm:mt-0  group  text-sm text-black font-normal"
                        >
                            MORE INFO CONTACT US <span className="transition-all duration-200  group-hover:rotate-[360deg]">
                                <MdArrowRightAlt size={26} />
                            </span>{" "}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};


const ClubCards: React.FC = () => {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <CustomModal selected={selected} setSelected={setSelected} />

            <div className="w-[65%] grid grid-cols-3 gap-y-6 gap-x-2" >
                {cardclubCardsData.map((card, i) => (
                    <div
                        key={i}
                        // @ts-ignore
                        onClick={() => setSelected(card)}
                        className="relative h-64 rounded-2xl overflow-hidden shadow-md group cursor-pointer  border-transparent hover:border-yellow-400 border-2 transition-all duration-300"
                    >
                        <img
                            src={card.img}
                            className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-500"
                        />

                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> */}
                        <div className="absolute inset-0  group-hover:bg-black/70 transition-all duration-500"></div>

                        {/* TEXT */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-white">
                            <h2 className="text-xl font-semibold mt-[270px] group-hover:mt-[80px] transition-all duration-500">
                                {card.title}
                            </h2>

                            <p className="opacity-0 group-hover:opacity-100 text-sm mt-auto mb-6 transition-all duration-500">
                                {card.desc.slice(0, 50)}...
                            </p>

                            <button
                                className="bg-[#ffb703]  border-2 uppercase   border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] inline-flex gapx-x-1 items-center    px-3 py-1 rounded-lg text-nowrap mt-5 sm:mt-0  group max-w-[150px] text-sm text-black font-normal"
                            >
                                Read More
                                <span className="transition-all duration-200  group-hover:rotate-[360deg]">
                                    <MdArrowRightAlt size={26} />
                                </span>{" "}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ClubCards;