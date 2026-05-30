import { useEffect, useMemo, useRef, useState } from 'react';

import agricultureImg from '../../assets/new-home/programs/AGRICULTURE.webp';
import Classes from "../../utils/styles/Global.module.css";
import aiImg from '../../assets/new-home/programs/AI.webp';
import biotechnologyImg from '../../assets/new-home/programs/BIOTECHNOLOGY.webp';
import computerApplicationImg from '../../assets/new-home/programs/COMPUTER APPLICATION.webp';
import computerScienceImg from '../../assets/new-home/programs/COMPUTER SCIENCE ENG.webp';
import commerceImg from '../../assets/new-home/programs/_Commerce & Eco  .webp';
import engineeringImg from '../../assets/new-home/programs/ENGINEERING.webp';
import humanitiesImg from '../../assets/new-home/programs/HUMANITIES.webp';
import lawImg from '../../assets/new-home/programs/LAW.webp';
import managementImg from '../../assets/new-home/programs/MANAGEMENT.webp';
import mediaStudiesImg from '../../assets/new-home/programs/MEDIA STUDIES.webp';
import microbiologyImg from '../../assets/new-home/programs/MICROBIOLOGY.webp';
import naturalSciencesImg from '../../assets/new-home/programs/NATURAL SCIENCES.webp';
import nutritionImg from '../../assets/new-home/programs/NUTRITION & DIETECTICS.webp';
import pharmacyImg from '../../assets/new-home/programs/PHARMACY.webp';
import polytechnicDiplomaImg from '../../assets/new-home/programs/POLYTEHNIC (DIPLOMA).webp';
import polytechnicLateralImg from '../../assets/new-home/programs/POLYTEHNIC (LATERAL).webp';
import socialWorkImg from '../../assets/new-home/programs/SOCIAL WORK.webp';

type Program = { title: string; tagline: string[]; img: string; slug: string };

const normalizeSearchText = (value: string) =>
  value
    .toLowerCase()
    .replace(/\bb[\s.]*te(?:ch|ck)\b/g, 'btech')
    .replace(/\bm[\s.]*te(?:ch|ck)\b/g, 'mtech')
    .replace(/\bb[\s.]*pharm\b/g, 'bpharm')
    .replace(/\bd[\s.]*pharm\b/g, 'dpharm')
    .replace(/\bm[\s.]*com\b/g, 'mcom')
    .replace(/\bb[\s.]*com\b/g, 'bcom')
    .replace(/\s+/g, ' ')
    .replace(/[^a-z0-9]+/g, '');

