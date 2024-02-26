import { createBrowserRouter } from "react-router-dom";

import Layout from "./common/widgets/Layout";
import Branch from "./modules/Finance/Branch/Branch";
import RepairComplete from "./modules/Finance/RepaireComplete/RepairComplete";
import TotalRepairing from "./modules/Finance/Total repairing/TotalRepairing";
import TotalRepaired from "./modules/Finance/TotalRepaired/TotalRepaired";
import AvailableMoney from "./modules/Finance/AvailableMoney/AvailableMoney";
import DiscountAmount from "./modules/Finance/DiscountAmount/DiscountAmount";
import Withdraw from "./modules/Finance/Withdraw/Withdraw";
import OrderCount from "./modules/Finance/OrderCount/OrderCount";
import Complaint from "./modules/Finance/Complaint/Complaint";
import ComplaintService from "./modules/Finance/ComplaintService/ComplaintService";
import Qc from "./modules/Finance/Qc/Qc";
import ComplaintOrderDetails from "./modules/Finance/ComplaintOrderDetails/ComplaintOrderDetails";
// import ComponentPreview from "./forTest/ComponentPreview";
import CreateArea from "./forTest/CreateArea";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/components",
        element: <CreateArea></CreateArea>,
      },
      // branch start here
      {
        path: "/branch",
        element: <Branch />,
      },
      {
        path: "/branch/repair-complete",
        element: <RepairComplete />,
      },
      {
        path: "/branch/total-repairing",
        element: <TotalRepairing />,
      },
      {
        path: "/branch/total-repaired",
        element: <TotalRepaired />,
      },
      {
        path: "/branch/available-money",
        element: <AvailableMoney />,
      },
      {
        path: "/branch/discount-amount",
        element: <DiscountAmount />,
      },
      {
        path: "/branch/withdraw",
        element: <Withdraw />,
      },
      {
        path: "/branch/order-count",
        element: <OrderCount />,
      },
      // complaint start here
      {
        path: "/complaints",
        element: <Complaint />,
      },
      {
        path: "/complaints/add-complaint",
        element: <ComplaintService />,
      },
      {
        path: "/complaints/order-details",
        element: <ComplaintOrderDetails />,
      },
      // qc start here
      {
        path: "/qc",
        element: <Qc />,
      },
    ],
  },
]);
