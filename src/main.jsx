import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/Home/App";
import Shop from "./routes/Shop/Shop";
import Error from "./Error";
import ProductsContainer from "./components/ProductsContainer";
import axios from "axios";
import SingleProduct from "./components/SingleProduct";
import { Contact } from "./routes/Contact/Contact";
import { CartContextProvider } from "./context/CartContext";
import { Checkout } from "./routes/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/shop",
    element: <Shop />,
    errorElement: <Error />,
    children: [
      {
        path: "/shop/allProducts",
        element: <ProductsContainer />,
        loader: async () => {
          try {
            return await axios
              .get(
                `https://fakestoreapi.com/products`
              )
              .then((response) => response.data);
          } catch (error) {
            console.log(error);
            return null;
          }
        },
      },
      {
        path: "/shop/category/:categoryId",
        element: <ProductsContainer />,
        loader: async ({ params }) => {
          try {
            return await axios
              .get(
                `https://fakestoreapi.com/products/category/${params.categoryId}`
              )
              .then((response) => response.data);
          } catch (error) {
            console.log(error);
            return null;
          }
        },
      },
      {
        path: "/shop/product/:productId",
        element: <SingleProduct />,
        loader: async ({ params }) => {
          try {
            return await axios
              .get(`https://fakestoreapi.com/products/${params.productId}`)
              .then((response) => response.data);
          } catch (error) {
            console.log(error);
            return null;
          }
        },
      },
    ],
  },
  {
    path: "/checkout",
    element: <Checkout />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
