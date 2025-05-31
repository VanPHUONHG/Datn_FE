import MainLayout from "components/layout/MainLayout";
import About from "pages/About/About";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import React from "react";
import { createBrowserRouter, Link } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, element: <Home />,
      },
      {
        path: "about", element: <About />,
      },
      {
        path: "register", element: <Register />
      },
       {
        path: "login", element: <Login />
      },
    ],
  },
]);
