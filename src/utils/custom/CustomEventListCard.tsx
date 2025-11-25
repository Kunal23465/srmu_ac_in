import React from "react";

export interface EventItem {
  id: number;
  title: string;
  topic?: string;
  speaker?: string;
  venue?: string;
  date: string;
  image: string;
  cardBgColor?: string;
}

interface EventCardProps {
  item: EventItem;
}

const CustomEventCard: React.FC<EventCardProps> = ({ item }) => {
  return (
    <div>
      <div
        key={item.id}
        className="rounded-xl h-[450px] cursor-pointer overflow-hidden p-6 border border-[#8b8f91] shadow-xl transition-transform duration-300 hover:-translate-y-2"
        style={{
          backgroundColor: item.cardBgColor || "",
        }}
      >
        {/* IMAGE */}
        <div className="w-full flex justify-center">
          <div className="w-full h-48 rounded-xl overflow-hidden mb-6 bg-white">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TITLE */}
        <h2 className="font18 text-[#ffb703] mt-4 text-left">
          {item.title}
        </h2>

        <div className="w-full pt-4 space-y-2">

          {item.topic && (
            <div>
              <p className="font14 tracking-widest text-[#ffb703] opacity-80 mb-1 uppercase">
                Topic
              </p>
              <p className="font15 text-white">{item.topic}</p>
            </div>
          )}

          {item.speaker && (
            <div>
              <p className="font14 tracking-widest text-[#ffb703] opacity-80 mb-1 uppercase">
                Speaker
              </p>
              <p className="font15 text-white">{item.speaker}</p>
            </div>
          )}

          {item.venue && (
            <div>
              <p className="font14 tracking-widest text-[#ffb703] opacity-80 mb-1 uppercase">
                Venue
              </p>
              <p className="font15 text-white">{item.venue}</p>
            </div>
          )}

          <div>
            <p className="font14 tracking-widest text-[#ffb703] opacity-80 mb-1 uppercase">
              Date
            </p>
            <p className="font15 text-white">{item.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomEventCard;
 