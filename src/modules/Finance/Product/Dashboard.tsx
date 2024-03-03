import SideBar from "../../../common/widgets/SideBar/SideBar";
import BranchCommonHeader from "../../../common/components/BranchCommonHeader/BranchCommonHeader";
import {
  DemoTableHeader,
  DemoTableValue,
  FilterOptions,
} from "../../../shared/config/constaints";
import RepairCompleteCard from "../../../common/components/RepairCompleteCard/RepairCompleteCard";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import Table from "../../../common/components/Table/Table";

const Product = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(50);
  // const limit = 10;
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex-1 px-5">
        <BranchCommonHeader
          selectItems={FilterOptions}
          title="Product"
        ></BranchCommonHeader>
        <div className="grid grid-cols-3 gap-3 pt-5 ">
          <RepairCompleteCard
            bgColor="darkBlue"
            headerTitle="Total Repair warranty"
            branchTitle="2,500"
          ></RepairCompleteCard>
          <RepairCompleteCard
            bgColor="lightBlue"
            headerTitle="Total Repair Non Warranty"
            branchTitle="$ 5,500"
          ></RepairCompleteCard>
          <RepairCompleteCard
            bgColor="lightBlueColor"
            headerTitle="Total Repair Non Warranty"
            branchTitle="$ 5,500"
          ></RepairCompleteCard>
        </div>
        <div className=" pt-5">
          <div className="grid grid-cols-3 gap-5">
            <div className="overflow-x-auto pb-3 col-span-2 bg-[#FBFBFB] rounded-md">
              <h2 className="text-xl p-5 font-medium">Eng. Working Overview</h2>
              <div className="px-5">
                <Table
                  HeaderData={DemoTableHeader}
                  itemData={DemoTableValue}
                ></Table>
              </div>
              <div className="flex justify-end pt-10 pr-5">
                <Pagination></Pagination>
              </div>
            </div>
            <div className=" col-span-1 text-center">
              <RepairCompleteCard
                bgColor="shadeOfBlue"
                headerTitle="Total Repair Non Warranty"
                branchTitle="$ 5,500"
                isProduct={true}
              ></RepairCompleteCard>
              <RepairCompleteCard
                bgColor="lightBlueGreen"
                headerTitle="Total Repair Non Warranty"
                branchTitle="$ 5,500"
                isProduct={true}
              ></RepairCompleteCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
