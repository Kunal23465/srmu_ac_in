import { cloneElement, useId, type ReactElement, type ReactNode } from "react";

export const inputClass = "w-full min-w-0 rounded-xl border border-slate-200 bg-[#E6E6E7] px-4 py-3.5 text-sm text-[#14284E] outline-none transition focus:border-[#0F4A85] focus:bg-white focus:ring-2 focus:ring-[#21A5DB]/20 disabled:bg-slate-100";
export const buttonClass = "inline-flex max-w-full w-fit items-center justify-center gap-2 rounded-lg bg-[#FFB703] px-8 py-3 text-center text-[14px] font-bold tracking-wider text-[#14284E] uppercase shadow-md shadow-[#14284E]/10 cursor-pointer transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F4A85] disabled:cursor-not-allowed disabled:opacity-50 [&>svg]:shrink-0";
export const chipClass = "flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm transition hover:border-[#21A5DB] has-[:checked]:border-[#0F4A85] has-[:checked]:bg-[#E0F1FF] has-[:checked]:text-[#0F4A85]";
export function Panel({ id, title, hint, children }: { id?: string; title: string; hint?: string; children: ReactNode }) {
  return <section id={id} className="min-w-0 scroll-mt-32 rounded-[24px] border border-[#E6E6E7] bg-white p-5 shadow-[0_6px_30px_-16px_rgba(15,74,133,0.15)] sm:p-8">
    <h2 className="!text-xl !font-semibold !leading-snug !tracking-tight !text-[#14284E] sm:!text-2xl">{title}</h2>
    {hint && <p className="mt-2 !text-sm !leading-relaxed !text-slate-500">{hint}</p>}
    <div className="mt-6">{children}</div>
  </section>;
}
export function Field({ label, children }: { label: string; children: ReactElement<{ id?: string }> }) {
  const id = useId();
  return <div className="min-w-0"><label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-600">{label}</label>{cloneElement(children, { id })}</div>;
}
export function scrollToSection(id: string) {
  requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" }));
}
