import { createBrowserRouter } from "react-router-dom";
import ComponentPreview from "./forTest/ComponentPreview";
import ComponentsCreateArea from "./forTest/ComponentsCreateArea";
import TotalRepaired from "./modules/Finance/TotalRepaired/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ComponentsCreateArea />,
  },
  {
    path: "/dashboard",
    element: <TotalRepaired></TotalRepaired>,
  },
  {
    path: "/components",
    element: <ComponentPreview></ComponentPreview>,
  },
]);
