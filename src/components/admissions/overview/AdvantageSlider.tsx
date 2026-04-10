// import React, { useState } from "react";
// import { advantageData } from "../../../data/admissions/overview/slider-data";

// const AdvantageSlider: React.FC = () => {
//   const [index, setIndex] = useState(0);

//   const next = () => {
//     if (index < advantageData.length - 2) setIndex(prev => prev + 1);
//   };

//   const prev = () => {
//     if (index > 0) setIndex(prev => prev - 1);
//   };

//   const SliderControls = () => (
//     <div className="flex space-x-3">
//       <button
//         onClick={prev}
//         className={`border border-white text-white cursor-pointer text-xl md:text-2xl
//         w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-md transition
//         ${index === 0
//             ? "opacity-50 cursor-not-allowed"
//             : "hover:bg-white hover:text-[#14457B]"
//           }`}
//         disabled={index === 0}
//       >
//         ‹
//       </button>

//       <button
//         onClick={next}
//         className={`border border-white text-white cursor-pointer text-xl md:text-2xl
//         w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-md transition
//         ${index >= advantageData.length - 2
//             ? "opacity-50 cursor-not-allowed"
//             : "hover:bg-white hover:text-[#14457B]"
//           }`}
//         disabled={index >= advantageData.length - 2}
//       >
//         ›
//       </button>
//     </div>
//   );

//   return (
//     <div className="w-full color_background_blue text-white py-12 md:py-16 px-4 md:px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* Heading + Buttons */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-12 gap-4">
//           <div className="max-w-4xl">
//             <h2 className="text-3xl md:text-5xl font-bold leading-tight">SRMU Advantage</h2>
//             <p className="mt-3 text-sm md:text-lg opacity-100 font-light">
//               SRMU builds the visionary leaders of tomorrow, promising holistic development,
//               and the stepping stones to global success.
//             </p>
//           </div>

