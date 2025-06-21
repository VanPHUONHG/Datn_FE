import { createBrowserRouter } from "react-router-dom";
import MainLayout from "components/layout/MainLayout";
import Home from "pages/Home";
import Cart from "pages/Cart/Cart";
import Checkout from "pages/Checkout/Checkout";
import Wishlist from "pages/Wishlist/Wishlist";
import Order_History from "pages/Order_History/Order_History";
import ProductDetail from "pages/Product_detail/Product_detail";
import Register from "pages/Register";
import Login from "pages/Login";
import ProductInCategory from "pages/ProductInCategory/ProductInCategory";
import Blog from "pages/Blog/Blog";
import BlogDetail from "pages/blogDetail/blogDetail";
import Compare from "pages/Compare/Compare";
import AllProducts from "pages/AllProduct/Product";

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
        path: "/product/:id",
        element: <ProductDetail />,
      },
      // {
      //   path: "productdetail",
      //   element: <ProductDetail />,
      // },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
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
        path: "blog_detail",
        element: <BlogDetail />,
      },
      {
        path: "compare",
        element: <Compare />,
      },
      {
        path: "categories/:categoryId",
        element: <ProductInCategory />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "products",
        element: <AllProducts />,
      },

    ],
  },
]);
