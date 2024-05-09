import WalkingCustomerForService from "../modules/Utilitis/Walking Customer for Service/WalkingCustomerForService";
import WalkingCustomer from "../modules/Utilitis/Walking Customer/WalkingCustomer";

export const others = [
  {
    path: "/walking-customers",
    element: <WalkingCustomer />,
  },
  {
    path: "/service-walking-customers",
    element: <WalkingCustomerForService />,
  },
];
