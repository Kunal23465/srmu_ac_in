import React from 'react';
import { CustomTableProps, DownloadItem } from '../../types/table-data-types';
import { IoLogoYoutube } from "react-icons/io5";

const PdfSvgIcon: React.FC = () => (
  <svg
    viewBox="0 0 78.7 76.2"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '25px', height: '25px' }}
  >
    <g>
      <path d="M63.6,43.8c-2.5,0-5.5,0.2-8.7,0.6L50.3,45l-3.8-4.7c-2.2-2.7-4.6-6-5.5-7.5l-1.4-2.4l1.7-6.4c2.2-8.4,2.4-15.1,0.4-18.9
        c-1.3-2.6-3.7-4.2-6.3-4.2c-2.3,0-4.2,1.3-5.1,3.5c-1.4,3.3-0.7,12.3,1.4,18.5l1.6,4.5L31,33.6c-1.3,3.4-3.8,9.3-5.4,12.9l-2.8,6.3
        l-7.4,3.7C6.5,60.9,1.7,65.1,1,69c-0.3,1.7,0.2,3.2,1.6,4.6c1.1,1.1,2.8,1.7,4.7,1.7c2.1,0,4.3-0.7,6.5-1.9
        c3.7-2.1,8.6-7.7,13.1-14.9c1-1.5,2.3-3.5,2.8-4.2l0.3-0.1c4.7-1.6,6.3-2.2,9.6-3c2.8-0.7,8.1-1.8,9.6-2.1c0.6,0.6,2,1.9,3.9,3.2
        c5,3.5,11.1,5.6,16.1,5.6c5.3,0,8.6-2.3,8.6-6C77.7,48.2,75.3,43.8,63.6,43.8z" />
    </g>
  </svg>
);

const DownloadIcon: React.FC<{ item: DownloadItem }> = ({ item }) => {
  const isPdf = item.type === 'pdf';

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`download-icon ${isPdf ? 'pdf-icon' : 'video-icon'}`}
    >
      {isPdf ? <PdfSvgIcon /> : <IoLogoYoutube />}
    </a>
  );
};

const CustomTable: React.FC<CustomTableProps> = ({
  columnOneHeader,
  columnTwoHeader,
  data,
}) => {
  return (
    <div className="custom-table-container">
      <table className="custom-table">
        <thead>
          <tr className="table-header-row">
            <th className="column-one-header">{columnOneHeader}</th>
            <th className="column-two-header">{columnTwoHeader}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="table-data-row">
              <td className="row-title">{row.title}</td>
              <td className="row-download">
                <DownloadIcon item={row.download} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
