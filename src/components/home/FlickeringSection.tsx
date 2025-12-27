import { useState } from "react";
import { flickcategories } from "../../data/home/flick-section-data";
import Classes from "../../utils/styles/Global.module.css";
export default function FlickeringSection() {
  const [activeId, setActiveId] = useState("section_25");

  return (
    <section className="relative h-[75vh] overflow-hidden">
      {/* BACKGROUND IMAGES */}
      <div className="absolute inset-0">
        {flickcategories.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeId === item.id ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* CONTENT */}
      <div className={`relative z-10 ${Classes["container"]} mx-auto h-full flex items-center px-6`}>
        {/* DESKTOP LAYOUT (unchanged) */}
        <div className="hidden md:flex w-full justify-center gap-5 items-stretch">
          {/* LEFT SIDE DESKTOP */}
          <div className="w-1/2 relative flex items-center">
            {flickcategories.map((item) => (
              <div key={item.id} className={`absolute transition-opacity duration-500 ${activeId === item.id ? "opacity-100" : "opacity-0"}`}>
                <h2 className="text-3xl lg:text-[47px] lg:leading-[70px] text-white   mb-4 fw600">{item.title}</h2>
                <p className="text-white font17 max-w-md">{item.description}</p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE DESKTOP */}
          <div className="w-1/2 grid grid-cols-2 text-white text-lg">
            {flickcategories.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                onMouseEnter={() => setActiveId(item.id)}
                className={`
                  flex items-center justify-start px-3 xl:px-6 py-6 lg:py-8 xl:py-12 transition-all text-left relative overflow-hidden text-sm lg:text-base xl:text-[1.5rem] cursor-pointer
                  ${
                    item.id === "section_24"
                      ? "border-r border-b border-white/30"
                      : item.id === "section_25"
                      ? ""
                      : item.id === "section_26"
                      ? "border-r border-b border-white/30"
                      : item.id === "section_64"
                      ? "border-t border-l border-b border-white/30"
                      : item.id === "section_65"
                      ? "border-t border-r border-white/30"
                      : item.id === "section_66"
                      ? "border-t border-l border-white/30"
                      : ""
                  }
                  ${activeId === item.id ? "bg-[#ffb703] text-white font-semibold" : "hover:bg-white/10"}
                `}
              >
                {item.title.split(":")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        {/* MOBILE LAYOUT */}
        {/* MOBILE LAYOUT */}
        <div className="flex flex-col w-full gap-6 md:hidden">
          {/* MOBILE TEXT SECTION — NOW FIRST */}
          <div>
            {flickcategories.map((item) => (
              <div key={item.id} className={`transition-opacity duration-500 ${activeId === item.id ? "opacity-100" : "opacity-0 hidden"}`}>
                <h2 className="text-white text-3xl font-semibold mb-3">{item.title}</h2>
                <p className="text-white text-base">{item.description}</p>
              </div>
            ))}
          </div>

          {/* MOBILE TABS — NOW BELOW */}
          <div className="grid grid-cols-2 border-b border-white/20">
            {flickcategories.map((item) => (
              <button key={item.id} onClick={() => setActiveId(item.id)} className="py-4 text-white text-lg relative">
                {item.title.split(":")[0]}

                {/* ACTIVE UNDERLINE */}
                {activeId === item.id && <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-500 rounded-full"></span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
