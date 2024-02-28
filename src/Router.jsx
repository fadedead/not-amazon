import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { SignInPage } from "./components/pages/SignInPage";
import { RegisterPage } from "./components/pages/RegisterPage";

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
    {
      path: "register",
      element: <RegisterPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
