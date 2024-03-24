import { useState } from "react";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import Button from "../../../../common/components/Button";
import TableStatus from "../../../../common/components/TableStatus/TableStatus";
import { btnValues, headerDataForCategory } from "./config/constants";
import TableWithPhoto from "../../../../common/components/TableWithPhoto/TableWithPhoto";
import Pagination from "../../../../common/widgets/Pagination/Pagination";


const CategoryList = () => {
  const [checkedRows, setCheckedRows] = useState<number[]>([]);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const handleCheckboxChange = (index: number) => {
    if (checkedRows.includes(index)) {
      setCheckedRows(checkedRows.filter((item) => item !== index));
    } else {
      setCheckedRows([...checkedRows, index]);
    }
  };

  const handleAllCheckboxChange = () => {
    const allIndexes = Array.from({ length: arr.length }, (_, i) => i);
    if (checkedRows.length === arr.length) {
      setCheckedRows([]);
    } else {
      setCheckedRows(allIndexes);
    }
  };
  return (
    <div className="px-5 relative h-full">
      <Navbar name="Category List" />

      <div className="flex gap-2 justify-end py-5">
        <NavLink to="/add-category">
          <Button mini primary>
            + Add Category
          </Button>
        </NavLink>
        <NavLink to="/add-main-category">
          <Button mini primary>
            + Add Main Category
          </Button>
        </NavLink>
      </div>

      {/* table start here  */}
      <div className="bg-solidWhite p-3">
        <div className="py-2">
          <TableStatus btnValues={btnValues} />
        </div>
        <div>
          <TableWithPhoto
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 1]}
            link="/category/add-category"
            HeaderData={headerDataForCategory}
            checkedRows={checkedRows}
            handleCheckboxChange={handleCheckboxChange}
            handleAllCheckboxChange={handleAllCheckboxChange}
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-5">
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default CategoryList;
