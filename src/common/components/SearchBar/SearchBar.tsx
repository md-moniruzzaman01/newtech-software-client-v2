import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import { SearchBarProps } from "../../../shared/config/types";
import { useState } from "react";
import { useState } from "react";
import EngineersFilter from "../EngineersFilter/EngineersFilter";

const SearchBar: React.FC<SearchBarProps> = ({
  link = false,
  linkBtn = "+ Add Complaint’s",
  isDropdown = false,
  dropdown = false,
  dropdownPlaceHolder = "Assign to qc",
  filtersOptions = [],
  handleSubmit
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
      <div className="flex justify-between ">
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
          <div>
            {link ? (
              <NavLink to={`${link}`}>
                <Button primary>{linkBtn}</Button>
              </NavLink>
              <NavLink to={`${link}`}>
                <Button primary>{linkBtn}</Button>
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
          {/* <div>
            {isNeedFilter
              ? isNormalBtn && (
                  <InputFilter
                    placeholder={filterPlaceHolder}
                    Filter={FilterOptions}
                  />
                )
              : isNormalBtn && <Button primary>{normalBtn}</Button>}
          </div> */}
          {/* <div>
            {isNeedFilter
              ? isNormalBtn && (
                  <InputFilter
                    placeholder={filterPlaceHolder}
                    Filter={FilterOptions}
                  />
                )
              : isNormalBtn && <Button primary>{normalBtn}</Button>}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
