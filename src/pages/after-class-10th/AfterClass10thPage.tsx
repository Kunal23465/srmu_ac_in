import React from "react";
import AfterClass10th from "../../components/home/AfterClass10th";
import { Outlet, useLocation } from "react-router-dom";

const AfterClass10thPage: React.FC = () => {
  const location = useLocation().pathname;
  console.log("location", location)
  return (
    <div>
      {
        location === "/programs/after-class-10th" ? <AfterClass10th /> : <Outlet />
      }
      
    </div>
  );
};

export default AfterClass10thPage;
