import type { FinderProgram } from "./programsNew";
export type Subjects = Record<string, boolean>;
export type Threshold = { gen: number; obc: number; scst: number };
// Rules transcribed from the supplied finder; not parsed from API eligibility HTML.
export const QUALS = [
  { key:'Class 10', title:'Class 10', desc:'For Polytechnic (Diploma) programmes — 1st Year' },
  { key:'Class 12', title:'Class 12', desc:'For Undergraduate & Integrated programmes — 1st Year' },
  { key:'Class 12 OR ITI', title:'Class 12 / ITI', desc:'For Polytechnic (Diploma) programmes — Lateral Entry, 2nd Year' },
  { key:'Diploma', title:'Polytechnic Diploma', desc:'For B.Tech — Lateral Entry, 2nd Year' },
  { key:'Graduate', title:'Graduation', desc:'For Postgraduate, LL.B. & B.Ed. programmes' },
];

export const CATEGORY_OPTS = [
  {key:'gen', label:'General'},
  {key:'ews', label:'EWS'},
  {key:'obc', label:'OBC'},
  {key:'sc', label:'SC'},
  {key:'st', label:'ST'},
  {key:'pwbd', label:'Divyang'},
];
export function catCol(cat: string){ return (cat==='sc'||cat==='st'||cat==='pwbd') ? 'scst' : (cat==='obc' ? 'obc' : 'gen'); }

/* ---------------------------------------------------------------
   CLASS 12 — subject-based domain rules
--------------------------------------------------------------- */
export const C12_SUBJECTS = [
  {key:'physics', label:'Physics'},
  {key:'chemistry', label:'Chemistry'},
  {key:'maths', label:'Mathematics'},
  {key:'biology', label:'Biology'},
  {key:'biotechnology', label:'Biotechnology'},
  {key:'lifesciences', label:'Life Sciences'},
  {key:'english', label:'English'},
  {key:'cs', label:'Computer Science / IT'},
  {key:'commerce', label:'Commerce / related subjects'},
  {key:'economics', label:'Economics'},
  {key:'agriculture', label:'Agriculture'},
  {key:'techvoc', label:'Technical Vocational subject'},
];
export const C10_SUBJECTS = [
  {key:'science', label:'Science'},
  {key:'maths', label:'Mathematics'},
  {key:'english', label:'English'},
];
export const C12ITI_SUBJECTS = [
  {key:'physics', label:'Physics'},
  {key:'chemistry', label:'Chemistry'},
  {key:'maths', label:'Mathematics'},
];
export const PCM = (s: Subjects) => s.physics && s.maths && (s.chemistry || s.cs || s.techvoc);
export const PCB_PCM = (s: Subjects) => s.physics && s.chemistry && (s.maths || s.biology);
export const PCM_PCB_FLEX = (s: Subjects) => s.physics && (s.maths || s.biology) && (s.chemistry || s.biotechnology || s.cs || s.techvoc);
export const BIOSCIENCE = (s: Subjects) => s.physics && (s.maths || s.biology) && (s.chemistry || s.biotechnology || s.cs);
export const PCB = (s: Subjects) => s.physics && s.chemistry && s.biology;
export const ANY = () => true;

