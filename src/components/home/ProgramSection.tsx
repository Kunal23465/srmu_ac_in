import { FC, useState, useEffect } from "react";
import { tabs } from "../../data/home/program-section-data";
import { Link } from "react-router-dom";

const ProgramsSection: FC = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile screen
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
        };
        handleResize(); // check on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            className="bg-cover bg-center bg-fixed py-20 mb-20"
            style={{
                backgroundImage:
                    "url('https://srmu.ac.in/storage/common-section/1657x580-new-09022401172650.png')",
            }}
        >
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-white mb-10">
                    <h2 className="text-[28px] sm:text-[28px] lg:text-[50px] fw600">
                        Our Programs</h2>
                    <span className="text-lg mt-2 max-w-2xl opacity-90">
                        At University’s beautiful campus, you’ll find a diverse and welcoming community that will teach you life skills along with having fun.
                    </span>
                </div>

                <div className="w-full flex flex-col md:flex-row gap-y-10 md:gap-10">
                    {/* Tabs */}
                    <div className="w-full md:max-w-[350px] programs-tabs">
                        <ul className="flex flex-row md:flex-col overflow-x-auto">
                            {tabs.map((tab) => (
                                <li key={tab.id}>
                                    <button
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`block w-full text-left uppercase text-white text-nowrap md:font-medium rounded-md py-5 md:pl-6 md:pr-16 mb-1 px-5 text-base md:text-[1.25rem] cursor-pointer transition-all
                                     ${activeTab === tab.id ? "programsection shadow-lg" : "bg-transparent"}`}
                                    >
                                        {tab.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs Section */}
                    {isMobile ? (
                        // Mobile version: centered
                        <div className="w-full flex flex-col items-center md:items-start md:ml-6">
                            {tabs.map((tab) => (
                                <div key={tab.id} className={`${activeTab === tab.id ? "block" : "hidden"}`}>
                                    <ul className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(190px,190px))]">
                                        {tab.programs.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.link}
                                                    className="block overflow-hidden bg-transparent transition-all hover:-translate-y-2 duration-300"
                                                >
                                                    <img
                                                        src={item.img}
                                                        alt={item.name}
                                                        className="w-full h-40 object-cover border-white border-2 rounded-xl"
                                                    />
                                                    <div className="text-left text-white mt-4 text-base">
                                                        {item.name}
                                                    </div>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <div className="text-center mt-10">
                                <Link
                                    to="/online-admission"
                                    className="uppercase inline-flex items-center bg-[#ffb703] text-[#023047] font-semibold py-4 px-8 rounded-xl hover:bg-transparent hover:border-1 hover:text-[#ffb703] hover:border-[#ffb703] transition shadow-md"
                                >
                                    Enroll Now
                                    <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        // Desktop version: original layout
                        <div className="w-full md:ml-6">
                            {tabs.map((tab) => (
                                <div key={tab.id} className={`${activeTab === tab.id ? "block" : "hidden"}`}>
                                    <ul className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(190px,190px))]">
                                        {tab.programs.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.link}
                                                    className="block overflow-hidden bg-transparent transition-all hover:-translate-y-2 duration-300"
                                                >
                                                    <img
                                                        src={item.img}
                                                        alt={item.name}
                                                        className="w-full h-40 object-cover border-white border-2 rounded-xl"
                                                    />
                                                    <div className="text-left text-white mt-4 text-base">
                                                        {item.name}
                                                    </div>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <div className="text-center mt-10">
                                <a
                                    href="online-admission"
                                    className="uppercase inline-flex items-center bg-[#ffb703] text-[#023047] font-semibold py-4 px-8 rounded-xl hover:bg-transparent hover:border-1 hover:text-[#ffb703] hover:border-[#ffb703] transition shadow-md"
                                >
                                    Enroll Now
                                    <span className="ml-2">→</span>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;
