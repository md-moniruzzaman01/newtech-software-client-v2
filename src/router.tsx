import { createBrowserRouter } from "react-router-dom";
import Branch from "./forTest/Branch";
import ComplaintServiceView from "./forTest/ComplaintServiceView";
import ComponentPreview from "./forTest/ComponentPreview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ComplaintServiceView></ComplaintServiceView>,
  },
  {
    path: "/dashboard",
    element: <Branch></Branch>,
  },
  {
    path: "/component-preview",
    element: <ComponentPreview></ComponentPreview>,
  },
]);
