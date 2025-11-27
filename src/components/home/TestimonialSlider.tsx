import { useState } from "react";
import Slider from "react-slick";
import { hometestimonial } from "../../data/home/student-testimonialhome-data";
import quote from "../../assets/images/home/quote.png"
import Classes from "../../utils/styles/Global.module.css";
const NextArrow = ({ onClick }: any) => (
    <button
        onClick={onClick}
        className="
            absolute 
            right-0 
            top-[20rem]
            bg-white shadow-lg w-15 h-15 flex items-center justify-center 
            rounded-full border border-gray-200 hover:bg-gray-50 z-10 cursor-pointer
        "
    >
        <span className="text-xl text-gray-700">›</span>
    </button>
);

const PrevArrow = ({ onClick }: any) => (
    <button
        onClick={onClick}
        className="
            absolute 
            left-0 
            top-[20rem]
            bg-white shadow-lg w-15 h-15 flex items-center justify-center  
            rounded-full border border-gray-200 hover:bg-gray-50 z-10 cursor-pointer
        "
    >
        <span className="text-xl text-gray-700">‹</span>
    </button>
);




const TestimonialSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 7,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (_: any, next: number) => setActiveIndex(next),
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 5 } },
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="py-20 bg-[#f7f9ff] flex flex-col items-center">
            <h2 className="font36 fw600 mb-12 text-center">
                Student Testimonials
            </h2>

            <div className={`relative ${Classes["container"]}`}>
                <Slider {...settings}>
                    {hometestimonial.map((item, index) => {

                        //  const isSecondImage = (activeSlide + 1) % images.length === index;

                        return (
                            <div key={item.id} className="flex justify-center px-0.5 ">
                                <div
                                    className={`rounded-full transition-all duration-300 overflow-hidden border-4 w-[168px] h-[168px] ${activeIndex === index
                                        ? "border-[#3A6EFF] scale-100 shadow-lg"
                                        : "border-gray-300"
                                        }`}

                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>


            <div className="max-w-3xl mx-auto text-center">
                <div className="flex justify-center">
                    <img src={quote} />
                </div>

                <h3 className="font21 fw600">
                    {hometestimonial[activeIndex].name}
                </h3>

                <p className="text-[#00000099] text-sm">
                    {hometestimonial[activeIndex].batch}
                </p>

                <p className="mt-4 text-[#00000099] leading-relaxed font19">
                    {hometestimonial[activeIndex].text}
                </p>

                <button className="mt-8 bg-[#023047] text-white px-6 py-3 rounded-md cursor-pointer text-sm font-medium hover:bg-white hover:text-[#023047] hover:border-1 hover:border-[#023047]  flex items-center justify-center mx-auto">
                    VIEW ALL TESTIMONIALS →
                </button>
            </div>
        </div>
    );
};

export default TestimonialSlider;
