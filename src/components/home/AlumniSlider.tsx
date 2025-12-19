import Slider from "react-slick";
import { alumniData } from "../../data/placement/alumni-testimonials-data";
import AlumniCard from "./AlumniCard";
import { useState, useEffect } from "react";

type SliderRefType = React.RefObject<Slider>;

interface AlumniSliderProps {
    sliderRef: SliderRefType;
}

const AlumniSlider: React.FC<AlumniSliderProps> = ({ sliderRef }) => {
    const [showDots, setShowDots] = useState(true);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    // @ts-ignore
    const [activeSlide, setActiveSlide] = useState(0);


    useEffect(() => {
        const handleResize = () => {
            setShowDots(window.innerWidth >= 640); // hide dots for screens < 640px
        };

        handleResize(); // set initial value
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Function to determine slidesToShow based on window width
    const getSlidesToShow = () => {

        if (windowWidth >= 1024) return 3;
        if (windowWidth >= 600) return 2;

        return 1;
    };

    // Function to determine if centerMode should be enabled
    const shouldCenterMode = () => {
        return windowWidth >= 768; // Enable center mode only on medium screens and above
    };

    // Function to determine if arrows should be shown
    const shouldShowArrows = () => {
        return windowWidth >= 375; // Show arrows only on medium screens and above
    };

    const settings = {
        dots: showDots,
        infinite: true,
        speed: 700,
        slidesToShow: getSlidesToShow(),
        slidesToScroll: 1,
        centerMode: shouldCenterMode(),
        centerPadding: "0px",
        arrows: shouldShowArrows(),
        // nextArrow: shouldShowArrows() ? <NextArrow /> : null,
        // prevArrow: shouldShowArrows() ? <PrevArrow /> : null,
        beforeChange: (_current: number, next: number) => setActiveSlide(next),
        key: windowWidth,
        swipeToSlide: true,
        focusOnSelect: true,
        touchThreshold: 10,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: alumniData.length > 2,
                    centerMode: alumniData.length > 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    infinite: alumniData.length > 1,
                    centerMode: false
                }
            }
        ]
    };

    return (
        <div className="w-full overflow-hidden">
            <div className="-mx-2 sm:-mx-4">
                <Slider ref={sliderRef} {...settings}>
                    {alumniData.map((item) => (
                        <div key={item.id}>
                            <div className="px-2 sm:px-4">
                                <AlumniCard {...item} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default AlumniSlider;
