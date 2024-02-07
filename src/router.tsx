import { createBrowserRouter } from "react-router-dom";
import Branch from "./forTest/Branch";
import Product from "./forTest/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Product></Product>,
  },
  {
    path: "/dashboard",
    element: <Branch></Branch>,
  },
]);
