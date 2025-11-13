import { useRef, useState, useEffect, useCallback, FC, Ref } from 'react';
import { facilitiesData, FacilityCard } from '../../../data/campus-life/facilities/facilities-data';
import CardSlider from './CardSlider';

export interface SliderLogicProps {
  scrollRef?: Ref<HTMLDivElement>;
  setScrollToFunctions?: (funcs: {
    scrollTo: (dir: 'left' | 'right') => void;
    canScrollLeft: boolean;
    canScrollRight: boolean;
  }) => void;
}

const SliderLogic: FC<SliderLogicProps> = ({ setScrollToFunctions }) => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    const container = cardsContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    const maxScroll = container.scrollWidth - container.clientWidth;
    setCanScrollRight(container.scrollLeft < maxScroll - 5);
  }, []);

  useEffect(() => {
    const container = cardsContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      checkScrollability();
    }
    return () => {
      if (container) container.removeEventListener('scroll', checkScrollability);
    };
  }, [checkScrollability]);

  const scrollTo = (direction: 'left' | 'right') => {
    const container = cardsContainerRef.current;
    if (!container) return;

    const firstCard = container.querySelector<HTMLDivElement>('.card-slider');
    if (!firstCard) return;

    const style = window.getComputedStyle(firstCard);
    const cardWidth = firstCard.offsetWidth + parseInt(style.marginRight || '0', 10);

    const newScrollLeft =
      direction === 'left'
        ? container.scrollLeft - cardWidth
        : container.scrollLeft + cardWidth;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });

    setTimeout(checkScrollability, 0);
  };

  useEffect(() => {
    if (setScrollToFunctions) {
      setScrollToFunctions({ scrollTo, canScrollLeft, canScrollRight });
    }
  }, [canScrollLeft, canScrollRight, setScrollToFunctions]);

  return (
    <div
      ref={cardsContainerRef}
      className="flex space-x-6 pb-6 overflow-x-scroll scrollbar-hide snap-x snap-start"
      style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
    >
      {facilitiesData.map((card: FacilityCard) => (
        <CardSlider
          key={card.id}
          {...card}
          className="card-slider snap-start flex-shrink-0"
        />
      ))}
    </div>
  );
};

export default SliderLogic;
