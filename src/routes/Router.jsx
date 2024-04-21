import { createBrowserRouter } from "react-router-dom";
import React from "react";

// Route

// Page
import Home from "../pages/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
]);

export default Router;
