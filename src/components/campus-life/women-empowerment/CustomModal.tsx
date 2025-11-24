import { MdClose } from "react-icons/md";

interface propsModal {
    isExpanded: number | null;
    id: number;
    setIsExpanded: any;
    content: any;
}

export const CustomModal: React.FC<propsModal> = ({ isExpanded, id, setIsExpanded, content }) => {
    return (
        <>
            {isExpanded == id && (
                <>
                    <div className="backdrop-blur-sm bg-white/15 w-full h-screen fixed top-0 left-0 z-[999]"></div>
                    <div className="w-[90%]  max-w-[700px] xl:max-w-[1000px]  fixed top-[50%] left-[50%] border-t-4 border-b-4 border-t-[#ffb703] border-b-[#0f4a85] bg-white translate-x-[-50%] translate-y-[-50%] z-[9999]">
                        <div className="max-h-[650px] faculty-card-scrollbar overflow-y-auto px-5 py-10">
                            <span
                                onClick={() => setIsExpanded(null)}
                                className="flex justify-center items-center min-w-[25px] min-h-[25px] bg-[#0f4a85] text-white shadow-md rounded-full absolute -top-[10px] -right-[10px] cursor-pointer"
                            >
                                <MdClose size={18} />
                            </span>

                            <div dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};