export const C12_RULES: Record<string, (s: Subjects) => boolean> = {
  'Agriculture': s => (s.physics && s.chemistry && (s.maths||s.biology)) || s.agriculture,
  'Pharmacy': s => s.english && s.physics && s.chemistry && (s.maths||s.biology),
  'Bioscience': BIOSCIENCE,
  'Biotechnology': PCM_PCB_FLEX,
  'Information Technology': ANY,
  'Computer Application': ANY,
  'Data Science': ANY,
  'Artificial Intelligence': ANY,
  'Cyber Security': ANY,
  'Artificial Intelligence & Machine Learning': ANY,
  'Computer Science Engineering': PCM,
  'Engineering': PCM,
  'Civil Engineering': PCM,
  'Mechanical Engineering': PCM,
  'Electrical Engineering': PCM,
  'Electronics & Communication Engineering': PCM,
  'EV Engineering': PCM,
  'Integrated Program': PCM,
  'Advanced Construction Practices': PCM,
  'Semiconductor Design': PCM,
  'Fintech': ANY,
  'Management': ANY,
  'Business Analytics': ANY,
  'Commerce': s => s.commerce || s.maths,
  'Economics': s => s.maths || s.economics || s.commerce,
  'Natural Science': s => s.physics || s.chemistry || s.maths,
  'Physics': s => s.physics,
  'Chemistry': s => s.chemistry,
  'Mathematics': s => s.maths,
  'Food Technology': BIOSCIENCE,
  'Microbiology': BIOSCIENCE,
  'Nutrition & Dietetics': s => s.biology || s.lifesciences,
  'Humanities': ANY,
  'English': s => s.english,
  'Political Science': ANY,
  'Sociology': ANY,
  'Applied Psychology': ANY,
  'Journalism & Mass Comm.': ANY,
  'Social Work': ANY,
  'Allied Health Science': PCB,
  'Paramedical': PCB,
  'Law': ANY,
};
export const C12_THRESH = { gen:45, obc:45, scst:40 };
export const C12_THRESH_LAW = { gen:45, obc:42, scst:40 };
export const C12_THRESH_NUTRITION = { gen:50, obc:50, scst:45 };
export function c12Threshold(domain: string){
  if (domain === 'Law') return C12_THRESH_LAW;
  if (domain === 'Nutrition & Dietetics') return C12_THRESH_NUTRITION;
  return C12_THRESH;
}

/* ---------------------------------------------------------------
   CLASS 10  (Polytechnic Diploma, 1st year)
--------------------------------------------------------------- */
export const C10_THRESH = 35;

/* ---------------------------------------------------------------
   CLASS 12 OR ITI  (Diploma Lateral Entry, 2nd year)
--------------------------------------------------------------- */
export const C12ITI_PATHS = [
  {key:'12th', label:'Class 12 (with Physics, Chemistry & Maths)', threshold:35},
  {key:'iti', label:'Class 10 + ITI (2 Years)', threshold:50},
];

/* ---------------------------------------------------------------
   DIPLOMA holder  (B.Tech / B.Pharm Lateral Entry, 2nd year)
--------------------------------------------------------------- */
export const DIP_BRANCHES = [
  {key:'civil', label:'Civil Engineering', domains:['Civil Engineering','Engineering']},
  {key:'mech', label:'Mechanical Engineering', domains:['Mechanical Engineering','Engineering','EV Engineering']},
  {key:'elec', label:'Electrical Engineering', domains:['Electrical Engineering','Engineering','EV Engineering']},
  {key:'ece', label:'Electronics & Communication Engineering', domains:['Electronics & Communication Engineering','Engineering','EV Engineering']},
  {key:'cs', label:'Computer Science Engineering', domains:['Computer Science Engineering','Engineering']},
  {key:'bio', label:'B.Sc. (Science) / Biology stream', domains:['Biotechnology']},
];
export const DIP_THRESH = { gen:45, obc:45, scst:40 };

