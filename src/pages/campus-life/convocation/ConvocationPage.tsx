import { Helmet } from 'react-helmet-async';
import Convocation from '../../../components/campus-life/convocation/Convocation'
import { Outlet, useLocation } from 'react-router-dom';

const ConvocationPage = () => {

  const location = useLocation();

  const isRootEventsPage = location.pathname === "/campus-life/convocation";


  return (

    <div>
      {isRootEventsPage && <><Helmet>
        <title>Convocation | Shri Ramswaroop Memorial University, Lucknow</title>
  <meta name="description" content="University convocation is a significant and ceremonial event marking the culmination of years of academic dedication and achievement for graduating students." />
      </Helmet><Convocation /></> }
      <Outlet />
    </div>
  )
}

export default ConvocationPage