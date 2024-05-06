import CustomerAddOrEdit from "../modules/Utilitis/Partner/CustomerAdd/CustomerAddOrEdit";
import CustomerDetailsPage from "../modules/Utilitis/Partner/CustomerDetailsPage/CustomerDetailsPage";
import Partner from "../modules/Utilitis/Partner/Partner list/Partner";

export const partners = [
  {
    path: "/partner",
    element: <Partner />,
  },
  {
    path: "/partner/order-details/:id",
    element: <CustomerDetailsPage />,
  },
  {
    path: "/partner/add",
    element: <CustomerAddOrEdit />,
  },
];
