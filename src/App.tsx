import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async";
import { routes } from './utils/AllRoutes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  const router = createBrowserRouter(routes);
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )

}

export default App
