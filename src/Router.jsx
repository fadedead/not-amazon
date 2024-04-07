import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { SignInPage } from "./components/pages/SignInPage";
import { RegisterPage } from "./components/pages/RegisterPage";
import { ProductSearchWithFilters } from "./components/pages/ProductSeachPage";
import { ProductPage } from "./components/pages/ProductPage";
import { CartPage } from "./components/pages/cartpage/CartPage";
import { CheckoutPage } from "./components/pages/CheckoutPage";
import { ErrorPage } from "./components/pages/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signin",
      element: <SignInPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/category/:categoryName",
      element: <ProductSearchWithFilters />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/product/:productId",
      element: <ProductPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/cart/checkout",
      element: <CheckoutPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
