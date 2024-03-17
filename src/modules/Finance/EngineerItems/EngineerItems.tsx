import Navbar from "../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../common/components/SearchBar/SearchBar";
import TableWithPhoto from "../../../common/components/TableWithPhoto/TableWithPhoto";
import { DemoTableHeader } from "../../../shared/config/constaints";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import TableStatus from "../../../common/components/TableStatus/TableStatus";
import { EngineerTableBtnValue } from "./config/constants";
import { useState } from "react";

const EngineerItems = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(50);
  // const limit = 10;

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
    <div className="px-5">
      <Navbar name={"Engineer Items"}></Navbar>
      <div className="py-5">
        <SearchBar
          isNeedFilter
          isDropdown
          isNormalBtn
          filterPlaceHolder="+ Assign Engineer"
          linkBtn="+ Delivered to Desk"
          normalBtn="+ Assign Engineer"
          dropdown={checkedRows?.length > 0 ? false : true}
        />
      </div>
      <div className="bg-[#FBFBFB] p-5 space-y-3">
        <TableStatus btnValues={EngineerTableBtnValue} />
        <div className="  rounded-t-md ">
          <TableWithPhoto
            HeaderData={DemoTableHeader}
            link="/engineer-items/order-details"
            checkedRows={checkedRows}
            handleCheckboxChange={handleCheckboxChange}
            handleAllCheckboxChange={handleAllCheckboxChange}
            data={arr}
          />
          <div className="absolute bottom-2 right-[50px]">
            <Pagination></Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineerItems;
