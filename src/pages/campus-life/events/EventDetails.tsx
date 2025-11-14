import React from 'react'
import EventDetailsComponent from '../../../components/campus-life/events/EventDetailsComponent'
import { FestCard } from '../../../data/campus-life/events/events-data';

interface EventDetailsProps {
  card: FestCard;
}

const EventDetails: React.FC<EventDetailsProps> = ({ card }) => {
  return (
    <div>
      <EventDetailsComponent card={card} />
    </div>
  );
};

export default EventDetails;
