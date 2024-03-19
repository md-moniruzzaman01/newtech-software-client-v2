import { useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";
import { NavLink } from "react-router-dom";
import { FiMonitor } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const routeStyle = " pt-3  flex  items-center gap-2";

const QCRoute = () => {
  const [activeRoute, setActiveRoute] = useState(false);
  const storedActiveRoute = localStorage.getItem("activeRoute");
  useEffect(() => {
    if (storedActiveRoute) {
      setActiveRoute(JSON.parse(storedActiveRoute));
    }
  }, [storedActiveRoute]);
  console.log(activeRoute);
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
            QC <IoIosArrowUp />
          </>
        ) : (
          <>
            QC <IoIosArrowDown />
          </>
        )}
      </button>
      <section className={`pl-5`} {...getCollapseProps()}>
        <NavLink to="/qc-my-library">
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>My Library</span>
          </div>
        </NavLink>
        <NavLink to="/qc">
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>QC Library</span>
          </div>
        </NavLink>
        <NavLink to={`/qc-my-items`}>
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>My QC Items</span>
          </div>
        </NavLink>
      </section>
    </div>
  );
};

export default QCRoute;
