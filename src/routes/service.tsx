import EngineerDashboard from "../modules/Dashboard/Engineer Dashboard";
import ServiceDashboard from "../modules/Dashboard/service/ServiceDashboard";
import ComplaintListService from "../modules/services/ComplaintListService/ComplaintListService";
import ComplaintService from "../modules/services/ComplaintService/ComplaintService";
import ComplaintsDeliveryService from "../modules/services/Complaints Delivery Service/ComplaintsDeliveryService";
import ComplaintsServiceDetails from "../modules/services/Complaints Service Details/ComplaintsServiceDetails";
import ComplaintsServiceInDetails from "../modules/services/Complaints Service In Details/ComplaintsServiceInDetails";
import ComplaintsServicePayment from "../modules/services/Complaints Service Payment Page/ComplaintsServicePayment";
import ComplaintsServicePaymentsInvoice from "../modules/services/Complaints Service Payments Invoice/ComplaintsServicePaymentsInvoice";
import MyComplaintsService from "../modules/services/My Complaints Service/MyComplaintsService";
import QAItemsService from "../modules/services/QA Service/QA/QAItems";
import QCMyItemsService from "../modules/services/QA Service/QAAll/QAAll";
import QAItemServiceOrderDetails from "../modules/services/QA Service/QAItemOrderDetails/QAItemOrderDetails";
import QCMyLibraryService from "../modules/services/QA Service/QAMyLibrary/QAMyLibrary";
import BillPendingService from "../modules/services/invoice/BillPendingService/BillPendingService";
import ServiceInvoicePage from "../modules/services/invoice/ServiceInvoicePage/ServiceInvoicePage";
import CreateInvoice from "../modules/services/invoice/create invoice/CreateInvoice";
import InvoiceList from "../modules/services/invoice/invoice list/InvoiceList";
import EngineerAllRepairs from "../modules/services/repair/Engineer All Repairs/EngineerAllRepairs";
import EngineerLibraryForService from "../modules/services/repair/EngineerItems/EngineerLibraryForService";
import EngineerItemsRepairDetails from "../modules/services/repair/EngineerItemsOrderDetails/EngineerItemsRepairDetails";
import MyRepairs from "../modules/services/repair/My repairs/MyRepairs";
import ServiceMyLibrary from "../modules/services/repair/MyLibrary/ServiceMyLibrary";
import EngineerItemsOrderDetails from "../modules/warranty/repair/EngineerItemsOrderDetails/EngineerItemsOrderDetails";

export const serviceComplaintsRoutes = [
  { path: "/add-complaint", element: <ComplaintService /> },
  { path: "/services", element: <ServiceDashboard /> },
  { path: "services/engineer-dashboard", element: <EngineerDashboard /> },
  { path: "/complaints-service", element: <ComplaintListService /> },
  {
    path: "/complaints-service-details/:id",
    element: <ComplaintsServiceDetails />,
  },
  {
    path: "/complaints-service-full-details/:id",
    element: <ComplaintsServiceInDetails />,
  },
  {
    path: "/complaints-service-payments/:id",
    element: <ComplaintsServicePayment />,
  },
  {
    path: "/complaints-service-payments/invoice/:id",
    element: <ComplaintsServicePaymentsInvoice />,
  },
  { path: "/my-complaints-service", element: <MyComplaintsService /> },
  {
    path: "/complaints-delivery-service",
    element: <ComplaintsDeliveryService />,
  },
  { path: "/service-invoice", element: <ServiceInvoicePage /> },
];

export const ServiceQARoute = [
  { path: "/service-qa-items", element: <QAItemsService /> },
  { path: "/service-qa-my-library", element: <QCMyLibraryService /> },
  { path: "/service-qa-all", element: <QCMyItemsService /> },
  {
    path: "/qa-items/order-details/:id",
    element: <QAItemServiceOrderDetails />,
  },
];

export const serviceRepairsRoutes = [
  { path: "service/engineer-items", element: <EngineerLibraryForService /> },
  {
    path: "/engineer-items/order-details/:id",
    element: <EngineerItemsOrderDetails />,
  },
  {
    path: "/service/engineer-items/order-details/:id",
    element: <EngineerItemsRepairDetails />,
  },
  { path: "/service/engineer-my-library", element: <ServiceMyLibrary /> },
  { path: "/service/engineer-all-repairs", element: <EngineerAllRepairs /> },
  { path: "/service/engineer-my-repaired", element: <MyRepairs /> },
];

export const serviceInvoicesRoutes = [
  { path: "/create-bill-service", element: <CreateInvoice /> },
  { path: "/bill-list-service", element: <InvoiceList /> },
  { path: "/bill-pending-service", element: <BillPendingService /> },
];
