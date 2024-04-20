import Employee from "../modules/Utilitis/Employee/Employee";
import EmployeeInfoDetailsPage from "../modules/Utilitis/EmployeeInfoDetails/EmployeeInfoDetailsPage";

export const employee = [
  {
    path: "/employee",
    element: <Employee />,
  },
  {
    path: "/employee/order-details/:id",
    element: <EmployeeInfoDetailsPage />,
  },
];
