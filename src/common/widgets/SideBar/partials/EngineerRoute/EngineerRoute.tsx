import { useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";
import { NavLink } from "react-router-dom";
import { MdOutlineEngineering } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const routeStyle = " pt-3  flex  items-center gap-2";

const EngineerRoute = () => {
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
        <MdOutlineEngineering className="text-xl" />
        {isExpanded ? (
          <>
            Engineer Items <IoIosArrowUp />
          </>
        ) : (
          <>
            Engineer Items <IoIosArrowDown />
          </>
        )}
      </button>
      <section className={`pl-5`} {...getCollapseProps()}>
        <NavLink to={ activeRoute ? "/engineer-all-repairs" :"/service/engineer-all-repairs" }>
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>All Repairs</span>
          </div>
        </NavLink>
        <NavLink to={ activeRoute? "/engineer-my-repaired" : "/service/engineer-my-repaired"}>
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>My Repaired</span>
          </div>
        </NavLink>
        <NavLink to={ activeRoute ?"/engineer-items" : "/service/engineer-items"}>
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>Engineer Library</span>
          </div>
        </NavLink>

        <NavLink to={ activeRoute? "/engineer-my-library" : "/service/engineer-my-library"}>
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>My Library</span>
          </div>
        </NavLink>
      </section>
    </div>
  );
};

export default EngineerRoute;
