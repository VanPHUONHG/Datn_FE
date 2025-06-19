
import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "../component/layout/AdminLayout";
import Dasborad from "../pages/Dasboard/Dashboard";
import ProductList from "../pages/Product/ProductList";
import CategoryList from "../pages/Category/CategoryList";
import ProductDelete from "pages/Product/ProductDelete";
import ProductEdit from "pages/Product/ProductEdit";
import ProductAdd from "pages/Product/ProductAdd";
import CategoryEdit from "pages/Category/CategoryEdit";
import CategoryDelete from "pages/Category/CategoryDelete";
import CategoryInProduct from "pages/Category/CategoryInProduct";
import CategoryAdd from "pages/Category/CategoryAdd";
import AdminLogin from "pages/Login/Login";

export const router = createBrowserRouter([
    {
    path: "/",
    element: <Navigate to="/admin" replace />, 
  },
    {
        path: "admin-login",
        element: <AdminLogin />,
      },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dasborad />,
            },
            {
                path: "product-delete",
                element: <ProductDelete />,
            },
              {
                path: "product-list",
                element: <ProductList />,
            },
            {
                path: "product-edit/:id",
                element: <ProductEdit />,
            },
               {
                path: "product-add",
                element: <ProductAdd />,
            },
            {
                path: "category-list",
                element: <CategoryList />,
            },
              {
        path: "category-add",
        element: <CategoryAdd />,
      },
             {
                path: "category-edit/:id",
                element: <CategoryEdit />,
            },
              {
        path: "category-in-product/:id",
        element: <CategoryInProduct />,
      },
              {
                path: "category-delete",
                element: <CategoryDelete />,
            },
        ],
    },
]);