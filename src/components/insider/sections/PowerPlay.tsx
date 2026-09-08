import { ArrowUpRight, Check, Zap } from "lucide-react";
import { cn } from "../lib/utils";
import brain from "../../../assets/images/insider/strategy.png"
import computer from "../../../assets/images/insider/account.png"
import camera from "../../../assets/images/insider/content.png"
export function PowerPlay() {
    const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSerM8WGKBQovbrjtOu8q7pRSfvyzfGe3D283iAlhRsgKNVPrw/viewform?usp=dialog";

    const roles = [
        {
            title: "STRATEGY / OUTREACH",
            subtitle: "THE BRAIN & THE CONNECTOR",
            color: "bg-white text-black",
            badgeColor: "bg-[#266efb] text-white",
            btnColor: "bg-[#266efb] text-white hover:bg-black",
            image: brain,
            bullets: [
                "Plan campaigns & content",
                "Spot trends before they peak",
                "Build content calendars",
                "Turn ideas into concepts",
                "Connect with clubs & student communities",
                "Track what’s hitting & what’s not"
            ]
        },
        {
            title: "CONTENT CREATION",
            subtitle: "THE CREATOR",
            color: "bg-[#fa5b84] text-black",
            badgeColor: "bg-black text-[#f9da1e]",
            btnColor: "bg-black text-[#f9da1e] hover:bg-white hover:text-black",
            image: camera,
            bullets: [
                "Shoot reels, photos & videos",
                "Write hooks & captions",
                "Create campaign content",
                "Cover campus events",
                "Find stories worth telling",
                "Turn everyday moments into scroll-stoppers"
            ]
        },
        {
            title: "ACCOUNT MANAGEMENT",
            subtitle: "THE OPERATOR",
            color: "bg-[#f9da1e] text-black",
            badgeColor: "bg-black text-white",
            btnColor: "bg-black text-white hover:bg-[#fa5b84]",
            image: computer,
            bullets: [
                "Manage social media platforms",
                "Schedule & publish content",
                "Handle comments & DMs",
                "Track content performance",
                "Keep the feed fresh & active",
                "Make sure every post stays on-brand & on time"
            ]
        }
    ];

    return (
        <section id="roles" className="bg-[#17181d] py-32 border-b-8 border-black text-white relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Badge */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 border-4 border-black bg-[#fa5b84] text-black px-6 py-2.5 font-black uppercase text-base md:text-xl shadow-[4px_4px_0px_0px_#fff] mb-6">
                        <Zap size={24} className="fill-black" />
                        <span>WHAT WILL YOU ACTUALLY DO?</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tighter text-white">
                        PICK YOUR <br />
                        <span className="text-[#f9da1e] underline decoration-[#fa5b84] decoration-8">
                            POWER PLAY.
                        </span>
                    </h2>
                </div>

                {/* 3 Role Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {roles.map((role, i) => (
                        <div
                            key={i}
                            className={cn(
                                "relative border-4 border-black p-8 md:p-10 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none transition-all hover:translate-x-2 hover:translate-y-2",
                                role.color
                            )}
                        >
                            <div>
                                <div className="flex items-center justify-between border-b-4 border-black pb-6 mb-6">
                                    {/* Sticker Image Display Without Box Container */}
                                    <div className="h-20 md:h-28 flex items-center justify-center shrink-0">
                                        <img
                                            src={role.image}
                                            alt={role.title}
                                            className="max-h-full max-w-[160px] md:max-w-[200px] object-contain drop-shadow-[2px_2px_0px_#000] hover:scale-110 transition-transform"
                                        />
                                    </div>
                                    <span className={cn("border-2 border-black px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000]", role.badgeColor)}>
                                        POWER PLAY 0{i + 1}
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-black uppercase leading-none mb-2">
                                    {role.title}
                                </h3>
                                <p className="text-sm font-black uppercase tracking-wider mb-8 opacity-90 underline">
                                    {role.subtitle}
                                </p>

                                <ul className="space-y-3.5 mb-8">
                                    {role.bullets.map((b, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-base font-bold uppercase leading-tight">
                                            <Check size={18} strokeWidth={3} className="shrink-0 mt-0.5" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href={FORM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn("w-full border-4 border-black py-4 text-lg font-black uppercase shadow-[4px_4px_0px_0px_#000] transition-colors flex items-center justify-center gap-2 text-center", role.btnColor)}
                            >
                                <span>Choose Role</span>
                                <ArrowUpRight size={22} strokeWidth={3} />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bottom Callout Banner */}
                <div className="border-4 border-white bg-[#f9da1e] text-black p-8 md:p-12 text-center shadow-[8px_8px_0px_0px_#fa5b84]">
                    <h4 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase leading-tight tracking-tight">
                        ONE CAMPUS. A LOT OF STORIES. <br />
                        <span className="bg-black text-white px-4 py-1 inline-block mt-3">
                            YOU? MAKE THEM HIT.
                        </span>
                    </h4>
                </div>
            </div>
        </section>
    );
}
