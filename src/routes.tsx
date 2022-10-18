import { RouteObject } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Blogs from "./containers/Blogs/Blogs";
import Projects from "./containers/Projects/Projects";
import Events from "./containers/Events/Events";
import UrlShortener from "./containers/UrlShortener/UrlShortener";

const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      // {
      //   path: "/not found",
      //   element: <NotFound />,
      // }
    ],
  },
  {
    path: "*",
    element: <UrlShortener />,
  },
];

export default routeConfig;