//           <SliderControls />
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {advantageData.slice(index, index + 2).map((item) => (
//             <div
//               key={item.id}
//               className="bg-white text-black p-6 md:p-8 shadow-xl rounded-xl w-full"
//             >
//               <div className="flex gap-3 items-start">
//                 <img src={item.icon} alt={item.title} className="h-10 md:h-12" />
//                 <h2 className="text-xl md:text-2xl font-normal leading-snug">
//                   {item.title} <br />
//                   <span className="font-semibold text-xl md:text-2xl">{item.subtitle}</span>
//                 </h2>
//               </div>

//               <div className="mt-4 text-sm md:text-base leading-relaxed">
//                 <div
//                   className="opacity-80"
//                   dangerouslySetInnerHTML={{ __html: item.description }}
//                 />

//                 {item.extraText && (
//                   <div
//                     className="opacity-100 font-bold mt-3"
//                     dangerouslySetInnerHTML={{ __html: item.extraText }}
//                   />
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AdvantageSlider;



// import React, { useState } from "react";
// import { advantageData } from "../../../data/admissions/overview/slider-data";

// const AdvantageSlider: React.FC = () => {
//   const [index, setIndex] = useState(0);

//   const next = () => {
//     if (index < advantageData.length - 2) setIndex(prev => prev + 1);
//   };

//   const prev = () => {
//     if (index > 0) setIndex(prev => prev - 1);
//   };

//   const SliderControls = () => (
//     <div className="flex space-x-3">
//       <button
//         onClick={prev}
//         className={`border border-white text-white cursor-pointer text-xl md:text-2xl
//         w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-md transition
//         ${index === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-white hover:text-[#14457B]"}`}
//         disabled={index === 0}
//       >
//         ‹
//       </button>

//       <button
//         onClick={next}
//         className={`border border-white text-white cursor-pointer text-xl md:text-2xl
//         w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-md transition
//         ${index >= advantageData.length - 2
//             ? "opacity-50 cursor-not-allowed"
//             : "hover:bg-white hover:text-[#14457B]"}`}
//         disabled={index >= advantageData.length - 2}
//       >
//         ›
//       </button>
//     </div>
//   );

//   return (
//     <div className="w-full color_background_blue text-white py-12 md:py-16 px-4 md:px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-12 gap-4">
//           <div className="max-w-4xl">
//             <h2 className="text-3xl md:text-5xl font-bold leading-tight">SRMU Advantage</h2>
//             <p className="mt-3 text-sm md:text-lg opacity-100 font-light">
//               SRMU builds the visionary leaders of tomorrow, promising holistic development,
//               and the stepping stones to global success.
//             </p>
//           </div>

//           <SliderControls />
//         </div>

//         {/* Slider Wrapper */}
//         <div className="overflow-hidden w-full">

//           {/* Long sliding track */}
//           <div
//             className="flex transition-transform duration-500 ease-out"
//             style={{ transform: `translateX(-${index * 50}%)` }} // each slide = 50% width
//           >
//             {advantageData.map((item) => (
//               <div
//                 key={item.id}
//                 className="w-full md:w-1/2 flex-shrink-0 p-2"
//               >
//                 <div className="bg-white text-black p-6 md:p-8 shadow-xl rounded-xl h-full">
//                   <div className="flex gap-3 items-start">
//                     <img src={item.icon} alt={item.title} className="h-10 md:h-12" />
//                     <h2 className="text-xl md:text-2xl font-normal leading-snug">
//                       {item.title} <br />
//                       <span className="font-semibold text-xl md:text-2xl">{item.subtitle}</span>
//                     </h2>
//                   </div>

//                   <div className="mt-4 text-sm md:text-base leading-relaxed">
//                     <div
//                       className="opacity-80"
//                       dangerouslySetInnerHTML={{ __html: item.description }}
//                     />

//                     {item.extraText && (
//                       <div
//                         className="opacity-100 font-bold mt-3"
//                         dangerouslySetInnerHTML={{ __html: item.extraText }}
//                       />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default AdvantageSlider;




import React, { useEffect, useState } from "react";
import { advantageData } from "../../../data/admissions/overview/slider-data";
import Classes from "../../../utils/styles/Global.module.css";

const AdvantageSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2); // default desktop

  // set cardsPerView based on window width
  useEffect(() => {
    const getCards = () => (typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1);

    const handleResize = () => {
      const cpv = getCards();
      setCardsPerView(cpv);
    };

    // initial
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // clamp index whenever cardsPerView or data length changes
  useEffect(() => {
    const maxIndex = Math.max(0, advantageData.length - cardsPerView);
    if (index > maxIndex) setIndex(maxIndex);
  }, [cardsPerView, index]);

  const maxIndex = Math.max(0, advantageData.length - cardsPerView);

  const next = () => {
    if (index < maxIndex) setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  const SliderControls = () => (
    <div className="flex space-x-3">
      <button
        onClick={prev}
        className={`border-2 border-white text-white cursor-pointer text-2xl md:text-3xl 
          w-10 h-10 md:w-14 md:h-14 flex items-center justify-center  transition-all duration-500
          ${index === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#ffb703] "}`}
        disabled={index === 0}
      >
        ‹
      </button>

      <button
        onClick={next}
        className={`border-2 border-white text-white cursor-pointer text-2xl md:text-3xl 
          w-10 h-10 md:w-14 md:h-14 flex items-center justify-center transition-all duration-500
          ${index >= maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-[#ffb703]"}`}
        disabled={index >= maxIndex}
      >
        ›
      </button>
    </div>
  );

  // compute translate percentage depending on cardsPerView
  const translatePercent = index * (100 / cardsPerView);

  return (
    <div className="w-full color_background_blue text-white py-12 md:py-16 px-4 md:px-6">
      <div className={`${Classes["container"]}`}>
        {/* Heading + Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-12 gap-4">
          <div className="">
            <h2 className="lg:text-[50px] text-[28px] sm:text-[28px] md:text-[46.875px] fw600 leading-tight">SRMU Advantage</h2>
            <p className="mt-3 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]">
              SRMU builds the visionary leaders of tomorrow, promising holistic development,
              and the stepping stones to global success.
            </p>
          </div>

          <SliderControls />
        </div>

        {/* Slider Wrapper */}
        <div className="overflow-hidden w-full">
          {/* Long sliding track */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${translatePercent}%)` }}
          >
            {advantageData.map((item) => (
              <div key={item.id} className="w-full md:w-1/2 flex-shrink-0 p-2">
                <div className="bg-white text-black p-6 md:p-8 shadow-xl rounded-xl h-full">
                  <div className="flex gap-3 items-start">
                    <img src={item.icon} alt={item.title} className="h-10 md:h-12" />
                    <h2 className="lg:text-[22px] md:text-[20.625px] text-[19.25px] sm:text-[19.25px] leading-snug">
                      {item.title} <br />
                      <span className="lg:text-[22px] md:text-[20.625px] text-[19.25px] sm:text-[19.25px] fw500">{item.subtitle}</span>
                    </h2>
                  </div>

                  <div className="mt-4 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-relaxed">
                    <div className="opacity-80 text-justify" dangerouslySetInnerHTML={{ __html: item.description }} />

                    {item.extraText && (
                      <div className="opacity-100 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] fw500 font-bold mt-3" dangerouslySetInnerHTML={{ __html: item.extraText }} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageSlider;
