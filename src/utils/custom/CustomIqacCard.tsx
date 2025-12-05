import React, { useState } from "react";
import { MdClose } from "react-icons/md";

interface IqacCardProps {
    title: string;
    icon?: string;
    description: string;
    colorCode: string;
    index: number;
    length: number;
    content?: any;
    mode?: string | undefined
}

interface propsModal {
    title: string;
    description: string;
    isExpanded: number | null;
    id: number;
    setIsExpanded: any;
    content: string | React.ReactNode;
}

export const CustomModal: React.FC<propsModal> = ({ isExpanded, id, setIsExpanded, content }) => {
    return (
        <>
            {isExpanded == id && (
                <>
                    <div className="  w-full h-screen fixed top-0 left-0 z-999"
                      style={{ backdropFilter: "blur(1px)" }}></div>
                    <div className="w-[90%]  max-w-[700px] xl:max-w-[1050px]  fixed top-[50%] left-[50%] border-t-4 border-b-4 border-t-[#ffb703] border-b-[#0f4a85] bg-white translate-x-[-50%] translate-y-[-50%] z-9999">
                        <div className="max-h-[650px] faculty-card-scrollbar overflow-y-auto px-5 py-10">
                            <span
                                onClick={() => setIsExpanded(null)}
                                className="flex justify-center items-center min-w-[25px] min-h-[25px] bg-[#0f4a85] text-white shadow-md rounded-full absolute -top-[10px] -right-[10px] cursor-pointer"
                            >
                                <MdClose size={18} />
                            </span>

                            {typeof content === "string" ? (
                                <div dangerouslySetInnerHTML={{ __html: content }} />
                            ) : (
                                <div>{content}</div>
                            )}

                        </div>
                    </div>
                </>
            )}
        </>
    );
};

const CustomIqacCard: React.FC<IqacCardProps> = ({ title, icon, description, colorCode, index, length, content, mode }) => {
    const [isExpanded, setIsExpanded] = useState<number | null>(null);

    // Function to truncate the description to 30 words
    const truncateDescription = (text: string, wordLimit: number) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    const truncatedDescription = truncateDescription(description, 35);

    if (isExpanded !== null) {
        (document.body.style.overflow = "hidden"), (document.body.style.height = "100vh");
    } else {
        (document.body.style.overflow = "auto"), (document.body.style.height = "auto");
    }
    return (
        <>
            <div
                className={` group w-full  relative flex flex-col items-center justify-center ${index == 0 ? "rounded-2xl lg:rounded-l-2xl " : "rounded-2xl lg:rounded-none"} ${index == length - 1 ? "rounded-2xl lg:rounded-r-2xl " : "rounded-2xl lg:rounded-none"
                    } ${colorCode} ${colorCode === "bg-[#233E6F]" ? "text-[#FFFFFF] ${colorCode}" : "text-black"}   h-[350px] cursor-pointer`}
            >
                {/* Icon and Title Section */}
                <div className="flex flex-col items-center justify-center w-full">
                    {icon && <img src={icon} alt={title} className="w-auto h-auto mb-2 object-cover" />}
                    <h3 className=" text-white text-2xl text-center w-full max-w-40 mx-auto mt-5">{title}</h3>
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-white bg-opacity-100 transition-opacity duration-300 shadow-2xl  z-1 -m-5 mb-0 rounded-t-2xl after:rounded-b-2xl   after:h-5 after:w-full after:bg-[#ffb703] after:content-[''] after:absolute after:-bottom-5 after:left-0 after:right-0 ">
                    <h3 className="font-semibold text-[#ffb703] text-xl text-center">{title}</h3>

                    {/* Description Section */}
                    <div className="p-4 text-center text-gray-700 max-h-72 overflow-hidden">
                        <p className={`transition-all duration-300 ${isExpanded ? "max-h-64 overflow-auto" : "max-h-64 overflow-hidden"}`}>
                            {truncatedDescription}
                            {isExpanded && <span>{description}</span>}
                        </p>
                    </div>

                    {/* Read More Button */}
                    {
                        mode !== "hide" && (index === 1 || index === 2 || index === 4) && <button className="text-[#000000] cursor-pointer font-medium" onClick={() => setIsExpanded(index)}>
                            <b>Read More</b>
                        </button>
                    }
                </div>
            </div>
            <CustomModal setIsExpanded={setIsExpanded} id={index} isExpanded={isExpanded} title={title} description={description} content={content} />
        </>
    );
};

export default CustomIqacCard;
