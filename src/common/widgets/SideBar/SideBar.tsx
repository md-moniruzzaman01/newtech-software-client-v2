import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { IoIosPeople } from "react-icons/io";
// import { MdEditNote } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import "./SideBar.css";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
// import { MdCategory } from "react-icons/md";
// import { SiBrandfolder } from "react-icons/si";
// import { MdAdminPanelSettings } from "react-icons/md";
import ComplaintsRoute from "./partials/ComplaintsRoute/ComplaintsRoute";
import QCRoute from "./partials/QCRoute/QCRoute";
import EngineerRoute from "./partials/EngineerRoute/EngineerRoute";
import QARoute from "./partials/QARoute/QARoute";
import UsersRoute from "./partials/UsersRoute/UsersRoute";
import OthersRoute from "./partials/OthersRoute/OthersRoute";
import BillRoute from "./partials/BillRoute/BillRoute";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { getUserInfo } from "../../../services/auth.service";

// routeStyle
const routeStyle = "pl-[30px] py-2  flex  items-center gap-3";

//sidebar
const SideBar = () => {
  const [activeRoute, setActiveRoute] = useState(true);
  const navigate = useNavigate();
  const user = getUserInfo();

 
  useEffect(() => {
    const activeRouteValue = getFromLocalStorage("activeRoute");
    if (activeRouteValue) {
      setActiveRoute(JSON.parse(activeRouteValue));
    }
  }, []);

  const handleFilter = () => {
    const updatedActiveRoute = !activeRoute;
    setActiveRoute(updatedActiveRoute);
    navigate("/");
    localStorage.setItem("activeRoute", updatedActiveRoute.toString());
  };

  return (
    <div
      className={`min-h-screen text-base ${
        activeRoute ? "bg-shadeOfBlueDark" : "bg-sideBarService "
      } w-[256px]`}
    >
      <div className="w-full text-center pt-[38px]">
        <h1 className="text-solidWhite font-bold text-[32px] my-0">Newtech</h1>
        <div className="flex justify-center items-center gap-5 h-20 ">
          <Button
            disabled={activeRoute}
            className={
              activeRoute
                ? "!bg-sideBarBtnColor !text-solidWhite  !text-base"
                : "!text-solidBlack"
            }
            onClick={handleFilter}
            small
          >
            Warranty
          </Button>
          <Button
            disabled={!activeRoute}
            className={
              !activeRoute
                ? "!bg-sideBarBtnColor !text-solidWhite  !text-base"
                : "!text-solidBlack"
            }
            onClick={handleFilter}
            small
          >
            Service
          </Button>
        </div>
      </div>
      <div className="  font-semibold ">
        <div className="flex flex-col gap-3 pb-20">
          {activeRoute && user?.power?.includes("01") && (
            <NavLink to="/">
              <div className={routeStyle}>
                <MdOutlineDashboardCustomize className="text-xl" />
                <span>Dashboard</span>
              </div>
            </NavLink>
          )}
          {!activeRoute && user?.power?.includes("01") && (
            <NavLink to="/services">
              <div className={routeStyle}>
                <MdOutlineDashboardCustomize className="text-xl" />
                <span>Dashboard</span>
              </div>
            </NavLink>
          )}
          <NavLink to="/engineer-dashboard">
            <div className={routeStyle}>
              <FiMonitor className="text-xl" />
              <span>Engineer Dashboard</span>
            </div>
          </NavLink>
          <NavLink to="/branch">
            <div className={routeStyle}>
              <FaCodeBranch className="text-xl" />
              <span>Branch</span>
            </div>
          </NavLink>
          <div>
            <ComplaintsRoute />
          </div>
          <NavLink to="/inventory">
            <div className={routeStyle}>
              <FiMonitor className="text-xl" />
              <span>Inventory</span>
            </div>
          </NavLink>
          {activeRoute && user?.power?.includes("05") && (
            <div>
              <QCRoute />
            </div>
          )}
          <div>
            <EngineerRoute />
          </div>
          {activeRoute && user?.power?.includes("06") && (
            <div>
              <QARoute />
            </div>
          )}

          {/* <NavLink to="/category">
            <div className={routeStyle}>
              <MdCategory className="text-xl" />
              <span>Category List</span>
            </div>
          </NavLink> */}
          {/* <NavLink to="/engineer">
            <div className={routeStyle}>
              <FiMonitor className="text-xl" />
              <span>Engineer</span>
            </div>
          </NavLink> */}
          {!activeRoute && (
            <div>
              <BillRoute />
            </div>
          )}
          {/* <NavLink to="/partner">
            <div className={routeStyle}>
              <IoPeople className="text-xl" />
              <span>Partner</span>
            </div>
          </NavLink> */}
          {/* <NavLink to="/principle">
            <div className={routeStyle}>
              <IoPeople className="text-xl" />
              <span>Principle</span>
            </div>
          </NavLink> */}
          {/* <NavLink to="/my-profile">
            <div className={routeStyle}>
              <FaRegCircleUser className="text-xl" />
              <span>My Profile</span>
            </div>
          </NavLink> */}
          {/* <NavLink to="/add-brand">
            <div className={routeStyle}>
              <SiBrandfolder className="text-xl" />
              <span>Add Brand</span>
            </div>
          </NavLink> */}
          {/* <NavLink to="/blog">
            <div className={routeStyle}>
              <MdEditNote className="text-xl" />
              <span>Blog</span>
            </div>
          </NavLink> */}
          {/* <NavLink to="/admin">
            <div className={routeStyle}>
              <MdAdminPanelSettings className="text-xl" />
              <span>Admin</span>
            </div>
          </NavLink> */}

          {user?.power?.includes("01") && (
            <div>
              <UsersRoute />
            </div>
          )}
          <div>
            <OthersRoute />
          </div>
          <NavLink to="/setting">
            <div className={routeStyle}>
              <IoSettingsOutline className="text-xl" />
              <span>Setting</span>
            </div>
          </NavLink>
        </div>

        {/* for login route  */}
        {/* <NavLink className="flex gap-2 items-center pb-[120px]" to="/logout">
          <div className="pl-[30px] py-2 flex  items-center gap-2">Logout</div>
        </NavLink> */}
      </div>
    </div>
  );
};

export default SideBar;
