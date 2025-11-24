import React from "react";
import Classes from "../../utils/styles/Global.module.css";
import banner4 from "../../assets/images/home/banner-bg.jpg";

import Slider from "react-slick";

import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from "react-icons/lia";

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
        // autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <div className={`w-full relative overflow-hidden`}>
            {/* Heading Section */}

            {/* Facilities Slider */}
            <Slider ref={sliderRef} {...settings} className="manage-academis">
                <div className="banner-slider overflow-hidden relative ">
                    <div className="relative">
                        <img className="w-full min-h-[530px] sm:min-h-[600px] md:min-h-[800px] max-h-[calc(100vh-120px)] object-cover" src={banner4} alt="Banner" />

                        <div className="overlay bg-[#0000004d] absolute top-0 left-0 w-full h-full flex pt-10 sm:pt-0 items-center ">
                            <div className={Classes["container"]}>
                                <div className=" text-white px-5 py-5 md:py-10 rounded-tl-[50px] transition-all ease-in-out duration-300 rounded-br-[50px] hover:rounded-tl-none hover:rounded-br-none  hover:rounded-tr-[50px] hover:rounded-bl-[50px]">
                                    <div className="text-[20px] mb-4 " >Cheers to Success!!</div>
                                    <div className="text-[32px] lg:text-[46px] xl:text-[52px] font-medium leading-[1.2] mb-4" >Now, SRMU is <br /> ISO 9001, ISO 14001, and ISO 50001 certified organization</div>
                                    <div className="text-[21px]" >Certified Excellence: Our Commitment to Quality and Standards</div>

                                    <div className="mt-10">
                                        <button className="bg-[#ffb703] uppercase cursor-pointer  py-4 px-5 text-[#023047] flex gap-x-2 items-center rounded-lg">Know More <LiaLongArrowAltRightSolid size={24} /></button>
                                    </div>
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
                                <div className=" text-white px-5 py-5 md:py-10 rounded-tl-[50px] transition-all ease-in-out duration-300 rounded-br-[50px] hover:rounded-tl-none hover:rounded-br-none  hover:rounded-tr-[50px] hover:rounded-bl-[50px]">
                                    <div className="text-[20px] mb-4 " >Celebrating Excellence</div>
                                    <div className="text-[32px] lg:text-[46px] xl:text-[52px] font-medium leading-[1.2] mb-4" >SRMU rated AA+ <br /> by Career 360</div>
                                    <div className="text-[21px]" >Making it one of the Best B-Schools in the country in 2025</div>

                                    <div className="mt-10">
                                        <button className="bg-[#ffb703] uppercase cursor-pointer  py-4 px-5 text-[#023047] flex gap-x-2 items-center rounded-lg">View More <LiaLongArrowAltRightSolid size={24} /></button>
                                    </div>
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
            <LiaLongArrowAltLeftSolid size={24} className={`text-${colorCode} w-9 h-9 ${direction === "next" ? "transform rotate-180" : ""} text-white cursor-pointer `} />
        </button>


    </>
);


