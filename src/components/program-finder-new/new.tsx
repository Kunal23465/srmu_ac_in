import { useState, type ReactNode } from "react";
import { ArrowRight, BookOpen, Check, ExternalLink, GraduationCap, School, Wrench, BriefcaseBusiness, RotateCcw } from "lucide-react";
import { QUALS, CATEGORY_OPTS, C12_SUBJECTS, C10_SUBJECTS, C12ITI_SUBJECTS, C12ITI_PATHS, DIP_BRANCHES, GRAD_DEGREES, C12_THRESH, catCol } from "./rulesNew";
import { emptyProfile, findEligiblePrograms, qualifyingCombinations, updateFinderProfile, percentage, programsInDomain, validateProfile, type FinderProfile } from "./eligibilityNew";
import type { FinderProgram } from "./programsNew";
import { useProgramFees, formatRupees } from "./feesNew";
import { useProgramsData } from "./useProgramsData";
import ScholarshipsNew from "./ScholarshipsNew";
import FinderIntroNew, { FinderSupportNew } from "./FinderIntroNew";

const qualificationIcons = [School, BookOpen, Wrench, BriefcaseBusiness, GraduationCap];
const commonCombinations = [
  { label: "PCM", subjects: ["physics", "chemistry", "maths"] },
  { label: "PCB", subjects: ["physics", "chemistry", "biology"] },
  { label: "PCMB", subjects: ["physics", "chemistry", "maths", "biology"] },
];
import { buttonClass, chipClass, inputClass, Panel, Field, scrollToSection } from "./uiNew";

function Choices({ legend, children }: { legend: string; children: ReactNode }) {
  return <fieldset><legend className="mb-3 text-sm font-semibold text-[#14284E]">{legend}</legend><div className="flex flex-wrap gap-2">{children}</div></fieldset>;
}
function Marks({ title, obtained, total, onObtained, onTotal, examples = ["410", "500"] }: { title: string; obtained: string; total: string; onObtained: (v: string) => void; onTotal: (v: string) => void; examples?: [string, string] }) {
  const pct = percentage(obtained, total);
  return <fieldset><legend className="mb-3 text-sm font-semibold text-[#14284E]">{title}</legend>
    <div className="grid gap-4 sm:grid-cols-2"><Field label={`${title} — marks obtained`}><input type="number" min="0" step="any" className={inputClass} value={obtained} onChange={e => onObtained(e.target.value)} placeholder={`e.g. ${examples[0]}`} /></Field><Field label={`${title} — maximum marks`}><input type="number" min="1" step="any" className={inputClass} value={total} onChange={e => onTotal(e.target.value)} placeholder={`e.g. ${examples[1]}`} /></Field></div>
    <div className="mt-4 flex items-center justify-between gap-4 rounded-xl bg-[#14284E] px-5 py-4 text-white"><span className="text-xs font-medium uppercase tracking-wider text-[#21A5DB]">Your percentage</span><output className="text-2xl font-bold" aria-live="polite">{pct === null ? "—" : pct.toFixed(2)}<span className="ml-1 text-base font-normal">%</span></output></div>
  </fieldset>;
}
function ProgramCard({ program, onEstimate }: { program: FinderProgram; onEstimate: () => void }) {
  const fees = useProgramFees(program);
  return <article className="group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#21A5DB]/60 hover:shadow-lg hover:shadow-[#0F4A85]/5 sm:p-6">
    <span className="mb-4 self-start rounded-full bg-[#E0F1FF] px-3 py-1.5 text-[11px] font-semibold text-[#0F4A85]">{program.entry}</span>
    <h3 className="!text-base !font-semibold !leading-relaxed !text-[#14284E]"><a className="hover:text-[#0F4A85] hover:underline" href={program.link.replace("https://srmu.ac.in", "")} target="_blank" rel="noopener noreferrer">{program.name} <ExternalLink className="inline" size={14} aria-label="Opens programme details in a new tab" /></a></h3>
    <dl className="mt-auto pt-5"><div className="mb-4 flex justify-between border-t border-dashed border-slate-200 pt-3 text-sm"><dt className="text-slate-500">Duration</dt><dd className="font-semibold text-[#14284E]">{program.duration}</dd></div><div className="grid grid-cols-2 gap-3"><div><dt className="text-xs text-slate-500">Programme fee</dt><dd className="mt-1 text-lg font-bold text-[#0F4A85]">{formatRupees(fees.fee)}</dd></div><div><dt className="text-xs text-slate-500">Caution money</dt><dd className="mt-1 text-lg font-bold text-[#0F4A85]">{formatRupees(fees.caution)}</dd></div></div></dl>
    <p className="mt-3 text-xs text-slate-500">{fees.source === "loading" ? "Checking current fees…" : fees.source === "live" ? "Current fees · first admission year" : "Reference fees · confirm with Admissions"}</p>
    <button className="mt-5 flex items-center justify-between gap-2 rounded-lg bg-[#E0F1FF] px-3 py-3 text-left text-sm font-semibold text-[#0F4A85] hover:bg-[#E0F1FF]" onClick={onEstimate}>Estimate scholarship <ArrowRight size={16} aria-hidden="true" /></button>
    <a href="https://studentportal.srmu.ac.in" target="_blank" rel="noopener noreferrer" className="mt-3 rounded-lg bg-[#FFB703] p-3 text-center text-sm font-semibold text-[#14284E] hover:bg-[#FFB703]">Apply online <ExternalLink size={14} className="ml-1 inline" aria-hidden="true" /></a>
  </article>;
}

