import BadPartsSubmit from "../modules/inventory/Bad Parts Submit/BadPartsSubmit";
import BadParts from "../modules/inventory/Bad Parts/BadParts";
import ExportParts from "../modules/inventory/Export Parts/ExportParts";
import GoodParts from "../modules/inventory/Good Parts/GoodParts";
import Inventory from "../modules/inventory/Inventory/Inventory";
import InventoryApprove from "../modules/inventory/InventoryApprove/InventoryApprove";
import InventoryRequest from "../modules/inventory/InventoryRequest/InventoryRequest";
import InventoryRequestDetailsPage from "../modules/inventory/InventoryRequestDetailsPage/InventoryRequestDetailsPage";
import PartRequest from "../modules/inventory/Part Requests/PartRequest";
import Scrap from "../modules/inventory/Scrap/Scrap";
import Swap from "../modules/inventory/Swap/Swap";

export const InventoryRoutes = [
  { path: "/inventory", element: <Inventory /> },
  { path: "/inventory/request", element: <InventoryRequest /> },
  {
    path: "/inventory/request-details/:id?",
    element: <InventoryRequestDetailsPage />,
  },
  { path: "/inventory/approve", element: <InventoryApprove /> },
  { path: "/part-request", element: <PartRequest /> },
  { path: "/good-parts", element: <GoodParts /> },
  { path: "/swap", element: <Swap /> },
  { path: "/bad-parts", element: <BadParts /> },
  { path: "/bad-parts/submission", element: <BadPartsSubmit /> },
  { path: "/scrap", element: <Scrap /> },
  { path: "/export-parts", element: <ExportParts /> },
];