const tabs: { name: string; slug: string; programs: Program[] }[] = [
  {
    name: 'Undergraduate',
    slug: 'undergraduate',
    programs: [
      { title: 'Artificial Intelligence', tagline: ['B.Tech. CSE', 'BCA', 'BBA'], img: aiImg, slug: 'ug-artificial-intelligence' },
      { title: 'Computer Science', tagline: ['B.Tech. CSE', 'B.Sc. IT, BCA'], img: computerScienceImg, slug: 'ug-computer-science' },
      { title: 'Engineering', tagline: ['B.Tech. CE', 'B.Tech. ME', 'B.Tech. EE', 'B.Tech. CSE', 'B.Tech.ECE'], img: engineeringImg, slug: 'ug-engineering' },
      { title: 'Management', tagline: ['BBA'], img: managementImg, slug: 'ug-management' },
      { title: 'Commerce & Economics', tagline: ['B.Com. (Hons.)', 'B.Com. as per NEP', 'B.A. Economics', 'B.A. (Hons.)'], img: commerceImg, slug: 'ug-commerce-economics' },
      { title: 'Law', tagline: ['BA LL.B. (Hons.)', 'BBA LL.B. (Hons.)', 'LL.B.'], img: lawImg, slug: 'ug-law' },
      { title: 'Biotechnology', tagline: ['B.Sc. (Hons.)', 'B.Tech.'], img: biotechnologyImg, slug: 'ug-biotechnology' },
      { title: 'Microbiology', tagline: ['B.Sc. (Hons.)'], img: microbiologyImg, slug: 'ug-microbiology' },
      { title: 'Media Studies', tagline: ['B.A. (J&MC)'], img: mediaStudiesImg, slug: 'ug-media-studies' },
      { title: 'Agriculture', tagline: ['B.Sc. (Hons.) '], img: agricultureImg, slug: 'ug-agriculture' },
      { title: 'Nutrition & Dietetics', tagline: ['B.Sc. (Hons.)'], img: nutritionImg, slug: 'ug-nutrition-dietetics' },
      { title: 'Humanities', tagline: ['B.A. (Hons.)'], img: humanitiesImg, slug: 'ug-humanities' },
      { title: 'Computer Application', tagline: ['BCA', 'B.Sc. IT'], img: computerApplicationImg, slug: 'ug-computer-application' },
      { title: 'Natural Sciences', tagline: ['B.Sc.'], img: naturalSciencesImg, slug: 'ug-natural-sciences' },
      { title: 'Pharmacy', tagline: ['B.Pharm.'], img: pharmacyImg, slug: 'ug-pharmacy' },
    ],
  },
  {
    name: 'Postgraduate',
    slug: 'postgraduate',
    programs: [
      { title: 'Artificial Intelligence', tagline: ['M.Tech.', 'MBA'], img: aiImg, slug: 'pg-artificial-intelligence' },
      { title: 'Computer Science', tagline: ['M.Tech. CSE', 'M.Sc. IT'], img: computerScienceImg, slug: 'pg-computer-science' },
      { title: 'Engineering', tagline: ['M.Tech. CE', 'M.Tech. ME', 'M.Tech. EE', 'M.Tech. CSE', 'M.Tech.ECE'], img: engineeringImg, slug: 'pg-engineering' },
      { title: 'Management', tagline: ['MBA'], img: managementImg, slug: 'pg-management' },
      { title: 'Commerce & Economics', tagline: ['M.Com.', 'M.Sc.'], img: commerceImg, slug: 'pg-commerce-economics' },
      { title: 'Law', tagline: ['LL.M.'], img: lawImg, slug: 'pg-law' },
      { title: 'Biotechnology', tagline: ['M.Sc.', 'M.Tech.'], img: biotechnologyImg, slug: 'pg-biotechnology' },
      { title: 'Media Studies', tagline: ['M.A. (J&MC)'], img: mediaStudiesImg, slug: 'pg-media-studies' },
      { title: 'Agriculture', tagline: ['M.Sc.', 'MBA'], img: agricultureImg, slug: 'pg-agriculture' },
      { title: 'Natural Sciences', tagline: ['M.Sc.'], img: naturalSciencesImg, slug: 'pg-natural-sciences' },
      { title: 'Humanities', tagline: ['M.A.'], img: humanitiesImg, slug: 'pg-humanities' },
      { title: 'Computer Application', tagline: ['MCA'], img: computerApplicationImg, slug: 'pg-computer-application' },
      { title: 'Social Work', tagline: ['MSW'], img: socialWorkImg, slug: 'pg-social-work' },
    ],
  },
  {
    name: 'Industry Honours (L&T)',
    slug: 'industry-honours',
    programs: [
      { title: 'Artificial Intelligence', tagline: ['B.Tech. CSE', 'BCA', 'BBA', 'MBA'], img: aiImg, slug: 'ih-artificial-intelligence' },
      { title: 'Computer Science', tagline: ['B.Tech. ', 'BCA', 'M.Tech.'], img: computerScienceImg, slug: 'ih-computer-science' },
      { title: 'Engineering', tagline: ['B.Tech. CE', 'B.Tech. ME', 'B.Tech. EE', 'B.Tech. ECE'], img: engineeringImg, slug: 'ih-engineering' },
      { title: 'Management', tagline: ['BBA', 'MBA'], img: managementImg, slug: 'ih-management' },
      { title: 'Computer Application', tagline: ['BCA', 'MCA'], img: computerApplicationImg, slug: 'ih-computer-application' },
    ],
  },
  {
    name: 'Integrated',
    slug: 'integrated',
    programs: [
      { title: 'Engineering', tagline: ['B.Tech. + M.Tech. (CE, ME, CSE, ECE, EE)', 'B.Tech. (CE, ME, CSE, ECE, EE) + MBA'], img: engineeringImg, slug: 'int-engineering' },

      { title: 'Biotechnology', tagline: ['B.Tech. + M.Tech.', 'B.Tech. + MBA'], img: biotechnologyImg, slug: 'int-biotechnology' },
      { title: 'Law', tagline: ['BA + LL.B. (Hons.)', 'BBA + LL.B. (Hons.)'], img: lawImg, slug: 'int-law' },
    ],
  },
  {
    name: 'Polytechnic',
    slug: 'polytechnic',
    programs: [
      { title: 'Diploma', tagline: ['Civil', 'Automobile', 'Production', 'Mechanical', 'Electrical', 'Elec. & Comm.', 'Computer Science'], img: polytechnicDiplomaImg, slug: 'poly-diploma' },
      { title: 'Diploma (Lateral)', tagline: ['Civil', 'Automobile', 'Production', 'Mechanical', 'Electrical', 'Elec. & Comm.', 'Computer Science'], img: polytechnicLateralImg, slug: 'poly-lateral' },
    ],
  },
];

