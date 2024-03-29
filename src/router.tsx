import { createBrowserRouter } from "react-router-dom";

import Layout from "./common/widgets/Layout";
import Branch from "./modules/Finance/Branch/Branch";
import TotalRepairing from "./modules/Finance/Total repairing/TotalRepairing";
import TotalRepaired from "./modules/Finance/TotalRepaired/TotalRepaired";
import AvailableMoney from "./modules/Finance/AvailableMoney/AvailableMoney";
import DiscountAmount from "./modules/Finance/DiscountAmount/DiscountAmount";
import Withdraw from "./modules/Finance/Withdraw/Withdraw";
import OrderCount from "./modules/Finance/OrderCount/OrderCount";
import Error from "./modules/Error/Error";
import PrivateRoute from "./PrivateRoute";
import Admin from "./modules/Finance/Admin/Admin";
import OtherReport from "./modules/Finance/OtherReport/OtherReport";
import MainCategoryPage from "./modules/Utilitis/Main Category/MainCategory";
import Login from "./modules/Utilitis/Login/Login";
import Dashboard from "./modules/Dashboard/admin Dashboard/Dashboard";
import EngineerDashboard from "./modules/Dashboard/Engineer Dashboard";
import RepairComplete from "./modules/warranty/repair/RepaireComplete/RepairComplete";
import Inventory from "./modules/inventory/Inventory/Inventory";
import InventoryRequest from "./modules/inventory/InventoryRequest/InventoryRequest";
import InventoryRequestDetailsPage from "./modules/inventory/InventoryRequestDetailsPage/InventoryRequestDetailsPage";
import InventoryApprove from "./modules/inventory/InventoryApprove/InventoryApprove";
import Complaint from "./modules/warranty/complaints/Complaint/Complaint";
import ComplaintService from "./modules/services/ComplaintService/ComplaintService";
import ComplaintOrderDetails from "./modules/warranty/complaints/ComplaintOrderDetails/ComplaintOrderDetails";
import ComplaintAddForWarranty from "./modules/warranty/complaints/ComplaintAddForWarranty/ComplaintAddForWarranty";
import MyComplaints from "./modules/warranty/complaints/MyComplaints/MyComplaints";
import ComplaintBuffers from "./modules/warranty/complaints/ComplaintBuffers/ComplaintBuffers";
import ComplaintsDelivered from "./modules/warranty/complaints/ComplaintsDelivered/ComplaintsDelivered";
import Qc from "./modules/warranty/QC/Qc/Qc";
import QCMyLibrary from "./modules/warranty/QC/QCMyLibrary/QCMyLibrary";
import QCMyItems from "./modules/warranty/QC/QCMyItems/QCMyItems";
import ComplaintOrderDetailsQC from "./modules/warranty/QC/ComplaintOrderDetailsQC/ComplaintOrderDetailsQC";
import Engineer from "./modules/Utilitis/Engineer/Engineer";
import EngineerItems from "./modules/warranty/repair/EngineerItems/EngineerItems";
import EngineerMyRepaired from "./modules/warranty/repair/EngineerMyRepaired/EngineerMyRepaired";
import EngineerAllRepairs from "./modules/warranty/repair/EngineerAllRepairs/EngineerAllRepairs";
import EngineerItemsOrderDetails from "./modules/warranty/repair/EngineerItemsOrderDetails/EngineerItemsOrderDetails";
import BillList from "./modules/services/invoice/BillList/BillList";
import CreateABill from "./modules/services/invoice/CreateABill/CreateABill";
import BillPending from "./modules/services/invoice/BillPending/BillPending";
import QAItems from "./modules/warranty/QA/QA/QAItems";
import QAMyLibrary from "./modules/warranty/QA/QAMyLibrary/QAMyLibrary";
import QAAll from "./modules/warranty/QA/QAAll/QAAll";
import QAItemOrderDetails from "./modules/warranty/QA/QAItemOrderDetails/QAItemOrderDetails";
import Partner from "./modules/Utilitis/Partner/Partner list/Partner";
import CustomerDetailsPage from "./modules/Utilitis/Partner/CustomerDetailsPage/CustomerDetailsPage";
import CustomerAddOrEdit from "./modules/Utilitis/Partner/CustomerAdd/CustomerAddOrEdit";
import Employee from "./modules/Utilitis/Employee/Employee";
import EmployeeInfoDetailsPage from "./modules/Utilitis/EmployeeInfoDetails/EmployeeInfoDetailsPage";
import SettingPage from "./modules/Utilitis/SettingPage";
import MyLibrary from "./modules/warranty/repair/MyLibrary/MyLibrary";
import CategoryList from "./modules/warranty/category/CategoryList";
import WarrantyCategoryAddPage from "./modules/warranty/category/WarrantyCategoryAddPage";
import BrandAddPage from "./modules/warranty/brand/BrandAddPage";
import MyProfile from "./modules/Utilitis/MyProfile/MyProfile";
import Principle from "./modules/Utilitis/Principle/Principle list/Principle";

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
        path: "/complaints/order-details",
        element: <ComplaintOrderDetails/>,
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
        element: <QCMyLibrary/>,
      },
      {
        path: "/qc-my-items",
        element: <QCMyItems/>,
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
        element: <EngineerItems/>,
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
        element: <CreateABill/>,
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
    path: "/login",
    element: <Login />,
  },
]);
