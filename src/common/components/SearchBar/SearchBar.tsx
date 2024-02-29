import { NavLink } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import { SearchBarProps } from "../../../shared/config/types";
import InputFilter from "../InputFilter/InputFilter";
import { FilterOptions } from "../../../shared/config/constaints";

const SearchBar: React.FC<SearchBarProps> = ({
  link,
  linkBtn = "+ Add Complaint’s",
  normalBtn = "+ Assign to QC",
  isNeedFilter = false,
  filterPlaceHolder,
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
              <Button primary>{linkBtn}</Button>
            )}
          </div>
          <div>
            {isNeedFilter ? (
              <InputFilter
                placeholder={filterPlaceHolder}
                Filter={FilterOptions}
              />
            ) : (
              <Button primary>{normalBtn}</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
