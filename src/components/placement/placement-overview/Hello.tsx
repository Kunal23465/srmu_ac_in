import { FC, useEffect, useState, useCallback, forwardRef, useImperativeHandle } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { topRecruiters } from '../../../data/placement/topRecruiters';

interface HelloProps {
  sliderRef?: any;
}

export const Hello: FC<HelloProps> = forwardRef((_props, ref) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  // Expose emblaApi to parent via ref
  useImperativeHandle(ref, () => ({
    slickPrev: () => emblaApi?.scrollPrev(),
    slickNext: () => emblaApi?.scrollNext(),
  }));

  useEffect(() => {
    setHasMounted(true);

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /** Re-initialize embla when window width changes */
  useEffect(() => {
    if (emblaApi && hasMounted) {
      emblaApi.reInit();
    }
  }, [windowWidth, emblaApi, hasMounted]);

  // Function to determine slidesToShow based on window width
  const getSlidesToShow = useCallback(() => {
    if (windowWidth >= 1200) return 5;
    if (windowWidth >= 998) return 4;
    if (windowWidth >= 600) return 3;
    return 2;
  }, [windowWidth]);

  // Get slide width based on slides to show
  const getSlideWidth = () => {
    const slidesToShow = getSlidesToShow();
    return `${100 / slidesToShow}%`;
  };

  // Static grid for SSR
  if (!hasMounted) {
    return (
      <div className="mt-8 md:mt-10 lg:mt-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 -mx-3">
          {topRecruiters.slice(0, 5).map((data, index) => (
            <div key={index} className="flex mx-3 justify-center items-center bg-white px-3 py-4 rounded-lg shadow-sm hover:shadow-md transition">
              <img
                src={data.img}
                alt={`Recruiter ${index + 1}`}
                width={180}
                height={90}
                loading="lazy"
                decoding="async"
                className="h-[90px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 md:mt-10 lg:mt-16">
      {/* Embla Carousel */}
      <div className="overflow-hidden -mx-3" ref={emblaRef}>
        <div className="flex">
          {topRecruiters.map((data, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex-grow-0 px-3"
              style={{ flexBasis: getSlideWidth() }}
            >
              <div className="flex justify-center items-center bg-white px-3 py-4 rounded-lg shadow-sm hover:shadow-md transition">
                <img
                  src={data.img}
                  alt={`Recruiter ${index + 1}`}
                  width={180}
                  height={90}
                  loading="lazy"
                  decoding="async"
                  className="h-[90px] w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

Hello.displayName = 'Hello';

export default Hello;