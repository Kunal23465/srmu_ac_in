import React from "react";

export interface HeadData {
  head1: string;
  head2: string;
  head3?: string;
}
export interface RowData {
  col1: string;
  col2: string;
  col3?: string;
}

interface CustomScholarshipTableProps {
  head: HeadData[];
  data: RowData[];
  showThirdColumn?: boolean;
}

const CustomScholarshipTable: React.FC<CustomScholarshipTableProps> = ({ head, data, showThirdColumn = false }) => {
  const formatWithLineBreaks = (text: string) => {
    return text.split("**").map((part, index) => (
      <React.Fragment key={index}>
        {index > 0 && <br />}
        {part.trim()}
      </React.Fragment>
    ));
  };

  return (
    <div className="">
      <table className="w-full text-center">
        <thead className="">
          {head.map((item, i) => (
            <tr key={i}>
              <th className="text-sm text-white p-3 border-8 border-gray-100 bg-amber-400">{item.head1}</th>
              <th className="text-sm text-white p-3 border-8 border-gray-100 bg-amber-400">{formatWithLineBreaks(item.head2)}</th>

              {showThirdColumn && <th className="text-sm text-white p-3 border-8 border-gray-100 bg-amber-400">{formatWithLineBreaks(item.head3 || "")}</th>}
            </tr>
          ))}
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="">
              <td className="p-3 border-8 border-gray-100 bg-white">{row.col1}</td>
              <td className="p-3 border-8 border-gray-100 bg-white">{row.col2}</td>
              {showThirdColumn && <td className="p-3 border-8 border-gray-100 bg-white">{row.col3 || "-"}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomScholarshipTable;
