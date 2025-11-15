import { FC, useState } from "react";
import { tabs } from "../../data/home/program-section-data";

const ProgramsSection: FC = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <section
            className="bg-cover bg-center bg-fixed py-20 mb-20"
            style={{
                backgroundImage:
                    "url('https://srmu.ac.in/storage/common-section/1657x580-new-09022401172650.png')",
            }}
        >
            <div className="container mx-auto max-w-[1280px] px-4">

                <div className="text-white mb-10">
                    <h2 className="font50 fw600">Our Programs</h2>
                    <span className="text-lg mt-2 max-w-2xl opacity-90">
                        At University’s beautiful campus, you’ll find a diverse and welcoming
                        community that will teach you life skills along with having fun.
                    </span>
                </div>

                <div className="flex gap-10">

                    <div className="w-1/3 programs-tabs">
                        <ul>
                            {tabs.map((tab) => (
                                <li key={tab.id}>
                                    <button
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`block w-full text-left uppercase text-white font-medium rounded-md py-5 pl-6 pr-16 mb-1 text-[1.25rem] cursor-pointer transition-all
                      ${activeTab === tab.id
                                                ? "programsection shadow-lg"
                                                : "bg-transparent"
                                            }`}
                                    >
                                        {tab.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-2/3 ml-6">
                        {tabs.map((tab) => (
                            <div
                                key={tab.id}
                                className={`${activeTab === tab.id ? "block" : "hidden"}`}
                            >
                                <ul className="grid grid-cols-4 gap-6">
                                    {tab.programs.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.link}
                                                className="block  overflow-hidden bg-transparent  transition-all hover:-translate-y-2 duration-300"
                                            >
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    className="w-full h-40 object-cover border-white border-2 rounded-xl"
                                                />
                                                <div className="p-4 text-left text-white font-semibold text-md">
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
                                className="uppercase inline-flex items-center bg-yellow-400 text-blue-900 font-semibold py-4 px-8 rounded-xl hover:bg-transparent hover:border-1 hover:text-yellow-500 hover:border-yellow-500 transition shadow-md"
                            >
                                Enroll Now
                                <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ProgramsSection;