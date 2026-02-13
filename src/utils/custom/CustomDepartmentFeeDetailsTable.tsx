import React, { useEffect, useState } from "react";
import { FeeTableData } from "../../data/academics/faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { CustomModal } from "./CustomIqacCard";

interface Props {
    data: FeeTableData;
}

const CustomDepartmentFeeDetailsTable: React.FC<Props> = ({ data }) => {
    const [expandedId, setExpandedId] = React.useState<number | null>(null);
    const [gridTemplate, setGridTemplate] = useState("");
    useEffect(() => {
        const updateGrid = () => {
            if (window.innerWidth > 592) {
                setGridTemplate(
                    `3fr repeat(${data.columns.length - 1}, 1fr)`
                );
            } else {
                setGridTemplate(
                    `1fr repeat(${data.columns.length - 1}, 1fr)`
                );
            }
        };

        updateGrid(); // run on mount
        window.addEventListener("resize", updateGrid);

        return () => window.removeEventListener("resize", updateGrid);
    }, [data.columns.length]);


    // const gridTemplate = `3fr repeat(${data.columns.length - 1}, 1fr)`;

    return (
        <div className="w-full px-2 py-3 sm:p-6 pb-[60px] bg-[#ecf0f9] rounded-2xl border border-[#c6d4ea] my-14">

            {/* Scrollable wrapper ONLY on small & medium screens */}
            <div className="overflow-x-auto lg:overflow-visible">

                <div className="min-w-max lg:min-w-full">

                    {/* Header */}
                    <div
                        className="grid py-6 px-4 rounded-xl bg-[#ecf0f9] font-semibold text-[#0a4a85]"
                        style={{ gridTemplateColumns: gridTemplate }}
                    >
                        {data.columns.map((col, index) => (
                            <div key={index} className="px-5 uppercase lg:text-[15px] md:text-[14px] sm:text-[13.132px] text-[13.132px] whitespace-nowrap">
                                {col}
                            </div>
                        ))}
                    </div>

                    {/* Rows */}
                    <div className="mt-4 space-y-4">
                        {data.rows.map((row, rowIndex) => {
                            const values = Object.values(row).filter(
                                (val) => val !== row.eligibilityContent
                            );

                            return (
                                <div
                                    key={rowIndex}
                                    className="grid bg-white rounded-md px-2 py-5 sm:p-9"
                                    style={{ gridTemplateColumns: gridTemplate }}
                                >
                                    {values.map((val, colIndex) => (
                                        <div
                                            key={colIndex}
                                            className={`text-left  text-[#212523] fw500 lg:text-[19px] md:text-[17.82px] sm:text-[16.632px] text-[16.632px] font-normal flex items-center justify-start px-8 relative  ${colIndex !== 0 ? "whitespace-nowrap" : "whitespace-wrap max-w-[200px] sm:max-w-auto"} `}
                                        >
                                            {val === "Click" ? (
                                                <span
                                                    className="color_light_blue lg:text-[19px] md:text-[17.82px] sm:text-[16.632px] text-[16.632px] fw500 cursor-pointer"
                                                    onClick={() => setExpandedId(rowIndex)}
                                                >
                                                    Click to View
                                                </span>
                                            ) : val === "NA" ? "-" : val}

                                            {colIndex !== values.length - 1 && (
                                                <span className="absolute right-0 h-10 w-px bg-gray-300"></span>
                                            )}
                                        </div>
                                    ))}

                                    <CustomModal
                                        id={rowIndex}
                                        isExpanded={expandedId}
                                        setIsExpanded={setExpandedId}
                                        content={row.eligibilityContent}
                                        title="Profile Details"
                                        description="Full profile information"
                                    />
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>

            {/* Notes */}
            {data.notes && (
                <div className="mt-6 bg-[#ffffff] p-8 rounded-lg">
                    {data.notes.map((note, i) => (
                        <p key={i} className="text-sm pb-4 text-[#0c3b6a] font-semibold">
                            {note}
                        </p>
                    ))}
                </div>
            )}

        </div>
    );
};

export default CustomDepartmentFeeDetailsTable;
