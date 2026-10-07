import type { FinderProgram } from "./programsNew";
// Scholarship slabs from the supplied design; update alongside the approved policy.
export const CORE_BTECH_NAMES = new Set([
  'B.Tech. in Civil Engineering with L&T',
  'B.Tech. in Mechanical Engineering with L&T',
  'B.Tech. in Electronics & Communication Engineering with L&T',
  'B.Tech. in Electrical Engineering with L&T',
]);
export function isLLMProgram(p: FinderProgram){ return /^LL\.M/.test(p.name); }
export function isPartTimeMTech(p: FinderProgram){ return /Part Time/i.test(p.name); }
export function scholarshipFeeBase(p: FinderProgram){
  return (isLLMProgram(p) || isPartTimeMTech(p)) ? p.fee : Math.max(0, p.fee - 100);
}

export function srmusetCategory(p: FinderProgram){
  if(!p) return null;
  if(isLLMProgram(p)) return null;
  if(p.entry !== 'First Year') return null;      // SRMUSET applies to fresh First Year admission
  if(p.lastq === 'Graduate') return null;         // published slabs cover UG/Integrated/Diploma/Polytechnic, not PG
  if(CORE_BTECH_NAMES.has(p.name)) return 'core';
  if(p.lastq === 'Class 10') return 'poly';
  return 'ug';
}
export const SCH_LABELS = {
  core:'B.Tech Core (Civil / Mechanical / EC / Electrical)',
  poly:'Polytechnic Programmes',
  ug:'UG & Integrated Programmes (incl. D.Pharm)',
};
export function schPctFor(cat: string, pct: number){
  if(cat==='ug'){
    if(pct>=95) return 100;
    if(pct>=90) return 60;
    if(pct>=80) return 25;
    if(pct>=70) return 15;
    if(pct>=60) return 10;
    if(pct>=30) return 8;
    return 0;
  }
  if(cat==='core'){
    if(pct>=90) return 50;
    if(pct>=85) return 35;
    if(pct>=80) return 30;
    return 25;
  }
  if(cat==='poly'){
    if(pct>=90) return 50;
    if(pct>=85) return 35;
    if(pct>=80) return 25;
    return 20;
  }
  return 0;
}
export const SCH_TABLES: Record<string, string[][]> = {
  ug: [['30 - 59.9','8%'],['60 - 69.9','10%'],['70 - 79.9','15%'],['80 - 89.9','25%'],['90 - 94.9','60%'],['≥ 95','100%']],
  core: [['< 80','25%'],['80 - 84.9','30%'],['85 - 89.9','35%'],['≥ 90','50%']],
  poly: [['< 80','20%'],['80 - 84.9','25%'],['85 - 89.9','35%'],['≥ 90','50%']],
};

/* ---- Merit Based Scholarship ---- */
export function meritCategory(p: FinderProgram){
  if(!p) return null;
  if(isLLMProgram(p)) return 'llm';
  if(p.entry !== 'First Year') return null;       // Merit-based is First Year only, per key points
  if(CORE_BTECH_NAMES.has(p.name)) return 'core';
  if(p.lastq === 'Class 10') return 'poly';
  if(p.lastq === 'Graduate') return 'pg';           // PG programmes, and B.Ed / LL.B.
  return 'ug';
}
export const MERIT_LABELS = {
  core:'B.Tech Core (Civil / Mechanical / EC / Electrical)',
  poly:'Polytechnic Programmes',
  ug:'UG & Integrated Programmes (incl. D.Pharm)',
  pg:'PG Programmes (incl. B.Ed. & LL.B.)',
  llm:'LL.M. (One & Two Year)',
};
export function meritPctFor(cat: string, pct: number){
  if(cat==='ug'){
    if(pct>=95) return 100;
    if(pct>=90) return 50;
    if(pct>=80) return 20;
    if(pct>=70) return 10;
    return 0;
  }
  if(cat==='pg'){
    if(pct>=90) return 50;
    if(pct>=80) return 35;
    if(pct>=70) return 15;
    if(pct>=60) return 7;
    if(pct>=50) return 5;
    return 0;
  }
  if(cat==='core'){
    if(pct>=90) return 50;
    if(pct>=85) return 35;
    if(pct>=80) return 30;
    return 25;
  }
  if(cat==='poly'){
    if(pct>=90) return 50;
    if(pct>=85) return 35;
    if(pct>=80) return 25;
    return 20;
  }
  if(cat==='llm'){
    return pct>=85 ? 15 : 10;
  }
  return 0;
}
export const MERIT_TABLES: Record<string, string[][]> = {
  ug: [['30 - 59.9','NA'],['60 - 69.9','NA'],['70 - 79.9','10%'],['80 - 89.9','20%'],['90 - 94.9','50%'],['≥ 95','100%']],
  pg: [['50 - 59.9','5%'],['60 - 69.9','7%'],['70 - 79.9','15%'],['80 - 89.9','35%'],['≥ 90','50%']],
  core: [['< 80','25%'],['80 - 84.9','30%'],['85 - 89.9','35%'],['≥ 90','50%']],
  poly: [['< 80','20%'],['80 - 84.9','25%'],['85 - 89.9','35%'],['≥ 90','50%']],
  llm: [['< 85','10%'],['≥ 85','15%']],
};

/* ---- Special Scholarship (flat, category-based, all years) ---- */
export const SPECIAL_CATEGORIES = [
  {key:'defence', label:'Defence, Paramilitary & Police', pct:25},
  {key:'sibling', label:'Sibling of Staff / Student / Alumni of SRM Group', pct:25},
  {key:'ward', label:'Ward of Staff / Student / Alumni of SRM Group', pct:25},
  {key:'divyang', label:'Divyang', pct:25},
  {key:'career', label:'Career Progression', pct:25},
  {key:'sports_national', label:'Sportsperson (National Level)', pct:25},
  {key:'sports_state', label:'Sportsperson (State Level)', pct:10},
  {key:'partner', label:'Candidate from Partner Institution (MoU)', pct:25},
  {key:'single_parent', label:'Single Parent', pct:25},
  {key:'other_states', label:'Students from Other States', pct:25},
  {key:'other_countries', label:'Students from Other Countries', pct:25},
];

