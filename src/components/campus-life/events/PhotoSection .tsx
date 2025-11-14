import Slider from "react-slick";
import Fancybox from "./Fancybox";

interface PhotoSectionProps {
    photos?: string[];
}

export default function PhotoSection({ photos }: PhotoSectionProps) {
    const safePhotos = photos ?? [];

    const settings = {
        dots: true,
        infinite: true, // ← infinite carousel
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div>
            <div className="hidden md:block">
                <Fancybox
                    options={{
                        Carousel: {
                            infinite: true, 
                        },
                    }}
                >
                    <div className="abhivyakti_grid">
                        {safePhotos.slice(0, 12).map((img, index) => (
                            <a
                                data-fancybox="gallery"
                                href={img}
                                key={index}
                                className="border border-[#ffb703] rounded-md p-4 relative group"
                            >
                                <img
                                    className="w-full h-full object-cover rounded-md"
                                    src={img}
                                    alt="Gallery"
                                />

                                <span
                                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center
                                               opacity-0 group-hover:opacity-100 transition-all bg-black/40"
                                >
                                    <i className="fa-solid fa-expand text-white text-4xl"></i>
                                </span>
                            </a>
                        ))}
                    </div>
                </Fancybox>
            </div>

            <div className="md:hidden wood-slider">
                <Slider {...settings}>
                    {safePhotos.slice(0, 9).map((img, index) => (
                        <img
                            key={index}
                            className="w-full h-full object-cover rounded-md"
                            src={img}
                            alt="Gallery"
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}
