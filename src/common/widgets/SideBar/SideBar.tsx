import { NavLink } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { IoPeople } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdEditNote } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import "./SideBar.css";

// routeStyle
const routeStyle = "pl-[30px] py-2  flex  items-center gap-2";

//sidebar
const SideBar = () => {
  return (
    <div className="min-h-screen text-base bg-[#253275] w-[256px]">
      <div className="w-full text-center pt-[38px]">
        <h1 className="text-[#fff] font-bold text-[32px] my-0">Newtech</h1>
      </div>
      <div className=" pt-[60px]  font-semibold  ">
        <div className="flex flex-col gap-[22px] ">
          <NavLink to="/">
            <div className={routeStyle}>
              <MdOutlineDashboardCustomize className="text-xl" />
              <span>Dashboard</span>
            </div>
          </NavLink>
          <NavLink to="/branch">
            <div className={routeStyle}>
              <FaCodeBranch className="text-xl" />
              <span>Branch</span>
            </div>
          </NavLink>
          <NavLink to="/complaints">
            <div className={routeStyle}>
              <MdOutlineEventNote className="text-xl" />
              <span>Complaints</span>
            </div>
          </NavLink>

          <NavLink to="/items">
            <div className={routeStyle}>
              <FiMonitor className="text-xl" />
              <span>Items</span>
            </div>
          </NavLink>
          <NavLink to="/qc">
            <div className={routeStyle}>
              <FiMonitor className="text-xl" />
              <span>QC Items</span>
            </div>
          </NavLink>
          <NavLink to="/engineer-items">
            <div className={routeStyle}>
              <FiMonitor className="text-xl" />
              <span>Engineer Items</span>
            </div>
          </NavLink>
          <NavLink to="/qa-items">
            <div className={routeStyle}>
              <FiMonitor className="text-xl" />
              <span>QA Items</span>
            </div>
          </NavLink>
          <NavLink to="/customer">
            <div className={routeStyle}>
              <IoPeople className="text-xl" />
              <span>Customer</span>
            </div>
          </NavLink>
          <NavLink to="/admin">
            <div className={routeStyle}>
              <FaRegCircleUser className="text-xl" />
              <span>Admin</span>
            </div>
          </NavLink>
          <NavLink to="/employee">
            <div className={routeStyle}>
              <IoIosPeople className="text-xl" />
              <span>Employee</span>
            </div>
          </NavLink>
          <NavLink to="/blog">
            <div className={routeStyle}>
              <MdEditNote className="text-xl" />
              <span>Blog</span>
            </div>
          </NavLink>
          <NavLink to="/setting">
            <div className={routeStyle}>
              <IoSettingsOutline className="text-xl" />
              <span>Setting</span>
            </div>
          </NavLink>
        </div>

        {/* for login route  */}
        {/* <NavLink className="flex gap-2 items-center pb-[120px]" to="/logout">
        <div className="pl-[30px] py-2 flex  items-center gap-2">
         
          Logout
        </div>
      </NavLink> */}
      </div>
    </div>
  );
};

export default SideBar;
