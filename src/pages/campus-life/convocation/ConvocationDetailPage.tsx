import { Outlet } from "react-router-dom";
import ConvocationDetailsComponent from "../../../components/campus-life/convocation/ConvocationDetailsComponent";
import { Convocation } from "../../../data/campus-life/convocation/convocation-data";

interface Props {
  card: Convocation;
}

const ConvocationDetailPage = ({ card }: Props) => {
  return (
    <div>
      <ConvocationDetailsComponent card={card} />
      <Outlet />
    </div>
  );
};

export default ConvocationDetailPage;
