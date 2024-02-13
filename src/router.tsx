import { createBrowserRouter } from "react-router-dom";
import Branch from "./forTest/Branch";
import Qc from "./forTest/Qc";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Qc></Qc>,
  },
  {
    path: "/dashboard",
    element: <Branch></Branch>,
  },
]);
