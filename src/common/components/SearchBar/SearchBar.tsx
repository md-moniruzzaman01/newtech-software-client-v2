const btnStyle =
  "px-5 py-1 bg-[#0074D9] text-[#fff] border-0 text-xl rounded-sm";
const SearchBar = () => {
  return (
    <div className="px-[50px] py-5">
      <div className="flex justify-between ">
        <div className="flex items-center gap-2">
          <div>
            <input className="pl-5 py-2" type="text" placeholder="Brand Name" />
          </div>
          <div>
            <button className={btnStyle}>Search</button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <button className={btnStyle}>+ Add Complaint’s</button>
          </div>
          <div>
            <button className={btnStyle}>+ Assign to QC</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
