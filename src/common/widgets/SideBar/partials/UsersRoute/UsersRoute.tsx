import { useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";
import { FaUsersLine } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink } from "react-router-dom";

const routeStyle = " pt-3  flex  items-center gap-2";

const UsersRoute = () => {
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
        <FaUsersLine className="text-xl" />
        {isExpanded ? (
          <>
            Users <IoIosArrowUp />
          </>
        ) : (
          <>
            Users <IoIosArrowDown />
          </>
        )}
      </button>
      <section className={`pl-5`} {...getCollapseProps()}>
        <NavLink to="/partner">
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>Partner</span>
          </div>
        </NavLink>
        <NavLink to="/principle">
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>Principle</span>
          </div>
        </NavLink>
        <NavLink to={`/admin`}>
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>Admin</span>
          </div>
        </NavLink>
      </section>
    </div>
  );
};

export default UsersRoute;
