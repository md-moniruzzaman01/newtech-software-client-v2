import { useEffect, useState } from "react";
import Button from "../../../../common/components/Button";
import { useLocation } from "react-router-dom";

const InventoryApproveStatusGroup = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const handleFilter = (route: string) => {
    setActiveRoute(route);
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 flex-wrap">
        <Button
          status
          mini
          className={`${activeRoute === "/all" ? "!bg-lightGray  " : ""}`}
          onClick={() => handleFilter("/all")}
        >
          All
        </Button>
        <Button
          status
          mini
          className={activeRoute === "/new" ? "!bg-lightGray  " : ""}
          onClick={() => handleFilter("/new")}
        >
          New
        </Button>
        <Button
          status
          mini
          className={
            activeRoute === "/inventory/Stock" ? "!bg-lightGray  " : ""
          }
          onClick={() => handleFilter("/inventory/Stock")}
        >
          Approve
        </Button>
        <Button
          status
          mini
          className={activeRoute === "/delivery" ? "!bg-lightGray  " : ""}
          onClick={() => handleFilter("/delivery")}
        >
          Reject
        </Button>
        <Button
          status
          mini
          className={activeRoute === "/buffer" ? "!bg-lightGray  " : ""}
          onClick={() => handleFilter("/buffer")}
        >
          Delivery
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default InventoryApproveStatusGroup;
