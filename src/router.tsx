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

import ComplaintOrderDetailsQC from "./modules/Finance/ComplaintOrderDetailsQC/ComplaintOrderDetailsQC";
import EngineerItems from "./modules/Finance/EngineerItems/EngineerItems";
import EngineerItemsOrderDetails from "./modules/Finance/EngineerItemsOrderDetails/EngineerItemsOrderDetails";
import QAItems from "./modules/Finance/QA/QAItems";
import QAItemOrderDetails from "./modules/Finance/QAItemOrderDetails/QAItemOrderDetails";
import Customer from "./modules/Finance/Customer/Customer";
import CustomerDetailsPage from "./modules/Finance/CustomerDetailsPage/CustomerDetailsPage";
import ComponentPreview from "./forTest/ComponentPreview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/components",
        element: <ComponentPreview></ComponentPreview>,
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
      {
        path: "/qc/order-details",
        element: <ComplaintOrderDetailsQC />,
      },

      // Engineer items start here
      {
        path: "/engineer-items",
        element: <EngineerItems />,
      },
      {
        path: "/engineer-items/order-details",
        element: <EngineerItemsOrderDetails />,
      },
      // qa start here
      {
        path: "/qa-items",
        element: <QAItems />,
      },
      {
        path: "/qa-items/order-details",
        element: <QAItemOrderDetails />,
      },
      // customer route start here
      {
        path: "/customer",
        element: <Customer />,
      },
      {
        path: "/customer/order-details",
        element: <CustomerDetailsPage />,
      },
    ],
  },
]);
