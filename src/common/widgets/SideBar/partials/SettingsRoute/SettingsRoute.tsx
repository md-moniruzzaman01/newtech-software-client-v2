import { useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { getUserInfo } from "../../../../../services/auth.service";

const routeStyle = " pt-3  flex  items-center gap-2";

const SettingsRoute = () => {
  const [activeRoute, setActiveRoute] = useState(false);
  const user = getUserInfo();
  console.log(user);
  const storedActiveRoute = localStorage.getItem("activeRoute");
  useEffect(() => {
    if (storedActiveRoute) {
      setActiveRoute(JSON.parse(storedActiveRoute));
    }
  }, [storedActiveRoute]);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div
      className={`pl-[30px] py-2 ${
        isExpanded && activeRoute && "bg-sideBarService"
      } ${
        !activeRoute && isExpanded && "bg-shadeOfBlueDark"
      } font-semibold text-solidWhite`}
    >
      <button className="flex gap-3 items-center" {...getToggleProps()}>
        <IoSettingsOutline className="text-xl" />
        {isExpanded ? (
          <>
            Settings <IoIosArrowUp />
          </>
        ) : (
          <>
            Settings <IoIosArrowDown />
          </>
        )}
      </button>
      <section className={`pl-5`} {...getCollapseProps()}>
        {user?.role === "admin" && (
          <NavLink to="/change-password">
            <div className={routeStyle}>
              <span>&#8618;</span>
              <span>Change Password</span>
            </div>
          </NavLink>
        )}
        <NavLink to="/send-message">
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>Send Message</span>
          </div>
        </NavLink>
        <NavLink to="/send-email">
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>Send Email</span>
          </div>
        </NavLink>
      </section>
    </div>
  );
};

export default SettingsRoute;
