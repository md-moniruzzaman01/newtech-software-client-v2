import { useState } from "react";
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
import Button from "../../../common/components/Button";
import Input from "../../../common/components/Input";
import InputFilter from "../../../common/components/InputFilter/InputFilter";

const Withdraw = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(50);
  const limit = 10;
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex-1 px-5">
        <BranchCommonHeader
          selectItems={FilterOptions}
          title="Withdraw"
        ></BranchCommonHeader>
        <div className="grid grid-cols-2 gap-3 pt-5  ">
          <RepairCompleteCard
            bgColor="lightGreen"
            headerTitle="Total Repair warranty"
            branchTitle="2,500"
            isWithdraw={true}
          ></RepairCompleteCard>
          <RepairCompleteCard
            bgColor="lightBlueColor"
            headerTitle="Total Repair Non Warranty"
            branchTitle="$ 5,500"
            isWithdraw={true}
          ></RepairCompleteCard>
        </div>
        <div className=" pt-5">
          <div className="grid grid-cols-3 gap-5">
            <div className="overflow-x-auto pb-3 col-span-2 bg-[#FBFBFB] rounded-md">
              <h2 className="text-xl p-5 font-medium">Withdraw Overview</h2>
              <div className="px-5">
                <Table
                  HeaderData={DemoTableHeader}
                  itemData={DemoTableValue}
                ></Table>
              </div>
              <div className="flex justify-end pt-10 pr-5">
                <Pagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalItems={totalItems}
                  limit={limit}
                ></Pagination>
              </div>
            </div>
            <div className="col-span-1 bg-[#FBFBFB] rounded-md text-center">
              <h2 className="text-xl font-medium  py-5">Withdraw Method</h2>
              <hr className="mx-10" />
              <h2 className="font-bold text-xl pt-5 pb-2">$ 5,0000</h2>
              <p>Show Branch Amount</p>
              <div className=" space-y-3 my-5 w-10/12 mx-auto">
                <InputFilter Filter={FilterOptions}></InputFilter>
                <Input></Input>
                <Input></Input>
                <InputFilter Filter={FilterOptions}></InputFilter>

                <div>
                  <Button className=" !bg-btn_secondary text-white w-full">
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
