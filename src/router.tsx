import { createBrowserRouter } from "react-router-dom";
import Branch from "./forTest/Branch";
import OrderCount from "./forTest/OrderCount";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <OrderCount></OrderCount>,
  },
  {
    path: "/dashboard",
    element: <Branch></Branch>,
  },
]);
