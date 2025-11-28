import React from "react";

export interface EventItem {
  id: number;
  title: string;
  topic?: string;
  speaker?: string;
  venue?: string;
  date?: string;
  event?: string;
  image: string;
  designation?: string;
  cardBgColor?: string;
}

interface EventCardProps {
  item: EventItem;
}

const CustomEventCard: React.FC<EventCardProps> = ({ item }) => {
  return (
    <div
      key={item.id}
      className="rounded-xl hover:shadow-[0_2px_4px_0_rgba(0,0,0,0.05),0_8px_16px_0_rgba(0,0,0,0.1)] p-8 border border-yellow-500 transition h-full"
      style={{
        backgroundColor: item.cardBgColor || "white",
      }}
    >
      <div className="flex flex-col sm:flex-row gap-10 w-full items-start sm:items-center">
        <div className="w-full sm:w-2/5 rounded-xl overflow-hidden bg-white">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-50 sm:h-48 object-cover"
          />
        </div>

        <div className="w-full sm:w-3/5 space-y-3">
          <h2 className="text-lg sm:text-xl font-semibold text-black">
            {item.title}
          </h2>

          {item.speaker && (
            <p className="text-sm sm:text-base text-black">
              <strong>Speaker:</strong> {item.speaker}
            </p>
          )}

          {item.designation && (
            <p className="text-sm sm:text-base text-black">
              <strong>Designation:</strong> {item.designation}
            </p>
          )}

          {item.topic && (
            <p className="text-sm sm:text-base text-black">
              <strong>Topic:</strong> {item.topic}
            </p>
          )}

          {item.event && (
            <p className="text-sm sm:text-base text-black">
              <strong>Event:</strong> {item.event}
            </p>
          )}

          {item.venue && (
            <p className="text-sm sm:text-base text-black">
              <strong>Venue:</strong> {item.venue}
            </p>
          )}

          <p className="text-sm sm:text-base text-black">
            <strong>Date:</strong> {item.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomEventCard;
