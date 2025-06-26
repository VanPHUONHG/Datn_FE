
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
import VariantDelete from "pages/Variant/VariantDelete";
import VariantList from "pages/Variant/VariantList";
import VariantAdd from "pages/Variant/VariantAdd";
import VariantEdit from "pages/Variant/VariantEdit";

import OrderList from "pages/Order/OrderList";
import OrderDetail from "pages/Order/OrderDetail";
import RequireAdmin from "pages/Login/RequireAdmin";

import BlogList from "pages/Blog/BlogList";
import BlogAdd from "pages/Blog/BlogAdd";
import BlogEdit from "pages/Blog/BlogEdit";
import BlogDeleted from "pages/Blog/BlogDeleted";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/admin" replace />,
  },
  {
    path: "admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: (
      <RequireAdmin>
        <AdminLayout />
      </RequireAdmin>
    ),
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

      {
        path: "variant-delete",
        element: <VariantDelete />,
      },

      {
        path: "variant-list",
        element: <VariantList />,
      },

      {
        path: "variant-add",
        element: <VariantAdd />,
      },

      {
        path: "variant-edit/:id",
        element: <VariantEdit />,
      },
      // {
      //   path: "user-list",
      //   element: <UserList />,
      // }
      {
        path: "order-list",
        element: <OrderList />,
      },

      {
        path: "blog-list",
        element: <BlogList />
      },
      {
        path: "blog-add",
        element: <BlogAdd />
      },
      {
        path: "blog-edit/:slug",
        element: <BlogEdit />
      },
      {
        path: "blog-deleted",
        element: <BlogDeleted />
      },

      {
        path: "order-detail/:id",
        element: <OrderDetail />,
      },
    ],
  },
]);