import { StudentSenate } from "../../../data/campus-life/student-senate/student-senate-data";
import { FaFilePdf } from "react-icons/fa6";

const DownloadIcon: React.FC = () => {
    return <FaFilePdf className="text-xl" />;
};

interface CardProps {
    student: StudentSenate;
}


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

export const CardSectionSenate: React.FC<CardProps> = ({ student }) => {
    
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-lg flex flex-col h-full 
                        border-2 border-transparent hover:border-yellow-400 transition">

            <img
                src={student.image}
                alt={student.title}
                className="rounded-xl w-full h-48 object-cover"
            />

            <h2 className="mt-4 font26 fw500 color_light_blue">{student.title}</h2>

            <p className="mt-2 leading-relaxed flex-grow">
                {student.description.substring(0, 100)+"..."}
            </p>
        
            <div className="mt-auto pt-4 flex items-center justify-between">
                <a
                    href={student.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 border-2 border-yellow-500
                   text-white bg-[#0f4a85] hover:bg-white hover:text-yellow-500 
                   font-semibold px-4 py-2 rounded-lg transition-all"
                >
                    
                    <div className="bg-white rounded-md p-2 transition-all group-hover:bg-yellow-500">

                        <PdfSvgIcon className="transition-all group-hover:fill-white group-hover:text-white" /> 
                    </div>
                   <span> DOWNLOAD PDF</span>
                </a>
            </div>

        </div>
    );
};
