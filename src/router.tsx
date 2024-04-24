import { createBrowserRouter } from "react-router-dom";

import Layout from "./common/widgets/Layout";
import Error from "./modules/Error/Error";
import PrivateRoute from "./PrivateRoute";

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
  ServiceQARoute,
  serviceRepairsRoutes,
} from "./routes/service";
import { partners } from "./routes/partner";
import { employee } from "./routes/employee";
import { settings } from "./routes/settings";
import { others } from "./routes/others";
import { engineer } from "./routes/engineer";
import { category } from "./routes/category";
import { brand } from "./routes/brand";
import { profile } from "./routes/profile";
import { principle } from "./routes/principle";
import { admin } from "./routes/admin";
import { login } from "./routes/login";
import Recipe from "./modules/Utilitis/recipe";

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
      ...ServiceQARoute,
      ...partners,
      ...employee,
      ...settings,
      ...others,
      ...engineer,
      ...category,
      ...brand,
      ...profile,
      ...principle,
      ...admin,
    ],
  },
  ...login,
  {path: "/recipe",element: <Recipe />},
]);
