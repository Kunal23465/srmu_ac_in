import React from 'react'
import EventDetailsComponent from '../../../components/campus-life/events/EventDetailsComponent'
import { FestCard } from '../../../data/campus-life/events/events-data';
import { Helmet } from 'react-helmet-async';

interface EventDetailsProps {
  card: FestCard;
}

const EventDetails: React.FC<EventDetailsProps> = ({ card }) => {
  return (
    <div>
      <Helmet>
        <title>{card.metaTitle??""}</title>
        <meta name="description" content={card.metaDescription??""} />
      </Helmet>
      <EventDetailsComponent card={card} />
    </div>
  );
};

export default EventDetails;
