import Button from "../Button";
import { useState } from "react";
import { TableStatusProps } from "./config/types";
import { useNavigate } from "react-router-dom";

const TableStatus: React.FC<TableStatusProps> = ({ btnValues }) => {
  const [activeRoute, setActiveRoute] = useState("");

  const navigate = useNavigate();

  const setQuery = (paramName: string, paramValue: string) => {
    const queryParams = new URLSearchParams(window.location.search);
    if (paramValue === "") {
      queryParams.forEach((value, key) => {
        queryParams.delete(key);
      });
    } else {
      queryParams.set(paramName, paramValue); // Set the search parameter if paramValue is not empty
    }
    navigate(`?${queryParams.toString()}`);
  };

  const handleFilter = (route: string) => {
    setQuery("repair-status", route);

    setActiveRoute(route);
  };

  function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        <Button
          status
          className={activeRoute === "" ? "!bg-grayForBorder  " : ""}
          onClick={() => handleFilter("")}
        >
          All
        </Button>
        {btnValues?.map((btnValue, index) => (
          <Button
            key={index}
            status
            className={
              activeRoute === `${btnValue}` ? "!bg-grayForBorder  " : ""
            }
            onClick={() => handleFilter(btnValue)}
          >
            {capitalize(btnValue)}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TableStatus;