export default function NewProgramFinder() {
  const [profile, setProfile] = useState<FinderProfile>(emptyProfile);
  const [computed, setComputed] = useState(false);
  const [error, setError] = useState("");
  const [activeDomain, setActiveDomain] = useState("");
  const [showOthers, setShowOthers] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [scholarshipOpen, setScholarshipOpen] = useState(false);
  const update = (patch: Partial<FinderProfile>) => {
    setProfile(previous => updateFinderProfile(previous, patch));
    setComputed(false); setError(""); setActiveDomain(""); setShowOthers(false); setSearch(""); setSelectedProgram(""); setScholarshipOpen(false);
  };
  const reset = () => { update(emptyProfile); scrollToSection("finder-qualification"); };
  const programsData = useProgramsData();
  const allPrograms: FinderProgram[] = programsData.programs;
  const results = computed ? findEligiblePrograms(allPrograms, profile) : null;
  const subjectOptions = profile.bucket === "Class 12" ? C12_SUBJECTS : profile.bucket === "Class 10" ? C10_SUBJECTS : profile.bucket === "Class 12 OR ITI" && profile.itiPath === "12th" ? C12ITI_SUBJECTS : [];
  const combinations = qualifyingCombinations(profile);
  const combinationMinimum = C12_THRESH[catCol(profile.category)];
  const programs = results && activeDomain ? programsInDomain(results.programs, activeDomain) : [];
  const visiblePrograms = programs.filter(p => p.name.toLowerCase().includes(search.trim().toLowerCase()));
  const activeStep = computed ? 2 : profile.bucket ? 1 : 0;
  const estimate = (name = "") => { setSelectedProgram(name); setScholarshipOpen(true); scrollToSection("finder-scholarships"); };

  return <div className="bg-[#E6E6E7] pb-20 text-[#14284E] [&_button]:cursor-pointer [&_input]:accent-[#0F4A85]">
    <FinderIntroNew />
    <div className="mx-auto max-w-6xl space-y-8 px-4 pt-8 sm:px-5 sm:pt-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <ol aria-label="Program finder progress" className="grid w-full gap-2 sm:w-auto sm:flex sm:gap-0">
          {["Qualification", "Your details", "Eligible programmes"].map((label, i) => <li key={label} aria-current={activeStep === i ? "step" : undefined} className="flex items-center gap-3 sm:gap-4">
            {i > 0 && <span aria-hidden="true" className="mx-4 hidden h-px w-8 bg-slate-300 sm:block" />}
            <span className={`flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${i <= activeStep ? "bg-[#0F4A85] text-white shadow-md shadow-[#0F4A85]/10" : "border border-slate-300 bg-white text-slate-400"}`}>{i < activeStep ? <Check size={16} aria-label="Complete" /> : `0${i + 1}`}</span>
            <span className={`text-sm ${activeStep === i ? "font-semibold text-[#0F4A85]" : "text-slate-500"}`}>{label}</span>
          </li>)}
        </ol>
        {profile.bucket && <button onClick={reset} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-[#0F4A85] hover:border-[#0F4A85]"><RotateCcw size={14} aria-hidden="true" />Start again</button>}
      </div>
      <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
      <Panel id="finder-qualification" title="1. Your qualification" hint="Select the qualification you have passed or are currently appearing for.">
        <fieldset><legend className="sr-only">Your qualification</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {QUALS.map((q, index) => {
              const Icon = qualificationIcons[index];
              const selected = profile.bucket === q.key;
              return <label key={q.key} className={`group relative flex cursor-pointer items-start gap-3 rounded-2xl border p-5 pr-10 transition focus-within:ring-2 focus-within:ring-[#21A5DB] ${selected ? "border-[#0F4A85] bg-[#E0F1FF] shadow-sm" : "border-slate-200 bg-white hover:border-[#21A5DB] hover:bg-[#E0F1FF]"} ${index === QUALS.length - 1 ? "sm:col-span-2" : ""}`}>
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${selected ? "bg-[#0F4A85] text-white" : "bg-[#E0F1FF] text-[#0F4A85]"}`}><Icon size={20} strokeWidth={1.6} aria-hidden="true" /></span>
                <span className="min-w-0"><span className="block text-sm font-semibold text-[#14284E]">{q.title}</span><span className="mt-1.5 block text-xs leading-5 text-slate-500">{q.desc}</span></span>
                <input type="radio" name="finder-qualification" className="absolute right-4 top-5 size-4" value={q.key} checked={selected} onChange={() => { update({ ...emptyProfile, subjects: {}, bucket: q.key }); scrollToSection("finder-details"); }} />
              </label>;
            })}
          </div>
        </fieldset>
      </Panel>
      <FinderSupportNew />
      </div>
      {profile.bucket && <Panel id="finder-details" title="2. Tell us about your studies" hint="Your subjects, qualification and marks help us find programmes that match your background.">
        <form className="space-y-6" noValidate onSubmit={e => { e.preventDefault(); const message = validateProfile(profile); setError(message || ""); if (message) return; setComputed(true); setActiveDomain(""); setShowOthers(false); setSearch(""); scrollToSection("finder-results"); }}>
          {profile.bucket === "Class 12 OR ITI" && <Choices legend="Entry route">{C12ITI_PATHS.map(p => <label key={p.key} className={chipClass}><input type="radio" name="finder-iti" checked={profile.itiPath === p.key} onChange={() => update({ itiPath: p.key, subjects: {} })} />{p.label}</label>)}</Choices>}
          {profile.bucket === "Class 12" && <div>
            <p className="mb-3 !text-sm !font-semibold">Quickly add a subject combination</p>
            <div className="flex flex-wrap gap-2">
              {commonCombinations.map(combination => <button key={combination.label} type="button" className="rounded-xl border border-[#0F4A85]/30 bg-[#E0F1FF] px-4 py-2 text-sm font-semibold text-[#0F4A85] hover:border-[#0F4A85]" onClick={() => update({ subjects: { ...profile.subjects, maths: false, biology: false, ...Object.fromEntries(combination.subjects.map(subject => [subject, true])) } })}>Add {combination.label}</button>)}
            </div>
            <p className="mt-2 !text-xs !text-slate-500">PCM: Physics, Chemistry, Mathematics. PCB: Physics, Chemistry, Biology. Check all other subjects studied below.</p>
          </div>}
          {subjectOptions.length > 0 && <Choices legend="Subjects studied">{subjectOptions.map(s => <label key={s.key} className={chipClass}><input type="checkbox" checked={!!profile.subjects[s.key]} onChange={e => update({ subjects: { ...profile.subjects, [s.key]: e.target.checked } })} />{s.label}</label>)}</Choices>}
          {profile.bucket === "Diploma" && <Field label="Diploma branch / background"><select className={inputClass} value={profile.dipBranch} onChange={e => update({ dipBranch: e.target.value })}><option value="">Select your branch…</option>{DIP_BRANCHES.map(b => <option key={b.key} value={b.key}>{b.label}</option>)}</select></Field>}
          {profile.bucket === "Graduate" && <><Field label="Bachelor's degree / major"><select className={inputClass} value={profile.gradDegree} onChange={e => update({ gradDegree: e.target.value })}><option value="">Select your degree…</option>{[...new Set(GRAD_DEGREES.map(g => g.group))].map(group => <optgroup label={group} key={group}>{GRAD_DEGREES.filter(g => g.group === group).map(g => <option key={g.key} value={g.key}>{g.label}</option>)}</optgroup>)}</select></Field><label className="flex items-start gap-3 text-sm"><input className="mt-1" type="checkbox" checked={profile.gradMaths} onChange={e => update({ gradMaths: e.target.checked })} />I had Mathematics in 10+2 or Graduation (required for M.C.A.).</label></>}
          <Choices legend="Category">{CATEGORY_OPTS.map(c => <label key={c.key} className={chipClass}><input type="radio" name="finder-category" checked={profile.category === c.key} onChange={() => update({ category: c.key })} />{c.label}</label>)}</Choices>
          <Choices legend="Result status">{(["passed", "appearing"] as const).map(status => <label className={chipClass} key={status}><input type="radio" name="finder-status" checked={profile.status === status} onChange={() => update({ status })} />{status === "passed" ? "Passed" : "Appearing / result awaited"}</label>)}</Choices>
          {profile.status === "appearing" ? <p className="rounded-xl border border-[#21A5DB]/30 bg-[#E0F1FF] p-4 !text-sm !text-[#0F4A85]">Your matches will be provisional, based on your subjects and background. Final admission requires the programme's minimum qualifying marks after your result is declared.</p> : <>
            <Marks title={profile.bucket === "Class 10" ? "Science + Mathematics + English" : "Aggregate marks"} obtained={profile.obtained} total={profile.total} onObtained={obtained => update({ obtained })} onTotal={total => update({ total })} />
            {combinations.length > 0 && <div className="space-y-5 rounded-xl border border-[#21A5DB]/30 bg-[#E0F1FF]/40 p-4 sm:p-5">
              <div><h3 className="!text-base !font-semibold">Qualifying subject combinations</h3><p className="mt-2 !text-sm !text-slate-600">These combinations match the subjects you checked. For each one, enter the total marks obtained and maximum marks for those three subjects only.</p><p className="mt-2 !text-xs !text-slate-500">B.Tech. and science combinations need at least {combinationMinimum}% for your category; some courses require more. Each course uses only its accepted combinations. BBA and other aggregate-based programmes use your overall marks.</p></div>
              {combinations.map(({ key, label, description }) => {
                const marks = profile.combinationMarks[key] || { obtained: "", total: "" };
                const pct = percentage(marks.obtained, marks.total);
                return <div key={key} className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="mb-3 !text-xs !text-slate-500">{description}</p>
                  <Marks title={`${label} marks`} obtained={marks.obtained} total={marks.total} examples={["210", "300"]} onObtained={obtained => update({ combinationMarks: { ...profile.combinationMarks, [key]: { ...marks, obtained } } })} onTotal={total => update({ combinationMarks: { ...profile.combinationMarks, [key]: { ...marks, total } } })} />
                  {pct !== null && pct < combinationMinimum && <p className="mt-3 !text-sm !text-amber-800" role="status">This combination is below {combinationMinimum}%. It cannot qualify you for courses requiring that minimum. Other accepted combinations and your overall aggregate will be checked separately.</p>}
                </div>;
              })}
            </div>}
          </>}
          <p className="!text-xs !text-slate-500">Individual subject pass requirements and University admission conditions also apply.</p>
          {error && <p role="alert" className="rounded-lg bg-red-50 p-3 !text-sm !text-red-700">{error}</p>}
          <div className="flex justify-end"><button className={buttonClass} type="submit">Check my eligibility <ArrowRight size={17} aria-hidden="true" /></button></div>
        </form>
      </Panel>}
      {results && <div id="finder-results" className="scroll-mt-32 space-y-6">
        <Panel title={profile.status === "appearing" ? "3. Your provisional programme matches" : "3. Your eligible programme matches"} hint={`${results.programs.length} programme${results.programs.length === 1 ? "" : "s"} across ${results.domains.length} domains · ${QUALS.find(q => q.key === profile.bucket)?.title} · ${CATEGORY_OPTS.find(c => c.key === profile.category)?.label}${profile.status === "passed" ? ` · ${percentage(profile.obtained, profile.total)?.toFixed(2)}% aggregate` : " · Result awaited"}`}>
          {results.domains.length > 0 ? <><p className="mb-4 rounded-lg bg-[#E0F1FF] px-4 py-3 !text-sm !font-medium !text-[#0F4A85]">Choose a domain to explore its programmes and fees.</p><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{results.domains.map(d => <button key={d} aria-pressed={activeDomain === d} onClick={() => { setActiveDomain(d); setSearch(""); scrollToSection("finder-programmes"); }} className={`rounded-2xl border p-5 text-left transition ${activeDomain === d ? "border-[#0F4A85] bg-[#0F4A85] text-white shadow-lg shadow-[#0F4A85]/15" : "border-slate-200 bg-white hover:border-[#21A5DB] hover:bg-[#E0F1FF]"}`}><span className="block text-sm font-semibold">{d}</span><span className={`mt-1 block text-xs ${activeDomain === d ? "text-blue-100" : "text-slate-500"}`}>{programsInDomain(results.programs, d).length} programmes <ArrowRight size={13} className="ml-1 inline" aria-hidden="true" /></span></button>)}</div></> : <div className="py-7 text-center"><BookOpen className="mx-auto mb-3 text-[#21A5DB]" size={36} aria-hidden="true" /><p className="!font-semibold">No programmes match these details.</p><p className="mt-2 !text-sm !text-slate-500">Review your subjects, background and marks, or contact Admissions for guidance.</p></div>}
          {results.ineligible.length > 0 && <><button className="mt-5 text-left text-sm text-[#0F4A85] underline underline-offset-4" aria-expanded={showOthers} aria-controls="finder-other-domains" onClick={() => setShowOthers(!showOthers)}>{showOthers ? "Hide other domains" : "Show domains you do not currently qualify for"}</button>{showOthers && <div id="finder-other-domains" className="mt-4 flex flex-wrap gap-2">{results.ineligible.map(d => <span key={d} className="rounded-full bg-red-50 px-3 py-2 text-xs text-red-800">{d}</span>)}</div>}</>}
        </Panel>
        {activeDomain && <Panel id="finder-programmes" title={activeDomain} hint={`${programs.length} matching programmes. Fees are for the first admission year; caution money is shown separately.`}>
          <Field label="Search matching programmes"><input type="search" className={inputClass} placeholder="Search by programme name" value={search} onChange={e => setSearch(e.target.value)} /></Field>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{visiblePrograms.map(program => <ProgramCard key={program.name} program={program} onEstimate={() => estimate(program.name)} />)}</div>
          {visiblePrograms.length === 0 && <p role="status" className="py-6 text-center !text-sm !text-slate-500">No programmes match your search. <button className="text-[#0F4A85] underline" onClick={() => setSearch("")}>Clear search</button></p>}
        </Panel>}
        {!scholarshipOpen && <button className={buttonClass} onClick={() => estimate()}>Explore scholarships <ArrowRight size={16} aria-hidden="true" /></button>}
      </div>}
      {scholarshipOpen && <ScholarshipsNew selected={selectedProgram} onSelect={setSelectedProgram} profile={profile} programs={allPrograms} />}
      <div className="mx-auto max-w-3xl px-4 pt-2 text-center text-xs leading-6 text-slate-500">Eligibility and scholarship estimates are indicative and subject to University verification. Need help choosing a programme? Call the Admission Helpline at <a className="whitespace-nowrap font-semibold text-[#0F4A85] underline" href="tel:18001026004">1800-102-6004</a>.</div>
    </div>
  </div>;
}
