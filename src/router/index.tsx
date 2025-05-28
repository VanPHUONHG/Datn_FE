import MainLayout from "components/layout/MainLayout";
import About from "pages/About/About";
import Checkout from "pages/Checkout/Checkout";
import Home from "pages/Home";
import Detail from "pages/Product_detail/Product_detail";
import Register from "pages/register/RegisterPage";
import Wishlist from "pages/Wishlist/Wishlist";
import React from "react";
import { createBrowserRouter, Link } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
