
import Slider from "react-slick";
import { alumniData } from "../../data/placement/alumni-testimonials-data";
import AlumniCard from "./AlumniCard";


type SliderRefType = React.RefObject<Slider>;

interface AlumniSliderProps {
    sliderRef: SliderRefType;
}

const AlumniSlider: React.FC<AlumniSliderProps> = ({ sliderRef }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        arrows: false,
        
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <div className="w-full">
            <div className="w-full">
                <Slider ref={sliderRef} {...settings}>
                    {alumniData.map((item) => (
                        <div key={item.id} className="px-4">
                            <AlumniCard {...item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default AlumniSlider;