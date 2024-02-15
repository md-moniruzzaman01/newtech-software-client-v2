import { createBrowserRouter } from "react-router-dom";
import Branch from "./forTest/Branch";
import ComponentPreview from "./forTest/ComponentPreview";
import Dashboard from "./modules/Dashboard";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
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
