import { Helmet } from "react-helmet-async";
import NewEventComponent from "../../components/event-new/NewEventComponent";

export default function NewEventPage() {
  return (
    <>
      <Helmet>
        <title>SRMU Events &amp; Activities</title>
        <meta name="description" content="Explore academic, technical, cultural, sports and special events at Shri Ramswaroop Memorial University." />
      </Helmet>
      <NewEventComponent />
    </>
  );
}
