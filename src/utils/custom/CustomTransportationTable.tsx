import React from "react";

export interface TransportRow {
  id: string | number;
  Route: string;
  Time: string;
}
export interface TransportProps {
  data: TransportRow[];
}
const CustomTransportationTable: React.FC<TransportProps> = ({ data }) => {
  return (
    <div className="py-5">
      <table className="w-full text-left">
        <thead className="border border-gray-200">
          <tr>
            <th className="border border-gray-200 px-2 py-3">Sr. No.</th>
            <th className="border border-gray-200 px-2 py-3"> Route</th>
            <th className="border border-gray-200 px-2 py-3"> Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className={`hover:bg-gray-100 ${Number(item.id) % 2 === 0 ? "" : "bg-gray-100"}`}>
              <td className="border border-gray-200 px-2 py-3">{item.id}</td>
              <td className="border border-gray-200 px-2 py-3">{item.Route}</td>
              <td className="border border-gray-200 px-2 py-3">{item.Time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTransportationTable;
