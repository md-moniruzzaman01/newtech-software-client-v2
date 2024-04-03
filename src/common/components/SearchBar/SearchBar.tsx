import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import { SearchBarProps } from "../../../shared/config/types";
import { useState } from "react";
import EngineersFilter from "../EngineersFilter/EngineersFilter";

const SearchBar: React.FC<SearchBarProps> = ({
  link = false,
  linkBtn = "+ Add Complaint’s",
  isDropdown = false,
  dropdown = false,
  dropdownPlaceHolder = "Assign to qc",
  filtersOptions = [],
  handleSubmit,
  handleDelivery,
  handleDelete,
  handleReturn,
  isMiddleBtn = false,
  disabled = false,
  checkedRows,
}) => {
  const [activeRoute, setActiveRoute] = useState("");
  const navigate = useNavigate();

  const setQuery = (paramName: string, paramValue: string) => {
    const queryParams = new URLSearchParams(window.location.search);
    if (paramValue === "") {
      queryParams.delete(paramName);
      queryParams.delete("brand_name");
      queryParams.delete("category");
      queryParams.delete("sort");
      queryParams.delete("repair_status");
      queryParams.delete("branch");
    } else {
      queryParams.set(paramName, paramValue);
    }
    navigate(`?${queryParams.toString()}`);
  };

  const handleFilter = (route: string) => {
    setQuery("search", route);
    setActiveRoute(route);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Input
            value={activeRoute}
            onChange={(e) => setActiveRoute(e.target.value)}
            inputName="search"
            inputPlaceholder="Search"
          />

          <div>
            <Button onClick={() => handleFilter(activeRoute)} primary>
              Search
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 ">
          {isMiddleBtn && (
            <div className="flex gap-2">
              <Button disabled={disabled} mini primary onClick={handleDelivery}>
                Delivery
              </Button>
              <Button disabled={disabled} onClick={handleReturn} mini primary>
                Return
              </Button>
              <Button disabled={disabled} onClick={handleDelete} mini danger>
                Delete
              </Button>
            </div>
          )}
          <div>
            {link ? (
              <NavLink to={`${link}`}>
                <Button
                  disabled={(checkedRows && checkedRows?.length <= 0) || false}
                  primary
                >
                  {linkBtn}
                </Button>
              </NavLink>
            ) : (
              isDropdown && (
                <EngineersFilter
                  IsDisabled={dropdown}
                  placeholder={dropdownPlaceHolder}
                  Filter={filtersOptions}
                  handleSubmit={handleSubmit}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
