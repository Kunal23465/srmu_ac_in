
// import React from "react";
// import { FeeTableData } from "../../data/academics/faculty-of-civil-engineering/faculty-of-civil-engineering-data";


// interface Props {
//     data: FeeTableData;
// }

// const FeeTable: React.FC<Props> = ({ data }) => {
//     return (
//         <div className="w-full p-6 pb-[60px] bg-[#ecf0f9] rounded-2xl border border-[#c6d4ea] my-14">

//             {/* HEADER */}
//             <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr] py-6 px-4 rounded-xl bg-[#ecf0f9] font-semibold text-[#0a4a85]">
//                 {data.columns.map((col, index) => (
//                     <div key={index} className="px-10 text-[16px]">
//                         {col}
//                     </div>
//                 ))}
//             </div>


//             {/* TABLE ROWS */}
//             <div className="mt-4 space-y-4">
//                 {data.rows.map((row, rowIndex) => (
//                     <div
//                         key={rowIndex}
//                         className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr] bg-white rounded-md p-9   "
//                     >
//                         {Object.values(row).map((val, colIndex) => (
//                             <div
//                                 key={colIndex}
//                                 className="text-center text-[18px] text-[#212523] font-normal flex items-center justify-start px-8 relative"
//                             >
//                                 {val === 'NA' ? '-' : val}

//                                 {colIndex !== 4 && (
//                                     <span className="absolute right-0 h-10 w-[1px] bg-gray-300"></span>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                 ))}
//             </div>

//             {/* NOTES */}
//             <div className="mt-6 bg-[#ffffff] p-8 rounded-lg">
//                 {data.notes.map((note, i) => (
//                     <p key={i} className="text-sm pb-4 text-[#0c3b6a] font-semibold">
//                         {note}
//                     </p>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FeeTable;


import React from "react";
import { FeeTableData } from "../../data/academics/faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { CustomModal } from "./CustomIqacCard";

interface Props {
    data: FeeTableData;
}

const CustomDepartmentFeeDetailsTable: React.FC<Props> = ({ data }) => {
    const [expandedId, setExpandedId] = React.useState<number | null>(null);

    const gridTemplate = `3fr repeat(${data.columns.length - 1}, 1fr)`;

    return (
        <div className="w-full p-6 pb-[60px] bg-[#ecf0f9] rounded-2xl border border-[#c6d4ea] my-14">

            <div
                className="grid py-6 px-4 rounded-xl bg-[#ecf0f9] font-semibold text-[#0a4a85]"
                style={{ gridTemplateColumns: gridTemplate }}
            >
                {data.columns.map((col, index) => (
                    <div key={index} className="px-10 text-[16px]">
                        {col}
                    </div>
                ))}
            </div>

            <div className="mt-4 space-y-4">
                {data.rows.map((row, rowIndex) => {
                    const values = Object.values(row).filter(
                        (val) => val !== row.eligibilityContent
                    );

                    return (
                        <div
                            key={rowIndex}
                            className="grid bg-white rounded-md p-9"
                            style={{ gridTemplateColumns: gridTemplate }}
                        >
                            {values.map((val, colIndex) => (
                                <div
                                    key={colIndex}
                                    className="text-center text-[#212523] font-normal flex items-center justify-start px-8 relative"
                                >
                                    {val === "Click" ? (
                                        <span
                                            className="color_light_blue fw500 cursor-pointer"
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
{data.notes &&
            <div className="mt-6 bg-[#ffffff] p-8 rounded-lg">
                {data.notes && data.notes.map((note, i) => (
                    <p key={i} className="text-sm pb-4 text-[#0c3b6a] font-semibold">
                        {note}
                    </p>
                ))}
            </div>}

        </div>
    );
};



export default CustomDepartmentFeeDetailsTable;
