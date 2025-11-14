import React from "react";
import Classes from "../../utils/styles/Global.module.css";
import banner4 from "../../assets/images/home/banner-bg.jpg";
import { bannerData } from "../../data/home/bannerData";
import Slider from "react-slick";
import { FaArrowLeftLong } from "react-icons/fa6";

// import { MdArrowRightAlt } from "react-icons/md";
// import { Link } from "react-router-dom";
// Slick slider settings

const Banner: React.FC = () => {
    const sliderRef = React.useRef<Slider>(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        
        autoplaySpeed: 2000,     
        pauseOnHover: true,      
    };

    return (
        <div className={`w-full relative`}>
            {/* Heading Section */}

            {/* Facilities Slider */}
            <Slider ref={sliderRef} {...settings} className="manage-academis">
                <div className="banner-slider overflow-hidden relative ">
                    <div className="relative">
                        <img className="w-full min-h-[530px] sm:min-h-[600px] md:min-h-[800px] max-h-[calc(100vh-120px)] object-cover" src={banner4} alt="Banner" />

                        <div className="overlay bg-[#0000004d] absolute top-0 left-0 w-full h-full flex pt-10 sm:pt-0 items-center ">
                            <div className={Classes["container"]}>
                                <div className="content-part max-w-[700px]  px-5 py-5 md:py-10 rounded-tl-[50px] transition-all ease-in-out duration-300 rounded-br-[50px] hover:rounded-tl-none hover:rounded-br-none  hover:rounded-tr-[50px] hover:rounded-bl-[50px]">
                                    <h3 className="lg:text-[21px] text-white font-medium">{bannerData.title}</h3>
                                    {bannerData.subtitle.map((line, index) => (
                                        <h2 key={index} className="text-4xl  text-white font-bold  mt-4">
                                            {line}
                                        </h2>
                                    ))}
                                    <p className="text-xl text-white  mt-3">{bannerData.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-slider overflow-hidden relative ">
                    <div className="relative">
                        <img className="w-full min-h-[530px] sm:min-h-[600px] md:min-h-[800px] max-h-[calc(100vh-120px)] object-cover" src={banner4} alt="Banner" />

                        <div className="overlay bg-[#0000004d] absolute top-0 left-0 w-full h-full flex pt-10 sm:pt-0 items-center ">
                            <div className={` ${Classes["container"]}`}>
                                <div className="content-part max-w-[700px]  px-5 py-5 md:py-10 rounded-tl-[50px] transition-all ease-in-out duration-300 rounded-br-[50px] hover:rounded-tl-none hover:rounded-br-none  hover:rounded-tr-[50px] hover:rounded-bl-[50px]">
                                    <h3 className="lg:text-[21px] text-white font-medium">{bannerData.title}</h3>
                                    {bannerData.subtitle.map((line, index) => (
                                        <h2 key={index} className="text-4xl  text-white font-bold  mt-4">
                                            {line}
                                        </h2>
                                    ))}
                                    <p className="text-xl text-white  mt-3">{bannerData.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-slider overflow-hidden relative ">
                    <div className="relative">
                        <img className="w-full min-h-[530px] sm:min-h-[600px] md:min-h-[800px] max-h-[calc(100vh-120px)] object-cover" src={banner4} alt="Banner" />

                        <div className="overlay bg-[#0000004d] absolute top-0 left-0 w-full h-full flex pt-10 sm:pt-0 items-center ">
                            <div className={Classes["container"]}>
                                <div className="content-part max-w-[700px]  px-5 py-5 md:py-10 rounded-tl-[50px] transition-all ease-in-out duration-300 rounded-br-[50px] hover:rounded-tl-none hover:rounded-br-none  hover:rounded-tr-[50px] hover:rounded-bl-[50px]">
                                    <h3 className="lg:text-[21px] text-white font-medium">{bannerData.title}</h3>
                                    {bannerData.subtitle.map((line, index) => (
                                        <h2 key={index} className="text-4xl  text-white font-bold  mt-4">
                                            {line}
                                        </h2>
                                    ))}
                                    <p className="text-xl text-white  mt-3">{bannerData.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>

            <div className={`flex justify-end space-x-2 absolute bottom-[10%] w-full border-2 left-[50%] -translate-x-[50%]   ${Classes["container"]} `}>
                {/* <button onClick={() => sliderRef.current?.slickPrev()}>11</button>
              <button onClick={() => sliderRef.current?.slickNext()}>22</button> */}
                <ArrowButton onClick={() => sliderRef.current?.slickPrev()} direction="prev" colorCode={"[#000000]"} />
                <ArrowButton onClick={() => sliderRef.current?.slickNext()} direction="next" colorCode={"[#000000]"} />
            </div>
        </div>
    );
};

export default Banner;

export const ArrowButton = ({ onClick, direction, colorCode }: { onClick: () => void; direction: "prev" | "next"; colorCode: string }) => (
    <>


        <button onClick={onClick} >
            <FaArrowLeftLong className={`text-${colorCode} w-9 h-9 ${direction === "next" ? "transform rotate-180" : ""} text-white `} />
        </button>


    </>
);


