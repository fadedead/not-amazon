import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { SignInPage } from "./components/pages/SignInPage";
import { RegisterPage } from "./components/pages/RegisterPage";
import { ProductSearchWithFilters } from "./components/pages/ProductSeachPage";
import { ProductPage } from "./components/pages/ProductPage";
import { CartPage } from "./components/pages/CartPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/signin",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/category/:categoryName",
      element: <ProductSearchWithFilters />,
    },
    {
      path: "/product/:productId",
      element: <ProductPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
