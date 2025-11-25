import React, { useState } from "react";

export interface Student {
    name: string;
    program: string;
    company: string;
}

export interface Headers {
    name: string;
    program: string;
    company: string;
}

export interface CustomPlacedStudentTableProps {
    students: Student[];
    headers: Headers;
}

const CustomPlacedStudentTable: React.FC<CustomPlacedStudentTableProps> = ({
    students,
    headers,
}) => {
    const [visibleCount, setVisibleCount] = useState<number>(5);

    const handleViewMore = () => {
        setVisibleCount((prev) => prev + 5);
    };

    const showViewMoreButton = visibleCount < students.length;

    return (
        <>
            <div style={{ padding: "20px", overflowX: "auto", }}>
                <div
                    style={{
                        width: "100%",

                        background: "white",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        borderRadius: "10px",
                        display: "inline-block",
                        minWidth: "750px",
                    }}
                >

                    <div
                        className="rounded-t-xl flex lg:justify-around md:justify-start"
                        style={{
                            background: "#173E77",
                            color: "white",
                            padding: "25px 0",
                            fontWeight: 600,
                            fontSize: "14px",
                            minWidth: "750px",
                        }}
                    >
                        <div
                            className="pl-6 "
                            style={{ width: "250px", minWidth: "250px" }}
                        >
                            {headers.name}
                        </div>
                        <div style={{ width: "250px", minWidth: "250px" }}>
                            {headers.program}
                        </div>
                        <div style={{ width: "250px", minWidth: "250px" }}>
                            {headers.company}
                        </div>
                    </div>

                    {students.slice(0, visibleCount).map((student, idx) => (
                        <div
                            key={idx}
                            className="flex items-center border-b border-gray-400 p-8 lg:justify-around md:justify-start"
                            style={{ minWidth: "750px" }}
                        >
                            <div style={{ width: "250px", minWidth: "250px" }}>
                                {student.name}
                            </div>
                            <div style={{ width: "250px", minWidth: "250px" }}>
                                {student.program}
                            </div>
                            <div className="md:break-all whitespace-normal" style={{ width: "250px", minWidth: "250px" }}>
                                {student.company}
                            </div>
                        </div>
                    ))}
                </div>


            </div>
            {/* View More Button */}
            {showViewMoreButton && (
                <div style={{ textAlign: "center", marginTop: "24px" }}>
                    <button
                        onClick={handleViewMore}
                        style={{
                            background: "#173E77",
                            border: "none",
                            padding: "12px 26px",
                            borderRadius: "6px",
                            color: "white",
                            cursor: "pointer",
                            fontWeight: 600,
                        }}
                    >
                        VIEW MORE →
                    </button>
                </div>
            )}
        </>
    );
};

export default CustomPlacedStudentTable;
