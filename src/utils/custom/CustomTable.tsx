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
		l-7.4,3.7C6.5,60.9,1.7,65.1,1,69c-0.3,1.7,0.2,3.2,1.6,4.6c1.1,1.1,2.8,1.7,4.7,1.7c0,0,0,0,0,0c2.1,0,4.3-0.7,6.5-1.9
		c3.7-2.1,8.6-7.7,13.1-14.9c1-1.5,2.3-3.5,2.8-4.2l0.3-0.1c4.7-1.6,6.3-2.2,9.6-3c2.8-0.7,8.1-1.8,9.6-2.1c0.6,0.6,2,1.9,3.9,3.2
		c5,3.5,11.1,5.6,16.1,5.6c5.3,0,8.6-2.3,8.6-6C77.7,48.2,75.3,43.8,63.6,43.8z M64.4,53.1c-2.9-0.9-6.9-2.6-8.5-3.5
		c-0.6-0.3-1.6-0.9-2.4-1.5c2-0.3,4.9-0.6,7.1-0.8c5.1,0,6.6,0.2,8.4,1.1c1,0.5,1.7,1.5,1.8,2.4c0.1,0.9-0.4,1.7-1.2,2.3
		c-0.6,0.4-1.2,0.6-2,0.6C66.7,53.7,65.7,53.5,64.4,53.1z M32.1,49.8l0.2-0.4l3.6-9c0.7-1.7,1.5-4.2,2-5.8c0.5,0.7,1.2,1.7,2.1,2.9
		c1.5,2.3,3.8,5.3,5.2,6.9l1.4,1.7c-2,0.4-5.7,1.1-7.9,1.7C36.9,48.3,33.9,49.2,32.1,49.8z M37.2,12.4c-0.5,3-1.4,6.9-1.8,8.6
		l-0.3,1l-0.6-2c-0.7-2.4-1.3-6.4-1.4-8.4c-0.2-2.8,0.3-5.1,1.2-6.2c0.3-0.3,0.7-0.5,1-0.5c0.5,0,1.1,0.3,1.6,0.9
		C37.6,6.7,37.7,9,37.2,12.4z M4.7,70.7c-0.4-0.4-0.5-0.9-0.4-1.4c0.2-1.1,1.8-4.2,11.4-9.1l3.3-1.7c-3.1,4.9-7.6,10.2-9.7,11.6
		c-1.5,0.9-2.5,1.4-3.3,1.4C5.6,71.5,5.2,71.2,4.7,70.7z" />
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
            <th className="column-one-header text-[21px] sm:text-[21px] md:text-[22.5px] lg:text-[24px]">{columnOneHeader}</th>
            <th className="column-two-header text-[21px] sm:text-[21px] md:text-[22.5px] lg:text-[24px]">{columnTwoHeader}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="table-data-row md:text-[18.75px] text-[17.5px] sm:text-[17.5px] lg:text-[20px] fw500 ">
              <td className="row-title title text-[#023047]">{row.title}</td>
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
