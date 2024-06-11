import ProductListForService from "../modules/Utilitis/Product List For Service/ProductListForService";
import ProductList from "../modules/Utilitis/Product List/ProductList";
import ProductInDetails from "../modules/Utilitis/Product List/partials/Complains In Details/ProductInDetails";
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
  {
    path: "/product-list",
    element: <ProductList />,
  },
  {
    path: "/product-list/details/:id",
    element: <ProductInDetails />,
  },
  {
    path: "/product-list-service",
    element: <ProductListForService />,
  },
];
