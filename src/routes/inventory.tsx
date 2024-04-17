import Inventory from "../modules/inventory/Inventory/Inventory";
import InventoryApprove from "../modules/inventory/InventoryApprove/InventoryApprove";
import InventoryRequest from "../modules/inventory/InventoryRequest/InventoryRequest";
import InventoryRequestDetailsPage from "../modules/inventory/InventoryRequestDetailsPage/InventoryRequestDetailsPage";

export const InventoryRoutes = [
    { path: "/inventory", element: <Inventory /> },
    { path: "/inventory/request", element: <InventoryRequest /> },
    { path: "/inventory/request-details", element: <InventoryRequestDetailsPage /> },
    { path: "/inventory/approve", element: <InventoryApprove /> },

];



