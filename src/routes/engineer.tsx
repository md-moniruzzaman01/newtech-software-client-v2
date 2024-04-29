import Engineer from "../modules/Utilitis/Engineer/Engineer";
import EngineerAdd from "../modules/Utilitis/EngineerAdd/EngineerAdd";
import EngineersList from "../modules/Utilitis/Engineers List/EngineersList";

export const engineer = [
  { path: "/engineer", element: <Engineer /> },
  { path: "/add-engineer", element: <EngineerAdd /> },
  { path: "/engineers-list", element: <EngineersList /> },
];
