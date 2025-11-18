import Convocation from '../../../components/campus-life/convocation/Convocation'
import { Outlet, useLocation } from 'react-router-dom';

const ConvocationPage = () => {

  const location = useLocation();

  const isRootEventsPage = location.pathname === "/campus-life/convocation";


  return (

    <div>
      {isRootEventsPage && <Convocation />}
      <Outlet />
    </div>
  )
}

export default ConvocationPage