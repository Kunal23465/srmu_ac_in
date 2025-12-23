import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AccordionItem } from "../../data/admissions/admission-faq/admission-faq-data";



interface Props {
    data: AccordionItem[];
}

const HtmlContent: React.FC<{ html?: string; className?: string }> = ({
    html,
    className,
}) => {
    if (!html) return null;

    return (
        <div
            className={className}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};


const CustomFaqAccordion: React.FC<Props> = ({ data }) => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const renderContent = (item: AccordionItem) => {
        switch (item.layoutType) {
            case "text":
                return (
                    <HtmlContent
                        html={item.content}
                        className="text-gray-700 !text-[17px] leading-relaxed"
                    />
                );

            case "list":
                return (
                    <>
                        {item.content && (
                            <span className="text-gray-700 mb-3 leading-relaxed !text-[17px]">{item.content}</span>
                        )}
                        <ul className="list-decimal pl-6 text-gray-700 space-y-1">
                            {item.listItems?.map((li, idx) => (
                                <li key={idx}>
                                    <span className="font-semibold !text-[17px] ">{li}</span>
                                </li>
                            ))}
                        </ul>
                    </>
                );
            case "table":
                return (
                    <div className="mt-3">
                        {/* Optional content/description above the table */}
                        {item.content && (
                            <p className="text-gray-700 mb-3 leading-relaxed !text-[15px] ">{item.content}</p>
                        )}

                        {/* Table */}
                        {item.tableData?.topHeader && <div className="flex items-center justify-around">
                            <div className="!text-[15px] font-semibold">Existing Students of SRMU</div>
                            <div className="!text-[15px] font-semibold">Existing Students of SRMGPC</div>
                        </div>}
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-300 text-sm text-gray-700">
                                <thead className="bg-gray-100">
                                    <tr>
                                        {item.tableData?.headers.map((header, i) => (
                                            <th
                                                key={i}
                                                className="px-4 py-2 border text-left font-semibold"
                                            >
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {item.tableData?.rows.map((row, i) => (
                                        <tr key={i}>
                                            {row.map((cell, j) => (
                                                <td key={j} className="px-4 py-2 border">
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );


            case "custom":
                return item.customComponent || null;

            default:
                return null;
        }
    };

    return (
        <div className="w-full mx-auto space-y-3 mt-10">
            {data.map((item, index) => (
                <div
                    key={item.id}
                    className="border border-gray-300 rounded-sm overflow-hidden shadow-sm transition-all duration-300"
                >
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="flex justify-between items-center w-full p-4 text-left text-md font-medium text-gray-800 hover:bg-gray-100"
                    >
                        <span className="text-lg sm:text-xl font-bold">{`${item.id} ${item.question}`}</span>
                        {openIndex === index ? (
                            <ChevronUp className="w-6 h-6 min-w-6 min-h-6 text-gray-600 cursor-pointer" />
                        ) : (
                            <ChevronDown className="w-6 h-6 min-w-6 min-h-6  text-gray-600 cursor-pointer" />
                        )}
                    </button>

                    <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-[1000px] p-4" : "max-h-0 p-0"
                            }`}
                    >
                        {renderContent(item)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomFaqAccordion;