/* ---------------------------------------------------------------
   GRADUATE  (Postgraduate, LL.B., B.Ed.)
--------------------------------------------------------------- */
export const GRAD_DEGREES = [
  // Engineering & Technology
  {key:'btech_civil', group:'Engineering & Technology', label:'B.Tech / B.E. — Civil Engineering', domains:['Civil Engineering','Engineering','Environmental Engineering','Structural Engineering','Advanced Construction Practices']},
  {key:'btech_mech', group:'Engineering & Technology', label:'B.Tech / B.E. — Mechanical Engineering', domains:['Mechanical Engineering','Engineering','Production & Industrial Engineering']},
  {key:'btech_elec', group:'Engineering & Technology', label:'B.Tech / B.E. — Electrical Engineering', domains:['Electrical Engineering','Engineering','Power Electronics & Electric Drives','Renewable Energy and Energy Audit','EV Engineering']},
  {key:'btech_ece', group:'Engineering & Technology', label:'B.Tech / B.E. — Electronics & Communication', domains:['Electronics & Communication Engineering','Engineering','Digital Communication']},
  {key:'btech_cs', group:'Engineering & Technology', label:'B.Tech / B.E. — Computer Science / IT', domains:['Computer Science Engineering','Engineering','Data Science','Artificial Intelligence & Machine Learning','Computer Application']},
  {key:'btech_bio', group:'Engineering & Technology', label:'B.Tech — Biotechnology', domains:['Biotechnology']},
  {key:'btech_other', group:'Engineering & Technology', label:'B.Tech / B.E. — Other branch (Chemical, Aerospace, Automobile, Mining, Textile, etc.)', domains:['Engineering']},
  {key:'barch', group:'Engineering & Technology', label:'B.Arch. (Architecture)', domains:[]},
  {key:'bplan', group:'Engineering & Technology', label:'B.Planning', domains:[]},
  {key:'bvoc', group:'Engineering & Technology', label:'B.Voc. (Vocational)', domains:[]},

  // Science
  {key:'bsc_phy', group:'Science', label:'B.Sc. — Physics', domains:['Natural Science','Physics']},
  {key:'bsc_chem', group:'Science', label:'B.Sc. — Chemistry', domains:['Natural Science','Chemistry']},
  {key:'bsc_math', group:'Science', label:'B.Sc. — Mathematics / Statistics', domains:['Natural Science','Mathematics','Statistics']},
  {key:'bsc_cs', group:'Science', label:'B.Sc. — Computer Science / IT', domains:['Computer Application']},
  {key:'bsc_life', group:'Science', label:'B.Sc. — Life Sciences (Zoology / Botany / Biochemistry)', domains:['Bioscience','Environmental Science']},
  {key:'bsc_micro', group:'Science', label:'B.Sc. — Microbiology', domains:['Bioscience']},
  {key:'bsc_foodtech', group:'Science', label:'B.Sc. — Food Technology', domains:['Bioscience']},
  {key:'bsc_nutrition', group:'Science', label:'B.Sc. — Nutrition & Dietetics', domains:['Bioscience']},
  {key:'bsc_homesci', group:'Science', label:'B.Sc. — Home Science', domains:['Bioscience']},

  // Arts & Humanities
  {key:'ba_eng', group:'Arts & Humanities', label:'B.A. — English', domains:['Humanities','English']},
  {key:'ba_psych', group:'Arts & Humanities', label:'B.A. — Psychology', domains:['Humanities']},
  {key:'ba_polsci', group:'Arts & Humanities', label:'B.A. — Political Science', domains:['Humanities']},
  {key:'ba_soc', group:'Arts & Humanities', label:'B.A. — Sociology', domains:['Humanities']},
  {key:'ba_econ', group:'Arts & Humanities', label:'B.A. — Economics', domains:['Economics']},
  {key:'ba_other', group:'Arts & Humanities', label:'B.A. — History / Geography / Language / Other Humanities', domains:[]},
  {key:'ba_jmc', group:'Arts & Humanities', label:'B.A. — Journalism & Mass Communication', domains:[]},
  {key:'bfa', group:'Arts & Humanities', label:'B.F.A. / B.P.A. (Fine / Performing Arts)', domains:[]},
  {key:'bsw', group:'Arts & Humanities', label:'B.S.W. (Social Work)', domains:['Humanities','Social Work']},

  // Commerce & Management
  {key:'bcom', group:'Commerce & Management', label:'B.Com.', domains:['Commerce','Economics']},
  {key:'bba', group:'Commerce & Management', label:'BBA', domains:[]},
  {key:'bca', group:'Commerce & Management', label:'BCA', domains:['Computer Application']},
  {key:'professional', group:'Commerce & Management', label:'CA / CS / CMA (Professional qualification)', domains:['Commerce']},

  // Law
  {key:'llb', group:'Law', label:'LL.B. (Law Graduate)', domains:['Law']},

  // Medical & Health Sciences
  {key:'mbbs_bds', group:'Medical & Health Sciences', label:'MBBS / BDS / BAMS / BHMS / BUMS', domains:['Public Health']},
  {key:'bpharm', group:'Medical & Health Sciences', label:'B.Pharm. (Pharmacy)', domains:['Pharmacy','Public Health']},
  {key:'bsc_nursing', group:'Medical & Health Sciences', label:'B.Sc. Nursing / GNM', domains:['Public Health']},
  {key:'bpt', group:'Medical & Health Sciences', label:'B.P.T. (Physiotherapy)', domains:['Public Health']},
  {key:'bot', group:'Medical & Health Sciences', label:'B.O.T. (Occupational Therapy)', domains:['Public Health']},
  {key:'bmls', group:'Medical & Health Sciences', label:'B.M.L.S. / B.M.L.T. (Medical Lab Science)', domains:['Public Health']},
  {key:'bped', group:'Medical & Health Sciences', label:'B.P.Ed. (Physical Education)', domains:[]},

  // Agriculture & Allied
  {key:'bsc_agri', group:'Agriculture & Allied', label:'B.Sc.(Hons.) Agriculture', domains:['Agriculture']},
  {key:'bsc_horti', group:'Agriculture & Allied', label:'B.Sc.(Hons.) Horticulture', domains:['Agriculture','Horticulture']},
  {key:'bsc_forestry', group:'Agriculture & Allied', label:'B.Sc. Forestry', domains:['Agriculture']},
  {key:'bfsc', group:'Agriculture & Allied', label:'B.F.Sc. (Fisheries Science)', domains:['Agriculture']},
  {key:'bvsc', group:'Agriculture & Allied', label:'B.V.Sc. & A.H. (Veterinary Science)', domains:['Agriculture','Public Health']},

  // Design & Others
  {key:'bdes', group:'Design & Others', label:'B.Des. (Design)', domains:[]},
  {key:'bhm', group:'Design & Others', label:'B.H.M. / B.H.M.C.T. (Hotel Management)', domains:[]},
  {key:'any', group:'Design & Others', label:"Any other 3-year Bachelor's Degree", domains:[]},
];
/* Domains open to every graduate, regardless of which degree above is picked —
   general MBA (all specialisations except Agribusiness, which needs an
   Agriculture background), M.A. (J&MC), B.Ed., LL.B., M.A. Psychology,
   M.A. Political Science, M.A. Sociology. */
