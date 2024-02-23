import { createBrowserRouter } from "react-router-dom";
import ComponentPreview from "./forTest/ComponentPreview";
import ComponentsCreateArea from "./forTest/ComponentsCreateArea";
import Qc from "./forTest/Qc";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ComponentsCreateArea />,
  },
  {
    path: "/dashboard",
    element: <Qc></Qc>,
  },
  {
    path: "/components",
    element: <ComponentPreview></ComponentPreview>,
  },
]);
