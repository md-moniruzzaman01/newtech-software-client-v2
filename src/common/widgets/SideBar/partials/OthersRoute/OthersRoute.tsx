import { useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";
import { NavLink } from "react-router-dom";
import { BsMotherboard } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const routeStyle = " pt-3  flex  items-center gap-2";

const OthersRoute = () => {
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
        <BsMotherboard className="text-xl" />
        {isExpanded ? (
          <>
            Others <IoIosArrowUp />
          </>
        ) : (
          <>
            Others <IoIosArrowDown />
          </>
        )}
      </button>
      <section className={`pl-5`} {...getCollapseProps()}>
        <NavLink to="/category">
          <div className={routeStyle}>
            <span>&#8618;</span>
            <span>Category List</span>
          </div>
        </NavLink>
      </section>
    </div>
  );
};

export default OthersRoute;
