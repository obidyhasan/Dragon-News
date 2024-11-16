import { createBrowserRouter, Navigate } from "react-router-dom";

import HomeLayout from "../layout/HomeLayout";
import CategoryLayout from "../layout/Home/CategoryLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import NewsDetailsLayout from "../layout/NewsDetailsLayout";
import PrivateRouter from "./PrivateRouter";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:categoryId",
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.categoryId}`
          ),
        element: <CategoryLayout></CategoryLayout>,
      },
    ],
  },
  {
    path: "/newsDetails/:newsId",
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.newsId}`),
    element: (
      <PrivateRouter>
        <NewsDetailsLayout></NewsDetailsLayout>
      </PrivateRouter>
    ),
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default Router;
