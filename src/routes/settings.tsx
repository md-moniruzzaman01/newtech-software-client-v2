import ChangePassword from "../modules/Utilitis/Change Password";
import ForgetPassword from "../modules/Utilitis/Forget Password";
import SendEmailPage from "../modules/Utilitis/Send Email Page";
import SendMessagePage from "../modules/Utilitis/Send Message Page";

export const settings = [
  {
    path: "/change-password",
    element: <ChangePassword />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/send-message",
    element: <SendMessagePage />,
  },
  {
    path: "/send-email",
    element: <SendEmailPage />,
  },
];
