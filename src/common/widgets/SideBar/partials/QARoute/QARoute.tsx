import { useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";
import { FiMonitor } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink } from "react-router-dom";

const routeStyle = " pt-3  flex  items-center gap-2";

const QARoute = () => {
  const [activeRoute, setActiveRoute] = useState(false);
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
        <FiMonitor className="text-xl" />
        {isExpanded ? (
          <>
            QA <IoIosArrowUp />
          </>
        ) : (
          <>
            QA <IoIosArrowDown />
          </>
        )}
      </button>
      <section className={`pl-5`} {...getCollapseProps()}>
        <NavLink to={`${activeRoute ? "/qa-items" : "/service-qa-items"}`}>
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>QA Library</span>
          </div>
        </NavLink>
        <NavLink
          to={`${activeRoute ? "/qa-my-library" : "/service-qa-my-library"}`}
        >
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>My Library</span>
          </div>
        </NavLink>
        <NavLink to={`${activeRoute ? "/qa-all" : "/service-qa-all"}`}>
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>My QA Items</span>
          </div>
        </NavLink>
      </section>
    </div>
  );
};

export default QARoute;
