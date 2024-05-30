import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivateLayout, PublicLayout } from "../components";

import { Error404, HomePage, LoginPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        element: <HomePage />,
        path: "/",
      },
    ],
    // errorElement: <Error404 />,
  },
  {
    path: "/auth",
    errorElement: <Error404 />,
    element: <PublicLayout />,
    children: [{ path: "login", element: <LoginPage /> }],
  },
]);

export function RouterMain() {
  return <RouterProvider router={router} />;
}
