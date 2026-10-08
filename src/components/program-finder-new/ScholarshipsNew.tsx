import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { FinderProgram } from "./programsNew";
import { QUALS } from "./rulesNew";
import { type FinderProfile, percentage } from "./eligibilityNew";
import { isLLMProgram, srmusetCategory, meritCategory, schPctFor, meritPctFor, SCH_TABLES, MERIT_TABLES, SPECIAL_CATEGORIES } from "./scholarshipsNew";
import { useProgramFees, formatRupees } from "./feesNew";
import { buttonClass, inputClass, chipClass, Panel, Field } from "./uiNew";

type Scheme = "srmuset" | "merit" | "special";
const schemes: { key: Scheme; label: string }[] = [{ key: "srmuset", label: "SRMUSET" }, { key: "special", label: "Special Scholarship" }, { key: "merit", label: "Merit Based" }];
function Estimate({ program, profile, scheme }: { program: FinderProgram; profile: FinderProfile; scheme: Scheme }) {
  const fees = useProgramFees(program);
  const autoPct = profile.status === "passed" && program.lastq === profile.bucket ? percentage(profile.obtained, profile.total) : null;
  const [score, setScore] = useState("");
  const [special, setSpecial] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const cat = scheme === "srmuset" ? srmusetCategory(program) : meritCategory(program);
  const unsupported = scheme !== "special" && !cat;
  const awaitingResult = scheme === "merit" && profile.status === "appearing" && program.lastq === profile.bucket;
  const categories = isLLMProgram(program) ? SPECIAL_CATEGORIES.filter(c => c.key === "career") : SPECIAL_CATEGORIES;
  const scoreValue = scheme === "merit" && autoPct !== null ? autoPct : score.trim() ? Number(score) : NaN;
  const rate = scheme === "special" ? categories.find(c => c.key === special)?.pct ?? 0 : cat ? (scheme === "merit" ? meritPctFor(cat, scoreValue) : schPctFor(cat, scoreValue)) : 0;
  const discount = Math.round(fees.base * rate / 100);
  const slabs = cat ? (scheme === "merit" ? MERIT_TABLES[cat] : SCH_TABLES[cat]) : null;
  const invalidate = () => { setSubmitted(false); setError(""); };

  return <div className="mt-5">
    {unsupported ? <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900" role="status">{scheme === "srmuset" ? "SRMUSET slabs do not cover postgraduate or lateral-entry programmes, including LL.M. Try the Merit Based or Special Scholarship scheme." : "The supplied merit scholarship slabs apply to first-year admissions. This lateral-entry programme is not covered."}</p> : <>
      {scheme === "special" && isLLMProgram(program) && <p className="mb-4 text-sm text-slate-600">For LL.M., the Special Scholarship is limited to Career Progression.</p>}
      {awaitingResult ? <p className="rounded-xl bg-[#E0F1FF] p-4 text-sm text-[#0F4A85]">Your result is awaited. Review the applicable slabs below; the scholarship can be estimated after your result is declared.</p> : <form onSubmit={event => {
        event.preventDefault();
        if (scheme === "special" ? !categories.some(c => c.key === special) : !Number.isFinite(scoreValue) || scoreValue < 0 || scoreValue > 100) {
          setError(scheme === "special" ? "Select a scholarship category." : "Enter a valid performance between 0 and 100%."); return;
        }
        setError(""); setSubmitted(true);
      }} noValidate>
        <div className="grid gap-4 sm:grid-cols-2 sm:items-end">
          {scheme === "special" ? <Field label="Scholarship category"><select className={inputClass} value={special} onChange={e => { setSpecial(e.target.value); invalidate(); }}><option value="">Select a category…</option>{categories.map(c => <option key={c.key} value={c.key}>{c.label} ({c.pct}%)</option>)}</select></Field> : <Field label={scheme === "merit" ? "Academic performance (%)" : "SRMUSET performance (%)"}>
            <input className={inputClass} type="number" min="0" max="100" step="any" value={scheme === "merit" && autoPct !== null ? autoPct.toFixed(2) : score} readOnly={scheme === "merit" && autoPct !== null} onChange={e => { setScore(e.target.value); invalidate(); }} placeholder="e.g. 82" />
          </Field>}
          <button className={buttonClass} disabled={fees.source === "loading"}>Estimate scholarship <ArrowRight size={16} aria-hidden="true" /></button>
        </div>
        {scheme === "merit" && autoPct !== null && <p className="mt-2 text-xs text-slate-500">Academic performance is taken from your qualification marks.</p>}
        {error && <p role="alert" className="mt-3 text-sm text-red-700">{error}</p>}
      </form>}
      {submitted && <div aria-live="polite" className="mt-6 rounded-xl bg-[#023047] p-5 text-white sm:p-6">
        <p className="!text-3xl !font-bold !text-[#FFC107]">{rate}% scholarship</p>
        {rate === 0 && <p className="mt-2 !text-sm !text-white">No scholarship applies at this performance.</p>}
        <dl className="mt-4 space-y-3 text-sm">
          {[["Programme", program.name], ["Programme fee (first admission year)", formatRupees(fees.fee)], ["Amount eligible for discount", formatRupees(fees.base)], ["Non-discountable charges", formatRupees(fees.fee - fees.base)], ["Scholarship value", `− ${formatRupees(discount)}`], ["Refundable caution money", `+ ${formatRupees(fees.caution)}`]].map(([label, value]) => <div key={label} className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-t border-white/15 pt-3"><dt className="text-white/75">{label}</dt><dd className="max-w-full font-semibold sm:max-w-[65%] sm:text-right">{value}</dd></div>)}
          <div className="flex flex-wrap justify-between gap-3 border-t border-white/25 pt-4"><dt>Estimated net payable</dt><dd className="text-xl font-bold text-[#FFC107]">{formatRupees(fees.fee - discount + fees.caution)}</dd></div>
        </dl>
      </div>}
      {slabs && <details className="mt-5 rounded-xl border border-slate-200 p-4" open={awaitingResult || undefined}>
        <summary className="cursor-pointer text-sm font-medium text-[#0F4A85]">{scheme === "merit" ? "Academic performance" : "SRMUSET"} scholarship slabs</summary>
        <table className="mt-4 w-full text-left text-sm"><thead className="bg-[#E0F1FF] text-[#0F4A85]"><tr><th className="p-3" scope="col">Performance (%)</th><th className="p-3" scope="col">Scholarship</th></tr></thead><tbody>{slabs.map(([score, rate]) => <tr key={score} className="border-b border-slate-100"><td className="p-3">{score}</td><td className="p-3 font-medium">{rate}</td></tr>)}</tbody></table>
      </details>}
    </>}
    <p className="mt-4 text-xs text-slate-500" role="status">{fees.source === "loading" ? "Checking current programme fees…" : fees.source === "live" ? "Estimate uses current programme fees." : "Current fees could not be verified. Estimate uses reference fees; confirm with Admissions."} Hostel and transport charges are additional.</p>
    {scheme === "special" && <p className="mt-3 text-sm text-slate-500">Special scholarships apply for all years, subject to supporting documents and University approval.</p>}
  </div>;
}
export default function ScholarshipsNew({ selected, onSelect, profile, programs }: { selected: string; onSelect: (name: string) => void; profile: FinderProfile; programs: FinderProgram[] }) {
  const [scheme, setScheme] = useState<Scheme>("srmuset");
  const program = programs.find(p => p.name === selected);
  return <Panel id="finder-scholarships" title="4. Explore your scholarship" hint="Choose a programme and compare the three admission scholarship schemes. Estimates are shown separately; scholarships are not combined.">
    <fieldset><legend className="sr-only">Scholarship scheme</legend><div className="flex flex-wrap gap-2">{schemes.map(s => <label key={s.key} className={chipClass}><input className="accent-[#0F4A85]" type="radio" name="finder-scholarship" value={s.key} checked={scheme === s.key} onChange={() => setScheme(s.key)} />{s.label}</label>)}</div></fieldset>
    <div className="mt-5"><Field label="Programme"><select className={inputClass} value={selected} onChange={e => onSelect(e.target.value)}><option value="">Select a programme…</option>{QUALS.map(q => <optgroup key={q.key} label={q.title}>{programs.filter(p => p.lastq === q.key).map(p => <option key={p.name} value={p.name}>{p.name}</option>)}</optgroup>)}</select></Field></div>
    {program && <Estimate key={`${program.name}-${scheme}`} program={program} profile={profile} scheme={scheme} />}
    <a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#0F4A85] underline underline-offset-4" href="/scholarship-scheme" target="_blank" rel="noopener noreferrer">View official scholarship schemes <ExternalLink size={14} aria-hidden="true" /></a>
  </Panel>;
}
