import AvailableMoney from "../modules/Finance/AvailableMoney/AvailableMoney";
import BranchForService from "../modules/Finance/Branch for service/BranchForService";
import Branch from "../modules/Finance/Branch/Branch";
import DiscountAmount from "../modules/Finance/DiscountAmount/DiscountAmount";
import OrderCount from "../modules/Finance/OrderCount/OrderCount";
import TotalRepairing from "../modules/Finance/Total repairing/TotalRepairing";
import TotalRepaired from "../modules/Finance/TotalRepaired/TotalRepaired";
import Withdraw from "../modules/Finance/Withdraw/Withdraw";
import RepairComplete from "../modules/warranty/repair/RepaireComplete/RepairComplete";

export const AccountsRoutes = [
  { path: "/branch", element: <Branch /> },
  { path: "/service-branch", element: <BranchForService /> },
  { path: "/branch/repair-complete", element: <RepairComplete /> },
  { path: "/branch/total-repairing", element: <TotalRepairing /> },
  { path: "/branch/total-repaired", element: <TotalRepaired /> },
  { path: "/branch/available-money", element: <AvailableMoney /> },
  { path: "/branch/discount-amount", element: <DiscountAmount /> },
  { path: "/branch/withdraw", element: <Withdraw /> },
  { path: "/branch/order-count", element: <OrderCount /> },
];
