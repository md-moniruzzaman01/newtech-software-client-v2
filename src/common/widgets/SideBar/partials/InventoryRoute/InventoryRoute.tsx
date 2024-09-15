import { useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";
import { FiMonitor } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { getUserInfo } from "../../../../../services/auth.service";

const routeStyle = " pt-3  flex  items-center gap-2";

const InventoryRoute = () => {
  const [activeRoute, setActiveRoute] = useState(false);
  const storedActiveRoute = localStorage.getItem("activeRoute");
  const user = getUserInfo();
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
        <FiMonitor className="text-xl" />
        {isExpanded ? (
          <>
            Inventory <IoIosArrowUp />
          </>
        ) : (
          <>
            Inventory <IoIosArrowDown />
          </>
        )}
      </button>
      <section className={`pl-5`} {...getCollapseProps()}>
        {(user?.power?.includes("01") ||
          user?.power?.includes("04") ||
          user?.role === "admin") && (
          <NavLink to="/inventory">
            <div className={routeStyle}>
              <span>&#8618;</span>
              <span>Inventory</span>
            </div>
          </NavLink>
        )}

        {activeRoute && (
          <NavLink to={"/part-request"}>
            <div className={routeStyle}>
              <span>&#8618;</span>
              <span>Part Request</span>
            </div>
          </NavLink>
        )}

        {activeRoute && (
          <NavLink to={"/good-parts"}>
            <div className={routeStyle}>
              <span>&#8618;</span>
              <span>Good Parts</span>
            </div>
          </NavLink>
        )}

        {activeRoute && (
          <NavLink to={"/swap"}>
            <div className={routeStyle}>
              <span>&#8618;</span>
              <span>Swap</span>
            </div>
          </NavLink>
        )}

        {activeRoute && (
          <NavLink to={"/bad-parts"}>
            <div className={routeStyle}>
              <span>&#8618;</span>
              <span>Bad Parts</span>
            </div>
          </NavLink>
        )}

        {activeRoute && (
          <NavLink to={"/scrap"}>
            <div className={routeStyle}>
              <span>&#8618;</span>
              <span>Scrap</span>
            </div>
          </NavLink>
        )}

        {activeRoute && (
          <NavLink to={"/export-parts"}>
            <div className={routeStyle}>
              <span>&#8618;</span>
              <span>Export Parts</span>
            </div>
          </NavLink>
        )}
      </section>
    </div>
  );
};

export default InventoryRoute;
