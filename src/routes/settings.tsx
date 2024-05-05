import ChangePassword from "../modules/Utilitis/Change Password";
import ForgetPassword from "../modules/Utilitis/Forget Password";

export const settings = [
  {
    path: "/change-password",
    element: <ChangePassword />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
];
