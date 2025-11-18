import { Green } from "../../../data/campus-life/green-initiative/green-initiative-data";


interface CardProps {
    green: Green;
}

export const GreenInitiativeCards: React.FC<CardProps> = ({ green }) => {
    return (
        <div className="group bg-white cursor-pointer rounded-2xl shadow-md p-4 w-full max-w-lg flex flex-col h-full 
            border-2 border-yellow-400 hover:bg-[#023047] transition">

            <img
                src={green.image}
                alt={green.title}
                className="rounded-xl w-full h-48 object-cover"
            />

            <h2 className="mt-4 text-lg font-semibold group-hover:text-yellow-500">
                {green.title}
            </h2>

            <p className="mt-2 text-md leading-relaxed flex-grow group-hover:text-white">
                {green.description}
            </p>

        </div>


    );
};

