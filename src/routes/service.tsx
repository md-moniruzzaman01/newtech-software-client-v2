import EngineerDashboard from "../modules/Dashboard/Engineer Dashboard";
import ServiceDashboard from "../modules/Dashboard/service/ServiceDashboard";
import ComplaintListService from "../modules/services/ComplaintListService/ComplaintListService";
import ComplaintService from "../modules/services/ComplaintService/ComplaintService";
import ComplaintsDeliveryService from "../modules/services/Complaints Delivery Service/ComplaintsDeliveryService";
import ComplaintsServiceDetails from "../modules/services/Complaints Service Details/ComplaintsServiceDetails";
import ComplaintsServicePayment from "../modules/services/Complaints Service Payment Page/ComplaintsServicePayment";
import MyComplaintsService from "../modules/services/My Complaints Service/MyComplaintsService";
import ServiceInvoicePage from "../modules/services/invoice/ServiceInvoicePage/ServiceInvoicePage";
import CreateInvoice from "../modules/services/invoice/create invoice/CreateInvoice";
import InvoiceList from "../modules/services/invoice/invoice list/InvoiceList";
import EngineerLibraryForService from "../modules/services/repair/EngineerItems/EngineerLibraryForService";
import EngineerItemsRepairDetails from "../modules/services/repair/EngineerItemsOrderDetails/EngineerItemsRepairDetails";
import ServiceMyLibrary from "../modules/services/repair/MyLibrary/ServiceMyLibrary";
import EngineerItemsOrderDetails from "../modules/warranty/repair/EngineerItemsOrderDetails/EngineerItemsOrderDetails";


export const serviceComplaintsRoutes = [
    { path: "/add-complaint", element: <ComplaintService /> },
    { path: "/services", element: <ServiceDashboard /> },
    { path: "services/engineer-dashboard", element: <EngineerDashboard /> },
    { path: "/complaints-service", element: <ComplaintListService /> },
    { path: "/complaints-service-details/:id", element: <ComplaintsServiceDetails /> },
    { path: "/complaints-service-payments/:id", element: <ComplaintsServicePayment /> },
    { path: "/my-complaints-service", element: <MyComplaintsService /> },
    { path: "/complaints-delivery-service", element: <ComplaintsDeliveryService /> },
    { path: "/service-invoice", element: <ServiceInvoicePage /> },

];


export const serviceRepairsRoutes = [
    { path: "service/engineer-items", element: <EngineerLibraryForService /> },
    { path: "/engineer-items/order-details/:id", element: <EngineerItemsOrderDetails /> },
    { path: "/service/engineer-items/order-details/:id", element: <EngineerItemsRepairDetails /> },
    { path: "/service/engineer-my-library", element: <ServiceMyLibrary /> },
];

export const serviceInvoicesRoutes = [
    { path: "/create-bill-service", element: <CreateInvoice /> },
    { path: "/bill-list-service", element: <InvoiceList/> },
];