import React, { useEffect, useState } from "react";

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
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const formatCompanyName = (text: string) => {
        if (!isSmallScreen) return text;
        const words = text.split(" ");
        return words.map((word, i) => ((i + 1) % 3 === 0 ? word + "\n" : word)).join(" ");
    };

    const handleViewMore = () => {
        setVisibleCount((prev) => prev + 5);
    };

    const showViewMoreButton = visibleCount < students.length;

    return (
        <>
            <div style={{ padding: "20px", overflowX: "auto" }}>

                {/* ---------- HEADER SEPARATED WITH MB-10 ---------- */}
                <div
                    className="rounded-xl flex lg:justify-around md:justify-start"
                    style={{
                        background: "#173E77",
                        color: "white",
                        padding: "25px 0",
                        fontWeight: 600,
                        fontSize: "14px",
                        minWidth: "750px",
                        marginBottom: "40px", // mb-10
                    }}
                >
                    <div className="pl-6" style={{ width: "250px", minWidth: "250px" }}>
                        {headers.name}
                    </div>
                    <div style={{ width: "250px", minWidth: "250px" }}>
                        {headers.program}
                    </div>
                    <div style={{ width: "250px", minWidth: "250px" }}>
                        {headers.company}
                    </div>
                </div>

                {/* ---------------- TABLE BODY ---------------- */}
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
                            <div
                                className="whitespace-pre-wrap"
                                style={{ width: "250px", minWidth: "250px" }}
                            >
                                {formatCompanyName(student.company)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showViewMoreButton && (
                <div style={{ textAlign: "center", marginTop: "22px"}}>
                    <button
                        onClick={handleViewMore}
                        className="
        bg-[#173E77]
        text-white
        font-semibold
        px-6
        py-3
        rounded-md
        cursor-pointer
        border
        border-transparent
        hover:bg-white
        hover:text-[#173E77]
        hover:border-[#173E77]
        transition-all
        duration-300 mb-15
    "
                    >
                        VIEW MORE →
                    </button>

                </div>
            )}
        </>
    );
};

export default CustomPlacedStudentTable;
