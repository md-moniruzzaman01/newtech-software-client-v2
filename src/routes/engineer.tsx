import EngineerDetailsPage from "../modules/Utilitis/Engineer/Engineer Details Page/EngineerDetailsPage";
import EngineerEditPage from "../modules/Utilitis/Engineer/Engineer Edit Page/EngineerEditPage";
import EngineerAdd from "../modules/Utilitis/Engineer/EngineerAdd/EngineerAdd";
import EngineersList from "../modules/Utilitis/Engineer/Engineers List/EngineersList";

export const engineer = [
  { path: "/engineer-edit-page/:id", element: <EngineerEditPage /> },
  { path: "/add-engineer", element: <EngineerAdd /> },
  { path: "/engineers-list", element: <EngineersList /> },
  {
    path: "/engineers-list/engineer-details/:id",
    element: <EngineerDetailsPage />,
  },
];
