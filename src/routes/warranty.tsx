import EngineerDashboard from "../modules/Dashboard/Engineer Dashboard";
import WarrantyDashboard from "../modules/Dashboard/warranty/WarrantyDashboard";
import ComplaintOrderDetailsQC from "../modules/warranty/QC/ComplaintOrderDetailsQC/ComplaintOrderDetailsQC";
import QCMyItems from "../modules/warranty/QC/QCMyItems/QCMyItems";
import QCMyLibrary from "../modules/warranty/QC/QCMyLibrary/QCMyLibrary";
import Qc from "../modules/warranty/QC/Qc/Qc";
import Complaint from "../modules/warranty/complaints/Complaint/Complaint";
import ComplaintAddForWarranty from "../modules/warranty/complaints/ComplaintAddForWarranty/ComplaintAddForWarranty";
import ComplaintBuffers from "../modules/warranty/complaints/ComplaintBuffers/ComplaintBuffers";
import ComplaintsDelivered from "../modules/warranty/complaints/ComplaintsDelivered/ComplaintsDelivered";
import MyComplaints from "../modules/warranty/complaints/MyComplaints/MyComplaints";

import MyLibrary from "../modules/warranty/repair/MyLibrary/MyLibrary";

import QAItems from "../modules/warranty/QA/QA/QAItems";
import QAAll from "../modules/warranty/QA/QAAll/QAAll";
import QAMyLibray from "../modules/warranty/QA/QAMyLibrary/QAMyLibrary";
import QAItemOrderDetails from "../modules/warranty/QA/QAItemOrderDetails/QAItemOrderDetails";
import MyRepairs from "../modules/warranty/repair/My repairs/MyRepairs";
import EngineerItems from "../modules/warranty/repair/EngineerItems/EngineerItems";
import EngineerAllRepairs from "../modules/warranty/repair/EngineerItems/EngineerItems";
import ComplaintOrderDetails from "../modules/warranty/complaints/ComplaintOrderDetails/ComplaintOrderDetails";
import ComplaintsEditPage from "../modules/warranty/complaints/ComplaintsEditPage/ComplaintsEditPage";
import BillListWarranty from "../modules/warranty/BillWarranty/BillListWarranty/BillListWarranty";
import BillPendingWarranty from "../modules/warranty/BillWarranty/BillPendingWarranty/BillPendingWarranty";
import CreateABillWarranty from "../modules/warranty/BillWarranty/CreateABillWarranty/CreateABillWarranty";
import ComplaintsInDetails from "../modules/warranty/complaints/Complains In Details/ComplaintsInDetails";
import EngineerItemsOrderDetails from "../modules/warranty/repair/EngineerItemsOrderDetails/EngineerItemsOrderDetails";
import LeakMaterial from "../modules/warranty/complaints/Leak Metarial/LeakMaterial";

export const warrantyComplaintsRoutes = [
  { path: "/", element: <WarrantyDashboard /> },
  { path: "/engineer-dashboard", element: <EngineerDashboard /> },
  { path: "/add-warranty-complaint", element: <ComplaintAddForWarranty /> },
  { path: "/complaints", element: <Complaint /> },
  { path: "/my-complaints", element: <MyComplaints /> },
  { path: "/buffers", element: <ComplaintBuffers /> },
  { path: "/leak-material", element: <LeakMaterial /> },
  { path: "/complaints-delivered", element: <ComplaintsDelivered /> },
  { path: "/complaints/order-details/:id", element: <ComplaintOrderDetails /> },
  {
    path: "/complaints/order-in-details/:id",
    element: <ComplaintsInDetails />,
  },
  { path: "/complaints-edit-page/:id", element: <ComplaintsEditPage /> },
];

export const warrantyQcsRoutes = [
  { path: "/qc", element: <Qc /> },
  { path: "/qc-my-library", element: <QCMyLibrary /> },
  { path: "/qc-my-items", element: <QCMyItems /> },
  { path: "/qc/order-details/:id", element: <ComplaintOrderDetailsQC /> },
];

export const warrantyQasRoutes = [
  { path: "/qa-items", element: <QAItems /> },
  { path: "/qa-my-library", element: <QAMyLibray /> },
  { path: "/qa-all", element: <QAAll /> },
  { path: "/qa-items/order-details/:id", element: <QAItemOrderDetails /> },
];
export const warrantyRepairsRoutes = [
  {
    path: "/engineer-items/order-details/:id",
    element: <EngineerItemsOrderDetails />,
  },
  { path: "/engineer-items", element: <EngineerItems /> },
  { path: "/engineer-my-repaired", element: <MyRepairs /> },
  { path: "/engineer-all-repairs", element: <EngineerAllRepairs /> },
  { path: "/engineer-my-library", element: <MyLibrary /> },
];

export const warrantybillsRoutes = [
  { path: "/create-bill-warranty", element: <CreateABillWarranty /> },
  { path: "/bill-list-warranty", element: <BillListWarranty /> },
  { path: "/bill-pending-warranty", element: <BillPendingWarranty /> },
];
