import Classes from "../../../utils/styles/Global.module.css";


import { items, stats } from "../../../data/campus-life/women-empowerment/women-empowerment-data";

export default function ImageSection() {
    return (
        <section className="relative w-full py-20 overflow-hidden">
            <div className="absolute inset-0 bg-black/25" />
            <div className={`${Classes["container"]}`}>

            <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-1 gap-10 items-center">
                <div>
                    <h2 className="text-2xl text-white sm:text-xl lg:text-[50px] fw600">
                        We Believe in</h2>

                    <ul className="space-y-3 text-white text-base leading-relaxed max-w-3xl">
                        {items.map((text, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-wrap overflow-hidden break-words"
                            >
                                <span className="text-yellow-400 text-sm">✔</span>
                                <span className="text-sm md:text-sm  leading-snug">
                                    {text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className="relative mt-10 md:mt-16 grid grid-cols-2 gap-5 text-center text-white md:flex md:flex-row md:gap-20"
                >
                    {stats.map((s, i) => (
                        <div key={i} className="mb-6 md:mb-0">
                            <p className="font60 text-yellow-500 md:text-[60px] text-[20px]">
                                {s.value}
                            </p>
                            <p className="font20 md:text-[20px] text-[14px]">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div></div>
        </section>
    );
}
