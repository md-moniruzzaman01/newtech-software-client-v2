import { NavLink } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import { SearchBarProps } from "../../../shared/config/types";
import InputFilter from "../InputFilter/InputFilter";
import {
  FilterOptions,
  FilterOptions2,
} from "../../../shared/config/constaints";

const SearchBar: React.FC<SearchBarProps> = ({
  link = false,
  linkBtn = "+ Add Complaint’s",
  normalBtn = "+ Assign to QC",
  isNeedFilter = false,
  filterPlaceHolder,
  isDropdown = false,
  isNormalBtn = false,
  dropdown = false,
}) => {
  return (
    <div>
      <div className="flex justify-between ">
        <div className="flex items-center gap-2">
          <Input inputName="search" inputPlaceholder="Search" />

          <div>
            <Button primary>Search</Button>
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <div>
            {link ? (
              <NavLink to={`${link}`}>
                <Button primary>{linkBtn}</Button>
              </NavLink>
            ) : (
              isDropdown && (
                <InputFilter IsDisabled={dropdown} Filter={FilterOptions2} />
              )
            )}
          </div>
          <div>
            {isNeedFilter
              ? isNormalBtn && (
                  <InputFilter
                    placeholder={filterPlaceHolder}
                    Filter={FilterOptions}
                  />
                )
              : isNormalBtn && <Button primary>{normalBtn}</Button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
