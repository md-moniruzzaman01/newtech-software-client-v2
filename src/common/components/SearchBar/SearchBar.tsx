import { NavLink } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import { SearchBarProps } from "../../../shared/config/types";

const SearchBar: React.FC<SearchBarProps> = ({
  link,
  linkBtn = "+ Add Complaint’s",
  normalBtn = "+ Assign to QC",
}) => {
  return (
    <div>
      <div className="flex justify-between ">
        <div className="flex items-center gap-2">
          <Input inputName="search" inputPlaceholder="Search"></Input>

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
            <Button primary>{normalBtn}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
