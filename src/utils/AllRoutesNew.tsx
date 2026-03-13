import RootLayout from "../pages/RootLayout";
import PageNotFound from "../pages/PageNotFound";
import { useRoutes } from "react-router-dom";


export function AllRoutesNew() {
  const element = useRoutes(routes);
  return element;
}

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
            element: <PageNotFound />,
      },
     
    ],

  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
];
