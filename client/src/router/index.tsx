import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import { Routes } from "../enums/routes";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: Routes.LOGIN,
    element: <Login />,
  },
  {
    path: Routes.ROOT,
    /**
     * TODO: add Home Page
     */
    element: <Home />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
