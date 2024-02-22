import { createBrowserRouter } from "react-router-dom";
import ComponentPreview from "./forTest/ComponentPreview";
import ComponentsCreateArea from "./forTest/ComponentsCreateArea";
import OrderCount from "./modules/Finance/OrderCount/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ComponentsCreateArea />,
  },
  {
    path: "/dashboard",
    element: <OrderCount></OrderCount>,
  },
  {
    path: "/components",
    element: <ComponentPreview></ComponentPreview>,
  },
]);
