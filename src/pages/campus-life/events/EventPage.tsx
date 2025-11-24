import { Outlet, useLocation } from "react-router-dom";
import EventComponent from "../../../components/campus-life/events/EventComponent";

const EventPage = () => {
  const location = useLocation();

  const isRootEventsPage = location.pathname === "/campus-life/events";

  return (
    <div>
      {isRootEventsPage && <EventComponent />}
      <Outlet />
    </div>
  );
};

export default EventPage;
