import { useState } from "react";
import SideBar from "../common/widgets/SideBar/SideBar";
import BranchHeader from "../common/components/BranchHeader/BranchHeader";
import { IoMdEye } from "react-icons/io";
import Pagination from "../common/widgets/Pagination/Pagination";
import RepairCompleteCard from "../common/components/RepairCompleteCard/RepairCompleteCard";

const Withdraw = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(50);
  const limit = 10;
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex-1 ">
        <BranchHeader name={"Discount Amount"}></BranchHeader>
        <div className="grid grid-cols-2  pt-5 px-[50px] ">
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
        <div className="px-[50px] pt-5">
          <div className="grid grid-cols-3 gap-5">
            <div className="overflow-x-auto pb-3 col-span-2 bg-[#FBFBFB] rounded-md">
              <h2 className="text-xl p-5 font-medium">Withdraw Overview</h2>
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
            <div className="col-span-1 bg-[#FBFBFB] rounded-md text-center">
              <h2 className="text-xl font-medium  py-5">Withdraw Method</h2>
              <hr className="mx-10" />
              <h2 className="font-bold text-xl pt-5 pb-2">$ 5,0000</h2>
              <p>Show Branch Amount</p>
              <div className="w-full space-y-3 my-5">
                <select
                  className="select select-bordered join-item ml-0 w-10/12"
                  defaultValue={""}
                >
                  <option value="all">Branch Name</option>
                  <option value="desc">Latest</option>
                  <option value="asc">Oldest</option>
                </select>
                <input
                  type="text"
                  placeholder="Issue By"
                  className="input input-bordered max-w-xs placeholder-black w-[313px]"
                />
                <input
                  type="text"
                  placeholder="Amount"
                  className="input input-bordered max-w-xs placeholder-black w-[313px]"
                />
                <select
                  className="select select-bordered join-item ml-0 w-10/12"
                  defaultValue={""}
                >
                  <option value="all">Withdraw Method</option>
                  <option value="desc">Latest</option>
                  <option value="asc">Oldest</option>
                </select>
                <div>
                  <button className="btn bg-[#253275] text-white w-10/12">
                    Continue
                  </button>
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
