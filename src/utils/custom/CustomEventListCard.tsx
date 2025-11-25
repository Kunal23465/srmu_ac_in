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
        <div className="w-full sm:w-1/2 p-2">
            <div
                key={item.id}
                className="rounded-xl shadow-md p-8 border-1 border-yellow-500 transition h-full"
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

                        {item.topic && (
                            <p className="text-sm sm:text-base text-gray-700">
                                <strong>Topic:</strong> {item.topic}
                            </p>
                        )}

                        {item.speaker && (
                            <p className="text-sm sm:text-base text-gray-700">
                                <strong>Speaker:</strong> {item.speaker}
                            </p>
                        )}

                        {item.venue && (
                            <p className="text-sm sm:text-base text-gray-700">
                                <strong>Venue:</strong> {item.venue}
                            </p>
                        )}

                        <p className="text-sm sm:text-base text-gray-700">
                            <strong>Date:</strong> {item.date}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomEventCard;
