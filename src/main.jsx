import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/Home/App";
import Shop from "./routes/Shop/Shop";
import Error from "./Error";
import ProductsContainer from "./components/ProductsContainer";
import axios from "axios";

//TODO: USAR LA API DE CONTEXT DE REACT PARA TENER EL ARRAY CON TODOS LOS PRODUCTOS
//TODO: CAMBIAR IMAGENES DEL CARRUSEL Y PONERLE UNA IMAGEN DE FONDO A SALES
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
        path: "/shop/:categoryId",
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
