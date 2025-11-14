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
            className="mt-6 text-gray-700 leading-7"
            dangerouslySetInnerHTML={{ __html: card.extraDescription }}
          />
        )}

        {card.photos && card.photos.length > 0 && (
          <div className="mt-10">
            <PhotoSection photos={card.photos} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetailsComponent;
