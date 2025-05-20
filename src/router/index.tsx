import MainLayout from "components/layout/MainLayout";
import About from "pages/About/About";
import Blog from "pages/Blog/Blog";
import BlogDetail from "pages/blogDetail/blogDetail";
import Cart from "pages/Cart";
import Compare from "pages/Compare/Compare";
import Home from "pages/Home";
import Order_History from "pages/Order_History";
import React from "react";
import { createBrowserRouter,} from "react-router-dom";

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
        path: "cart",     
        element: <Cart />,
      },
         {
        path: "order_history",     
        element: <Order_History />,
      },
       {
        path: "blog",     
        element: <Blog />,
      },
      {
        path: "blogDetail",     
        element: <BlogDetail />,
      },
       {
        path: "compare",     
        element: <Compare />,
      },
    ],
  },
]);
