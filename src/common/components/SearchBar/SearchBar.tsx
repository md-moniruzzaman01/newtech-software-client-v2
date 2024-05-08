import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import { SearchBarProps } from "../../../shared/config/types";
import { useState } from "react";
import EngineersFilter from "../EngineersFilter/EngineersFilter";
import { getUserInfo } from "../../../services/auth.service";

const SearchBar: React.FC<SearchBarProps> = ({
  link,
  fnBtn = false,
  linkValue,
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
  handleBillGenerate,
  generateBtnLoading,
  isMiddleBtnActive = "",
  isDeliveryLoading = false,
  isReturnLoading = false,
  isDeleteLoading = false,
}) => {
  const [activeRoute, setActiveRoute] = useState("");
  const navigate = useNavigate();
  const user = getUserInfo();

  const setQuery = (paramName: string, paramValue: string) => {
    const queryParams = new URLSearchParams(window.location.search);
    if (paramValue === "") {
      queryParams.delete(paramName);
      queryParams.delete("searchTerm");
      queryParams.delete("brand_name");
      queryParams.delete("category_name");
      queryParams.delete("sort");
      queryParams.delete("repair_status");
      queryParams.delete("branch");
      queryParams.delete("start_Date");
      queryParams.delete("end_Date");
    } else {
      queryParams.set(paramName, paramValue);
    }
    navigate(`?${queryParams.toString()}`);
  };

  const handleFilter = (route: string) => {
    setQuery("searchTerm", route);
    setActiveRoute(route);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Input
            value={activeRoute}
            onChange={(e) => setActiveRoute(e.target.value)}
            inputName="searchTerm"
            inputPlaceholder="searchTerm"
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
              {isMiddleBtnActive === "Completed" && handleDelivery && (
                <Button
                  disabled={disabled}
                  mini
                  primary
                  loading={isDeliveryLoading}
                  onClick={handleDelivery}
                >
                  Delivery
                </Button>
              )}
              {isMiddleBtnActive === "Pending" && (
                <Button
                  disabled={disabled}
                  loading={isReturnLoading}
                  onClick={handleReturn}
                  mini
                  primary
                >
                  Return
                </Button>
              )}
              {handleDelete && user?.role === "admin" && (
                <Button
                  loading={isDeleteLoading}
                  disabled={disabled}
                  onClick={handleDelete}
                  mini
                  danger
                >
                  Delete
                </Button>
              )}
            </div>
          )}
          <div>
            {link ? (
              <NavLink to={linkValue}>
                <Button
                  loading={generateBtnLoading}
                  onClick={handleBillGenerate}
                  disabled={(checkedRows && checkedRows?.length <= 0) || false}
                  primary
                >
                  {linkBtn}
                </Button>
              </NavLink>
            ) : (
              fnBtn && (
                <Button
                  loading={generateBtnLoading}
                  onClick={handleBillGenerate}
                  disabled={(checkedRows && checkedRows?.length <= 0) || false}
                  primary
                >
                  {linkBtn}
                </Button>
              )
            )}
            {isDropdown && (
              <EngineersFilter
                IsDisabled={dropdown}
                placeholder={dropdownPlaceHolder}
                Filter={filtersOptions}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
