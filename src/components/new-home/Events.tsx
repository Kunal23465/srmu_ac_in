import { useRef, useEffect, useState, useMemo } from 'react';
import eventsData from '../../data/new-home/eventsData';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Classes from "../../utils/styles/Global.module.css";
import { RxCross2 } from 'react-icons/rx';
const tokenBgMap: Record<string, string> = {
    accent: 'bg-white dark:bg-red-700',
    primary: 'bg-white dark:bg-slate-800',
    neutral: 'bg-white dark:bg-slate-700',
};

export default function Events() {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const autoRef = useRef<number | null>(null);

    const [currentIndex, setCurrentIndex] = useState(0); // real index 0..n-1
    const currentIndexRef = useRef(0);
    const nodesRef = useRef<HTMLElement[]>([]);
    const scrollTimeout = useRef<number | null>(null);
    const [slidesToShow, setSlidesToShow] = useState<number>(
        typeof window !== 'undefined' && window.matchMedia('(min-width:768px)').matches ? 2 : 1
    );

    const displaySlides = useMemo(() => {
        const n = slidesToShow;
        const leftClones = eventsData.slice(-n);
        const rightClones = eventsData.slice(0, n);
        return [...leftClones, ...eventsData, ...rightClones];
    }, [slidesToShow]);

    function updateNodes() {
        const el = sliderRef.current;
        if (!el) return;
        nodesRef.current = Array.from(el.children) as HTMLElement[];
    }

    function scrollToDisplayIndex(displayIdx: number, smooth = true) {
        const el = sliderRef.current;
        const nodes = nodesRef.current;
        if (!el || nodes.length === 0) return;
        const idx = Math.max(0, Math.min(displayIdx, nodes.length - 1));
        const node = nodes[idx];
        el.scrollTo({ left: node.offsetLeft, behavior: smooth ? 'smooth' : 'auto' });
    }

    function realToDisplayIndex(realIdx: number) {
        return slidesToShow + ((realIdx % eventsData.length) + eventsData.length) % eventsData.length;
    }

    function setIndex(next: number) {
        currentIndexRef.current = next;
        setCurrentIndex(next);
    }

    function advance(step = 1) {
        const n = eventsData.length;
        const next = (currentIndexRef.current + step + n) % n;
        setIndex(next);
        scrollToDisplayIndex(realToDisplayIndex(next));
    }

    function stopAuto() {
        if (autoRef.current) {
            window.clearInterval(autoRef.current);
            autoRef.current = null;
        }
    }

    function startAuto() {
        stopAuto();
        autoRef.current = window.setInterval(() => advance(1), 4000);
    }

    useEffect(() => {
        const handleResize = () => {
            const s = window.matchMedia('(min-width:768px)').matches ? 2 : 1;
            setSlidesToShow(s);
            // update nodes next tick
            setTimeout(updateNodes, 50);
        };

        updateNodes();
        window.addEventListener('resize', handleResize);
        // position to first real slide after mount
        setTimeout(() => scrollToDisplayIndex(slidesToShow, false), 40);
        startAuto();
        return () => {
            stopAuto();
            window.removeEventListener('resize', handleResize);
        };
    }, [slidesToShow]);

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<number | string | null>(null);

    function stripHtml(html?: string) {
        if (!html) return '';
        if (typeof document !== 'undefined') {
            const div = document.createElement('div');
            div.innerHTML = html;
            return div.textContent || div.innerText || '';
        }
        return html.replace(/<[^>]+>/g, '');
    }

    function openModal(id: number | string) {
        setActive(id);
        setOpen(true);
        stopAuto();
    }

    function closeModal() {
        setOpen(false);
        setActive(null);
        startAuto();
    }

    return (
        <section className="bg-gradient-to-b from-white to-[#E0F1FF] ">
            <div className={`${Classes["container"]} py-8 md:py-10 lg:py-12`}>
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-[#0A4A8F] leading-tight md:leading-tight">
                            Latest
                            <span className="text-[#FFC107] text-sm md:text-2xl lg:text-3xl "> News & Updates</span>
                        </h2>


                    </div>


                </div>

                <div className="relative">
                    <button
                        onClick={() => advance(-1)}
                        aria-label="previous"
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-[#E6EEF8] shadow-md text-[#0A4A8F] flex items-center justify-center hover:scale-105 transition-transform"
                    >
                        <FaChevronLeft className="text-sm md:text-base" />
                    </button>

                    <div
                        ref={sliderRef}
                        onMouseEnter={stopAuto}
                        onMouseLeave={startAuto}
                        onScroll={() => {
                            if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
                            scrollTimeout.current = window.setTimeout(() => {
                                // on scroll end: find closest node
                                const el = sliderRef.current;
                                const nodes = nodesRef.current;
                                if (!el || nodes.length === 0) return;
                                const left = el.scrollLeft;
                                let closest = 0;
                                let bestDiff = Infinity;
                                nodes.forEach((n, i) => {
                                    const diff = Math.abs(n.offsetLeft - left);
                                    if (diff < bestDiff) {
                                        bestDiff = diff;
                                        closest = i;
                                    }
                                });
                                const nReal = eventsData.length;
                                const s = slidesToShow;
                                if (closest < s) {
                                    // left clones
                                    const realIdx = (closest + nReal - s) % nReal;
                                    setIndex(realIdx);
                                    scrollToDisplayIndex(realToDisplayIndex(realIdx), false);
                                } else if (closest >= s + nReal) {
                                    // right clones
                                    const realIdx = (closest - s) % nReal;
                                    setIndex(realIdx);
                                    scrollToDisplayIndex(realToDisplayIndex(realIdx), false);
                                } else {
                                    const realIdx = closest - s;
                                    setIndex(realIdx);
                                }
                            }, 120);
                        }}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-2 md:py-0 scrollbar-hide"
                    >
                        {displaySlides.map((e, di) => {
                            const bg = "#0A4A8F"
                            const key = `display-${di}-${e.id}`;
                            return (
                                <article
                                    key={key}
                                    className={`snap-start min-w-full md:min-w-0 md:flex-none md:w-1/2 bg-[#0A4A8F] rounded overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300`}
                                >
                                    <div className="overflow-hidden h-60 md:h-60">
                                        <img
                                            src={e.image}
                                            alt={e.title}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="p-4 md:p-6 text-slate-800 dark:text-white ">
                                        <h3 className="font-semibold text-lg mb-2 text-white">{e.title}</h3>
                                        <p className="text-sm mb-3 text-[#fff] dark:text-slate-200 line-clamp-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                            {stripHtml(e.description)}
                                        </p>

                                        {e.description && (
                                            <button
                                                onClick={() => openModal(e.id)}
                                                className="inline-flex items-center gap-2 text-sm font-medium text-[#FFC107] cursor-pointer"
                                            >
                                                Read more <FaArrowRight className="text-xs" />
                                            </button>
                                        )}
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <button
                        onClick={() => advance(1)}
                        aria-label="next"
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-[#E6EEF8] shadow-md text-[#0A4A8F] flex items-center justify-center hover:scale-105 transition-transform"
                    >
                        <FaChevronRight className="text-sm md:text-base" />
                    </button>
                </div>
            </div>
            {open && active !== null && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white dark:bg-slate-900 max-w-3xl w-full rounded-lg shadow-xl ">
                        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-start">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Details</h3>
                            <button onClick={closeModal} className="text-slate-600 dark:text-slate-300 cursor-pointer"><RxCross2 size={24} /></button>
                        </div>
                        <div className="p-6 text-slate-800 dark:text-slate-200 overflow-auto max-h-[60vh]">
                            {(() => {
                                const item = eventsData.find((it) => it.id === active);
                                return item ? (
                                    <div dangerouslySetInnerHTML={{ __html: item.description || '' }} />
                                ) : null;
                            })()}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
