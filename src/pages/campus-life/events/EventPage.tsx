import { Outlet, useLocation } from "react-router-dom";
import EventComponent from "../../../components/campus-life/events/EventComponent";
import { Helmet } from "react-helmet-async";

const EventPage = () => {
  const location = useLocation();

  const isRootEventsPage = location.pathname === "/events";

  return (
    <div>
      {isRootEventsPage && <><Helmet>  <title>Events &amp; Awards | Annual Festivals | Conferences</title>
        <meta name="description" content="SRMU’s accomplishments and accolades, celebrate student, faculty, institutional successes, and stay connected to the pulse of our thriving community through a glimpse into our year-round campus activities." /></Helmet><EventComponent /></>}
      <Outlet />
    </div>
  );
};

export default EventPage;
