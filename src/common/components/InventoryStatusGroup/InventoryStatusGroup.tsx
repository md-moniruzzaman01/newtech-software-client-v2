import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button";
import { useEffect, useState } from "react";

const InventoryStatusGroup = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);
  const navigate = useNavigate();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const handleFilter = (route: string) => {
    setActiveRoute(route);
    navigate(route);

    // You can perform additional actions based on the route, such as updating the URL
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 flex-wrap">
        <Button
          status
          className={activeRoute === "/inventory" ? "!bg-lightGray  " : ""}
          onClick={() => handleFilter("/inventory")}
        >
          Overview
        </Button>
        <Button
          status
          className={
            activeRoute === "/inventory/request" ? "!bg-lightGray  " : ""
          }
          onClick={() => handleFilter("/inventory/request")}
        >
          Requisitions
        </Button>
        <Button
          status
          className={
            activeRoute === "/inventory/Stock" ? "!bg-lightGray  " : ""
          }
          onClick={() => handleFilter("/inventory/Stock")}
        >
          Stock
        </Button>
        <Button
          status
          className={
            activeRoute === "/inventory/approve" ? "!bg-lightGray  " : ""
          }
          onClick={() => handleFilter("/inventory/approve")}
        >
          Approve
        </Button>
        <Button
          status
          className={
            activeRoute === "/inventory/rejected" ? "!bg-lightGray  " : ""
          }
          onClick={() => handleFilter("/inventory/rejected")}
        >
          Rejected
        </Button>
        <Button
          status
          className={activeRoute === "/buffer" ? "!bg-lightGray  " : ""}
          onClick={() => handleFilter("/buffer")}
        >
          Part Return
        </Button>
        <Button
          status
          className={activeRoute === "/good-product" ? "!bg-lightGray  " : ""}
          onClick={() => handleFilter("/good-product")}
        >
          Scrap
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default InventoryStatusGroup;
