import { FaRegCalendar } from "react-icons/fa";

const MissionVissionCard = ({ image, description, date, onReadMore }: any) => {
    const truncatedDesc = description.length > 220 ? description.slice(0, 220) + "..." : description;
    return (
        <div className="w-full cursor-pointer">
            <img src={image} alt="Event" className="transition-all duration-200 rounded-md mb-4 w-[100%] object-cover max-h-[400px] object-bottom" />
            <div className="w-full">
                <div className="flex items-center gap-x-2 font-medium">
                    <FaRegCalendar color="#3f9cbb" />
                    {date}
                </div>
                <p className="mt-2">{truncatedDesc}</p>
                {description.length > 220 && (
                    <div className="flex items-center justify-end mt-2">
                        <button className=" bg-[#1B3A6F] text-white px-3 py-1 rounded-full" onClick={onReadMore}>
                            Read More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MissionVissionCard