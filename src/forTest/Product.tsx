import { useState } from "react";
import BranchHeader from "../common/components/BranchHeader/BranchHeader";
import RepairCompleteCard from "../common/components/RepairCompleteCard/RepairCompleteCard";
import Pagination from "../common/widgets/Pagination/Pagination";
import SideBar from "../common/widgets/SideBar/SideBar";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(50);
  const limit = 10;
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex-1 ">
        <BranchHeader name={"Product"}></BranchHeader>
        <div className="grid grid-cols-3  pt-5 px-[50px] ">
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
        <div className="px-[50px] pt-5">
          <div className="grid grid-cols-3 gap-5">
            <div className="overflow-x-auto pb-3 col-span-2 bg-[#FBFBFB] rounded-md">
              <h2 className="text-xl p-5 font-medium">Eng. Working Overview</h2>
              <table className="table ">
                {/* head */}
                <thead className="bg-[#BDD5E7] text-black">
                  <tr>
                    <th>Date</th>
                    <th>Branch</th>
                    <th>Issue By</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>Branch 1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-end pt-10 pr-5">
                <Pagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalItems={totalItems}
                  limit={limit}
                ></Pagination>
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