export const UNIVERSAL_GRAD_DOMAINS = [
  'Management','Business Analytics','Healthcare & Hospital Management','Leadership & Governance','Fintech',
  'Education','Journalism & Mass Comm.','Law','Psychology','Political Science','Sociology',
];
/* Programmes that need more than just "any graduate" despite sharing a domain
   with universally-open programmes — checked in showPrograms(). */
export const PROGRAM_EXTRA_REQUIREMENT: Record<string, { domain?: string; gradDegree?: string }> = {
  'M.B.A. in Agribusiness Management': { domain: 'Agriculture' },
  'LL.M. in Criminal & Security Law': { gradDegree: 'llb' },
  'LL.M. in Corporate & Commercial Law': { gradDegree: 'llb' },
  'LL.M. in Constitutional & Administrative Law': { gradDegree: 'llb' },
  'LL.M. in International & Comparative Law': { gradDegree: 'llb' },
  'LL.M.': { gradDegree: 'llb' },
};

/* ---------------------------------------------------------------
   Domain display order — most sought-after first
--------------------------------------------------------------- */
export const DOMAIN_PRIORITY = [
  'Computer Science Engineering','Engineering','Artificial Intelligence & Machine Learning','Data Science',
  'Artificial Intelligence','Cyber Security','Fintech','Computer Application','Information Technology',
  'Semiconductor Design','Electronics & Communication Engineering','Electrical Engineering','Mechanical Engineering','Civil Engineering',
  'EV Engineering','Digital Communication','Power Electronics & Electric Drives','Renewable Energy and Energy Audit',
  'Production & Industrial Engineering','Structural Engineering','Environmental Engineering','Advanced Construction Practices',
  'Integrated Program','Management','Business Analytics','Healthcare & Hospital Management','Leadership & Governance',
  'Commerce','Economics','Law','Allied Health Science','Paramedical','Pharmacy','Biotechnology','Bioscience',
  'Food Technology','Microbiology','Nutrition & Dietetics','Agriculture','Horticulture','Journalism & Mass Comm.',
  'Natural Science','Physics','Chemistry','Mathematics','Statistics','Environmental Science','Humanities','English',
  'Psychology','Applied Psychology','Political Science','Sociology','Social Work','Public Health','Education',
  'Polytechnic (Diploma)',
];
export function domainRank(d: string){ const i = DOMAIN_PRIORITY.indexOf(d); return i===-1 ? 999 : i; }
export function sortByAttractiveness(list: string[]){ return [...list].sort((a,b)=>domainRank(a)-domainRank(b)); }

