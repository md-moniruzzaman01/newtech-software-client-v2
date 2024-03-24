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
import CustomerDetailsPage from "./modules/Finance/CustomerDetailsPage/CustomerDetailsPage";
import ComponentPreview from "./forTest/ComponentPreview";
import CustomerAddOrEdit from "./modules/Finance/CustomerAdd/CustomerAddOrEdit";
import Employee from "./modules/Finance/Employee/Employee";
import EmployeeInfoDetailsPage from "./modules/Finance/EmployeeInfoDetails/EmployeeInfoDetailsPage";
import Inventory from "./modules/Finance/Inventory/Inventory";
import InventoryRequest from "./modules/Finance/InventoryRequest/InventoryRequest";
import InventoryApprove from "./modules/Finance/InventoryApprove/InventoryApprove";
import InventoryRequestDetailsPage from "./modules/Finance/InventoryRequestDetailsPage/InventoryRequestDetailsPage";
import Dashboard from "./modules/Dashboard";
import SettingPage from "./modules/Finance/SettingPage";
import MyLibrary from "./modules/Finance/MyLibrary/MyLibrary";
import Error from "./modules/Error/Error";
import PrivateRoute from "./PrivateRoute";
import ComplaintAddForWarranty from "./modules/Finance/ComplaintAddForWarranty/ComplaintAddForWarranty";
import WarrantyCategoryAddPage from "./modules/Finance/WarrantyCategoryAddPage/WarrantyCategoryAddPage";
import BrandAddPage from "./modules/Finance/BrandAddPage";
import MyProfile from "./modules/Finance/MyProfile/MyProfile";
import CategoryList from "./modules/Finance/CategoryList";
import Principle from "./modules/Finance/Principle/Principle";
import Admin from "./modules/Finance/Admin/Admin";
import Engineer from "./modules/Finance/Engineer/Engineer";
import Partner from "./modules/Finance/Partner/Partner";
import EngineerDashboard from "./modules/Finance/EngineerDashboard/EngineerDashboard";
import MyComplaints from "./modules/Finance/MyComplaints/MyComplaints";
import ComplaintBuffers from "./modules/Finance/ComplaintBuffers/ComplaintBuffers";
import ComplaintsDelivered from "./modules/Finance/ComplaintsDelivered/ComplaintsDelivered";
import QCMyLibrary from "./modules/Finance/QCMyLibrary/QCMyLibrary";
import QCMyItems from "./modules/Finance/QCMyItems/QCMyItems";
import EngineerMyRepaired from "./modules/Finance/EngineerMyRepaired/EngineerMyRepaired";
import EngineerAllRepairs from "./modules/Finance/EngineerAllRepairs/EngineerAllRepairs";
import QAMyLibrary from "./modules/Finance/QAMyLibrary/QAMyLibrary";
import QAAll from "./modules/Finance/QAAll/QAAll";
import BillList from "./modules/Finance/BillList/BillList";
import CreateABill from "./modules/Finance/CreateABill/CreateABill";
import BillPending from "./modules/Finance/BillPending/BillPending";
import OtherReport from "./modules/Finance/OtherReport/OtherReport";
import MainCategoryPage from "./modules/Utilitis/Main Category/MainCategory";
import Register from "./modules/Utilitis/Register/Register";
import Login from "./modules/Utilitis/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/engineer-dashboard",
        element: <EngineerDashboard />,
      },
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
      // inventory start here
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/inventory/request",
        element: <InventoryRequest />,
      },
      {
        path: "/inventory/request-details",
        element: <InventoryRequestDetailsPage />,
      },
      {
        path: "/inventory/approve",
        element: <InventoryApprove />,
      },

      // complaint start here
      {
        path: "/complaints",
        element: <Complaint />,
      },
      {
        path: "add-complaint",
        element: <ComplaintService />,
      },
      {
        path: "/complaints/order-details/:id",
        element: <ComplaintOrderDetails />,
      },
      {
        path: "/add-warranty-complaint",
        element: <ComplaintAddForWarranty />,
      },
      {
        path: "/my-complaints",
        element: <MyComplaints />,
      },
      {
        path: "/buffers",
        element: <ComplaintBuffers />,
      },
      {
        path: "/complaints-delivered",
        element: <ComplaintsDelivered />,
      },
      // qc start here
      {
        path: "/qc",
        element: <Qc />,
      },
      {
        path: "/qc-my-library",
        element: <QCMyLibrary />,
      },
      {
        path: "/qc-my-items",
        element: <QCMyItems />,
      },
      {
        path: "/qc/order-details",
        element: <ComplaintOrderDetailsQC />,
      },

      // Engineer items start here
      {
        path: "/engineer",
        element: <Engineer />,
      },
      {
        path: "/engineer-items",
        element: <EngineerItems />,
      },
      {
        path: "/engineer-my-repaired",
        element: <EngineerMyRepaired />,
      },
      {
        path: "/engineer-all-repairs",
        element: <EngineerAllRepairs />,
      },
      {
        path: "/engineer-items/order-details",
        element: <EngineerItemsOrderDetails />,
      },
      // bill route start here
      {
        path: "/bill-list",
        element: <BillList />,
      },
      {
        path: "/create-bill",
        element: <CreateABill />,
      },
      {
        path: "/bill-pending",
        element: <BillPending />,
      },

      // qa start here
      {
        path: "/qa-items",
        element: <QAItems />,
      },
      {
        path: "/qa-my-library",
        element: <QAMyLibrary />,
      },
      {
        path: "/qa-all",
        element: <QAAll />,
      },
      {
        path: "/qa-items/order-details",
        element: <QAItemOrderDetails />,
      },
      // customer route start here
      {
        path: "/partner",
        element: <Partner />,
      },
      {
        path: "/partner/order-details",
        element: <CustomerDetailsPage />,
      },
      {
        path: "/partner/add",
        element: <CustomerAddOrEdit />,
      },
      // employee route start here
      {
        path: "/employee",
        element: <Employee />,
      },
      {
        path: "/employee/order-details",
        element: <EmployeeInfoDetailsPage />,
      },
      {
        path: "/other-report",
        element: <OtherReport />,
      },
      // settings
      {
        path: "/setting",
        element: <SettingPage />,
      },
      // my library
      {
        path: "/my-library",
        element: <MyLibrary />,
      },

      // add category page
      {
        path: "/category",
        element: <CategoryList />,
      },
      {
        path: "/add-category",
        element: <WarrantyCategoryAddPage />,
      },
      {
        path: "/add-main-category",
        element: <MainCategoryPage />,
      },
      // add brand
      {
        path: "/add-brand",
        element: <BrandAddPage />,
      },
      // my profile
      {
        path: "/my-profile",
        element: <MyProfile />,
      },
      // other
      {
        path: "/principle",
        element: <Principle />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
