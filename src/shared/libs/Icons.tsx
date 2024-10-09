import {
  FaBell,
  FaCaretDown,
  FaCog,
  FaFileInvoice,
  FaQuestion,
  FaRegUser,
} from "react-icons/fa";
import { IoIosArrowUp, IoMdClose, IoMdList } from "react-icons/io";
import { MdDashboard, MdMenu } from "react-icons/md";
import CrossIcon from "./custom icons/CrossIcon";
import { MdMoneyOffCsred } from "react-icons/md";
import { FcCancel } from "react-icons/fc";
import { TbDeviceImacCancel } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaDropbox } from "react-icons/fa";
import { MdBrokenImage } from "react-icons/md";
import { MdOutlineSyncProblem } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { PiMonitorThin } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineWarehouse } from "react-icons/md";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const icons: any = {
  DownArrow: <FaCaretDown />,
  upArrow: <IoIosArrowUp />,
  MenuOpen: <MdMenu />,
  MenuClose: <IoMdClose />,
  Dashboard: <MdDashboard />,
  list: <IoMdList />,
  invoice: <FaFileInvoice />,
  user: <FaRegUser />,
  GearIcon: <FaCog />,
  Question: <FaQuestion />,
  Bell: <FaBell />,
  cross: <CrossIcon />,
  unPaid: <MdMoneyOffCsred />,
  failed: <FcCancel />,
  delivered: <CiDeliveryTruck />,
  qcLibrary: <FaDropbox />,
  notRepairable: <MdBrokenImage />,
  difficulty: <MdOutlineSyncProblem />,
  repaired: <IoCheckmarkDoneCircleOutline />,
  requiredParts: <PiMonitorThin />,
  cancel: <TbDeviceImacCancel />,
  logout: <IoIosLogOut className="text-xl" />,
  delete: <RiDeleteBin6Line />,
  warehouse: <MdOutlineWarehouse />,

  // other icon
  // full_box: <FullBox />,
  // dashboard: <LuLayoutDashboard className="text-2xl" />,
  // bufferIn: <IoLogoBuffer className="text-2xl" />,
  // orderOut: <MdOutlineOutbox className="text-2xl" />,
  // inventory: <MdOutlineInventory2 className="text-2xl" />,
  // partsList: <FaListUl className="text-xl" />,
  // profile: <CgProfile className="text-2xl" />,
  // settings: <IoMdSettings className="text-2xl" />,
  // logout: <IoLogOut className="text-2xl" />,
  // VerticalThreeDots: <VerticalThreeDots />,
  // edit: <EditIcon />,
  // editBlack: <EditIconBlack />,
  // menu: <IoMenuOutline className="text-2xl cursor-pointer" />,
};
