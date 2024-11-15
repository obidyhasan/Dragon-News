import { createBrowserRouter, Navigate } from "react-router-dom";

import HomeLayout from "../layout/HomeLayout";
import CategoryLayout from "../layout/Home/CategoryLayout";

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
    path: "/news",
    element: <h1>News</h1>,
  },
  {
    path: "/auth",
    element: <h1>Auth</h1>,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default Router;
