import React from "react";

// ==================== Types ====================
interface ListContentType {
    boldItem?: string; // optional bold prefix text
    item: string; // main list item text
}

interface OtherDataType {
    paraContent?: string[]; // paragraphs inside section
    listContent?: ListContentType[]; // list of bullet points
    eligibility?: string; // eligibility line if any
}

interface CustomOverviewSectionProps {
    data: {
        heading: string;
        content: string | React.ReactNode;
        otherData?: OtherDataType[];
    };
}

// ==================== Component ====================
const CustomOverviewSection: React.FC<CustomOverviewSectionProps> = ({ data }) => {
    const { heading, content, otherData } = data;

    return (
        <div className="py-8 md:py-12 lg:py-16">
            {/* Top Section (Heading + Content) */}
            <div
                className={`flex flex-col whitespace-pre-line gap-4 justify-between ${otherData && otherData?.length > 0 ? "md:flex-row" : "md:flex-row"
                    }`}
            >
                {/* Left Heading Section */}
                <div
                    className={`w-auto ${otherData && otherData?.length > 0
                        ? "md:border-r-4"
                        : "border-l-4 pl-2 md:pl-0 md:border-l-0 md:border-r-4"
                        } border-[#ffb703] flex flex-col justify-center`}
                >
                    <h2 className="text-3xl lg:text-4xl font-semibold leading-[1.2] text-[#003049] pr-4 sm:min-w-[350px]">
                        {heading}
                    </h2>
                </div>

                {/* Right Content Section */}
                <div className={`${otherData && otherData?.length > 0 ? "" : "md:pl-8 md:py-4"}`}>
                    <div className="text-justify">
                        {typeof content === "string" ? <p>{content}</p> : content}
                    </div>
                    {/* Additional Other Data (Paragraphs, Lists, Eligibility, etc.) */}
                    {otherData && (
                        <div className="pt-2 ">
                            {otherData.map((ele, index) => (
                                <div key={index}>
                                    {/* Paragraph Content */}
                                    {ele.paraContent && (
                                        <div>
                                            {ele.paraContent.map((para, i) => (
                                                <p key={i} className="mt-1.5 text-gray-800">
                                                    {para}
                                                </p>
                                            ))}
                                        </div>
                                    )}

                                    {/* List Content */}
                                    {ele.listContent && (
                                        <ul className="list-disc ml-5  text-gray-800">
                                            {ele.listContent.map((item, i) => (
                                                <li key={i} className="mt-1">
                                                    {item.boldItem && <span className="font-semibold">{item.boldItem}</span>}{" "}
                                                    {item.item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}


                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
};

export default CustomOverviewSection;


