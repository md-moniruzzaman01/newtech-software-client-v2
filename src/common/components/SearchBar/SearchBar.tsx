import Button from "../Button";
import Input from "../Input";

const btnStyle =
  " px-5 hover:!bg-primary  !bg-[#0074D9] !text-[#fff] border-0 text-lg rounded-sm font-normal";
const SearchBar = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <div className="flex items-center gap-2">
          <Input inputName="search" inputPlaceholder="Search"></Input>

          <div>
            <Button className={btnStyle}>Search</Button>
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <div>
            <Button className={btnStyle}>+ Add Complaint’s</Button>
          </div>
          <div>
            <Button className={btnStyle}>+ Assign to QC</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
