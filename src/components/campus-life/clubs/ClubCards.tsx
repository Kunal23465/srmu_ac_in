import React, { useState } from 'react'
import { cardclubCardsData } from '../../../data/campus-life/clubs/clubs-data';

import { MdArrowRightAlt, MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';



// @ts-ignore
const CustomModal = ({ selected, setSelected }) => {
  if (!selected) return null;
  const navigate = useNavigate();

  return (
    <>
      {/* BACKDROP */}
      <div className="backdrop-blur-sm bg-black/40 w-full h-screen fixed top-0 left-0 z-[900]"></div>

      {/* WRAPPER (prevents x-scroll) */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                z-[9999] w-[95%] max-w-[1000px]">

        {/* CLOSE BUTTON — outside modal but safe */}
        <span
          onClick={() => setSelected(null)}
          className="absolute -top-3 -right-3
                    flex justify-center items-center w-[35px] h-[35px]
                    bg-[#0f4a85] text-white rounded-full cursor-pointer shadow-lg"
        >
          <MdClose size={20} />
        </span>

        {/* MODAL BOX */}
        <div className="w-full max-h-[70vh] overflow-y-auto overflow-x-hidden
                    bg-white shadow-xl rounded-xl 
                    border-t-4 border-b-4 border-t-[#ffb703] border-b-[#0f4a85]
                    p-6 md:p-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* IMAGE */}
            <img
              src={selected.img}
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />

            {/* CONTENT */}
            <div>
              <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] font-bold text-[#063970] mb-3">
                {selected.title}
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                {selected.desc}
              </p>

              <button
                onClick={() => navigate("/contact-us")}
                className="bg-[#ffb703] fw500 border-2 uppercase
                                border-[#ffb703] hover:bg-transparent hover:text-[#ffb703]
                                inline-flex items-center px-3 py-1 rounded-lg text-sm text-black 
                                mt-5 group"
              >
                MORE INFO CONTACT US
                <span className="transition-all duration-200 group-hover:rotate-360">
                  <MdArrowRightAlt size={26} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


const ClubCards: React.FC = () => {
  const [selected, setSelected] = useState<any>(null);
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  return (
    <>
      <CustomModal selected={selected} setSelected={setSelected} />

      <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardclubCardsData.map((card, i) => {
          const isOpen = openCardIndex === i;

          return (
            <div
              key={i}
              onClick={() => toggleCard(i)}
              className="relative w-full h-50 sm:h-64 md:h-64 rounded-2xl overflow-hidden shadow-md group cursor-pointer border-2 border-transparent hover:border-yellow-400 transition-all duration-300"
            >
              <img
                src={card.img}
                className="w-full h-full object-cover transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500"></div>
              <div className="absolute w-full h-full top-0 left-0 bg-black/40"></div>

              <div
                className={`
                  absolute inset-0 flex flex-col items-center justify-center text-center px-2 py-4 sm:p-4 text-white
                  transition-all duration-500
                  ${isOpen ? "translate-y-5" : "translate-y-30"}
                  lg:group-hover:translate-y-5
                `}
              >
                <h2 className="text-sm sm:text-xl font-semibold mb-2">{card.title}</h2>

                <p
                  className={`
                    opacity-0 text-sm transition-all duration-500
                    ${isOpen ? "opacity-100" : "opacity-0"}
                    lg:group-hover:opacity-100
                  `}
                >
                  {card.desc.slice(0, 50)}...
                  <br />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(card);
                    }}
                    className="bg-[#ffb703] transition-all duration-500 uppercase fw500 border-2 border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] inline-flex items-center px-3 py-1 rounded-lg mt-3 text-sm text-black font-normal group max-w-[150px]"
                  >
                    Read More
                    <span className="transition-all duration-500">
                      <MdArrowRightAlt size={26} />
                    </span>
                  </button>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ClubCards;






















// import React, { useState } from 'react'
// import { cardclubCardsData } from '../../../data/campus-life/clubs/clubs-data';

// import { MdArrowRightAlt, MdClose } from 'react-icons/md';
// import { useNavigate } from 'react-router-dom';



// // @ts-ignore
// const CustomModal = ({ selected, setSelected }) => {
//     if (!selected) return null;
//     const navigate = useNavigate();
//     return (
//         <>
//             {/* BACKDROP */}
//             <div className="backdrop-blur-sm bg-black/40 w-full h-screen fixed top-0 left-0 z-[900]"></div>

//             {/* MODAL BOX */}
//             <div className="w-[95%] max-w-[1000px] fixed top-1/2 left-1/2 bg-white shadow-xl rounded-xl translate-x-[-50%] translate-y-[-50%] z-[9999] border-t-4 border-b-4 border-t-[#ffb703] border-b-[#0f4a85] p-6 md:p-10">
//                 {/* CLOSE */}
//                 <span
//                     onClick={() => setSelected(null)}
//                     className="flex justify-center items-center w-[30px] h-[30px] bg-[#0f4a85] text-white rounded-full absolute -top-3 -right-3 cursor-pointer shadow-md"
//                 >
//                     <MdClose size={18} />
//                 </span>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//                     {/* IMAGE */}
//                     <img
//                         src={selected.img}
//                         className="rounded-lg shadow-md w-full h-64 object-cover"
//                     />

//                     {/* CONTENT */}
//                     <div>
//                         <h2 className="text-3xl font-bold text-[#063970] mb-3">{selected.title}</h2>
//                         <p className="text-gray-700 leading-relaxed mb-6">{selected.desc}</p>

//                         <button onClick={() => navigate("/contact-us")} className="bg-[#ffb703] fw500  border-2 uppercase   border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] inline-flex gapx-x-1 items-center    px-3 py-1 rounded-lg text-nowrap mt-5 sm:mt-0  group  text-sm text-black font-normal"
//                         >
//                             MORE INFO CONTACT US <span className="transition-all duration-200  group-hover:rotate-[360deg]">
//                                 <MdArrowRightAlt size={26} />
//                             </span>{" "}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };


// const ClubCards: React.FC = () => {
//     const [selected, setSelected] = useState(null);

//     return (
//         <>
//             <CustomModal selected={selected} setSelected={setSelected} />

//             <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {cardclubCardsData.map((card, i) => (
//                     <div
//                         key={i}
//                         // @ts-ignore
//                         onClick={() => setSelected(card)}
//                         className="relative w-full h-64 sm:h-64 md:h-64 rounded-2xl overflow-hidden shadow-md group cursor-pointer border-2 border-transparent hover:border-yellow-400 transition-all duration-300"
//                     >
//                         {/* IMAGE */}
//                         <img
//                             src={card.img}
//                             className="w-full h-full object-cover transition-transform duration-500"
//                         />

//                         {/* HOVER OVERLAY */}
//                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500"></div>

//                         {/* TEXT CONTENT */}
//                         <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-white">
//                             <h2 className="text-xl font-semibold mt-auto mb-2 sm:mt-auto">
//                                 {card.title}
//                             </h2>
//                             <p className="opacity-0 group-hover:opacity-100 text-sm transition-opacity duration-500">
//                                 {card.desc.slice(0, 50)}...
//                             </p>

//                             <button className="bg-[#ffb703] uppercase fw500 border-2 border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] inline-flex items-center px-3 py-1 rounded-lg mt-3 text-sm text-black font-normal group max-w-[150px]">
//                                 Read More
//                                 <span className="transition-all duration-200 ">
//                                     <MdArrowRightAlt size={26} />
//                                 </span>
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };


// export default ClubCards;