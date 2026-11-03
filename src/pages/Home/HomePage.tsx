import React from "react";

import { Outlet, useLocation } from "react-router-dom";
import SeoHead from "../../components/seo/SeoHead";
import { homePageSchema } from "../../data/home/homePageSchema";
import { newHomePlacementSchema } from "../../data/home/newHomePlacementSchema";

import NewHome from "../../components/new-home/NewHome";

const homePageJsonLd = {
  ...homePageSchema,
  "@graph": [...homePageSchema["@graph"], ...newHomePlacementSchema["@graph"]],
};

const HomePage: React.FC = () => {
  const pathname = useLocation().pathname
  return (
    <>
      <SeoHead
        title="Best Private University in Uttar Pradesh | Shri Ramswaroop Memorial University (SRMU), Lucknow - Deva Road"
        description="Shri Ramswaroop Memorial University (SRMU), Lucknow-Deva Road, Uttar Pradesh (U.P.) is best private university in Uttar Pradesh  that offers B.Tech, BCA, BBA, B.Com, Law, MBA, M.Tech, Pharmacy, Biotechnology, Polytechnic, Agriculture ,MCA and more various undergraduate and postgraduate courses ."
        pathname={pathname}
        jsonLd={pathname === "/" ? homePageJsonLd : undefined}
      />

      {pathname === "/" ? <NewHome /> : <Outlet />}
    </>
  );
};

export default HomePage;    
