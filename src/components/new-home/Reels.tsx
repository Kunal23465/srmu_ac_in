import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import AILearning from "../../assets/new-home/reels/AI Learning.mp4";
import AnnualFest from "../../assets/new-home/reels/Annual Fest.mp4";
import Clubs from "../../assets/new-home/reels/Clubs.mp4";
import Events from "../../assets/new-home/reels/Events.mp4";
// import ExamVibes from "../../assets/new-home/reels/Exam Vibes.mp4";
import ExploreLearn from "../../assets/new-home/reels/Explore & Learn.mp4";
import Sports from "../../assets/new-home/reels/sports.mp4";
import SRMUVibes from "../../assets/new-home/reels/SRMU Vibes.mp4";
import WomenEmpowerment from "../../assets/new-home/reels/Women Empowerment.mp4";
import MobileReadMore from './MobileReadMore';
import Classes from "../../utils/styles/Global.module.css";

const reels = [
  {
    tag: "AI",
    tagColor: "bg-[#0A4A8F]",
    label: "AI Learning",
    sub: "Learn. Build. Innovate.",
    src: AILearning,
    href: "https://www.instagram.com/reel/DWVcZHXEeU2/",
  },
  {
    tag: "Fest",
    tagColor: "bg-[#F47B20]",
    label: "Annual Fest",
    sub: "Celebrate every moment.",
    src: AnnualFest,
    href: "https://www.instagram.com/reels/DO7rXtrkZcd/",
  },
  {
    tag: "Clubs",
    tagColor: "bg-[#7E57C2]",
    label: "Clubs",
    sub: "Passion starts here.",
    src: Clubs,
    href: "https://www.instagram.com/reel/DRoWFcPAbUF/",
  },
  // {
  //   tag: "Exam",
  //   tagColor: "bg-[#26A69A]",
  //   label: "Exam Vibes",
  //   sub: "Study. Stress. Repeat.",
  //   src: ExamVibes,
  //   href: "https://www.instagram.com/reels/DTwpeFwEfrj/",
  // },
  {
    tag: "Explore",
    tagColor: "bg-[#00897B]",
    label: "Explore & Learn",
    sub: "Discover something new.",
    src: ExploreLearn,
    href: "https://www.instagram.com/reels/DVAllYEkVt1/",
  },
  {
    tag: "Sports",
    tagColor: "bg-[#43A047]",
    label: "Sports",
    sub: "Play with passion.",
    src: Sports,
    href: "https://www.instagram.com/reels/DVAllYEkVt1/",
  },
  {
    tag: "Campus",
    tagColor: "bg-[#E53935]",
    label: "SRMU Vibes",
    sub: "Feel the campus energy.",
    src: SRMUVibes,
    href: "https://www.instagram.com/reels/DVQibozCUMw/",
  },
  {
    tag: "Women",
    tagColor: "bg-[#D81B60]",
    label: "Women Empowerment",
    sub: "Strong voices rise.",
    src: WomenEmpowerment,
    href: "https://www.instagram.com/reels/DVQibozCUMw/",
  },
  {
    tag: "Events",
    tagColor: "bg-[#FB8C00]",
    label: "Events",
    sub: "Memories in making.",
    src: Events,
    href: "https://www.instagram.com/reels/DO7rXtrkZcd/",
  },
];

