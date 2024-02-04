import { createBrowserRouter } from "react-router-dom";
import ForTestTwo from "./forTest/ForTestTwo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ForTestTwo></ForTestTwo>,
  },
  {
    path: "/dashboard",
    element: <div>Hello world2!</div>,
  },
]);
