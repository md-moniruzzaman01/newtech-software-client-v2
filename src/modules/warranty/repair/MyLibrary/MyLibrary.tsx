
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import TableStatus from "../../../../common/components/TableStatus/TableStatus";
import TableWithPhoto from "../../../../common/components/TableWithPhoto/TableWithPhoto";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { DemoTableHeader } from "../../../../shared/config/constaints";
import { LibraryTableBtnValue } from "./config/constants";
import { useState } from "react";

const MyLibrary = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(50);
  // const limit = 10;
  const [checkedRows, setCheckedRows] = useState<number[]>([]);
  const arr = [1, 2, 2, 3, 4, 5, 6, 7, 8];

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
    <div className="px-5">
      <Navbar name={"My Library"}></Navbar>
      <div className="py-5">
        <SearchBar isNeedFilter />
      </div>
      <div className="bg-[#FBFBFB] p-5 space-y-3">
        <TableStatus btnValues={LibraryTableBtnValue} />
        <div className="  rounded-t-md ">
          <TableWithPhoto
            HeaderData={DemoTableHeader}
            link="/engineer-items/order-details"
            checkedRows={checkedRows}
            handleCheckboxChange={handleCheckboxChange}
            handleAllCheckboxChange={handleAllCheckboxChange}
            data={arr} // Passing the function to handle all checkbox change
          ></TableWithPhoto>
          <div className="absolute bottom-2 right-[50px]">
            <Pagination></Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;