/* Polytechnic and Diploma are the same offering under two domain tags in the
   source data — merge them into one display domain everywhere. */
export const DOMAIN_MERGE_GROUPS: Record<string, string[]> = { 'Polytechnic (Diploma)': ['Polytechnic','Diploma'] };
export const DOMAIN_CANONICAL: Record<string, string> = {};
Object.keys(DOMAIN_MERGE_GROUPS).forEach(canon=>{
  DOMAIN_MERGE_GROUPS[canon].forEach(orig=>{ DOMAIN_CANONICAL[orig] = canon; });
});
export function canonicalDomain(d: string){ return DOMAIN_CANONICAL[d] || d; }
export function programHasDomain(p: FinderProgram, domain: string){ return p.domains.some(d => canonicalDomain(d) === domain); }

export const GRAD_THRESH: Record<string, Threshold> = {
  'Civil Engineering':{gen:50,obc:50,scst:45}, 'Engineering':{gen:50,obc:50,scst:45},
  'Environmental Engineering':{gen:50,obc:50,scst:45}, 'Structural Engineering':{gen:50,obc:50,scst:45},
  'Advanced Construction Practices':{gen:50,obc:50,scst:45},
  'Mechanical Engineering':{gen:50,obc:50,scst:45}, 'Production & Industrial Engineering':{gen:50,obc:50,scst:45},
  'Electrical Engineering':{gen:50,obc:50,scst:45}, 'Power Electronics & Electric Drives':{gen:50,obc:50,scst:45},
  'Renewable Energy and Energy Audit':{gen:50,obc:50,scst:45}, 'EV Engineering':{gen:50,obc:50,scst:45},
  'Electronics & Communication Engineering':{gen:50,obc:50,scst:45}, 'Digital Communication':{gen:50,obc:50,scst:45},
  'Computer Science Engineering':{gen:50,obc:50,scst:45}, 'Data Science':{gen:50,obc:50,scst:45},
  'Artificial Intelligence & Machine Learning':{gen:50,obc:50,scst:45}, 'Computer Application':{gen:50,obc:50,scst:45},
  'Biotechnology':{gen:50,obc:50,scst:45},
  'Natural Science':{gen:45,obc:45,scst:40}, 'Physics':{gen:45,obc:45,scst:40}, 'Chemistry':{gen:45,obc:45,scst:40},
  'Mathematics':{gen:45,obc:45,scst:40}, 'Statistics':{gen:45,obc:45,scst:40},
  'Bioscience':{gen:45,obc:45,scst:40}, 'Environmental Science':{gen:45,obc:45,scst:40},
  'Agriculture':{gen:50,obc:50,scst:45}, 'Horticulture':{gen:50,obc:50,scst:45},
  'Humanities':{gen:45,obc:45,scst:40}, 'English':{gen:45,obc:45,scst:40}, 'Psychology':{gen:45,obc:45,scst:40},
  'Political Science':{gen:45,obc:45,scst:40}, 'Sociology':{gen:45,obc:45,scst:40}, 'Social Work':{gen:45,obc:45,scst:40},
  'Public Health':{gen:50,obc:50,scst:45},
  'Commerce':{gen:50,obc:50,scst:45}, 'Economics':{gen:50,obc:50,scst:45},
  'Law':{gen:50,obc:50,scst:45},
  'Pharmacy':{gen:55,obc:55,scst:50},
  'Education':{gen:50,obc:50,scst:45},
  'Management':{gen:50,obc:50,scst:45}, 'Business Analytics':{gen:50,obc:50,scst:45},
  'Healthcare & Hospital Management':{gen:50,obc:50,scst:45}, 'Leadership & Governance':{gen:50,obc:50,scst:45},
  'Fintech':{gen:50,obc:50,scst:45},
  'Journalism & Mass Comm.':{gen:45,obc:45,scst:40},
};
