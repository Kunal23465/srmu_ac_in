import { Outlet, useLocation } from "react-router-dom";
import EventComponent from "../../../components/campus-life/events/EventComponent";
import { Helmet } from "react-helmet-async";

const EventPage = () => {
  const location = useLocation();

  const isRootEventsPage = location.pathname === "/events";

  return (
    <div>
      {isRootEventsPage && <><Helmet>  <title>Events &amp; Awards | Annual Festivals | Conferences</title>
        <meta name="description" content="Explore upcoming and past events at SRMU, including academic activities, workshops, seminars, celebrations and student events." /></Helmet><EventComponent /></>}
      <Outlet />
    </div>
  );
};

export default EventPage;
