import { useState } from "react";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import TableWithPhoto from "../../../../common/components/TableWithPhoto/TableWithPhoto";
import { DemoTableHeader } from "../../../../shared/config/constaints";
import Pagination from "../../../../common/widgets/Pagination/Pagination";

const Qc = () => {
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
      <Navbar name={"QC"}></Navbar>
      <div className="py-5">
        <SearchBar
          linkBtn="+ Delivered to Desk"
          normalBtn="+ Assign Engineer"
        ></SearchBar>
      </div>
      <div className="bg-[#FBFBFB] p-3">
        <div className="  rounded-t-md ">
          <TableWithPhoto
            HeaderData={DemoTableHeader}
            link="/qc/order-details"
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

export default Qc;
