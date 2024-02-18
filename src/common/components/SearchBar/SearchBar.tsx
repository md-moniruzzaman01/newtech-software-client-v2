const btnStyle =
  "btn min-h-0 h-10 px-5 hover:bg-primary  bg-[#0074D9] text-[#fff] border-0 text-lg rounded-sm font-normal";
const SearchBar = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <div className="flex items-center gap-2">
          <div>
            <input className="pl-5 py-2" type="text" placeholder="Brand Name" />
          </div>
          <div>
            <button className={btnStyle}>Search</button>
          </div>
        </div>
        <div className="flex items-center gap-2 ">
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
