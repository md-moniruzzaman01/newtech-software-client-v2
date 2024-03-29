import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import { SearchBarProps } from "../../../shared/config/types";
import { useCallback, useState } from "react";
import EngineersFilter from "../EngineersFilter/EngineersFilter";
import { setData } from "../../../redux/features/slice/InvoiceIdsSlice/InvoiceIdsSlice";
import { useDispatch } from "react-redux";

const SearchBar: React.FC<SearchBarProps> = ({
  link = false,
  linkBtn = "+ Add Complaint’s",
  isDropdown = false,
  dropdown = false,
  dropdownPlaceHolder = "Assign to qc",
  filtersOptions = [],
  handleSubmit,
}) => {
  const [activeRoute, setActiveRoute] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setQuery = (paramName: string, paramValue: string) => {
    const queryParams = new URLSearchParams(window.location.search);
    if (paramValue === "") {
      queryParams.delete(paramName); // Remove the search parameter if paramValue is empty
      queryParams.delete("brand_name");
      queryParams.delete("category");
      queryParams.delete("sort");
      queryParams.delete("repair_status");
      queryParams.delete("branch");
    } else {
      queryParams.set(paramName, paramValue); // Set the search parameter if paramValue is not empty
    }
    navigate(`?${queryParams.toString()}`);
  };

  const handleFilter = (route: string) => {
    setQuery("search", route);

    setActiveRoute(route);
  };

  // for redux
  const handleClick = useCallback(() => {
    dispatch(setData(checkedRows));
  }, [dispatch, checkedRows]);

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
              <Button onClick={handleClick} disabled={isTrue} primary>
                {isTrue ? (
                  <span>{linkBtn}</span>
                ) : (
                  <NavLink to={`${link}`}>{linkBtn}</NavLink>
                )}
              </Button>
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
