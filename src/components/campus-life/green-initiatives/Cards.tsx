import { greens } from "../../../data/campus-life/green-initiative/green-initiative-data";
import { GreenInitiativeCards } from "./GreenInitiativeCards";

export const Cards: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {greens.map(item => (
                <GreenInitiativeCards key={item.id} green={item} />
            ))}
        </div>
    );
};


export default Cards;