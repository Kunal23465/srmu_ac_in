import { feeStructureCustomTopFooter } from "../../../data/admissions/fee-structure/fee-structue-data";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../scholarship/ScholarshipOverviewSection";
import PhotoSection from "./PhotoSection ";

interface CardBase {
  title: string;
  description: string;
  extraDescription?: string;
  photos?: string[];
  routeKey: string;
}

interface Props<T extends CardBase> {
  card: T;
}

const EventDetailsComponent = <T extends CardBase>({ card }: Props<T>) => {
  return (
    <div>
      <div className={Classes["container"]}>
        <CustomOverviewSection
          data={{
            heading: card.title,
            content: <div dangerouslySetInnerHTML={{ __html: card.description }} />,
          }}
        />

        {card.extraDescription && (
          <div
            className="mt-6 font18 leading-7 text-justify"
            dangerouslySetInnerHTML={{ __html: card.extraDescription }}
          />
        )}

        {card.photos && card.photos.length > 0 && (
          <div className="py-10 md:py-20">
            <PhotoSection photos={card.photos} />
          </div>
        )}
      </div>
       <CustomTopFooter data={feeStructureCustomTopFooter} />
    </div>
  );
};

export default EventDetailsComponent;
