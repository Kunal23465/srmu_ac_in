import { useEffect, useRef, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Classes from "../../utils/styles/Global.module.css";
type EmblaCarouselProps<T> = {
  slides: T[];
  renderSlide: (slide: T, index: number) => ReactNode;
  getSlideKey?: (slide: T, index: number) => string | number;
  className?: string;
  viewportClassName?: string;
  containerClassName?: string;
  slideClassName?: string;
  showDots?: boolean;
  showArrows?: boolean;
  loop?: boolean;
  autoplayDelay?: number;
  duration?: number;
  onSlideChange?: () => void;
};

const EmblaCarousel = <T,>({
  slides,
  renderSlide,
  getSlideKey,
  className = "",
  viewportClassName = "overflow-hidden",
  containerClassName = "flex",
  slideClassName = "min-w-0 shrink-0 grow-0 basis-full",
  showDots = true,
  showArrows = false,
  loop = true,
  autoplayDelay,
  duration,
  onSlideChange,
}: EmblaCarouselProps<T>) => {
  const autoplayPluginRef = useRef(
    autoplayDelay
      ? Autoplay({
        delay: autoplayDelay,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      })
      : null
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop,
      ...(duration && { duration }),
    },
    autoplayPluginRef.current ? [autoplayPluginRef.current] : []
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const updateSelectedIndex = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      onSlideChange?.();
    };

    const updateScrollSnaps = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    updateScrollSnaps();
    updateSelectedIndex();

    emblaApi.on("reInit", updateScrollSnaps);
    emblaApi.on("reInit", updateSelectedIndex);
    emblaApi.on("select", updateSelectedIndex);

    return () => {
      emblaApi.off("reInit", updateScrollSnaps);
      emblaApi.off("reInit", updateSelectedIndex);
      emblaApi.off("select", updateSelectedIndex);
    };
  }, [emblaApi, onSlideChange]);

  return (
    <div className={className}>
      <div ref={emblaRef} className={viewportClassName}>
        <div className={containerClassName}>
          {slides.map((slide, index) => (
            <div
              key={getSlideKey ? getSlideKey(slide, index) : index}
              className={slideClassName}
            >
              {renderSlide(slide, index)}
            </div>
          ))}
        </div>
      </div>

      {showDots && scrollSnaps.length > 1 ? (
        <div className="mt-6 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${index === selectedIndex ? "bg-[#023047]" : "bg-[#c7d7de]"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      ) : null}

      {showArrows && scrollSnaps.length > 1 ? (
        <>
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0A4A8F] shadow-md transition-colors hover:bg-[#0A4A8F] hover:text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0A4A8F] shadow-md transition-colors hover:bg-[#0A4A8F] hover:text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      ) : null}
    </div>
  );
};

export default EmblaCarousel;
