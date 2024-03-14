import Button from "../Button";
import { useState } from "react";
import { TableStatusProps } from "./config/types";

const TableStatus: React.FC<TableStatusProps> = ({ btnValues }) => {
  const [activeRoute, setActiveRoute] = useState("/all");

  const handleFilter = (route: string) => {
    setActiveRoute(route);
  };

  function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {btnValues?.map((btnValue, index) => (
          <Button
            key={index}
            status
            className={
              activeRoute === `/${btnValue}` ? "!bg-grayForBorder  " : ""
            }
            onClick={() => handleFilter(`/${btnValue}`)}
          >
            {capitalize(btnValue)}
          </Button>
        ))}
        {/* <Button
          status
          className={
            activeRoute === "/order-out/processing" ? "!bg-grayForBorder  " : ""
          }
          onClick={() => handleFilter("/order-out/processing")}
        >
          Processing
        </Button>
        <Button
          status
          className={
            activeRoute === "/order-out/received" ? "!bg-grayForBorder  " : ""
          }
          onClick={() => handleFilter("/order-out/received")}
        >
          Received
        </Button>
        <Button
          status
          className={
            activeRoute === "/order-out/delivered" ? "!bg-grayForBorder  " : ""
          }
          onClick={() => handleFilter("/order-out/delivered")}
        >
          Delivered
        </Button>
        <Button
          status
          className={
            activeRoute === "/order-out/cancel" ? "!bg-grayForBorder  " : ""
          }
          onClick={() => handleFilter("/order-out/cancel")}
        >
          Cancel
        </Button> */}
      </div>
    </div>
  );
};

export default TableStatus;