export default function Reels() {
  const duplicatedReels = [...reels, ...reels]; // Duplicate for seamless loop
  const [playingStates, setPlayingStates] = useState(duplicatedReels.map(() => true));
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [marqueePaused, setMarqueePaused] = useState(false);

  const orderedReels = modalOpen
    ? [...reels.slice(selectedIndex), ...reels.slice(0, selectedIndex)]
    : reels;

  const modalVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const reelScrollerRef = useRef<HTMLDivElement | null>(null);
  const marqueeResumeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  useEffect(() => {
    return () => {
      if (marqueeResumeTimeoutRef.current) {
        window.clearTimeout(marqueeResumeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!modalOpen) return;

    const videos = modalVideoRefs.current.filter((v): v is HTMLVideoElement => v !== null);
    if (videos.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            video.play().catch(() => { });
          } else {
            video.pause();
          }
        });
      },
      { threshold: [0, 0.6, 1] }
    );

    videos.forEach((v) => observer.observe(v));
    return () => observer.disconnect();
  }, [modalOpen, selectedIndex]);

  const handleReelClick = (index: number) => {
    setSelectedIndex(index % reels.length); // Since duplicated, get original index
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const scrollReels = (direction: 'prev' | 'next') => {
    const scroller = reelScrollerRef.current;
    if (!scroller) return;

    setMarqueePaused(true);
    if (marqueeResumeTimeoutRef.current) {
      window.clearTimeout(marqueeResumeTimeoutRef.current);
    }

    const card = scroller.querySelector<HTMLElement>('[data-reel-card]');
    const distance = card ? card.offsetWidth + 20 : 228;

    window.requestAnimationFrame(() => {
      scroller.scrollBy({
        left: direction === 'next' ? distance : -distance,
        behavior: 'smooth',
      });
    });

    marqueeResumeTimeoutRef.current = window.setTimeout(() => {
      setMarqueePaused(false);
    }, 700);
  };

  return (
    <section className="bg-gradient-to-b from-white via-[#E6E6E7] to-white">
      <div className={`${Classes["container"]} py-8 md:py-10 lg:py-12`}>
        <div className="mb-5 md:mb-8">
          <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-[#0A4A8F] flex flex-col leading-tight md:leading-tight">
            Life Beyond Academics
            <span className='text-[#FFC107] lg:text-3xl block'>  At SRMU </span>
          </h2>
          <MobileReadMore className="text-[13px] md:text-base text-gray-700 leading-relaxed mt-2">
            Experience a dynamic campus environment where learning extends beyond classrooms through innovation, technical events, industry exposure, sports and student-led activities. Known for its career-focused learning culture, SRMU is gaining recognition among students looking for the best university in Uttar Pradesh for academic growth and practical exposure.
          </MobileReadMore>
        </div>

        <div className="relative py-1 md:py-2">
          <div
            ref={reelScrollerRef}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth pb-2"
          >
            <div className={`flex w-max gap-3 md:gap-5 ${marqueePaused ? '' : 'animate-marquee'}`}>
              {duplicatedReels.map((r, i) => (
                <a
                  key={i}
                  data-reel-card
                  onClick={(e) => { e.preventDefault(); handleReelClick(i); }}
                  className="group cursor-pointer flex-shrink-0 w-44 md:w-52 flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative bg-black aspect-[9/16] w-full overflow-hidden">
                    <video
                      src={r.src}
                      className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
                      autoPlay
                      muted
                      loop
                      playsInline
                      onPlay={() => {
                        const newStates = [...playingStates];
                        newStates[i] = true;
                        setPlayingStates(newStates);
                      }}
                      onPause={() => {
                        const newStates = [...playingStates];
                        newStates[i] = false;
                        setPlayingStates(newStates);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    {!playingStates[i] && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="h-12 w-12 rounded-full bg-[#FFB703] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg ring-4 ring-white/20">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="px-2 py-3  border-t border-gray-100">
                    <p className="font-bold text-xs md:text-sm text-[#0A4A8F] leading-snug">{r.label}</p>
                    <p className="text-[10.5px] text-gray-500 mt-1 leading-snug">{r.sub}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => scrollReels('prev')}
            aria-label="Previous reels"
            className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#0A4A8F] hover:bg-[#0A4A8F] hover:text-white transition-colors"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollReels('next')}
            aria-label="Next reels"
            className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#0A4A8F] hover:bg-[#0A4A8F] hover:text-white transition-colors"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm">
          <button
            onClick={closeModal}
            aria-label="Close"
            className="fixed top-4 right-4 z-[60] h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition-colors"
          >
            ×
          </button>
          <div className="h-full w-full overflow-y-auto snap-y snap-mandatory scrollbar-hide">
            {orderedReels.map((r, i) => (
              <div
                key={`${r.label}-${i}`}
                className="w-full min-h-screen flex items-center justify-center snap-start py-6"
              >
                <div className="group block">
                  <div className="relative rounded-xl overflow-hidden bg-black aspect-[9/16] shadow-card w-[min(85vw,360px)] max-h-[80vh]">
                    <video
                      ref={(el) => { modalVideoRefs.current[i] = el; }}
                      src={r.src}
                      className="absolute inset-0 w-full h-full object-cover opacity-95"
                      controls
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
                  </div>
                  <div className="mt-2 text-center">
                    <p className="font-bold text-xs md:text-sm text-white">{r.label}</p>
                    <p className="text-[10px] text-gray-300 mt-0.5 leading-snug">{r.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
