import { useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";
import { NavLink } from "react-router-dom";
import { RiBillLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const routeStyle = " pt-3  flex  items-center gap-2";

const BillRoute = () => {
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
        <RiBillLine className="text-xl" />

        {isExpanded ? (
          <>
            Bill <IoIosArrowUp />
          </>
        ) : (
          <>
            Bill <IoIosArrowDown />
          </>
        )}
      </button>
      <section className={`pl-5`} {...getCollapseProps()}>
        <NavLink to="/bill-list">
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>Bill List</span>
          </div>
        </NavLink>
        <NavLink to="/create-bill">
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>Create a Bill</span>
          </div>
        </NavLink>
        <NavLink to={`/bill-pending`}>
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>Bill Pending</span>
          </div>
        </NavLink>
      </section>
    </div>
  );
};

export default BillRoute;
