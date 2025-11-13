import React from "react";
import { LinkType, otherDataTypes } from "../../types/home-data-type";




interface CustomOverviewSectionProps {
    data: {
        heading: string;
        content: string;
        otherData?: otherDataTypes[];
        links?: LinkType[];
    };
}
const CustomOverviewSectionForCentralLibrary: React.FC<CustomOverviewSectionProps> = ({ data }) => {
    const { heading, content, otherData, links } = data;

    return (
        <div className="py-7 md:py-10 lg:py-14">
            <div
                className={`flex flex-col gap-4 items-stretch justify-between ${otherData && otherData.length > 0 ? "md:flex-row" : "md:flex-row"
                    }`}
            >
                <div
                    className={`w-auto ${otherData && otherData.length > 0
                            ? "md:border-r-4"
                            : "border-l-4 pl-2 md:pl-0 md:border-l-0 md:border-r-4"
                        } border-[#ffb703] flex flex-col `}
                >
                    <h2 className="text-3xl lg:text-4xl font-semibold leading-8 pr-4 sm:min-w-[350px]">
                        {heading}
                    </h2>
                </div>
                <div className={`${otherData && otherData.length > 0 ? "" : "md:pl-8 md:py-4"}`}>
                    <p className="text-justify">{content}</p>

                    {links && links.length > 0 && (
                        <div className="mt-6 space-y-2">
                            {links.map((link, index) => (
                                <p key={index}>
                                    <span className="font-semibold">{link.title}: </span>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-black hover:black underline"
                                    >
                                        {link.url}
                                    </a>
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {otherData && (
                <div className="pt-7 md:pt-10 lg:pt-14">
                    {otherData.map((ele) => (
                        <div key={ele.id}>
                            {ele.paraContent.map((para, idx) => (
                                <p key={idx} className="mt-1.5">
                                    {para}
                                </p>
                            ))}
                            {ele.listContent && (
                                <ul className="list-[square] ml-4 mt-4">
                                    {ele.listContent.map((item) => (
                                        <li key={item.id} className="yellow">
                                            <span className="font-semibold">{item.boldItem}</span> {item.item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {ele.eligibility && (
                                <div className="mt-4">
                                    <p>
                                        <span className="font-semibold">Eligibility: </span>
                                        {ele.eligibility}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomOverviewSectionForCentralLibrary;
