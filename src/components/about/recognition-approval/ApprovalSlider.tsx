// import React, { useRef } from "react";
// import Slider from "react-slick";
// import { FaFilePdf } from "react-icons/fa";


// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { approvalData } from "../../../data/about/recognition-approval/recognitionApprovalsData";
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

// const ApprovalsSlider = () => {
//     const sliderRef = useRef<Slider | null>(null);

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 600,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: false,
//         responsive: [
//             { breakpoint: 1024, settings: { slidesToShow: 2 } },
//             { breakpoint: 768, settings: { slidesToShow: 1 } },
//         ],
//     };

//     return (
//         <>
//             <section className="bg-[#ffb703] pt-16 pb-[300px] relative overflow-visible">
//                 <div className="max-w-7xl mx-auto px-4 relative">
//                     {/* Heading */}
//                     <div className="text-left mb-10">
//                         <h2 className="text-4xl font-bold text-black mb-4">Approvals</h2>
//                         <p className="text-black max-w-3xl">
//                             The Uttar Pradesh State Legislature established SRMU as a full-fledged
//                             university, and it is included among the list of universities that the
//                             University Grants Commission maintains under Section 2(f), with the
//                             authority to award degrees in accordance with Section 22(1) of the UGC Act,
//                             1956. SRMU has received permissions and recognition from Statutory Bodies
//                             wherever they are necessary or required.
//                         </p>
//                     </div>

//                     {/* Slider container */}
//                     <div className="relative">
//                         {/* Slider box that overlaps */}
//                         <div className="absolute left-0 w-full top-12">
//                             <Slider ref={sliderRef} {...settings}>
//                                 {approvalData.map((item) => (
//                                     <div key={item.id} className="px-3">
//                                         <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center min-h-[380px] hover:shadow-xl transition-all">
//                                             <img
//                                                 src={item.logo}
//                                                 alt={item.title}
//                                                 className="h-20 object-contain mb-4"
//                                             />
//                                             <h3 className="text-lg font-bold text-gray-800 mb-1">
//                                                 {item.title}
//                                             </h3>
//                                             <p className="text-gray-600 font-semibold mb-3">
//                                                 {item.subtitle}
//                                             </p>
//                                             <p className="text-gray-500 text-sm mb-6">
//                                                 {item.description}
//                                             </p>

//                                             <a
//                                                 href={item.pdfLink}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="flex items-center justify-center gap-2 border border-yellow-400 text-blue-900 bg-yellow-100 hover:bg-yellow-500 hover:text-white font-semibold px-4 py-2 rounded-md transition-all"
//                                             >
//                                                 <FaFilePdf size={18} />
//                                                 DOWNLOAD PDF
//                                             </a>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </Slider>


//                         </div>
//                         {/* Navigation Buttons */}
//                         <div className="absolute top-[-175px] right-4 flex gap-3">
//                             <button
//                                 onClick={() => sliderRef.current?.slickPrev()}
//                                 className="w-14 h-14 border border-black rounded-full flex items-center justify-center   transition"
//                             >
//                                 <BiChevronLeft size={22} />
//                             </button>
//                             <button
//                                 onClick={() => sliderRef.current?.slickNext()}
//                                 className="w-14 h-14 border border-black rounded-full flex items-center justify-center   transition"
//                             >
//                                 <BiChevronRight size={22} />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <div className="h-[160px] mt-10 "></div>
//         </>

//     );

// };

// export default ApprovalsSlider;





import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { FaFilePdf } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { approvalData } from "../../../data/about/recognition-approval/recognitionApprovalsData";

const ApprovalsSlider = () => {
    const sliderRef = useRef<Slider | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = approvalData.length;

    const settings = {
        dots: false,
        infinite: false, // ❌ stop looping
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (_: number, next: number) => setCurrentSlide(next),
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    // 🔍 Determine when to disable arrows
    const isAtStart = currentSlide === 0;
    const isAtEnd =
        currentSlide >= totalSlides - (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);

    return (
        <>
            <section className="bg-[#ffb703] pt-16 pb-[300px] relative overflow-visible">
                <div className="max-w-7xl mx-auto px-4 relative">
                    {/* Heading */}
                    <div className="text-left mb-10">
                        <h2 className="text-4xl font-bold text-black mb-4">Approvals</h2>
                        <p className="text-black max-w-3xl">
                            The Uttar Pradesh State Legislature established SRMU as a full-fledged
                            university, and it is included among the list of universities that the
                            University Grants Commission maintains under Section 2(f), with the
                            authority to award degrees in accordance with Section 22(1) of the UGC Act,
                            1956. SRMU has received permissions and recognition from Statutory Bodies
                            wherever they are necessary or required.
                        </p>
                    </div>

                    {/* Slider container */}
                    <div className="relative">
                        {/* Slider box that overlaps */}
                        <div className="absolute left-0 w-full top-12">
                            <Slider ref={sliderRef} {...settings}>
                                {approvalData.map((item) => (
                                    <div key={item.id} className="px-3 pb-[135px]">
                                        <div className="bg-white shadow-lg shadow-gray-400/40 rounded-2xl p-6 flex flex-col items-center text-center min-h-[380px]  transition-all duration-300">
                                            <img
                                                src={item.logo}
                                                alt={item.title}
                                                className="h-20 object-contain mb-4"
                                            />
                                            <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
                                            <p className="text-gray-600 font-semibold mb-3">{item.subtitle}</p>
                                            <p className="text-gray-500 text-sm mb-6">{item.description}</p>

                                            <a
                                                href={item.pdfLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 border border-yellow-400 text-blue-900 bg-yellow-100 hover:bg-yellow-500 hover:text-white font-semibold px-4 py-2 rounded-md transition-all"
                                            >
                                                <FaFilePdf size={18} />
                                                DOWNLOAD PDF
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute top-[-175px] right-4 flex gap-3">
                            <button
                                onClick={() => sliderRef.current?.slickPrev()}
                                disabled={isAtStart}
                                className={`w-14 h-14 border border-black rounded-full flex items-center justify-center transition ${isAtStart ? "opacity-40 cursor-not-allowed" : ""
                                    }`}
                            >
                                <BiChevronLeft size={22} />
                            </button>

                            <button
                                onClick={() => sliderRef.current?.slickNext()}
                                disabled={isAtEnd}
                                className={`w-14 h-14 border-1 border-black rounded-full flex items-center justify-center transition ${isAtEnd ? "opacity-40 cursor-not-allowed" : ""
                                    }`}
                            >
                                <BiChevronRight size={22} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="h-[160px] mt-10 "></div>
        </>
    );
};

export default ApprovalsSlider;
