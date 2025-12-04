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

    useEffect(() => {
        const handleResize = () => {
            setShowDots(window.innerWidth >= 640); // hide dots for screens < 640px
        };

        handleResize(); // set initial value
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const settings = {
        dots: showDots,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        arrows: false,
        swipeToSlide: true,
        focusOnSelect: true,
        touchThreshold: 10,
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <div className="w-full">
            <Slider ref={sliderRef} {...settings}>
                {alumniData.map((item) => (
                    <div key={item.id} className="px-4">
                        <div className="w-full h-full">
                            <AlumniCard {...item} />
                        </div>
                    </div>

                ))}
            </Slider>
        </div>
    );
};

export default AlumniSlider;
