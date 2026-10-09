import { ArrowDown, ArrowRight, CircleCheck, Headphones, MessageCircle, Phone } from "lucide-react";

export default function FinderIntroNew() {
  return <section className="relative isolate overflow-hidden bg-[#14284E] px-5 pb-12 pt-36 text-white sm:pb-16 sm:pt-44">
    <div aria-hidden="true" className="pointer-events-none absolute -right-48 top-28 size-[620px] rounded-full border border-white/10" />
    <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-52 size-[430px] rounded-full border-[70px] border-[#21A5DB]/10" />
    <div className="relative mx-auto max-w-6xl">
      <div className="max-w-2xl">
        <h1 className="!text-[36px] !font-semibold !leading-[1.12] !tracking-tight !text-white sm:!text-[52px] lg:!text-[60px]">Find a programme.<br /><span className="text-[#FFB703]">Shape your future.</span></h1>
        <p className="mt-6 max-w-lg !text-base !leading-7 !text-blue-100/85">Your interests. Your qualifications. Your next chapter. Discover where you belong at SRMU with our Program Finder &amp; Eligibility tool.</p>
        <a href="#finder-qualification" className="mt-8 inline-flex items-center gap-4 rounded-xl bg-[#FFB703] px-6 py-4 text-sm font-semibold text-[#14284E] shadow-lg shadow-black/10 transition hover:bg-[#FFB703] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Find my programme <ArrowDown size={18} aria-hidden="true" /></a>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-blue-100/80">
          <span className="inline-flex items-center gap-2"><CircleCheck size={15} className="text-[#FFB703]" aria-hidden="true" />Eligibility personalised to you</span>
          <span className="inline-flex items-center gap-2"><CircleCheck size={15} className="text-[#FFB703]" aria-hidden="true" />Fees &amp; scholarships together</span>
        </div>
      </div>
    </div>
  </section>;
}

export function FinderSupportNew() {
  return <aside id="finder-support" aria-labelledby="finder-support-title" className="flex flex-col gap-5 rounded-[24px] border border-[#E6E6E7] bg-[#E0F1FF] p-6 sm:p-7">
    <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-[#0F4A85] shadow-sm"><Headphones size={24} strokeWidth={1.7} aria-hidden="true" /></span>
    <div><h2 id="finder-support-title" className="!text-xl !font-semibold !leading-snug !text-[#14284E]">A little guidance<br />goes a long way.</h2><p className="mt-3 !text-sm !leading-6 !text-slate-600">Not sure where to start? Our admissions team can help you explore your options.</p></div>
    <div className="space-y-3">
      <a href="tel:18001026004" className="group flex items-center gap-3 rounded-xl bg-[#0F4A85] p-4 text-white transition hover:bg-[#14284E]"><Phone size={19} aria-hidden="true" /><span className="min-w-0 flex-1"><span className="block text-[10px] uppercase tracking-wider text-blue-100">Admission helpline</span><span className="mt-1 block text-sm font-semibold">1800-102-6004</span></span><ArrowRight size={16} aria-hidden="true" /></a>
      <a href="https://wa.me/919120007948" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-[#0F4A85]/15 bg-white p-4 text-[#0F4A85] transition hover:border-[#0F4A85]"><MessageCircle size={20} aria-hidden="true" /><span className="flex-1 text-sm font-semibold">Chat on WhatsApp</span><ArrowRight size={16} aria-hidden="true" /></a>
    </div>
    <div className="mt-auto border-t border-[#0F4A85]/15 pt-5"><p className="!text-xs !font-semibold !text-[#0F4A85]">Before you begin</p><p className="mt-2 !text-xs !leading-5 !text-slate-600">Keep your subjects and marks handy. Awaiting results? You can still explore provisional matches.</p></div>
  </aside>;
}