type Suggestion = Program & { tabName: string; tabIndex: number };

const allPrograms: Suggestion[] = tabs.flatMap((t, tabIndex) =>
  t.programs.map((p) => ({ ...p, tabName: t.name, tabIndex }))
);

export default function Programs() {
  const [active, setActive] = useState(0);
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setVisibleCount(4);
      else if (w >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const suggestions = useMemo<Suggestion[]>(() => {
    const q = normalizeSearchText(query.trim());
    if (!q) return [];
    return allPrograms
      .filter((p) => {
        const searchable = normalizeSearchText(
          `${p.title} ${p.tagline.join(' ')} ${p.tabName}`
        );

        return searchable.includes(q);
      })
      .slice(0, 8);
  }, [query]);

  const goToSlug = (s: Suggestion) => {
    setActive(s.tabIndex);
    setIndex(0);
    setQuery('');
    setShowSuggestions(false);
    window.location.hash = `#program/${s.slug}`;
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || suggestions.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlight((h) => (h + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlight((h) => (h - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      goToSlug(suggestions[highlight] ?? suggestions[0]);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const activeTab = tabs[active];
  const total = activeTab.programs.length;
  const maxIndex = Math.max(0, total - visibleCount);
  const safeIndex = Math.min(index, maxIndex);
  const showArrows = total > visibleCount;
  const cardWidth = 100 / visibleCount;

  const next = () => setIndex(Math.min(maxIndex, safeIndex + 1));
  const prev = () => setIndex(Math.max(0, safeIndex - 1));

  const selectTab = (i: number) => {
    setActive(i);
    setIndex(0);
  };

  return (
    <section className="bg-[#E0F1FF] ">
      <div className={`${Classes["container"]} py-8 md:py-10 lg:py-12`}>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="flex-1 min-w-[260px]">
            <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-[#0A4A8F] mt-1 leading-tight md:leading-tight">
              Explore <span className="text-[#FFC107]">Programs</span>
            </h2>

          </div>

          <div ref={searchRef} className="relative w-full md:w-96">
            <label className="sr-only" htmlFor="program-search">Search programs</label>
            <div
              className={`group relative flex items-center gap-2 rounded-full bg-white p-1.5 pl-5 shadow-[0_8px_24px_-12px_rgba(10,74,143,0.35)] ring-1 transition-all ${showSuggestions ? 'ring-[#0A4A8F]/40 shadow-[0_12px_30px_-10px_rgba(10,74,143,0.45)]' : 'ring-gray-200 hover:ring-[#0A4A8F]/30'
                }`}
            >
              <svg
                className="text-[#0A4A8F]/70 flex-shrink-0"
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                id="program-search"
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowSuggestions(true);
                  setHighlight(0);
                }}
                onFocus={() => setShowSuggestions(true)}
                onKeyDown={onKeyDown}
                placeholder="Search programs, streams..."
                className="flex-1 min-w-0 bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
                aria-autocomplete="list"
                aria-expanded={showSuggestions && suggestions.length > 0}
              />
              {query && (
                <button
                  type="button"
                  onClick={() => { setQuery(''); setShowSuggestions(false); }}
                  aria-label="Clear search"
                  className="flex-shrink-0 w-7 h-7 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 flex items-center justify-center transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  if (suggestions.length > 0) goToSlug(suggestions[highlight] ?? suggestions[0]);
                  else setShowSuggestions(true);
                }}
                aria-label="Search"
                className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#0A4A8F] to-[#1565C0] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg hover:from-[#083d75] hover:to-[#0d4f9e] active:scale-[0.97] transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>

            {showSuggestions && query.trim() && (
              <div
                role="listbox"
                className="absolute z-30 mt-2 w-full max-h-80 overflow-y-auto rounded-2xl border border-gray-100 bg-white shadow-[0_20px_50px_-12px_rgba(10,74,143,0.25)] py-1.5"
              >
                {suggestions.length === 0 ? (
                  <div className="px-4 py-4 text-sm text-gray-500 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    No programs match "<span className="font-semibold text-gray-700">{query}</span>"
                  </div>
                ) : (
                  suggestions.map((s, i) => (
                    <button
                      key={`${s.tabIndex}-${s.slug}`}
                      type="button"
                      role="option"
                      aria-selected={i === highlight}
                      onMouseEnter={() => setHighlight(i)}
                      onClick={() => goToSlug(s)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 mx-1 rounded-xl text-left transition-colors ${i === highlight ? 'bg-[#0A4A8F]/8 ring-1 ring-[#0A4A8F]/10' : 'hover:bg-gray-50'
                        }`}
                      style={{ width: 'calc(100% - 0.5rem)' }}
                    >
                      <img src={s.img} alt="" className="w-11 h-11 rounded-lg object-cover flex-shrink-0 ring-1 ring-gray-100" />
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold text-[#0A4A8F] truncate">{s.title}</div>
                        <div className="text-[11px] text-gray-500 truncate">
                          <span className="inline-block px-1.5 py-0.5 rounded bg-[#FFC107]/15 text-[#8a6500] font-medium mr-1.5">{s.tabName}</span>
                          /{s.slug}
                        </div>
                      </div>
                      <svg className="text-gray-300 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 md:mt-6 lg:mt-10 flex flex-wrap gap-2 md:gap-6 border-b border-gray-200 overflow-x-auto">
          {tabs.map((t, i) => (
            <button
              key={t.name}
              onClick={() => selectTab(i)}
              className={`pb-3 text-xs md:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${active === i
                ? 'text-[#0A4A8F] border-b-2 border-[#FFC107]'
                : 'text-gray-500 hover:text-[#0A4A8F]'
                }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        <div className="mt-5 md:mt-8 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out -mx-2.5"
              style={{ transform: `translateX(-${safeIndex * cardWidth}%)` }}
            >
              {activeTab.programs.map((p) => (
                <div
                  key={p.slug}
                  className="flex-shrink-0 px-2.5"
                  style={{ width: `${cardWidth}%` }}
                >
                  <a
                    href={`#program/${p.slug}`}
                    className="block relative rounded-xl overflow-hidden shadow-soft hover:shadow-card hover:-translate-y-1 transition-all group cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] bg-gray-900">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                        <h3 className="font-bold text-base">{p.title}</h3>
                        <p className="text-xs text-white/90 mt-1 leading-relaxed">{p.tagline.join(' • ')}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {showArrows && (
            <>
              <button
                onClick={prev}
                disabled={safeIndex === 0}
                aria-label="Previous programs"
                className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#0A4A8F] hover:bg-[#0A4A8F] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={next}
                disabled={safeIndex >= maxIndex}
                aria-label="Next programs"
                className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#0A4A8F] hover:bg-[#0A4A8F] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
