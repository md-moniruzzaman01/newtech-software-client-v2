import EngineerEditPage from "../modules/Utilitis/Engineer Edit Page/EngineerEditPage";
import EngineerAdd from "../modules/Utilitis/EngineerAdd/EngineerAdd";
import EngineersList from "../modules/Utilitis/Engineers List/EngineersList";

export const engineer = [
  { path: "/engineer-edit-page/:id", element: <EngineerEditPage /> },
  { path: "/add-engineer", element: <EngineerAdd /> },
  { path: "/engineers-list", element: <EngineersList /> },
];
