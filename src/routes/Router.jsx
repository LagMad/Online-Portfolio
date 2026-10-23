import { createBrowserRouter } from "react-router-dom";
import React from "react";

// Route

// Page
import Home from "../pages/Home";
import Activities from "../pages/Activities";
import Projects from "../pages/Projects";
import KnowMore from "../pages/KnowMore";
import ConnectWithMe from "../pages/ConnectWithMe";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Activities",
    element: <Activities />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  },
  {
    path: "/Blog/:slug",
    element: <BlogPost />,
  },
  {
    path: "/Know-More",
    element: <KnowMore />,
  },
  {
    path: "/Connect-With-Me",
    element: <ConnectWithMe />,
  },
]);

export default Router;
