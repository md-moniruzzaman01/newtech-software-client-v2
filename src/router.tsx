import { createBrowserRouter } from "react-router-dom";
import ForTest from "./forTest/ForTest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ForTest></ForTest>,
  },
  {
    path: "/dashboard",
    element: <div>Hello world2!</div>,
  },
]);
