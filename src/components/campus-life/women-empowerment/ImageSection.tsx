import { items, stats } from "../../../data/campus-life/women-empowerment/women-empowerment-data";

export default function ImageSection() {




    return (
        <section className="relative w-full bg-cover bg-center py-20 women">
            <div className="absolute inset-0 bg-black/25" />

            <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-1 gap-10 items-center">
                <div>
                    <h2 className="text-white font50 fw500 mb-3">We Believe in</h2>

                    <ul className="space-y-3 text-white text-base leading-relaxed max-w-3xl">
                        {items.map((text, index) => (
                            <li key={index} className="flex items-start gap-3 text-wrap ">
                                <span className="text-yellow-400 text-sm">✔</span>
                                <span className="text-sm">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                    <div className="relative mt-16 flex gap-20 text-center text-white">
                    {stats.map((s, i) => (
                        <div key={i}>
                            <p className="font60 text-yellow-500">{s.value}</p>
                            <p className="font20">{s.label}</p>
                        </div>
                    ))}
               
                </div>
            </div>


        </section>
    );
}
