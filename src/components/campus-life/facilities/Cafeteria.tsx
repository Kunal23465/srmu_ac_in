import { useState } from "react";
import cafeteria1 from "../../../assets/images/campus-life/facilities/cafeteria-1.jpg";
import cafeteria2 from "../../../assets/images/campus-life/facilities/cafeteria-2.jpg";
import cafeteria3 from "../../../assets/images/campus-life/facilities/cafeteria-3.jpg";
import cafeteria4 from "../../../assets/images/campus-life/facilities/cafeteria-4.jpg";
import cafeteria5 from "../../../assets/images/campus-life/facilities/cafeteria-5.jpg";

const images = [cafeteria1, cafeteria2, cafeteria3, cafeteria4, cafeteria5];

const Cafeteria: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div>
            <section className="relative  py-8  overflow-hidden">
                <div className="absolute "></div>

                <div className="relative container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-start justify-center gap-27.5">

                        <div className="text-white md:w-1/2 z-10 mt-14.5">
                             <h2 className="text-[1.6rem] text-white sm:text-xl lg:text-[50px] fw600">
                                Cafeteria & Eating Joints
                            </h2>

                            <span className="mb-4 leading-relaxed">
                                The university boasts a vibrant cafeteria and various eating joints, creating a diverse culinary landscape for students. These spaces not only serve as hubs for delicious and nourishing meals but also foster a sense of community and relaxation, where students can unwind and socialize between classes.
                            </span>
                        </div>

                        <div className="relative w-full md:w-[400px]">
                            <div className="relative h-60 overflow-hidden rounded-lg md:h-96">
                                {images.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Cafeteria ${index + 1}`}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                ))}
                            </div>

                            <button
                                type="button"
                                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
                                onClick={prevSlide}
                            >
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
                                    <svg
                                        className="w-4 h-4 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 1 1 5l4 4"
                                        />
                                    </svg>
                                    <span className="sr-only">Previous</span>
                                </span>
                            </button>

                            <button
                                type="button"
                                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
                                onClick={nextSlide}
                            >
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
                                    <svg
                                        className="w-4 h-4 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 9 4-4-4-4"
                                        />
                                    </svg>
                                    <span className="sr-only">Next</span>
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cafeteria;
