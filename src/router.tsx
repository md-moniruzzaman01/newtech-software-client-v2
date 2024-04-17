import { createBrowserRouter } from "react-router-dom";

import Layout from "./common/widgets/Layout";

import Error from "./modules/Error/Error";
import PrivateRoute from "./PrivateRoute";
import Admin from "./modules/Finance/Admin/Admin";
import OtherReport from "./modules/Finance/OtherReport/OtherReport";
import MainCategoryPage from "./modules/Utilitis/Main Category/MainCategory";
import Login from "./modules/Utilitis/Login/Login";
import Engineer from "./modules/Utilitis/Engineer/Engineer";
import Partner from "./modules/Utilitis/Partner/Partner list/Partner";
import CustomerDetailsPage from "./modules/Utilitis/Partner/CustomerDetailsPage/CustomerDetailsPage";
import CustomerAddOrEdit from "./modules/Utilitis/Partner/CustomerAdd/CustomerAddOrEdit";
import Employee from "./modules/Utilitis/Employee/Employee";
import EmployeeInfoDetailsPage from "./modules/Utilitis/EmployeeInfoDetails/EmployeeInfoDetailsPage";
import SettingPage from "./modules/Utilitis/SettingPage";
import CategoryList from "./modules/warranty/category/CategoryList";
import WarrantyCategoryAddPage from "./modules/warranty/category/WarrantyCategoryAddPage";
import BrandAddPage from "./modules/warranty/brand/BrandAddPage";
import MyProfile from "./modules/Utilitis/MyProfile/MyProfile";
import Principle from "./modules/Utilitis/Principle/Principle list/Principle";
import EngineerAdd from "./modules/Utilitis/EngineerAdd/EngineerAdd";
import {
  warrantyComplaintsRoutes,
  warrantyQasRoutes,
  warrantyQcsRoutes,
  warrantyRepairsRoutes,
  warrantybillsRoutes,
} from "./routes/warranty";
import { AccountsRoutes } from "./routes/accounts";
import { InventoryRoutes } from "./routes/inventory";
import {
  serviceComplaintsRoutes,
  serviceInvoicesRoutes,
  serviceRepairsRoutes,
} from "./routes/service";

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
      ...warrantyComplaintsRoutes,
      ...AccountsRoutes,
      ...InventoryRoutes,
      ...warrantyQcsRoutes,
      ...warrantyQasRoutes,
      ...warrantyRepairsRoutes,
      ...warrantybillsRoutes,
      ...serviceComplaintsRoutes,
      ...serviceRepairsRoutes,
      ...serviceInvoicesRoutes,

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
        path: "/employee/order-details/:id",
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

      { path: "/engineer", element: <Engineer /> },
      { path: "/add-engineer", element: <EngineerAdd /> },
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
