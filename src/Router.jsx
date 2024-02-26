import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { SignInPage } from "./components/pages/SignInPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "signin",
      element: <SignInPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
