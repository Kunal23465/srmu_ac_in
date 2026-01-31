import Fancybox from "./Fancybox";

interface PhotoSectionProps {
    photos?: string[];
}

export default function PhotoSection({ photos }: PhotoSectionProps) {
    const safePhotos = photos ?? [];
    return (
        <div>
            <div className="">
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
                                               opacity-0 group-hover:opacity-50 transition-all bg-[#ffb703]"
                                >
                                    <i className="fa-solid fa-expand text-white text-4xl"></i>
                                </span>
                            </a>
                        ))}
                    </div>
                </Fancybox>
            </div>


        </div>
    );
}
