import Navbar from "../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../common/components/SearchBar/SearchBar";
import TableWithPhoto from "../../../common/components/TableWithPhoto/TableWithPhoto";
import { DemoTableHeader } from "../../../shared/config/constaints";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import TableStatus from "../../../common/components/TableStatus/TableStatus";
import { EngineerTableBtnValue } from "./config/constants";

const EngineerItems = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(50);
  // const limit = 10;
  return (
    <div className="px-5">
      <Navbar name={"Engineer Items"}></Navbar>
      <div className="py-5">
        <SearchBar
          isNeedFilter
          isLinkBtn
          isNormalBtn
          filterPlaceHolder="+ Assign Engineer"
          linkBtn="+ Delivered to Desk"
          normalBtn="+ Assign Engineer"
        />
      </div>
      <div className="bg-[#FBFBFB] p-5 space-y-3">
        <TableStatus btnValues={EngineerTableBtnValue} />
        <div className="  rounded-t-md ">
          <TableWithPhoto
            HeaderData={DemoTableHeader}
            link="/engineer-items/order-details"
          ></TableWithPhoto>
          <div className="absolute bottom-2 right-[50px]">
            <Pagination></Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineerItems;
