import { createBrowserRouter } from "react-router-dom";
import Branch from "./forTest/Branch";
import ComponentPreview from "./forTest/ComponentPreview";
import ComponentsCreateArea from "./forTest/ComponentsCreateArea";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ComponentsCreateArea />,
  },
  {
    path: "/dashboard",
    element: <Branch></Branch>,
  },
  {
    path: "/components",
    element: <ComponentPreview></ComponentPreview>,
  },
]);
