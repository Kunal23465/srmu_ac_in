import { useEffect, useMemo, useRef, useState } from 'react';

import agricultureImg from '../../assets/new-home/programs/AGRICULTURE.webp';
import Classes from '../../utils/styles/Global.module.css';
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
import { Link, useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProgramFinder } from '../../store/program-finder/programFinderThunk';

type Program = { title: string; tagline: string[]; img: string; slug: string };

const tabs = [
  {
    name: 'Undergraduate',
    slug: 'undergraduate',
    programs: [
      { title: 'Artificial Intelligence', tagline: ['B.Tech. CSE', 'BCA', 'BBA'], img: aiImg, slug: 'artificial-intelligence/undergraduate' },
      { title: 'Computer Science', tagline: ['B.Tech. CSE', 'B.Sc. IT, BCA'], img: computerScienceImg, slug: 'computer-science-engineering/undergraduate' },
      { title: 'Engineering', tagline: ['B.Tech. CE', 'B.Tech. ME', 'B.Tech. EE', 'B.Tech. CSE', 'B.Tech.ECE'], img: engineeringImg, slug: 'engineering/undergraduate' },
      { title: 'Management', tagline: ['BBA'], img: managementImg, slug: 'management/undergraduate' },
      { title: 'Commerce & Economics', tagline: ['B.Com. (Hons.)', 'B.Com. as per NEP', 'B.A. Economics', 'B.A. (Hons.)'], img: commerceImg, slug: 'commerce-and-economics/undergraduate' },
      { title: 'Law', tagline: ['BA LL.B. (Hons.)', 'BBA LL.B. (Hons.)', 'LL.B.'], img: lawImg, slug: 'legal-studies-law/undergraduate' },
      { title: 'Biotechnology', tagline: ['B.Sc. (Hons.)', 'B.Tech.'], img: biotechnologyImg, slug: 'bio-technology/undergraduate' },
      { title: 'Microbiology', tagline: ['B.Sc. (Hons.)'], img: microbiologyImg, slug: 'microbiology/undergraduate' },
      { title: 'Media Studies', tagline: ['B.A. (J&MC)'], img: mediaStudiesImg, slug: 'media-studies/undergraduate' },
      { title: 'Agriculture', tagline: ['B.Sc. (Hons.)'], img: agricultureImg, slug: 'agriculture/undergraduate' },
      { title: 'Nutrition & Dietetics', tagline: ['B.Sc. (Hons.)'], img: nutritionImg, slug: 'nutrition-dietetics/undergraduate' },
      { title: 'Humanities', tagline: ['B.A. (Hons.)'], img: humanitiesImg, slug: 'humanities/undergraduate' },
      { title: 'Computer Application', tagline: ['BCA', 'B.Sc. IT'], img: computerApplicationImg, slug: 'computer-application/undergraduate' },
      { title: 'Natural Sciences', tagline: ['B.Sc.'], img: naturalSciencesImg, slug: 'natural-sciences/undergraduate' },
      { title: 'Pharmacy', tagline: ['B.Pharm.'], img: pharmacyImg, slug: 'pharmacy/undergraduate' },
    ],
  },

  {
    name: 'Postgraduate',
    slug: 'postgraduate',
    programs: [
      { title: 'Artificial Intelligence', tagline: ['M.Tech.', 'MBA'], img: aiImg, slug: 'artificial-intelligence/postgraduate' },
      { title: 'Computer Science', tagline: ['M.Tech. CSE', 'M.Sc. IT'], img: computerScienceImg, slug: 'computer-science-engineering/postgraduate' },
      { title: 'Engineering', tagline: ['M.Tech. CE', 'M.Tech. ME', 'M.Tech. EE', 'M.Tech. CSE', 'M.Tech.ECE'], img: engineeringImg, slug: 'engineering/postgraduate' },
      { title: 'Management', tagline: ['MBA'], img: managementImg, slug: 'management/postgraduate' },
      { title: 'Commerce & Economics', tagline: ['M.Com.', 'M.Sc.'], img: commerceImg, slug: 'commerce-and-economics/postgraduate' },
      { title: 'Law', tagline: ['LL.M.'], img: lawImg, slug: 'legal-studies-law/postgraduate' },
      { title: 'Biotechnology', tagline: ['M.Sc.', 'M.Tech.'], img: biotechnologyImg, slug: 'bio-technology/postgraduate' },
      { title: 'Media Studies', tagline: ['M.A. (J&MC)'], img: mediaStudiesImg, slug: 'media-studies/postgraduate' },
      { title: 'Agriculture', tagline: ['M.Sc.', 'MBA'], img: agricultureImg, slug: 'agriculture/postgraduate' },
      { title: 'Natural Sciences', tagline: ['M.Sc.'], img: naturalSciencesImg, slug: 'natural-sciences/postgraduate' },
      { title: 'Humanities', tagline: ['M.A.'], img: humanitiesImg, slug: 'humanities/postgraduate' },
      { title: 'Computer Application', tagline: ['MCA'], img: computerApplicationImg, slug: 'computer-application/postgraduate' },
      { title: 'Social Work', tagline: ['MSW'], img: socialWorkImg, slug: 'social-work/postgraduate' },
    ],
  },

  {
    name: 'Industry Honours (L&T)',
    slug: 'industry-honors',
    programs: [
      { title: 'Artificial Intelligence', tagline: ['B.Tech. CSE', 'BCA', 'BBA', 'MBA'], img: aiImg, slug: 'artificial-intelligence/industry-honors1' },
      { title: 'Computer Science', tagline: ['B.Tech.', 'BCA', 'M.Tech.'], img: computerScienceImg, slug: 'computer-science-engineering/industry-honors1' },
      { title: 'Engineering', tagline: ['B.Tech. CE', 'B.Tech. ME', 'B.Tech. EE', 'B.Tech. ECE'], img: engineeringImg, slug: 'engineering/industry-honors1' },
      { title: 'Management', tagline: ['BBA', 'MBA'], img: managementImg, slug: 'management/industry-honors1' },
      { title: 'Computer Application', tagline: ['BCA', 'MCA'], img: computerApplicationImg, slug: 'computer-application/industry-honors1' },
    ],
  },

  {
    name: 'Integrated',
    slug: 'integrated',
    programs: [
      { title: 'Engineering', tagline: ['B.Tech. + M.Tech. (CE, ME, CSE, ECE, EE)', 'B.Tech. (CE, ME, CSE, ECE, EE) + MBA'], img: engineeringImg, slug: 'engineering/integrated' },
      { title: 'Biotechnology', tagline: ['B.Tech. + M.Tech.', 'B.Tech. + MBA'], img: biotechnologyImg, slug: 'bio-technology/integrated' },
      { title: 'Law', tagline: ['BA + LL.B. (Hons.)', 'BBA + LL.B. (Hons.)'], img: lawImg, slug: 'legal-studies-law/integrated' },
    ],
  },

  {
    name: 'Polytechnic',
    slug: 'polytechnic',
    programs: [
      { title: 'Diploma', tagline: ['Civil', 'Automobile', 'Production', 'Mechanical', 'Electrical', 'Elec. & Comm.', 'Computer Science'], img: polytechnicDiplomaImg, slug: 'polytechnic/polytechnic-diploma' },
      { title: 'Diploma (Lateral)', tagline: ['Civil', 'Automobile', 'Production', 'Mechanical', 'Electrical', 'Elec. & Comm.', 'Computer Science'], img: polytechnicLateralImg, slug: 'polytechnic-lateral/polytechnic-diploma' },
    ],
  },
];

