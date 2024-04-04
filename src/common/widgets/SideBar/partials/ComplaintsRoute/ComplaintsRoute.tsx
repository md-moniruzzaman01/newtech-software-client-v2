import { useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineEventNote } from "react-icons/md";
import { NavLink } from "react-router-dom";

const routeStyle = " pt-3  flex  items-center gap-2";

const ComplaintsRoute = () => {
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
        <MdOutlineEventNote className="text-xl" />

        {isExpanded ? (
          <>
            Complaints <IoIosArrowUp />
          </>
        ) : (
          <>
            Complaints <IoIosArrowDown />
          </>
        )}
      </button>
      <section className={`pl-5`} {...getCollapseProps()}>
        <NavLink
          to={`${activeRoute ? "/add-warranty-complaint" : "/add-complaint"}`}
        >
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>Add Complaints</span>
          </div>
        </NavLink>
        <NavLink to={`/${activeRoute ? "complaints" : "complaints-service"}`}>
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>Complaints List</span>
          </div>
        </NavLink>
        <NavLink
          to={`${activeRoute ? "/my-complaints" : "/my-complaints-service"}`}
        >
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>My Complaints</span>
          </div>
        </NavLink>
        <NavLink
          to={`${
            activeRoute
              ? "/complaints-delivered"
              : "/complaints-delivery-service"
          }`}
        >
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>Complaints Delivered</span>
          </div>
        </NavLink>

        {activeRoute && (
          <NavLink to="/buffers">
            <div className={routeStyle}>
              <span>&#8618;</span>
              <span>Buffers</span>
            </div>
          </NavLink>
        )}
      </section>
    </div>
  );
};

export default ComplaintsRoute;
