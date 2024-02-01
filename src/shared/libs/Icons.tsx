import { FaBell, FaCaretDown, FaCog, FaFileInvoice, FaQuestion, FaRegUser } from "react-icons/fa";
import { IoMdClose, IoMdList } from "react-icons/io";
import { MdDashboard, MdMenu } from "react-icons/md";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const icons: any = {
    DownArrow: <FaCaretDown />,
    MenuOpen: <MdMenu />,
    MenuClose: <IoMdClose />,
    Dashboard: <MdDashboard />,
    list: <IoMdList />,
    invoice: <FaFileInvoice />,
    user: <FaRegUser />,
    GearIcon: <FaCog />,
    Question: <FaQuestion />,
    Bell: <FaBell />,
  };
  