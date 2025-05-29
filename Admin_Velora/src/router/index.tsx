
import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "../component/layout/AdminLayout";
import Dasborad from "../pages/Dasboard/Dashboard";
import ProductList from "../pages/Product/ProductList";
import CategoryList from "../pages/Category/CategoryList";

export const router = createBrowserRouter([
    {
    path: "/",
    element: <Navigate to="/admin" replace />, 
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
                path: "product-list",
                element: <ProductList />,
            },
            {
                path: "category-list",
                element: <CategoryList />,
            },
        ],
    },
]);