import Classes from "../../../utils/styles/Global.module.css";


import { items, stats } from "../../../data/campus-life/women-empowerment/women-empowerment-data";

export default function ImageSection() {
  return (
    <section className="relative w-full py-5 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/25" />
      <div className={`${Classes["container"]}`}>
        <div className="relative sm:max-w-6xl mx-auto sm:px-6 grid md:grid-cols-1 gap-5 sm:gap-10 items-center">
          <div>
            <h2 className="text-[22px] sm:text-[28px] mb-3 lg:text-[3.125rem] text-white  fw600">We Believe in</h2>

            <ul className="space-y-2 sm:space-y-3 text-white text-base leading-relaxed max-w-3xl">
              {items.map((text, index) => (
                <li key={index} className="flex items-start gap-3 text-wrap overflow-hidden break-words">
                  <span className="text-yellow-400 text-sm">✔</span>
                  <span className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]  leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative sm:mt-10 md:mt-16 grid grid-cols-2 gap-5 text-center text-white md:flex md:flex-row md:gap-20">
            {stats.map((s, i) => (
              <div key={i} className="mb-6 md:mb-0">
                <p className="lg:text-[60px]! md:text-[56.25px]1 text-[26px]! font-medium sm:text-[35px] text-yellow-500 ">{s.value}</p>
                <p className="lg:text-[20px] md:text-[18.75px] sm:text-[17.5px] text-[17.5px]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
