import React, { useState, useEffect, useCallback, useMemo } from 'react';

type WhyItem = {
  title: string;
  description: string;
};

type WhySliderData = {
  heading: string;
  subheading: string;
  items: WhyItem[];
};



const ChevronLeft = (props: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = (props: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// --- Individual Card Component ---
const WhyCard: React.FC<
  WhyItem & { highlight?: boolean; hovered: boolean; setHovered: (v: boolean) => void }
> = ({ title, description, highlight, hovered, setHovered }) => {
  const active = highlight || hovered;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        w-full h-full
        p-6 rounded-2xl shadow-xl transition-all duration-300 transform
        ${active ? "bg-yellow-500 text-gray-800" : "bg-white text-gray-700"}
        text-center md:text-left
        ${active ? 'scale-[1.03] shadow-2xl ring-4 ring-yellow-400/50' : 'scale-100'}
      `}
    >
      <h3 className={`text-2xl mb-4 font-semibold ${active ? 'text-gray-900' : 'text-blue-600'}`}>{title}</h3>
      <p className={`text-base ${active ? "text-gray-800" : "text-gray-700"}`}>{description}</p>
    </div>
  );
};

// --- Custom Slider Component ---
type Props = { data: WhySliderData };

 const CustomAboutUsSlider: React.FC<Props> = ({ data }) => {
  const numItems = data.items.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // --- Utility Hooks ---

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- Navigation Handlers (Circular Loop) ---
  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + numItems) % numItems);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % numItems);
  };
  
  // Calculate the index of the visually 'center' or 'most active' card
  const getHighlightIndex = useCallback((currentIdx: number, isMobileView: boolean) => {
    if (isMobileView) {
      return currentIdx;
    }
    // Desktop: The middle visible card is the center (index + 1)
    return (currentIdx + 1) % numItems;
  }, [numItems]);

  const highlightedIndex = getHighlightIndex(currentIndex, isMobile);


  // --- Carousel Positioning Logic ---
  // These values must be consistent with the CSS classes/styles applied below.
  const mobileCardWidth = 85; // % width of a card on mobile
  const mobileCardMargin = 16; // px right margin (mr-4 is 1rem = 16px)
  const mobilePeekPadding = 7.5; // % padding-left to initially center the first card

  const desktopCardWidth = 33.33333; // % width of a card on desktop (w-1/3)
  const desktopGap = 20; // Estimated effective gap (px) between 3 cards due to px-3 padding

 const transformStyle = useMemo(() => {
  let translateX: string;

  if (isMobile) {
    translateX = `calc(-${currentIndex * mobileCardWidth}% - ${currentIndex * mobileCardMargin}px)`;
  } else {
    translateX = `calc(-${currentIndex * desktopCardWidth}% )`;
  }

  return {
    transform: `translateX(${translateX})`,
  };
}, [currentIndex, isMobile, mobileCardWidth, mobileCardMargin, desktopCardWidth]);



  // Helper to apply classes for the container based on view
const slideContainerClasses = "flex w-full overflow-hidden items-stretch";
      
  // Helper to apply classes for individual slides:
  // We apply conditional styling directly to fix the Tailwind compilation issue
  const slideItemClassesBase = "flex-shrink-0";


  return (
    <div className="w-full flex justify-center py-16 px-4  min-h-screen font-inter">
      <div className="w-full max-w-7xl h-full flex flex-col lg:flex-row items-start gap-12">

        {/* LEFT SECTION (Controls & Text) */}
        <div className="flex flex-col items-start lg:min-w-[300px] mt-6 lg:sticky lg:top-8">
          <h2 className="leading-tight text-gray-900 text-[22.4px] sm:text-[22.4px] lg:text-[2.5rem] fw500 mb-4">
            {data.heading.split(" ").map((word, idx) => (
              <span key={idx} className="block">{word}</span>
            ))}
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-sm">
            {data.subheading}
          </p>

          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center border-2 border-gray-900 text-gray-800 bg-white rounded-full transition-all duration-200 hover:bg-gray-900 hover:text-white shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center border-2 border-gray-900 text-gray-800 bg-white rounded-full transition-all duration-200 hover:bg-gray-900 hover:text-white shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* RIGHT SECTION (Custom Slider Implementation) */}
        <div className="w-full lg:flex-1 pt-6 pb-20 overflow-hidden">
          {/* Main Track Container: Applies the transform for sliding */}
          {/* Mobile: Use custom padding-left to visually center the first card */}
          <div 
  className="flex w-full items-stretch transition-transform duration-500"
  style={{ 
    transform: transformStyle.transform,
    paddingLeft: isMobile ? `${mobilePeekPadding}%` : 0
  }}
>

            {data.items.map((item, index) => {
              const isCenter = highlightedIndex === index;
              const isHovered = hoveredIndex === index;

              return (
                <div 
                  key={index} 
                  className={slideItemClassesBase}
                  style={{
                      // Apply width and margin based on view size
                      width: isMobile ? `${mobileCardWidth}%` : `${desktopCardWidth}%`,
                      marginRight: isMobile ? `${mobileCardMargin}px` : 0,
                      paddingLeft: isMobile ? 0 : 6, // px-3 equivalent
                      paddingRight: isMobile ? 0 : 6, // px-3 equivalent
                  }}
                >
                  <WhyCard
                    {...item}
                    highlight={isCenter}
                    hovered={isHovered}
                    setHovered={(state) =>
                      setHoveredIndex(state ? index : null)
                    }
                  />
                </div>
              );
            })}
          </div>

          {/* Pagination Dots */}
          <div className="mt-14 flex justify-center gap-3">
            {data.items.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`
                        w-3 h-3 rounded-full border border-gray-800 block transition-all duration-300
                        ${index === currentIndex ? 'bg-yellow-500 border-yellow-500 w-4 h-4' : 'bg-transparent'}
                    `}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAboutUsSlider