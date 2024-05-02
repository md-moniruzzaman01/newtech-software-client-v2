import ForgetPassword from "../modules/Utilitis/Forget Password";
import SettingPage from "../modules/Utilitis/SettingPage";

export const settings = [
  {
    path: "/setting",
    element: <SettingPage />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
];