// Shape of a program coming back from fetchAllProgramFinder (matches the real API payload).
type ProgramTypeItem = { programTypeId: number; programTypeName: string; programTypeSlug: string };
type DisciplineItem = { programDisciplineId: number; programDisciplineName: string; programDisciplineFlag: string };

type ApiProgram = {
  programId: number;
  name?: string;
  displayTitle?: string;
  title?: string;
  slug?: string;
  imagePath?: string | null;
  departmentSlug?: string | null;
  totalDurationYear?: string;
  totalFees?: number;
  programType?: ProgramTypeItem[];
  discipline?: DisciplineItem[];
};

// Strip dots, spaces, &, (), -, etc. so "bca" matches "B.C.A.", "bcom" matches "B.Com." etc.
const normalize = (s: string) => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');

export default function Programs() {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [query, setQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const { data } = useSelector((state: RootState) => state.getProgramFinder);

  const activeTab = tabs[active];

  // activeTab drives the program type filter sent to the API
  const selectedProgramType = activeTab.slug;
  const selectedDiscipline: string | undefined = undefined;

  // ---- accessor helpers (match the real API shape) ----
  const pTitle = (p: ApiProgram) => p.displayTitle || p.name || p.title || '';
  const pImg = (p: ApiProgram) => p.imagePath || '';
  const pType = (p: ApiProgram) =>
    p.programType?.find((t) => t.programTypeSlug === activeTab.slug)?.programTypeName ??
    p.programType?.[0]?.programTypeName ??
    activeTab.name;
  const pDepartmentSlug = (p: ApiProgram) => p.slug ?? '';

  // build one normalized blob per program from every searchable field
  const searchableText = (p: ApiProgram) => {
    const parts = [
      p.displayTitle ?? '',
      p.name ?? '',
      p.title ?? '',
      p.slug ?? '',
      ...(p.discipline?.map((d) => d.programDisciplineName) ?? []),
      ...(p.discipline?.map((d) => d.programDisciplineFlag) ?? []),
      ...(p.programType?.map((t) => t.programTypeName) ?? []),
    ];
    return normalize(parts.join(' '));
  };

  // responsive visible card count
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

  // close dropdown on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  // debounce the typed query
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(query), 300);
    return () => clearTimeout(t);
  }, [query]);

  // fetch from API whenever search / tab changes
  useEffect(() => {
    const trimmedSearch = debouncedSearch.trim();
    const params = {
      ...(selectedProgramType ? { programTypeSlug: selectedProgramType } : {}),
      ...(selectedDiscipline ? { programDisciplineSlug: selectedDiscipline } : {}),
      ...(trimmedSearch ? { name: trimmedSearch } : {}),
    };

    dispatch(
      fetchAllProgramFinder(Object.keys(params).length > 0 ? params : undefined),
    );
  }, [debouncedSearch, dispatch, selectedDiscipline, selectedProgramType]);

  // suggestions from the API result, normalized so dotted/abbreviated searches work
  const suggestions = useMemo<ApiProgram[]>(() => {
    const q = normalize(debouncedSearch);
    if (!q) return [];
    // if your payload is wrapped, change `data` to data?.data / data?.programs here
    const list: ApiProgram[] = Array.isArray(data) ? data : [];
    return list.filter((p) => searchableText(p).includes(q)).slice(0, 8);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, debouncedSearch]);

  const goToProgram = (p: ApiProgram) => {
    setIndex(0);
    setQuery('');
    setShowSuggestions(false);

    const dept = pDepartmentSlug(p);
    // departmentSlug some programs me null hai -> fallback to program's own slug
    navigate(`program/${dept || p.slug || ''}`);
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
      goToProgram(suggestions[highlight] ?? suggestions[0]);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

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
console.log("data",data)
  return (
    <section className="bg-[#E0F1FF] ">
      <div className={`${Classes['container']} py-8 md:py-10 lg:py-12`}>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="flex-1 min-w-[260px]">
            <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-[#0A4A8F] mt-1 leading-tight md:leading-tight">
              Explore <span className="text-[#FFC107]">Programs</span>
            </h2>
          </div>

          <div ref={searchRef} className="relative w-full md:w-96">
            <label className="sr-only" htmlFor="program-search">
              Search programs
            </label>
            <div
              className={`group relative flex items-center gap-2 rounded-full bg-white p-1.5 pl-5 shadow-[0_8px_24px_-12px_rgba(10,74,143,0.35)] ring-1 transition-all ${
                showSuggestions
                  ? 'ring-[#0A4A8F]/40 shadow-[0_12px_30px_-10px_rgba(10,74,143,0.45)]'
                  : 'ring-gray-200 hover:ring-[#0A4A8F]/30'
              }`}
            >
              <svg
                className="text-[#0A4A8F]/70 flex-shrink-0"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
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

              <button
                type="button"
                onClick={() => {
                  if (suggestions.length > 0) goToProgram(suggestions[highlight] ?? suggestions[0]);
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

            {/* ---- suggestions dropdown ---- */}
            {showSuggestions && debouncedSearch.trim() && (
              <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-15px_rgba(10,74,143,0.35)] ring-1 ring-gray-100">
                {suggestions.length > 0 ? (
                  <ul className="max-h-80 overflow-y-auto py-1.5">
                    {suggestions.map((p, i) => (
                      <li key={p.programId ?? i}>
                        <button
                          type="button"
                          onMouseEnter={() => setHighlight(i)}
                          onClick={() => goToProgram(p)}
                          className={`flex cursor-pointer w-full items-center gap-3 px-3 py-2.5 text-left transition-colors ${
                            i === highlight ? 'bg-[#E0F1FF]' : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                          
                              <div className="flex h-full w-full items-center justify-center text-[#0A4A8F]/40">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                </svg>
                              </div>
                            
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-gray-800">{pTitle(p)}</p>
                            <p className="truncate text-xs text-gray-500">{pType(p)}</p>
                          </div>
                          <svg className="flex-shrink-0 text-gray-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-6 text-center text-sm text-gray-500">
                    No programs found for &ldquo;{debouncedSearch}&rdquo;
                  </div>
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
              className={`pb-3 text-xs md:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                active === i
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
              {activeTab.programs.map((p: Program) => (
                <div
                  key={p.slug}
                  className="flex-shrink-0 px-2.5"
                  style={{ width: `${cardWidth}%` }}
                >
                  <Link
                    to={`${p.slug}`}
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
                  </Link>
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