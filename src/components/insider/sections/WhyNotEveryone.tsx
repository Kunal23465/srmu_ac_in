import { Check, ShieldAlert, Zap } from "lucide-react";

export function WhyNotEveryone() {
    const rules = [
        { q: "Deadlines?", a: "Meet them." },
        { q: "Feedback?", a: "Take it." },
        { q: "Bad idea?", a: "Run it back." },
        { q: "Trend?", a: "Clock it." },
        { q: "Good work?", a: "Own it." },
    ];

    return (
        <section className="bg-[#17181d] text-white py-8 sm:py-32 border-y-8 border-black relative overflow-hidden">
            {/* Background Accent Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Badge */}
                <div className="inline-flex items-center gap-3 border-4 border-black bg-[#fa5b84] text-white px-6 py-2.5 font-black uppercase text-xl shadow-[4px_4px_0px_0px_#fff] mb-8">
                    <ShieldAlert size={28} />
                    <span>WHY IT'S NOT FOR EVERYONE</span>
                </div>

                {/* Big Headline */}
                <h2 className="text-[7vw] md:text-[5vw] font-black uppercase leading-none tracking-tighter mb-4 text-[#f9da1e]">
                    REAL TALK: YOU CAN’T <br />
                    <span className="text-white underline decoration-[#fa5b84] decoration-8">JUST VIBE HERE.</span>
                </h2>

                <p className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-gray-300 mb-8 sm:mb-16">
                    Being an Insider means showing up.
                </p>

                {/* Rules Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8 sm:mb-16">
                    {rules.map((rule, i) => (
                        <div key={i} className="border-4 border-white bg-white text-black p-6 flex flex-col justify-between shadow-[8px_8px_0px_0px_#fa5b84] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-black text-sm uppercase text-gray-400">0{i + 1}</span>
                                <Check className="text-[#fa5b84]" size={24} strokeWidth={4} />
                            </div>
                            <div>
                                <p className="text-lg font-black uppercase text-gray-500">{rule.q}</p>
                                <p className="text-2xl font-black uppercase text-black">{rule.a}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Locked In Banner */}
                <div className="border-4 border-black bg-[#f9da1e] text-black p-8 md:p-12 shadow-[12px_12px_0px_0px_#fff] mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-xl md:text-2xl font-bold uppercase text-black">You don’t need to know everything.</p>
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mt-2">
                            YOU JUST NEED TO BE LOCKED IN.
                        </h3>
                    </div>
                    <Zap size={64} className="fill-black text-black shrink-0 hidden md:block" />
                </div>

                {/* Bottom Quote Banner */}
                <div className="border-4 border-white bg-black p-8 text-center">
                    <p className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
                        “Because talent gets you noticed. <span className="text-[#fa5b84]">Consistency gets you somewhere.”</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
