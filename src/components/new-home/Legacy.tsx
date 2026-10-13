import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import adhikariVid from '../../assets/new-home/legacy/Adhikari.mp4';
import adhikariVidImg from '../../assets/new-home/legacy/virendra.webp';
import chandraniVid from '../../assets/new-home/legacy/Chandrani.mp4';
import chandraniVidImg from '../../assets/new-home/legacy/chandrani.webp';
import rakeshVid from '../../assets/new-home/legacy/Rakesh Upadhayay.mp4';
import rakeshVidImg from '../../assets/new-home/legacy/rakesh-new.webp';
import durgeshVid from '../../assets/new-home/legacy/Durgesh Actor.mp4';
import durgeshVidImg from '../../assets/new-home/legacy/durgesh-new.webp';
import vipulVid from '../../assets/new-home/legacy/Rj Vipul.mp4';
import vipulVidImg from '../../assets/new-home/legacy/rj-new.webp';
import vinayVid from '../../assets/new-home/legacy/Vinay Bihari.mp4';
import vinayVidImg from '../../assets/new-home/legacy/brij.webp';
import MobileReadMore from './MobileReadMore';
import Classes from "../../utils/styles/Global.module.css";
type LegacyItem = {
  video: string;
  img: string;
  title: string;
};

const legacy: LegacyItem[] = [
  {
    video: rakeshVid,
    img: rakeshVidImg,
    title: "Rakesh Upadhyay",
  },
  {
    video: vipulVid,
    img: vipulVidImg,
    title: "RJ Vipul",
  },
  {
    video: durgeshVid,
    img: durgeshVidImg,
    title: "Durgesh Actor",
  },
  {
    video: vinayVid,
    img: vinayVidImg,
    title: "Vinay Bihari",
  },
  {
    video: adhikariVid,
    img: adhikariVidImg,
    title: "Virendra Adhikari",
  },
  {
    video: chandraniVid,
    img: chandraniVidImg,
    title: "Chandrani",
  },
];

function LegacyCard({ item, onPlay }: { item: LegacyItem; onPlay: (item: LegacyItem) => void }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all border border-gray-100 h-full flex flex-col">
      <button
        type="button"
        onClick={() => onPlay(item)}
        aria-label={`Play video testimonial of ${item.title}`}
        className="relative flex-1 bg-gray-900 overflow-hidden group cursor-pointer text-left w-full"
      >
        <img
          src={item.img}
          alt={`Video testimonial from ${item.title}`}
          width={300}
          height={400}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FFC107] backdrop-blur-sm flex items-center justify-center group-hover:bg-[#0A4A8F] group-hover:scale-110 transition-all shadow-lg">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="ml-1">
              <polygon points="8 5 19 12 8 19 8 5" />
            </svg>
          </div>
        </div>
      </button>

    </article>
  );
}

function VideoModal({ item, onClose }: { item: LegacyItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.img} video`}
    >
      <div
        className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute top-2 right-2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <video
          src={item.video}
          poster={item.img}
          className="w-full h-full object-contain"
          controls
          autoPlay
          playsInline
          preload="metadata"
        />
      </div>
    </div>
  );
}

export default function Legacy() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeItem, setActiveItem] = useState<LegacyItem | null>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setVisibleCount(4);
      else if (w >= 640) setVisibleCount(2);
      else setVisibleCount(2);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const total = legacy.length;
  const maxIndex = Math.max(0, total - visibleCount);
  const safeIndex = Math.min(index, maxIndex);
  const showArrows = total > visibleCount;
  const cardWidth = 100 / visibleCount;

  const next = () => setIndex(Math.min(maxIndex, safeIndex + 1));
  const prev = () => setIndex(Math.max(0, safeIndex - 1));

  return (
    <section className="bg-white ">
      <div className={`${Classes["container"]} py-8 md:py-10 lg:py-12`}>
        <div className="mb-5 md:mb-10">
          <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-[#0A4A8F] flex flex-col leading-tight md:leading-tight">
            Industry-Academia Interaction <span className="text-[#FFC107] md:text-3xl lg:text-4xl block">For Students</span>
          </h2>
          <MobileReadMore className="text-[13px] md:text-base text-gray-700 leading-relaxed mt-2 md:mt-3">
            At Shri Ramswaroop Memorial University, education goes beyond classrooms and textbooks. From technical excellence to personality development, students experience holistic growth in a future-ready learning environment.
          </MobileReadMore>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out -mx-2.5"
              style={{ transform: `translateX(-${safeIndex * cardWidth}%)` }}
            >
              {legacy.map((p) => (
                <div
                  key={p.img}
                  className="flex-shrink-0 px-2.5 h-[300px] md:h-[70vh] md:min-h-[580px] md:max-h-[720px]"
                  style={{ width: `${cardWidth}%` }}
                >
                  <LegacyCard item={p} onPlay={setActiveItem} />
                </div>
              ))}
            </div>
          </div>

          {showArrows && (
            <>
              <button
                onClick={prev}
                disabled={safeIndex === 0}
                aria-label="Previous"
                className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#0A4A8F] hover:bg-[#0A4A8F] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <FaChevronLeft aria-hidden="true" />
              </button>
              <button
                onClick={next}
                disabled={safeIndex >= maxIndex}
                aria-label="Next"
                className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#0A4A8F] hover:bg-[#0A4A8F] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <FaChevronRight aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      </div>
      {activeItem && <VideoModal item={activeItem} onClose={() => setActiveItem(null)} />}
    </section>
  );
}
