import { createBrowserRouter } from "react-router-dom";
import ForTestThree from "./forTest/ForTestThree";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ForTestThree></ForTestThree>,
  },
  {
    path: "/dashboard",
    element: <div>Hello world2!</div>,
  },
]);
